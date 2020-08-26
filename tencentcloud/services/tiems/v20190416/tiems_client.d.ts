import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DisableRsgAsGroupRequest, ExposeServiceResponse, DeleteJobResponse, DeleteRuntimeResponse, CreateJobRequest, ExposeServiceRequest, DescribeServiceConfigsResponse, CreateJobResponse, DeleteServiceResponse, DescribeRsgAsGroupsResponse, UpdateServiceResponse, UpdateRsgAsGroupResponse, DescribeServicesResponse, DescribeResourceGroupsResponse, DescribeRsgAsGroupsRequest, DeleteResourceGroupRequest, DescribeServiceConfigsRequest, DeleteRsgAsGroupRequest, DeleteServiceConfigResponse, UpdateRsgAsGroupRequest, DeleteRsgAsGroupResponse, CreateRuntimeResponse, UpdateJobRequest, DescribeResourceGroupsRequest, DescribeRuntimesResponse, DeleteInstanceResponse, DescribeInstancesResponse, DeleteResourceGroupResponse, DisableRsgAsGroupResponse, DescribeInstancesRequest, CreateServiceResponse, CreateServiceRequest, EnableRsgAsGroupResponse, UpdateServiceRequest, CreateServiceConfigResponse, DeleteServiceRequest, CreateRsgAsGroupResponse, DescribeRsgAsGroupActivitiesRequest, DeleteJobRequest, DeleteInstanceRequest, CreateRsgAsGroupRequest, DescribeRuntimesRequest, EnableRsgAsGroupRequest, CreateServiceConfigRequest, UpdateJobResponse, CreateRuntimeRequest, DeleteServiceConfigRequest, DeleteRuntimeRequest, DescribeRsgAsGroupActivitiesResponse, DescribeServicesRequest } from "./tiems_models";
/**
 * tiems client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建服务
     * @public
     */
    CreateService(req: CreateServiceRequest, cb?: (error: string, rep: CreateServiceResponse) => void): Promise<CreateServiceResponse>;
    /**
     * 创建服务配置
     * @public
     */
    CreateServiceConfig(req: CreateServiceConfigRequest, cb?: (error: string, rep: CreateServiceConfigResponse) => void): Promise<CreateServiceConfigResponse>;
    /**
     * 创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
     * @public
     */
    CreateRsgAsGroup(req: CreateRsgAsGroupRequest, cb?: (error: string, rep: CreateRsgAsGroupResponse) => void): Promise<CreateRsgAsGroupResponse>;
    /**
     * 删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
     * @public
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 删除服务
     * @public
     */
    DeleteService(req: DeleteServiceRequest, cb?: (error: string, rep: DeleteServiceResponse) => void): Promise<DeleteServiceResponse>;
    /**
     * 创建任务
     * @public
     */
    CreateJob(req: CreateJobRequest, cb?: (error: string, rep: CreateJobResponse) => void): Promise<CreateJobResponse>;
    /**
     * 更新资源组的伸缩组
     * @public
     */
    UpdateRsgAsGroup(req: UpdateRsgAsGroupRequest, cb?: (error: string, rep: UpdateRsgAsGroupResponse) => void): Promise<UpdateRsgAsGroupResponse>;
    /**
     * 描述服务
     * @public
     */
    DescribeServices(req: DescribeServicesRequest, cb?: (error: string, rep: DescribeServicesResponse) => void): Promise<DescribeServicesResponse>;
    /**
     * 停用资源组的伸缩组
     * @public
     */
    DisableRsgAsGroup(req: DisableRsgAsGroupRequest, cb?: (error: string, rep: DisableRsgAsGroupResponse) => void): Promise<DisableRsgAsGroupResponse>;
    /**
     * 更新服务
     * @public
     */
    UpdateService(req: UpdateServiceRequest, cb?: (error: string, rep: UpdateServiceResponse) => void): Promise<UpdateServiceResponse>;
    /**
     * 创建运行环境
     * @public
     */
    CreateRuntime(req: CreateRuntimeRequest, cb?: (error: string, rep: CreateRuntimeResponse) => void): Promise<CreateRuntimeResponse>;
    /**
     * 删除服务配置
     * @public
     */
    DeleteServiceConfig(req: DeleteServiceConfigRequest, cb?: (error: string, rep: DeleteServiceConfigResponse) => void): Promise<DeleteServiceConfigResponse>;
    /**
     * 获取节点列表
     * @public
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 查询伸缩组活动
     * @public
     */
    DescribeRsgAsGroupActivities(req: DescribeRsgAsGroupActivitiesRequest, cb?: (error: string, rep: DescribeRsgAsGroupActivitiesResponse) => void): Promise<DescribeRsgAsGroupActivitiesResponse>;
    /**
     * 描述服务运行环境
     * @public
     */
    DescribeRuntimes(req: DescribeRuntimesRequest, cb?: (error: string, rep: DescribeRuntimesResponse) => void): Promise<DescribeRuntimesResponse>;
    /**
     * 获取资源组列表
     * @public
     */
    DescribeResourceGroups(req: DescribeResourceGroupsRequest, cb?: (error: string, rep: DescribeResourceGroupsResponse) => void): Promise<DescribeResourceGroupsResponse>;
    /**
     * 更新任务
     * @public
     */
    UpdateJob(req: UpdateJobRequest, cb?: (error: string, rep: UpdateJobResponse) => void): Promise<UpdateJobResponse>;
    /**
     * 伸缩
     * @public
     */
    DeleteRsgAsGroup(req: DeleteRsgAsGroupRequest, cb?: (error: string, rep: DeleteRsgAsGroupResponse) => void): Promise<DeleteRsgAsGroupResponse>;
    /**
     * 删除资源组
     * @public
     */
    DeleteResourceGroup(req: DeleteResourceGroupRequest, cb?: (error: string, rep: DeleteResourceGroupResponse) => void): Promise<DeleteResourceGroupResponse>;
    /**
     * 删除运行环境
     * @public
     */
    DeleteRuntime(req: DeleteRuntimeRequest, cb?: (error: string, rep: DeleteRuntimeResponse) => void): Promise<DeleteRuntimeResponse>;
    /**
     * 暴露服务
     * @public
     */
    ExposeService(req: ExposeServiceRequest, cb?: (error: string, rep: ExposeServiceResponse) => void): Promise<ExposeServiceResponse>;
    /**
     * 删除任务
     * @public
     */
    DeleteJob(req: DeleteJobRequest, cb?: (error: string, rep: DeleteJobResponse) => void): Promise<DeleteJobResponse>;
    /**
     * 启用资源组的伸缩组
     * @public
     */
    EnableRsgAsGroup(req: EnableRsgAsGroupRequest, cb?: (error: string, rep: EnableRsgAsGroupResponse) => void): Promise<EnableRsgAsGroupResponse>;
    /**
     * 描述服务配置
     * @public
     */
    DescribeServiceConfigs(req: DescribeServiceConfigsRequest, cb?: (error: string, rep: DescribeServiceConfigsResponse) => void): Promise<DescribeServiceConfigsResponse>;
    /**
     * 查询资源组的伸缩组信息
     * @public
     */
    DescribeRsgAsGroups(req: DescribeRsgAsGroupsRequest, cb?: (error: string, rep: DescribeRsgAsGroupsResponse) => void): Promise<DescribeRsgAsGroupsResponse>;
}
