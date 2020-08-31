"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tke.tencentcloudapi.com", "2018-05-25", clientConfig);
    }
    /**
     * 创建集群
     * @public
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 获取镜像信息
     * @public
     */
    async DescribeImages(req, cb) {
        return this.request("DescribeImages", req, cb);
    }
    /**
     * 修改集群伸缩组属性
     * @public
     */
    async ModifyClusterAsGroupAttribute(req, cb) {
        return this.request("ModifyClusterAsGroupAttribute", req, cb);
    }
    /**
     * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    async DeleteClusterEndpoint(req, cb) {
        return this.request("DeleteClusterEndpoint", req, cb);
    }
    /**
     * 删除集群(YUNAPI V3版本)
     * @public
     */
    async DeleteCluster(req, cb) {
        return this.request("DeleteCluster", req, cb);
    }
    /**
     * 修改集群属性
     * @public
     */
    async ModifyClusterAttribute(req, cb) {
        return this.request("ModifyClusterAttribute", req, cb);
    }
    /**
     * 删除集群伸缩组
     * @public
     */
    async DeleteClusterAsGroups(req, cb) {
        return this.request("DeleteClusterAsGroups", req, cb);
    }
    /**
     * 删除集群路由
     * @public
     */
    async DeleteClusterRoute(req, cb) {
        return this.request("DeleteClusterRoute", req, cb);
    }
    /**
     * 查询集群开启端口流程状态(仅支持托管集群外网端口)
     * @public
     */
    async DescribeClusterEndpointVipStatus(req, cb) {
        return this.request("DescribeClusterEndpointVipStatus", req, cb);
    }
    /**
     * 扩展(新建)集群节点
     * @public
     */
    async CreateClusterInstances(req, cb) {
        return this.request("CreateClusterInstances", req, cb);
    }
    /**
     * 为已经存在的集群创建伸缩组
     * @public
     */
    async CreateClusterAsGroup(req, cb) {
        return this.request("CreateClusterAsGroup", req, cb);
    }
    /**
     * 查询已经存在的节点，判断是否可以加入集群
     * @public
     */
    async DescribeExistedInstances(req, cb) {
        return this.request("DescribeExistedInstances", req, cb);
    }
    /**
     * 创建集群路由
     * @public
     */
    async CreateClusterRoute(req, cb) {
        return this.request("CreateClusterRoute", req, cb);
    }
    /**
     * 创建集群路由表
     * @public
     */
    async CreateClusterRouteTable(req, cb) {
        return this.request("CreateClusterRouteTable", req, cb);
    }
    /**
     * 查询集群路由表
     * @public
     */
    async DescribeClusterRouteTables(req, cb) {
        return this.request("DescribeClusterRouteTables", req, cb);
    }
    /**
     * 查询集群列表
     * @public
     */
    async DescribeClusters(req, cb) {
        return this.request("DescribeClusters", req, cb);
    }
    /**
     * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    async DescribeClusterEndpointStatus(req, cb) {
        return this.request("DescribeClusterEndpointStatus", req, cb);
    }
    /**
     * 集群关联的伸缩组列表
     * @public
     */
    async DescribeClusterAsGroups(req, cb) {
        return this.request("DescribeClusterAsGroups", req, cb);
    }
    /**
     * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
     * @public
     */
    async CreateClusterEndpoint(req, cb) {
        return this.request("CreateClusterEndpoint", req, cb);
    }
    /**
     * 集群弹性伸缩配置
     * @public
     */
    async DescribeClusterAsGroupOption(req, cb) {
        return this.request("DescribeClusterAsGroupOption", req, cb);
    }
    /**
     * 获取容器服务支持的所有地域
     * @public
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 添加已经存在的实例到集群
     * @public
     */
    async AddExistedInstances(req, cb) {
        return this.request("AddExistedInstances", req, cb);
    }
    /**
     * 集群的密钥信息
     * @public
     */
    async DescribeClusterSecurity(req, cb) {
        return this.request("DescribeClusterSecurity", req, cb);
    }
    /**
     * 查询路由表冲突列表
     * @public
     */
    async DescribeRouteTableConflicts(req, cb) {
        return this.request("DescribeRouteTableConflicts", req, cb);
    }
    /**
     *  查询集群下节点实例信息
     * @public
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
    /**
     * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @public
     */
    async DeleteClusterEndpointVip(req, cb) {
        return this.request("DeleteClusterEndpointVip", req, cb);
    }
    /**
     * 删除集群中的实例
     * @public
     */
    async DeleteClusterInstances(req, cb) {
        return this.request("DeleteClusterInstances", req, cb);
    }
    /**
     * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
     * @public
     */
    async ModifyClusterEndpointSP(req, cb) {
        return this.request("ModifyClusterEndpointSP", req, cb);
    }
    /**
     * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
     * @public
     */
    async CreateClusterEndpointVip(req, cb) {
        return this.request("CreateClusterEndpointVip", req, cb);
    }
    /**
     * 删除集群路由表
     * @public
     */
    async DeleteClusterRouteTable(req, cb) {
        return this.request("DeleteClusterRouteTable", req, cb);
    }
    /**
     * 查询集群路由
     * @public
     */
    async DescribeClusterRoutes(req, cb) {
        return this.request("DescribeClusterRoutes", req, cb);
    }
}
exports.Client = Client;