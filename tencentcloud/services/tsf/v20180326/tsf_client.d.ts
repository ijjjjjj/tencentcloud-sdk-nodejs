import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeMsApiListRequest, DescribeGroupInstancesResponse, DescribeMsApiListResponse, DescribeDownloadInfoRequest, DescribePublicConfigSummaryRequest, DescribeClusterInstancesResponse, DescribeMicroserviceRequest, DescribeContainerGroupsRequest, ExpandGroupRequest, DeleteServerlessGroupRequest, DescribeImageTagsRequest, ModifyLaneRuleResponse, DescribeSimpleClustersResponse, DescribePodInstancesResponse, DescribeRepositoryResponse, RevocationConfigRequest, ModifyUploadInfoRequest, DescribeUploadInfoResponse, DescribeReleasedConfigRequest, DescribeApiVersionsResponse, DescribeRepositoriesResponse, StopGroupResponse, StartContainerGroupResponse, CreateGroupRequest, ModifyMicroserviceRequest, DescribeConfigReleasesRequest, DeleteLaneResponse, ModifyLaneResponse, CreateContainGroupResponse, DescribeContainerGroupDetailResponse, DescribePublicConfigSummaryResponse, DescribeSimpleApplicationsResponse, DeleteRepositoryResponse, DescribePublicConfigReleaseLogsRequest, CreateServerlessGroupResponse, CreateLaneRequest, DeleteApplicationResponse, UpdateRepositoryRequest, DeployServerlessGroupResponse, DescribeConfigsResponse, DescribeApplicationAttributeResponse, DescribeApplicationsResponse, ModifyContainerReplicasRequest, ModifyLaneRequest, DescribeLanesRequest, DeleteMicroserviceRequest, CreatePublicConfigRequest, RemoveInstancesResponse, DescribeApiVersionsRequest, ModifyContainerReplicasResponse, DescribeConfigRequest, DescribeGroupResponse, DescribeGroupsResponse, DeleteContainerGroupResponse, DescribeSimpleGroupsRequest, CreateNamespaceResponse, DeleteServerlessGroupResponse, DeleteImageTagsResponse, ModifyUploadInfoResponse, DescribeImageTagsResponse, DeleteGroupRequest, DescribeApplicationResponse, DescribeConfigReleaseLogsResponse, RevocationConfigResponse, DescribeSimpleGroupsResponse, DeletePublicConfigRequest, DeleteNamespaceResponse, CreateMicroserviceRequest, DescribePkgsRequest, ReleaseConfigResponse, RemoveInstancesRequest, ShrinkInstancesRequest, ShrinkInstancesResponse, DeleteImageTagsRequest, DescribeRepositoriesRequest, DescribeApplicationAttributeRequest, DescribePodInstancesRequest, DescribeConfigsRequest, AddClusterInstancesRequest, DescribePublicConfigResponse, RollbackConfigRequest, DeleteConfigResponse, DescribeContainerGroupsResponse, DescribeSimpleApplicationsRequest, DescribeConfigResponse, DescribeSimpleNamespacesRequest, ExpandGroupResponse, DescribeServerlessGroupsResponse, DescribePublicConfigsResponse, ModifyLaneRuleRequest, AddInstancesResponse, DeleteApplicationRequest, RevocationPublicConfigRequest, DescribeSimpleClustersRequest, StartContainerGroupRequest, DeleteConfigRequest, DescribePublicConfigReleaseLogsResponse, DeployServerlessGroupRequest, CreateClusterResponse, DeletePublicConfigResponse, CreateMicroserviceResponse, CreateClusterRequest, StopGroupRequest, ShrinkGroupResponse, DeleteContainerGroupRequest, DescribeContainerGroupDetailRequest, ReleaseConfigRequest, CreateConfigRequest, CreateNamespaceRequest, DescribeApiDetailRequest, DescribeUploadInfoRequest, DescribeClusterInstancesRequest, StopContainerGroupRequest, DescribeRepositoryRequest, DescribeGroupRequest, StopContainerGroupResponse, CreateLaneResponse, DescribeServerlessGroupRequest, DescribePkgsResponse, DescribeSimpleNamespacesResponse, DeletePkgsResponse, DescribeConfigReleasesResponse, ModifyMicroserviceResponse, DescribeMicroservicesResponse, DescribeDownloadInfoResponse, DescribeApplicationRequest, DescribePublicConfigRequest, StartGroupResponse, DeployContainerGroupResponse, CreatePublicConfigResponse, DeleteMicroserviceResponse, DescribeLanesResponse, DescribeReleasedConfigResponse, DescribeMicroservicesRequest, ShrinkGroupRequest, CreateConfigResponse, AddClusterInstancesResponse, CreateLaneRuleResponse, DescribeConfigReleaseLogsRequest, DescribeApiDetailResponse, DescribeGroupsRequest, ModifyContainerGroupRequest, UpdateRepositoryResponse, DescribePublicConfigsRequest, AddInstancesRequest, StartGroupRequest, RollbackConfigResponse, DescribeApplicationsRequest, CreateRepositoryRequest, CreateApplicationRequest, DescribePublicConfigReleasesRequest, DeleteNamespaceRequest, DescribeLaneRulesRequest, DeployGroupRequest, CreateServerlessGroupRequest, DescribeMicroserviceResponse, DeleteGroupResponse, CreateRepositoryResponse, CreateLaneRuleRequest, DescribeServerlessGroupsRequest, DeployContainerGroupRequest, DeletePkgsRequest, DescribeConfigSummaryResponse, CreateContainGroupRequest, DescribePublicConfigReleasesResponse, DescribeLaneRulesResponse, CreateApplicationResponse, DeleteRepositoryRequest, DescribeConfigSummaryRequest, DeleteLaneRequest, DeployGroupResponse, ModifyContainerGroupResponse, ReleasePublicConfigResponse, ReleasePublicConfigRequest, DescribeServerlessGroupResponse, RevocationPublicConfigResponse, DescribeGroupInstancesRequest, CreateGroupResponse } from "./tsf_models";
/**
 * tsf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 删除公共配置项
     * @public
     */
    DeletePublicConfig(req: DeletePublicConfigRequest, cb?: (error: string, rep: DeletePublicConfigResponse) => void): Promise<DeletePublicConfigResponse>;
    /**
     * 创建集群
     * @public
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 修改容器部署组实例数
     * @public
     */
    ModifyContainerReplicas(req: ModifyContainerReplicasRequest, cb?: (error: string, rep: ModifyContainerReplicasResponse) => void): Promise<ModifyContainerReplicasResponse>;
    /**
     * 虚拟机部署组下线实例
     * @public
     */
    ShrinkInstances(req: ShrinkInstancesRequest, cb?: (error: string, rep: ShrinkInstancesResponse) => void): Promise<ShrinkInstancesResponse>;
    /**
     * 获取部署组实例列表
     * @public
     */
    DescribePodInstances(req: DescribePodInstancesRequest, cb?: (error: string, rep: DescribePodInstancesResponse) => void): Promise<DescribePodInstancesResponse>;
    /**
     * 创建命名空间
     * @public
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
    /**
     * 添加云主机节点至TSF集群
     * @public
     */
    AddClusterInstances(req: AddClusterInstancesRequest, cb?: (error: string, rep: AddClusterInstancesResponse) => void): Promise<AddClusterInstancesResponse>;
    /**
     * 查询公共配置汇总列表
     * @public
     */
    DescribePublicConfigSummary(req: DescribePublicConfigSummaryRequest, cb?: (error: string, rep: DescribePublicConfigSummaryResponse) => void): Promise<DescribePublicConfigSummaryResponse>;
    /**
     * 容器部署组列表
     * @public
     */
    DescribeContainerGroups(req: DescribeContainerGroupsRequest, cb?: (error: string, rep: DescribeContainerGroupsResponse) => void): Promise<DescribeContainerGroupsResponse>;
    /**
     * 查询配置项列表
     * @public
     */
    DescribeConfigs(req: DescribeConfigsRequest, cb?: (error: string, rep: DescribeConfigsResponse) => void): Promise<DescribeConfigsResponse>;
    /**
     * 查询配置
     * @public
     */
    DescribeConfig(req: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     *  容器部署组详情
     * @public
     */
    DescribeContainerGroupDetail(req: DescribeContainerGroupDetailRequest, cb?: (error: string, rep: DescribeContainerGroupDetailResponse) => void): Promise<DescribeContainerGroupDetailResponse>;
    /**
     * 回滚配置
     * @public
     */
    RollbackConfig(req: RollbackConfigRequest, cb?: (error: string, rep: RollbackConfigResponse) => void): Promise<RollbackConfigResponse>;
    /**
     * 镜像版本列表
     * @public
     */
    DescribeImageTags(req: DescribeImageTagsRequest, cb?: (error: string, rep: DescribeImageTagsResponse) => void): Promise<DescribeImageTagsResponse>;
    /**
       * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
  调用此接口完成后，才标志上传包流程结束。
       * @public
       */
    ModifyUploadInfo(req: ModifyUploadInfoRequest, cb?: (error: string, rep: ModifyUploadInfoResponse) => void): Promise<ModifyUploadInfoResponse>;
    /**
     * 查询简单集群列表
     * @public
     */
    DescribeSimpleClusters(req: DescribeSimpleClustersRequest, cb?: (error: string, rep: DescribeSimpleClustersResponse) => void): Promise<DescribeSimpleClustersResponse>;
    /**
     * 查询API详情
     * @public
     */
    DescribeApiDetail(req: DescribeApiDetailRequest, cb?: (error: string, rep: DescribeApiDetailResponse) => void): Promise<DescribeApiDetailResponse>;
    /**
     * 部署Serverless应用
     * @public
     */
    DeployServerlessGroup(req: DeployServerlessGroupRequest, cb?: (error: string, rep: DeployServerlessGroupResponse) => void): Promise<DeployServerlessGroupResponse>;
    /**
     * 创建配置项
     * @public
     */
    CreateConfig(req: CreateConfigRequest, cb?: (error: string, rep: CreateConfigResponse) => void): Promise<CreateConfigResponse>;
    /**
     * 撤回已发布的公共配置
     * @public
     */
    RevocationPublicConfig(req: RevocationPublicConfigRequest, cb?: (error: string, rep: RevocationPublicConfigResponse) => void): Promise<RevocationPublicConfigResponse>;
    /**
     * 批量删除镜像版本
     * @public
     */
    DeleteImageTags(req: DeleteImageTagsRequest, cb?: (error: string, rep: DeleteImageTagsResponse) => void): Promise<DeleteImageTagsResponse>;
    /**
       * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
  COS相关文档请查阅：https://cloud.tencent.com/document/product/436
       * @public
       */
    DescribeDownloadInfo(req: DescribeDownloadInfoRequest, cb?: (error: string, rep: DescribeDownloadInfoResponse) => void): Promise<DescribeDownloadInfoResponse>;
    /**
     * 获取应用列表
     * @public
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
    /**
     * 更新仓库信息
     * @public
     */
    UpdateRepository(req: UpdateRepositoryRequest, cb?: (error: string, rep: UpdateRepositoryResponse) => void): Promise<UpdateRepositoryResponse>;
    /**
     * 获取应用详情
     * @public
     */
    DescribeApplication(req: DescribeApplicationRequest, cb?: (error: string, rep: DescribeApplicationResponse) => void): Promise<DescribeApplicationResponse>;
    /**
     * 查询公共配置（单条）
     * @public
     */
    DescribePublicConfig(req: DescribePublicConfigRequest, cb?: (error: string, rep: DescribePublicConfigResponse) => void): Promise<DescribePublicConfigResponse>;
    /**
     * 查询泳道列表
     * @public
     */
    DescribeLanes(req: DescribeLanesRequest, cb?: (error: string, rep: DescribeLanesResponse) => void): Promise<DescribeLanesResponse>;
    /**
     * 查询简单命名空间列表
     * @public
     */
    DescribeSimpleNamespaces(req: DescribeSimpleNamespacesRequest, cb?: (error: string, rep: DescribeSimpleNamespacesResponse) => void): Promise<DescribeSimpleNamespacesResponse>;
    /**
     * 删除微服务
     * @public
     */
    DeleteMicroservice(req: DeleteMicroserviceRequest, cb?: (error: string, rep: DeleteMicroserviceResponse) => void): Promise<DeleteMicroserviceResponse>;
    /**
     * 停止容器部署组
     * @public
     */
    StopContainerGroup(req: StopContainerGroupRequest, cb?: (error: string, rep: StopContainerGroupResponse) => void): Promise<StopContainerGroupResponse>;
    /**
     * 创建泳道规则
     * @public
     */
    CreateLaneRule(req: CreateLaneRuleRequest, cb?: (error: string, rep: CreateLaneRuleResponse) => void): Promise<CreateLaneRuleResponse>;
    /**
     * 删除容器部署组
     * @public
     */
    DeleteContainerGroup(req: DeleteContainerGroupRequest, cb?: (error: string, rep: DeleteContainerGroupResponse) => void): Promise<DeleteContainerGroupResponse>;
    /**
     * 发布配置
     * @public
     */
    ReleaseConfig(req: ReleaseConfigRequest, cb?: (error: string, rep: ReleaseConfigResponse) => void): Promise<ReleaseConfigResponse>;
    /**
     * 获取虚拟机部署组列表
     * @public
     */
    DescribeGroups(req: DescribeGroupsRequest, cb?: (error: string, rep: DescribeGroupsResponse) => void): Promise<DescribeGroupsResponse>;
    /**
     * 查询仓库列表
     * @public
     */
    DescribeRepositories(req: DescribeRepositoriesRequest, cb?: (error: string, rep: DescribeRepositoriesResponse) => void): Promise<DescribeRepositoriesResponse>;
    /**
     * 创建仓库
     * @public
     */
    CreateRepository(req: CreateRepositoryRequest, cb?: (error: string, rep: CreateRepositoryResponse) => void): Promise<CreateRepositoryResponse>;
    /**
     * 查询集群实例
     * @public
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 创建公共配置项
     * @public
     */
    CreatePublicConfig(req: CreatePublicConfigRequest, cb?: (error: string, rep: CreatePublicConfigResponse) => void): Promise<CreatePublicConfigResponse>;
    /**
     * 查询简单部署组列表
     * @public
     */
    DescribeSimpleGroups(req: DescribeSimpleGroupsRequest, cb?: (error: string, rep: DescribeSimpleGroupsResponse) => void): Promise<DescribeSimpleGroupsResponse>;
    /**
     * 创建Serverless部署组
     * @public
     */
    CreateServerlessGroup(req: CreateServerlessGroupRequest, cb?: (error: string, rep: CreateServerlessGroupResponse) => void): Promise<CreateServerlessGroupResponse>;
    /**
     * 添加云主机节点至TSF集群
     * @public
     */
    AddInstances(req: AddInstancesRequest, cb?: (error: string, rep: AddInstancesResponse) => void): Promise<AddInstancesResponse>;
    /**
     * 查询配置汇总列表
     * @public
     */
    DescribeConfigSummary(req: DescribeConfigSummaryRequest, cb?: (error: string, rep: DescribeConfigSummaryResponse) => void): Promise<DescribeConfigSummaryResponse>;
    /**
     * 无
     * @public
     */
    DescribePkgs(req: DescribePkgsRequest, cb?: (error: string, rep: DescribePkgsResponse) => void): Promise<DescribePkgsResponse>;
    /**
     * 查询简单应用列表
     * @public
     */
    DescribeSimpleApplications(req: DescribeSimpleApplicationsRequest, cb?: (error: string, rep: DescribeSimpleApplicationsResponse) => void): Promise<DescribeSimpleApplicationsResponse>;
    /**
     * 删除容器部署组
     * @public
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 查询Serverless部署组列表
     * @public
     */
    DescribeServerlessGroups(req: DescribeServerlessGroupsRequest, cb?: (error: string, rep: DescribeServerlessGroupsResponse) => void): Promise<DescribeServerlessGroupsResponse>;
    /**
     * 创建虚拟机部署组
     * @public
     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 查询虚拟机部署组云主机列表
     * @public
     */
    DescribeGroupInstances(req: DescribeGroupInstancesRequest, cb?: (error: string, rep: DescribeGroupInstancesResponse) => void): Promise<DescribeGroupInstancesResponse>;
    /**
       * 从软件仓库批量删除程序包。
  一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
       * @public
       */
    DeletePkgs(req: DeletePkgsRequest, cb?: (error: string, rep: DeletePkgsResponse) => void): Promise<DeletePkgsResponse>;
    /**
     * 查询公共配置项列表
     * @public
     */
    DescribePublicConfigs(req: DescribePublicConfigsRequest, cb?: (error: string, rep: DescribePublicConfigsResponse) => void): Promise<DescribePublicConfigsResponse>;
    /**
     * 启动容器部署组
     * @public
     */
    StartContainerGroup(req: StartContainerGroupRequest, cb?: (error: string, rep: StartContainerGroupResponse) => void): Promise<StartContainerGroupResponse>;
    /**
     * 从 TSF 集群中批量移除云主机节点
     * @public
     */
    RemoveInstances(req: RemoveInstancesRequest, cb?: (error: string, rep: RemoveInstancesResponse) => void): Promise<RemoveInstancesResponse>;
    /**
     * 虚拟机部署组添加实例
     * @public
     */
    ExpandGroup(req: ExpandGroupRequest, cb?: (error: string, rep: ExpandGroupResponse) => void): Promise<ExpandGroupResponse>;
    /**
     * 删除泳道
     * @public
     */
    DeleteLane(req: DeleteLaneRequest, cb?: (error: string, rep: DeleteLaneResponse) => void): Promise<DeleteLaneResponse>;
    /**
     * 查询配置发布信息
     * @public
     */
    DescribeConfigReleases(req: DescribeConfigReleasesRequest, cb?: (error: string, rep: DescribeConfigReleasesResponse) => void): Promise<DescribeConfigReleasesResponse>;
    /**
     * 创建泳道
     * @public
     */
    CreateLane(req: CreateLaneRequest, cb?: (error: string, rep: CreateLaneResponse) => void): Promise<CreateLaneResponse>;
    /**
     * 部署虚拟机部署组应用
     * @public
     */
    DeployGroup(req: DeployGroupRequest, cb?: (error: string, rep: DeployGroupResponse) => void): Promise<DeployGroupResponse>;
    /**
     * 更新泳道信息
     * @public
     */
    ModifyLane(req: ModifyLaneRequest, cb?: (error: string, rep: ModifyLaneResponse) => void): Promise<ModifyLaneResponse>;
    /**
     * 新增微服务
     * @public
     */
    CreateMicroservice(req: CreateMicroserviceRequest, cb?: (error: string, rep: CreateMicroserviceResponse) => void): Promise<CreateMicroserviceResponse>;
    /**
     * 修改微服务详情
     * @public
     */
    ModifyMicroservice(req: ModifyMicroserviceRequest, cb?: (error: string, rep: ModifyMicroserviceResponse) => void): Promise<ModifyMicroserviceResponse>;
    /**
     * 查询服务API列表
     * @public
     */
    DescribeMsApiList(req: DescribeMsApiListRequest, cb?: (error: string, rep: DescribeMsApiListResponse) => void): Promise<DescribeMsApiListResponse>;
    /**
     * 创建应用
     * @public
     */
    CreateApplication(req: CreateApplicationRequest, cb?: (error: string, rep: CreateApplicationResponse) => void): Promise<CreateApplicationResponse>;
    /**
     * 查询公共配置发布历史
     * @public
     */
    DescribePublicConfigReleaseLogs(req: DescribePublicConfigReleaseLogsRequest, cb?: (error: string, rep: DescribePublicConfigReleaseLogsResponse) => void): Promise<DescribePublicConfigReleaseLogsResponse>;
    /**
     * 查询配置发布历史
     * @public
     */
    DescribeConfigReleaseLogs(req: DescribeConfigReleaseLogsRequest, cb?: (error: string, rep: DescribeConfigReleaseLogsResponse) => void): Promise<DescribeConfigReleaseLogsResponse>;
    /**
     * 查询微服务详情
     * @public
     */
    DescribeMicroservice(req: DescribeMicroserviceRequest, cb?: (error: string, rep: DescribeMicroserviceResponse) => void): Promise<DescribeMicroserviceResponse>;
    /**
     * 删除Serverless部署组
     * @public
     */
    DeleteServerlessGroup(req: DeleteServerlessGroupRequest, cb?: (error: string, rep: DeleteServerlessGroupResponse) => void): Promise<DeleteServerlessGroupResponse>;
    /**
     * 删除仓库
     * @public
     */
    DeleteRepository(req: DeleteRepositoryRequest, cb?: (error: string, rep: DeleteRepositoryResponse) => void): Promise<DeleteRepositoryResponse>;
    /**
     * 部署容器应用
     * @public
     */
    DeployContainerGroup(req: DeployContainerGroupRequest, cb?: (error: string, rep: DeployContainerGroupResponse) => void): Promise<DeployContainerGroupResponse>;
    /**
     * 删除应用
     * @public
     */
    DeleteApplication(req: DeleteApplicationRequest, cb?: (error: string, rep: DeleteApplicationResponse) => void): Promise<DeleteApplicationResponse>;
    /**
     * 删除命名空间
     * @public
     */
    DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse>;
    /**
     * 删除配置项
     * @public
     */
    DeleteConfig(req: DeleteConfigRequest, cb?: (error: string, rep: DeleteConfigResponse) => void): Promise<DeleteConfigResponse>;
    /**
     * 发布公共配置
     * @public
     */
    ReleasePublicConfig(req: ReleasePublicConfigRequest, cb?: (error: string, rep: ReleasePublicConfigResponse) => void): Promise<ReleasePublicConfigResponse>;
    /**
     * 获取微服务列表
     * @public
     */
    DescribeMicroservices(req: DescribeMicroservicesRequest, cb?: (error: string, rep: DescribeMicroservicesResponse) => void): Promise<DescribeMicroservicesResponse>;
    /**
     * 查询API 版本
     * @public
     */
    DescribeApiVersions(req: DescribeApiVersionsRequest, cb?: (error: string, rep: DescribeApiVersionsResponse) => void): Promise<DescribeApiVersionsResponse>;
    /**
     * 查询虚拟机部署组详情
     * @public
     */
    DescribeGroup(req: DescribeGroupRequest, cb?: (error: string, rep: DescribeGroupResponse) => void): Promise<DescribeGroupResponse>;
    /**
     * 创建容器部署组
     * @public
     */
    CreateContainGroup(req: CreateContainGroupRequest, cb?: (error: string, rep: CreateContainGroupResponse) => void): Promise<CreateContainGroupResponse>;
    /**
     * 查询Serverless部署组明细
     * @public
     */
    DescribeServerlessGroup(req: DescribeServerlessGroupRequest, cb?: (error: string, rep: DescribeServerlessGroupResponse) => void): Promise<DescribeServerlessGroupResponse>;
    /**
     * 查询仓库信息
     * @public
     */
    DescribeRepository(req: DescribeRepositoryRequest, cb?: (error: string, rep: DescribeRepositoryResponse) => void): Promise<DescribeRepositoryResponse>;
    /**
     * 获取应用列表其它字段，如实例数量信息等
     * @public
     */
    DescribeApplicationAttribute(req: DescribeApplicationAttributeRequest, cb?: (error: string, rep: DescribeApplicationAttributeResponse) => void): Promise<DescribeApplicationAttributeResponse>;
    /**
     * 撤回已发布的配置
     * @public
     */
    RevocationConfig(req: RevocationConfigRequest, cb?: (error: string, rep: RevocationConfigResponse) => void): Promise<RevocationConfigResponse>;
    /**
     * 查询泳道规则列表
     * @public
     */
    DescribeLaneRules(req: DescribeLaneRulesRequest, cb?: (error: string, rep: DescribeLaneRulesResponse) => void): Promise<DescribeLaneRulesResponse>;
    /**
     * 更新泳道规则
     * @public
     */
    ModifyLaneRule(req: ModifyLaneRuleRequest, cb?: (error: string, rep: ModifyLaneRuleResponse) => void): Promise<ModifyLaneRuleResponse>;
    /**
     * 查询group发布的配置
     * @public
     */
    DescribeReleasedConfig(req: DescribeReleasedConfigRequest, cb?: (error: string, rep: DescribeReleasedConfigResponse) => void): Promise<DescribeReleasedConfigResponse>;
    /**
     * 查询公共配置发布信息
     * @public
     */
    DescribePublicConfigReleases(req: DescribePublicConfigReleasesRequest, cb?: (error: string, rep: DescribePublicConfigReleasesResponse) => void): Promise<DescribePublicConfigReleasesResponse>;
    /**
       * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
  COS相关文档请查阅：https://cloud.tencent.com/document/product/436
       * @public
       */
    DescribeUploadInfo(req: DescribeUploadInfoRequest, cb?: (error: string, rep: DescribeUploadInfoResponse) => void): Promise<DescribeUploadInfoResponse>;
    /**
     * 停止虚拟机部署组
     * @public
     */
    StopGroup(req: StopGroupRequest, cb?: (error: string, rep: StopGroupResponse) => void): Promise<StopGroupResponse>;
    /**
     * 下线部署组所有机器实例
     * @public
     */
    ShrinkGroup(req: ShrinkGroupRequest, cb?: (error: string, rep: ShrinkGroupResponse) => void): Promise<ShrinkGroupResponse>;
    /**
     * 启动分组
     * @public
     */
    StartGroup(req: StartGroupRequest, cb?: (error: string, rep: StartGroupResponse) => void): Promise<StartGroupResponse>;
    /**
     * 修改容器部署组
     * @public
     */
    ModifyContainerGroup(req: ModifyContainerGroupRequest, cb?: (error: string, rep: ModifyContainerGroupResponse) => void): Promise<ModifyContainerGroupResponse>;
}
