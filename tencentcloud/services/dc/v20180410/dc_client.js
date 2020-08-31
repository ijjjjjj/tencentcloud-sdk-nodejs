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
 * dc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dc.tencentcloudapi.com", "2018-04-10", clientConfig);
    }
    /**
     * 修改物理专线的属性。
     * @public
     */
    async ModifyDirectConnectAttribute(req, cb) {
        return this.request("ModifyDirectConnectAttribute", req, cb);
    }
    /**
     * 用于创建专用通道的接口
     * @public
     */
    async CreateDirectConnectTunnel(req, cb) {
        return this.request("CreateDirectConnectTunnel", req, cb);
    }
    /**
       * 删除物理专线。
  只能删除处于已连接状态的物理专线。
       * @public
       */
    async DeleteDirectConnect(req, cb) {
        return this.request("DeleteDirectConnect", req, cb);
    }
    /**
     * 接受专用通道申请
     * @public
     */
    async AcceptDirectConnectTunnel(req, cb) {
        return this.request("AcceptDirectConnectTunnel", req, cb);
    }
    /**
     * 删除专用通道
     * @public
     */
    async DeleteDirectConnectTunnel(req, cb) {
        return this.request("DeleteDirectConnectTunnel", req, cb);
    }
    /**
       * 查询物理专线接入点
  
       * @public
       */
    async DescribeAccessPoints(req, cb) {
        return this.request("DescribeAccessPoints", req, cb);
    }
    /**
     * 用于查询专用通道列表。
     * @public
     */
    async DescribeDirectConnectTunnels(req, cb) {
        return this.request("DescribeDirectConnectTunnels", req, cb);
    }
    /**
       * 申请物理专线接入。
  调用该接口时，请注意：
  账号要进行实名认证，否则不允许申请物理专线；
  若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
       * @public
       */
    async CreateDirectConnect(req, cb) {
        return this.request("CreateDirectConnect", req, cb);
    }
    /**
     * 拒绝专用通道申请
     * @public
     */
    async RejectDirectConnectTunnel(req, cb) {
        return this.request("RejectDirectConnectTunnel", req, cb);
    }
    /**
     * 查询物理专线列表。
     * @public
     */
    async DescribeDirectConnects(req, cb) {
        return this.request("DescribeDirectConnects", req, cb);
    }
    /**
     * 修改专用通道属性
     * @public
     */
    async ModifyDirectConnectTunnelAttribute(req, cb) {
        return this.request("ModifyDirectConnectTunnelAttribute", req, cb);
    }
}
exports.Client = Client;