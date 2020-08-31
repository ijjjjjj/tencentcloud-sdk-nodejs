import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { InitDCDBInstancesResponse, UpgradeDCDBInstanceResponse, DescribeAccountPrivilegesResponse, DescribeDatabasesRequest, DescribeDBParametersRequest, DescribeAccountsRequest, DescribeDCDBPriceResponse, RenewDCDBInstanceResponse, DescribeDBSyncModeResponse, DescribeDCDBUpgradePriceResponse, CreateAccountRequest, CloneAccountResponse, ModifyAccountDescriptionResponse, CreateDCDBInstanceResponse, ModifyDBInstancesProjectResponse, DescribeDBLogFilesRequest, DescribeOrdersResponse, ResetAccountPasswordRequest, CopyAccountPrivilegesResponse, CloneAccountRequest, DescribeDCDBRenewalPriceRequest, DescribeDCDBPriceRequest, DescribeSqlLogsRequest, ResetAccountPasswordResponse, DescribeDCDBSaleInfoRequest, RenewDCDBInstanceRequest, GrantAccountPrivilegesRequest, DescribeShardSpecRequest, DescribeDCDBShardsRequest, ModifyDBParametersRequest, ModifyDBParametersResponse, CopyAccountPrivilegesRequest, DescribeDatabaseTableRequest, OpenDBExtranetAccessResponse, DescribeDatabaseObjectsResponse, DescribeDCDBRenewalPriceResponse, DescribeShardSpecResponse, DescribeDCDBShardsResponse, GrantAccountPrivilegesResponse, OpenDBExtranetAccessRequest, DescribeDCDBSaleInfoResponse, DescribeDBSyncModeRequest, CloseDBExtranetAccessResponse, ModifyAccountDescriptionRequest, DescribeProjectsRequest, DescribeDatabasesResponse, DescribeOrdersRequest, DescribeDBLogFilesResponse, CloseDBExtranetAccessRequest, InitDCDBInstancesRequest, DescribeSqlLogsResponse, DeleteAccountRequest, DescribeDCDBInstancesResponse, CreateDCDBInstanceRequest, DescribeDCDBUpgradePriceRequest, ModifyDBSyncModeRequest, DescribeProjectsResponse, CreateAccountResponse, DescribeDatabaseObjectsRequest, UpgradeDCDBInstanceRequest, DescribeDatabaseTableResponse, DescribeAccountPrivilegesRequest, DescribeAccountsResponse, DescribeDCDBInstancesRequest, DescribeDBParametersResponse, ModifyDBInstancesProjectRequest, ModifyDBSyncModeResponse, DeleteAccountResponse } from "./dcdb_models";
/**
 * dcdb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
       * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
  注意：注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    DescribeAccountPrivileges(req: DescribeAccountPrivilegesRequest, cb?: (error: string, rep: DescribeAccountPrivilegesResponse) => void): Promise<DescribeAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单ID来查询订单关联的分布式数据库实例，和对应的任务流程ID。
     * @public
     */
    DescribeOrders(req: DescribeOrdersRequest, cb?: (error: string, rep: DescribeOrdersResponse) => void): Promise<DescribeOrdersResponse>;
    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     * @public
     */
    DescribeDatabaseObjects(req: DescribeDatabaseObjectsRequest, cb?: (error: string, rep: DescribeDatabaseObjectsResponse) => void): Promise<DescribeDatabaseObjectsResponse>;
    /**
     * 查询可创建的分布式数据库可售卖的分片规格配置。
     * @public
     */
    DescribeShardSpec(req: DescribeShardSpecRequest, cb?: (error: string, rep: DescribeShardSpecResponse) => void): Promise<DescribeShardSpecResponse>;
    /**
     * 本接口（DescribeDCDBUpgradePrice）用于查询升级分布式数据库实例价格。
     * @public
     */
    DescribeDCDBUpgradePrice(req: DescribeDCDBUpgradePriceRequest, cb?: (error: string, rep: DescribeDCDBUpgradePriceResponse) => void): Promise<DescribeDCDBUpgradePriceResponse>;
    /**
       * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
  注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    ModifyAccountDescription(req: ModifyAccountDescriptionRequest, cb?: (error: string, rep: ModifyAccountDescriptionResponse) => void): Promise<ModifyAccountDescriptionResponse>;
    /**
       * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
  注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    ResetAccountPassword(req: ResetAccountPasswordRequest, cb?: (error: string, rep: ResetAccountPasswordResponse) => void): Promise<ResetAccountPasswordResponse>;
    /**
     * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
     * @public
     */
    DescribeDCDBPrice(req: DescribeDCDBPriceRequest, cb?: (error: string, rep: DescribeDCDBPriceResponse) => void): Promise<DescribeDCDBPriceResponse>;
    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     * @public
     */
    ModifyDBParameters(req: ModifyDBParametersRequest, cb?: (error: string, rep: ModifyDBParametersResponse) => void): Promise<ModifyDBParametersResponse>;
    /**
     * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
     * @public
     */
    DescribeDCDBSaleInfo(req: DescribeDCDBSaleInfoRequest, cb?: (error: string, rep: DescribeDCDBSaleInfoResponse) => void): Promise<DescribeDCDBSaleInfoResponse>;
    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     * @public
     */
    OpenDBExtranetAccess(req: OpenDBExtranetAccessRequest, cb?: (error: string, rep: OpenDBExtranetAccessResponse) => void): Promise<OpenDBExtranetAccessResponse>;
    /**
     * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @public
     */
    InitDCDBInstances(req: InitDCDBInstancesRequest, cb?: (error: string, rep: InitDCDBInstancesResponse) => void): Promise<InitDCDBInstancesResponse>;
    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     * @public
     */
    DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse>;
    /**
       * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
  注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    GrantAccountPrivileges(req: GrantAccountPrivilegesRequest, cb?: (error: string, rep: GrantAccountPrivilegesResponse) => void): Promise<GrantAccountPrivilegesResponse>;
    /**
     * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
     * @public
     */
    RenewDCDBInstance(req: RenewDCDBInstanceRequest, cb?: (error: string, rep: RenewDCDBInstanceResponse) => void): Promise<RenewDCDBInstanceResponse>;
    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     * @public
     */
    DeleteAccount(req: DeleteAccountRequest, cb?: (error: string, rep: DeleteAccountResponse) => void): Promise<DeleteAccountResponse>;
    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     * @public
     */
    DescribeDBParameters(req: DescribeDBParametersRequest, cb?: (error: string, rep: DescribeDBParametersResponse) => void): Promise<DescribeDBParametersResponse>;
    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     * @public
     */
    ModifyDBInstancesProject(req: ModifyDBInstancesProjectRequest, cb?: (error: string, rep: ModifyDBInstancesProjectResponse) => void): Promise<ModifyDBInstancesProjectResponse>;
    /**
     * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
     * @public
     */
    DescribeSqlLogs(req: DescribeSqlLogsRequest, cb?: (error: string, rep: DescribeSqlLogsResponse) => void): Promise<DescribeSqlLogsResponse>;
    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     * @public
     */
    DescribeDBLogFiles(req: DescribeDBLogFilesRequest, cb?: (error: string, rep: DescribeDBLogFilesResponse) => void): Promise<DescribeDBLogFilesResponse>;
    /**
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     * @public
     */
    DescribeDBSyncMode(req: DescribeDBSyncModeRequest, cb?: (error: string, rep: DescribeDBSyncModeResponse) => void): Promise<DescribeDBSyncModeResponse>;
    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     * @public
     */
    CreateAccount(req: CreateAccountRequest, cb?: (error: string, rep: CreateAccountResponse) => void): Promise<CreateAccountResponse>;
    /**
     * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @public
     */
    UpgradeDCDBInstance(req: UpgradeDCDBInstanceRequest, cb?: (error: string, rep: UpgradeDCDBInstanceResponse) => void): Promise<UpgradeDCDBInstanceResponse>;
    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     * @public
     */
    ModifyDBSyncMode(req: ModifyDBSyncModeRequest, cb?: (error: string, rep: ModifyDBSyncModeResponse) => void): Promise<ModifyDBSyncModeResponse>;
    /**
     * 本接口（DescribeProjects）用于查询项目列表
     * @public
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     * @public
     */
    CloseDBExtranetAccess(req: CloseDBExtranetAccessRequest, cb?: (error: string, rep: CloseDBExtranetAccessResponse) => void): Promise<CloseDBExtranetAccessResponse>;
    /**
       * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
  如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
       * @public
       */
    DescribeDCDBInstances(req: DescribeDCDBInstancesRequest, cb?: (error: string, rep: DescribeDCDBInstancesResponse) => void): Promise<DescribeDCDBInstancesResponse>;
    /**
       * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
  注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
       * @public
       */
    CopyAccountPrivileges(req: CopyAccountPrivilegesRequest, cb?: (error: string, rep: CopyAccountPrivilegesResponse) => void): Promise<CopyAccountPrivilegesResponse>;
    /**
     * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
     * @public
     */
    DescribeDCDBShards(req: DescribeDCDBShardsRequest, cb?: (error: string, rep: DescribeDCDBShardsResponse) => void): Promise<DescribeDCDBShardsResponse>;
    /**
     * 本接口（CreateDCDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
     * @public
     */
    CreateDCDBInstance(req: CreateDCDBInstanceRequest, cb?: (error: string, rep: CreateDCDBInstanceResponse) => void): Promise<CreateDCDBInstanceResponse>;
    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     * @public
     */
    DescribeDatabases(req: DescribeDatabasesRequest, cb?: (error: string, rep: DescribeDatabasesResponse) => void): Promise<DescribeDatabasesResponse>;
    /**
     * 本接口（DescribeDatabaseTable）用于查询云数据库实例的表信息。
     * @public
     */
    DescribeDatabaseTable(req: DescribeDatabaseTableRequest, cb?: (error: string, rep: DescribeDatabaseTableResponse) => void): Promise<DescribeDatabaseTableResponse>;
    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     * @public
     */
    CloneAccount(req: CloneAccountRequest, cb?: (error: string, rep: CloneAccountResponse) => void): Promise<CloneAccountResponse>;
    /**
     * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
     * @public
     */
    DescribeDCDBRenewalPrice(req: DescribeDCDBRenewalPriceRequest, cb?: (error: string, rep: DescribeDCDBRenewalPriceResponse) => void): Promise<DescribeDCDBRenewalPriceResponse>;
}