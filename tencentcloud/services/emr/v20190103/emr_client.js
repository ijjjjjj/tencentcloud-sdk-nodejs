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
 * emr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("emr.tencentcloudapi.com", "2019-01-03", clientConfig);
    }
    /**
     * 缩容Task节点
     * @public
     */
    async TerminateTasks(req, cb) {
        return this.request("TerminateTasks", req, cb);
    }
    /**
     * 查询EMR实例
     * @public
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 变配询价
     * @public
     */
    async InquiryPriceUpdateInstance(req, cb) {
        return this.request("InquiryPriceUpdateInstance", req, cb);
    }
    /**
     * 查询硬件节点信息
     * @public
     */
    async DescribeClusterNodes(req, cb) {
        return this.request("DescribeClusterNodes", req, cb);
    }
    /**
     * 续费询价。
     * @public
     */
    async InquiryPriceRenewInstance(req, cb) {
        return this.request("InquiryPriceRenewInstance", req, cb);
    }
    /**
     * 创建EMR实例
     * @public
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 创建实例询价
     * @public
     */
    async InquiryPriceCreateInstance(req, cb) {
        return this.request("InquiryPriceCreateInstance", req, cb);
    }
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     * @public
     */
    async InquiryPriceScaleOutInstance(req, cb) {
        return this.request("InquiryPriceScaleOutInstance", req, cb);
    }
    /**
     * 实例扩容
     * @public
     */
    async ScaleOutInstance(req, cb) {
        return this.request("ScaleOutInstance", req, cb);
    }
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     * @public
     */
    async TerminateInstance(req, cb) {
        return this.request("TerminateInstance", req, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=emr_client.js.map