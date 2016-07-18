/* global define*/
define([
    "sprintf",
    'tiny-lib/angular',
    'tiny-lib/jquery',
    'tiny-lib/underscore',
    "app/services/httpService",
    'tiny-common/UnifyValid',
    'app/services/validatorService',
    "app/business/network/services/vlb/vlbService",
    'app/services/exceptionService',
    "language/keyID",
    "fixtures/ecsFixture",
    "tiny-directives/Button"
],
    function (sprintf, angular, $, _, http, UnifyValid, validatorService, vlbService, exception, i18n) {
        "use strict";
        var ctrl = ["$scope", "$compile", "camel", "$q", "exception",
            function ($scope, $compile, camel, $q, exception) {
                i18n.sprintf = sprintf.sprintf;
                $scope.i18n = i18n;
                var vlbServiceInst = new vlbService(exception, $q, camel);
                // 待修改对象
                var bindVmWinDom = $("#bindingVmWindowId");
                var winWidget = bindVmWinDom.widget();
                var condition = winWidget.option("condition");
                var cloudInfraId = winWidget.option("cloudInfra");
                var user = winWidget.option("user");
                var vpcId = winWidget.option("vpcId");

                // 搜索字符串
                var searchString = "";

                // 当前页码信息
                var page = {
                    "currentPage": 1,
                    "displayLength": 10,
                    "getStart": function () {
                        return page.currentPage === 0 ? 0 : (page.currentPage - 1) * page.displayLength;
                    }
                };

                $scope.close = function () {
                    bindVmWinDom.widget().destroy();
                };

                $scope.searchBox = {
                    "id": "ecsVmsSearchBox",
                    "placeholder": i18n.common_term_findName_prom,
                    "width": "250",
                    "suggest-size": 10,
                    "maxLength": 64,
                    "suggest": function (content) {
                    },
                    "search": function (content) {
                        searchString = content;
                        page.currentPage = 1;
                        getVmsNics();
                    }
                };

                $scope.bindVmTable = {
                    "id": "bindVmsTable",
                    "captain": "vmCaptain",
                    "paginationStyle": "full_numbers",
                    "lengthMenu": [10, 20, 50],
                    "displayLength": 10,
                    "totalRecords": 0,
                    "draggable": true,
                    "columns": getTableColumns(),
                    "data": [],
                    "callback": function (evtObj) {
                        page.currentPage = evtObj.currentPage;
                        page.displayLength = evtObj.displayLength;
                        getVmsNics();
                    },
                    "changeSelect": function (evtObj) {
                        page.currentPage = evtObj.currentPage;
                        page.displayLength = evtObj.displayLength;
                        getVmsNics();
                    },
                    "renderRow": function (nRow, aData, iDataIndex) {
                        var ipCheckScope = $scope.$new();
                        if (!aData.ip) {
                            return;
                        }
                        var length = aData.ip.length;
                        for (var k = 0; k < length; k++) {
                            ipCheckScope["id" + k] = "ipCheckBox" + iDataIndex + k;
                        }
                        ipCheckScope.change = function (i) {
                            aData.ip[i].checked = $("#" + ipCheckScope["id" + i]).widget().option("checked");
                            $scope.bindVmTable.data[iDataIndex].ip = aData.ip;
                        };

                        var ipCheckDom = "";
                        for (var i = 0; i < aData.ip.length; i++) {
                            ipCheckDom += "<div><tiny-checkbox id='id" + i;
                            ipCheckDom += "' checked=" + aData.ip[i].checked;
                            ipCheckDom += " change='change(" + i + ")'></tiny-checkbox>" + aData.ip[i].ip + "</div>";
                        }
                        var ipCheckLink = $compile(ipCheckDom);
                        var ipCheckNode = ipCheckLink(ipCheckScope);

                        $("td:eq(1)", nRow).html(ipCheckNode);

                        var weight = "<div><tiny-textbox id='weightId' value='weightValue' validate='validate' change='changeWeight()'></tiny-textbox></div>";
                        ipCheckScope.weightId = "weight" + iDataIndex;
                        ipCheckScope.weightValue = aData.weight;
                        ipCheckScope.validate = "required:" + i18n.common_term_null_valid + ";integer:" + i18n.sprintf(i18n.common_term_rangeInteger_valid, "0", "256") + ";minValue(0):" + i18n.sprintf(i18n.common_term_rangeInteger_valid, "0", "256") + ";maxValue(256):" + i18n.sprintf(i18n.common_term_rangeInteger_valid, "0", "256");
                        ipCheckScope.changeWeight = function () {
                            var value = $("#weight" + iDataIndex).widget().getValue();
                            $scope.bindVmTable.data[iDataIndex].weight = value;
                        };
                        var weightTextbox = $compile(weight);
                        var weightTextboxNode = weightTextbox(ipCheckScope);
                        $("td:eq(2)", nRow).html(weightTextboxNode);
                        $("td:eq(0)", nRow).addTitle();
                    }
                };
                $scope.backendPortTextBox = {
                    label : i18n.lb_term_backendPort_label + ":",
                    id: "backendPortTextBox",
                    require : true,
                    value: getBackPort(condition.backPort),
                    width:100,
                    disable:condition.backPort===undefined||condition.backPort===0?false:true,
                    "validate": "integer:" + i18n.sprintf(i18n.common_term_rangeInteger_valid, 1, 65535) +";maxValue(65535):" + i18n.sprintf(i18n.common_term_rangeInteger_valid, 1, 65535) +";minValue(1):" + i18n.sprintf(i18n.common_term_rangeInteger_valid, 1, 65535) +";"
                };

                $scope.info = {
                    okBtn: {
                        "id": "bindvm-window-ok",
                        "text": i18n.common_term_ok_button,
                        tip: "",
                        "click": function () {
                            var valid = UnifyValid.FormValid($("#bindvm-window"));
                            if (!valid) {
                                return;
                            }
                            condition.okClick = "true";
                            var bindVm = [];
                            _.each($scope.bindVmTable.data, function (item) {
                                _.each(item.ip, function (ip) {
                                    if (ip && ip.checked) {
                                        bindVm.push({
                                            "vmIP": ip.ip,
                                            "weight": item.weight,
                                            "subnetId": item.subnetId
                                        });
                                    }
                                });
                            });

                            var promise = vlbServiceInst.operateVLB({
                                "vdcId":  user.orgId,
                                "cloudInfraId": cloudInfraId,
                                "userId": user.id,
                                "opParam": {
                                    "addVMToLB": {
                                        "lbID": condition.lbID,
                                        "listeners": [
                                            {
                                                "backPort": $("#backendPortTextBox").widget().getValue(),
                                                "bindingVM": bindVm
                                            }
                                        ]
                                    }
                                }
                            });
                            promise.then(function () {
                                $scope.close();
                                $scope.$destroy();
                            });
                        }
                    },
                    cancelBtn: {
                        "id": "bindvm-window-cancel",
                        "text": i18n.common_term_cancle_button,
                        "click": function () {
                            $scope.close();
                            $scope.$destroy();
                        }
                    }
                };
                function getBackPort(backPort){
                    var alreadyInput = false;
                    if(backPort===0){
                        backPort="";
                    }
                    return backPort;
                }
                function getVmsNics() {
                    var promise = vlbServiceInst.queryVMsNics({
                        "vdcId":  user.orgId,
                        "cloudInfraId": cloudInfraId,
                        "name": searchString,
                        "vpcId": vpcId,
                        "userId": user.id,
                        "lbId": condition.lbID,
                        "start": page.getStart(),
                        "limit": page.displayLength
                    });
                    promise.then(function (data) {
                        if (!data) {
                            return;
                        }
                        _.each(data.vmNics, function (item) {
                            _.extend(item, {
                                "name": item.vmName,
                                "ip": [
                                    {"ip": item.ip, "checked": false}
                                ], //与IT场景保持一致的处理逻辑
                                "weight": 1,
                                "opt": "",
                                "subnetId":item.subnetId
                            });
                        });
                        $scope.bindVmTable.data = data.vmNics;
                        $scope.bindVmTable.displayLength = page.displayLength;
                        $scope.bindVmTable.totalRecords = data.total;
                        $("#bindVmsTable").widget().option("cur-page", {
                            "pageIndex": page.currentPage
                        });
                    });
                }

                function getTableColumns() {
                    return [
                        {
                            "sTitle": i18n.common_term_name_label,
                            "mData": function (data) {
                                return $.encoder.encodeForHTML(data.name);
                            },
                            "sWidth": "30%"
                        },
                        {
                            "sTitle": "IP",
                            "mData": "ip",
                            "sWidth": "40%"
                        },
                        {
                            "sTitle": i18n.common_term_proportion_label,
                            "mData": function (data) {
                                return $.encoder.encodeForHTML(data.weight);
                            },
                            "sWidth": "40%"
                        } 
                    ];
                }

                getVmsNics();
            }
        ];

        var dependency = ["ng", "wcc"];
        var bindVmWindow = angular.module("bindingVmWindow", dependency);
        bindVmWindow.controller("bindingVmWindowCtrl", ctrl);
        bindVmWindow.service("camel", http);
        bindVmWindow.service("exception", exception);

        return bindVmWindow;
    });