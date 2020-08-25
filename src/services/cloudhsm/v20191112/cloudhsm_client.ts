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
   Subnet,
   DescribeSubnetRequest,
   DescribeVsmsResponse,
   InquiryPriceBuyVsmRequest,
   DescribeVpcResponse,
   ModifyVsmAttributesRequest,
   DescribeSubnetResponse,
   DescribeHSMByVpcIdRequest,
   DescribeHSMByVpcIdResponse,
   DescribeUsgRuleResponse,
   ResourceInfo,
   DescribeVpcRequest,
   Vpc,
   DescribeUsgRequest,
   DescribeVsmAttributesResponse,
   SgUnit,
   UsgRuleDetail,
   InquiryPriceBuyVsmResponse,
   DescribeHSMBySubnetIdResponse,
   DescribeUsgResponse,
   DescribeHSMBySubnetIdRequest,
   DescribeVsmsRequest,
   DescribeUsgRuleRequest,
   ModifyVsmAttributesResponse,
   DescribeVsmAttributesRequest,
   UsgPolicy,

} from "./cloudhsm_models"

/**
 * cloudhsm client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("cloudhsm.tencentcloudapi.com", "2019-11-12", clientConfig);
    }
    
    /**
     * 修改VSM属性
     * @public
     */
    async ModifyVsmAttributes(req: ModifyVsmAttributesRequest, cb?: (error: string, rep: ModifyVsmAttributesResponse) => void): Promise<ModifyVsmAttributesResponse> {
        return await this.request("ModifyVsmAttributes", req, cb);
    }

    /**
     * 获取VSM属性
     * @public
     */
    async DescribeVsmAttributes(req: DescribeVsmAttributesRequest, cb?: (error: string, rep: DescribeVsmAttributesResponse) => void): Promise<DescribeVsmAttributesResponse> {
        return await this.request("DescribeVsmAttributes", req, cb);
    }

    /**
     * 获取用户VSM列表
     * @public
     */
    async DescribeVsms(req: DescribeVsmsRequest, cb?: (error: string, rep: DescribeVsmsResponse) => void): Promise<DescribeVsmsResponse> {
        return await this.request("DescribeVsms", req, cb);
    }

    /**
     * 查询用户的私有网络列表
     * @public
     */
    async DescribeVpc(req: DescribeVpcRequest, cb?: (error: string, rep: DescribeVpcResponse) => void): Promise<DescribeVpcResponse> {
        return await this.request("DescribeVpc", req, cb);
    }

    /**
     * 通过VpcId获取Hsm资源数
     * @public
     */
    async DescribeHSMByVpcId(req: DescribeHSMByVpcIdRequest, cb?: (error: string, rep: DescribeHSMByVpcIdResponse) => void): Promise<DescribeHSMByVpcIdResponse> {
        return await this.request("DescribeHSMByVpcId", req, cb);
    }

    /**
     * 通过SubnetId获取Hsm资源数
     * @public
     */
    async DescribeHSMBySubnetId(req: DescribeHSMBySubnetIdRequest, cb?: (error: string, rep: DescribeHSMBySubnetIdResponse) => void): Promise<DescribeHSMBySubnetIdResponse> {
        return await this.request("DescribeHSMBySubnetId", req, cb);
    }

    /**
     * 根据用户的AppId获取用户安全组列表
     * @public
     */
    async DescribeUsg(req: DescribeUsgRequest, cb?: (error: string, rep: DescribeUsgResponse) => void): Promise<DescribeUsgResponse> {
        return await this.request("DescribeUsg", req, cb);
    }

    /**
     * 查询子网列表
     * @public
     */
    async DescribeSubnet(req: DescribeSubnetRequest, cb?: (error: string, rep: DescribeSubnetResponse) => void): Promise<DescribeSubnetResponse> {
        return await this.request("DescribeSubnet", req, cb);
    }

    /**
     * 购买询价接口
     * @public
     */
    async InquiryPriceBuyVsm(req: InquiryPriceBuyVsmRequest, cb?: (error: string, rep: InquiryPriceBuyVsmResponse) => void): Promise<InquiryPriceBuyVsmResponse> {
        return await this.request("InquiryPriceBuyVsm", req, cb);
    }

    /**
     * 获取安全组详情
     * @public
     */
    async DescribeUsgRule(req: DescribeUsgRuleRequest, cb?: (error: string, rep: DescribeUsgRuleResponse) => void): Promise<DescribeUsgRuleResponse> {
        return await this.request("DescribeUsgRule", req, cb);
    }


}
