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
   PlanDetailInfo,
   AppSetInfo,
   CreateShieldPlanInstanceResponse,
   ScanInfo,
   CreateResourceInstancesRequest,
   DescribeShieldInstancesResponse,
   PluginInfo,
   ScanSensitiveList,
   DescribeShieldResultRequest,
   CreateShieldInstanceRequest,
   CreateCosSecKeyInstanceRequest,
   DescribeScanResultsResponse,
   CreateScanInstancesRequest,
   DescribeUserBaseInfoInstanceResponse,
   CreateShieldPlanInstanceRequest,
   ScanSetInfo,
   AppScanSet,
   ShieldPlanInfo,
   CreateBindInstanceRequest,
   CreateShieldInstanceResponse,
   DeleteShieldInstancesRequest,
   ResourceInfo,
   DescribeShieldInstancesRequest,
   CreateScanInstancesResponse,
   DescribeScanInstancesResponse,
   VulInfo,
   AppInfo,
   ServiceInfo,
   SoInfo,
   DescribeShieldPlanInstanceResponse,
   ScanSensitiveInfo,
   ResourceServiceInfo,
   DescribeResourceInstancesRequest,
   AdInfo,
   DescribeShieldPlanInstanceRequest,
   ShieldInfo,
   ScanPermissionList,
   CreateResourceInstancesResponse,
   AppDetailInfo,
   DeleteScanInstancesResponse,
   Filter,
   DeleteShieldInstancesResponse,
   DescribeScanInstancesRequest,
   DescribeUserBaseInfoInstanceRequest,
   DescribeResourceInstancesResponse,
   DescribeScanResultsRequest,
   CreateCosSecKeyInstanceResponse,
   VirusInfo,
   ScanPermissionInfo,
   PlanInfo,
   DescribeShieldResultResponse,
   CreateBindInstanceResponse,
   VulList,
   BindInfo,
   DeleteScanInstancesRequest,

} from "./ms_models"

/**
 * ms client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("ms.tencentcloudapi.com", "2018-04-08", clientConfig);
    }
    
    /**
     * 用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     * @public
     */
    async CreateScanInstances(req: CreateScanInstancesRequest, cb?: (error: string, rep: CreateScanInstancesResponse) => void): Promise<CreateScanInstancesResponse> {
        return await this.request("CreateScanInstances", req, cb);
    }

    /**
     * 通过唯一标识获取加固的结果
     * @public
     */
    async DescribeShieldResult(req: DescribeShieldResultRequest, cb?: (error: string, rep: DescribeShieldResultResponse) => void): Promise<DescribeShieldResultResponse> {
        return await this.request("DescribeShieldResult", req, cb);
    }

    /**
     * 删除一个或者多个app扫描信息
     * @public
     */
    async DeleteScanInstances(req: DeleteScanInstancesRequest, cb?: (error: string, rep: DeleteScanInstancesResponse) => void): Promise<DeleteScanInstancesResponse> {
        return await this.request("DeleteScanInstances", req, cb);
    }

    /**
     * 用户可以使用该接口自建资源，只支持白名单用户
     * @public
     */
    async CreateResourceInstances(req: CreateResourceInstancesRequest, cb?: (error: string, rep: CreateResourceInstancesResponse) => void): Promise<CreateResourceInstancesResponse> {
        return await this.request("CreateResourceInstances", req, cb);
    }

    /**
     * 将应用和资源进行绑定
     * @public
     */
    async CreateBindInstance(req: CreateBindInstanceRequest, cb?: (error: string, rep: CreateBindInstanceResponse) => void): Promise<CreateBindInstanceResponse> {
        return await this.request("CreateBindInstance", req, cb);
    }

    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性。
     * @public
     */
    async CreateCosSecKeyInstance(req: CreateCosSecKeyInstanceRequest, cb?: (error: string, rep: CreateCosSecKeyInstanceResponse) => void): Promise<CreateCosSecKeyInstanceResponse> {
        return await this.request("CreateCosSecKeyInstance", req, cb);
    }

    /**
     * 获取某个用户的所有资源信息
     * @public
     */
    async DescribeResourceInstances(req: DescribeResourceInstancesRequest, cb?: (error: string, rep: DescribeResourceInstancesResponse) => void): Promise<DescribeResourceInstancesResponse> {
        return await this.request("DescribeResourceInstances", req, cb);
    }

    /**
     * 用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     * @public
     */
    async DescribeScanResults(req: DescribeScanResultsRequest, cb?: (error: string, rep: DescribeScanResultsResponse) => void): Promise<DescribeScanResultsResponse> {
        return await this.request("DescribeScanResults", req, cb);
    }

    /**
     * 查询加固策略
     * @public
     */
    async DescribeShieldPlanInstance(req: DescribeShieldPlanInstanceRequest, cb?: (error: string, rep: DescribeShieldPlanInstanceResponse) => void): Promise<DescribeShieldPlanInstanceResponse> {
        return await this.request("DescribeShieldPlanInstance", req, cb);
    }

    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果
     * @public
     */
    async CreateShieldInstance(req: CreateShieldInstanceRequest, cb?: (error: string, rep: CreateShieldInstanceResponse) => void): Promise<CreateShieldInstanceResponse> {
        return await this.request("CreateShieldInstance", req, cb);
    }

    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。

     * @public
     */
    async DescribeShieldInstances(req: DescribeShieldInstancesRequest, cb?: (error: string, rep: DescribeShieldInstancesResponse) => void): Promise<DescribeShieldInstancesResponse> {
        return await this.request("DescribeShieldInstances", req, cb);
    }

    /**
     * 对资源进行策略新增
     * @public
     */
    async CreateShieldPlanInstance(req: CreateShieldPlanInstanceRequest, cb?: (error: string, rep: CreateShieldPlanInstanceResponse) => void): Promise<CreateShieldPlanInstanceResponse> {
        return await this.request("CreateShieldPlanInstance", req, cb);
    }

    /**
     * 获取用户基础信息
     * @public
     */
    async DescribeUserBaseInfoInstance(req: DescribeUserBaseInfoInstanceRequest, cb?: (error: string, rep: DescribeUserBaseInfoInstanceResponse) => void): Promise<DescribeUserBaseInfoInstanceResponse> {
        return await this.request("DescribeUserBaseInfoInstance", req, cb);
    }

    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     * @public
     */
    async DescribeScanInstances(req: DescribeScanInstancesRequest, cb?: (error: string, rep: DescribeScanInstancesResponse) => void): Promise<DescribeScanInstancesResponse> {
        return await this.request("DescribeScanInstances", req, cb);
    }

    /**
     * 删除一个或者多个app加固信息
     * @public
     */
    async DeleteShieldInstances(req: DeleteShieldInstancesRequest, cb?: (error: string, rep: DeleteShieldInstancesResponse) => void): Promise<DeleteShieldInstancesResponse> {
        return await this.request("DeleteShieldInstances", req, cb);
    }


}
