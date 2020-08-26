import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { UnbindDevicesRequest, BindDevicesRequest, DescribeProductsRequest, DescribeDevicesResponse, EnableTopicRuleResponse, DescribeTasksResponse, UpdateDeviceShadowRequest, DescribeMultiDevTaskRequest, DescribeProductsResponse, DescribeDeviceShadowResponse, CreateMultiDeviceResponse, PublishRRPCMessageRequest, UpdateTopicPolicyResponse, DeleteProductRequest, DescribeTasksRequest, ReplaceTopicRuleRequest, ReplaceTopicRuleResponse, DescribeDeviceClientKeyRequest, UpdateTopicPolicyRequest, DeleteDeviceRequest, CreateMultiDevicesTaskRequest, CreateLoraDeviceRequest, CreateProductResponse, DeleteLoraDeviceResponse, CreateTaskRequest, CreateTopicPolicyResponse, DescribeMultiDevicesResponse, CreateDeviceResponse, DeleteLoraDeviceRequest, CreateDeviceRequest, DescribeProductTaskRequest, CreateProductRequest, DisableTopicRuleResponse, DescribeProductTaskResponse, DescribeDeviceResponse, PublishBroadcastMessageRequest, PublishMessageRequest, UpdateDeviceAvailableStateResponse, CancelTaskRequest, UpdateDeviceAvailableStateRequest, DeleteProductResponse, PublishToDeviceRequest, DeleteTopicRuleResponse, PublishBroadcastMessageResponse, DescribeDeviceRequest, CreateMultiDevicesTaskResponse, CreateTopicPolicyRequest, DescribeLoraDeviceResponse, PublishRRPCMessageResponse, CancelTaskResponse, CreateLoraDeviceResponse, DeleteTopicRuleRequest, ResetDeviceStateRequest, CreateMultiDeviceRequest, PublishToDeviceResponse, DescribeDeviceShadowRequest, UnbindDevicesResponse, CreateTaskFileUrlResponse, DescribeMultiDevicesRequest, CreateTaskFileUrlRequest, UpdateDeviceShadowResponse, DescribeTaskResponse, CreateTaskResponse, DescribeMultiDevTaskResponse, DescribeProductTasksRequest, DescribeLoraDeviceRequest, DescribeTaskRequest, PublishMessageResponse, BindDevicesResponse, DescribeDevicesRequest, DescribeDeviceClientKeyResponse, DisableTopicRuleRequest, ResetDeviceStateResponse, CreateTopicRuleResponse, CreateTopicRuleRequest, PublishAsDeviceRequest, DeleteDeviceResponse, DescribeProductTasksResponse, PublishAsDeviceResponse, EnableTopicRuleRequest } from "./iotcloud_models";
/**
 * iotcloud client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
     * @public
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 本接口（ReplaceTopicRule）用于修改替换规则
     * @public
     */
    ReplaceTopicRule(req: ReplaceTopicRuleRequest, cb?: (error: string, rep: ReplaceTopicRuleResponse) => void): Promise<ReplaceTopicRuleResponse>;
    /**
     * 发布RRPC消息
     * @public
     */
    PublishRRPCMessage(req: PublishRRPCMessageRequest, cb?: (error: string, rep: PublishRRPCMessageResponse) => void): Promise<PublishRRPCMessageResponse>;
    /**
     * 删除lora类型的设备
     * @public
     */
    DeleteLoraDevice(req: DeleteLoraDeviceRequest, cb?: (error: string, rep: DeleteLoraDeviceResponse) => void): Promise<DeleteLoraDeviceResponse>;
    /**
     * 服务器端下发消息给lora类型的设备
     * @public
     */
    PublishToDevice(req: PublishToDeviceRequest, cb?: (error: string, rep: PublishToDeviceResponse) => void): Promise<PublishToDeviceResponse>;
    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
     * @public
     */
    DescribeDeviceShadow(req: DescribeDeviceShadowRequest, cb?: (error: string, rep: DescribeDeviceShadowResponse) => void): Promise<DescribeDeviceShadowResponse>;
    /**
     * 本接口（DescribeDevice）用于查看设备信息
     * @public
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     * @public
     */
    CreateMultiDevice(req: CreateMultiDeviceRequest, cb?: (error: string, rep: CreateMultiDeviceResponse) => void): Promise<CreateMultiDeviceResponse>;
    /**
     * 本接口（CreateTopicRule）用于创建一个规则
     * @public
     */
    CreateTopicRule(req: CreateTopicRuleRequest, cb?: (error: string, rep: CreateTopicRuleResponse) => void): Promise<CreateTopicRuleResponse>;
    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。
     * @public
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     * @public
     */
    UpdateDeviceShadow(req: UpdateDeviceShadowRequest, cb?: (error: string, rep: UpdateDeviceShadowResponse) => void): Promise<UpdateDeviceShadowResponse>;
    /**
     * 本接口（CreateTopicPolicy）用于创建一个Topic
     * @public
     */
    CreateTopicPolicy(req: CreateTopicPolicyRequest, cb?: (error: string, rep: CreateTopicPolicyResponse) => void): Promise<CreateTopicPolicyResponse>;
    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     * @public
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 获取证书认证类型设备的私钥，刚生成或者重置设备后仅可调用一次
     * @public
     */
    DescribeDeviceClientKey(req: DescribeDeviceClientKeyRequest, cb?: (error: string, rep: DescribeDeviceClientKeyResponse) => void): Promise<DescribeDeviceClientKeyResponse>;
    /**
     * 本接口（DescribeProducts）用于列出产品列表。
     * @public
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 本接口（CreateMultiDevicesTask）用于创建产品级别的批量创建设备任务
     * @public
     */
    CreateMultiDevicesTask(req: CreateMultiDevicesTaskRequest, cb?: (error: string, rep: CreateMultiDevicesTaskResponse) => void): Promise<CreateMultiDevicesTaskResponse>;
    /**
     * 获取lora类型设备的详细信息
     * @public
     */
    DescribeLoraDevice(req: DescribeLoraDeviceRequest, cb?: (error: string, rep: DescribeLoraDeviceResponse) => void): Promise<DescribeLoraDeviceResponse>;
    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
     * @public
     */
    DescribeTask(req: DescribeTaskRequest, cb?: (error: string, rep: DescribeTaskResponse) => void): Promise<DescribeTaskResponse>;
    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     * @public
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     * @public
     */
    CreateDevice(req: CreateDeviceRequest, cb?: (error: string, rep: CreateDeviceResponse) => void): Promise<CreateDeviceResponse>;
    /**
     * 本接口（PublishMessage）用于向某个主题发消息。
     * @public
     */
    PublishMessage(req: PublishMessageRequest, cb?: (error: string, rep: PublishMessageResponse) => void): Promise<PublishMessageResponse>;
    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品
     * @public
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 本接口（CreateTaskFileUrl）用于获取产品级任务文件上传链接
     * @public
     */
    CreateTaskFileUrl(req: CreateTaskFileUrlRequest, cb?: (error: string, rep: CreateTaskFileUrlResponse) => void): Promise<CreateTaskFileUrlResponse>;
    /**
     * 重置设备的连接状态
     * @public
     */
    ResetDeviceState(req: ResetDeviceStateRequest, cb?: (error: string, rep: ResetDeviceStateResponse) => void): Promise<ResetDeviceStateResponse>;
    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     * @public
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     * @public
     */
    DescribeMultiDevices(req: DescribeMultiDevicesRequest, cb?: (error: string, rep: DescribeMultiDevicesResponse) => void): Promise<DescribeMultiDevicesResponse>;
    /**
     * 启用或者禁用设备
     * @public
     */
    UpdateDeviceAvailableState(req: UpdateDeviceAvailableStateRequest, cb?: (error: string, rep: UpdateDeviceAvailableStateResponse) => void): Promise<UpdateDeviceAvailableStateResponse>;
    /**
     * 模拟lora类型的设备端向服务器端发送消息
     * @public
     */
    PublishAsDevice(req: PublishAsDeviceRequest, cb?: (error: string, rep: PublishAsDeviceResponse) => void): Promise<PublishAsDeviceResponse>;
    /**
     * 创建lora类型的设备
     * @public
     */
    CreateLoraDevice(req: CreateLoraDeviceRequest, cb?: (error: string, rep: CreateLoraDeviceResponse) => void): Promise<CreateLoraDeviceResponse>;
    /**
     * 本接口（BindDevices）用于网关设备批量绑定子设备
     * @public
     */
    BindDevices(req: BindDevicesRequest, cb?: (error: string, rep: BindDevicesResponse) => void): Promise<BindDevicesResponse>;
    /**
     * 本接口（UpdateTopicPolicy）用于更新Topic信息
     * @public
     */
    UpdateTopicPolicy(req: UpdateTopicPolicyRequest, cb?: (error: string, rep: UpdateTopicPolicyResponse) => void): Promise<UpdateTopicPolicyResponse>;
    /**
     * 本接口（UnbindDevices）用于网关设备批量解绑子设备
     * @public
     */
    UnbindDevices(req: UnbindDevicesRequest, cb?: (error: string, rep: UnbindDevicesResponse) => void): Promise<UnbindDevicesResponse>;
    /**
     * 发布广播消息
     * @public
     */
    PublishBroadcastMessage(req: PublishBroadcastMessageRequest, cb?: (error: string, rep: PublishBroadcastMessageResponse) => void): Promise<PublishBroadcastMessageResponse>;
    /**
     * 本接口（DescribeProductTasks）用于查看产品级别的任务列表
     * @public
     */
    DescribeProductTasks(req: DescribeProductTasksRequest, cb?: (error: string, rep: DescribeProductTasksResponse) => void): Promise<DescribeProductTasksResponse>;
    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     * @public
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 本接口（DisableTopicRule）用于禁用规则
     * @public
     */
    DisableTopicRule(req: DisableTopicRuleRequest, cb?: (error: string, rep: DisableTopicRuleResponse) => void): Promise<DisableTopicRuleResponse>;
    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     * @public
     */
    DescribeMultiDevTask(req: DescribeMultiDevTaskRequest, cb?: (error: string, rep: DescribeMultiDevTaskResponse) => void): Promise<DescribeMultiDevTaskResponse>;
    /**
     * 本接口（EnableTopicRule）用于启用规则
     * @public
     */
    EnableTopicRule(req: EnableTopicRuleRequest, cb?: (error: string, rep: EnableTopicRuleResponse) => void): Promise<EnableTopicRuleResponse>;
    /**
     * 本接口（DescribeProductTask）用于查看产品级别的任务信息
     * @public
     */
    DescribeProductTask(req: DescribeProductTaskRequest, cb?: (error: string, rep: DescribeProductTaskResponse) => void): Promise<DescribeProductTaskResponse>;
    /**
     * 本接口（DeleteTopicRule）用于删除规则
     * @public
     */
    DeleteTopicRule(req: DeleteTopicRuleRequest, cb?: (error: string, rep: DeleteTopicRuleResponse) => void): Promise<DeleteTopicRuleResponse>;
}
