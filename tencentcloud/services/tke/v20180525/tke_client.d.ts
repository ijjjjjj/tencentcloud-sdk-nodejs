import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeClusterEndpointVipStatusRequest, DescribeClusterSecurityResponse, DescribeClusterSecurityRequest, DeleteClusterInstancesResponse, CreateClusterRouteRequest, DescribeClusterEndpointVipStatusResponse, ModifyClusterEndpointSPRequest, DescribeClusterInstancesResponse, DeleteClusterResponse, CreateClusterRouteTableResponse, DeleteClusterEndpointResponse, DeleteClusterRequest, DeleteClusterAsGroupsRequest, DescribeExistedInstancesRequest, DescribeRegionsResponse, CreateClusterRouteResponse, DescribeClusterEndpointStatusRequest, DescribeImagesResponse, ModifyClusterAttributeRequest, DeleteClusterRouteResponse, CreateClusterEndpointVipResponse, DescribeClusterRoutesResponse, DescribeClustersRequest, DeleteClusterEndpointVipResponse, DeleteClusterInstancesRequest, ModifyClusterAsGroupAttributeResponse, CreateClusterInstancesRequest, DescribeClusterRouteTablesResponse, CreateClusterEndpointVipRequest, DescribeRouteTableConflictsResponse, DescribeRegionsRequest, DescribeClustersResponse, DescribeExistedInstancesResponse, CreateClusterAsGroupRequest, CreateClusterResponse, DeleteClusterRouteTableRequest, CreateClusterRequest, CreateClusterAsGroupResponse, DeleteClusterAsGroupsResponse, DescribeClusterInstancesRequest, CreateClusterEndpointResponse, DeleteClusterEndpointVipRequest, DescribeClusterEndpointStatusResponse, AddExistedInstancesResponse, DeleteClusterRouteTableResponse, DescribeClusterAsGroupOptionRequest, ModifyClusterAttributeResponse, CreateClusterEndpointRequest, AddExistedInstancesRequest, CreateClusterInstancesResponse, DescribeClusterRouteTablesRequest, DescribeClusterRoutesRequest, DeleteClusterRouteRequest, DeleteClusterEndpointRequest, CreateClusterRouteTableRequest, DescribeClusterAsGroupsRequest, DescribeImagesRequest, ModifyClusterEndpointSPResponse, DescribeRouteTableConflictsRequest, DescribeClusterAsGroupOptionResponse, ModifyClusterAsGroupAttributeRequest, DescribeClusterAsGroupsResponse } from "./tke_models";
/**
 * tke client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建集群
     * @public
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 获取镜像信息
     * @public
     */
    DescribeImages(req: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 修改集群伸缩组属性
     * @public
     */
    ModifyClusterAsGroupAttribute(req: ModifyClusterAsGroupAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void): Promise<ModifyClusterAsGroupAttributeResponse>;
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    DeleteClusterEndpoint(req: DeleteClusterEndpointRequest, cb?: (error: string, rep: DeleteClusterEndpointResponse) => void): Promise<DeleteClusterEndpointResponse>;
    /**
     * 删除集群(YUNAPI V3版本)
     * @public
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 修改集群属性
     * @public
     */
    ModifyClusterAttribute(req: ModifyClusterAttributeRequest, cb?: (error: string, rep: ModifyClusterAttributeResponse) => void): Promise<ModifyClusterAttributeResponse>;
    /**
     * 删除集群伸缩组
     * @public
     */
    DeleteClusterAsGroups(req: DeleteClusterAsGroupsRequest, cb?: (error: string, rep: DeleteClusterAsGroupsResponse) => void): Promise<DeleteClusterAsGroupsResponse>;
    /**
     * 删除集群路由
     * @public
     */
    DeleteClusterRoute(req: DeleteClusterRouteRequest, cb?: (error: string, rep: DeleteClusterRouteResponse) => void): Promise<DeleteClusterRouteResponse>;
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     * @public
     */
    DescribeClusterEndpointVipStatus(req: DescribeClusterEndpointVipStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void): Promise<DescribeClusterEndpointVipStatusResponse>;
    /**
     * 扩展(新建)集群节点
     * @public
     */
    CreateClusterInstances(req: CreateClusterInstancesRequest, cb?: (error: string, rep: CreateClusterInstancesResponse) => void): Promise<CreateClusterInstancesResponse>;
    /**
     * 为已经存在的集群创建伸缩组
     * @public
     */
    CreateClusterAsGroup(req: CreateClusterAsGroupRequest, cb?: (error: string, rep: CreateClusterAsGroupResponse) => void): Promise<CreateClusterAsGroupResponse>;
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     * @public
     */
    DescribeExistedInstances(req: DescribeExistedInstancesRequest, cb?: (error: string, rep: DescribeExistedInstancesResponse) => void): Promise<DescribeExistedInstancesResponse>;
    /**
     * 创建集群路由
     * @public
     */
    CreateClusterRoute(req: CreateClusterRouteRequest, cb?: (error: string, rep: CreateClusterRouteResponse) => void): Promise<CreateClusterRouteResponse>;
    /**
     * 创建集群路由表
     * @public
     */
    CreateClusterRouteTable(req: CreateClusterRouteTableRequest, cb?: (error: string, rep: CreateClusterRouteTableResponse) => void): Promise<CreateClusterRouteTableResponse>;
    /**
     * 查询集群路由表
     * @public
     */
    DescribeClusterRouteTables(req: DescribeClusterRouteTablesRequest, cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void): Promise<DescribeClusterRouteTablesResponse>;
    /**
     * 查询集群列表
     * @public
     */
    DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse>;
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    DescribeClusterEndpointStatus(req: DescribeClusterEndpointStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void): Promise<DescribeClusterEndpointStatusResponse>;
    /**
     * 集群关联的伸缩组列表
     * @public
     */
    DescribeClusterAsGroups(req: DescribeClusterAsGroupsRequest, cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void): Promise<DescribeClusterAsGroupsResponse>;
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    CreateClusterEndpoint(req: CreateClusterEndpointRequest, cb?: (error: string, rep: CreateClusterEndpointResponse) => void): Promise<CreateClusterEndpointResponse>;
    /**
     * 集群弹性伸缩配置
     * @public
     */
    DescribeClusterAsGroupOption(req: DescribeClusterAsGroupOptionRequest, cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void): Promise<DescribeClusterAsGroupOptionResponse>;
    /**
     * 获取容器服务支持的所有地域
     * @public
     */
    DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 添加已经存在的实例到集群
     * @public
     */
    AddExistedInstances(req: AddExistedInstancesRequest, cb?: (error: string, rep: AddExistedInstancesResponse) => void): Promise<AddExistedInstancesResponse>;
    /**
     * 集群的密钥信息
     * @public
     */
    DescribeClusterSecurity(req: DescribeClusterSecurityRequest, cb?: (error: string, rep: DescribeClusterSecurityResponse) => void): Promise<DescribeClusterSecurityResponse>;
    /**
     * 查询路由表冲突列表
     * @public
     */
    DescribeRouteTableConflicts(req: DescribeRouteTableConflictsRequest, cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void): Promise<DescribeRouteTableConflictsResponse>;
    /**
     *  查询集群下节点实例信息
     * @public
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @public
     */
    DeleteClusterEndpointVip(req: DeleteClusterEndpointVipRequest, cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void): Promise<DeleteClusterEndpointVipResponse>;
    /**
     * 删除集群中的实例
     * @public
     */
    DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse>;
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     * @public
     */
    ModifyClusterEndpointSP(req: ModifyClusterEndpointSPRequest, cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void): Promise<ModifyClusterEndpointSPResponse>;
    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @public
     */
    CreateClusterEndpointVip(req: CreateClusterEndpointVipRequest, cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void): Promise<CreateClusterEndpointVipResponse>;
    /**
     * 删除集群路由表
     * @public
     */
    DeleteClusterRouteTable(req: DeleteClusterRouteTableRequest, cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void): Promise<DeleteClusterRouteTableResponse>;
    /**
     * 查询集群路由
     * @public
     */
    DescribeClusterRoutes(req: DescribeClusterRoutesRequest, cb?: (error: string, rep: DescribeClusterRoutesResponse) => void): Promise<DescribeClusterRoutesResponse>;
}
