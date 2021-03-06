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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const AddInstancesResponse = models.AddInstancesResponse;
const UpgradeInstanceResponse = models.UpgradeInstanceResponse;
const Addr = models.Addr;
const DescribeClustersRequest = models.DescribeClustersRequest;
const InstanceSpec = models.InstanceSpec;
const Account = models.Account;
const ModifyDBInstanceSecurityGroupsResponse = models.ModifyDBInstanceSecurityGroupsResponse;
const DescribeBackupConfigRequest = models.DescribeBackupConfigRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const IsolateInstanceRequest = models.IsolateInstanceRequest;
const DescribeMaintainPeriodResponse = models.DescribeMaintainPeriodResponse;
const DescribeBackupListResponse = models.DescribeBackupListResponse;
const DescribeRollbackTimeRangeResponse = models.DescribeRollbackTimeRangeResponse;
const ModifyMaintainPeriodConfigRequest = models.ModifyMaintainPeriodConfigRequest;
const ModifyBackupConfigRequest = models.ModifyBackupConfigRequest;
const DescribeRollbackTimeRangeRequest = models.DescribeRollbackTimeRangeRequest;
const DescribeRollbackTimeValidityRequest = models.DescribeRollbackTimeValidityRequest;
const IsolateClusterRequest = models.IsolateClusterRequest;
const AddInstancesRequest = models.AddInstancesRequest;
const DescribeClusterDetailRequest = models.DescribeClusterDetailRequest;
const UpgradeInstanceRequest = models.UpgradeInstanceRequest;
const QueryFilter = models.QueryFilter;
const DescribeMaintainPeriodRequest = models.DescribeMaintainPeriodRequest;
const OfflineClusterRequest = models.OfflineClusterRequest;
const CynosdbClusterDetail = models.CynosdbClusterDetail;
const ClusterInstanceDetail = models.ClusterInstanceDetail;
const BackupFileInfo = models.BackupFileInfo;
const DescribeRollbackTimeValidityResponse = models.DescribeRollbackTimeValidityResponse;
const ModifyMaintainPeriodConfigResponse = models.ModifyMaintainPeriodConfigResponse;
const IsolateInstanceResponse = models.IsolateInstanceResponse;
const DescribeBackupListRequest = models.DescribeBackupListRequest;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const OfflineClusterResponse = models.OfflineClusterResponse;
const DescribeInstanceSpecsResponse = models.DescribeInstanceSpecsResponse;
const ObjectTask = models.ObjectTask;
const DescribeInstanceSpecsRequest = models.DescribeInstanceSpecsRequest;
const IsolateClusterResponse = models.IsolateClusterResponse;
const CreateClustersResponse = models.CreateClustersResponse;
const SetRenewFlagRequest = models.SetRenewFlagRequest;
const CreateClustersRequest = models.CreateClustersRequest;
const CynosdbCluster = models.CynosdbCluster;
const DescribeClusterDetailResponse = models.DescribeClusterDetailResponse;
const SetRenewFlagResponse = models.SetRenewFlagResponse;
const DescribeClustersResponse = models.DescribeClustersResponse;
const ModifyBackupConfigResponse = models.ModifyBackupConfigResponse;
const DescribeBackupConfigResponse = models.DescribeBackupConfigResponse;
const ModifyDBInstanceSecurityGroupsRequest = models.ModifyDBInstanceSecurityGroupsRequest;


/**
 * cynosdb client
 * @class
 */
class CynosdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cynosdb.tencentcloudapi.com", "2019-01-07", credential, region, profile);
    }
    
    /**
     * 修改指定集群的备份配置
     * @param {ModifyBackupConfigRequest} req
     * @param {function(string, ModifyBackupConfigResponse):void} cb
     * @public
     */
    ModifyBackupConfig(req, cb) {
        let resp = new ModifyBackupConfigResponse();
        this.request("ModifyBackupConfig", req, resp, cb);
    }

    /**
     * SetRenewFlag设置实例的自动续费功能
     * @param {SetRenewFlagRequest} req
     * @param {function(string, SetRenewFlagResponse):void} cb
     * @public
     */
    SetRenewFlag(req, cb) {
        let resp = new SetRenewFlagResponse();
        this.request("SetRenewFlag", req, resp, cb);
    }

    /**
     * 升级实例
     * @param {UpgradeInstanceRequest} req
     * @param {function(string, UpgradeInstanceResponse):void} cb
     * @public
     */
    UpgradeInstance(req, cb) {
        let resp = new UpgradeInstanceResponse();
        this.request("UpgradeInstance", req, resp, cb);
    }

    /**
     * 创建集群
     * @param {CreateClustersRequest} req
     * @param {function(string, CreateClustersResponse):void} cb
     * @public
     */
    CreateClusters(req, cb) {
        let resp = new CreateClustersResponse();
        this.request("CreateClusters", req, resp, cb);
    }

    /**
     * 下线集群
     * @param {OfflineClusterRequest} req
     * @param {function(string, OfflineClusterResponse):void} cb
     * @public
     */
    OfflineCluster(req, cb) {
        let resp = new OfflineClusterResponse();
        this.request("OfflineCluster", req, resp, cb);
    }

    /**
     * 本接口(IsolateInstance)用于隔离实例访问。
     * @param {IsolateInstanceRequest} req
     * @param {function(string, IsolateInstanceResponse):void} cb
     * @public
     */
    IsolateInstance(req, cb) {
        let resp = new IsolateInstanceResponse();
        this.request("IsolateInstance", req, resp, cb);
    }

    /**
     * 指定时间和集群查询是否可回滚
     * @param {DescribeRollbackTimeValidityRequest} req
     * @param {function(string, DescribeRollbackTimeValidityResponse):void} cb
     * @public
     */
    DescribeRollbackTimeValidity(req, cb) {
        let resp = new DescribeRollbackTimeValidityResponse();
        this.request("DescribeRollbackTimeValidity", req, resp, cb);
    }

    /**
     * 本接口（DescribeInstanceSpecs）用于查询实例规格
     * @param {DescribeInstanceSpecsRequest} req
     * @param {function(string, DescribeInstanceSpecsResponse):void} cb
     * @public
     */
    DescribeInstanceSpecs(req, cb) {
        let resp = new DescribeInstanceSpecsResponse();
        this.request("DescribeInstanceSpecs", req, resp, cb);
    }

    /**
     * 显示集群详情
     * @param {DescribeClusterDetailRequest} req
     * @param {function(string, DescribeClusterDetailResponse):void} cb
     * @public
     */
    DescribeClusterDetail(req, cb) {
        let resp = new DescribeClusterDetailResponse();
        this.request("DescribeClusterDetail", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceSecurityGroups)用于修改实例绑定的安全组。
     * @param {ModifyDBInstanceSecurityGroupsRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupsResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroups(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupsResponse();
        this.request("ModifyDBInstanceSecurityGroups", req, resp, cb);
    }

    /**
     * 隔离集群
     * @param {IsolateClusterRequest} req
     * @param {function(string, IsolateClusterResponse):void} cb
     * @public
     */
    IsolateCluster(req, cb) {
        let resp = new IsolateClusterResponse();
        this.request("IsolateCluster", req, resp, cb);
    }

    /**
     * 查询备份文件列表
     * @param {DescribeBackupListRequest} req
     * @param {function(string, DescribeBackupListResponse):void} cb
     * @public
     */
    DescribeBackupList(req, cb) {
        let resp = new DescribeBackupListResponse();
        this.request("DescribeBackupList", req, resp, cb);
    }

    /**
     * 查询实例维护时间窗
     * @param {DescribeMaintainPeriodRequest} req
     * @param {function(string, DescribeMaintainPeriodResponse):void} cb
     * @public
     */
    DescribeMaintainPeriod(req, cb) {
        let resp = new DescribeMaintainPeriodResponse();
        this.request("DescribeMaintainPeriod", req, resp, cb);
    }

    /**
     * 获取指定集群的备份配置信息，包括全量备份时间段，备份文件保留时间
     * @param {DescribeBackupConfigRequest} req
     * @param {function(string, DescribeBackupConfigResponse):void} cb
     * @public
     */
    DescribeBackupConfig(req, cb) {
        let resp = new DescribeBackupConfigResponse();
        this.request("DescribeBackupConfig", req, resp, cb);
    }

    /**
     * 查询集群列表
     * @param {DescribeClustersRequest} req
     * @param {function(string, DescribeClustersResponse):void} cb
     * @public
     */
    DescribeClusters(req, cb) {
        let resp = new DescribeClustersResponse();
        this.request("DescribeClusters", req, resp, cb);
    }

    /**
     * 本接口(DescribeAccounts)用于查询数据库管理账号。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 修改维护时间配置
     * @param {ModifyMaintainPeriodConfigRequest} req
     * @param {function(string, ModifyMaintainPeriodConfigResponse):void} cb
     * @public
     */
    ModifyMaintainPeriodConfig(req, cb) {
        let resp = new ModifyMaintainPeriodConfigResponse();
        this.request("ModifyMaintainPeriodConfig", req, resp, cb);
    }

    /**
     * 查询指定集群有效回滚时间范围
     * @param {DescribeRollbackTimeRangeRequest} req
     * @param {function(string, DescribeRollbackTimeRangeResponse):void} cb
     * @public
     */
    DescribeRollbackTimeRange(req, cb) {
        let resp = new DescribeRollbackTimeRangeResponse();
        this.request("DescribeRollbackTimeRange", req, resp, cb);
    }

    /**
     * 本接口（AddInstances）用于集群添加实例
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }


}
module.exports = CynosdbClient;
