define([], function() {
	var exceptionMap = {
		"0007400000" : {
			"cause" : "内部错误。",
			"desc" : "内部错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007400001" : {
			"cause" : "数字转换错误。",
			"desc" : "数字转换错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007400002" : {
			"cause" : "IO异常。",
			"desc" : "IO异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007401000" : {
			"cause" : "参数错误。",
			"desc" : "参数错误。",
			"solution" : "请输入合法参数。"
		},
		"0007401001" : {
			"cause" : "入参为空。",
			"desc" : "入参为空。",
			"solution" : "请输入合法的参数。"
		},
		"0007401002" : {
			"cause" : "入参不合法。",
			"desc" : "入参不合法。",
			"solution" : "请输入合法的参数。"
		},
		"0007401003" : {
			"cause" : "入参个数错误。",
			"desc" : "入参个数错误。",
			"solution" : "请输入合法的参数。"
		},
		"0007401004" : {
			"cause" : "返回值为空。",
			"desc" : "返回值为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007401005" : {
			"cause" : "返回值错误。",
			"desc" : "返回值错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007401006" : {
			"cause" : "IP地址不合法。",
			"desc" : "IP地址不合法。",
			"solution" : "请输入合法的IP参数。"
		},
		"0007402000" : {
			"cause" : "系统错误。",
			"desc" : "系统错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007402001" : {
			"cause" : "FusionManager的ip为空。",
			"desc" : "FusionManager的ip为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007402002" : {
			"cause" : "部署场景错误。",
			"desc" : "部署场景错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007402003" : {
			"cause" : "从配置文件读取的参数为空。",
			"desc" : "从配置文件读取的参数为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007402004" : {
			"cause" : "系统异常。",
			"desc" : "系统异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007402100" : {
			"cause" : "告警错误。",
			"desc" : "告警错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007402700" : {
			"cause" : "UHM Rest动作错误。",
			"desc" : "UHM Rest动作错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403001" : {
			"cause" : "数据插入失败。",
			"desc" : "数据插入失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403002" : {
			"cause" : "数据更新失败。",
			"desc" : "数据更新失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403003" : {
			"cause" : "数据删除失败。",
			"desc" : "数据删除失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403004" : {
			"cause" : "数据查询失败。",
			"desc" : "数据查询失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403005" : {
			"cause" : "数据库中的数据格式不正确。",
			"desc" : "数据库中的数据格式不正确。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403006" : {
			"cause" : "数据库中的数据不完整。",
			"desc" : "数据库中的数据不完整。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007403007" : {
			"cause" : "清理数据库失败。",
			"desc" : "清理数据库失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404001" : {
			"cause" : "读文件失败。",
			"desc" : "读文件失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404002" : {
			"cause" : "写文件失败。",
			"desc" : "写文件失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404003" : {
			"cause" : "空间不足。",
			"desc" : "空间不足。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404004" : {
			"cause" : "文件移动失败。",
			"desc" : "文件移动失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404005" : {
			"cause" : "文件复制失败。",
			"desc" : "文件复制失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404006" : {
			"cause" : "文件删除失败。",
			"desc" : "文件删除失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404007" : {
			"cause" : "文件不存在。",
			"desc" : "文件不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404008" : {
			"cause" : "文件访问失败。",
			"desc" : "文件访问失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404009" : {
			"cause" : "生成文件失败。",
			"desc" : "生成文件失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404010" : {
			"cause" : "文件解析失败。",
			"desc" : "文件解析失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007404011" : {
			"cause" : "生成文件夹失败。",
			"desc" : "生成文件夹失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405100" : {
			"cause" : "子网号已经存在。",
			"desc" : "子网号已经存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405101" : {
			"cause" : "子网号不存在。",
			"desc" : "子网号不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405102" : {
			"cause" : "子网号不合法。",
			"desc" : "子网号不合法。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405103" : {
			"cause" : "子网掩码不合法。",
			"desc" : "子网掩码不合法。",
			"solution" : "请输入合法的参数。"
		},
		"0007405104" : {
			"cause" : "网关不在子网内。",
			"desc" : "网关不在子网内。",
			"solution" : "请输入合法的参数。"
		},
		"0007405105" : {
			"cause" : "网关不合法。",
			"desc" : "网关不合法。",
			"solution" : "请输入合法的参数。"
		},
		"0007405106" : {
			"cause" : "dhcp配置生成错误。",
			"desc" : "dhcp配置生成错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405107" : {
			"cause" : "主机IP配置与管理网段配置不一致。",
			"desc" : "主机IP配置与管理网段配置不一致。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405108" : {
			"cause" : "系统中有旧的网络信息存在。",
			"desc" : "系统中有旧的网络信息存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405200" : {
			"cause" : "节点类型不存在。",
			"desc" : "节点类型不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405201" : {
			"cause" : "节点已经在处理中。",
			"desc" : "节点已经在处理中。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405202" : {
			"cause" : "主机IP未配置。",
			"desc" : "主机IP未配置。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405203" : {
			"cause" : "删除节点信息失败。",
			"desc" : "删除节点信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405204" : {
			"cause" : "节点信息不存在。",
			"desc" : "节点信息不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405205" : {
			"cause" : "MAC不合法。",
			"desc" : "MAC不合法。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405206" : {
			"cause" : "节点IP不合法。",
			"desc" : "节点IP不合法。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405207" : {
			"cause" : "管理网段信息未配置。",
			"desc" : "管理网段信息未配置。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405208" : {
			"cause" : "节点IP不在管理网段内。",
			"desc" : "节点IP不在管理网段内。",
			"solution" : "请输入合法的参数。"
		},
		"0007405209" : {
			"cause" : "节点命名不合法。",
			"desc" : "节点命名不合法。",
			"solution" : "请输入合法的参数。"
		},
		"0007405300" : {
			"cause" : "增加节点配置项失败。",
			"desc" : "增加节点配置项失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405301" : {
			"cause" : "删除节点配置项失败。",
			"desc" : "删除节点配置项失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007405400" : {
			"cause" : "操作系统镜像文件不在指定路径下。",
			"desc" : "操作系统镜像文件不在指定路径下。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007406000" : {
			"cause" : "执行脚本错误。",
			"desc" : "执行脚本错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007406001" : {
			"cause" : "脚本运行错误。",
			"desc" : "脚本运行错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007406002" : {
			"cause" : "脚本运行返回结果为空。",
			"desc" : "脚本运行返回结果为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007406003" : {
			"cause" : "脚本运行返回结果错误。",
			"desc" : "脚本运行返回结果错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007407000" : {
			"cause" : "UI异常。",
			"desc" : "UI异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007407001" : {
			"cause" : "鉴权失败。",
			"desc" : "鉴权失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007407002" : {
			"cause" : "当前用户无此操作权限。",
			"desc" : "当前用户无此操作权限。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007407003" : {
			"cause" : "获得当前用户信息失败。",
			"desc" : "获得当前用户信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408000" : {
			"cause" : "License管理内部错误。",
			"desc" : "License管理内部错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408001" : {
			"cause" : "获取ESN失败。",
			"desc" : "获取ESN失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408002" : {
			"cause" : "ESN不匹配或License文件错误。",
			"desc" : "ESN不匹配或License文件错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408003" : {
			"cause" : "默认License为空。",
			"desc" : "默认License为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408004" : {
			"cause" : "默认License错误。",
			"desc" : "默认License错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408005" : {
			"cause" : "获取License特征失败。",
			"desc" : "获取License特征失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408006" : {
			"cause" : "校验License特征失败。",
			"desc" : "校验License特征失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408007" : {
			"cause" : "保存License信息失败。",
			"desc" : "保存License信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408008" : {
			"cause" : "License文件过期。",
			"desc" : "License文件过期。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408009" : {
			"cause" : "用户取消上传新申请的License文件。",
			"desc" : "用户取消上传新申请的License文件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408010" : {
			"cause" : "申请的资源超出License授权。",
			"desc" : "申请的资源超出License授权。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408011" : {
			"cause" : "当前License已失效。",
			"desc" : "当前License已失效。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408012" : {
			"cause" : "未选择上传文件。",
			"desc" : "未选择上传文件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408013" : {
			"cause" : "上传文件的文件名为空。",
			"desc" : "上传文件的文件名为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408014" : {
			"cause" : "待上传的License文件不存在。",
			"desc" : "待上传的License文件不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408015" : {
			"cause" : "License文件上传到License Server失败。",
			"desc" : "License文件上传到License Server失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007408016" : {
			"cause" : "加载的license文件资源数目小于系统已使用的资源数目。",
			"desc" : "加载的license文件资源数目小于系统已使用的资源数目。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409000" : {
			"cause" : "手动备份失败。",
			"desc" : "手动备份失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409001" : {
			"cause" : "手动备份的任务正在运行，请稍后尝试。",
			"desc" : "手动备份的任务正在运行，请稍后尝试。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409002" : {
			"cause" : "下发备份命令部件为空. 请选中需要下发备份命令的部件。",
			"desc" : "下发备份命令部件为空. 请选中需要下发备份命令的部件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409003" : {
			"cause" : "添加FTP失败。",
			"desc" : "添加FTP失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409004" : {
			"cause" : "系统异常。",
			"desc" : "系统异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409100" : {
			"cause" : "本地自动备份失败。",
			"desc" : "本地自动备份失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409101" : {
			"cause" : "本地自动备份失败. 未知错误。",
			"desc" : "本地自动备份失败. 未知错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409102" : {
			"cause" : "本地自动备份失败. 系统错误。",
			"desc" : "本地自动备份失败. 系统错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409106" : {
			"cause" : "本地自动备份失败. 数据库状态异常。",
			"desc" : "本地自动备份失败. 数据库状态异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409107" : {
			"cause" : "本地自动备份失败. 数据库操作失败。",
			"desc" : "本地自动备份失败. 数据库操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409108" : {
			"cause" : "本地自动备份失败. 本地主机备份空间不足。",
			"desc" : "本地自动备份失败. 本地主机备份空间不足。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409109" : {
			"cause" : "本地自动备份失败. 本地主机备份文件序号超过上限。",
			"desc" : "本地自动备份失败. 本地主机备份文件序号超过上限。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409112" : {
			"cause" : "本地自动备份失败. 本地文件操作失败。",
			"desc" : "本地自动备份失败. 本地文件操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409123" : {
			"cause" : "本地自动备份失败. 执行脚本入参错误。",
			"desc" : "本地自动备份失败. 执行脚本入参错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409124" : {
			"cause" : "本地自动备份失败. 初始化日志错误。",
			"desc" : "本地自动备份失败. 初始化日志错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409200" : {
			"cause" : "恢复失败。",
			"desc" : "恢复失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409201" : {
			"cause" : "恢复失败. 未知错误。",
			"desc" : "恢复失败. 未知错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409202" : {
			"cause" : "恢复失败. 系统错误。",
			"desc" : "恢复失败. 系统错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409203" : {
			"cause" : "恢复失败. 另一个手动备份任务正在运行。",
			"desc" : "恢复失败. 另一个手动备份任务正在运行。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409204" : {
			"cause" : "恢复失败. 另一个自动备份任务正在运行。",
			"desc" : "恢复失败. 另一个自动备份任务正在运行。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409205" : {
			"cause" : "恢复失败. 另一个恢复任务正在运行。",
			"desc" : "恢复失败. 另一个恢复任务正在运行。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409207" : {
			"cause" : "恢复失败. 数据库操作失败。",
			"desc" : "恢复失败. 数据库操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409208" : {
			"cause" : "恢复失败. 本地主机备份空间不足。",
			"desc" : "恢复失败. 本地主机备份空间不足。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409212" : {
			"cause" : "恢复失败. 本地文件操作失败。",
			"desc" : "恢复失败. 本地文件操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409217" : {
			"cause" : "恢复失败. FusionManager的版本号不匹配。",
			"desc" : "恢复失败. FusionManager的版本号不匹配。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409218" : {
			"cause" : "恢复失败. FusionManager的版本文件不存在。",
			"desc" : "恢复失败. FusionManager的版本文件不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409219" : {
			"cause" : "恢复失败. SHA校验失败。",
			"desc" : "恢复失败. SHA校验失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409220" : {
			"cause" : "恢复失败. 停止FusionManager的进程失败。",
			"desc" : "恢复失败. 停止FusionManager的进程失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409221" : {
			"cause" : "恢复失败. 启动FusionManager的进程失败。",
			"desc" : "恢复失败. 启动FusionManager的进程失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409222" : {
			"cause" : "恢复失败. 启动数据库失败。",
			"desc" : "恢复失败. 启动数据库失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409223" : {
			"cause" : "恢复失败. 执行脚本入参错误。",
			"desc" : "恢复失败. 执行脚本入参错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409224" : {
			"cause" : "恢复失败. 初始化日志错误。",
			"desc" : "恢复失败. 初始化日志错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409300" : {
			"cause" : "上传备份文件到第三方服务器失败。",
			"desc" : "上传备份文件到第三方服务器失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409301" : {
			"cause" : "上传备份文件到第三方服务器失败. 未知错误。",
			"desc" : "上传备份文件到第三方服务器失败. 未知错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409309" : {
			"cause" : "上传备份文件到第三方服务器失败. 本地主机备份文件序号超过上限。",
			"desc" : "上传备份文件到第三方服务器失败. 本地主机备份文件序号超过上限。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409310" : {
			"cause" : "上传备份文件到第三方服务器失败. 连接第三方服务器时用户名密码错误。",
			"desc" : "上传备份文件到第三方服务器失败. 连接第三方服务器时用户名密码错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409311" : {
			"cause" : "上传备份文件到第三方服务器失败. 无法连接第三方服务器。",
			"desc" : "上传备份文件到第三方服务器失败. 无法连接第三方服务器。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409312" : {
			"cause" : "上传备份文件到第三方服务器失败. 本地文件操作失败。",
			"desc" : "上传备份文件到第三方服务器失败. 本地文件操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409313" : {
			"cause" : "上传备份文件到第三方服务器失败. 远端文件操作失败。",
			"desc" : "上传备份文件到第三方服务器失败. 远端文件操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409314" : {
			"cause" : "本地主机没有需要上传的备份文件。",
			"desc" : "本地主机没有需要上传的备份文件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409315" : {
			"cause" : "上传备份文件到第三方服务器失败. 本地主机有相同日期的自动备份文件。",
			"desc" : "上传备份文件到第三方服务器失败. 本地主机有相同日期的自动备份文件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409316" : {
			"cause" : "上传备份文件到第三方服务器失败. 本地主机的备份文件数超过上限。",
			"desc" : "上传备份文件到第三方服务器失败. 本地主机的备份文件数超过上限。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409317" : {
			"cause" : "输入的FTP密码为空。",
			"desc" : "输入的FTP密码为空。",
			"solution" : "请输入合法的参数。"
		},
		"0007409323" : {
			"cause" : "上传备份文件到第三方服务器失败. 执行脚本入参错误。",
			"desc" : "上传备份文件到第三方服务器失败. 执行脚本入参错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409324" : {
			"cause" : "上传备份文件到第三方服务器失败. 初始化日志错误。",
			"desc" : "上传备份文件到第三方服务器失败. 初始化日志错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409325" : {
			"cause" : "上传备份文件到第三方服务器失败. 远端备份文件和本地备份文件不一致。",
			"desc" : "上传备份文件到第三方服务器失败. 远端备份文件和本地备份文件不一致。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409400" : {
			"cause" : "备份恢复基本错误。",
			"desc" : "备份恢复基本错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409401" : {
			"cause" : "未知错误。",
			"desc" : "未知错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409402" : {
			"cause" : "系统错误。",
			"desc" : "系统错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409403" : {
			"cause" : "另一个手动备份任务正在运行。",
			"desc" : "另一个手动备份任务正在运行。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409404" : {
			"cause" : "另一个自动备份任务正在运行。",
			"desc" : "另一个自动备份任务正在运行。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409405" : {
			"cause" : "另一个恢复任务正在运行。",
			"desc" : "另一个恢复任务正在运行。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409406" : {
			"cause" : "数据库状态异常。",
			"desc" : "数据库状态异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409407" : {
			"cause" : "数据库操作失败。",
			"desc" : "数据库操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409408" : {
			"cause" : "本地主机备份空间不足。",
			"desc" : "本地主机备份空间不足。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409409" : {
			"cause" : "本地主机备份文件序号超过上限。",
			"desc" : "本地主机备份文件序号超过上限。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409410" : {
			"cause" : "连接第三方服务器时用户名密码错误。",
			"desc" : "连接第三方服务器时用户名密码错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409411" : {
			"cause" : "无法连接第三方服务器。",
			"desc" : "无法连接第三方服务器。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409412" : {
			"cause" : "本地文件操作失败。",
			"desc" : "本地文件操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409413" : {
			"cause" : "远端文件操作失败。",
			"desc" : "远端文件操作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409414" : {
			"cause" : "本地主机没有需要上传的备份文件。",
			"desc" : "本地主机没有需要上传的备份文件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409415" : {
			"cause" : "本地主机有相同日期的自动备份文件。",
			"desc" : "本地主机有相同日期的自动备份文件。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409416" : {
			"cause" : "本地主机的备份文件数超过上限。",
			"desc" : "本地主机的备份文件数超过上限。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409417" : {
			"cause" : "FusionManager的版本号不匹配。",
			"desc" : "FusionManager的版本号不匹配。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409418" : {
			"cause" : "FusionManager的版本文件不存在。",
			"desc" : "FusionManager的版本文件不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409419" : {
			"cause" : "SHA校验失败。",
			"desc" : "SHA校验失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409420" : {
			"cause" : "停止FusionManager的进程失败。",
			"desc" : "停止FusionManager的进程失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409421" : {
			"cause" : "启动FusionManager的进程失败。",
			"desc" : "启动FusionManager的进程失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409422" : {
			"cause" : "启动数据库失败。",
			"desc" : "启动数据库失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409423" : {
			"cause" : "执行脚本入参错误。",
			"desc" : "执行脚本入参错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409424" : {
			"cause" : "初始化日志错误。",
			"desc" : "初始化日志错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409425" : {
			"cause" : "远端备份文件和本地备份文件不一致。",
			"desc" : "远端备份文件和本地备份文件不一致。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007409426" : {
			"cause" : "操作其他部件失败。",
			"desc" : "操作其他部件失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410000" : {
			"cause" : "时间管理内部错误。",
			"desc" : "时间管理内部错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410001" : {
			"cause" : "配置UHM时区失败。",
			"desc" : "配置UHM时区失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410002" : {
			"cause" : "配置UHM时间同步失败。",
			"desc" : "配置UHM时间同步失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410003" : {
			"cause" : "配置FusionCompute时间同步失败。",
			"desc" : "配置FusionCompute时间同步失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410004" : {
			"cause" : "配置FusionCompute时区失败。",
			"desc" : "配置FusionCompute时区失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410005" : {
			"cause" : "查询FusionCompute时间同步信息失败。",
			"desc" : "查询FusionCompute时间同步信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410006" : {
			"cause" : "界面保存的修改前数据和数据库中当前的数据不一致。",
			"desc" : "界面保存的修改前数据和数据库中当前的数据不一致。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410007" : {
			"cause" : "配置的时间服务器IP地址与FusionManager的IP地址冲突。",
			"desc" : "配置的时间服务器IP地址与FusionManager的IP地址冲突。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410008" : {
			"cause" : "时间服务器IP重复。",
			"desc" : "时间服务器IP重复。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410010" : {
			"cause" : "修改时区配置文件失败。",
			"desc" : "修改时区配置文件失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410011" : {
			"cause" : "夏令时开始或结束时间不能为空。",
			"desc" : "夏令时开始或结束时间不能为空。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410012" : {
			"cause" : "设置的时间服务器IP同FusionManager所在的CNA的IP相同。",
			"desc" : "设置的时间服务器IP同FusionManager所在的CNA的IP相同。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410013" : {
			"cause" : "结束夏令时的实际时间和进入夏令时的实际时间不能在同一个月。",
			"desc" : "结束夏令时的实际时间和进入夏令时的实际时间不能在同一个月。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410014" : {
			"cause" : "获得FusionManager所在的CNA的urn失败。",
			"desc" : "获得FusionManager所在的CNA的urn失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410015" : {
			"cause" : "获得FusionManager所在的CNA的外部NTP信息失败。",
			"desc" : "获得FusionManager所在的CNA的外部NTP信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410016" : {
			"cause" : "没有可用的外部时间服务器。",
			"desc" : "没有可用的外部时间服务器。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410017" : {
			"cause" : "系统异常。",
			"desc" : "系统异常。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410018" : {
			"cause" : "获得FusionStorage连接器失败。",
			"desc" : "获得FusionStorage连接器失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410019" : {
			"cause" : "给FusionStorage下发NTP信息失败。",
			"desc" : "给FusionStorage下发NTP信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410020" : {
			"cause" : "给FusionStorage下发时区信息失败。",
			"desc" : "给FusionStorage下发时区信息失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410021" : {
			"cause" : "获取当前部署场景失败。",
			"desc" : "获取当前部署场景失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410022" : {
			"cause" : "时间服务器正在调整中，请稍后重试。",
			"desc" : "时间服务器正在调整中，请稍后重试。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410023" : {
			"cause" : "正在进行时钟源或时区配置，请等待3分钟后重试。",
			"desc" : "正在进行时钟源或时区配置，请等待3分钟后重试。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410025" : {
			"cause" : "FusionManager与上级时间服务器强制同步失败。",
			"desc" : "FusionManager与上级时间服务器强制同步失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410026" : {
			"cause" : "FusionCompute与上级时间服务器强制同步失败。",
			"desc" : "FusionCompute与上级时间服务器强制同步失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410027" : {
			"cause" : "禁用主备倒换服务失败。",
			"desc" : "禁用主备倒换服务失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410028" : {
			"cause" : "启用主备倒换服务失败。",
			"desc" : "启用主备倒换服务失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410029" : {
			"cause" : "重启主备倒换服务失败。",
			"desc" : "重启主备倒换服务失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410030" : {
			"cause" : "重启FusionManager失败。",
			"desc" : "重启FusionManager失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410500" : {
			"cause" : "现在正在进行时间同步保存操作，其它时间管理的操作请稍后重试。",
			"desc" : "现在正在进行时间同步保存操作，其它时间管理的操作请稍后重试。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410501" : {
			"cause" : "现在正在进行时区保存操作，其它时间管理的操作请稍后重试。",
			"desc" : "现在正在进行时区保存操作，其它时间管理的操作请稍后重试。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007410502" : {
			"cause" : "现在正在进行强制时间同步操作，其它时间管理的操作请稍后重试。",
			"desc" : "现在正在进行强制时间同步操作，其它时间管理的操作请稍后重试。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411000" : {
			"cause" : "系统检查内部错误。",
			"desc" : "系统检查内部错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411001" : {
			"cause" : "启动软件检查失败。",
			"desc" : "启动软件检查失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411002" : {
			"cause" : "启动硬件检查失败。",
			"desc" : "启动硬件检查失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411003" : {
			"cause" : "软件检查任务冲突。",
			"desc" : "软件检查任务冲突。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411004" : {
			"cause" : "硬件检查任务冲突。",
			"desc" : "硬件检查任务冲突。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411005" : {
			"cause" : "正在进行硬件部署，无法进行硬件检查。",
			"desc" : "正在进行硬件部署，无法进行硬件检查。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411006" : {
			"cause" : "查询软件检查的状态失败。",
			"desc" : "查询软件检查的状态失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411007" : {
			"cause" : "管理集群尚未成功发放，无法进行软件检查。",
			"desc" : "管理集群尚未成功发放，无法进行软件检查。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411008" : {
			"cause" : "获取主机列表失败。",
			"desc" : "获取主机列表失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411009" : {
			"cause" : "板位信息不存在，无法同步管理集群。",
			"desc" : "板位信息不存在，无法同步管理集群。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411010" : {
			"cause" : "硬件检查还未完成，无法同步管理集群。",
			"desc" : "硬件检查还未完成，无法同步管理集群。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411011" : {
			"cause" : "已存在管理集群，无法重新同步管理集群。",
			"desc" : "已存在管理集群，无法重新同步管理集群。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411012" : {
			"cause" : "无法同步管理集群, LCNA的ZK槽位没有可用硬盘。",
			"desc" : "无法同步管理集群, LCNA的ZK槽位没有可用硬盘。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007411013" : {
			"cause" : "无法同步管理集群, LCNA槽位未插入刀片或刀片没有成功发现。",
			"desc" : "无法同步管理集群, LCNA槽位未插入刀片或刀片没有成功发现。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412001" : {
			"cause" : "获取软件档案失败。",
			"desc" : "获取软件档案失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412002" : {
			"cause" : "获取硬件档案失败。",
			"desc" : "获取硬件档案失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412003" : {
			"cause" : "正在生成硬件档案。",
			"desc" : "正在生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412004" : {
			"cause" : "刀片服务器发现中，无法生成硬件档案。",
			"desc" : "刀片服务器发现中，无法生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412005" : {
			"cause" : "设备档案模板不存在，无法生成硬件档案。",
			"desc" : "设备档案模板不存在，无法生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412006" : {
			"cause" : "设备正在部署中，无法生成硬件档案。",
			"desc" : "设备正在部署中，无法生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412007" : {
			"cause" : "部分交换机信息获取失败，无法生成设备档案。",
			"desc" : "部分交换机信息获取失败，无法生成设备档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412008" : {
			"cause" : "部分刀片服务器信息获取失败, 无法生成硬件档案。",
			"desc" : "部分刀片服务器信息获取失败, 无法生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412009" : {
			"cause" : "交换机没有全部部署成功,无法生成硬件档案。",
			"desc" : "交换机没有全部部署成功,无法生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412010" : {
			"cause" : "设备档案生成失败。",
			"desc" : "设备档案生成失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412011" : {
			"cause" : "生成设备档案压缩包失败。",
			"desc" : "生成设备档案压缩包失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412012" : {
			"cause" : "UHM系统内部错误。",
			"desc" : "UHM系统内部错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412013" : {
			"cause" : "获取设备档案超时。",
			"desc" : "获取设备档案超时。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412014" : {
			"cause" : "查询设备档案错误。",
			"desc" : "查询设备档案错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007412015" : {
			"cause" : "主机没有全部部署成功，无法生成硬件档案。",
			"desc" : "主机没有全部部署成功，无法生成硬件档案。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007413001" : {
			"cause" : "获取设备维护通道失败。",
			"desc" : "获取设备维护通道失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007413002" : {
			"cause" : "配置设备维护通道失败。",
			"desc" : "配置设备维护通道失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007413003" : {
			"cause" : "入参不合法。",
			"desc" : "入参不合法。",
			"solution" : "请输入合法的参数。"
		},
		"0007413004" : {
			"cause" : "IP超出范围。",
			"desc" : "IP超出范围。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007413005" : {
			"cause" : "IP或用户名重复。",
			"desc" : "IP或用户名重复。",
			"solution" : "请输入合法的参数。"
		},
		"0007413006" : {
			"cause" : "记录总数超出最大值。",
			"desc" : "记录总数超出最大值。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007413007" : {
			"cause" : "原密码输入错误。",
			"desc" : "原密码输入错误。",
			"solution" : "请输入合法的参数。"
		},
		"0007414000" : {
			"cause" : "安装源内部错误。",
			"desc" : "安装源内部错误。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007414001" : {
			"cause" : "安装源重复。",
			"desc" : "安装源重复。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007414002" : {
			"cause" : "安装源不存在。",
			"desc" : "安装源不存在。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007414003" : {
			"cause" : "安装源制作失败。",
			"desc" : "安装源制作失败。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		},
		"0007414004" : {
			"cause" : "安装源正在使用。",
			"desc" : "安装源正在使用。",
			"solution" : "请联系系统管理员或查阅相关文档。"
		}
	};
	return exceptionMap;
})