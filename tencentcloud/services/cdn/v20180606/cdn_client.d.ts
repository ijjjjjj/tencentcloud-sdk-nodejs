import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeCdnDomainLogsResponse, DescribeCdnDomainLogsRequest, DescribePushQuotaResponse, DescribePurgeQuotaResponse, DescribeTrafficPackagesRequest, CreateClsLogTopicResponse, PurgePathCacheResponse, DescribePurgeQuotaRequest, EnableClsLogTopicRequest, UpdateImageConfigResponse, DeleteCdnDomainRequest, DescribePayTypeResponse, ListTopDataRequest, ListClsTopicDomainsRequest, DescribeDomainsResponse, UpdateImageConfigRequest, CreateClsLogTopicRequest, EnableCachesRequest, DescribeBillingDataRequest, DeleteClsLogTopicRequest, UpdatePayTypeResponse, DescribeDomainsConfigResponse, UpdatePayTypeRequest, DescribeReportDataResponse, DisableClsLogTopicRequest, ListClsTopicDomainsResponse, DescribeCdnIpRequest, DescribeIpVisitResponse, EnableClsLogTopicResponse, ListClsLogTopicsResponse, AddCdnDomainRequest, DescribePayTypeRequest, DescribeCertDomainsRequest, DescribeDomainsConfigRequest, StartCdnDomainRequest, DescribeCertDomainsResponse, DescribePushTasksResponse, AddCdnDomainResponse, DisableCachesRequest, DisableClsLogTopicResponse, DescribeIpStatusRequest, GetDisableRecordsResponse, ManageClsTopicDomainsRequest, DescribeOriginDataRequest, SearchClsLogResponse, PushUrlsCacheRequest, DescribeReportDataRequest, DescribePushTasksRequest, DescribeUrlViolationsRequest, StopCdnDomainRequest, DescribeMapInfoResponse, DescribeTrafficPackagesResponse, DescribeMapInfoRequest, EnableCachesResponse, DescribeIpVisitRequest, GetDisableRecordsRequest, PurgeUrlsCacheResponse, DeleteClsLogTopicResponse, DescribeBillingDataResponse, DisableCachesResponse, DescribeImageConfigRequest, DescribeCdnIpResponse, DescribeCdnDataResponse, DescribeIpStatusResponse, ListClsLogTopicsRequest, PurgePathCacheRequest, PurgeUrlsCacheRequest, StartCdnDomainResponse, DescribePushQuotaRequest, DescribePurgeTasksRequest, PushUrlsCacheResponse, StopCdnDomainResponse, ListTopDataResponse, UpdateDomainConfigResponse, SearchClsLogRequest, UpdateDomainConfigRequest, ManageClsTopicDomainsResponse, DescribeUrlViolationsResponse, DescribePurgeTasksResponse, DescribeOriginDataResponse, DeleteCdnDomainResponse, DescribeCdnDataRequest, DescribeImageConfigResponse, DescribeDomainsRequest } from "./cdn_models";
/**
 * cdn client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * DescribeIpStatus 用于查询域名所在加速平台的边缘节点、回源节点明细。注意事项：边缘节点（edge）尚未全量开放，未在内测名单中的账号不支持调用
     * @public
     */
    DescribeIpStatus(req: DescribeIpStatusRequest, cb?: (error: string, rep: DescribeIpStatusResponse) => void): Promise<DescribeIpStatusResponse>;
    /**
     * DescribeMapInfo 用于查询省份对应的 ID，运营商对应的 ID 信息。
     * @public
     */
    DescribeMapInfo(req: DescribeMapInfoRequest, cb?: (error: string, rep: DescribeMapInfoResponse) => void): Promise<DescribeMapInfoResponse>;
    /**
     * DeleteCdnDomain 用于删除指定加速域名
     * @public
     */
    DeleteCdnDomain(req: DeleteCdnDomainRequest, cb?: (error: string, rep: DeleteCdnDomainResponse) => void): Promise<DeleteCdnDomainResponse>;
    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 PurgePathCache 与 PurgeUrlsCache 接口提交的任务均可通过此接口进行查询。
     * @public
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * DescribePayType 用于查询用户的计费类型，计费周期等信息。
     * @public
     */
    DescribePayType(req: DescribePayTypeRequest, cb?: (error: string, rep: DescribePayTypeResponse) => void): Promise<DescribePayTypeResponse>;
    /**
     * DescribeDomainsConfig 用于查询内容分发网络加速域名（含境内、境外）的所有配置信息。
     * @public
     */
    DescribeDomainsConfig(req: DescribeDomainsConfigRequest, cb?: (error: string, rep: DescribeDomainsConfigResponse) => void): Promise<DescribeDomainsConfigResponse>;
    /**
     * AddCdnDomain 用于新增内容分发网络加速域名。
     * @public
     */
    AddCdnDomain(req: AddCdnDomainRequest, cb?: (error: string, rep: AddCdnDomainResponse) => void): Promise<AddCdnDomainResponse>;
    /**
       * DescribeIpVisit 用于查询 5 分钟活跃用户数，及日活跃用户数明细
  
  + 5 分钟活跃用户数：根据日志中客户端 IP，5 分钟粒度去重统计
  + 日活跃用户数：根据日志中客户端 IP，按天粒度去重统计
       * @public
       */
    DescribeIpVisit(req: DescribeIpVisitRequest, cb?: (error: string, rep: DescribeIpVisitResponse) => void): Promise<DescribeIpVisitResponse>;
    /**
       * DescribeCdnData 用于查询 CDN 实时访问监控数据，支持以下指标查询：
  
  + 流量（单位为 byte）
  + 带宽（单位为 bps）
  + 请求数（单位为 次）
  + 流量命中率（单位为 %，小数点后保留两位）
  + 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
  + 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
  + 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
  + 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
       * @public
       */
    DescribeCdnData(req: DescribeCdnDataRequest, cb?: (error: string, rep: DescribeCdnDataResponse) => void): Promise<DescribeCdnDataResponse>;
    /**
     * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，全网访问会直接返回 403。（接口尚在内测中，暂未全量开放使用）
     * @public
     */
    DisableCaches(req: DisableCachesRequest, cb?: (error: string, rep: DisableCachesResponse) => void): Promise<DisableCachesResponse>;
    /**
     * DescribeDomains 用于查询内容分发网络加速域名（含境内、境外）基本配置信息，包括项目ID、服务状态，业务类型、创建时间、更新时间等信息。
     * @public
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
     * ManageClsTopicDomains 用于管理某日志主题下绑定的域名列表。
     * @public
     */
    ManageClsTopicDomains(req: ManageClsTopicDomainsRequest, cb?: (error: string, rep: ManageClsTopicDomainsResponse) => void): Promise<ManageClsTopicDomainsResponse>;
    /**
     * StartCdnDomain 用于启用已停用域名的加速服务
     * @public
     */
    StartCdnDomain(req: StartCdnDomainRequest, cb?: (error: string, rep: StartCdnDomainResponse) => void): Promise<StartCdnDomainResponse>;
    /**
       * StopCdnDomain 用于停止域名的加速服务。
  注意：停止加速服务后，访问至加速节点的请求将会直接返回 404。为避免对您的业务造成影响，请在停止加速服务前将解析切走。
       * @public
       */
    StopCdnDomain(req: StopCdnDomainRequest, cb?: (error: string, rep: StopCdnDomainResponse) => void): Promise<StopCdnDomainResponse>;
    /**
     * DescribePurgeQuota 用于查询账户刷新配额和每日可用量。
     * @public
     */
    DescribePurgeQuota(req: DescribePurgeQuotaRequest, cb?: (error: string, rep: DescribePurgeQuotaResponse) => void): Promise<DescribePurgeQuotaResponse>;
    /**
     * DescribeImageConfig 用于获取域名图片优化的当前配置，支持Webp、TPG 和 Guetzli。
     * @public
     */
    DescribeImageConfig(req: DescribeImageConfigRequest, cb?: (error: string, rep: DescribeImageConfigResponse) => void): Promise<DescribeImageConfigResponse>;
    /**
     * SearchClsLog 用于 CLS 日志检索。支持检索今天，24小时（可选近7中的某一天），近7天的日志数据。
     * @public
     */
    SearchClsLog(req: SearchClsLogRequest, cb?: (error: string, rep: SearchClsLogResponse) => void): Promise<SearchClsLogResponse>;
    /**
       * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：
  
  + 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
  + 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
  + 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
  + 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
  + 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表
  
  注意：仅支持 90 天内数据查询
       * @public
       */
    ListTopData(req: ListTopDataRequest, cb?: (error: string, rep: ListTopDataResponse) => void): Promise<ListTopDataResponse>;
    /**
       * DescribeOriginData 用于查询 CDN 实时回源监控数据，支持以下指标查询：
  
  + 回源流量（单位为 byte）
  + 回源带宽（单位为 bps）
  + 回源请求数（单位为 次）
  + 回源失败请求数（单位为 次）
  + 回源失败率（单位为 %，小数点后保留两位）
  + 回源状态码 2xx 汇总及各 2 开头回源状态码明细（单位为 个）
  + 回源状态码 3xx 汇总及各 3 开头回源状态码明细（单位为 个）
  + 回源状态码 4xx 汇总及各 4 开头回源状态码明细（单位为 个）
  + 回源状态码 5xx 汇总及各 5 开头回源状态码明细（单位为 个）
       * @public
       */
    DescribeOriginData(req: DescribeOriginDataRequest, cb?: (error: string, rep: DescribeOriginDataResponse) => void): Promise<DescribeOriginDataResponse>;
    /**
       * DescribeCdnIp 用于查询 CDN IP 归属。
  （注意：此接口请求频率限制以 CDN 侧限制为准：200次/10分钟）
       * @public
       */
    DescribeCdnIp(req: DescribeCdnIpRequest, cb?: (error: string, rep: DescribeCdnIpResponse) => void): Promise<DescribeCdnIpResponse>;
    /**
       * PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。
  默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 20 条。
       * @public
       */
    PurgePathCache(req: PurgePathCacheRequest, cb?: (error: string, rep: PurgePathCacheResponse) => void): Promise<PurgePathCacheResponse>;
    /**
       * DescribeUrlViolations 用于查询被 CDN 系统扫描到的域名违规 URL 列表及当前状态。
  对应内容分发网络控制台【图片鉴黄】页面。
       * @public
       */
    DescribeUrlViolations(req: DescribeUrlViolationsRequest, cb?: (error: string, rep: DescribeUrlViolationsResponse) => void): Promise<DescribeUrlViolationsResponse>;
    /**
       * PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。
  默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。
       * @public
       */
    PurgeUrlsCache(req: PurgeUrlsCacheRequest, cb?: (error: string, rep: PurgeUrlsCacheResponse) => void): Promise<PurgeUrlsCacheResponse>;
    /**
     * DescribeTrafficPackages 用于查询中国境内 CDN 流量包详情。
     * @public
     */
    DescribeTrafficPackages(req: DescribeTrafficPackagesRequest, cb?: (error: string, rep: DescribeTrafficPackagesResponse) => void): Promise<DescribeTrafficPackagesResponse>;
    /**
       * UpdateDomainConfig 用于修改内容分发网络加速域名配置信息
  注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值，建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
       * @public
       */
    UpdateDomainConfig(req: UpdateDomainConfigRequest, cb?: (error: string, rep: UpdateDomainConfigResponse) => void): Promise<UpdateDomainConfigResponse>;
    /**
     * DescribeCdnDomainLogs 用于查询访问日志下载地址，仅支持 30 天以内的境内、境外访问日志下载链接查询。
     * @public
     */
    DescribeCdnDomainLogs(req: DescribeCdnDomainLogsRequest, cb?: (error: string, rep: DescribeCdnDomainLogsResponse) => void): Promise<DescribeCdnDomainLogsResponse>;
    /**
       * DescribePushTasks  用于查询预热任务提交历史记录及执行进度。
  接口灰度中，暂未全量开放，敬请期待。
       * @public
       */
    DescribePushTasks(req: DescribePushTasksRequest, cb?: (error: string, rep: DescribePushTasksResponse) => void): Promise<DescribePushTasksResponse>;
    /**
     * DescribeCertDomains 用于校验SSL证书并提取证书中包含的域名。
     * @public
     */
    DescribeCertDomains(req: DescribeCertDomainsRequest, cb?: (error: string, rep: DescribeCertDomainsResponse) => void): Promise<DescribeCertDomainsResponse>;
    /**
     * CreatClsLogTopic 用于创建日志主题。注意：一个日志集下至多可创建10个日志主题。
     * @public
     */
    CreateClsLogTopic(req: CreateClsLogTopicRequest, cb?: (error: string, rep: CreateClsLogTopicResponse) => void): Promise<CreateClsLogTopicResponse>;
    /**
       * PushUrlsCache 用于将指定 URL 资源列表加载至 CDN 节点，支持指定加速区域预热。
  默认情况下境内、境外每日预热 URL 限额为各 1000 条，每次最多可提交 20 条。
  接口灰度中，暂未全量开放，敬请期待。
       * @public
       */
    PushUrlsCache(req: PushUrlsCacheRequest, cb?: (error: string, rep: PushUrlsCacheResponse) => void): Promise<PushUrlsCacheResponse>;
    /**
     * UpdateImageConfig 用于更新控制台图片优化的相关配置，支持Webp、TPG 和 Guetzli。
     * @public
     */
    UpdateImageConfig(req: UpdateImageConfigRequest, cb?: (error: string, rep: UpdateImageConfigResponse) => void): Promise<UpdateImageConfigResponse>;
    /**
       * DisableClsLogTopic 用于停止日志主题投递。注意：停止后，所有绑定该日志主题域名的日志将不再继续投递至该主题，已经投递的日志将会继续保留。生效时间约为 5~15 分钟。
  
       * @public
       */
    DisableClsLogTopic(req: DisableClsLogTopicRequest, cb?: (error: string, rep: DisableClsLogTopicResponse) => void): Promise<DisableClsLogTopicResponse>;
    /**
     * ListClsTopicDomains 用于获取某日志主题下绑定的域名列表。
     * @public
     */
    ListClsTopicDomains(req: ListClsTopicDomainsRequest, cb?: (error: string, rep: ListClsTopicDomainsResponse) => void): Promise<ListClsTopicDomainsResponse>;
    /**
     * ListClsLogTopics 用于显示日志主题列表。注意：一个日志集下至多含10个日志主题。
     * @public
     */
    ListClsLogTopics(req: ListClsLogTopicsRequest, cb?: (error: string, rep: ListClsLogTopicsResponse) => void): Promise<ListClsLogTopicsResponse>;
    /**
     * GetDisableRecords 用于查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
     * @public
     */
    GetDisableRecords(req: GetDisableRecordsRequest, cb?: (error: string, rep: GetDisableRecordsResponse) => void): Promise<GetDisableRecordsResponse>;
    /**
     * DeleteClsLogTopic 用于删除日志主题。注意：删除后，所有该日志主题下绑定域名的日志将不再继续投递至该主题，已经投递的日志将会被全部清空。生效时间约为 5~15 分钟。
     * @public
     */
    DeleteClsLogTopic(req: DeleteClsLogTopicRequest, cb?: (error: string, rep: DeleteClsLogTopicResponse) => void): Promise<DeleteClsLogTopicResponse>;
    /**
     * DescribeBillingData 用于查询实际计费数据明细。
     * @public
     */
    DescribeBillingData(req: DescribeBillingDataRequest, cb?: (error: string, rep: DescribeBillingDataResponse) => void): Promise<DescribeBillingDataResponse>;
    /**
     * DescribePushQuota  用于查询预热配额和每日可用量。
     * @public
     */
    DescribePushQuota(req: DescribePushQuotaRequest, cb?: (error: string, rep: DescribePushQuotaResponse) => void): Promise<DescribePushQuotaResponse>;
    /**
     * EnableClsLogTopic 用于启动日志主题投递。注意：启动后，所有绑定该日志主题域名的日志将继续投递至该主题。生效时间约为 5~15 分钟。
     * @public
     */
    EnableClsLogTopic(req: EnableClsLogTopicRequest, cb?: (error: string, rep: EnableClsLogTopicResponse) => void): Promise<EnableClsLogTopicResponse>;
    /**
     * DescribeReportData 用于查询域名/项目维度的日/周/月报表数据。
     * @public
     */
    DescribeReportData(req: DescribeReportDataRequest, cb?: (error: string, rep: DescribeReportDataResponse) => void): Promise<DescribeReportDataResponse>;
    /**
     * 本接口(UpdatePayType)用于修改账号计费类型，暂不支持月结用户或子账号修改。
     * @public
     */
    UpdatePayType(req: UpdatePayTypeRequest, cb?: (error: string, rep: UpdatePayTypeResponse) => void): Promise<UpdatePayTypeResponse>;
    /**
     * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
     * @public
     */
    EnableCaches(req: EnableCachesRequest, cb?: (error: string, rep: EnableCachesResponse) => void): Promise<EnableCachesResponse>;
}