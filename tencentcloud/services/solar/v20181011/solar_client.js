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
 * solar client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("solar.tencentcloudapi.com", "2018-10-11", clientConfig);
    }
    /**
     * 子项目详情
     * @public
     */
    async DescribeSubProject(req, cb) {
        return this.request("DescribeSubProject", req, cb);
    }
    /**
     * 项目库存详情
     * @public
     */
    async DescribeProjectStock(req, cb) {
        return this.request("DescribeProjectStock", req, cb);
    }
    /**
     * 项目详情展示
     * @public
     */
    async DescribeProject(req, cb) {
        return this.request("DescribeProject", req, cb);
    }
    /**
     * 素材查询服务号模板的列表（样例）
     * @public
     */
    async DescribeResourceTemplateHeaders(req, cb) {
        return this.request("DescribeResourceTemplateHeaders", req, cb);
    }
    /**
     * 查询客户档案列表
     * @public
     */
    async DescribeCustomers(req, cb) {
        return this.request("DescribeCustomers", req, cb);
    }
    /**
     * 发送企业微信触达任务
     * @public
     */
    async SendWxTouchTask(req, cb) {
        return this.request("SendWxTouchTask", req, cb);
    }
    /**
     * 创建项目
     * @public
     */
    async CreateProject(req, cb) {
        return this.request("CreateProject", req, cb);
    }
    /**
     * 补充子项目库存
     * @public
     */
    async ReplenishProjectStock(req, cb) {
        return this.request("ReplenishProjectStock", req, cb);
    }
    /**
     * 项目列表展示
     * @public
     */
    async DescribeProjects(req, cb) {
        return this.request("DescribeProjects", req, cb);
    }
    /**
     * 下线项目
     * @public
     */
    async OffLineProject(req, cb) {
        return this.request("OffLineProject", req, cb);
    }
    /**
     * 把审批中的工单置为已失效
     * @public
     */
    async ExpireFlow(req, cb) {
        return this.request("ExpireFlow", req, cb);
    }
    /**
     * 删除项目
     * @public
     */
    async DeleteProject(req, cb) {
        return this.request("DeleteProject", req, cb);
    }
    /**
     * 员工渠道更改员工状态
     * @public
     */
    async CheckStaffChUser(req, cb) {
        return this.request("CheckStaffChUser", req, cb);
    }
    /**
     * 客户档案查询客户详情
     * @public
     */
    async DescribeCustomer(req, cb) {
        return this.request("DescribeCustomer", req, cb);
    }
    /**
     * 修改项目
     * @public
     */
    async ModifyProject(req, cb) {
        return this.request("ModifyProject", req, cb);
    }
    /**
     * 创建子项目
     * @public
     */
    async CreateSubProject(req, cb) {
        return this.request("CreateSubProject", req, cb);
    }
    /**
     * 复制活动渠道的策略
     * @public
     */
    async CopyActivityChannel(req, cb) {
        return this.request("CopyActivityChannel", req, cb);
    }
}
exports.Client = Client;
