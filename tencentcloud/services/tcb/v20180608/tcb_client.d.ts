import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { CreateHostingDomainResponse, CreateStaticStoreResponse, DescribeEnvLimitRequest, DescribeQuotaDataResponse, CheckTcbServiceResponse, DescribeEndUserLoginStatisticRequest, CreatePostpayPackageResponse, CommonServiceAPIRequest, DescribeEndUsersResponse, CreateStaticStoreRequest, CommonServiceAPIResponse, DescribeEndUserStatisticResponse, DescribePostpayPackageFreeQuotasRequest, CreateAuthDomainResponse, ModifyEnvRequest, DescribeEndUsersRequest, DescribeEnvsRequest, DescribeQuotaDataRequest, ReinstateEnvResponse, DescribeEndUserStatisticRequest, DescribeEnvFreeQuotaResponse, CheckTcbServiceRequest, ModifyDatabaseACLResponse, DescribeExtraPkgBillingInfoResponse, DescribeExtraPkgBillingInfoRequest, CreatePostpayPackageRequest, DescribeEnvFreeQuotaRequest, DescribeAuthDomainsRequest, DeleteEndUserRequest, DescribeAuthDomainsResponse, ReinstateEnvRequest, DescribeDatabaseACLRequest, CreateHostingDomainRequest, DestroyStaticStoreResponse, DeleteEndUserResponse, ModifyEndUserRequest, DescribeDatabaseACLResponse, DestroyEnvRequest, DestroyEnvResponse, ModifyDatabaseACLRequest, DestroyStaticStoreRequest, ModifyEndUserResponse, DescribeEnvLimitResponse, DescribePostpayPackageFreeQuotasResponse, DescribeEndUserLoginStatisticResponse, DescribeEnvsResponse, ModifyEnvResponse, CreateAuthDomainRequest } from "./tcb_models";
/**
 * tcb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建托管域名
     * @public
     */
    CreateHostingDomain(req: CreateHostingDomainRequest, cb?: (error: string, rep: CreateHostingDomainResponse) => void): Promise<CreateHostingDomainResponse>;
    /**
     * 获取终端用户列表
     * @public
     */
    DescribeEndUsers(req: DescribeEndUsersRequest, cb?: (error: string, rep: DescribeEndUsersResponse) => void): Promise<DescribeEndUsersResponse>;
    /**
     * 增加安全域名
     * @public
     */
    CreateAuthDomain(req: CreateAuthDomainRequest, cb?: (error: string, rep: CreateAuthDomainResponse) => void): Promise<CreateAuthDomainResponse>;
    /**
     * 获取安全域名列表
     * @public
     */
    DescribeAuthDomains(req: DescribeAuthDomainsRequest, cb?: (error: string, rep: DescribeAuthDomainsResponse) => void): Promise<DescribeAuthDomainsResponse>;
    /**
     * 开通后付费资源
     * @public
     */
    CreatePostpayPackage(req: CreatePostpayPackageRequest, cb?: (error: string, rep: CreatePostpayPackageResponse) => void): Promise<CreatePostpayPackageResponse>;
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     * @public
     */
    ReinstateEnv(req: ReinstateEnvRequest, cb?: (error: string, rep: ReinstateEnvResponse) => void): Promise<ReinstateEnvResponse>;
    /**
     * 获取终端用户总量与平台分布情况
     * @public
     */
    DescribeEndUserStatistic(req: DescribeEndUserStatisticRequest, cb?: (error: string, rep: DescribeEndUserStatisticResponse) => void): Promise<DescribeEndUserStatisticResponse>;
    /**
     * 管理终端用户
     * @public
     */
    ModifyEndUser(req: ModifyEndUserRequest, cb?: (error: string, rep: ModifyEndUserResponse) => void): Promise<ModifyEndUserResponse>;
    /**
     * 获取后付费免费额度
     * @public
     */
    DescribePostpayPackageFreeQuotas(req: DescribePostpayPackageFreeQuotasRequest, cb?: (error: string, rep: DescribePostpayPackageFreeQuotasResponse) => void): Promise<DescribePostpayPackageFreeQuotasResponse>;
    /**
     * TCB云API统一入口
     * @public
     */
    CommonServiceAPI(req: CommonServiceAPIRequest, cb?: (error: string, rep: CommonServiceAPIResponse) => void): Promise<CommonServiceAPIResponse>;
    /**
     * 检查是否开通Tcb服务
     * @public
     */
    CheckTcbService(req: CheckTcbServiceRequest, cb?: (error: string, rep: CheckTcbServiceResponse) => void): Promise<CheckTcbServiceResponse>;
    /**
     * 删除终端用户
     * @public
     */
    DeleteEndUser(req: DeleteEndUserRequest, cb?: (error: string, rep: DeleteEndUserResponse) => void): Promise<DeleteEndUserResponse>;
    /**
     * 获取环境终端用户新增与登录信息
     * @public
     */
    DescribeEndUserLoginStatistic(req: DescribeEndUserLoginStatisticRequest, cb?: (error: string, rep: DescribeEndUserLoginStatisticResponse) => void): Promise<DescribeEndUserLoginStatisticResponse>;
    /**
     * 查询指定指标的配额使用量
     * @public
     */
    DescribeQuotaData(req: DescribeQuotaDataRequest, cb?: (error: string, rep: DescribeQuotaDataResponse) => void): Promise<DescribeQuotaDataResponse>;
    /**
     * 获取增值包计费相关信息
     * @public
     */
    DescribeExtraPkgBillingInfo(req: DescribeExtraPkgBillingInfoRequest, cb?: (error: string, rep: DescribeExtraPkgBillingInfoResponse) => void): Promise<DescribeExtraPkgBillingInfoResponse>;
    /**
     * 更新环境信息
     * @public
     */
    ModifyEnv(req: ModifyEnvRequest, cb?: (error: string, rep: ModifyEnvResponse) => void): Promise<ModifyEnvResponse>;
    /**
     * 获取数据库权限
     * @public
     */
    DescribeDatabaseACL(req: DescribeDatabaseACLRequest, cb?: (error: string, rep: DescribeDatabaseACLResponse) => void): Promise<DescribeDatabaseACLResponse>;
    /**
     * 销毁环境
     * @public
     */
    DestroyEnv(req: DestroyEnvRequest, cb?: (error: string, rep: DestroyEnvResponse) => void): Promise<DestroyEnvResponse>;
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @public
     */
    DescribeEnvs(req: DescribeEnvsRequest, cb?: (error: string, rep: DescribeEnvsResponse) => void): Promise<DescribeEnvsResponse>;
    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     * @public
     */
    DestroyStaticStore(req: DestroyStaticStoreRequest, cb?: (error: string, rep: DestroyStaticStoreResponse) => void): Promise<DestroyStaticStoreResponse>;
    /**
     * 修改数据库权限
     * @public
     */
    ModifyDatabaseACL(req: ModifyDatabaseACLRequest, cb?: (error: string, rep: ModifyDatabaseACLResponse) => void): Promise<ModifyDatabaseACLResponse>;
    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     * @public
     */
    CreateStaticStore(req: CreateStaticStoreRequest, cb?: (error: string, rep: CreateStaticStoreResponse) => void): Promise<CreateStaticStoreResponse>;
    /**
     * 查询环境个数上限
     * @public
     */
    DescribeEnvLimit(req: DescribeEnvLimitRequest, cb?: (error: string, rep: DescribeEnvLimitResponse) => void): Promise<DescribeEnvLimitResponse>;
    /**
     * 查询后付费免费配额信息
     * @public
     */
    DescribeEnvFreeQuota(req: DescribeEnvFreeQuotaRequest, cb?: (error: string, rep: DescribeEnvFreeQuotaResponse) => void): Promise<DescribeEnvFreeQuotaResponse>;
}
