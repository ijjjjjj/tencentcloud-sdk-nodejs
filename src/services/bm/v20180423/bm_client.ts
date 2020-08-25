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
   DescribeUserCmdTasksResponse,
   RunUserCmdRequest,
   CreatePsaRegulationRequest,
   DescribeDeviceInventoryResponse,
   DescribeOsInfoResponse,
   DescribeOsInfoRequest,
   DescribeTaskOperationLogResponse,
   CreateCustomImageRequest,
   DescribeCustomImagesRequest,
   DescribeUserCmdTaskInfoResponse,
   DescribeDevicesResponse,
   ModifyLanIpRequest,
   DeviceClass,
   DescribeRepairTaskConstantRequest,
   DeletePsaRegulationRequest,
   DescribeCustomImageProcessRequest,
   CpuInfo,
   CustomImage,
   ModifyDeviceAutoRenewFlagRequest,
   StartDevicesResponse,
   BindPsaTagRequest,
   DescribeRegionsResponse,
   DevicePartition,
   OfflineDevicesResponse,
   ModifyPsaRegulationRequest,
   RecoverDevicesRequest,
   DescribeDeviceClassPartitionRequest,
   ZoneInfo,
   CreateSpotDeviceResponse,
   BuyDevicesRequest,
   DescribeHardwareSpecificationRequest,
   Tag,
   CreateCustomImageResponse,
   HostedDeviceOutBandInfo,
   ReturnDevicesRequest,
   ModifyDeviceAliasesResponse,
   PsaRegulation,
   DescribeDevicePartitionResponse,
   DescribeHostedDeviceOutBandInfoRequest,
   RebootDevicesResponse,
   ResetDevicePasswordRequest,
   SubtaskStatus,
   DescribeDeviceInventoryRequest,
   DescribeCustomImagesResponse,
   DeviceAlias,
   DeleteCustomImagesRequest,
   PartitionInfo,
   DescribeDevicePositionRequest,
   UserCmdTaskInfo,
   ShutdownDevicesResponse,
   TaskType,
   DeleteUserCmdsRequest,
   DeviceDiskSizeInfo,
   AttachCamRoleRequest,
   DescribeDeviceClassResponse,
   DescribeDeviceHardwareInfoResponse,
   ModifyUserCmdRequest,
   DescribeDevicePriceInfoResponse,
   ReloadDeviceOsResponse,
   RunUserCmdResponse,
   ReloadDeviceOsRequest,
   DescribeUserCmdsRequest,
   DescribeTaskInfoRequest,
   RepairTaskControlResponse,
   DescribeRegionsRequest,
   DescribePsaRegulationsRequest,
   UnbindPsaTagResponse,
   DescribeDevicePriceInfoRequest,
   DescribeDevicePartitionRequest,
   TaskInfo,
   ModifyPsaRegulationResponse,
   UserCmdTask,
   TaskOperationLog,
   FailedTaskInfo,
   DescribeDevicePositionResponse,
   DeleteUserCmdsResponse,
   ModifyDeviceAliasesRequest,
   ModifyPayModePre2PostResponse,
   SuccessTaskInfo,
   SetOutBandVpnAuthPasswordRequest,
   OfflineDevicesRequest,
   DeviceHardwareInfo,
   DiskInfo,
   SetOutBandVpnAuthPasswordResponse,
   DescribeTaskInfoResponse,
   DescribeUserCmdTaskInfoRequest,
   CreateUserCmdResponse,
   ModifyUserCmdResponse,
   ModifyPayModePre2PostRequest,
   DeviceOperationLog,
   DescribeRepairTaskConstantResponse,
   BuyDevicesResponse,
   ModifyLanIpResponse,
   DescribePsaRegulationsResponse,
   StartDevicesRequest,
   DescribeUserCmdsResponse,
   ModifyDeviceAutoRenewFlagResponse,
   DescribeOperationResultResponse,
   DescribeDeviceClassRequest,
   ModifyCustomImageAttributeRequest,
   DeletePsaRegulationResponse,
   DeviceClassPartitionInfo,
   DescribeTaskOperationLogRequest,
   DescribeDeviceOperationLogRequest,
   DescribeOperationResultRequest,
   AttachCamRoleResponse,
   RecoverDevicesResponse,
   DetachCamRoleResponse,
   ShutdownDevicesRequest,
   UnbindPsaTagRequest,
   ModifyCustomImageAttributeResponse,
   RegionInfo,
   UserCmd,
   CustomImageProcess,
   CreateSpotDeviceRequest,
   OsInfo,
   CreateUserCmdRequest,
   ReturnDevicesResponse,
   BindPsaTagResponse,
   DescribeHostedDeviceOutBandInfoResponse,
   DevicePriceInfo,
   RebootDevicesRequest,
   DeleteCustomImagesResponse,
   DescribeDevicesRequest,
   DescribeHardwareSpecificationResponse,
   CreatePsaRegulationResponse,
   DescribeCustomImageProcessResponse,
   DescribeDeviceHardwareInfoRequest,
   DescribeDeviceOperationLogResponse,
   RepairTaskControlRequest,
   DevicePositionInfo,
   DeviceInfo,
   ResetDevicePasswordResponse,
   DescribeUserCmdTasksRequest,
   DetachCamRoleRequest,
   DescribeDeviceClassPartitionResponse,

} from "./bm_models"

/**
 * bm client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("bm.tencentcloudapi.com", "2018-04-23", clientConfig);
    }
    
    /**
     * 获取自定义脚本信息列表
     * @public
     */
    async DescribeUserCmds(req: DescribeUserCmdsRequest, cb?: (error: string, rep: DescribeUserCmdsResponse) => void): Promise<DescribeUserCmdsResponse> {
        return await this.request("DescribeUserCmds", req, cb);
    }

    /**
     * 重启机器
     * @public
     */
    async RebootDevices(req: RebootDevicesRequest, cb?: (error: string, rep: RebootDevicesResponse) => void): Promise<RebootDevicesResponse> {
        return await this.request("RebootDevices", req, cb);
    }

    /**
     * 允许修改规则信息及关联故障类型
     * @public
     */
    async ModifyPsaRegulation(req: ModifyPsaRegulationRequest, cb?: (error: string, rep: ModifyPsaRegulationResponse) => void): Promise<ModifyPsaRegulationResponse> {
        return await this.request("ModifyPsaRegulation", req, cb);
    }

    /**
     * 获取预授权规则列表
     * @public
     */
    async DescribePsaRegulations(req: DescribePsaRegulationsRequest, cb?: (error: string, rep: DescribePsaRegulationsResponse) => void): Promise<DescribePsaRegulationsResponse> {
        return await this.request("DescribePsaRegulations", req, cb);
    }

    /**
     * 修改物理机服务器自动续费标志
     * @public
     */
    async ModifyDeviceAutoRenewFlag(req: ModifyDeviceAutoRenewFlagRequest, cb?: (error: string, rep: ModifyDeviceAutoRenewFlagResponse) => void): Promise<ModifyDeviceAutoRenewFlagResponse> {
        return await this.request("ModifyDeviceAutoRenewFlag", req, cb);
    }

    /**
     * 销毁黑石物理机实例：可以销毁物理机列表中的竞价实例，或回收站列表中所有计费模式的实例
     * @public
     */
    async OfflineDevices(req: OfflineDevicesRequest, cb?: (error: string, rep: OfflineDevicesResponse) => void): Promise<OfflineDevicesResponse> {
        return await this.request("OfflineDevices", req, cb);
    }

    /**
     * 修改物理机内网IP（不重装系统）
     * @public
     */
    async ModifyLanIp(req: ModifyLanIpRequest, cb?: (error: string, rep: ModifyLanIpResponse) => void): Promise<ModifyLanIpResponse> {
        return await this.request("ModifyLanIp", req, cb);
    }

    /**
     * 运行自定义脚本
     * @public
     */
    async RunUserCmd(req: RunUserCmdRequest, cb?: (error: string, rep: RunUserCmdResponse) => void): Promise<RunUserCmdResponse> {
        return await this.request("RunUserCmd", req, cb);
    }

    /**
     * 查询自定义镜像制作进度
     * @public
     */
    async DescribeCustomImageProcess(req: DescribeCustomImageProcessRequest, cb?: (error: string, rep: DescribeCustomImageProcessResponse) => void): Promise<DescribeCustomImageProcessResponse> {
        return await this.request("DescribeCustomImageProcess", req, cb);
    }

    /**
     * 开启服务器
     * @public
     */
    async StartDevices(req: StartDevicesRequest, cb?: (error: string, rep: StartDevicesResponse) => void): Promise<StartDevicesResponse> {
        return await this.request("StartDevices", req, cb);
    }

    /**
     * 重装操作系统
     * @public
     */
    async ReloadDeviceOs(req: ReloadDeviceOsRequest, cb?: (error: string, rep: ReloadDeviceOsResponse) => void): Promise<ReloadDeviceOsResponse> {
        return await this.request("ReloadDeviceOs", req, cb);
    }

    /**
     * 查询设备硬件配置信息，如 CPU 型号，内存大小，磁盘大小和数量
     * @public
     */
    async DescribeDeviceHardwareInfo(req: DescribeDeviceHardwareInfoRequest, cb?: (error: string, rep: DescribeDeviceHardwareInfoResponse) => void): Promise<DescribeDeviceHardwareInfoResponse> {
        return await this.request("DescribeDeviceHardwareInfo", req, cb);
    }

    /**
     * 获取自定义脚本任务列表
     * @public
     */
    async DescribeUserCmdTasks(req: DescribeUserCmdTasksRequest, cb?: (error: string, rep: DescribeUserCmdTasksResponse) => void): Promise<DescribeUserCmdTasksResponse> {
        return await this.request("DescribeUserCmdTasks", req, cb);
    }

    /**
     * 创建预授权规则
     * @public
     */
    async CreatePsaRegulation(req: CreatePsaRegulationRequest, cb?: (error: string, rep: CreatePsaRegulationResponse) => void): Promise<CreatePsaRegulationResponse> {
        return await this.request("CreatePsaRegulation", req, cb);
    }

    /**
     * 获取获取设备类型
     * @public
     */
    async DescribeDeviceClass(req: DescribeDeviceClassRequest, cb?: (error: string, rep: DescribeDeviceClassResponse) => void): Promise<DescribeDeviceClassResponse> {
        return await this.request("DescribeDeviceClass", req, cb);
    }

    /**
     * 购买黑石物理机
     * @public
     */
    async BuyDevices(req: BuyDevicesRequest, cb?: (error: string, rep: BuyDevicesResponse) => void): Promise<BuyDevicesResponse> {
        return await this.request("BuyDevices", req, cb);
    }

    /**
     * 修改自定义脚本
     * @public
     */
    async ModifyUserCmd(req: ModifyUserCmdRequest, cb?: (error: string, rep: ModifyUserCmdResponse) => void): Promise<ModifyUserCmdResponse> {
        return await this.request("ModifyUserCmd", req, cb);
    }

    /**
     * 删除自定义脚本
     * @public
     */
    async DeleteUserCmds(req: DeleteUserCmdsRequest, cb?: (error: string, rep: DeleteUserCmdsResponse) => void): Promise<DeleteUserCmdsResponse> {
        return await this.request("DeleteUserCmds", req, cb);
    }

    /**
     * 查询托管设备带外信息
     * @public
     */
    async DescribeHostedDeviceOutBandInfo(req: DescribeHostedDeviceOutBandInfoRequest, cb?: (error: string, rep: DescribeHostedDeviceOutBandInfoResponse) => void): Promise<DescribeHostedDeviceOutBandInfoResponse> {
        return await this.request("DescribeHostedDeviceOutBandInfo", req, cb);
    }

    /**
     * 为预授权规则绑定标签
     * @public
     */
    async BindPsaTag(req: BindPsaTagRequest, cb?: (error: string, rep: BindPsaTagResponse) => void): Promise<BindPsaTagResponse> {
        return await this.request("BindPsaTag", req, cb);
    }

    /**
     * 删除自定义镜像<br>
正用于部署或重装中的镜像被删除后，镜像文件将保留一段时间，直到部署或重装结束
     * @public
     */
    async DeleteCustomImages(req: DeleteCustomImagesRequest, cb?: (error: string, rep: DeleteCustomImagesResponse) => void): Promise<DeleteCustomImagesResponse> {
        return await this.request("DeleteCustomImages", req, cb);
    }

    /**
     * 删除预授权规则
     * @public
     */
    async DeletePsaRegulation(req: DeletePsaRegulationRequest, cb?: (error: string, rep: DeletePsaRegulationResponse) => void): Promise<DeletePsaRegulationResponse> {
        return await this.request("DeletePsaRegulation", req, cb);
    }

    /**
     * 创建自定义脚本
     * @public
     */
    async CreateUserCmd(req: CreateUserCmdRequest, cb?: (error: string, rep: CreateUserCmdResponse) => void): Promise<CreateUserCmdResponse> {
        return await this.request("CreateUserCmd", req, cb);
    }

    /**
     * 查询自定义机型部件信息，包括CpuId对应的型号，DiskTypeId对应的磁盘类型
     * @public
     */
    async DescribeHardwareSpecification(req: DescribeHardwareSpecificationRequest, cb?: (error: string, rep: DescribeHardwareSpecificationResponse) => void): Promise<DescribeHardwareSpecificationResponse> {
        return await this.request("DescribeHardwareSpecification", req, cb);
    }

    /**
     * 服务器绑定CAM角色
     * @public
     */
    async DetachCamRole(req: DetachCamRoleRequest, cb?: (error: string, rep: DetachCamRoleResponse) => void): Promise<DetachCamRoleResponse> {
        return await this.request("DetachCamRole", req, cb);
    }

    /**
     * 服务器绑定CAM角色，该角色授权访问黑石物理服务器服务，为黑石物理服务器提供了访问资源的权限，如请求服务器的临时证书
     * @public
     */
    async AttachCamRole(req: AttachCamRoleRequest, cb?: (error: string, rep: AttachCamRoleResponse) => void): Promise<AttachCamRoleResponse> {
        return await this.request("AttachCamRole", req, cb);
    }

    /**
     * 查询指定机型所支持的操作系统
     * @public
     */
    async DescribeOsInfo(req: DescribeOsInfoRequest, cb?: (error: string, rep: DescribeOsInfoResponse) => void): Promise<DescribeOsInfoResponse> {
        return await this.request("DescribeOsInfo", req, cb);
    }

    /**
     * 获取异步操作状态的完成状态
     * @public
     */
    async DescribeOperationResult(req: DescribeOperationResultRequest, cb?: (error: string, rep: DescribeOperationResultResponse) => void): Promise<DescribeOperationResultResponse> {
        return await this.request("DescribeOperationResult", req, cb);
    }

    /**
     * 用于修改自定义镜像名或描述
     * @public
     */
    async ModifyCustomImageAttribute(req: ModifyCustomImageAttributeRequest, cb?: (error: string, rep: ModifyCustomImageAttributeResponse) => void): Promise<ModifyCustomImageAttributeResponse> {
        return await this.request("ModifyCustomImageAttribute", req, cb);
    }

    /**
     * 查询服务器所在的位置，如机架，上联交换机等信息
     * @public
     */
    async DescribeDevicePosition(req: DescribeDevicePositionRequest, cb?: (error: string, rep: DescribeDevicePositionResponse) => void): Promise<DescribeDevicePositionResponse> {
        return await this.request("DescribeDevicePosition", req, cb);
    }

    /**
     * 查询地域以及可用区
     * @public
     */
    async DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse> {
        return await this.request("DescribeRegions", req, cb);
    }

    /**
     * 获取自定义脚本任务详细信息
     * @public
     */
    async DescribeUserCmdTaskInfo(req: DescribeUserCmdTaskInfoRequest, cb?: (error: string, rep: DescribeUserCmdTaskInfoResponse) => void): Promise<DescribeUserCmdTaskInfoResponse> {
        return await this.request("DescribeUserCmdTaskInfo", req, cb);
    }

    /**
     * 查询服务器价格信息，支持设备的批量查找，支持标准机型和弹性机型的混合查找
     * @public
     */
    async DescribeDevicePriceInfo(req: DescribeDevicePriceInfoRequest, cb?: (error: string, rep: DescribeDevicePriceInfoResponse) => void): Promise<DescribeDevicePriceInfoResponse> {
        return await this.request("DescribeDevicePriceInfo", req, cb);
    }

    /**
     * 退回物理机至回收站，支持批量退还不同计费模式的物理机（包括预付费、后付费、预付费转后付费）
     * @public
     */
    async ReturnDevices(req: ReturnDevicesRequest, cb?: (error: string, rep: ReturnDevicesResponse) => void): Promise<ReturnDevicesResponse> {
        return await this.request("ReturnDevices", req, cb);
    }

    /**
     * 获取维修任务操作日志
     * @public
     */
    async DescribeTaskOperationLog(req: DescribeTaskOperationLogRequest, cb?: (error: string, rep: DescribeTaskOperationLogResponse) => void): Promise<DescribeTaskOperationLogResponse> {
        return await this.request("DescribeTaskOperationLog", req, cb);
    }

    /**
     * 将设备的预付费模式修改为后付费计费模式，支持批量转换。（前提是客户要加入黑石物理机后付费计费的白名单，申请黑石物理机后付费可以联系腾讯云客服）
     * @public
     */
    async ModifyPayModePre2Post(req: ModifyPayModePre2PostRequest, cb?: (error: string, rep: ModifyPayModePre2PostResponse) => void): Promise<ModifyPayModePre2PostResponse> {
        return await this.request("ModifyPayModePre2Post", req, cb);
    }

    /**
     * 解除标签与预授权规则的绑定
     * @public
     */
    async UnbindPsaTag(req: UnbindPsaTagRequest, cb?: (error: string, rep: UnbindPsaTagResponse) => void): Promise<UnbindPsaTagResponse> {
        return await this.request("UnbindPsaTag", req, cb);
    }

    /**
     * 创建黑石竞价实例
     * @public
     */
    async CreateSpotDevice(req: CreateSpotDeviceRequest, cb?: (error: string, rep: CreateSpotDeviceResponse) => void): Promise<CreateSpotDeviceResponse> {
        return await this.request("CreateSpotDevice", req, cb);
    }

    /**
     * 修改服务器名称
     * @public
     */
    async ModifyDeviceAliases(req: ModifyDeviceAliasesRequest, cb?: (error: string, rep: ModifyDeviceAliasesResponse) => void): Promise<ModifyDeviceAliasesResponse> {
        return await this.request("ModifyDeviceAliases", req, cb);
    }

    /**
     * 查询设备库存
     * @public
     */
    async DescribeDeviceInventory(req: DescribeDeviceInventoryRequest, cb?: (error: string, rep: DescribeDeviceInventoryResponse) => void): Promise<DescribeDeviceInventoryResponse> {
        return await this.request("DescribeDeviceInventory", req, cb);
    }

    /**
     * 查询设备操作日志， 如设备重启，重装，设置密码等操作
     * @public
     */
    async DescribeDeviceOperationLog(req: DescribeDeviceOperationLogRequest, cb?: (error: string, rep: DescribeDeviceOperationLogResponse) => void): Promise<DescribeDeviceOperationLogResponse> {
        return await this.request("DescribeDeviceOperationLog", req, cb);
    }

    /**
     * 获取用户维修任务列表及详细信息<br>
<br>
TaskStatus（任务状态ID）与状态中文名的对应关系如下：<br>
1：未授权<br>
2：处理中<br>
3：待确认<br>
4：未授权-暂不处理<br>
5：已恢复<br>
6：待确认-未恢复<br>
     * @public
     */
    async DescribeTaskInfo(req: DescribeTaskInfoRequest, cb?: (error: string, rep: DescribeTaskInfoResponse) => void): Promise<DescribeTaskInfoResponse> {
        return await this.request("DescribeTaskInfo", req, cb);
    }

    /**
     * 此接口用于操作维修任务<br>
入参TaskId为维修任务ID<br>
入参Operate表示对维修任务的操作，支持如下取值：<br>
AuthorizeRepair（授权维修）<br>
Ignore（暂不提醒）<br>
ConfirmRecovered（维修完成后，确认故障恢复）<br>
ConfirmUnRecovered（维修完成后，确认故障未恢复）<br>
<br>
操作约束（当前任务状态(TaskStatus)->对应可执行的操作）：<br>
未授权(1)->授权维修；暂不处理<br>
暂不处理(4)->授权维修<br>
待确认(3)->确认故障恢复；确认故障未恢复<br>
未恢复(6)->确认故障恢复<br>
<br>
对于Ping不可达故障的任务，还允许：<br>
未授权->确认故障恢复<br>
暂不处理->确认故障恢复<br>
<br>
处理中与已恢复状态的任务不允许进行操作。<br>
<br>
详细信息请访问：https://cloud.tencent.com/document/product/386/18190
     * @public
     */
    async RepairTaskControl(req: RepairTaskControlRequest, cb?: (error: string, rep: RepairTaskControlResponse) => void): Promise<RepairTaskControlResponse> {
        return await this.request("RepairTaskControl", req, cb);
    }

    /**
     * 查询物理服务器，可以按照实例，业务IP等过滤
     * @public
     */
    async DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse> {
        return await this.request("DescribeDevices", req, cb);
    }

    /**
     * 维修任务配置获取
     * @public
     */
    async DescribeRepairTaskConstant(req: DescribeRepairTaskConstantRequest, cb?: (error: string, rep: DescribeRepairTaskConstantResponse) => void): Promise<DescribeRepairTaskConstantResponse> {
        return await this.request("DescribeRepairTaskConstant", req, cb);
    }

    /**
     * 设置带外VPN认证用户密码
     * @public
     */
    async SetOutBandVpnAuthPassword(req: SetOutBandVpnAuthPasswordRequest, cb?: (error: string, rep: SetOutBandVpnAuthPasswordResponse) => void): Promise<SetOutBandVpnAuthPasswordResponse> {
        return await this.request("SetOutBandVpnAuthPassword", req, cb);
    }

    /**
     * 查看自定义镜像列表
     * @public
     */
    async DescribeCustomImages(req: DescribeCustomImagesRequest, cb?: (error: string, rep: DescribeCustomImagesResponse) => void): Promise<DescribeCustomImagesResponse> {
        return await this.request("DescribeCustomImages", req, cb);
    }

    /**
     * 恢复回收站中的物理机（仅限后付费的物理机）
     * @public
     */
    async RecoverDevices(req: RecoverDevicesRequest, cb?: (error: string, rep: RecoverDevicesResponse) => void): Promise<RecoverDevicesResponse> {
        return await this.request("RecoverDevices", req, cb);
    }

    /**
     * 获取物理机的分区格式
     * @public
     */
    async DescribeDevicePartition(req: DescribeDevicePartitionRequest, cb?: (error: string, rep: DescribeDevicePartitionResponse) => void): Promise<DescribeDevicePartitionResponse> {
        return await this.request("DescribeDevicePartition", req, cb);
    }

    /**
     * 关闭服务器
     * @public
     */
    async ShutdownDevices(req: ShutdownDevicesRequest, cb?: (error: string, rep: ShutdownDevicesResponse) => void): Promise<ShutdownDevicesResponse> {
        return await this.request("ShutdownDevices", req, cb);
    }

    /**
     * 重置服务器密码
     * @public
     */
    async ResetDevicePassword(req: ResetDevicePasswordRequest, cb?: (error: string, rep: ResetDevicePasswordResponse) => void): Promise<ResetDevicePasswordResponse> {
        return await this.request("ResetDevicePassword", req, cb);
    }

    /**
     * 查询机型支持的RAID方式， 并返回系统盘的分区和逻辑盘的列表
     * @public
     */
    async DescribeDeviceClassPartition(req: DescribeDeviceClassPartitionRequest, cb?: (error: string, rep: DescribeDeviceClassPartitionResponse) => void): Promise<DescribeDeviceClassPartitionResponse> {
        return await this.request("DescribeDeviceClassPartition", req, cb);
    }

    /**
     * 创建自定义镜像<br>
每个AppId在每个可用区最多保留20个自定义镜像
     * @public
     */
    async CreateCustomImage(req: CreateCustomImageRequest, cb?: (error: string, rep: CreateCustomImageResponse) => void): Promise<CreateCustomImageResponse> {
        return await this.request("CreateCustomImage", req, cb);
    }


}
