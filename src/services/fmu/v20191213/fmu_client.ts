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
   DeleteModelRequest,
   TryLipstickPicRequest,
   GetModelListRequest,
   TryLipstickPicResponse,
   LipColorInfo,
   CreateModelRequest,
   RGBAInfo,
   GetModelListResponse,
   ModelInfo,
   FaceRect,
   BeautifyPicRequest,
   CreateModelResponse,
   DeleteModelResponse,
   BeautifyPicResponse,

} from "./fmu_models"

/**
 * fmu client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("fmu.tencentcloudapi.com", "2019-12-13", clientConfig);
    }
    
    /**
     * 在使用LUT素材的modelid实现试唇色前，您需要先上传 LUT 格式的cube文件注册唇色ID。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。

注：您也可以直接使用 [试唇色接口](https://cloud.tencent.com/document/product/1172/40706)，通过输入RGBA模型数值的方式指定唇色，更简单易用。

     * @public
     */
    async CreateModel(req: CreateModelRequest, cb?: (error: string, rep: CreateModelResponse) => void): Promise<CreateModelResponse> {
        return await this.request("CreateModel", req, cb);
    }

    /**
     * 查询已注册的唇色素材。
     * @public
     */
    async GetModelList(req: GetModelListRequest, cb?: (error: string, rep: GetModelListResponse) => void): Promise<GetModelListResponse> {
        return await this.request("GetModelList", req, cb);
    }

    /**
     * 删除已注册的唇色素材。
     * @public
     */
    async DeleteModel(req: DeleteModelRequest, cb?: (error: string, rep: DeleteModelResponse) => void): Promise<DeleteModelResponse> {
        return await this.request("DeleteModel", req, cb);
    }

    /**
     * 对图片中的人脸嘴唇进行着色，最多支持同时对一张图中的3张人脸进行试唇色。

您可以通过事先注册在腾讯云的唇色素材（LUT文件）改变图片中的人脸唇色，也可以输入RGBA模型数值。

为了更好的效果，建议您使用事先注册在腾讯云的唇色素材（LUT文件）。

>     
- 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     * @public
     */
    async TryLipstickPic(req: TryLipstickPicRequest, cb?: (error: string, rep: TryLipstickPicResponse) => void): Promise<TryLipstickPicResponse> {
        return await this.request("TryLipstickPic", req, cb);
    }

    /**
     * 用户上传一张人脸图片，精准定位五官，实现美肤、亮肤、祛痘等美颜功能。
     * @public
     */
    async BeautifyPic(req: BeautifyPicRequest, cb?: (error: string, rep: BeautifyPicResponse) => void): Promise<BeautifyPicResponse> {
        return await this.request("BeautifyPic", req, cb);
    }


}
