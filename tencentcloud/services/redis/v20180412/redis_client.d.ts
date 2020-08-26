import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { ModifyInstanceParamsResponse, DescribeInstanceMonitorTopNCmdResponse, ModifyAutoBackupConfigResponse, RestoreInstanceRequest, SwitchInstanceVipRequest, UpgradeInstanceVersionResponse, CreateInstancesRequest, ModifyNetworkConfigResponse, DescribeInstanceMonitorBigKeyResponse, AssociateSecurityGroupsRequest, DescribeTaskListResponse, ModifyInstanceRequest, RenewInstanceResponse, DescribeSlowLogResponse, DescribeDBSecurityGroupsResponse, DescribeBackupUrlRequest, DescribeInstancesResponse, ResetPasswordResponse, ClearInstanceRequest, RenewInstanceRequest, DescribeInstanceParamRecordsResponse, ModifyAutoBackupConfigRequest, DescribeInstanceDealDetailRequest, DescribeProjectSecurityGroupRequest, RestoreInstanceResponse, DescribeInstanceShardsResponse, DestroyPrepaidInstanceRequest, ManualBackupInstanceResponse, DescribeInstanceDTSInfoResponse, DestroyPostpaidInstanceResponse, ModifyInstanceResponse, ModifyDBInstanceSecurityGroupsResponse, DescribeInstanceMonitorHotKeyRequest, DescribeInstanceDTSInfoRequest, DescribeProductInfoResponse, ModifyInstanceAccountRequest, DescribeBackupUrlResponse, InquiryPriceRenewInstanceResponse, DescribeDBSecurityGroupsRequest, InquiryPriceCreateInstanceResponse, ResetPasswordRequest, ModifyInstanceAccountResponse, DescribeProjectSecurityGroupsResponse, DescribeInstanceMonitorTookDistResponse, DescribeInstanceBackupsResponse, DescribeInstanceMonitorTookDistRequest, ModifyMaintenanceWindowRequest, DescribeInstanceMonitorTopNCmdTookResponse, DescribeInstanceMonitorBigKeySizeDistRequest, DescribeInstanceAccountRequest, DescribeInstanceParamRecordsRequest, DescribeTaskListRequest, DisableReplicaReadonlyResponse, CreateInstancesResponse, DescribeTaskInfoRequest, DescribeInstanceMonitorTopNCmdRequest, ModifyNetworkConfigRequest, DescribeInstanceSecurityGroupRequest, DescribeInstanceParamsRequest, CleanUpInstanceResponse, ModifyDBInstanceSecurityGroupsRequest, DescribeInstanceShardsRequest, DescribeAutoBackupConfigResponse, InquiryPriceUpgradeInstanceRequest, DescribeProjectSecurityGroupsRequest, DescribeInstanceMonitorBigKeySizeDistResponse, CreateInstanceAccountRequest, EnableReplicaReadonlyResponse, DescribeMaintenanceWindowResponse, DescribeInstanceSecurityGroupResponse, StartupInstanceResponse, AssociateSecurityGroupsResponse, DescribeTaskInfoResponse, DescribeInstanceMonitorBigKeyTypeDistResponse, CleanUpInstanceRequest, DescribeInstanceDealDetailResponse, DescribeInstancesRequest, ModfiyInstancePasswordRequest, DescribeSlowLogRequest, DescribeAutoBackupConfigRequest, DescribeInstanceMonitorSIPResponse, DestroyPostpaidInstanceRequest, DeleteInstanceAccountRequest, UpgradeInstanceResponse, ManualBackupInstanceRequest, ModfiyInstancePasswordResponse, InquiryPriceRenewInstanceRequest, ModifyMaintenanceWindowResponse, DescribeInstanceMonitorTopNCmdTookRequest, DestroyPrepaidInstanceResponse, DescribeInstanceMonitorBigKeyTypeDistRequest, InquiryPriceCreateInstanceRequest, ModifyInstanceParamsRequest, DescribeMaintenanceWindowRequest, EnableReplicaReadonlyRequest, UpgradeInstanceVersionRequest, DescribeInstanceAccountResponse, DescribeInstanceMonitorBigKeyRequest, DisableReplicaReadonlyRequest, DescribeProductInfoRequest, SwitchInstanceVipResponse, DescribeInstanceParamsResponse, DisassociateSecurityGroupsRequest, StartupInstanceRequest, CreateInstanceAccountResponse, DescribeInstanceBackupsRequest, InquiryPriceUpgradeInstanceResponse, DeleteInstanceAccountResponse, DescribeInstanceMonitorSIPRequest, UpgradeInstanceRequest, DescribeProjectSecurityGroupResponse, DescribeInstanceMonitorHotKeyResponse, DisassociateSecurityGroupsResponse, ClearInstanceResponse } from "./redis_models";
/**
 * redis client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询实例大Key大小分布
     * @public
     */
    DescribeInstanceMonitorBigKeySizeDist(req: DescribeInstanceMonitorBigKeySizeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeySizeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeySizeDistResponse>;
    /**
     * 创建实例子账号
     * @public
     */
    CreateInstanceAccount(req: CreateInstanceAccountRequest, cb?: (error: string, rep: CreateInstanceAccountResponse) => void): Promise<CreateInstanceAccountResponse>;
    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     * @public
     */
    ModifyMaintenanceWindow(req: ModifyMaintenanceWindowRequest, cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void): Promise<ModifyMaintenanceWindowResponse>;
    /**
     * 修改实例子账号
     * @public
     */
    ModifyInstanceAccount(req: ModifyInstanceAccountRequest, cb?: (error: string, rep: ModifyInstanceAccountResponse) => void): Promise<ModifyInstanceAccountResponse>;
    /**
     * 查询实例慢查询记录
     * @public
     */
    DescribeSlowLog(req: DescribeSlowLogRequest, cb?: (error: string, rep: DescribeSlowLogResponse) => void): Promise<DescribeSlowLogResponse>;
    /**
     * 查询任务列表信息
     * @public
     */
    DescribeTaskList(req: DescribeTaskListRequest, cb?: (error: string, rep: DescribeTaskListResponse) => void): Promise<DescribeTaskListResponse>;
    /**
     * 回收站实例立即下线
     * @public
     */
    CleanUpInstance(req: CleanUpInstanceRequest, cb?: (error: string, rep: CleanUpInstanceResponse) => void): Promise<CleanUpInstanceResponse>;
    /**
     * 查看实例子账号信息
     * @public
     */
    DescribeInstanceAccount(req: DescribeInstanceAccountRequest, cb?: (error: string, rep: DescribeInstanceAccountResponse) => void): Promise<DescribeInstanceAccountResponse>;
    /**
     * 获取备份配置
     * @public
     */
    DescribeAutoBackupConfig(req: DescribeAutoBackupConfigRequest, cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void): Promise<DescribeAutoBackupConfigResponse>;
    /**
     * 查询实例CPU耗时
     * @public
     */
    DescribeInstanceMonitorTopNCmdTook(req: DescribeInstanceMonitorTopNCmdTookRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdTookResponse) => void): Promise<DescribeInstanceMonitorTopNCmdTookResponse>;
    /**
     * 设置自动备份时间
     * @public
     */
    ModifyAutoBackupConfig(req: ModifyAutoBackupConfigRequest, cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void): Promise<ModifyAutoBackupConfigResponse>;
    /**
     * 获取集群版实例分片信息
     * @public
     */
    DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse>;
    /**
     * 恢复 CRS 实例
     * @public
     */
    RestoreInstance(req: RestoreInstanceRequest, cb?: (error: string, rep: RestoreInstanceResponse) => void): Promise<RestoreInstanceResponse>;
    /**
     * 查询Redis实例列表
     * @public
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 重置密码
     * @public
     */
    ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse>;
    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     * @public
     */
    DescribeMaintenanceWindow(req: DescribeMaintenanceWindowRequest, cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void): Promise<DescribeMaintenanceWindowResponse>;
    /**
     * 查询实例访问命令
     * @public
     */
    DescribeInstanceMonitorTopNCmd(req: DescribeInstanceMonitorTopNCmdRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdResponse) => void): Promise<DescribeInstanceMonitorTopNCmdResponse>;
    /**
     * 禁用读写分离
     * @public
     */
    DisableReplicaReadonly(req: DisableReplicaReadonlyRequest, cb?: (error: string, rep: DisableReplicaReadonlyResponse) => void): Promise<DisableReplicaReadonlyResponse>;
    /**
     * 查询实例DTS信息
     * @public
     */
    DescribeInstanceDTSInfo(req: DescribeInstanceDTSInfoRequest, cb?: (error: string, rep: DescribeInstanceDTSInfoResponse) => void): Promise<DescribeInstanceDTSInfoResponse>;
    /**
     * 修改实例网络配置
     * @public
     */
    ModifyNetworkConfig(req: ModifyNetworkConfigRequest, cb?: (error: string, rep: ModifyNetworkConfigResponse) => void): Promise<ModifyNetworkConfigResponse>;
    /**
     * 查询实例访问来源信息
     * @public
     */
    DescribeInstanceMonitorSIP(req: DescribeInstanceMonitorSIPRequest, cb?: (error: string, rep: DescribeInstanceMonitorSIPResponse) => void): Promise<DescribeInstanceMonitorSIPResponse>;
    /**
     * 创建redis实例
     * @public
     */
    CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse>;
    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     * @public
     */
    UpgradeInstanceVersion(req: UpgradeInstanceVersionRequest, cb?: (error: string, rep: UpgradeInstanceVersionResponse) => void): Promise<UpgradeInstanceVersionResponse>;
    /**
     * 查询实例续费价格（包年包月）
     * @public
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 查询实例扩容价格
     * @public
     */
    InquiryPriceUpgradeInstance(req: InquiryPriceUpgradeInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeInstanceResponse) => void): Promise<InquiryPriceUpgradeInstanceResponse>;
    /**
     * 查询项目安全组信息
     * @public
     */
    DescribeProjectSecurityGroup(req: DescribeProjectSecurityGroupRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupResponse) => void): Promise<DescribeProjectSecurityGroupResponse>;
    /**
     * 查询实例热Key
     * @public
     */
    DescribeInstanceMonitorHotKey(req: DescribeInstanceMonitorHotKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorHotKeyResponse) => void): Promise<DescribeInstanceMonitorHotKeyResponse>;
    /**
     * 用于查询任务结果
     * @public
     */
    DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse>;
    /**
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     * @public
     */
    DescribeBackupUrl(req: DescribeBackupUrlRequest, cb?: (error: string, rep: DescribeBackupUrlResponse) => void): Promise<DescribeBackupUrlResponse>;
    /**
     * 启用读写分离
     * @public
     */
    EnableReplicaReadonly(req: EnableReplicaReadonlyRequest, cb?: (error: string, rep: EnableReplicaReadonlyResponse) => void): Promise<EnableReplicaReadonlyResponse>;
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     * @public
     */
    DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse>;
    /**
     * 本接口 (AssociateSecurityGroups) 用于绑定安全组到指定实例。
     * @public
     */
    AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse>;
    /**
     * 修改实例参数
     * @public
     */
    ModifyInstanceParams(req: ModifyInstanceParamsRequest, cb?: (error: string, rep: ModifyInstanceParamsResponse) => void): Promise<ModifyInstanceParamsResponse>;
    /**
     * 查询新购实例价格
     * @public
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组
     * @public
     */
    ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse>;
    /**
     * 按量计费实例销毁
     * @public
     */
    DestroyPostpaidInstance(req: DestroyPostpaidInstanceRequest, cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void): Promise<DestroyPostpaidInstanceResponse>;
    /**
     * 查询实例大Key
     * @public
     */
    DescribeInstanceMonitorBigKey(req: DescribeInstanceMonitorBigKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyResponse) => void): Promise<DescribeInstanceMonitorBigKeyResponse>;
    /**
     * 查询实例安全组信息
     * @public
     */
    DescribeInstanceSecurityGroup(req: DescribeInstanceSecurityGroupRequest, cb?: (error: string, rep: DescribeInstanceSecurityGroupResponse) => void): Promise<DescribeInstanceSecurityGroupResponse>;
    /**
     * 查询实例大Key类型分布
     * @public
     */
    DescribeInstanceMonitorBigKeyTypeDist(req: DescribeInstanceMonitorBigKeyTypeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyTypeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeyTypeDistResponse>;
    /**
     * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     * @public
     */
    DescribeProductInfo(req: DescribeProductInfoRequest, cb?: (error: string, rep: DescribeProductInfoResponse) => void): Promise<DescribeProductInfoResponse>;
    /**
     * 升级实例
     * @public
     */
    UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse>;
    /**
     * 续费实例
     * @public
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 手动备份Redis实例
     * @public
     */
    ManualBackupInstance(req: ManualBackupInstanceRequest, cb?: (error: string, rep: ManualBackupInstanceResponse) => void): Promise<ManualBackupInstanceResponse>;
    /**
     * 修改redis密码
     * @public
     */
    ModfiyInstancePassword(req: ModfiyInstancePasswordRequest, cb?: (error: string, rep: ModfiyInstancePasswordResponse) => void): Promise<ModfiyInstancePasswordResponse>;
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     * @public
     */
    DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse>;
    /**
     * 查询实例参数列表
     * @public
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 包年包月实例退还
     * @public
     */
    DestroyPrepaidInstance(req: DestroyPrepaidInstanceRequest, cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void): Promise<DestroyPrepaidInstanceResponse>;
    /**
     * 查询参数修改历史列表
     * @public
     */
    DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse>;
    /**
     * 清空Redis实例的实例数据。
     * @public
     */
    ClearInstance(req: ClearInstanceRequest, cb?: (error: string, rep: ClearInstanceResponse) => void): Promise<ClearInstanceResponse>;
    /**
     * 查询订单信息
     * @public
     */
    DescribeInstanceDealDetail(req: DescribeInstanceDealDetailRequest, cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void): Promise<DescribeInstanceDealDetailResponse>;
    /**
     * 删除实例子账号
     * @public
     */
    DeleteInstanceAccount(req: DeleteInstanceAccountRequest, cb?: (error: string, rep: DeleteInstanceAccountResponse) => void): Promise<DeleteInstanceAccountResponse>;
    /**
     * 查询 CRS 实例备份列表
     * @public
     */
    DescribeInstanceBackups(req: DescribeInstanceBackupsRequest, cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void): Promise<DescribeInstanceBackupsResponse>;
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     * @public
     */
    DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse>;
    /**
     * 实例解隔离
     * @public
     */
    StartupInstance(req: StartupInstanceRequest, cb?: (error: string, rep: StartupInstanceResponse) => void): Promise<StartupInstanceResponse>;
    /**
     * 修改实例相关信息
     * @public
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 查询实例访问的耗时分布
     * @public
     */
    DescribeInstanceMonitorTookDist(req: DescribeInstanceMonitorTookDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorTookDistResponse) => void): Promise<DescribeInstanceMonitorTookDistResponse>;
    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     * @public
     */
    SwitchInstanceVip(req: SwitchInstanceVipRequest, cb?: (error: string, rep: SwitchInstanceVipResponse) => void): Promise<SwitchInstanceVipResponse>;
}
