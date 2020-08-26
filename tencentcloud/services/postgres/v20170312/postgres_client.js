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
 * postgres client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("postgres.tencentcloudapi.com", "2017-03-12", clientConfig);
    }
    /**
     * 本接口（DescribeOrders）用于获取订单信息。
     * @public
     */
    async DescribeOrders(req, cb) {
        return this.request("DescribeOrders", req, cb);
    }
    /**
     * 本接口 (DestroyDBInstance) 用于销毁指定DBInstanceId对应的实例。
     * @public
     */
    async DestroyDBInstance(req, cb) {
        return this.request("DestroyDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表。
     * @public
     */
    async DescribeDBBackups(req, cb) {
        return this.request("DescribeDBBackups", req, cb);
    }
    /**
     * 本接口（ResetAccountPassword）用于重置实例的账户密码。
     * @public
     */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 本接口（DescribeDBErrlogs）用于获取错误日志。
     * @public
     */
    async DescribeDBErrlogs(req, cb) {
        return this.request("DescribeDBErrlogs", req, cb);
    }
    /**
     * 本接口（RestartDBInstance）用于重启实例。
     * @public
     */
    async RestartDBInstance(req, cb) {
        return this.request("RestartDBInstance", req, cb);
    }
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     * @public
     */
    async InquiryPriceCreateDBInstances(req, cb) {
        return this.request("InquiryPriceCreateDBInstances", req, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通外网。
     * @public
     */
    async OpenDBExtranetAccess(req, cb) {
        return this.request("OpenDBExtranetAccess", req, cb);
    }
    /**
     * 关闭serverlessDB实例外网
     * @public
     */
    async CloseServerlessDBExtranetAccess(req, cb) {
        return this.request("CloseServerlessDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于将实例转至其他项目。
     * @public
     */
    async ModifyDBInstancesProject(req, cb) {
        return this.request("ModifyDBInstancesProject", req, cb);
    }
    /**
     * 本接口（ModifyAccountRemark）用于修改帐号备注。
     * @public
     */
    async ModifyAccountRemark(req, cb) {
        return this.request("ModifyAccountRemark", req, cb);
    }
    /**
     * 本接口（DescribeDBXlogs）用于获取实例Xlog列表。
     * @public
     */
    async DescribeDBXlogs(req, cb) {
        return this.request("DescribeDBXlogs", req, cb);
    }
    /**
     * 本接口（SetAutoRenewFlag）用于设置自动续费。
     * @public
     */
    async SetAutoRenewFlag(req, cb) {
        return this.request("SetAutoRenewFlag", req, cb);
    }
    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     * @public
     */
    async DescribeDBInstanceAttribute(req, cb) {
        return this.request("DescribeDBInstanceAttribute", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改postgresql实例名字。
     * @public
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例。
     * @public
     */
    async CreateDBInstances(req, cb) {
        return this.request("CreateDBInstances", req, cb);
    }
    /**
     * 本接口 (CreateServerlessDBInstance) 用于创建一个ServerlessDB实例，创建成功返回实例ID。
     * @public
     */
    async CreateServerlessDBInstance(req, cb) {
        return this.request("CreateServerlessDBInstance", req, cb);
    }
    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     * @public
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     * @public
     */
    async DescribeZones(req, cb) {
        return this.request("DescribeZones", req, cb);
    }
    /**
     * 本接口 (DeleteServerlessDBInstance) 用于删除一个ServerlessDB实例。
     * @public
     */
    async DeleteServerlessDBInstance(req, cb) {
        return this.request("DeleteServerlessDBInstance", req, cb);
    }
    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     * @public
     */
    async InitDBInstances(req, cb) {
        return this.request("InitDBInstances", req, cb);
    }
    /**
     * 本接口（InquiryPriceUpgradeDBInstance）用于查询升级实例的价格。
     * @public
     */
    async InquiryPriceUpgradeDBInstance(req, cb) {
        return this.request("InquiryPriceUpgradeDBInstance", req, cb);
    }
    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     * @public
     */
    async DescribeRegions(req, cb) {
        return this.request("DescribeRegions", req, cb);
    }
    /**
     * 本接口（InquiryPriceRenewDBInstance）用于查询续费实例的价格。
     * @public
     */
    async InquiryPriceRenewDBInstance(req, cb) {
        return this.request("InquiryPriceRenewDBInstance", req, cb);
    }
    /**
     * 本接口（CloseDBExtranetAccess）用于关闭实例外网链接。
     * @public
     */
    async CloseDBExtranetAccess(req, cb) {
        return this.request("CloseDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于获取实例用户列表。
     * @public
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
     * 开通serverlessDB实例外网
     * @public
     */
    async OpenServerlessDBExtranetAccess(req, cb) {
        return this.request("OpenServerlessDBExtranetAccess", req, cb);
    }
    /**
     * 用于查询一个或多个serverlessDB实例的详细信息
     * @public
     */
    async DescribeServerlessDBInstances(req, cb) {
        return this.request("DescribeServerlessDBInstances", req, cb);
    }
    /**
     * 本接口（RenewInstance）用于续费实例。
     * @public
     */
    async RenewInstance(req, cb) {
        return this.request("RenewInstance", req, cb);
    }
    /**
     * 接口（DescribeDatabases）用来拉取数据库列表
     * @public
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口（UpgradeDBInstance）用于升级实例。
     * @public
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     * @public
     */
    async DescribeProductConfig(req, cb) {
        return this.request("DescribeProductConfig", req, cb);
    }
    /**
     * 本接口（DescribeDBSlowlogs）用于获取慢查询日志。
     * @public
     */
    async DescribeDBSlowlogs(req, cb) {
        return this.request("DescribeDBSlowlogs", req, cb);
    }
}
exports.Client = Client;
