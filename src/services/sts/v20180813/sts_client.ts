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
  AssumeRoleWithSAMLResponse,
  ApiKey,
  AssumeRoleWithSAMLRequest,
  GetFederationTokenResponse,
  QueryApiKeyResponse,
  AssumeRoleResponse,
  QueryApiKeyRequest,
  GetFederationTokenRequest,
  Credentials,
  AssumeRoleRequest,
} from "./sts_models"

/**
 * sts client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("sts.tencentcloudapi.com", "2018-08-13", clientConfig)
  }

  /**
   * 获取联合身份临时访问凭证
   * @public
   */
  async GetFederationToken(
    req: GetFederationTokenRequest,
    cb?: (error: string, rep: GetFederationTokenResponse) => void
  ): Promise<GetFederationTokenResponse> {
    return this.request("GetFederationToken", req, cb)
  }

  /**
   * 拉取API密钥列表
   * @public
   */
  async QueryApiKey(
    req: QueryApiKeyRequest,
    cb?: (error: string, rep: QueryApiKeyResponse) => void
  ): Promise<QueryApiKeyResponse> {
    return this.request("QueryApiKey", req, cb)
  }

  /**
   * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时凭证。
   * @public
   */
  async AssumeRoleWithSAML(
    req: AssumeRoleWithSAMLRequest,
    cb?: (error: string, rep: AssumeRoleWithSAMLResponse) => void
  ): Promise<AssumeRoleWithSAMLResponse> {
    return this.request("AssumeRoleWithSAML", req, cb)
  }

  /**
   * 申请扮演角色
   * @public
   */
  async AssumeRole(
    req: AssumeRoleRequest,
    cb?: (error: string, rep: AssumeRoleResponse) => void
  ): Promise<AssumeRoleResponse> {
    return this.request("AssumeRole", req, cb)
  }
}
