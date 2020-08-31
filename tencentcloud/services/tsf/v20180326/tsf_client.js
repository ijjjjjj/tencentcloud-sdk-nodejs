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
 * tsf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tsf.tencentcloudapi.com", "2018-03-26", clientConfig);
    }
    /**
     * 删除公共配置项
     * @public
     */
    async DeletePublicConfig(req, cb) {
        return this.request("DeletePublicConfig", req, cb);
    }
    /**
     * 创建集群
     * @public
     */
    async CreateCluster(req, cb) {
        return this.request("CreateCluster", req, cb);
    }
    /**
     * 修改容器部署组实例数
     * @public
     */
    async ModifyContainerReplicas(req, cb) {
        return this.request("ModifyContainerReplicas", req, cb);
    }
    /**
     * 虚拟机部署组下线实例
     * @public
     */
    async ShrinkInstances(req, cb) {
        return this.request("ShrinkInstances", req, cb);
    }
    /**
     * 获取部署组实例列表
     * @public
     */
    async DescribePodInstances(req, cb) {
        return this.request("DescribePodInstances", req, cb);
    }
    /**
     * 创建命名空间
     * @public
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
    /**
     * 添加云主机节点至TSF集群
     * @public
     */
    async AddClusterInstances(req, cb) {
        return this.request("AddClusterInstances", req, cb);
    }
    /**
     * 查询公共配置汇总列表
     * @public
     */
    async DescribePublicConfigSummary(req, cb) {
        return this.request("DescribePublicConfigSummary", req, cb);
    }
    /**
     * 容器部署组列表
     * @public
     */
    async DescribeContainerGroups(req, cb) {
        return this.request("DescribeContainerGroups", req, cb);
    }
    /**
     * 查询配置项列表
     * @public
     */
    async DescribeConfigs(req, cb) {
        return this.request("DescribeConfigs", req, cb);
    }
    /**
     * 查询配置
     * @public
     */
    async DescribeConfig(req, cb) {
        return this.request("DescribeConfig", req, cb);
    }
    /**
     *  容器部署组详情
     * @public
     */
    async DescribeContainerGroupDetail(req, cb) {
        return this.request("DescribeContainerGroupDetail", req, cb);
    }
    /**
     * 回滚配置
     * @public
     */
    async RollbackConfig(req, cb) {
        return this.request("RollbackConfig", req, cb);
    }
    /**
     * 镜像版本列表
     * @public
     */
    async DescribeImageTags(req, cb) {
        return this.request("DescribeImageTags", req, cb);
    }
    /**
       * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
  调用此接口完成后，才标志上传包流程结束。
       * @public
       */
    async ModifyUploadInfo(req, cb) {
        return this.request("ModifyUploadInfo", req, cb);
    }
    /**
     * 查询简单集群列表
     * @public
     */
    async DescribeSimpleClusters(req, cb) {
        return this.request("DescribeSimpleClusters", req, cb);
    }
    /**
     * 查询API详情
     * @public
     */
    async DescribeApiDetail(req, cb) {
        return this.request("DescribeApiDetail", req, cb);
    }
    /**
     * 部署Serverless应用
     * @public
     */
    async DeployServerlessGroup(req, cb) {
        return this.request("DeployServerlessGroup", req, cb);
    }
    /**
     * 创建配置项
     * @public
     */
    async CreateConfig(req, cb) {
        return this.request("CreateConfig", req, cb);
    }
    /**
     * 撤回已发布的公共配置
     * @public
     */
    async RevocationPublicConfig(req, cb) {
        return this.request("RevocationPublicConfig", req, cb);
    }
    /**
     * 批量删除镜像版本
     * @public
     */
    async DeleteImageTags(req, cb) {
        return this.request("DeleteImageTags", req, cb);
    }
    /**
       * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
  COS相关文档请查阅：https://cloud.tencent.com/document/product/436
       * @public
       */
    async DescribeDownloadInfo(req, cb) {
        return this.request("DescribeDownloadInfo", req, cb);
    }
    /**
     * 获取应用列表
     * @public
     */
    async DescribeApplications(req, cb) {
        return this.request("DescribeApplications", req, cb);
    }
    /**
     * 更新仓库信息
     * @public
     */
    async UpdateRepository(req, cb) {
        return this.request("UpdateRepository", req, cb);
    }
    /**
     * 获取应用详情
     * @public
     */
    async DescribeApplication(req, cb) {
        return this.request("DescribeApplication", req, cb);
    }
    /**
     * 查询公共配置（单条）
     * @public
     */
    async DescribePublicConfig(req, cb) {
        return this.request("DescribePublicConfig", req, cb);
    }
    /**
     * 查询泳道列表
     * @public
     */
    async DescribeLanes(req, cb) {
        return this.request("DescribeLanes", req, cb);
    }
    /**
     * 查询简单命名空间列表
     * @public
     */
    async DescribeSimpleNamespaces(req, cb) {
        return this.request("DescribeSimpleNamespaces", req, cb);
    }
    /**
     * 删除微服务
     * @public
     */
    async DeleteMicroservice(req, cb) {
        return this.request("DeleteMicroservice", req, cb);
    }
    /**
     * 停止容器部署组
     * @public
     */
    async StopContainerGroup(req, cb) {
        return this.request("StopContainerGroup", req, cb);
    }
    /**
     * 创建泳道规则
     * @public
     */
    async CreateLaneRule(req, cb) {
        return this.request("CreateLaneRule", req, cb);
    }
    /**
     * 删除容器部署组
     * @public
     */
    async DeleteContainerGroup(req, cb) {
        return this.request("DeleteContainerGroup", req, cb);
    }
    /**
     * 发布配置
     * @public
     */
    async ReleaseConfig(req, cb) {
        return this.request("ReleaseConfig", req, cb);
    }
    /**
     * 获取虚拟机部署组列表
     * @public
     */
    async DescribeGroups(req, cb) {
        return this.request("DescribeGroups", req, cb);
    }
    /**
     * 查询仓库列表
     * @public
     */
    async DescribeRepositories(req, cb) {
        return this.request("DescribeRepositories", req, cb);
    }
    /**
     * 创建仓库
     * @public
     */
    async CreateRepository(req, cb) {
        return this.request("CreateRepository", req, cb);
    }
    /**
     * 查询集群实例
     * @public
     */
    async DescribeClusterInstances(req, cb) {
        return this.request("DescribeClusterInstances", req, cb);
    }
    /**
     * 创建公共配置项
     * @public
     */
    async CreatePublicConfig(req, cb) {
        return this.request("CreatePublicConfig", req, cb);
    }
    /**
     * 查询简单部署组列表
     * @public
     */
    async DescribeSimpleGroups(req, cb) {
        return this.request("DescribeSimpleGroups", req, cb);
    }
    /**
     * 创建Serverless部署组
     * @public
     */
    async CreateServerlessGroup(req, cb) {
        return this.request("CreateServerlessGroup", req, cb);
    }
    /**
     * 添加云主机节点至TSF集群
     * @public
     */
    async AddInstances(req, cb) {
        return this.request("AddInstances", req, cb);
    }
    /**
     * 查询配置汇总列表
     * @public
     */
    async DescribeConfigSummary(req, cb) {
        return this.request("DescribeConfigSummary", req, cb);
    }
    /**
     * 无
     * @public
     */
    async DescribePkgs(req, cb) {
        return this.request("DescribePkgs", req, cb);
    }
    /**
     * 查询简单应用列表
     * @public
     */
    async DescribeSimpleApplications(req, cb) {
        return this.request("DescribeSimpleApplications", req, cb);
    }
    /**
     * 删除容器部署组
     * @public
     */
    async DeleteGroup(req, cb) {
        return this.request("DeleteGroup", req, cb);
    }
    /**
     * 查询Serverless部署组列表
     * @public
     */
    async DescribeServerlessGroups(req, cb) {
        return this.request("DescribeServerlessGroups", req, cb);
    }
    /**
     * 创建虚拟机部署组
     * @public
     */
    async CreateGroup(req, cb) {
        return this.request("CreateGroup", req, cb);
    }
    /**
     * 查询虚拟机部署组云主机列表
     * @public
     */
    async DescribeGroupInstances(req, cb) {
        return this.request("DescribeGroupInstances", req, cb);
    }
    /**
       * 从软件仓库批量删除程序包。
  一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
       * @public
       */
    async DeletePkgs(req, cb) {
        return this.request("DeletePkgs", req, cb);
    }
    /**
     * 查询公共配置项列表
     * @public
     */
    async DescribePublicConfigs(req, cb) {
        return this.request("DescribePublicConfigs", req, cb);
    }
    /**
     * 启动容器部署组
     * @public
     */
    async StartContainerGroup(req, cb) {
        return this.request("StartContainerGroup", req, cb);
    }
    /**
     * 从 TSF 集群中批量移除云主机节点
     * @public
     */
    async RemoveInstances(req, cb) {
        return this.request("RemoveInstances", req, cb);
    }
    /**
     * 虚拟机部署组添加实例
     * @public
     */
    async ExpandGroup(req, cb) {
        return this.request("ExpandGroup", req, cb);
    }
    /**
     * 删除泳道
     * @public
     */
    async DeleteLane(req, cb) {
        return this.request("DeleteLane", req, cb);
    }
    /**
     * 查询配置发布信息
     * @public
     */
    async DescribeConfigReleases(req, cb) {
        return this.request("DescribeConfigReleases", req, cb);
    }
    /**
     * 创建泳道
     * @public
     */
    async CreateLane(req, cb) {
        return this.request("CreateLane", req, cb);
    }
    /**
     * 部署虚拟机部署组应用
     * @public
     */
    async DeployGroup(req, cb) {
        return this.request("DeployGroup", req, cb);
    }
    /**
     * 更新泳道信息
     * @public
     */
    async ModifyLane(req, cb) {
        return this.request("ModifyLane", req, cb);
    }
    /**
     * 新增微服务
     * @public
     */
    async CreateMicroservice(req, cb) {
        return this.request("CreateMicroservice", req, cb);
    }
    /**
     * 修改微服务详情
     * @public
     */
    async ModifyMicroservice(req, cb) {
        return this.request("ModifyMicroservice", req, cb);
    }
    /**
     * 查询服务API列表
     * @public
     */
    async DescribeMsApiList(req, cb) {
        return this.request("DescribeMsApiList", req, cb);
    }
    /**
     * 创建应用
     * @public
     */
    async CreateApplication(req, cb) {
        return this.request("CreateApplication", req, cb);
    }
    /**
     * 查询公共配置发布历史
     * @public
     */
    async DescribePublicConfigReleaseLogs(req, cb) {
        return this.request("DescribePublicConfigReleaseLogs", req, cb);
    }
    /**
     * 查询配置发布历史
     * @public
     */
    async DescribeConfigReleaseLogs(req, cb) {
        return this.request("DescribeConfigReleaseLogs", req, cb);
    }
    /**
     * 查询微服务详情
     * @public
     */
    async DescribeMicroservice(req, cb) {
        return this.request("DescribeMicroservice", req, cb);
    }
    /**
     * 删除Serverless部署组
     * @public
     */
    async DeleteServerlessGroup(req, cb) {
        return this.request("DeleteServerlessGroup", req, cb);
    }
    /**
     * 删除仓库
     * @public
     */
    async DeleteRepository(req, cb) {
        return this.request("DeleteRepository", req, cb);
    }
    /**
     * 部署容器应用
     * @public
     */
    async DeployContainerGroup(req, cb) {
        return this.request("DeployContainerGroup", req, cb);
    }
    /**
     * 删除应用
     * @public
     */
    async DeleteApplication(req, cb) {
        return this.request("DeleteApplication", req, cb);
    }
    /**
     * 删除命名空间
     * @public
     */
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    /**
     * 删除配置项
     * @public
     */
    async DeleteConfig(req, cb) {
        return this.request("DeleteConfig", req, cb);
    }
    /**
     * 发布公共配置
     * @public
     */
    async ReleasePublicConfig(req, cb) {
        return this.request("ReleasePublicConfig", req, cb);
    }
    /**
     * 获取微服务列表
     * @public
     */
    async DescribeMicroservices(req, cb) {
        return this.request("DescribeMicroservices", req, cb);
    }
    /**
     * 查询API 版本
     * @public
     */
    async DescribeApiVersions(req, cb) {
        return this.request("DescribeApiVersions", req, cb);
    }
    /**
     * 查询虚拟机部署组详情
     * @public
     */
    async DescribeGroup(req, cb) {
        return this.request("DescribeGroup", req, cb);
    }
    /**
     * 创建容器部署组
     * @public
     */
    async CreateContainGroup(req, cb) {
        return this.request("CreateContainGroup", req, cb);
    }
    /**
     * 查询Serverless部署组明细
     * @public
     */
    async DescribeServerlessGroup(req, cb) {
        return this.request("DescribeServerlessGroup", req, cb);
    }
    /**
     * 查询仓库信息
     * @public
     */
    async DescribeRepository(req, cb) {
        return this.request("DescribeRepository", req, cb);
    }
    /**
     * 获取应用列表其它字段，如实例数量信息等
     * @public
     */
    async DescribeApplicationAttribute(req, cb) {
        return this.request("DescribeApplicationAttribute", req, cb);
    }
    /**
     * 撤回已发布的配置
     * @public
     */
    async RevocationConfig(req, cb) {
        return this.request("RevocationConfig", req, cb);
    }
    /**
     * 查询泳道规则列表
     * @public
     */
    async DescribeLaneRules(req, cb) {
        return this.request("DescribeLaneRules", req, cb);
    }
    /**
     * 更新泳道规则
     * @public
     */
    async ModifyLaneRule(req, cb) {
        return this.request("ModifyLaneRule", req, cb);
    }
    /**
     * 查询group发布的配置
     * @public
     */
    async DescribeReleasedConfig(req, cb) {
        return this.request("DescribeReleasedConfig", req, cb);
    }
    /**
     * 查询公共配置发布信息
     * @public
     */
    async DescribePublicConfigReleases(req, cb) {
        return this.request("DescribePublicConfigReleases", req, cb);
    }
    /**
       * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
  COS相关文档请查阅：https://cloud.tencent.com/document/product/436
       * @public
       */
    async DescribeUploadInfo(req, cb) {
        return this.request("DescribeUploadInfo", req, cb);
    }
    /**
     * 停止虚拟机部署组
     * @public
     */
    async StopGroup(req, cb) {
        return this.request("StopGroup", req, cb);
    }
    /**
     * 下线部署组所有机器实例
     * @public
     */
    async ShrinkGroup(req, cb) {
        return this.request("ShrinkGroup", req, cb);
    }
    /**
     * 启动分组
     * @public
     */
    async StartGroup(req, cb) {
        return this.request("StartGroup", req, cb);
    }
    /**
     * 修改容器部署组
     * @public
     */
    async ModifyContainerGroup(req, cb) {
        return this.request("ModifyContainerGroup", req, cb);
    }
}
exports.Client = Client;