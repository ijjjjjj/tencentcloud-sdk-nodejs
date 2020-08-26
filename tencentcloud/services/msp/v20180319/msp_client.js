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
 * msp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("msp.tencentcloudapi.com", "2018-03-19", clientConfig);
    }
    /**
     * 获取迁移任务列表
     * @public
     */
    async ListMigrationTask(req, cb) {
        return this.request("ListMigrationTask", req, cb);
    }
    /**
     * 注册迁移任务
     * @public
     */
    async RegisterMigrationTask(req, cb) {
        return this.request("RegisterMigrationTask", req, cb);
    }
    /**
     * 更新迁移任务状态
     * @public
     */
    async ModifyMigrationTaskStatus(req, cb) {
        return this.request("ModifyMigrationTaskStatus", req, cb);
    }
    /**
     * 取消注册迁移任务
     * @public
     */
    async DeregisterMigrationTask(req, cb) {
        return this.request("DeregisterMigrationTask", req, cb);
    }
    /**
     * 获取指定迁移任务详情
     * @public
     */
    async DescribeMigrationTask(req, cb) {
        return this.request("DescribeMigrationTask", req, cb);
    }
    /**
     * 更改迁移任务所属项目
     * @public
     */
    async ModifyMigrationTaskBelongToProject(req, cb) {
        return this.request("ModifyMigrationTaskBelongToProject", req, cb);
    }
    /**
     * 获取迁移项目名称列表
     * @public
     */
    async ListMigrationProject(req, cb) {
        return this.request("ListMigrationProject", req, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=msp_client.js.map