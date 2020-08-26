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
 * bm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bm.tencentcloudapi.com", "2018-04-23", clientConfig);
    }
    /**
     * 获取自定义脚本信息列表
     * @public
     */
    async DescribeUserCmds(req, cb) {
        return this.request("DescribeUserCmds", req, cb);
    }
    /**
     * 重启机器
     * @public
     */
    async RebootDevices(req, cb) {
        return this.request("RebootDevices", req, cb);
    }
    /**
     * 允许修改规则信息及关联故障类型
     * @public
     */
    async ModifyPsaRegulation(req, cb) {
        return this.request("ModifyPsaRegulation", req, cb);
    }
    /**
     * 获取预授权规则列表
     * @public
     */
    async DescribePsaRegulations(req, cb) {
        return this.request("DescribePsaRegulations", req, cb);
    }
    /**
     * 修改物理机服务器自动续费标志
     * @public
     */
    async ModifyDeviceAutoRenewFlag(req, cb) {
        return this.request("ModifyDeviceAutoRenewFlag", req, cb);
    }
    /**
     * 销毁黑石物理机实例：可以销毁物理机列表中的竞价实例，或回收站列表中所有计费模式的实例
     * @public
     */
    async OfflineDevices(req, cb) {
        return this.request("OfflineDevices", req, cb);
    }
    /**
     * 修改物理机内网IP（不重装系统）
     * @public
     */
    async ModifyLanIp(req, cb) {
        return this.request("ModifyLanIp", req, cb);
    }
    /**
     * 运行自定义脚本
     * @public
     */
    async RunUserCmd(req, cb) {
        return this.request("RunUserCmd", req, cb);
    }
    /**
     * 查询自定义镜像制作进度
     * @public
     */
    async DescribeCustomImageProcess(req, cb) {
        return this.request("DescribeCustomImageProcess", req, cb);
    }
    /**
     * 开启服务器
     * @public
     */
    async StartDevices(req, cb) {
        return this.request("StartDevices", req, cb);
    }
    /**
     * 重装操作系统
     * @public
     */
    async ReloadDeviceOs(req, cb) {
        return this.request("ReloadDeviceOs", req, cb);
    }
    /**
     * 查询设备硬件配置信息，如 CPU 型号，内存大小，磁盘大小和数量
     * @public
     */
    async DescribeDeviceHardwareInfo(req, cb) {
        return this.request("DescribeDeviceHardwareInfo", req, cb);
    }
    /**
     * 获取自定义脚本任务列表
     * @public
     */
    async DescribeUserCmdTasks(req, cb) {
        return this.request("DescribeUserCmdTasks", req, cb);
    }
    /**
     * 创建预授权规则
     * @public
     */
    async CreatePsaRegulation(req, cb) {
        return this.request("CreatePsaRegulation", req, cb);
    }
    /**
     * 获取获取设备类型
     * @public
     */
    async DescribeDeviceClass(req, cb) {
        return this.request("DescribeDeviceClass", req, cb);
    }
    /**
     * 购买黑石物理机
     * @public
     */
    async BuyDevices(req, cb) {
        return this.request("BuyDevices", req, cb);
    }
    /**
     * 修改自定义脚本
     * @public
     */
    async ModifyUserCmd(req, cb) {
        return this.request("ModifyUserCmd", req, cb);
    }
    /**
     * 删除自定义脚本
     * @public
     */
    async DeleteUserCmds(req, cb) {
        return this.request("DeleteUserCmds", req, cb);
    }
    /**
     * 查询托管设备带外信息
     * @public
     */
    async DescribeHostedDeviceOutBandInfo(req, cb) {
        return this.request("DescribeHostedDeviceOutBandInfo", req, cb);
    }
    /**
     * 为预授权规则绑定标签
     * @public
     */
    async BindPsaTag(req, cb) {
        return this.request("BindPsaTag", req, cb);
    }
    /**
       * 删除自定义镜像<br>
  正用于部署或重装中的镜像被删除后，镜像文件将保留一段时间，直到部署或重装结束
       * @public
       */
    async DeleteCustomImages(req, cb) {
        return this.request("DeleteCustomImages", req, cb);
    }
    /**
     * 删除预授权规则
     * @public
     */
    async DeletePsaRegulation(req, cb) {
        return this.request("DeletePsaRegulation", req, cb);
    }
    /**
     * 创建自定义脚本
     * @public
     */
    async CreateUserCmd(req, cb) {
        return this.request("CreateUserCmd", req, cb);
    }
    /**
     * 查询自定义机型部件信息，包括CpuId对应的型号，DiskTypeId对应的磁盘类型
     * @public
     */
    async DescribeHardwareSpecification(req, cb) {
        return this.request("DescribeHardwareSpecification", req, cb);
    }
    /**
     * 服务器绑定CAM角色
     * @public
     */
    async DetachCamRole(req, cb) {
        return this.request("DetachCamRole", req, cb);
    }
    /**
     * 服务器绑定CAM角色，该角色授权访问黑石物理服务器服务，为黑石物理服务器提供了访问资源的权限，如请求服务器的临时证书
     * @public
     */
    async AttachCamRole(req, cb) {
        return this.request("AttachCamRole", req, cb);
    }
    /**
     * 查询指定机型所支持的操作系统
     * @public
     */
    async DescribeOsInfo(req, cb) {
        return this.request("DescribeOsInfo", req, cb);
    }
    /**
     * 获取异步操作状态的完成状态
     * @public
     */
    async DescribeOperationResult(req, cb) {
        return this.request("DescribeOperationResult", req, cb);
    }
    /**
     * 用于修改自定义镜像名或描述
     * @public
     */
    async ModifyCustomImageAttribute(req, cb) {
        return this.request("ModifyCustomImageAttribute", req, cb);
    }
    /**
     * 查询服务器所在的位置，如机架，上联交换机等信息
     * @public
     */
    async DescribeDevicePosition(req, cb) {
        return this.request("DescribeDevicePosition", req, cb);
    }
    /**
     * 查询地域以及可用区
     * @public
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 获取自定义脚本任务详细信息
     * @public
     */
    async DescribeUserCmdTaskInfo(req, cb) {
        return this.request("DescribeUserCmdTaskInfo", req, cb);
    }
    /**
     * 查询服务器价格信息，支持设备的批量查找，支持标准机型和弹性机型的混合查找
     * @public
     */
    async DescribeDevicePriceInfo(req, cb) {
        return this.request("DescribeDevicePriceInfo", req, cb);
    }
    /**
     * 退回物理机至回收站，支持批量退还不同计费模式的物理机（包括预付费、后付费、预付费转后付费）
     * @public
     */
    async ReturnDevices(req, cb) {
        return this.request("ReturnDevices", req, cb);
    }
    /**
     * 获取维修任务操作日志
     * @public
     */
    async DescribeTaskOperationLog(req, cb) {
        return this.request("DescribeTaskOperationLog", req, cb);
    }
    /**
     * 将设备的预付费模式修改为后付费计费模式，支持批量转换。（前提是客户要加入黑石物理机后付费计费的白名单，申请黑石物理机后付费可以联系腾讯云客服）
     * @public
     */
    async ModifyPayModePre2Post(req, cb) {
        return this.request("ModifyPayModePre2Post", req, cb);
    }
    /**
     * 解除标签与预授权规则的绑定
     * @public
     */
    async UnbindPsaTag(req, cb) {
        return this.request("UnbindPsaTag", req, cb);
    }
    /**
     * 创建黑石竞价实例
     * @public
     */
    async CreateSpotDevice(req, cb) {
        return this.request("CreateSpotDevice", req, cb);
    }
    /**
     * 修改服务器名称
     * @public
     */
    async ModifyDeviceAliases(req, cb) {
        return this.request("ModifyDeviceAliases", req, cb);
    }
    /**
     * 查询设备库存
     * @public
     */
    async DescribeDeviceInventory(req, cb) {
        return this.request("DescribeDeviceInventory", req, cb);
    }
    /**
     * 查询设备操作日志， 如设备重启，重装，设置密码等操作
     * @public
     */
    async DescribeDeviceOperationLog(req, cb) {
        return this.request("DescribeDeviceOperationLog", req, cb);
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
    async DescribeTaskInfo(req, cb) {
        return this.request("DescribeTaskInfo", req, cb);
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
    async RepairTaskControl(req, cb) {
        return this.request("RepairTaskControl", req, cb);
    }
    /**
     * 查询物理服务器，可以按照实例，业务IP等过滤
     * @public
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 维修任务配置获取
     * @public
     */
    async DescribeRepairTaskConstant(req, cb) {
        return this.request("DescribeRepairTaskConstant", req, cb);
    }
    /**
     * 设置带外VPN认证用户密码
     * @public
     */
    async SetOutBandVpnAuthPassword(req, cb) {
        return this.request("SetOutBandVpnAuthPassword", req, cb);
    }
    /**
     * 查看自定义镜像列表
     * @public
     */
    async DescribeCustomImages(req, cb) {
        return this.request("DescribeCustomImages", req, cb);
    }
    /**
     * 恢复回收站中的物理机（仅限后付费的物理机）
     * @public
     */
    async RecoverDevices(req, cb) {
        return this.request("RecoverDevices", req, cb);
    }
    /**
     * 获取物理机的分区格式
     * @public
     */
    async DescribeDevicePartition(req, cb) {
        return this.request("DescribeDevicePartition", req, cb);
    }
    /**
     * 关闭服务器
     * @public
     */
    async ShutdownDevices(req, cb) {
        return this.request("ShutdownDevices", req, cb);
    }
    /**
     * 重置服务器密码
     * @public
     */
    async ResetDevicePassword(req, cb) {
        return this.request("ResetDevicePassword", req, cb);
    }
    /**
     * 查询机型支持的RAID方式， 并返回系统盘的分区和逻辑盘的列表
     * @public
     */
    async DescribeDeviceClassPartition(req, cb) {
        return this.request("DescribeDeviceClassPartition", req, cb);
    }
    /**
       * 创建自定义镜像<br>
  每个AppId在每个可用区最多保留20个自定义镜像
       * @public
       */
    async CreateCustomImage(req, cb) {
        return this.request("CreateCustomImage", req, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=bm_client.js.map