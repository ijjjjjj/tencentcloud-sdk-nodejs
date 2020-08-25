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
   Canvas,
   LayoutParams,
   ResumeOnlineRecordResponse,
   StartOnlineRecordRequest,
   DescribeOnlineRecordCallbackRequest,
   DescribeOnlineRecordCallbackResponse,
   SetTranscodeCallbackResponse,
   StopOnlineRecordRequest,
   StreamLayout,
   CreateTranscodeResponse,
   VideoInfo,
   CustomLayout,
   SetTranscodeCallbackKeyResponse,
   Concat,
   DescribeOnlineRecordRequest,
   StartOnlineRecordResponse,
   Whiteboard,
   DescribeOnlineRecordResponse,
   CreateTranscodeRequest,
   SetOnlineRecordCallbackKeyResponse,
   PauseOnlineRecordResponse,
   SetTranscodeCallbackKeyRequest,
   DescribeTranscodeRequest,
   DescribeTranscodeResponse,
   SetOnlineRecordCallbackResponse,
   SetOnlineRecordCallbackKeyRequest,
   StopOnlineRecordResponse,
   DescribeTranscodeCallbackRequest,
   ResumeOnlineRecordRequest,
   DescribeTranscodeCallbackResponse,
   SetTranscodeCallbackRequest,
   SetOnlineRecordCallbackRequest,
   MixStream,
   OmittedDuration,
   PauseOnlineRecordRequest,

} from "./tiw_models"

/**
 * tiw client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("tiw.tencentcloudapi.com", "2019-09-19", clientConfig);
    }
    
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     * @public
     */
    async SetOnlineRecordCallback(req: SetOnlineRecordCallbackRequest, cb?: (error: string, rep: SetOnlineRecordCallbackResponse) => void): Promise<SetOnlineRecordCallbackResponse> {
        return await this.request("SetOnlineRecordCallback", req, cb);
    }

    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @public
     */
    async SetTranscodeCallbackKey(req: SetTranscodeCallbackKeyRequest, cb?: (error: string, rep: SetTranscodeCallbackKeyResponse) => void): Promise<SetTranscodeCallbackKeyResponse> {
        return await this.request("SetTranscodeCallbackKey", req, cb);
    }

    /**
     * 查询文档转码任务的执行进度与转码结果
     * @public
     */
    async DescribeTranscode(req: DescribeTranscodeRequest, cb?: (error: string, rep: DescribeTranscodeResponse) => void): Promise<DescribeTranscodeResponse> {
        return await this.request("DescribeTranscode", req, cb);
    }

    /**
     * 创建一个文档转码任务
     * @public
     */
    async CreateTranscode(req: CreateTranscodeRequest, cb?: (error: string, rep: CreateTranscodeResponse) => void): Promise<CreateTranscodeResponse> {
        return await this.request("CreateTranscode", req, cb);
    }

    /**
     * 停止实时录制
     * @public
     */
    async StopOnlineRecord(req: StopOnlineRecordRequest, cb?: (error: string, rep: StopOnlineRecordResponse) => void): Promise<StopOnlineRecordResponse> {
        return await this.request("StopOnlineRecord", req, cb);
    }

    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     * @public
     */
    async SetTranscodeCallback(req: SetTranscodeCallbackRequest, cb?: (error: string, rep: SetTranscodeCallbackResponse) => void): Promise<SetTranscodeCallbackResponse> {
        return await this.request("SetTranscodeCallback", req, cb);
    }

    /**
     * 发起一个实时录制任务
     * @public
     */
    async StartOnlineRecord(req: StartOnlineRecordRequest, cb?: (error: string, rep: StartOnlineRecordResponse) => void): Promise<StartOnlineRecordResponse> {
        return await this.request("StartOnlineRecord", req, cb);
    }

    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @public
     */
    async SetOnlineRecordCallbackKey(req: SetOnlineRecordCallbackKeyRequest, cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void): Promise<SetOnlineRecordCallbackKeyResponse> {
        return await this.request("SetOnlineRecordCallbackKey", req, cb);
    }

    /**
     * 暂停实时录制
     * @public
     */
    async PauseOnlineRecord(req: PauseOnlineRecordRequest, cb?: (error: string, rep: PauseOnlineRecordResponse) => void): Promise<PauseOnlineRecordResponse> {
        return await this.request("PauseOnlineRecord", req, cb);
    }

    /**
     * 查询文档转码回调地址
     * @public
     */
    async DescribeTranscodeCallback(req: DescribeTranscodeCallbackRequest, cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void): Promise<DescribeTranscodeCallbackResponse> {
        return await this.request("DescribeTranscodeCallback", req, cb);
    }

    /**
     * 查询实时录制任务状态与结果
     * @public
     */
    async DescribeOnlineRecord(req: DescribeOnlineRecordRequest, cb?: (error: string, rep: DescribeOnlineRecordResponse) => void): Promise<DescribeOnlineRecordResponse> {
        return await this.request("DescribeOnlineRecord", req, cb);
    }

    /**
     * 查询实时录制回调地址
     * @public
     */
    async DescribeOnlineRecordCallback(req: DescribeOnlineRecordCallbackRequest, cb?: (error: string, rep: DescribeOnlineRecordCallbackResponse) => void): Promise<DescribeOnlineRecordCallbackResponse> {
        return await this.request("DescribeOnlineRecordCallback", req, cb);
    }

    /**
     * 恢复实时录制
     * @public
     */
    async ResumeOnlineRecord(req: ResumeOnlineRecordRequest, cb?: (error: string, rep: ResumeOnlineRecordResponse) => void): Promise<ResumeOnlineRecordResponse> {
        return await this.request("ResumeOnlineRecord", req, cb);
    }


}
