/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient, ClientConfig } from "../../../common/abstract_client"
import {
   ModifyInstanceParamsResponse,
   RedisBackupSet,
   DescribeInstanceMonitorTopNCmdResponse,
   ModifyAutoBackupConfigResponse,
   RestoreInstanceRequest,
   TaskInfoDetail,
   SwitchInstanceVipRequest,
   UpgradeInstanceVersionResponse,
   CreateInstancesRequest,
   ModifyNetworkConfigResponse,
   CommandTake,
   DescribeInstanceMonitorBigKeyResponse,
   Inbound,
   AssociateSecurityGroupsRequest,
   DescribeTaskListResponse,
   ModifyInstanceRequest,
   RenewInstanceResponse,
   DescribeSlowLogResponse,
   DescribeDBSecurityGroupsResponse,
   DescribeBackupUrlRequest,
   DescribeInstancesResponse,
   InstanceEnumParam,
   Account,
   SecurityGroupsInboundAndOutbound,
   ResetPasswordResponse,
   ClearInstanceRequest,
   RegionConf,
   BigKeyInfo,
   RenewInstanceRequest,
   DescribeInstanceParamRecordsResponse,
   ModifyAutoBackupConfigRequest,
   InstanceMultiParam,
   DescribeInstanceDealDetailRequest,
   DescribeProjectSecurityGroupRequest,
   RestoreInstanceResponse,
   DescribeInstanceShardsResponse,
   DestroyPrepaidInstanceRequest,
   ManualBackupInstanceResponse,
   InstanceTagInfo,
   DescribeInstanceDTSInfoResponse,
   DestroyPostpaidInstanceResponse,
   ModifyInstanceResponse,
   TradeDealDetail,
   SourceInfo,
   ModifyDBInstanceSecurityGroupsResponse,
   DescribeInstanceMonitorHotKeyRequest,
   DescribeInstanceDTSInfoRequest,
   DescribeProductInfoResponse,
   ModifyInstanceAccountRequest,
   DescribeBackupUrlResponse,
   InquiryPriceRenewInstanceResponse,
   DescribeDBSecurityGroupsRequest,
   InquiryPriceCreateInstanceResponse,
   InstanceSecurityGroupDetail,
   ResetPasswordRequest,
   ModifyInstanceAccountResponse,
   DelayDistribution,
   DescribeProjectSecurityGroupsResponse,
   DescribeInstanceMonitorTookDistResponse,
   DescribeInstanceBackupsResponse,
   InstanceIntegerParam,
   DescribeInstanceMonitorTookDistRequest,
   ModifyMaintenanceWindowRequest,
   InstanceTextParam,
   DescribeInstanceMonitorTopNCmdTookResponse,
   DescribeInstanceMonitorBigKeySizeDistRequest,
   DescribeInstanceAccountRequest,
   DescribeInstanceParamRecordsRequest,
   DescribeTaskListRequest,
   DisableReplicaReadonlyResponse,
   CreateInstancesResponse,
   DescribeTaskInfoRequest,
   DescribeInstanceMonitorTopNCmdRequest,
   ModifyNetworkConfigRequest,
   DescribeInstanceSecurityGroupRequest,
   InstanceParamHistory,
   DescribeInstanceParamsRequest,
   CleanUpInstanceResponse,
   ModifyDBInstanceSecurityGroupsRequest,
   DescribeInstanceShardsRequest,
   Outbound,
   DescribeAutoBackupConfigResponse,
   InquiryPriceUpgradeInstanceRequest,
   DescribeProjectSecurityGroupsRequest,
   DescribeInstanceMonitorBigKeySizeDistResponse,
   SecurityGroup,
   CreateInstanceAccountRequest,
   EnableReplicaReadonlyResponse,
   DescribeMaintenanceWindowResponse,
   DescribeInstanceSecurityGroupResponse,
   ProductConf,
   InstanceNode,
   StartupInstanceResponse,
   DescribeInstanceDTSInstanceInfo,
   AssociateSecurityGroupsResponse,
   DescribeTaskInfoResponse,
   DescribeInstanceMonitorBigKeyTypeDistResponse,
   CleanUpInstanceRequest,
   DescribeInstanceDealDetailResponse,
   DescribeInstancesRequest,
   SourceCommand,
   ModfiyInstancePasswordRequest,
   DescribeSlowLogRequest,
   DescribeAutoBackupConfigRequest,
   DescribeInstanceMonitorSIPResponse,
   DestroyPostpaidInstanceRequest,
   DeleteInstanceAccountRequest,
   UpgradeInstanceResponse,
   ManualBackupInstanceRequest,
   ModfiyInstancePasswordResponse,
   InstanceSet,
   InquiryPriceRenewInstanceRequest,
   ModifyMaintenanceWindowResponse,
   DescribeInstanceMonitorTopNCmdTookRequest,
   DestroyPrepaidInstanceResponse,
   DescribeInstanceMonitorBigKeyTypeDistRequest,
   InquiryPriceCreateInstanceRequest,
   ModifyInstanceParamsRequest,
   BigKeyTypeInfo,
   DescribeMaintenanceWindowRequest,
   InstanceClusterNode,
   EnableReplicaReadonlyRequest,
   UpgradeInstanceVersionRequest,
   DescribeInstanceAccountResponse,
   DescribeInstanceMonitorBigKeyRequest,
   DisableReplicaReadonlyRequest,
   DescribeProductInfoRequest,
   SwitchInstanceVipResponse,
   DescribeInstanceParamsResponse,
   DisassociateSecurityGroupsRequest,
   StartupInstanceRequest,
   HotKeyInfo,
   CreateInstanceAccountResponse,
   DescribeInstanceBackupsRequest,
   SecurityGroupDetail,
   InquiryPriceUpgradeInstanceResponse,
   DeleteInstanceAccountResponse,
   DescribeInstanceMonitorSIPRequest,
   InstanceClusterShard,
   ZoneCapacityConf,
   UpgradeInstanceRequest,
   DescribeProjectSecurityGroupResponse,
   DescribeInstanceMonitorHotKeyResponse,
   InstanceParam,
   DisassociateSecurityGroupsResponse,
   ClearInstanceResponse,
   InstanceSlowlogDetail,

} from "./redis_models"

/**
 * redis client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("redis.tencentcloudapi.com", "2018-04-12", clientConfig);
    }
    
    /**
     * 查询实例大Key大小分布
     * @public
     */
    async DescribeInstanceMonitorBigKeySizeDist(req: DescribeInstanceMonitorBigKeySizeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeySizeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeySizeDistResponse> {
        return await this.request("DescribeInstanceMonitorBigKeySizeDist", req, cb);
    }

    /**
     * 创建实例子账号
     * @public
     */
    async CreateInstanceAccount(req: CreateInstanceAccountRequest, cb?: (error: string, rep: CreateInstanceAccountResponse) => void): Promise<CreateInstanceAccountResponse> {
        return await this.request("CreateInstanceAccount", req, cb);
    }

    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     * @public
     */
    async ModifyMaintenanceWindow(req: ModifyMaintenanceWindowRequest, cb?: (error: string, rep: ModifyMaintenanceWindowResponse) => void): Promise<ModifyMaintenanceWindowResponse> {
        return await this.request("ModifyMaintenanceWindow", req, cb);
    }

    /**
     * 修改实例子账号
     * @public
     */
    async ModifyInstanceAccount(req: ModifyInstanceAccountRequest, cb?: (error: string, rep: ModifyInstanceAccountResponse) => void): Promise<ModifyInstanceAccountResponse> {
        return await this.request("ModifyInstanceAccount", req, cb);
    }

    /**
     * 查询实例慢查询记录
     * @public
     */
    async DescribeSlowLog(req: DescribeSlowLogRequest, cb?: (error: string, rep: DescribeSlowLogResponse) => void): Promise<DescribeSlowLogResponse> {
        return await this.request("DescribeSlowLog", req, cb);
    }

    /**
     * 查询任务列表信息
     * @public
     */
    async DescribeTaskList(req: DescribeTaskListRequest, cb?: (error: string, rep: DescribeTaskListResponse) => void): Promise<DescribeTaskListResponse> {
        return await this.request("DescribeTaskList", req, cb);
    }

    /**
     * 回收站实例立即下线
     * @public
     */
    async CleanUpInstance(req: CleanUpInstanceRequest, cb?: (error: string, rep: CleanUpInstanceResponse) => void): Promise<CleanUpInstanceResponse> {
        return await this.request("CleanUpInstance", req, cb);
    }

    /**
     * 查看实例子账号信息
     * @public
     */
    async DescribeInstanceAccount(req: DescribeInstanceAccountRequest, cb?: (error: string, rep: DescribeInstanceAccountResponse) => void): Promise<DescribeInstanceAccountResponse> {
        return await this.request("DescribeInstanceAccount", req, cb);
    }

    /**
     * 获取备份配置
     * @public
     */
    async DescribeAutoBackupConfig(req: DescribeAutoBackupConfigRequest, cb?: (error: string, rep: DescribeAutoBackupConfigResponse) => void): Promise<DescribeAutoBackupConfigResponse> {
        return await this.request("DescribeAutoBackupConfig", req, cb);
    }

    /**
     * 查询实例CPU耗时
     * @public
     */
    async DescribeInstanceMonitorTopNCmdTook(req: DescribeInstanceMonitorTopNCmdTookRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdTookResponse) => void): Promise<DescribeInstanceMonitorTopNCmdTookResponse> {
        return await this.request("DescribeInstanceMonitorTopNCmdTook", req, cb);
    }

    /**
     * 设置自动备份时间
     * @public
     */
    async ModifyAutoBackupConfig(req: ModifyAutoBackupConfigRequest, cb?: (error: string, rep: ModifyAutoBackupConfigResponse) => void): Promise<ModifyAutoBackupConfigResponse> {
        return await this.request("ModifyAutoBackupConfig", req, cb);
    }

    /**
     * 获取集群版实例分片信息
     * @public
     */
    async DescribeInstanceShards(req: DescribeInstanceShardsRequest, cb?: (error: string, rep: DescribeInstanceShardsResponse) => void): Promise<DescribeInstanceShardsResponse> {
        return await this.request("DescribeInstanceShards", req, cb);
    }

    /**
     * 恢复 CRS 实例
     * @public
     */
    async RestoreInstance(req: RestoreInstanceRequest, cb?: (error: string, rep: RestoreInstanceResponse) => void): Promise<RestoreInstanceResponse> {
        return await this.request("RestoreInstance", req, cb);
    }

    /**
     * 查询Redis实例列表
     * @public
     */
    async DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse> {
        return await this.request("DescribeInstances", req, cb);
    }

    /**
     * 重置密码
     * @public
     */
    async ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse> {
        return await this.request("ResetPassword", req, cb);
    }

    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     * @public
     */
    async DescribeMaintenanceWindow(req: DescribeMaintenanceWindowRequest, cb?: (error: string, rep: DescribeMaintenanceWindowResponse) => void): Promise<DescribeMaintenanceWindowResponse> {
        return await this.request("DescribeMaintenanceWindow", req, cb);
    }

    /**
     * 查询实例访问命令
     * @public
     */
    async DescribeInstanceMonitorTopNCmd(req: DescribeInstanceMonitorTopNCmdRequest, cb?: (error: string, rep: DescribeInstanceMonitorTopNCmdResponse) => void): Promise<DescribeInstanceMonitorTopNCmdResponse> {
        return await this.request("DescribeInstanceMonitorTopNCmd", req, cb);
    }

    /**
     * 禁用读写分离
     * @public
     */
    async DisableReplicaReadonly(req: DisableReplicaReadonlyRequest, cb?: (error: string, rep: DisableReplicaReadonlyResponse) => void): Promise<DisableReplicaReadonlyResponse> {
        return await this.request("DisableReplicaReadonly", req, cb);
    }

    /**
     * 查询实例DTS信息
     * @public
     */
    async DescribeInstanceDTSInfo(req: DescribeInstanceDTSInfoRequest, cb?: (error: string, rep: DescribeInstanceDTSInfoResponse) => void): Promise<DescribeInstanceDTSInfoResponse> {
        return await this.request("DescribeInstanceDTSInfo", req, cb);
    }

    /**
     * 修改实例网络配置
     * @public
     */
    async ModifyNetworkConfig(req: ModifyNetworkConfigRequest, cb?: (error: string, rep: ModifyNetworkConfigResponse) => void): Promise<ModifyNetworkConfigResponse> {
        return await this.request("ModifyNetworkConfig", req, cb);
    }

    /**
     * 查询实例访问来源信息
     * @public
     */
    async DescribeInstanceMonitorSIP(req: DescribeInstanceMonitorSIPRequest, cb?: (error: string, rep: DescribeInstanceMonitorSIPResponse) => void): Promise<DescribeInstanceMonitorSIPResponse> {
        return await this.request("DescribeInstanceMonitorSIP", req, cb);
    }

    /**
     * 创建redis实例
     * @public
     */
    async CreateInstances(req: CreateInstancesRequest, cb?: (error: string, rep: CreateInstancesResponse) => void): Promise<CreateInstancesResponse> {
        return await this.request("CreateInstances", req, cb);
    }

    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     * @public
     */
    async UpgradeInstanceVersion(req: UpgradeInstanceVersionRequest, cb?: (error: string, rep: UpgradeInstanceVersionResponse) => void): Promise<UpgradeInstanceVersionResponse> {
        return await this.request("UpgradeInstanceVersion", req, cb);
    }

    /**
     * 查询实例续费价格（包年包月）
     * @public
     */
    async InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse> {
        return await this.request("InquiryPriceRenewInstance", req, cb);
    }

    /**
     * 查询实例扩容价格
     * @public
     */
    async InquiryPriceUpgradeInstance(req: InquiryPriceUpgradeInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeInstanceResponse) => void): Promise<InquiryPriceUpgradeInstanceResponse> {
        return await this.request("InquiryPriceUpgradeInstance", req, cb);
    }

    /**
     * 查询项目安全组信息
     * @public
     */
    async DescribeProjectSecurityGroup(req: DescribeProjectSecurityGroupRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupResponse) => void): Promise<DescribeProjectSecurityGroupResponse> {
        return await this.request("DescribeProjectSecurityGroup", req, cb);
    }

    /**
     * 查询实例热Key
     * @public
     */
    async DescribeInstanceMonitorHotKey(req: DescribeInstanceMonitorHotKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorHotKeyResponse) => void): Promise<DescribeInstanceMonitorHotKeyResponse> {
        return await this.request("DescribeInstanceMonitorHotKey", req, cb);
    }

    /**
     * 用于查询任务结果
     * @public
     */
    async DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse> {
        return await this.request("DescribeTaskInfo", req, cb);
    }

    /**
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     * @public
     */
    async DescribeBackupUrl(req: DescribeBackupUrlRequest, cb?: (error: string, rep: DescribeBackupUrlResponse) => void): Promise<DescribeBackupUrlResponse> {
        return await this.request("DescribeBackupUrl", req, cb);
    }

    /**
     * 启用读写分离
     * @public
     */
    async EnableReplicaReadonly(req: EnableReplicaReadonlyRequest, cb?: (error: string, rep: EnableReplicaReadonlyResponse) => void): Promise<EnableReplicaReadonlyResponse> {
        return await this.request("EnableReplicaReadonly", req, cb);
    }

    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     * @public
     */
    async DescribeProjectSecurityGroups(req: DescribeProjectSecurityGroupsRequest, cb?: (error: string, rep: DescribeProjectSecurityGroupsResponse) => void): Promise<DescribeProjectSecurityGroupsResponse> {
        return await this.request("DescribeProjectSecurityGroups", req, cb);
    }

    /**
     * 本接口 (AssociateSecurityGroups) 用于绑定安全组到指定实例。
     * @public
     */
    async AssociateSecurityGroups(req: AssociateSecurityGroupsRequest, cb?: (error: string, rep: AssociateSecurityGroupsResponse) => void): Promise<AssociateSecurityGroupsResponse> {
        return await this.request("AssociateSecurityGroups", req, cb);
    }

    /**
     * 修改实例参数
     * @public
     */
    async ModifyInstanceParams(req: ModifyInstanceParamsRequest, cb?: (error: string, rep: ModifyInstanceParamsResponse) => void): Promise<ModifyInstanceParamsResponse> {
        return await this.request("ModifyInstanceParams", req, cb);
    }

    /**
     * 查询新购实例价格
     * @public
     */
    async InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse> {
        return await this.request("InquiryPriceCreateInstance", req, cb);
    }

    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组
     * @public
     */
    async ModifyDBInstanceSecurityGroups(req: ModifyDBInstanceSecurityGroupsRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupsResponse) => void): Promise<ModifyDBInstanceSecurityGroupsResponse> {
        return await this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }

    /**
     * 按量计费实例销毁
     * @public
     */
    async DestroyPostpaidInstance(req: DestroyPostpaidInstanceRequest, cb?: (error: string, rep: DestroyPostpaidInstanceResponse) => void): Promise<DestroyPostpaidInstanceResponse> {
        return await this.request("DestroyPostpaidInstance", req, cb);
    }

    /**
     * 查询实例大Key
     * @public
     */
    async DescribeInstanceMonitorBigKey(req: DescribeInstanceMonitorBigKeyRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyResponse) => void): Promise<DescribeInstanceMonitorBigKeyResponse> {
        return await this.request("DescribeInstanceMonitorBigKey", req, cb);
    }

    /**
     * 查询实例安全组信息
     * @public
     */
    async DescribeInstanceSecurityGroup(req: DescribeInstanceSecurityGroupRequest, cb?: (error: string, rep: DescribeInstanceSecurityGroupResponse) => void): Promise<DescribeInstanceSecurityGroupResponse> {
        return await this.request("DescribeInstanceSecurityGroup", req, cb);
    }

    /**
     * 查询实例大Key类型分布
     * @public
     */
    async DescribeInstanceMonitorBigKeyTypeDist(req: DescribeInstanceMonitorBigKeyTypeDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorBigKeyTypeDistResponse) => void): Promise<DescribeInstanceMonitorBigKeyTypeDistResponse> {
        return await this.request("DescribeInstanceMonitorBigKeyTypeDist", req, cb);
    }

    /**
     * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     * @public
     */
    async DescribeProductInfo(req: DescribeProductInfoRequest, cb?: (error: string, rep: DescribeProductInfoResponse) => void): Promise<DescribeProductInfoResponse> {
        return await this.request("DescribeProductInfo", req, cb);
    }

    /**
     * 升级实例
     * @public
     */
    async UpgradeInstance(req: UpgradeInstanceRequest, cb?: (error: string, rep: UpgradeInstanceResponse) => void): Promise<UpgradeInstanceResponse> {
        return await this.request("UpgradeInstance", req, cb);
    }

    /**
     * 续费实例
     * @public
     */
    async RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse> {
        return await this.request("RenewInstance", req, cb);
    }

    /**
     * 手动备份Redis实例
     * @public
     */
    async ManualBackupInstance(req: ManualBackupInstanceRequest, cb?: (error: string, rep: ManualBackupInstanceResponse) => void): Promise<ManualBackupInstanceResponse> {
        return await this.request("ManualBackupInstance", req, cb);
    }

    /**
     * 修改redis密码
     * @public
     */
    async ModfiyInstancePassword(req: ModfiyInstancePasswordRequest, cb?: (error: string, rep: ModfiyInstancePasswordResponse) => void): Promise<ModfiyInstancePasswordResponse> {
        return await this.request("ModfiyInstancePassword", req, cb);
    }

    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     * @public
     */
    async DescribeDBSecurityGroups(req: DescribeDBSecurityGroupsRequest, cb?: (error: string, rep: DescribeDBSecurityGroupsResponse) => void): Promise<DescribeDBSecurityGroupsResponse> {
        return await this.request("DescribeDBSecurityGroups", req, cb);
    }

    /**
     * 查询实例参数列表
     * @public
     */
    async DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse> {
        return await this.request("DescribeInstanceParams", req, cb);
    }

    /**
     * 包年包月实例退还
     * @public
     */
    async DestroyPrepaidInstance(req: DestroyPrepaidInstanceRequest, cb?: (error: string, rep: DestroyPrepaidInstanceResponse) => void): Promise<DestroyPrepaidInstanceResponse> {
        return await this.request("DestroyPrepaidInstance", req, cb);
    }

    /**
     * 查询参数修改历史列表
     * @public
     */
    async DescribeInstanceParamRecords(req: DescribeInstanceParamRecordsRequest, cb?: (error: string, rep: DescribeInstanceParamRecordsResponse) => void): Promise<DescribeInstanceParamRecordsResponse> {
        return await this.request("DescribeInstanceParamRecords", req, cb);
    }

    /**
     * 清空Redis实例的实例数据。
     * @public
     */
    async ClearInstance(req: ClearInstanceRequest, cb?: (error: string, rep: ClearInstanceResponse) => void): Promise<ClearInstanceResponse> {
        return await this.request("ClearInstance", req, cb);
    }

    /**
     * 查询订单信息
     * @public
     */
    async DescribeInstanceDealDetail(req: DescribeInstanceDealDetailRequest, cb?: (error: string, rep: DescribeInstanceDealDetailResponse) => void): Promise<DescribeInstanceDealDetailResponse> {
        return await this.request("DescribeInstanceDealDetail", req, cb);
    }

    /**
     * 删除实例子账号
     * @public
     */
    async DeleteInstanceAccount(req: DeleteInstanceAccountRequest, cb?: (error: string, rep: DeleteInstanceAccountResponse) => void): Promise<DeleteInstanceAccountResponse> {
        return await this.request("DeleteInstanceAccount", req, cb);
    }

    /**
     * 查询 CRS 实例备份列表
     * @public
     */
    async DescribeInstanceBackups(req: DescribeInstanceBackupsRequest, cb?: (error: string, rep: DescribeInstanceBackupsResponse) => void): Promise<DescribeInstanceBackupsResponse> {
        return await this.request("DescribeInstanceBackups", req, cb);
    }

    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     * @public
     */
    async DisassociateSecurityGroups(req: DisassociateSecurityGroupsRequest, cb?: (error: string, rep: DisassociateSecurityGroupsResponse) => void): Promise<DisassociateSecurityGroupsResponse> {
        return await this.request("DisassociateSecurityGroups", req, cb);
    }

    /**
     * 实例解隔离
     * @public
     */
    async StartupInstance(req: StartupInstanceRequest, cb?: (error: string, rep: StartupInstanceResponse) => void): Promise<StartupInstanceResponse> {
        return await this.request("StartupInstance", req, cb);
    }

    /**
     * 修改实例相关信息
     * @public
     */
    async ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse> {
        return await this.request("ModifyInstance", req, cb);
    }

    /**
     * 查询实例访问的耗时分布
     * @public
     */
    async DescribeInstanceMonitorTookDist(req: DescribeInstanceMonitorTookDistRequest, cb?: (error: string, rep: DescribeInstanceMonitorTookDistResponse) => void): Promise<DescribeInstanceMonitorTookDistResponse> {
        return await this.request("DescribeInstanceMonitorTookDist", req, cb);
    }

    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     * @public
     */
    async SwitchInstanceVip(req: SwitchInstanceVipRequest, cb?: (error: string, rep: SwitchInstanceVipResponse) => void): Promise<SwitchInstanceVipResponse> {
        return await this.request("SwitchInstanceVip", req, cb);
    }


}
