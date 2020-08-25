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
import { AbstractClient, ClientConfig } from "../../../common/abstract_client"
import {
   UnbindDevicesRequest,
   BindDevicesRequest,
   DescribeProductsRequest,
   DescribeDevicesResponse,
   ProductInfo,
   Task,
   EnableTopicRuleResponse,
   DescribeTasksResponse,
   UpdateDeviceShadowRequest,
   DescribeMultiDevTaskRequest,
   DescribeProductsResponse,
   DescribeDeviceShadowResponse,
   CreateMultiDeviceResponse,
   PublishRRPCMessageRequest,
   ProductProperties,
   UpdateTopicPolicyResponse,
   TaskInfo,
   DeleteProductRequest,
   DescribeTasksRequest,
   ReplaceTopicRuleRequest,
   MultiDevicesInfo,
   ReplaceTopicRuleResponse,
   DescribeDeviceClientKeyRequest,
   UpdateTopicPolicyRequest,
   BatchUpdateShadow,
   DeleteDeviceRequest,
   CreateMultiDevicesTaskRequest,
   CreateLoraDeviceRequest,
   CreateProductResponse,
   DeleteLoraDeviceResponse,
   CreateTaskRequest,
   CreateTopicPolicyResponse,
   DescribeMultiDevicesResponse,
   CreateDeviceResponse,
   DeleteLoraDeviceRequest,
   CreateDeviceRequest,
   DescribeProductTaskRequest,
   CreateProductRequest,
   DisableTopicRuleResponse,
   BrokerSubscribe,
   DescribeProductTaskResponse,
   DescribeDeviceResponse,
   PublishBroadcastMessageRequest,
   PublishMessageRequest,
   DeviceLabel,
   UpdateDeviceAvailableStateResponse,
   CancelTaskRequest,
   UpdateDeviceAvailableStateRequest,
   DeleteProductResponse,
   TopicRulePayload,
   PublishToDeviceRequest,
   DeleteTopicRuleResponse,
   PublishBroadcastMessageResponse,
   DescribeDeviceRequest,
   CreateMultiDevicesTaskResponse,
   CreateTopicPolicyRequest,
   ProductMetadata,
   DescribeLoraDeviceResponse,
   ProductTaskInfo,
   PublishRRPCMessageResponse,
   CancelTaskResponse,
   Attribute,
   CreateLoraDeviceResponse,
   DeleteTopicRuleRequest,
   ResetDeviceStateRequest,
   CreateMultiDeviceRequest,
   PublishToDeviceResponse,
   DescribeDeviceShadowRequest,
   UnbindDevicesResponse,
   CreateTaskFileUrlResponse,
   DescribeMultiDevicesRequest,
   CreateTaskFileUrlRequest,
   UpdateDeviceShadowResponse,
   DescribeTaskResponse,
   CreateTaskResponse,
   BatchPublishMessage,
   DescribeMultiDevTaskResponse,
   DescribeProductTasksRequest,
   DeviceTag,
   DescribeLoraDeviceRequest,
   DescribeTaskRequest,
   PublishMessageResponse,
   BindDevicesResponse,
   ResetDeviceResult,
   DescribeDevicesRequest,
   DescribeDeviceClientKeyResponse,
   DisableTopicRuleRequest,
   ResetDeviceStateResponse,
   CreateTopicRuleResponse,
   CreateTopicRuleRequest,
   PublishAsDeviceRequest,
   DeleteDeviceResponse,
   DeviceInfo,
   DescribeProductTasksResponse,
   PublishAsDeviceResponse,
   EnableTopicRuleRequest,

} from "./iotcloud_models"

/**
 * iotcloud client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("iotcloud.tencentcloudapi.com", "2018-06-14", clientConfig);
    }
    
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务 
     * @public
     */
    async CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse> {
        return await this.request("CreateTask", req, cb);
    }

    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     * @public
     */
    async ReplaceTopicRule(req: ReplaceTopicRuleRequest, cb?: (error: string, rep: ReplaceTopicRuleResponse) => void): Promise<ReplaceTopicRuleResponse> {
        return await this.request("ReplaceTopicRule", req, cb);
    }

    /**
     * 发布RRPC消息
     * @public
     */
    async PublishRRPCMessage(req: PublishRRPCMessageRequest, cb?: (error: string, rep: PublishRRPCMessageResponse) => void): Promise<PublishRRPCMessageResponse> {
        return await this.request("PublishRRPCMessage", req, cb);
    }

    /**
     * 删除lora类型的设备
     * @public
     */
    async DeleteLoraDevice(req: DeleteLoraDeviceRequest, cb?: (error: string, rep: DeleteLoraDeviceResponse) => void): Promise<DeleteLoraDeviceResponse> {
        return await this.request("DeleteLoraDevice", req, cb);
    }

    /**
     * 服务器端下发消息给lora类型的设备
     * @public
     */
    async PublishToDevice(req: PublishToDeviceRequest, cb?: (error: string, rep: PublishToDeviceResponse) => void): Promise<PublishToDeviceResponse> {
        return await this.request("PublishToDevice", req, cb);
    }

    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。 
     * @public
     */
    async DescribeDeviceShadow(req: DescribeDeviceShadowRequest, cb?: (error: string, rep: DescribeDeviceShadowResponse) => void): Promise<DescribeDeviceShadowResponse> {
        return await this.request("DescribeDeviceShadow", req, cb);
    }

    /**
     * 本接口（DescribeDevice）用于查看设备信息
     * @public
     */
    async DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse> {
        return await this.request("DescribeDevice", req, cb);
    }

    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     * @public
     */
    async CreateMultiDevice(req: CreateMultiDeviceRequest, cb?: (error: string, rep: CreateMultiDeviceResponse) => void): Promise<CreateMultiDeviceResponse> {
        return await this.request("CreateMultiDevice", req, cb);
    }

    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     * @public
     */
    async CreateTopicRule(req: CreateTopicRuleRequest, cb?: (error: string, rep: CreateTopicRuleResponse) => void): Promise<CreateTopicRuleResponse> {
        return await this.request("CreateTopicRule", req, cb);
    }

    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。 
     * @public
     */
    async CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse> {
        return await this.request("CancelTask", req, cb);
    }

    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     * @public
     */
    async UpdateDeviceShadow(req: UpdateDeviceShadowRequest, cb?: (error: string, rep: UpdateDeviceShadowResponse) => void): Promise<UpdateDeviceShadowResponse> {
        return await this.request("UpdateDeviceShadow", req, cb);
    }

    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic 
     * @public
     */
    async CreateTopicPolicy(req: CreateTopicPolicyRequest, cb?: (error: string, rep: CreateTopicPolicyResponse) => void): Promise<CreateTopicPolicyResponse> {
        return await this.request("CreateTopicPolicy", req, cb);
    }

    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品 
     * @public
     */
    async CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse> {
        return await this.request("CreateProduct", req, cb);
    }

    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     * @public
     */
    async DescribeDeviceClientKey(req: DescribeDeviceClientKeyRequest, cb?: (error: string, rep: DescribeDeviceClientKeyResponse) => void): Promise<DescribeDeviceClientKeyResponse> {
        return await this.request("DescribeDeviceClientKey", req, cb);
    }

    /**
     * 本接口（DescribeProducts）用于列出产品列表。 
     * @public
     */
    async DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse> {
        return await this.request("DescribeProducts", req, cb);
    }

    /**
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     * @public
     */
    async CreateMultiDevicesTask(req: CreateMultiDevicesTaskRequest, cb?: (error: string, rep: CreateMultiDevicesTaskResponse) => void): Promise<CreateMultiDevicesTaskResponse> {
        return await this.request("CreateMultiDevicesTask", req, cb);
    }

    /**
     * 获取lora类型设备的详细信息
     * @public
     */
    async DescribeLoraDevice(req: DescribeLoraDeviceRequest, cb?: (error: string, rep: DescribeLoraDeviceResponse) => void): Promise<DescribeLoraDeviceResponse> {
        return await this.request("DescribeLoraDevice", req, cb);
    }

    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月 
     * @public
     */
    async DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse> {
        return await this.request("DescribeTask", req, cb);
    }

    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。 
     * @public
     */
    async DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse> {
        return await this.request("DeleteDevice", req, cb);
    }

    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。 
     * @public
     */
    async CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse> {
        return await this.request("CreateDevice", req, cb);
    }

    /**
     * 本接口（PublishMessage）用于向某个主题发消息。 
     * @public
     */
    async PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse> {
        return await this.request("PublishMessage", req, cb);
    }

    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     * @public
     */
    async DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse> {
        return await this.request("DeleteProduct", req, cb);
    }

    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     * @public
     */
    async CreateTaskFileUrl(req: CreateTaskFileUrlRequest, cb?: (error: string, rep: CreateTaskFileUrlResponse) => void): Promise<CreateTaskFileUrlResponse> {
        return await this.request("CreateTaskFileUrl", req, cb);
    }

    /**
     * 重置设备的连接状态 
     * @public
     */
    async ResetDeviceState(req: ResetDeviceStateRequest, cb?: (error: string, rep: ResetDeviceStateResponse) => void): Promise<ResetDeviceStateResponse> {
        return await this.request("ResetDeviceState", req, cb);
    }

    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月 
     * @public
     */
    async DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse> {
        return await this.request("DescribeTasks", req, cb);
    }

    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     * @public
     */
    async DescribeMultiDevices(req: DescribeMultiDevicesRequest, cb?: (error: string, rep: DescribeMultiDevicesResponse) => void): Promise<DescribeMultiDevicesResponse> {
        return await this.request("DescribeMultiDevices", req, cb);
    }

    /**
     * 启用或者禁用设备
     * @public
     */
    async UpdateDeviceAvailableState(req: UpdateDeviceAvailableStateRequest, cb?: (error: string, rep: UpdateDeviceAvailableStateResponse) => void): Promise<UpdateDeviceAvailableStateResponse> {
        return await this.request("UpdateDeviceAvailableState", req, cb);
    }

    /**
     * 模拟lora类型的设备端向服务器端发送消息
     * @public
     */
    async PublishAsDevice(req: PublishAsDeviceRequest, cb?: (error: string, rep: PublishAsDeviceResponse) => void): Promise<PublishAsDeviceResponse> {
        return await this.request("PublishAsDevice", req, cb);
    }

    /**
     * 创建lora类型的设备
     * @public
     */
    async CreateLoraDevice(req: CreateLoraDeviceRequest, cb?: (error: string, rep: CreateLoraDeviceResponse) => void): Promise<CreateLoraDeviceResponse> {
        return await this.request("CreateLoraDevice", req, cb);
    }

    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     * @public
     */
    async BindDevices(req: BindDevicesRequest, cb?: (error: string, rep: BindDevicesResponse) => void): Promise<BindDevicesResponse> {
        return await this.request("BindDevices", req, cb);
    }

    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     * @public
     */
    async UpdateTopicPolicy(req: UpdateTopicPolicyRequest, cb?: (error: string, rep: UpdateTopicPolicyResponse) => void): Promise<UpdateTopicPolicyResponse> {
        return await this.request("UpdateTopicPolicy", req, cb);
    }

    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     * @public
     */
    async UnbindDevices(req: UnbindDevicesRequest, cb?: (error: string, rep: UnbindDevicesResponse) => void): Promise<UnbindDevicesResponse> {
        return await this.request("UnbindDevices", req, cb);
    }

    /**
     * 发布广播消息
     * @public
     */
    async PublishBroadcastMessage(req: PublishBroadcastMessageRequest, cb?: (error: string, rep: PublishBroadcastMessageResponse) => void): Promise<PublishBroadcastMessageResponse> {
        return await this.request("PublishBroadcastMessage", req, cb);
    }

    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     * @public
     */
    async DescribeProductTasks(req: DescribeProductTasksRequest, cb?: (error: string, rep: DescribeProductTasksResponse) => void): Promise<DescribeProductTasksResponse> {
        return await this.request("DescribeProductTasks", req, cb);
    }

    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。 
     * @public
     */
    async DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse> {
        return await this.request("DescribeDevices", req, cb);
    }

    /**
     * 本接口（DisableTopicRule）用于禁用规则
     * @public
     */
    async DisableTopicRule(req: DisableTopicRuleRequest, cb?: (error: string, rep: DisableTopicRuleResponse) => void): Promise<DisableTopicRuleResponse> {
        return await this.request("DisableTopicRule", req, cb);
    }

    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     * @public
     */
    async DescribeMultiDevTask(req: DescribeMultiDevTaskRequest, cb?: (error: string, rep: DescribeMultiDevTaskResponse) => void): Promise<DescribeMultiDevTaskResponse> {
        return await this.request("DescribeMultiDevTask", req, cb);
    }

    /**
     * 本接口（EnableTopicRule）用于启用规则 
     * @public
     */
    async EnableTopicRule(req: EnableTopicRuleRequest, cb?: (error: string, rep: EnableTopicRuleResponse) => void): Promise<EnableTopicRuleResponse> {
        return await this.request("EnableTopicRule", req, cb);
    }

    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     * @public
     */
    async DescribeProductTask(req: DescribeProductTaskRequest, cb?: (error: string, rep: DescribeProductTaskResponse) => void): Promise<DescribeProductTaskResponse> {
        return await this.request("DescribeProductTask", req, cb);
    }

    /**
     * 本接口（DeleteTopicRule）用于删除规则
     * @public
     */
    async DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse> {
        return await this.request("DeleteTopicRule", req, cb);
    }


}
