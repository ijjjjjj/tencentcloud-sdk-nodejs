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
 * tcb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcb.tencentcloudapi.com", "2018-06-08", clientConfig);
    }
    /**
     * 创建托管域名
     * @public
     */
    async CreateHostingDomain(req, cb) {
        return this.request("CreateHostingDomain", req, cb);
    }
    /**
     * 获取终端用户列表
     * @public
     */
    async DescribeEndUsers(req, cb) {
        return this.request("DescribeEndUsers", req, cb);
    }
    /**
     * 增加安全域名
     * @public
     */
    async CreateAuthDomain(req, cb) {
        return this.request("CreateAuthDomain", req, cb);
    }
    /**
     * 获取安全域名列表
     * @public
     */
    async DescribeAuthDomains(req, cb) {
        return this.request("DescribeAuthDomains", req, cb);
    }
    /**
     * 开通后付费资源
     * @public
     */
    async CreatePostpayPackage(req, cb) {
        return this.request("CreatePostpayPackage", req, cb);
    }
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     * @public
     */
    async ReinstateEnv(req, cb) {
        return this.request("ReinstateEnv", req, cb);
    }
    /**
     * 获取终端用户总量与平台分布情况
     * @public
     */
    async DescribeEndUserStatistic(req, cb) {
        return this.request("DescribeEndUserStatistic", req, cb);
    }
    /**
     * 管理终端用户
     * @public
     */
    async ModifyEndUser(req, cb) {
        return this.request("ModifyEndUser", req, cb);
    }
    /**
     * 获取后付费免费额度
     * @public
     */
    async DescribePostpayPackageFreeQuotas(req, cb) {
        return this.request("DescribePostpayPackageFreeQuotas", req, cb);
    }
    /**
     * TCB云API统一入口
     * @public
     */
    async CommonServiceAPI(req, cb) {
        return this.request("CommonServiceAPI", req, cb);
    }
    /**
     * 检查是否开通Tcb服务
     * @public
     */
    async CheckTcbService(req, cb) {
        return this.request("CheckTcbService", req, cb);
    }
    /**
     * 删除终端用户
     * @public
     */
    async DeleteEndUser(req, cb) {
        return this.request("DeleteEndUser", req, cb);
    }
    /**
     * 获取环境终端用户新增与登录信息
     * @public
     */
    async DescribeEndUserLoginStatistic(req, cb) {
        return this.request("DescribeEndUserLoginStatistic", req, cb);
    }
    /**
     * 查询指定指标的配额使用量
     * @public
     */
    async DescribeQuotaData(req, cb) {
        return this.request("DescribeQuotaData", req, cb);
    }
    /**
     * 获取增值包计费相关信息
     * @public
     */
    async DescribeExtraPkgBillingInfo(req, cb) {
        return this.request("DescribeExtraPkgBillingInfo", req, cb);
    }
    /**
     * 更新环境信息
     * @public
     */
    async ModifyEnv(req, cb) {
        return this.request("ModifyEnv", req, cb);
    }
    /**
     * 获取数据库权限
     * @public
     */
    async DescribeDatabaseACL(req, cb) {
        return this.request("DescribeDatabaseACL", req, cb);
    }
    /**
     * 销毁环境
     * @public
     */
    async DestroyEnv(req, cb) {
        return this.request("DestroyEnv", req, cb);
    }
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @public
     */
    async DescribeEnvs(req, cb) {
        return this.request("DescribeEnvs", req, cb);
    }
    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     * @public
     */
    async DestroyStaticStore(req, cb) {
        return this.request("DestroyStaticStore", req, cb);
    }
    /**
     * 修改数据库权限
     * @public
     */
    async ModifyDatabaseACL(req, cb) {
        return this.request("ModifyDatabaseACL", req, cb);
    }
    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     * @public
     */
    async CreateStaticStore(req, cb) {
        return this.request("CreateStaticStore", req, cb);
    }
    /**
     * 查询环境个数上限
     * @public
     */
    async DescribeEnvLimit(req, cb) {
        return this.request("DescribeEnvLimit", req, cb);
    }
    /**
     * 查询后付费免费配额信息
     * @public
     */
    async DescribeEnvFreeQuota(req, cb) {
        return this.request("DescribeEnvFreeQuota", req, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=tcb_client.js.map