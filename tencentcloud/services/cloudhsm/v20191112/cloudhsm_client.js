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
 * cloudhsm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cloudhsm.tencentcloudapi.com", "2019-11-12", clientConfig);
    }
    /**
     * 修改VSM属性
     * @public
     */
    async ModifyVsmAttributes(req, cb) {
        return this.request("ModifyVsmAttributes", req, cb);
    }
    /**
     * 获取VSM属性
     * @public
     */
    async DescribeVsmAttributes(req, cb) {
        return this.request("DescribeVsmAttributes", req, cb);
    }
    /**
     * 获取用户VSM列表
     * @public
     */
    async DescribeVsms(req, cb) {
        return this.request("DescribeVsms", req, cb);
    }
    /**
     * 查询用户的私有网络列表
     * @public
     */
    async DescribeVpc(req, cb) {
        return this.request("DescribeVpc", req, cb);
    }
    /**
     * 通过VpcId获取Hsm资源数
     * @public
     */
    async DescribeHSMByVpcId(req, cb) {
        return this.request("DescribeHSMByVpcId", req, cb);
    }
    /**
     * 通过SubnetId获取Hsm资源数
     * @public
     */
    async DescribeHSMBySubnetId(req, cb) {
        return this.request("DescribeHSMBySubnetId", req, cb);
    }
    /**
     * 根据用户的AppId获取用户安全组列表
     * @public
     */
    async DescribeUsg(req, cb) {
        return this.request("DescribeUsg", req, cb);
    }
    /**
     * 查询子网列表
     * @public
     */
    async DescribeSubnet(req, cb) {
        return this.request("DescribeSubnet", req, cb);
    }
    /**
     * 购买询价接口
     * @public
     */
    async InquiryPriceBuyVsm(req, cb) {
        return this.request("InquiryPriceBuyVsm", req, cb);
    }
    /**
     * 获取安全组详情
     * @public
     */
    async DescribeUsgRule(req, cb) {
        return this.request("DescribeUsgRule", req, cb);
    }
}
exports.Client = Client;