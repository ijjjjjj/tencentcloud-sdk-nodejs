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
   InquireAuditCreditResponse,
   StopLoggingRequest,
   CmqRegionInfo,
   GetAttributeKeyRequest,
   DeleteAuditResponse,
   UpdateAuditRequest,
   InquireAuditCreditRequest,
   ListAuditsRequest,
   LookUpEventsRequest,
   StartLoggingRequest,
   CreateAuditResponse,
   StartLoggingResponse,
   AttributeKeyDetail,
   ListCosEnableRegionRequest,
   Resource,
   ListCosEnableRegionResponse,
   StopLoggingResponse,
   LookupAttribute,
   ListAuditsResponse,
   UpdateAuditResponse,
   DescribeAuditRequest,
   CreateAuditRequest,
   DeleteAuditRequest,
   ListCmqEnableRegionRequest,
   GetAttributeKeyResponse,
   ListCmqEnableRegionResponse,
   LookUpEventsResponse,
   CosRegionInfo,
   DescribeAuditResponse,
   Event,
   AuditSummary,

} from "./cloudaudit_models"

/**
 * cloudaudit client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("cloudaudit.tencentcloudapi.com", "2019-03-19", clientConfig);
    }
    
    /**
     * 开启跟踪集
     * @public
     */
    async StartLogging(req: StartLoggingRequest, cb?: (error: string, rep: StartLoggingResponse) => void): Promise<StartLoggingResponse> {
        return await this.request("StartLogging", req, cb);
    }

    /**
     * 查询AttributeKey的有效取值范围
     * @public
     */
    async GetAttributeKey(req: GetAttributeKeyRequest, cb?: (error: string, rep: GetAttributeKeyResponse) => void): Promise<GetAttributeKeyResponse> {
        return await this.request("GetAttributeKey", req, cb);
    }

    /**
     * 查询云审计支持的cmq的可用区
     * @public
     */
    async ListCmqEnableRegion(req: ListCmqEnableRegionRequest, cb?: (error: string, rep: ListCmqEnableRegionResponse) => void): Promise<ListCmqEnableRegionResponse> {
        return await this.request("ListCmqEnableRegion", req, cb);
    }

    /**
     * 删除跟踪集
     * @public
     */
    async DeleteAudit(req: DeleteAuditRequest, cb?: (error: string, rep: DeleteAuditResponse) => void): Promise<DeleteAuditResponse> {
        return await this.request("DeleteAudit", req, cb);
    }

    /**
     * 关闭跟踪集
     * @public
     */
    async StopLogging(req: StopLoggingRequest, cb?: (error: string, rep: StopLoggingResponse) => void): Promise<StopLoggingResponse> {
        return await this.request("StopLogging", req, cb);
    }

    /**
     * 查询用户可创建跟踪集的数量
     * @public
     */
    async InquireAuditCredit(req: InquireAuditCreditRequest, cb?: (error: string, rep: InquireAuditCreditResponse) => void): Promise<InquireAuditCreditResponse> {
        return await this.request("InquireAuditCredit", req, cb);
    }

    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     * @public
     */
    async UpdateAudit(req: UpdateAuditRequest, cb?: (error: string, rep: UpdateAuditResponse) => void): Promise<UpdateAuditResponse> {
        return await this.request("UpdateAudit", req, cb);
    }

    /**
     * 查询跟踪集详情
     * @public
     */
    async DescribeAudit(req: DescribeAuditRequest, cb?: (error: string, rep: DescribeAuditResponse) => void): Promise<DescribeAuditResponse> {
        return await this.request("DescribeAudit", req, cb);
    }

    /**
     * 参数要求：
1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
     * @public
     */
    async CreateAudit(req: CreateAuditRequest, cb?: (error: string, rep: CreateAuditResponse) => void): Promise<CreateAuditResponse> {
        return await this.request("CreateAudit", req, cb);
    }

    /**
     * 查询云审计支持的cos可用区
     * @public
     */
    async ListCosEnableRegion(req: ListCosEnableRegionRequest, cb?: (error: string, rep: ListCosEnableRegionResponse) => void): Promise<ListCosEnableRegionResponse> {
        return await this.request("ListCosEnableRegion", req, cb);
    }

    /**
     * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
     * @public
     */
    async LookUpEvents(req: LookUpEventsRequest, cb?: (error: string, rep: LookUpEventsResponse) => void): Promise<LookUpEventsResponse> {
        return await this.request("LookUpEvents", req, cb);
    }

    /**
     * 查询跟踪集概要
     * @public
     */
    async ListAudits(req: ListAuditsRequest, cb?: (error: string, rep: ListAuditsResponse) => void): Promise<ListAuditsResponse> {
        return await this.request("ListAudits", req, cb);
    }


}
