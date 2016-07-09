define([], function() {
    var privilegeKeys = {
        acl_term_acl_label:"ACLs",
        alarm_term_alarm_label:"告警",
        app_term_app_label:"应用",
        app_term_appInstance_label:"应用实例",
        app_term_policy_label:"策略管理",
        app_term_policyLog_label:"策略日志",
        app_term_schedule_label:"计划任务",
        aspf_term_aspf_label:"ASPF",
        common_term_authorization_label:"权限",
        common_term_check_button:"查看",
        common_term_create_button:"创建",
        common_term_delete_button:"删除",
        common_term_disk_label:"磁盘",
        common_term_monitor_label:"监控",
        common_term_vm_label:"虚拟机",
        device_term_device_label:"设备",
        device_term_FusionStorage_label:"FusionStorage",
        eip_term_eip_label:"弹性IP",
        lb_term_vlb_label:"VLB",
        log_term_log_label:"日志",
        log_term_operation_label:"操作日志",
        nat_term_dnat_label:"DNAT",
        org_term_organization_label:"组织",
        perform_term_monitor_label:"性能监控",
        report_term_report_label:"报表",
        resource_term_AZ_label:"可用分区",
        resource_term_cloudStorage_label:"云存储",
        resource_term_netPool_label:"网络资源池",
        resource_term_pool_label:"资源池",
        resource_term_serverPool_label:"物理资源池",
        resource_term_ServiceVM_label:"系统服务虚拟机",
        resource_term_storagePool_label:"存储资源池",
        resource_term_zone_label:"资源分区",
        role_role_add_option_aclHandle_value:"ACLs操作",
        role_role_add_option_aclView_value:"ACLs查看",
        role_role_add_option_ADconfig_value:"第三方认证配置",
        role_role_add_option_advance_value:"高级操作",
        role_role_add_option_ADview_value:"第三方认证查看",
        role_role_add_option_alarmHandle_value:"告警操作",
        role_role_add_option_alarmView_value:"告警查看",
        role_role_add_option_appInstanceHandle_value:"应用实例操作",
        role_role_add_option_appInstanceView_value:"应用实例查看",
        role_role_add_option_appTemplateHandle_value:"应用模板操作",
        role_role_add_option_appTemplateView_value:"应用模板查看",
        role_role_add_option_aspfHandle_value:"ASPF操作",
        role_role_add_option_aspfView_value:"ASPF查看",
        role_role_add_option_AZHandle_value:"可用分区操作",
        role_role_add_option_AZView_value:"可用分区查看",
        role_role_add_option_backupSetHandle_value:"备份设定操作",
        role_role_add_option_backupSetView_value:"备份设定查看",
        role_role_add_option_basic_value:"基本操作",
        role_role_add_option_catalogHandle_value:"服务目录管理",
        role_role_add_option_catalogView_value:"服务目录查看",
        role_role_add_option_clusterHandle_value:"资源集群操作",
        role_role_add_option_clusterView_value:"资源集群查看",
        role_role_add_option_deployServiceHandle_value:"部署服务操作",
        role_role_add_option_deployServiceView_value:"部署服务查看",
        role_role_add_option_deviceHandle_value:"设备操作",
        role_role_add_option_deviceView_value:"设备查看",
        role_role_add_option_diskHandle_value:"磁盘操作",
        role_role_add_option_diskView_value:"磁盘查看",
        role_role_add_option_dnatHandle_value:"DNAT操作",
        role_role_add_option_dnatView_value:"DNAT查看",
        role_role_add_option_eipHandle_value:"弹性IP操作",
        role_role_add_option_eipView_value:"弹性IP查看",
        role_role_add_option_FusionStorageHandle_value:"FusionStorage操作",
        role_role_add_option_FusionStorageView_value:"FusionStorage查看",
        role_role_add_option_hypervisorHandle_value:"虚拟化环境操作",
        role_role_add_option_hypervisorView_value:"虚拟化环境查看",
        role_role_add_option_installSubnetHandle_value:"物理机安装子网配置",
        role_role_add_option_installSubnetView_value:"物理机安装子网查看",
        role_role_add_option_ipBandwidthHandle_value:"IP带宽模板操作",
        role_role_add_option_ipBandwidthView_value:"IP带宽模板查看",
        role_role_add_option_isoHandle_value:"ISO操作",
        role_role_add_option_isoView_value:"ISO查看",
        role_role_add_option_licenseHandle_value:"License操作",
        role_role_add_option_licenseView_value:"License查看",
        role_role_add_option_meteringSetHandle_value:"计量配置操作",
        role_role_add_option_meteringSetView_value:"计量配置查看",
        role_role_add_option_netHandle_value:"网络操作",
        role_role_add_option_netPoolHandle_value:"网络资源池操作",
        role_role_add_option_netPoolView_value:"网络资源池查看",
        role_role_add_option_netView_value:"网络查看",
        role_role_add_option_orderHandle_value:"订单管理",
        role_role_add_option_orderView_value:"订单查看",
        role_role_add_option_orgHandle_value:"组织操作",
        role_role_add_option_orgView_value:"组织查看",
        role_role_add_option_poolHandle_value:"资源池操作",
        role_role_add_option_poolView_value:"资源池查看",
        role_role_add_option_pswPolicyHandle_value:"密码策略配置",
        role_role_add_option_pswPolicyView_value:"密码策略查看",
        role_role_add_option_reportHandle_value:"报表操作",
        role_role_add_option_reportView_value:"报表查看",
        role_role_add_option_roleHandle_value:"角色操作",
        role_role_add_option_roleView_value:"角色查看",
        role_role_add_option_routerHandle_value:"路由器操作",
        role_role_add_option_routerView_value:"路由器查看",
        role_role_add_option_serverHandle_value:"物理机操作",
        role_role_add_option_serverPoolHandle_value:"物理资源池操作",
        role_role_add_option_serverPoolView_value:"物理资源池查看",
        role_role_add_option_serverView_value:"物理机查看",
        role_role_add_option_serviceHandle_value:"服务操作",
        role_role_add_option_serviceTemplateView_value:"服务模板查看",
        role_role_add_option_serviceView_value:"服务查看",
        role_role_add_option_ServiceVMHandle_value:"系统服务虚拟机操作",
        role_role_add_option_ServiceVMView_value:"系统服务虚拟机查看",
        role_role_add_option_SGHandle_value:"安全组操作",
        role_role_add_option_SGView_value:"安全组查看",
        role_role_add_option_snmpHandle_value:"SNMP管理站配置",
        role_role_add_option_snmpView_value:"SNMP管理站查看",
        role_role_add_option_softwareHandle_value:"软件包操作",
        role_role_add_option_softwareView_value:"软件包查看",
        role_role_add_option_storagePoolHandle_value:"存储资源池操作",
        role_role_add_option_storagePoolView_value:"存储资源池查看",
        role_role_add_option_timeHandle_value:"时间配置操作",
        role_role_add_option_timeoutHandle_value:"系统超时配置",
        role_role_add_option_timeoutView_value:"系统超时查看",
        role_role_add_option_timeView_value:"时间配置查看",
        role_role_add_option_userHandle_value:"用户操作",
        role_role_add_option_userView_value:"用户查看",
        role_role_add_option_vlbHandle_value:"VLB操作",
        role_role_add_option_vlbView_value:"VLB查看",
        role_role_add_option_vmHandle_value:"虚拟机操作",
        role_role_add_option_vmLogicHandle_value:"虚拟机逻辑模板操作",
        role_role_add_option_vmLogicView_value:"虚拟机逻辑模板查看",
        role_role_add_option_vmSpecHandle_value:"虚拟机规格模板操作",
        role_role_add_option_vmSpecView_value:"虚拟机规格模板查看",
        role_role_add_option_vmTemplateHandle_value:"虚拟机模板操作",
        role_role_add_option_vmTemplateView_value:"虚拟机模板查看",
        role_role_add_option_vmView_value:"虚拟机查看",
        role_role_add_option_vpcHandle_value:"VPC操作",
        role_role_add_option_vpcSpecHandle_value:"VPC规格模板操作",
        role_role_add_option_vpcSpecView_value:"VPC规格模板查看",
        role_role_add_option_vpnHandle_value:"VPN操作",
        role_role_add_option_vpnView_value:"VPN查看",
        role_role_add_option_zoneHandle_value:"资源分区操作",
        role_role_add_option_zoneView_value:"资源分区查看",
        role_term_role_label:"角色管理",
        router_term_router_label:"路由器",
        security_term_SG_label:"安全组",
        server_term_server_label:"物理机",
        service_term_catalog_label:"服务目录",
        service_term_order_label:"订单",
        service_term_service_label:"服务",
        service_term_template_label:"服务模板",
        spec_term_vm_label:"虚拟机规格模板",
        spec_term_vpc_label:"VPC规格模板",
        sys_term_archives_label:"设备档案",
        sys_term_backupSet_label:"备份设定",
        sys_term_comPsw_label:"部件通讯密码",
        sys_term_desktop_label:"桌面云",
        sys_term_desktopAddr_label:"桌面服务器地址",
        sys_term_healthCheckup_label:"健康检查",
        sys_term_installSubnet_label:"物理机安装子网",
        sys_term_license_label:"License",
        sys_term_logo_label:"界面LOGO",
        sys_term_meteringSet_label:"计量配置",
        sys_term_snmp_label:"SNMP管理站",
        sys_term_sysConfig_label:"系统",
        sys_term_time_label:"时间管理",
        sys_term_timeout_label:"系统超时",
        sys_term_topo_label:"拓扑",
        task_term_task_label:"任务",
        template_term_app_label:"应用模板",
        template_term_ipBandwidth_label:"IP带宽模板",
        template_term_iso_label:"ISO",
        template_term_software_label:"软件包",
        template_term_template_label:"模板",
        template_term_vm_label:"虚拟机模板",
        template_term_vmLogic_label:"虚拟机逻辑模板",
        user_term_AD_label:"第三方认证",
        user_term_pswPolicy_label:"密码策略",
        user_term_user_label:"用户管理",
        virtual_term_cluster_label:"资源集群",
        virtual_term_hypervisor_label:"虚拟化环境",
        vm_term_vnc_button:"VNC登录",
        vpc_term_deployService_label:"部署服务",
        vpc_term_net_label:"网络",
        vpc_term_vpc_label:"VPC",
        vpn_term_vpn_label:"VPN"
   };
    return privilegeKeys;
});