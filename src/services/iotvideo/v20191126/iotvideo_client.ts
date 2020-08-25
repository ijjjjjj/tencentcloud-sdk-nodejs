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
   UploadOtaVersionResponse,
   CreateGencodeResponse,
   DescribeLogsRequest,
   CreateIotDataTypeRequest,
   DescribePubVersionsRequest,
   DescribeIotModelResponse,
   DisableDeviceResponse,
   DescribeRunLogRequest,
   DescribeProductsRequest,
   DeleteTraceIdsRequest,
   IotModelData,
   DescribeDevicesResponse,
   ModifyProductResponse,
   ModifyProductRequest,
   DisableDeviceStreamRequest,
   CreateIotModelRequest,
   DescribeTraceStatusResponse,
   CreateUploadPathRequest,
   CreateDevTokenRequest,
   DeleteIotDataTypeRequest,
   DescribeMessageQueueRequest,
   DeleteAppUsrResponse,
   DescribeRegistrationStatusResponse,
   DescribeProductRequest,
   DescribeProductsResponse,
   CreateAppUsrRequest,
   DeviceCertificate,
   UpgradeDeviceRequest,
   LogData,
   DescribeModelDataRetResponse,
   RunIotModelResponse,
   RunIotModelRequest,
   OtaPubHistory,
   DeleteProductRequest,
   DescribeBindUsrResponse,
   DeviceData,
   SetMessageQueueRequest,
   BindUsrInfo,
   DeleteOtaVersionRequest,
   DescribeIotDataTypeResponse,
   ProductData,
   CreateBindingRequest,
   DeleteDeviceRequest,
   TraceStatus,
   CreateDevTokenResponse,
   ModifyDevicePropertyRequest,
   RunDeviceStreamRequest,
   RunDeviceResponse,
   DeleteIotDataTypeResponse,
   DescribeTraceStatusRequest,
   CreateUsrTokenResponse,
   DevTokenInfo,
   CreateTraceIdsRequest,
   DeleteMessageQueueResponse,
   DescribeOtaVersionsRequest,
   DescribeTraceIdsResponse,
   CreateProductResponse,
   DescribeRegistrationStatusRequest,
   CreateStorageRequest,
   UpgradeDeviceResponse,
   DisableOtaVersionResponse,
   DescribeBindDevResponse,
   CreateProductRequest,
   RunTestOtaVersionResponse,
   RunTestOtaVersionRequest,
   DescribeDeviceResponse,
   SetMessageQueueResponse,
   DeleteOtaVersionResponse,
   UploadOtaVersionRequest,
   DescribeIotModelsRequest,
   DescribeModelDataRetRequest,
   CreateTraceIdsResponse,
   DeleteBindingRequest,
   DescribeOtaVersionsResponse,
   DeleteProductResponse,
   RunOtaVersionRequest,
   CreateDevicesResponse,
   DeviceModelData,
   DescribeIotDataTypeRequest,
   SendOnlineMsgRequest,
   DescribeDeviceRequest,
   DescribeRunLogResponse,
   DescribeIotModelRequest,
   DescribeTraceIdsRequest,
   CreateAppUsrResponse,
   DeleteTraceIdsResponse,
   DeleteMessageQueueRequest,
   CreateUsrTokenRequest,
   RunDeviceRequest,
   DescribeDeviceModelResponse,
   ProductBase,
   CreateGencodeRequest,
   DescribePubVersionsResponse,
   ModifyDeviceActionRequest,
   CreateIotModelResponse,
   BindDevInfo,
   DescribeBindDevRequest,
   MsgQueueData,
   RegisteredStatus,
   RunDeviceStreamResponse,
   RunOtaVersionResponse,
   DescribeDeviceModelRequest,
   DescribeLogsResponse,
   ModifyDeviceActionResponse,
   CreateBindingResponse,
   DevicesData,
   CreateDevicesRequest,
   DisableDeviceRequest,
   DisableOtaVersionRequest,
   DescribeProductResponse,
   DescribeBindUsrRequest,
   SendOnlineMsgResponse,
   DeleteAppUsrRequest,
   DescribeIotModelsResponse,
   DescribeMessageQueueResponse,
   DescribeDevicesRequest,
   CreateIotDataTypeResponse,
   ModifyDevicePropertyResponse,
   DeleteBindingResponse,
   CreateStorageResponse,
   DisableDeviceStreamResponse,
   DeleteDeviceResponse,
   CreateUploadPathResponse,
   VersionData,

} from "./iotvideo_models"

/**
 * iotvideo client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("iotvideo.tencentcloudapi.com", "2019-11-26", clientConfig);
    }
    
    /**
     * 本接口（DescribeOtaVersions）用于查询固件版本信息列表。
     * @public
     */
    async DescribeOtaVersions(req: DescribeOtaVersionsRequest, cb?: (error: string, rep: DescribeOtaVersionsResponse) => void): Promise<DescribeOtaVersionsResponse> {
        return await this.request("DescribeOtaVersions", req, cb);
    }

    /**
     * 本接口（DisableOtaVersion）用于禁用固件版本。
     * @public
     */
    async DisableOtaVersion(req: DisableOtaVersionRequest, cb?: (error: string, rep: DisableOtaVersionResponse) => void): Promise<DisableOtaVersionResponse> {
        return await this.request("DisableOtaVersion", req, cb);
    }

    /**
     * 本接口（CreateGencode）用于生成设备物模型源代码
     * @public
     */
    async CreateGencode(req: CreateGencodeRequest, cb?: (error: string, rep: CreateGencodeResponse) => void): Promise<CreateGencodeResponse> {
        return await this.request("CreateGencode", req, cb);
    }

    /**
     * 本接口（DescribeIotDataType）用于查询自定义的物模型数据类型。
     * @public
     */
    async DescribeIotDataType(req: DescribeIotDataTypeRequest, cb?: (error: string, rep: DescribeIotDataTypeResponse) => void): Promise<DescribeIotDataTypeResponse> {
        return await this.request("DescribeIotDataType", req, cb);
    }

    /**
     * 本接口（DisableDevice）用于禁用设备，可进行批量操作，每次操作最多100台设备。
     * @public
     */
    async DisableDevice(req: DisableDeviceRequest, cb?: (error: string, rep: DisableDeviceResponse) => void): Promise<DisableDeviceResponse> {
        return await this.request("DisableDevice", req, cb);
    }

    /**
     * 本接口（DeleteTraceIds）用于将设备从日志跟踪白名单中删除，该接口可批量操作，最多支持同时操作100台设备。
     * @public
     */
    async DeleteTraceIds(req: DeleteTraceIdsRequest, cb?: (error: string, rep: DeleteTraceIdsResponse) => void): Promise<DeleteTraceIdsResponse> {
        return await this.request("DeleteTraceIds", req, cb);
    }

    /**
     * 本接口（RunOtaVersion）用于固件版本正式发布。
     * @public
     */
    async RunOtaVersion(req: RunOtaVersionRequest, cb?: (error: string, rep: RunOtaVersionResponse) => void): Promise<RunOtaVersionResponse> {
        return await this.request("RunOtaVersion", req, cb);
    }

    /**
     * 本接口（DescribeDevice）获取设备信息。
     * @public
     */
    async DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse> {
        return await this.request("DescribeDevice", req, cb);
    }

    /**
     * 本接口（RunTestOtaVersion）用于固件版本测试发布。
     * @public
     */
    async RunTestOtaVersion(req: RunTestOtaVersionRequest, cb?: (error: string, rep: RunTestOtaVersionResponse) => void): Promise<RunTestOtaVersionResponse> {
        return await this.request("RunTestOtaVersion", req, cb);
    }

    /**
     * 本接口（DescribeProduct）用于获取单个产品的详细信息。
     * @public
     */
    async DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse> {
        return await this.request("DescribeProduct", req, cb);
    }

    /**
     * 本接口（SendOnlineMsg）用于向设备发送在线消息。
注意：
若设备当前不在线,会直接返回错误;
若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒.waitresp非0情况下,会导致本接口阻塞3秒。
     * @public
     */
    async SendOnlineMsg(req: SendOnlineMsgRequest, cb?: (error: string, rep: SendOnlineMsgResponse) => void): Promise<SendOnlineMsgResponse> {
        return await this.request("SendOnlineMsg", req, cb);
    }

    /**
     * 本接口（RunIotModel）用于对定义的物模型进行发布。
     * @public
     */
    async RunIotModel(req: RunIotModelRequest, cb?: (error: string, rep: RunIotModelResponse) => void): Promise<RunIotModelResponse> {
        return await this.request("RunIotModel", req, cb);
    }

    /**
     * 本接口（ModifyDeviceAction）用于修改设备物模型的行为（Action）。

可对ctlVal数据属性进行写入,如:Action.takePhoto.ctlVal,设备在线且成功发送到设备才返回,物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
注意:
  1.若设备当前不在线,会直接返回错误
  2.若设备网络出现异常时,消息发送可能超时,超时等待最长时间为3秒
  3.value的内容必须与实际物模型的定义一致
     * @public
     */
    async ModifyDeviceAction(req: ModifyDeviceActionRequest, cb?: (error: string, rep: ModifyDeviceActionResponse) => void): Promise<ModifyDeviceActionResponse> {
        return await this.request("ModifyDeviceAction", req, cb);
    }

    /**
     * 本接口（CreateIotDataType）用于创建自定义物模型数据类型。
     * @public
     */
    async CreateIotDataType(req: CreateIotDataTypeRequest, cb?: (error: string, rep: CreateIotDataTypeResponse) => void): Promise<CreateIotDataTypeResponse> {
        return await this.request("CreateIotDataType", req, cb);
    }

    /**
     * 本接口（CreateDevices）用于批量创建新的物联网视频通信设备。
注意：腾讯云不会对设备私钥进行保存，请自行保管好您的设备私钥。
     * @public
     */
    async CreateDevices(req: CreateDevicesRequest, cb?: (error: string, rep: CreateDevicesResponse) => void): Promise<CreateDevicesResponse> {
        return await this.request("CreateDevices", req, cb);
    }

    /**
     * 本接口（CreateProduct）用于创建一个新的物联网智能视频产品。
     * @public
     */
    async CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse> {
        return await this.request("CreateProduct", req, cb);
    }

    /**
     * 本接口（CreateIotModel）用于定义的物模型提交。
该接口实现了物模型草稿箱的功能，保存用户最后一次编辑的物模型数据。
     * @public
     */
    async CreateIotModel(req: CreateIotModelRequest, cb?: (error: string, rep: CreateIotModelResponse) => void): Promise<CreateIotModelResponse> {
        return await this.request("CreateIotModel", req, cb);
    }

    /**
     * 本接口（DeleteIotDataType）用于删除自定义物模型数据类型。
     * @public
     */
    async DeleteIotDataType(req: DeleteIotDataTypeRequest, cb?: (error: string, rep: DeleteIotDataTypeResponse) => void): Promise<DeleteIotDataTypeResponse> {
        return await this.request("DeleteIotDataType", req, cb);
    }

    /**
     * 本接口（DescribeMessageQueue）用于查询物联网智能视频产品转发消息配置。
     * @public
     */
    async DescribeMessageQueue(req: DescribeMessageQueueRequest, cb?: (error: string, rep: DescribeMessageQueueResponse) => void): Promise<DescribeMessageQueueResponse> {
        return await this.request("DescribeMessageQueue", req, cb);
    }

    /**
     * 本接口（DescribeIotModel）用于获取物模型定义详情。
     * @public
     */
    async DescribeIotModel(req: DescribeIotModelRequest, cb?: (error: string, rep: DescribeIotModelResponse) => void): Promise<DescribeIotModelResponse> {
        return await this.request("DescribeIotModel", req, cb);
    }

    /**
     * 本接口（DescribeProducts）用于列出用户账号下的物联网智能视频产品列表。
     * @public
     */
    async DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse> {
        return await this.request("DescribeProducts", req, cb);
    }

    /**
     * 本接口（CreateTraceIds）用于将设备加到日志跟踪白名单。
     * @public
     */
    async CreateTraceIds(req: CreateTraceIdsRequest, cb?: (error: string, rep: CreateTraceIdsResponse) => void): Promise<CreateTraceIdsResponse> {
        return await this.request("CreateTraceIds", req, cb);
    }

    /**
     * 本接口（DescribeBindUsr）用于查询设备被分享的所有用户列表。
     * @public
     */
    async DescribeBindUsr(req: DescribeBindUsrRequest, cb?: (error: string, rep: DescribeBindUsrResponse) => void): Promise<DescribeBindUsrResponse> {
        return await this.request("DescribeBindUsr", req, cb);
    }

    /**
     * 本接口（CreateAppUsr）用于接收由厂商云发送过来的注册请求,建立厂商云终端用户与IoT Video终端用户的映射关系。
     * @public
     */
    async CreateAppUsr(req: CreateAppUsrRequest, cb?: (error: string, rep: CreateAppUsrResponse) => void): Promise<CreateAppUsrResponse> {
        return await this.request("CreateAppUsr", req, cb);
    }

    /**
     * 本接口（CreateBinding）用于终端用户和设备进行绑定，具体的应用场景如下：
    终端用户与设备具有“强关联”关系。用户与设备绑定之后，用户终端即具备了该设备的访问权限,访问或操作设备时，无需获取设备访问Token。
     * @public
     */
    async CreateBinding(req: CreateBindingRequest, cb?: (error: string, rep: CreateBindingResponse) => void): Promise<CreateBindingResponse> {
        return await this.request("CreateBinding", req, cb);
    }

    /**
     * 本接口（CreateDevToken）用于以下场景：
终端用户与设备没有强绑定关联关系;
允许终端用户短时或一次性临时访问设备;
当终端用户与设备有强绑定关系时，可以不用调用此接口
     * @public
     */
    async CreateDevToken(req: CreateDevTokenRequest, cb?: (error: string, rep: CreateDevTokenResponse) => void): Promise<CreateDevTokenResponse> {
        return await this.request("CreateDevToken", req, cb);
    }

    /**
     * 本接口（DeleteOtaVersion）用于删除固件版本信息。
     * @public
     */
    async DeleteOtaVersion(req: DeleteOtaVersionRequest, cb?: (error: string, rep: DeleteOtaVersionResponse) => void): Promise<DeleteOtaVersionResponse> {
        return await this.request("DeleteOtaVersion", req, cb);
    }

    /**
     * 本接口（DeleteAppUsr）用于删除终端用户。
     * @public
     */
    async DeleteAppUsr(req: DeleteAppUsrRequest, cb?: (error: string, rep: DeleteAppUsrResponse) => void): Promise<DeleteAppUsrResponse> {
        return await this.request("DeleteAppUsr", req, cb);
    }

    /**
     * 本接口（ModifyProduct）用于编辑物联网智能视频产品的相关信息。
     * @public
     */
    async ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse> {
        return await this.request("ModifyProduct", req, cb);
    }

    /**
     * 本接口（DescribeLogs）用于查询设备日志列表。
设备日志最长保留时长为15天,超期自动清除。
     * @public
     */
    async DescribeLogs(req: DescribeLogsRequest, cb?: (error: string, rep: DescribeLogsResponse) => void): Promise<DescribeLogsResponse> {
        return await this.request("DescribeLogs", req, cb);
    }

    /**
     * 本接口（DeleteDevice）用于删除设备，可进行批量操作，每次操作最多100台设备。
     * @public
     */
    async DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse> {
        return await this.request("DeleteDevice", req, cb);
    }

    /**
     * 本接口（DescribeIotModels）用于列出物模型历史版本列表。
     * @public
     */
    async DescribeIotModels(req: DescribeIotModelsRequest, cb?: (error: string, rep: DescribeIotModelsResponse) => void): Promise<DescribeIotModelsResponse> {
        return await this.request("DescribeIotModels", req, cb);
    }

    /**
     * 本接口（DeleteProduct）用于删除一个物联网智能视频产品。
     * @public
     */
    async DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse> {
        return await this.request("DeleteProduct", req, cb);
    }

    /**
     * 本接口（DescribeTraceStatus）用于查询指定设备是否在白名单中。
     * @public
     */
    async DescribeTraceStatus(req: DescribeTraceStatusRequest, cb?: (error: string, rep: DescribeTraceStatusResponse) => void): Promise<DescribeTraceStatusResponse> {
        return await this.request("DescribeTraceStatus", req, cb);
    }

    /**
     * 本接口（DescribeRegistrationStatus）用于查询终端用户的注册状态。
     * @public
     */
    async DescribeRegistrationStatus(req: DescribeRegistrationStatusRequest, cb?: (error: string, rep: DescribeRegistrationStatusResponse) => void): Promise<DescribeRegistrationStatusResponse> {
        return await this.request("DescribeRegistrationStatus", req, cb);
    }

    /**
     * 本接口（DescribeRunLog）用于获取设备运行日志。
     * @public
     */
    async DescribeRunLog(req: DescribeRunLogRequest, cb?: (error: string, rep: DescribeRunLogResponse) => void): Promise<DescribeRunLogResponse> {
        return await this.request("DescribeRunLog", req, cb);
    }

    /**
     * 本接口（SetMessageQueue）用于配置物联网智能视频产品的转发消息队列。
     * @public
     */
    async SetMessageQueue(req: SetMessageQueueRequest, cb?: (error: string, rep: SetMessageQueueResponse) => void): Promise<SetMessageQueueResponse> {
        return await this.request("SetMessageQueue", req, cb);
    }

    /**
     * 本接口（DisableDeviceStream）用于停止设备推流，可进行批量操作，每次操作最多100台设备。
     * @public
     */
    async DisableDeviceStream(req: DisableDeviceStreamRequest, cb?: (error: string, rep: DisableDeviceStreamResponse) => void): Promise<DisableDeviceStreamResponse> {
        return await this.request("DisableDeviceStream", req, cb);
    }

    /**
     * 本接口（CreateUploadPath）用于获取固件上传路径。
     * @public
     */
    async CreateUploadPath(req: CreateUploadPathRequest, cb?: (error: string, rep: CreateUploadPathResponse) => void): Promise<CreateUploadPathResponse> {
        return await this.request("CreateUploadPath", req, cb);
    }

    /**
     * 本接口（DescribeModelDataRet）用于根据TaskId获取对设备物模型操作最终响应的结果。
     * @public
     */
    async DescribeModelDataRet(req: DescribeModelDataRetRequest, cb?: (error: string, rep: DescribeModelDataRetResponse) => void): Promise<DescribeModelDataRetResponse> {
        return await this.request("DescribeModelDataRet", req, cb);
    }

    /**
     * 本接口（DescribePubVersions）用于获取某一产品发布过的全部固件版本。
     * @public
     */
    async DescribePubVersions(req: DescribePubVersionsRequest, cb?: (error: string, rep: DescribePubVersionsResponse) => void): Promise<DescribePubVersionsResponse> {
        return await this.request("DescribePubVersions", req, cb);
    }

    /**
     * 本接口（RunDeviceStream）用于开启设备推流，可进行批量操作，每次操作最多100台设备。
     * @public
     */
    async RunDeviceStream(req: RunDeviceStreamRequest, cb?: (error: string, rep: RunDeviceStreamResponse) => void): Promise<RunDeviceStreamResponse> {
        return await this.request("RunDeviceStream", req, cb);
    }

    /**
     * 本接口（DescribeDevices）用于获取设备信息列表。
     * @public
     */
    async DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse> {
        return await this.request("DescribeDevices", req, cb);
    }

    /**
     * 本接口（DescribeBindDev）用于查询终端用户绑定的设备列表。
     * @public
     */
    async DescribeBindDev(req: DescribeBindDevRequest, cb?: (error: string, rep: DescribeBindDevResponse) => void): Promise<DescribeBindDevResponse> {
        return await this.request("DescribeBindDev", req, cb);
    }

    /**
     * 本接口（DescribeDeviceModel）用于获取设备物模型。
     * @public
     */
    async DescribeDeviceModel(req: DescribeDeviceModelRequest, cb?: (error: string, rep: DescribeDeviceModelResponse) => void): Promise<DescribeDeviceModelResponse> {
        return await this.request("DescribeDeviceModel", req, cb);
    }

    /**
     * 本接口（DeleteBinding）用于终端用户和设备进行解绑定。
     * @public
     */
    async DeleteBinding(req: DeleteBindingRequest, cb?: (error: string, rep: DeleteBindingResponse) => void): Promise<DeleteBindingResponse> {
        return await this.request("DeleteBinding", req, cb);
    }

    /**
     * 本接口（CreateStorage）用于购买云存套餐。
     * @public
     */
    async CreateStorage(req: CreateStorageRequest, cb?: (error: string, rep: CreateStorageResponse) => void): Promise<CreateStorageResponse> {
        return await this.request("CreateStorage", req, cb);
    }

    /**
     * 本接口（DescribeTraceIds）用于查询设备日志跟踪白名单。
     * @public
     */
    async DescribeTraceIds(req: DescribeTraceIdsRequest, cb?: (error: string, rep: DescribeTraceIdsResponse) => void): Promise<DescribeTraceIdsResponse> {
        return await this.request("DescribeTraceIds", req, cb);
    }

    /**
     * 本接口（DeleteMessageQueue）用于删除物联网智能视频产品的转发消息配置信息。
     * @public
     */
    async DeleteMessageQueue(req: DeleteMessageQueueRequest, cb?: (error: string, rep: DeleteMessageQueueResponse) => void): Promise<DeleteMessageQueueResponse> {
        return await this.request("DeleteMessageQueue", req, cb);
    }

    /**
     * 本接口（ModifyDeviceProperty）用于修改设备物模型的属性（ProWritable）。
可对setVal数据属性进行写入,如:
ProWritable.Pos.setVal
对于嵌套类型的可写属性，可以仅对其部分数据内容进行写入，如:
ProWritable.Pos.setVal.x;
可写属性云端写入成功即返回;云端向设备端发布属性变更参数;若当前设备不在线,在设备下次上线时会自动更新这些属性参数;
物模型写入数据时,不需要传入时标信息,平台以当前时标作为数据的时标更新物模型中的时标信息。
     * @public
     */
    async ModifyDeviceProperty(req: ModifyDevicePropertyRequest, cb?: (error: string, rep: ModifyDevicePropertyResponse) => void): Promise<ModifyDevicePropertyResponse> {
        return await this.request("ModifyDeviceProperty", req, cb);
    }

    /**
     * 本接口（RunDevice）用于启用设备，可进行批量操作，每次操作最多100台设备。
     * @public
     */
    async RunDevice(req: RunDeviceRequest, cb?: (error: string, rep: RunDeviceResponse) => void): Promise<RunDeviceResponse> {
        return await this.request("RunDevice", req, cb);
    }

    /**
     * 本接口（UploadOtaVersion）接收上传到控制台的固件版本信息。
     * @public
     */
    async UploadOtaVersion(req: UploadOtaVersionRequest, cb?: (error: string, rep: UploadOtaVersionResponse) => void): Promise<UploadOtaVersionResponse> {
        return await this.request("UploadOtaVersion", req, cb);
    }

    /**
     * 本接口（UpgradeDevice）用于对设备进行固件升级。
该接口向指定的设备下发固件更新指令,可将固件升级到任意版本(可实现固件降级)。
警告:使能UpgradeNow参数存在一定的风险性！建议仅在debug场景下使用!
     * @public
     */
    async UpgradeDevice(req: UpgradeDeviceRequest, cb?: (error: string, rep: UpgradeDeviceResponse) => void): Promise<UpgradeDeviceResponse> {
        return await this.request("UpgradeDevice", req, cb);
    }

    /**
     * 本接口（CreateUsrToken）用于终端用户获取IoT Video平台的accessToken，初始化SDK,连接到IoT Video接入服务器。
     * @public
     */
    async CreateUsrToken(req: CreateUsrTokenRequest, cb?: (error: string, rep: CreateUsrTokenResponse) => void): Promise<CreateUsrTokenResponse> {
        return await this.request("CreateUsrToken", req, cb);
    }


}
