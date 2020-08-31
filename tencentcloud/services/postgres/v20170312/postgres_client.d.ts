import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { CreateDBInstancesRequest, CloseServerlessDBExtranetAccessResponse, DestroyDBInstanceRequest, CreateServerlessDBInstanceRequest, InquiryPriceRenewDBInstanceRequest, SetAutoRenewFlagRequest, DescribeOrdersResponse, DeleteServerlessDBInstanceRequest, DescribeDBXlogsRequest, InquiryPriceCreateDBInstancesResponse, InquiryPriceUpgradeDBInstanceRequest, DescribeAccountsRequest, DescribeDBErrlogsResponse, InquiryPriceCreateDBInstancesRequest, ModifyDBInstanceNameRequest, DescribeProductConfigRequest, CreateDBInstancesResponse, RestartDBInstanceRequest, DescribeDBInstancesRequest, DescribeServerlessDBInstancesResponse, ModifyDBInstancesProjectResponse, RenewInstanceResponse, DescribeZonesRequest, UpgradeDBInstanceRequest, OpenServerlessDBExtranetAccessRequest, DeleteServerlessDBInstanceResponse, InitDBInstancesRequest, RestartDBInstanceResponse, SetAutoRenewFlagResponse, DescribeDBInstancesResponse, DescribeProductConfigResponse, ResetAccountPasswordResponse, ResetAccountPasswordRequest, DescribeOrdersRequest, InquiryPriceUpgradeDBInstanceResponse, InitDBInstancesResponse, DescribeDBBackupsRequest, OpenDBExtranetAccessResponse, RenewInstanceRequest, DescribeRegionsResponse, DescribeDatabasesRequest, DescribeAccountsResponse, InquiryPriceRenewDBInstanceResponse, DescribeDBErrlogsRequest, ModifyDBInstancesProjectRequest, UpgradeDBInstanceResponse, ModifyDBInstanceNameResponse, OpenServerlessDBExtranetAccessResponse, CloseDBExtranetAccessResponse, DestroyDBInstanceResponse, DescribeDBInstanceAttributeResponse, DescribeDBSlowlogsRequest, DescribeServerlessDBInstancesRequest, OpenDBExtranetAccessRequest, DescribeDBBackupsResponse, DescribeRegionsRequest, DescribeZonesResponse, CreateServerlessDBInstanceResponse, DescribeDatabasesResponse, DescribeDBXlogsResponse, DescribeDBInstanceAttributeRequest, CloseServerlessDBExtranetAccessRequest, ModifyAccountRemarkResponse, DescribeDBSlowlogsResponse, ModifyAccountRemarkRequest, CloseDBExtranetAccessRequest } from "./postgres_models";
/**
 * postgres client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     * @public
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口 (DestroyDBInstance) 用于销毁指定DBInstanceId对应的实例。
     * @public
     */
    DestroyDBInstance(req: DestroyDBInstanceRequest, cb?: (error: string, rep: DestroyDBInstanceResponse) => void): Promise<DestroyDBInstanceResponse>;
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     * @public
     */
    DescribeDBBackups(req: DescribeDBBackupsRequest, cb?: (error: string, rep: DescribeDBBackupsResponse) => void): Promise<DescribeDBBackupsResponse>;
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     * @public
     */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     * @public
     */
    DescribeDBErrlogs(req: DescribeDBErrlogsRequest, cb?: (error: string, rep: DescribeDBErrlogsResponse) => void): Promise<DescribeDBErrlogsResponse>;
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     * @public
     */
    RestartDBInstance(req: RestartDBInstanceRequest, cb?: (error: string, rep: RestartDBInstanceResponse) => void): Promise<RestartDBInstanceResponse>;
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     * @public
     */
    InquiryPriceCreateDBInstances(req: InquiryPriceCreateDBInstancesRequest, cb?: (error: string, rep: InquiryPriceCreateDBInstancesResponse) => void): Promise<InquiryPriceCreateDBInstancesResponse>;
    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     * @public
     */
    OpenDBExtranetAccess(req: OpenDBExtranetAccessRequest, cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void): Promise<OpenDBExtranetAccessResponse>;
    /**
     * 关闭serverlessDB实例外网
     * @public
     */
    CloseServerlessDBExtranetAccess(req: CloseServerlessDBExtranetAccessRequest, cb?: (error: string, rep: CloseServerlessDBExtranetAccessResponse) => void): Promise<CloseServerlessDBExtranetAccessResponse>;
    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     * @public
     */
    ModifyDBInstancesProject(req: ModifyDBInstancesProjectRequest, cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void): Promise<ModifyDBInstancesProjectResponse>;
    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     * @public
     */
    ModifyAccountRemark(req: ModifyAccountRemarkRequest, cb?: (error: string, rep: ModifyAccountRemarkResponse) => void): Promise<ModifyAccountRemarkResponse>;
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     * @public
     */
    DescribeDBXlogs(req: DescribeDBXlogsRequest, cb?: (error: string, rep: DescribeDBXlogsResponse) => void): Promise<DescribeDBXlogsResponse>;
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     * @public
     */
    SetAutoRenewFlag(req: SetAutoRenewFlagRequest, cb?: (error: string, rep: SetAutoRenewFlagResponse) => void): Promise<SetAutoRenewFlagResponse>;
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     * @public
     */
    DescribeDBInstanceAttribute(req: DescribeDBInstanceAttributeRequest, cb?: (error: string, rep: DescribeDBInstanceAttributeResponse) => void): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     * @public
     */
    ModifyDBInstanceName(req: ModifyDBInstanceNameRequest, cb?: (error: string, rep: ModifyDBInstanceNameResponse) => void): Promise<ModifyDBInstanceNameResponse>;
    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例。
     * @public
     */
    CreateDBInstances(req: CreateDBInstancesRequest, cb?: (error: string, rep: CreateDBInstancesResponse) => void): Promise<CreateDBInstancesResponse>;
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     * @public
     */
    CreateServerlessDBInstance(req: CreateServerlessDBInstanceRequest, cb?: (error: string, rep: CreateServerlessDBInstanceResponse) => void): Promise<CreateServerlessDBInstanceResponse>;
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     * @public
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     * @public
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     * @public
     */
    DeleteServerlessDBInstance(req: DeleteServerlessDBInstanceRequest, cb?: (error: string, rep: DeleteServerlessDBInstanceResponse) => void): Promise<DeleteServerlessDBInstanceResponse>;
    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     * @public
     */
    InitDBInstances(req: InitDBInstancesRequest, cb?: (error: string, rep: InitDBInstancesResponse) => void): Promise<InitDBInstancesResponse>;
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     * @public
     */
    InquiryPriceUpgradeDBInstance(req: InquiryPriceUpgradeDBInstanceRequest, cb?: (error: string, rep: InquiryPriceUpgradeDBInstanceResponse) => void): Promise<InquiryPriceUpgradeDBInstanceResponse>;
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     * @public
     */
    DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     * @public
     */
    InquiryPriceRenewDBInstance(req: InquiryPriceRenewDBInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewDBInstanceResponse) => void): Promise<InquiryPriceRenewDBInstanceResponse>;
    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     * @public
     */
    CloseDBExtranetAccess(req: CloseDBExtranetAccessRequest, cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void): Promise<CloseDBExtranetAccessResponse>;
    /**
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     * @public
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
     * 开通serverlessDB实例外网
     * @public
     */
    OpenServerlessDBExtranetAccess(req: OpenServerlessDBExtranetAccessRequest, cb?: (error: string, rep: OpenServerlessDBExtranetAccessResponse) => void): Promise<OpenServerlessDBExtranetAccessResponse>;
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     * @public
     */
    DescribeServerlessDBInstances(req: DescribeServerlessDBInstancesRequest, cb?: (error: string, rep: DescribeServerlessDBInstancesResponse) => void): Promise<DescribeServerlessDBInstancesResponse>;
    /**
     * 本接口（RenewInstance）用于续费实例。
     * @public
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     * @public
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口（UpgradeDBInstance）用于升级实例。
     * @public
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     * @public
     */
    DescribeProductConfig(req: DescribeProductConfigRequest, cb?: (error: string, rep: DescribeProductConfigResponse) => void): Promise<DescribeProductConfigResponse>;
    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。
     * @public
     */
    DescribeDBSlowlogs(req: DescribeDBSlowlogsRequest, cb?: (error: string, rep: DescribeDBSlowlogsResponse) => void): Promise<DescribeDBSlowlogsResponse>;
}