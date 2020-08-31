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
  InstanceLog,
  LocalDiskInfo,
  TaskDetail,
  NodeInfo,
  DescribeInstanceOperationsRequest,
  OperationDetail,
  EsPublicAcl,
  DictInfo,
  RestartInstanceResponse,
  CreateInstanceResponse,
  DescribeInstanceLogsRequest,
  UpgradeLicenseRequest,
  CosBackup,
  TagInfo,
  KeyValue,
  CreateInstanceRequest,
  InstanceInfo,
  DeleteInstanceResponse,
  DescribeInstancesResponse,
  DescribeInstanceLogsResponse,
  UpdatePluginsResponse,
  RestartInstanceRequest,
  ZoneDetail,
  DescribeInstancesRequest,
  UpdateInstanceRequest,
  EsDictionaryInfo,
  DescribeInstanceOperationsResponse,
  UpdatePluginsRequest,
  UpgradeLicenseResponse,
  EsAcl,
  MasterNodeInfo,
  DeleteInstanceRequest,
  SubTaskDetail,
  UpgradeInstanceResponse,
  UpdateInstanceResponse,
  UpgradeInstanceRequest,
  Operation,
} from "./es_models"

/**
 * es client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("es.tencentcloudapi.com", "2018-04-16", clientConfig)
  }

  /**
   * 查询实例指定条件下的操作记录
   * @public
   */
  async DescribeInstanceOperations(
    req: DescribeInstanceOperationsRequest,
    cb?: (error: string, rep: DescribeInstanceOperationsResponse) => void
  ): Promise<DescribeInstanceOperationsResponse> {
    return this.request("DescribeInstanceOperations", req, cb)
  }

  /**
   * 查询用户该地域下符合条件的所有实例
   * @public
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 变更插件列表
   * @public
   */
  async UpdatePlugins(
    req: UpdatePluginsRequest,
    cb?: (error: string, rep: UpdatePluginsResponse) => void
  ): Promise<UpdatePluginsResponse> {
    return this.request("UpdatePlugins", req, cb)
  }

  /**
   * 创建指定规格的ES集群实例
   * @public
   */
  async CreateInstance(
    req: CreateInstanceRequest,
    cb?: (error: string, rep: CreateInstanceResponse) => void
  ): Promise<CreateInstanceResponse> {
    return this.request("CreateInstance", req, cb)
  }

  /**
   * 升级ES集群版本
   * @public
   */
  async UpgradeInstance(
    req: UpgradeInstanceRequest,
    cb?: (error: string, rep: UpgradeInstanceResponse) => void
  ): Promise<UpgradeInstanceResponse> {
    return this.request("UpgradeInstance", req, cb)
  }

  /**
   * 升级ES商业特性
   * @public
   */
  async UpgradeLicense(
    req: UpgradeLicenseRequest,
    cb?: (error: string, rep: UpgradeLicenseResponse) => void
  ): Promise<UpgradeLicenseResponse> {
    return this.request("UpgradeLicense", req, cb)
  }

  /**
     * 对集群进行节点规格变更，修改实例名称，修改配置，重置密码， 添加Kibana黑白名单等操作。参数中InstanceId为必传参数，ForceRestart为选填参数，剩余参数传递组合及含义如下：
- InstanceName：修改实例名称(仅用于标识实例)
- NodeInfoList: 修改节点配置（节点横向扩缩容，纵向扩缩容，增加主节点，增加冷节点等）
- EsConfig：修改集群配置
- Password：修改默认用户elastic的密码
- EsAcl：修改访问控制列表
- CosBackUp: 设置集群COS自动备份信息
以上参数组合只能传递一种，多传或少传均会导致请求失败
     * @public
     */
  async UpdateInstance(
    req: UpdateInstanceRequest,
    cb?: (error: string, rep: UpdateInstanceResponse) => void
  ): Promise<UpdateInstanceResponse> {
    return this.request("UpdateInstance", req, cb)
  }

  /**
   * 销毁集群实例
   * @public
   */
  async DeleteInstance(
    req: DeleteInstanceRequest,
    cb?: (error: string, rep: DeleteInstanceResponse) => void
  ): Promise<DeleteInstanceResponse> {
    return this.request("DeleteInstance", req, cb)
  }

  /**
   * 重启ES集群实例(用于系统版本更新等操作)
   * @public
   */
  async RestartInstance(
    req: RestartInstanceRequest,
    cb?: (error: string, rep: RestartInstanceResponse) => void
  ): Promise<RestartInstanceResponse> {
    return this.request("RestartInstance", req, cb)
  }

  /**
   * 查询用户该地域下符合条件的ES集群的日志
   * @public
   */
  async DescribeInstanceLogs(
    req: DescribeInstanceLogsRequest,
    cb?: (error: string, rep: DescribeInstanceLogsResponse) => void
  ): Promise<DescribeInstanceLogsResponse> {
    return this.request("DescribeInstanceLogs", req, cb)
  }
}