define(["tiny-lib/jquery",
    "tiny-lib/angular",
    "tiny-widgets/Layout"
], function ($, angular, Layout) {
    "use strict";

    var rpoolCtrl = ["$scope", "$compile", "$state", "camel", function ($scope, $compile, $state, camel) {
        var lay = new Layout({
            "id": "rpoolLayoutDiv",
            "subheight": 68
        });
        $scope.$on("$stateChangeSuccess", function () {
            lay.opActive($("a[ui-sref='" + $state.$current.name + "']").last());
        });
    }];
    return rpoolCtrl;
});