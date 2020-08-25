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
   DescribeClusterEndpointVipStatusRequest,
   DescribeClusterSecurityResponse,
   DescribeClusterSecurityRequest,
   DeleteClusterInstancesResponse,
   CreateClusterRouteRequest,
   DescribeClusterEndpointVipStatusResponse,
   ModifyClusterEndpointSPRequest,
   DescribeClusterInstancesResponse,
   DeleteClusterResponse,
   CreateClusterRouteTableResponse,
   DeleteClusterEndpointResponse,
   RouteInfo,
   DeleteClusterRequest,
   RunInstancesForNode,
   DeleteClusterAsGroupsRequest,
   DescribeExistedInstancesRequest,
   DescribeRegionsResponse,
   CreateClusterRouteResponse,
   RouteTableInfo,
   ClusterAsGroup,
   DescribeClusterEndpointStatusRequest,
   Tag,
   ClusterNetworkSettings,
   DescribeImagesResponse,
   AutoScalingGroupRange,
   ModifyClusterAttributeRequest,
   DeleteClusterRouteResponse,
   CreateClusterEndpointVipResponse,
   DescribeClusterRoutesResponse,
   DescribeClustersRequest,
   RegionInstance,
   Label,
   DeleteClusterEndpointVipResponse,
   ClusterBasicSettings,
   RouteTableConflict,
   DeleteClusterInstancesRequest,
   ModifyClusterAsGroupAttributeResponse,
   CreateClusterInstancesRequest,
   DescribeClusterRouteTablesResponse,
   ClusterCIDRSettings,
   CreateClusterEndpointVipRequest,
   ExistedInstance,
   DescribeRouteTableConflictsResponse,
   TagSpecification,
   DescribeRegionsRequest,
   DescribeClustersResponse,
   ClusterExtraArgs,
   DataDisk,
   DescribeExistedInstancesResponse,
   ResourceDeleteOption,
   LoginSettings,
   Instance,
   EnhancedService,
   CreateClusterAsGroupRequest,
   CreateClusterResponse,
   RunSecurityServiceEnabled,
   DeleteClusterRouteTableRequest,
   CreateClusterRequest,
   InstanceExtraArgs,
   CreateClusterAsGroupResponse,
   DeleteClusterAsGroupsResponse,
   DescribeClusterInstancesRequest,
   Filter,
   ImageInstance,
   CreateClusterEndpointResponse,
   ClusterAdvancedSettings,
   DeleteClusterEndpointVipRequest,
   Cluster,
   DescribeClusterEndpointStatusResponse,
   AddExistedInstancesResponse,
   DeleteClusterRouteTableResponse,
   DescribeClusterAsGroupOptionRequest,
   ModifyClusterAttributeResponse,
   CreateClusterEndpointRequest,
   AddExistedInstancesRequest,
   ClusterAsGroupOption,
   CreateClusterInstancesResponse,
   DescribeClusterRouteTablesRequest,
   ExistedInstancesForNode,
   DescribeClusterRoutesRequest,
   DeleteClusterRouteRequest,
   DeleteClusterEndpointRequest,
   CreateClusterRouteTableRequest,
   DescribeClusterAsGroupsRequest,
   DescribeImagesRequest,
   ModifyClusterEndpointSPResponse,
   DescribeRouteTableConflictsRequest,
   ExistedInstancesPara,
   DescribeClusterAsGroupOptionResponse,
   ClusterAsGroupAttribute,
   RunMonitorServiceEnabled,
   InstanceAdvancedSettings,
   ModifyClusterAsGroupAttributeRequest,
   InstanceDataDiskMountSetting,
   DescribeClusterAsGroupsResponse,

} from "./tke_models"

/**
 * tke client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("tke.tencentcloudapi.com", "2018-05-25", clientConfig);
    }
    
    /**
     * 创建集群
     * @public
     */
    async CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse> {
        return await this.request("CreateCluster", req, cb);
    }

    /**
     * 获取镜像信息
     * @public
     */
    async DescribeImages(req: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse> {
        return await this.request("DescribeImages", req, cb);
    }

    /**
     * 修改集群伸缩组属性
     * @public
     */
    async ModifyClusterAsGroupAttribute(req: ModifyClusterAsGroupAttributeRequest, cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void): Promise<ModifyClusterAsGroupAttributeResponse> {
        return await this.request("ModifyClusterAsGroupAttribute", req, cb);
    }

    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    async DeleteClusterEndpoint(req: DeleteClusterEndpointRequest, cb?: (error: string, rep: DeleteClusterEndpointResponse) => void): Promise<DeleteClusterEndpointResponse> {
        return await this.request("DeleteClusterEndpoint", req, cb);
    }

    /**
     * 删除集群(YUNAPI V3版本)
     * @public
     */
    async DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse> {
        return await this.request("DeleteCluster", req, cb);
    }

    /**
     * 修改集群属性
     * @public
     */
    async ModifyClusterAttribute(req: ModifyClusterAttributeRequest, cb?: (error: string, rep: ModifyClusterAttributeResponse) => void): Promise<ModifyClusterAttributeResponse> {
        return await this.request("ModifyClusterAttribute", req, cb);
    }

    /**
     * 删除集群伸缩组
     * @public
     */
    async DeleteClusterAsGroups(req: DeleteClusterAsGroupsRequest, cb?: (error: string, rep: DeleteClusterAsGroupsResponse) => void): Promise<DeleteClusterAsGroupsResponse> {
        return await this.request("DeleteClusterAsGroups", req, cb);
    }

    /**
     * 删除集群路由
     * @public
     */
    async DeleteClusterRoute(req: DeleteClusterRouteRequest, cb?: (error: string, rep: DeleteClusterRouteResponse) => void): Promise<DeleteClusterRouteResponse> {
        return await this.request("DeleteClusterRoute", req, cb);
    }

    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     * @public
     */
    async DescribeClusterEndpointVipStatus(req: DescribeClusterEndpointVipStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void): Promise<DescribeClusterEndpointVipStatusResponse> {
        return await this.request("DescribeClusterEndpointVipStatus", req, cb);
    }

    /**
     * 扩展(新建)集群节点
     * @public
     */
    async CreateClusterInstances(req: CreateClusterInstancesRequest, cb?: (error: string, rep: CreateClusterInstancesResponse) => void): Promise<CreateClusterInstancesResponse> {
        return await this.request("CreateClusterInstances", req, cb);
    }

    /**
     * 为已经存在的集群创建伸缩组
     * @public
     */
    async CreateClusterAsGroup(req: CreateClusterAsGroupRequest, cb?: (error: string, rep: CreateClusterAsGroupResponse) => void): Promise<CreateClusterAsGroupResponse> {
        return await this.request("CreateClusterAsGroup", req, cb);
    }

    /**
     * 查询已经存在的节点，判断是否可以加入集群
     * @public
     */
    async DescribeExistedInstances(req: DescribeExistedInstancesRequest, cb?: (error: string, rep: DescribeExistedInstancesResponse) => void): Promise<DescribeExistedInstancesResponse> {
        return await this.request("DescribeExistedInstances", req, cb);
    }

    /**
     * 创建集群路由
     * @public
     */
    async CreateClusterRoute(req: CreateClusterRouteRequest, cb?: (error: string, rep: CreateClusterRouteResponse) => void): Promise<CreateClusterRouteResponse> {
        return await this.request("CreateClusterRoute", req, cb);
    }

    /**
     * 创建集群路由表
     * @public
     */
    async CreateClusterRouteTable(req: CreateClusterRouteTableRequest, cb?: (error: string, rep: CreateClusterRouteTableResponse) => void): Promise<CreateClusterRouteTableResponse> {
        return await this.request("CreateClusterRouteTable", req, cb);
    }

    /**
     * 查询集群路由表
     * @public
     */
    async DescribeClusterRouteTables(req: DescribeClusterRouteTablesRequest, cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void): Promise<DescribeClusterRouteTablesResponse> {
        return await this.request("DescribeClusterRouteTables", req, cb);
    }

    /**
     * 查询集群列表
     * @public
     */
    async DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse> {
        return await this.request("DescribeClusters", req, cb);
    }

    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    async DescribeClusterEndpointStatus(req: DescribeClusterEndpointStatusRequest, cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void): Promise<DescribeClusterEndpointStatusResponse> {
        return await this.request("DescribeClusterEndpointStatus", req, cb);
    }

    /**
     * 集群关联的伸缩组列表
     * @public
     */
    async DescribeClusterAsGroups(req: DescribeClusterAsGroupsRequest, cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void): Promise<DescribeClusterAsGroupsResponse> {
        return await this.request("DescribeClusterAsGroups", req, cb);
    }

    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    async CreateClusterEndpoint(req: CreateClusterEndpointRequest, cb?: (error: string, rep: CreateClusterEndpointResponse) => void): Promise<CreateClusterEndpointResponse> {
        return await this.request("CreateClusterEndpoint", req, cb);
    }

    /**
     * 集群弹性伸缩配置
     * @public
     */
    async DescribeClusterAsGroupOption(req: DescribeClusterAsGroupOptionRequest, cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void): Promise<DescribeClusterAsGroupOptionResponse> {
        return await this.request("DescribeClusterAsGroupOption", req, cb);
    }

    /**
     * 获取容器服务支持的所有地域
     * @public
     */
    async DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse> {
        return await this.request("DescribeRegions", req, cb);
    }

    /**
     * 添加已经存在的实例到集群
     * @public
     */
    async AddExistedInstances(req: AddExistedInstancesRequest, cb?: (error: string, rep: AddExistedInstancesResponse) => void): Promise<AddExistedInstancesResponse> {
        return await this.request("AddExistedInstances", req, cb);
    }

    /**
     * 集群的密钥信息
     * @public
     */
    async DescribeClusterSecurity(req: DescribeClusterSecurityRequest, cb?: (error: string, rep: DescribeClusterSecurityResponse) => void): Promise<DescribeClusterSecurityResponse> {
        return await this.request("DescribeClusterSecurity", req, cb);
    }

    /**
     * 查询路由表冲突列表
     * @public
     */
    async DescribeRouteTableConflicts(req: DescribeRouteTableConflictsRequest, cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void): Promise<DescribeRouteTableConflictsResponse> {
        return await this.request("DescribeRouteTableConflicts", req, cb);
    }

    /**
     *  查询集群下节点实例信息 
     * @public
     */
    async DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse> {
        return await this.request("DescribeClusterInstances", req, cb);
    }

    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @public
     */
    async DeleteClusterEndpointVip(req: DeleteClusterEndpointVipRequest, cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void): Promise<DeleteClusterEndpointVipResponse> {
        return await this.request("DeleteClusterEndpointVip", req, cb);
    }

    /**
     * 删除集群中的实例
     * @public
     */
    async DeleteClusterInstances(req: DeleteClusterInstancesRequest, cb?: (error: string, rep: DeleteClusterInstancesResponse) => void): Promise<DeleteClusterInstancesResponse> {
        return await this.request("DeleteClusterInstances", req, cb);
    }

    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     * @public
     */
    async ModifyClusterEndpointSP(req: ModifyClusterEndpointSPRequest, cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void): Promise<ModifyClusterEndpointSPResponse> {
        return await this.request("ModifyClusterEndpointSP", req, cb);
    }

    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @public
     */
    async CreateClusterEndpointVip(req: CreateClusterEndpointVipRequest, cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void): Promise<CreateClusterEndpointVipResponse> {
        return await this.request("CreateClusterEndpointVip", req, cb);
    }

    /**
     * 删除集群路由表
     * @public
     */
    async DeleteClusterRouteTable(req: DeleteClusterRouteTableRequest, cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void): Promise<DeleteClusterRouteTableResponse> {
        return await this.request("DeleteClusterRouteTable", req, cb);
    }

    /**
     * 查询集群路由
     * @public
     */
    async DescribeClusterRoutes(req: DescribeClusterRoutesRequest, cb?: (error: string, rep: DescribeClusterRoutesResponse) => void): Promise<DescribeClusterRoutesResponse> {
        return await this.request("DescribeClusterRoutes", req, cb);
    }


}
