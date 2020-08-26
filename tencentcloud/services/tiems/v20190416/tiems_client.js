"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
 * tiems client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tiems.tencentcloudapi.com", "2019-04-16", clientConfig);
    }
    /**
     * 创建服务
     * @public
     */
    async CreateService(req, cb) {
        return this.request("CreateService", req, cb);
    }
    /**
     * 创建服务配置
     * @public
     */
    async CreateServiceConfig(req, cb) {
        return this.request("CreateServiceConfig", req, cb);
    }
    /**
     * 创建资源组的伸缩组。当前一个资源组仅允许创建一个伸缩组。
     * @public
     */
    async CreateRsgAsGroup(req, cb) {
        return this.request("CreateRsgAsGroup", req, cb);
    }
    /**
     * 删除资源组中的节点。目前仅支持删除已经到期的预付费节点，和按量付费节点。
     * @public
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 删除服务
     * @public
     */
    async DeleteService(req, cb) {
        return this.request("DeleteService", req, cb);
    }
    /**
     * 创建任务
     * @public
     */
    async CreateJob(req, cb) {
        return this.request("CreateJob", req, cb);
    }
    /**
     * 更新资源组的伸缩组
     * @public
     */
    async UpdateRsgAsGroup(req, cb) {
        return this.request("UpdateRsgAsGroup", req, cb);
    }
    /**
     * 描述服务
     * @public
     */
    async DescribeServices(req, cb) {
        return this.request("DescribeServices", req, cb);
    }
    /**
     * 停用资源组的伸缩组
     * @public
     */
    async DisableRsgAsGroup(req, cb) {
        return this.request("DisableRsgAsGroup", req, cb);
    }
    /**
     * 更新服务
     * @public
     */
    async UpdateService(req, cb) {
        return this.request("UpdateService", req, cb);
    }
    /**
     * 创建运行环境
     * @public
     */
    async CreateRuntime(req, cb) {
        return this.request("CreateRuntime", req, cb);
    }
    /**
     * 删除服务配置
     * @public
     */
    async DeleteServiceConfig(req, cb) {
        return this.request("DeleteServiceConfig", req, cb);
    }
    /**
     * 获取节点列表
     * @public
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 查询伸缩组活动
     * @public
     */
    async DescribeRsgAsGroupActivities(req, cb) {
        return this.request("DescribeRsgAsGroupActivities", req, cb);
    }
    /**
     * 描述服务运行环境
     * @public
     */
    async DescribeRuntimes(req, cb) {
        return this.request("DescribeRuntimes", req, cb);
    }
    /**
     * 获取资源组列表
     * @public
     */
    async DescribeResourceGroups(req, cb) {
        return this.request("DescribeResourceGroups", req, cb);
    }
    /**
     * 更新任务
     * @public
     */
    async UpdateJob(req, cb) {
        return this.request("UpdateJob", req, cb);
    }
    /**
     * 伸缩
     * @public
     */
    async DeleteRsgAsGroup(req, cb) {
        return this.request("DeleteRsgAsGroup", req, cb);
    }
    /**
     * 删除资源组
     * @public
     */
    async DeleteResourceGroup(req, cb) {
        return this.request("DeleteResourceGroup", req, cb);
    }
    /**
     * 删除运行环境
     * @public
     */
    async DeleteRuntime(req, cb) {
        return this.request("DeleteRuntime", req, cb);
    }
    /**
     * 暴露服务
     * @public
     */
    async ExposeService(req, cb) {
        return this.request("ExposeService", req, cb);
    }
    /**
     * 删除任务
     * @public
     */
    async DeleteJob(req, cb) {
        return this.request("DeleteJob", req, cb);
    }
    /**
     * 启用资源组的伸缩组
     * @public
     */
    async EnableRsgAsGroup(req, cb) {
        return this.request("EnableRsgAsGroup", req, cb);
    }
    /**
     * 描述服务配置
     * @public
     */
    async DescribeServiceConfigs(req, cb) {
        return this.request("DescribeServiceConfigs", req, cb);
    }
    /**
     * 查询资源组的伸缩组信息
     * @public
     */
    async DescribeRsgAsGroups(req, cb) {
        return this.request("DescribeRsgAsGroups", req, cb);
    }
}
exports.Client = Client;
