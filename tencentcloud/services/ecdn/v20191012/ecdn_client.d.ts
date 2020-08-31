import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { PurgePathCacheRequest, DescribeEcdnStatisticsRequest, StartEcdnDomainRequest, DescribeDomainsConfigResponse, PurgeUrlsCacheRequest, DescribePurgeQuotaResponse, DescribeEcdnDomainStatisticsResponse, StopEcdnDomainRequest, DescribePurgeTasksRequest, UpdateDomainConfigResponse, DescribePurgeQuotaRequest, DescribeEcdnDomainLogsResponse, UpdateDomainConfigRequest, DescribeDomainsConfigRequest, StartEcdnDomainResponse, DeleteEcdnDomainResponse, StopEcdnDomainResponse, PurgePathCacheResponse, PurgeUrlsCacheResponse, AddEcdnDomainRequest, DescribeDomainsResponse, DeleteEcdnDomainRequest, DescribePurgeTasksResponse, AddEcdnDomainResponse, DescribeEcdnStatisticsResponse, DescribeEcdnDomainStatisticsRequest, DescribeEcdnDomainLogsRequest, DescribeDomainsRequest } from "./ecdn_models";
/**
 * ecdn client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（AddEcdnDomain）用于创建加速域名。
     * @public
     */
    AddEcdnDomain(req: AddEcdnDomainRequest, cb?: (error: string, rep: AddEcdnDomainResponse) => void): Promise<AddEcdnDomainResponse>;
    /**
     * PurgePathCache 用于批量刷新目录缓存，一次提交将返回一个刷新任务id。
     * @public
     */
    PurgePathCache(req: PurgePathCacheRequest, cb?: (error: string, rep: PurgePathCacheResponse) => void): Promise<PurgePathCacheResponse>;
    /**
     * 本接口（StartEcdnDomain）用于启用加速域名，待启用域名必须处于已下线状态。
     * @public
     */
    StartEcdnDomain(req: StartEcdnDomainRequest, cb?: (error: string, rep: StartEcdnDomainResponse) => void): Promise<StartEcdnDomainResponse>;
    /**
       * 本接口（UpdateDomainConfig）用于更新ECDN加速域名配置信息。
  注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值。建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
       * @public
       */
    UpdateDomainConfig(req: UpdateDomainConfigRequest, cb?: (error: string, rep: UpdateDomainConfigResponse) => void): Promise<UpdateDomainConfigResponse>;
    /**
     * DescribePurgeTasks 用于查询刷新任务提交历史记录及执行进度。
     * @public
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 本接口（DescribeEcdnDomainLogs）用于查询域名的访问日志下载地址。
     * @public
     */
    DescribeEcdnDomainLogs(req: DescribeEcdnDomainLogsRequest, cb?: (error: string, rep: DescribeEcdnDomainLogsResponse) => void): Promise<DescribeEcdnDomainLogsResponse>;
    /**
     * 本接口（DescribeDomainsConfig）用于查询CDN加速域名详细配置信息。
     * @public
     */
    DescribeDomainsConfig(req: DescribeDomainsConfigRequest, cb?: (error: string, rep: DescribeDomainsConfigResponse) => void): Promise<DescribeDomainsConfigResponse>;
    /**
     * 查询刷新接口的用量配额。
     * @public
     */
    DescribePurgeQuota(req: DescribePurgeQuotaRequest, cb?: (error: string, rep: DescribePurgeQuotaResponse) => void): Promise<DescribePurgeQuotaResponse>;
    /**
     * PurgeUrlsCache 用于批量刷新Url，一次提交将返回一个刷新任务id。
     * @public
     */
    PurgeUrlsCache(req: PurgeUrlsCacheRequest, cb?: (error: string, rep: PurgeUrlsCacheResponse) => void): Promise<PurgeUrlsCacheResponse>;
    /**
     * 本接口（StopCdnDomain）用于停止加速域名，待停用加速域名必须处于已上线或部署中状态。
     * @public
     */
    StopEcdnDomain(req: StopEcdnDomainRequest, cb?: (error: string, rep: StopEcdnDomainResponse) => void): Promise<StopEcdnDomainResponse>;
    /**
     * 本接口（DeleteEcdnDomain）用于删除指定加速域名。待删除域名必须处于已停用状态。
     * @public
     */
    DeleteEcdnDomain(req: DeleteEcdnDomainRequest, cb?: (error: string, rep: DeleteEcdnDomainResponse) => void): Promise<DeleteEcdnDomainResponse>;
    /**
     * 本接口（DescribeDomains）用于查询CDN域名基本信息，包括项目id，状态，业务类型，创建时间，更新时间等。
     * @public
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
       * DescribeEcdnStatistics用于查询 ECDN 实时访问监控数据，支持以下指标查询：
  
  + 流量（单位为 byte）
  + 带宽（单位为 bps）
  + 请求数（单位为 次）
  + 响应时间（单位为ms）
  + 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
  + 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
  + 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
  + 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
       * @public
       */
    DescribeEcdnStatistics(req: DescribeEcdnStatisticsRequest, cb?: (error: string, rep: DescribeEcdnStatisticsResponse) => void): Promise<DescribeEcdnStatisticsResponse>;
    /**
     * 本接口（DescribeEcdnDomainStatistics）用于查询指定时间段内的域名访问统计指标
     * @public
     */
    DescribeEcdnDomainStatistics(req: DescribeEcdnDomainStatisticsRequest, cb?: (error: string, rep: DescribeEcdnDomainStatisticsResponse) => void): Promise<DescribeEcdnDomainStatisticsResponse>;
}