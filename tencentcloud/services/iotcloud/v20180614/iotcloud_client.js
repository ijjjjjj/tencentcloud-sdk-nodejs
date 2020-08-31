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
 * iotcloud client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("iotcloud.tencentcloudapi.com", "2018-06-14", clientConfig);
    }
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
     * @public
     */
    async CreateTask(req, cb) {
        return this.request("CreateTask", req, cb);
    }
    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     * @public
     */
    async ReplaceTopicRule(req, cb) {
        return this.request("ReplaceTopicRule", req, cb);
    }
    /**
     * 发布RRPC消息
     * @public
     */
    async PublishRRPCMessage(req, cb) {
        return this.request("PublishRRPCMessage", req, cb);
    }
    /**
     * 删除lora类型的设备
     * @public
     */
    async DeleteLoraDevice(req, cb) {
        return this.request("DeleteLoraDevice", req, cb);
    }
    /**
     * 服务器端下发消息给lora类型的设备
     * @public
     */
    async PublishToDevice(req, cb) {
        return this.request("PublishToDevice", req, cb);
    }
    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
     * @public
     */
    async DescribeDeviceShadow(req, cb) {
        return this.request("DescribeDeviceShadow", req, cb);
    }
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     * @public
     */
    async DescribeDevice(req, cb) {
        return this.request("DescribeDevice", req, cb);
    }
    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     * @public
     */
    async CreateMultiDevice(req, cb) {
        return this.request("CreateMultiDevice", req, cb);
    }
    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     * @public
     */
    async CreateTopicRule(req, cb) {
        return this.request("CreateTopicRule", req, cb);
    }
    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。
     * @public
     */
    async CancelTask(req, cb) {
        return this.request("CancelTask", req, cb);
    }
    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     * @public
     */
    async UpdateDeviceShadow(req, cb) {
        return this.request("UpdateDeviceShadow", req, cb);
    }
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     * @public
     */
    async CreateTopicPolicy(req, cb) {
        return this.request("CreateTopicPolicy", req, cb);
    }
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     * @public
     */
    async CreateProduct(req, cb) {
        return this.request("CreateProduct", req, cb);
    }
    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     * @public
     */
    async DescribeDeviceClientKey(req, cb) {
        return this.request("DescribeDeviceClientKey", req, cb);
    }
    /**
     * 本接口（DescribeProducts）用于列出产品列表。
     * @public
     */
    async DescribeProducts(req, cb) {
        return this.request("DescribeProducts", req, cb);
    }
    /**
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     * @public
     */
    async CreateMultiDevicesTask(req, cb) {
        return this.request("CreateMultiDevicesTask", req, cb);
    }
    /**
     * 获取lora类型设备的详细信息
     * @public
     */
    async DescribeLoraDevice(req, cb) {
        return this.request("DescribeLoraDevice", req, cb);
    }
    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
     * @public
     */
    async DescribeTask(req, cb) {
        return this.request("DescribeTask", req, cb);
    }
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     * @public
     */
    async DeleteDevice(req, cb) {
        return this.request("DeleteDevice", req, cb);
    }
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     * @public
     */
    async CreateDevice(req, cb) {
        return this.request("CreateDevice", req, cb);
    }
    /**
     * 本接口（PublishMessage）用于向某个主题发消息。
     * @public
     */
    async PublishMessage(req, cb) {
        return this.request("PublishMessage", req, cb);
    }
    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     * @public
     */
    async DeleteProduct(req, cb) {
        return this.request("DeleteProduct", req, cb);
    }
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     * @public
     */
    async CreateTaskFileUrl(req, cb) {
        return this.request("CreateTaskFileUrl", req, cb);
    }
    /**
     * 重置设备的连接状态
     * @public
     */
    async ResetDeviceState(req, cb) {
        return this.request("ResetDeviceState", req, cb);
    }
    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     * @public
     */
    async DescribeTasks(req, cb) {
        return this.request("DescribeTasks", req, cb);
    }
    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     * @public
     */
    async DescribeMultiDevices(req, cb) {
        return this.request("DescribeMultiDevices", req, cb);
    }
    /**
     * 启用或者禁用设备
     * @public
     */
    async UpdateDeviceAvailableState(req, cb) {
        return this.request("UpdateDeviceAvailableState", req, cb);
    }
    /**
     * 模拟lora类型的设备端向服务器端发送消息
     * @public
     */
    async PublishAsDevice(req, cb) {
        return this.request("PublishAsDevice", req, cb);
    }
    /**
     * 创建lora类型的设备
     * @public
     */
    async CreateLoraDevice(req, cb) {
        return this.request("CreateLoraDevice", req, cb);
    }
    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     * @public
     */
    async BindDevices(req, cb) {
        return this.request("BindDevices", req, cb);
    }
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     * @public
     */
    async UpdateTopicPolicy(req, cb) {
        return this.request("UpdateTopicPolicy", req, cb);
    }
    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     * @public
     */
    async UnbindDevices(req, cb) {
        return this.request("UnbindDevices", req, cb);
    }
    /**
     * 发布广播消息
     * @public
     */
    async PublishBroadcastMessage(req, cb) {
        return this.request("PublishBroadcastMessage", req, cb);
    }
    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     * @public
     */
    async DescribeProductTasks(req, cb) {
        return this.request("DescribeProductTasks", req, cb);
    }
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     * @public
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 本接口（DisableTopicRule）用于禁用规则
     * @public
     */
    async DisableTopicRule(req, cb) {
        return this.request("DisableTopicRule", req, cb);
    }
    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     * @public
     */
    async DescribeMultiDevTask(req, cb) {
        return this.request("DescribeMultiDevTask", req, cb);
    }
    /**
     * 本接口（EnableTopicRule）用于启用规则
     * @public
     */
    async EnableTopicRule(req, cb) {
        return this.request("EnableTopicRule", req, cb);
    }
    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     * @public
     */
    async DescribeProductTask(req, cb) {
        return this.request("DescribeProductTask", req, cb);
    }
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     * @public
     */
    async DeleteTopicRule(req, cb) {
        return this.request("DeleteTopicRule", req, cb);
    }
}
exports.Client = Client;