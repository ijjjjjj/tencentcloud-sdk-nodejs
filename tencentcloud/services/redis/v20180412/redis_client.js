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
 * redis client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("redis.tencentcloudapi.com", "2018-04-12", clientConfig);
    }
    /**
     * 查询实例大Key大小分布
     * @public
     */
    async DescribeInstanceMonitorBigKeySizeDist(req, cb) {
        return this.request("DescribeInstanceMonitorBigKeySizeDist", req, cb);
    }
    /**
     * 创建实例子账号
     * @public
     */
    async CreateInstanceAccount(req, cb) {
        return this.request("CreateInstanceAccount", req, cb);
    }
    /**
     * 修改实例维护时间窗时间，需要进行版本升级或者架构升级的实例，会在维护时间窗内进行时间切换。注意：已经发起版本升级或者架构升级的实例，无法修改维护时间窗。
     * @public
     */
    async ModifyMaintenanceWindow(req, cb) {
        return this.request("ModifyMaintenanceWindow", req, cb);
    }
    /**
     * 修改实例子账号
     * @public
     */
    async ModifyInstanceAccount(req, cb) {
        return this.request("ModifyInstanceAccount", req, cb);
    }
    /**
     * 查询实例慢查询记录
     * @public
     */
    async DescribeSlowLog(req, cb) {
        return this.request("DescribeSlowLog", req, cb);
    }
    /**
     * 查询任务列表信息
     * @public
     */
    async DescribeTaskList(req, cb) {
        return this.request("DescribeTaskList", req, cb);
    }
    /**
     * 回收站实例立即下线
     * @public
     */
    async CleanUpInstance(req, cb) {
        return this.request("CleanUpInstance", req, cb);
    }
    /**
     * 查看实例子账号信息
     * @public
     */
    async DescribeInstanceAccount(req, cb) {
        return this.request("DescribeInstanceAccount", req, cb);
    }
    /**
     * 获取备份配置
     * @public
     */
    async DescribeAutoBackupConfig(req, cb) {
        return this.request("DescribeAutoBackupConfig", req, cb);
    }
    /**
     * 查询实例CPU耗时
     * @public
     */
    async DescribeInstanceMonitorTopNCmdTook(req, cb) {
        return this.request("DescribeInstanceMonitorTopNCmdTook", req, cb);
    }
    /**
     * 设置自动备份时间
     * @public
     */
    async ModifyAutoBackupConfig(req, cb) {
        return this.request("ModifyAutoBackupConfig", req, cb);
    }
    /**
     * 获取集群版实例分片信息
     * @public
     */
    async DescribeInstanceShards(req, cb) {
        return this.request("DescribeInstanceShards", req, cb);
    }
    /**
     * 恢复 CRS 实例
     * @public
     */
    async RestoreInstance(req, cb) {
        return this.request("RestoreInstance", req, cb);
    }
    /**
     * 查询Redis实例列表
     * @public
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 重置密码
     * @public
     */
    async ResetPassword(req, cb) {
        return this.request("ResetPassword", req, cb);
    }
    /**
     * 查询实例维护时间窗，在实例需要进行版本升级或者架构升级的时候，会在维护时间窗时间内进行切换
     * @public
     */
    async DescribeMaintenanceWindow(req, cb) {
        return this.request("DescribeMaintenanceWindow", req, cb);
    }
    /**
     * 查询实例访问命令
     * @public
     */
    async DescribeInstanceMonitorTopNCmd(req, cb) {
        return this.request("DescribeInstanceMonitorTopNCmd", req, cb);
    }
    /**
     * 禁用读写分离
     * @public
     */
    async DisableReplicaReadonly(req, cb) {
        return this.request("DisableReplicaReadonly", req, cb);
    }
    /**
     * 查询实例DTS信息
     * @public
     */
    async DescribeInstanceDTSInfo(req, cb) {
        return this.request("DescribeInstanceDTSInfo", req, cb);
    }
    /**
     * 修改实例网络配置
     * @public
     */
    async ModifyNetworkConfig(req, cb) {
        return this.request("ModifyNetworkConfig", req, cb);
    }
    /**
     * 查询实例访问来源信息
     * @public
     */
    async DescribeInstanceMonitorSIP(req, cb) {
        return this.request("DescribeInstanceMonitorSIP", req, cb);
    }
    /**
     * 创建redis实例
     * @public
     */
    async CreateInstances(req, cb) {
        return this.request("CreateInstances", req, cb);
    }
    /**
     * 将原本实例升级到高版本实例，或者将主从版实例升级到集群版实例
     * @public
     */
    async UpgradeInstanceVersion(req, cb) {
        return this.request("UpgradeInstanceVersion", req, cb);
    }
    /**
     * 查询实例续费价格（包年包月）
     * @public
     */
    async InquiryPriceRenewInstance(req, cb) {
        return this.request("InquiryPriceRenewInstance", req, cb);
    }
    /**
     * 查询实例扩容价格
     * @public
     */
    async InquiryPriceUpgradeInstance(req, cb) {
        return this.request("InquiryPriceUpgradeInstance", req, cb);
    }
    /**
     * 查询项目安全组信息
     * @public
     */
    async DescribeProjectSecurityGroup(req, cb) {
        return this.request("DescribeProjectSecurityGroup", req, cb);
    }
    /**
     * 查询实例热Key
     * @public
     */
    async DescribeInstanceMonitorHotKey(req, cb) {
        return this.request("DescribeInstanceMonitorHotKey", req, cb);
    }
    /**
     * 用于查询任务结果
     * @public
     */
    async DescribeTaskInfo(req, cb) {
        return this.request("DescribeTaskInfo", req, cb);
    }
    /**
     * 查询备份Rdb下载地址(接口灰度中，需要加白名单使用)
     * @public
     */
    async DescribeBackupUrl(req, cb) {
        return this.request("DescribeBackupUrl", req, cb);
    }
    /**
     * 启用读写分离
     * @public
     */
    async EnableReplicaReadonly(req, cb) {
        return this.request("EnableReplicaReadonly", req, cb);
    }
    /**
     * 本接口(DescribeProjectSecurityGroups)用于查询项目的安全组详情。
     * @public
     */
    async DescribeProjectSecurityGroups(req, cb) {
        return this.request("DescribeProjectSecurityGroups", req, cb);
    }
    /**
     * 本接口 (AssociateSecurityGroups) 用于绑定安全组到指定实例。
     * @public
     */
    async AssociateSecurityGroups(req, cb) {
        return this.request("AssociateSecurityGroups", req, cb);
    }
    /**
     * 修改实例参数
     * @public
     */
    async ModifyInstanceParams(req, cb) {
        return this.request("ModifyInstanceParams", req, cb);
    }
    /**
     * 查询新购实例价格
     * @public
     */
    async InquiryPriceCreateInstance(req, cb) {
        return this.request("InquiryPriceCreateInstance", req, cb);
    }
    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组
     * @public
     */
    async ModifyDBInstanceSecurityGroups(req, cb) {
        return this.request("ModifyDBInstanceSecurityGroups", req, cb);
    }
    /**
     * 按量计费实例销毁
     * @public
     */
    async DestroyPostpaidInstance(req, cb) {
        return this.request("DestroyPostpaidInstance", req, cb);
    }
    /**
     * 查询实例大Key
     * @public
     */
    async DescribeInstanceMonitorBigKey(req, cb) {
        return this.request("DescribeInstanceMonitorBigKey", req, cb);
    }
    /**
     * 查询实例安全组信息
     * @public
     */
    async DescribeInstanceSecurityGroup(req, cb) {
        return this.request("DescribeInstanceSecurityGroup", req, cb);
    }
    /**
     * 查询实例大Key类型分布
     * @public
     */
    async DescribeInstanceMonitorBigKeyTypeDist(req, cb) {
        return this.request("DescribeInstanceMonitorBigKeyTypeDist", req, cb);
    }
    /**
     * 本接口查询指定可用区和实例类型下 Redis 的售卖规格， 如果用户不在购买白名单中，将不能查询该可用区或该类型的售卖规格详情。申请购买某地域白名单可以提交工单
     * @public
     */
    async DescribeProductInfo(req, cb) {
        return this.request("DescribeProductInfo", req, cb);
    }
    /**
     * 升级实例
     * @public
     */
    async UpgradeInstance(req, cb) {
        return this.request("UpgradeInstance", req, cb);
    }
    /**
     * 续费实例
     * @public
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 手动备份Redis实例
     * @public
     */
    async ManualBackupInstance(req, cb) {
        return this.request("ManualBackupInstance", req, cb);
    }
    /**
     * 修改redis密码
     * @public
     */
    async ModfiyInstancePassword(req, cb) {
        return this.request("ModfiyInstancePassword", req, cb);
    }
    /**
     * 本接口(DescribeDBSecurityGroups)用于查询实例的安全组详情。
     * @public
     */
    async DescribeDBSecurityGroups(req, cb) {
        return this.request("DescribeDBSecurityGroups", req, cb);
    }
    /**
     * 查询实例参数列表
     * @public
     */
    async DescribeInstanceParams(req, cb) {
        return this.request("DescribeInstanceParams", req, cb);
    }
    /**
     * 包年包月实例退还
     * @public
     */
    async DestroyPrepaidInstance(req, cb) {
        return this.request("DestroyPrepaidInstance", req, cb);
    }
    /**
     * 查询参数修改历史列表
     * @public
     */
    async DescribeInstanceParamRecords(req, cb) {
        return this.request("DescribeInstanceParamRecords", req, cb);
    }
    /**
     * 清空Redis实例的实例数据。
     * @public
     */
    async ClearInstance(req, cb) {
        return this.request("ClearInstance", req, cb);
    }
    /**
     * 查询订单信息
     * @public
     */
    async DescribeInstanceDealDetail(req, cb) {
        return this.request("DescribeInstanceDealDetail", req, cb);
    }
    /**
     * 删除实例子账号
     * @public
     */
    async DeleteInstanceAccount(req, cb) {
        return this.request("DeleteInstanceAccount", req, cb);
    }
    /**
     * 查询 CRS 实例备份列表
     * @public
     */
    async DescribeInstanceBackups(req, cb) {
        return this.request("DescribeInstanceBackups", req, cb);
    }
    /**
     * 本接口(DisassociateSecurityGroups)用于安全组批量解绑实例。
     * @public
     */
    async DisassociateSecurityGroups(req, cb) {
        return this.request("DisassociateSecurityGroups", req, cb);
    }
    /**
     * 实例解隔离
     * @public
     */
    async StartupInstance(req, cb) {
        return this.request("StartupInstance", req, cb);
    }
    /**
     * 修改实例相关信息
     * @public
     */
    async ModifyInstance(req, cb) {
        return this.request("ModifyInstance", req, cb);
    }
    /**
     * 查询实例访问的耗时分布
     * @public
     */
    async DescribeInstanceMonitorTookDist(req, cb) {
        return this.request("DescribeInstanceMonitorTookDist", req, cb);
    }
    /**
     * 在通过DTS支持跨可用区灾备的场景中，通过该接口交换实例VIP完成实例灾备切换。交换VIP后目标实例可写，源和目标实例VIP互换，同时源与目标实例间DTS同步任务断开
     * @public
     */
    async SwitchInstanceVip(req, cb) {
        return this.request("SwitchInstanceVip", req, cb);
    }
}
exports.Client = Client;
