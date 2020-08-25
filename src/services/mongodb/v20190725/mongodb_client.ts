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
   DescribeSpecInfoRequest,
   CreateDBInstanceRequest,
   IsolateDBInstanceRequest,
   ResetDBInstancePasswordResponse,
   CreateBackupDBInstanceResponse,
   DBInstancePrice,
   BackupFile,
   InquirePriceCreateDBInstancesRequest,
   DescribeSlowLogPatternsResponse,
   SlowLogPattern,
   CreateDBInstanceHourRequest,
   AssignProjectRequest,
   DescribeSlowLogsResponse,
   ClientConnection,
   InquirePriceModifyDBInstanceSpecRequest,
   BackupInfo,
   InquirePriceRenewDBInstancesRequest,
   DescribeAsyncRequestInfoRequest,
   SpecificationInfo,
   DescribeSlowLogsRequest,
   DescribeSlowLogPatternsRequest,
   FlushInstanceRouterConfigResponse,
   InquirePriceModifyDBInstanceSpecResponse,
   SpecItem,
   DescribeSpecInfoResponse,
   InquirePriceRenewDBInstancesResponse,
   ResetDBInstancePasswordRequest,
   TagInfo,
   DescribeDBInstancesResponse,
   OfflineIsolatedDBInstanceRequest,
   DescribeDBInstanceDealRequest,
   DescribeDBInstancesRequest,
   DescribeAsyncRequestInfoResponse,
   CreateDBInstanceResponse,
   AssignProjectResponse,
   DescribeDBBackupsRequest,
   DescribeClientConnectionsRequest,
   DescribeDBInstanceDealResponse,
   ModifyDBInstanceSpecResponse,
   ShardInfo,
   OfflineIsolatedDBInstanceResponse,
   IsolateDBInstanceResponse,
   DescribeBackupAccessRequest,
   RenameInstanceRequest,
   RenewDBInstancesResponse,
   RenameInstanceResponse,
   DescribeClientConnectionsResponse,
   FlushInstanceRouterConfigRequest,
   DBInstanceInfo,
   DescribeBackupAccessResponse,
   DescribeDBBackupsResponse,
   InstanceDetail,
   ModifyDBInstanceSpecRequest,
   CreateDBInstanceHourResponse,
   CreateBackupDBInstanceRequest,
   InstanceChargePrepaid,
   InquirePriceCreateDBInstancesResponse,
   RenewDBInstancesRequest,

} from "./mongodb_models"

/**
 * mongodb client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("mongodb.tencentcloudapi.com", "2019-07-25", clientConfig);
    }
    
    /**
     * 本接口（DescribeDBInstanceDeal）用于获取MongoDB购买、续费及变配订单详细。
     * @public
     */
    async DescribeDBInstanceDeal(req: DescribeDBInstanceDealRequest, cb?: (error: string, rep: DescribeDBInstanceDealResponse) => void): Promise<DescribeDBInstanceDealResponse> {
        return await this.request("DescribeDBInstanceDeal", req, cb);
    }

    /**
     * 本接口(OfflineIsolatedDBInstance)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态。
     * @public
     */
    async OfflineIsolatedDBInstance(req: OfflineIsolatedDBInstanceRequest, cb?: (error: string, rep: OfflineIsolatedDBInstanceResponse) => void): Promise<OfflineIsolatedDBInstanceResponse> {
        return await this.request("OfflineIsolatedDBInstance", req, cb);
    }

    /**
     * 本接口(DescribeClientConnections)用于查询实例客户端连接信息，包括连接IP和连接数量。
     * @public
     */
    async DescribeClientConnections(req: DescribeClientConnectionsRequest, cb?: (error: string, rep: DescribeClientConnectionsResponse) => void): Promise<DescribeClientConnectionsResponse> {
        return await this.request("DescribeClientConnections", req, cb);
    }

    /**
     * 修改实例用户的密码
     * @public
     */
    async ResetDBInstancePassword(req: ResetDBInstancePasswordRequest, cb?: (error: string, rep: ResetDBInstancePasswordResponse) => void): Promise<ResetDBInstancePasswordResponse> {
        return await this.request("ResetDBInstancePassword", req, cb);
    }

    /**
     * 在所有mongos上执行FlushRouterConfig命令
     * @public
     */
    async FlushInstanceRouterConfig(req: FlushInstanceRouterConfigRequest, cb?: (error: string, rep: FlushInstanceRouterConfigResponse) => void): Promise<FlushInstanceRouterConfigResponse> {
        return await this.request("FlushInstanceRouterConfig", req, cb);
    }

    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表，目前只支持7天内的备份查询。
     * @public
     */
    async DescribeDBBackups(req: DescribeDBBackupsRequest, cb?: (error: string, rep: DescribeDBBackupsResponse) => void): Promise<DescribeDBBackupsResponse> {
        return await this.request("DescribeDBBackups", req, cb);
    }

    /**
     * 本接口(IsolateDBInstance)用于隔离MongoDB云数据库按量计费实例。隔离后实例保留在回收站中，不能再写入数据。隔离一定时间后，实例会彻底删除，回收站保存时间请参考按量计费的服务条款。在隔离中的按量计费实例无法恢复，请谨慎操作。
     * @public
     */
    async IsolateDBInstance(req: IsolateDBInstanceRequest, cb?: (error: string, rep: IsolateDBInstanceResponse) => void): Promise<IsolateDBInstanceResponse> {
        return await this.request("IsolateDBInstance", req, cb);
    }

    /**
     * 本接口（DescribeBackupAccess）用于获取备份文件的下载授权，具体的备份文件信息可通过查询实例备份列表（DescribeDBBackups）接口获取
     * @public
     */
    async DescribeBackupAccess(req: DescribeBackupAccessRequest, cb?: (error: string, rep: DescribeBackupAccessResponse) => void): Promise<DescribeBackupAccessResponse> {
        return await this.request("DescribeBackupAccess", req, cb);
    }

    /**
     * 本接口 (InquirePriceModifyDBInstanceSpec) 用于调整实例的配置询价。
     * @public
     */
    async InquirePriceModifyDBInstanceSpec(req: InquirePriceModifyDBInstanceSpecRequest, cb?: (error: string, rep: InquirePriceModifyDBInstanceSpecResponse) => void): Promise<InquirePriceModifyDBInstanceSpecResponse> {
        return await this.request("InquirePriceModifyDBInstanceSpec", req, cb);
    }

    /**
     * 查询异步任务状态接口
     * @public
     */
    async DescribeAsyncRequestInfo(req: DescribeAsyncRequestInfoRequest, cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void): Promise<DescribeAsyncRequestInfoResponse> {
        return await this.request("DescribeAsyncRequestInfo", req, cb);
    }

    /**
     * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例。
     * @public
     */
    async CreateDBInstanceHour(req: CreateDBInstanceHourRequest, cb?: (error: string, rep: CreateDBInstanceHourResponse) => void): Promise<CreateDBInstanceHourResponse> {
        return await this.request("CreateDBInstanceHour", req, cb);
    }

    /**
     * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     * @public
     */
    async DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse> {
        return await this.request("DescribeDBInstances", req, cb);
    }

    /**
     * 本接口（DescribeSlowLogPatterns）用于获取数据库实例慢日志的统计信息。
     * @public
     */
    async DescribeSlowLogPatterns(req: DescribeSlowLogPatternsRequest, cb?: (error: string, rep: DescribeSlowLogPatternsResponse) => void): Promise<DescribeSlowLogPatternsResponse> {
        return await this.request("DescribeSlowLogPatterns", req, cb);
    }

    /**
     * 本接口（DescribeSlowLogs）用于获取云数据库慢日志信息。接口只支持查询最近7天内慢日志。
     * @public
     */
    async DescribeSlowLogs(req: DescribeSlowLogsRequest, cb?: (error: string, rep: DescribeSlowLogsResponse) => void): Promise<DescribeSlowLogsResponse> {
        return await this.request("DescribeSlowLogs", req, cb);
    }

    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     * @public
     */
    async CreateDBInstance(req: CreateDBInstanceRequest, cb?: (error: string, rep: CreateDBInstanceResponse) => void): Promise<CreateDBInstanceResponse> {
        return await this.request("CreateDBInstance", req, cb);
    }

    /**
     * 本接口(ModifyDBInstanceSpec)用于调整MongoDB云数据库实例配置。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     * @public
     */
    async ModifyDBInstanceSpec(req: ModifyDBInstanceSpecRequest, cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void): Promise<ModifyDBInstanceSpecResponse> {
        return await this.request("ModifyDBInstanceSpec", req, cb);
    }

    /**
     * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
     * @public
     */
    async DescribeSpecInfo(req: DescribeSpecInfoRequest, cb?: (error: string, rep: DescribeSpecInfoResponse) => void): Promise<DescribeSpecInfoResponse> {
        return await this.request("DescribeSpecInfo", req, cb);
    }

    /**
     * 本接口用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
     * @public
     */
    async InquirePriceCreateDBInstances(req: InquirePriceCreateDBInstancesRequest, cb?: (error: string, rep: InquirePriceCreateDBInstancesResponse) => void): Promise<InquirePriceCreateDBInstancesResponse> {
        return await this.request("InquirePriceCreateDBInstances", req, cb);
    }

    /**
     * 本接口(AssignProject)用于指定云数据库实例的所属项目。

     * @public
     */
    async AssignProject(req: AssignProjectRequest, cb?: (error: string, rep: AssignProjectResponse) => void): Promise<AssignProjectResponse> {
        return await this.request("AssignProject", req, cb);
    }

    /**
     * 本接口(RenameInstance)用于修改云数据库实例的名称。
     * @public
     */
    async RenameInstance(req: RenameInstanceRequest, cb?: (error: string, rep: RenameInstanceResponse) => void): Promise<RenameInstanceResponse> {
        return await this.request("RenameInstance", req, cb);
    }

    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，仅支持付费模式为包年包月的实例。按量计费实例不需要续费。
     * @public
     */
    async RenewDBInstances(req: RenewDBInstancesRequest, cb?: (error: string, rep: RenewDBInstancesResponse) => void): Promise<RenewDBInstancesResponse> {
        return await this.request("RenewDBInstances", req, cb);
    }

    /**
     * 备份实例接口
     * @public
     */
    async CreateBackupDBInstance(req: CreateBackupDBInstanceRequest, cb?: (error: string, rep: CreateBackupDBInstanceResponse) => void): Promise<CreateBackupDBInstanceResponse> {
        return await this.request("CreateBackupDBInstance", req, cb);
    }

    /**
     * 本接口 (InquiryPriceRenewDBInstances) 用于续费包年包月实例询价。
     * @public
     */
    async InquirePriceRenewDBInstances(req: InquirePriceRenewDBInstancesRequest, cb?: (error: string, rep: InquirePriceRenewDBInstancesResponse) => void): Promise<InquirePriceRenewDBInstancesResponse> {
        return await this.request("InquirePriceRenewDBInstances", req, cb);
    }


}
