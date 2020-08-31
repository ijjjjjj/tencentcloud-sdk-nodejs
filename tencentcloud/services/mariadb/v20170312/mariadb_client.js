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
 * mariadb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("mariadb.tencentcloudapi.com", "2017-03-12", clientConfig);
    }
    /**
       * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
  注意：注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    async DescribeAccountPrivileges(req, cb) {
        return this.request("DescribeAccountPrivileges", req, cb);
    }
    /**
     * 本接口（DescribeRenewalPrice）用于在续费云数据库实例时，查询续费的价格。
     * @public
     */
    async DescribeRenewalPrice(req, cb) {
        return this.request("DescribeRenewalPrice", req, cb);
    }
    /**
     * 本接口（DescribeOrders）用于查询云数据库订单信息。传入订单ID来查询订单关联的云数据库实例，和对应的任务流程ID。
     * @public
     */
    async DescribeOrders(req, cb) {
        return this.request("DescribeOrders", req, cb);
    }
    /**
     * 本接口(DescribeSaleInfo)用于查询云数据库可售卖的地域和可用区信息。
     * @public
     */
    async DescribeSaleInfo(req, cb) {
        return this.request("DescribeSaleInfo", req, cb);
    }
    /**
       * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
  注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    async ModifyAccountDescription(req, cb) {
        return this.request("ModifyAccountDescription", req, cb);
    }
    /**
     * 本接口（DescribeBackupTime）用于获取云数据库的备份时间。后台系统将根据此配置定期进行实例备份。
     * @public
     */
    async DescribeBackupTime(req, cb) {
        return this.request("DescribeBackupTime", req, cb);
    }
    /**
     * 本接口(DescribeDBResourceUsageDetails)用于查看数据库实例当前性能数据。
     * @public
     */
    async DescribeDBResourceUsageDetails(req, cb) {
        return this.request("DescribeDBResourceUsageDetails", req, cb);
    }
    /**
       * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
  注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    async ResetAccountPassword(req, cb) {
        return this.request("ResetAccountPassword", req, cb);
    }
    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     * @public
     */
    async ModifyDBParameters(req, cb) {
        return this.request("ModifyDBParameters", req, cb);
    }
    /**
     * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
     * @public
     */
    async DescribeSqlLogs(req, cb) {
        return this.request("DescribeSqlLogs", req, cb);
    }
    /**
     * 本接口(DescribeDBSlowLogs)用于查询慢查询日志列表。
     * @public
     */
    async DescribeDBSlowLogs(req, cb) {
        return this.request("DescribeDBSlowLogs", req, cb);
    }
    /**
     * 本接口（DescribeFlow）用于查询流程状态。
     * @public
     */
    async DescribeFlow(req, cb) {
        return this.request("DescribeFlow", req, cb);
    }
    /**
     * 本接口（ModifyDBInstanceName）用于修改云数据库实例的名称。
     * @public
     */
    async ModifyDBInstanceName(req, cb) {
        return this.request("ModifyDBInstanceName", req, cb);
    }
    /**
     * 本接口（RestartDBInstances）用于重启数据库实例
     * @public
     */
    async RestartDBInstances(req, cb) {
        return this.request("RestartDBInstances", req, cb);
    }
    /**
       * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
  注意：相同用户名，不同Host是不同的账号。
       * @public
       */
    async GrantAccountPrivileges(req, cb) {
        return this.request("GrantAccountPrivileges", req, cb);
    }
    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     * @public
     */
    async DeleteAccount(req, cb) {
        return this.request("DeleteAccount", req, cb);
    }
    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     * @public
     */
    async DescribeDBParameters(req, cb) {
        return this.request("DescribeDBParameters", req, cb);
    }
    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     * @public
     */
    async ModifyDBInstancesProject(req, cb) {
        return this.request("ModifyDBInstancesProject", req, cb);
    }
    /**
     * 本接口(DescribeDBPerformanceDetails)用于查看实例性能数据详情。
     * @public
     */
    async DescribeDBPerformanceDetails(req, cb) {
        return this.request("DescribeDBPerformanceDetails", req, cb);
    }
    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     * @public
     */
    async DescribeDBLogFiles(req, cb) {
        return this.request("DescribeDBLogFiles", req, cb);
    }
    /**
     * 本接口(DescribeDBInstanceSpecs)用于查询可创建的云数据库可售卖的规格配置。
     * @public
     */
    async DescribeDBInstanceSpecs(req, cb) {
        return this.request("DescribeDBInstanceSpecs", req, cb);
    }
    /**
       * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
  如果不指定任何筛选条件，则默认返回20条实例记录，单次请求最多支持返回100条实例记录。
       * @public
       */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口（RenewDBInstance）用于续费云数据库实例。
     * @public
     */
    async RenewDBInstance(req, cb) {
        return this.request("RenewDBInstance", req, cb);
    }
    /**
     * 本接口（DescribeUpgradePrice）用于在扩容云数据库实例时，查询扩容的价格。
     * @public
     */
    async DescribeUpgradePrice(req, cb) {
        return this.request("DescribeUpgradePrice", req, cb);
    }
    /**
     * 本接口（ModifyBackupTime）用于设置云数据库实例的备份时间。后台系统将根据此配置定期进行实例备份。
     * @public
     */
    async ModifyBackupTime(req, cb) {
        return this.request("ModifyBackupTime", req, cb);
    }
    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     * @public
     */
    async CreateAccount(req, cb) {
        return this.request("CreateAccount", req, cb);
    }
    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     * @public
     */
    async OpenDBExtranetAccess(req, cb) {
        return this.request("OpenDBExtranetAccess", req, cb);
    }
    /**
     * 本接口(InitDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @public
     */
    async InitDBInstances(req, cb) {
        return this.request("InitDBInstances", req, cb);
    }
    /**
     * 本接口（CreateDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长和数量等信息创建云数据库实例。
     * @public
     */
    async CreateDBInstance(req, cb) {
        return this.request("CreateDBInstance", req, cb);
    }
    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     * @public
     */
    async CloseDBExtranetAccess(req, cb) {
        return this.request("CloseDBExtranetAccess", req, cb);
    }
    /**
     * 本接口（CreateTmpInstances）用于创建临时实例。
     * @public
     */
    async CreateTmpInstances(req, cb) {
        return this.request("CreateTmpInstances", req, cb);
    }
    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     * @public
     */
    async DescribeAccounts(req, cb) {
        return this.request("DescribeAccounts", req, cb);
    }
    /**
       * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
  注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
       * @public
       */
    async CopyAccountPrivileges(req, cb) {
        return this.request("CopyAccountPrivileges", req, cb);
    }
    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     * @public
     */
    async DescribeDatabases(req, cb) {
        return this.request("DescribeDatabases", req, cb);
    }
    /**
     * 本接口（DescribePrice）用于在购买实例前，查询实例的价格。
     * @public
     */
    async DescribePrice(req, cb) {
        return this.request("DescribePrice", req, cb);
    }
    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     * @public
     */
    async CloneAccount(req, cb) {
        return this.request("CloneAccount", req, cb);
    }
    /**
     * 本接口(UpgradeDBInstance)用于扩容云数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @public
     */
    async UpgradeDBInstance(req, cb) {
        return this.request("UpgradeDBInstance", req, cb);
    }
    /**
     * 本接口(DescribeDBPerformance)用于查看数据库实例当前性能数据。
     * @public
     */
    async DescribeDBPerformance(req, cb) {
        return this.request("DescribeDBPerformance", req, cb);
    }
    /**
     * 本接口(DescribeLogFileRetentionPeriod)用于查看数据库备份日志的备份天数的设置情况。
     * @public
     */
    async DescribeLogFileRetentionPeriod(req, cb) {
        return this.request("DescribeLogFileRetentionPeriod", req, cb);
    }
    /**
     * 本接口(DescribeDBResourceUsage)用于查看数据库实例资源的使用情况。
     * @public
     */
    async DescribeDBResourceUsage(req, cb) {
        return this.request("DescribeDBResourceUsage", req, cb);
    }
    /**
     * 本接口(ModifyLogFileRetentionPeriod)用于修改数据库备份日志保存天数。
     * @public
     */
    async ModifyLogFileRetentionPeriod(req, cb) {
        return this.request("ModifyLogFileRetentionPeriod", req, cb);
    }
}
exports.Client = Client;