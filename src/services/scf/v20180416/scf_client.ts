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
   AccessInfo,
   Trigger,
   ListAliasesResponse,
   DeleteLayerVersionResponse,
   GetAliasResponse,
   VersionWeight,
   LayerVersionInfo,
   UpdateFunctionConfigurationResponse,
   PublishLayerVersionResponse,
   PublicNetConfigIn,
   UpdateAliasRequest,
   RoutingConfig,
   UpdateAliasResponse,
   GetFunctionLogsRequest,
   Tag,
   LogFilter,
   EipConfigIn,
   ListLayerVersionsResponse,
   DeleteFunctionRequest,
   CopyFunctionResponse,
   Namespace,
   GetFunctionRequest,
   ListNamespacesRequest,
   PublishVersionRequest,
   DeleteAliasRequest,
   ListVersionByFunctionResponse,
   GetAliasRequest,
   CreateNamespaceResponse,
   PublicNetConfigOut,
   UpdateFunctionCodeRequest,
   UpdateFunctionConfigurationRequest,
   ListTriggersResponse,
   UpdateNamespaceResponse,
   ListLayersRequest,
   CopyFunctionRequest,
   DeleteNamespaceResponse,
   LayerVersionSimple,
   CfsConfig,
   DeleteNamespaceRequest,
   ListFunctionsRequest,
   CreateTriggerRequest,
   ListLayersResponse,
   DeleteFunctionResponse,
   Result,
   CreateAliasResponse,
   LogSearchContext,
   TriggerInfo,
   CreateFunctionRequest,
   DeleteAliasResponse,
   PublishVersionResponse,
   Environment,
   GetFunctionAddressRequest,
   InvokeResponse,
   InvokeRequest,
   CreateAliasRequest,
   VersionMatch,
   ListLayerVersionsRequest,
   CreateTriggerResponse,
   PublishLayerVersionRequest,
   CreateNamespaceRequest,
   DeleteLayerVersionRequest,
   Filter,
   Variable,
   GetFunctionResponse,
   Code,
   UpdateNamespaceRequest,
   GetLayerVersionResponse,
   FunctionLog,
   CfsInsInfo,
   FunctionVersion,
   Function,
   DeadLetterConfig,
   ListVersionByFunctionRequest,
   ListFunctionsResponse,
   ListTriggersRequest,
   CreateFunctionResponse,
   ListAliasesRequest,
   EipOutConfig,
   Alias,
   GetLayerVersionRequest,
   GetFunctionLogsResponse,
   DeleteTriggerResponse,
   DeleteTriggerRequest,
   VpcConfig,
   GetFunctionAddressResponse,
   ListNamespacesResponse,
   EipConfigOut,
   UpdateFunctionCodeResponse,

} from "./scf_models"

/**
 * scf client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("scf.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    
    /**
     * 该接口根据传入参数删除函数。
     * @public
     */
    async DeleteFunction(req: DeleteFunctionRequest, cb?: (error: string, rep: DeleteFunctionResponse) => void): Promise<DeleteFunctionResponse> {
        return await this.request("DeleteFunction", req, cb);
    }

    /**
     * 更新别名的配置
     * @public
     */
    async UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse> {
        return await this.request("UpdateAlias", req, cb);
    }

    /**
     * 获取函数触发器列表
     * @public
     */
    async ListTriggers(req: ListTriggersRequest, cb?: (error: string, rep: ListTriggersResponse) => void): Promise<ListTriggersResponse> {
        return await this.request("ListTriggers", req, cb);
    }

    /**
     * 获取层版本详细信息，包括用于下载层中文件的链接。
     * @public
     */
    async GetLayerVersion(req: GetLayerVersionRequest, cb?: (error: string, rep: GetLayerVersionResponse) => void): Promise<GetLayerVersionResponse> {
        return await this.request("GetLayerVersion", req, cb);
    }

    /**
     * 该接口根据参数输入设置新的触发方式。
     * @public
     */
    async CreateTrigger(req: CreateTriggerRequest, cb?: (error: string, rep: CreateTriggerResponse) => void): Promise<CreateTriggerResponse> {
        return await this.request("CreateTrigger", req, cb);
    }

    /**
     * 该接口根据传入的参数创建命名空间。
     * @public
     */
    async CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse> {
        return await this.request("CreateNamespace", req, cb);
    }

    /**
     * 复制一个函数，您可以选择将复制出的新函数放置在特定的Region和Namespace。
注：本接口**不会**复制函数的以下对象或属性：
1. 函数的触发器
2. 除了$LATEST以外的其它版本
3. 函数配置的日志投递到的CLS目标。

如有需要，您可以在复制后手动配置新函数。
     * @public
     */
    async CopyFunction(req: CopyFunctionRequest, cb?: (error: string, rep: CopyFunctionResponse) => void): Promise<CopyFunctionResponse> {
        return await this.request("CopyFunction", req, cb);
    }

    /**
     * 该接口根据参数传入删除已有的触发方式。
     * @public
     */
    async DeleteTrigger(req: DeleteTriggerRequest, cb?: (error: string, rep: DeleteTriggerResponse) => void): Promise<DeleteTriggerResponse> {
        return await this.request("DeleteTrigger", req, cb);
    }

    /**
     * 返回一个函数下的全部别名，可以根据特定函数版本过滤。
     * @public
     */
    async ListAliases(req: ListAliasesRequest, cb?: (error: string, rep: ListAliasesResponse) => void): Promise<ListAliasesResponse> {
        return await this.request("ListAliases", req, cb);
    }

    /**
     * 该接口根据指定的日志查询条件返回函数运行日志。
     * @public
     */
    async GetFunctionLogs(req: GetFunctionLogsRequest, cb?: (error: string, rep: GetFunctionLogsResponse) => void): Promise<GetFunctionLogsResponse> {
        return await this.request("GetFunctionLogs", req, cb);
    }

    /**
     * 更新命名空间
     * @public
     */
    async UpdateNamespace(req: UpdateNamespaceRequest, cb?: (error: string, rep: UpdateNamespaceResponse) => void): Promise<UpdateNamespaceResponse> {
        return await this.request("UpdateNamespace", req, cb);
    }

    /**
     * 该接口用于运行函数。
     * @public
     */
    async Invoke(req: InvokeRequest, cb?: (error: string, rep: InvokeResponse) => void): Promise<InvokeResponse> {
        return await this.request("Invoke", req, cb);
    }

    /**
     * 该接口用于用户发布新版本函数。
     * @public
     */
    async PublishVersion(req: PublishVersionRequest, cb?: (error: string, rep: PublishVersionResponse) => void): Promise<PublishVersionResponse> {
        return await this.request("PublishVersion", req, cb);
    }

    /**
     * 删除指定层的指定版本，被删除的版本无法再关联到函数上，但不会影响正在引用这个层的函数。
     * @public
     */
    async DeleteLayerVersion(req: DeleteLayerVersionRequest, cb?: (error: string, rep: DeleteLayerVersionResponse) => void): Promise<DeleteLayerVersionResponse> {
        return await this.request("DeleteLayerVersion", req, cb);
    }

    /**
     * 该接口获取某个函数的详细信息，包括名称、代码、处理方法、关联触发器和超时时间等字段。
     * @public
     */
    async GetFunction(req: GetFunctionRequest, cb?: (error: string, rep: GetFunctionResponse) => void): Promise<GetFunctionResponse> {
        return await this.request("GetFunction", req, cb);
    }

    /**
     * 删除一个函数版本的别名
     * @public
     */
    async DeleteAlias(req: DeleteAliasRequest, cb?: (error: string, rep: DeleteAliasResponse) => void): Promise<DeleteAliasResponse> {
        return await this.request("DeleteAlias", req, cb);
    }

    /**
     * 该接口根据传入的参数创建命名空间。
     * @public
     */
    async DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse> {
        return await this.request("DeleteNamespace", req, cb);
    }

    /**
     * 为某个函数版本创建一个别名，您可以使用别名来标记特定的函数版本，如DEV/RELEASE版本，也可以随时修改别名指向的版本。
一个别名必须指向一个主版本，此外还可以同时指向一个附加版本。调用函数时指定特定的别名，则请求会被发送到别名指向的版本上，您可以配置请求发送到主版本和附加版本的比例。
     * @public
     */
    async CreateAlias(req: CreateAliasRequest, cb?: (error: string, rep: CreateAliasResponse) => void): Promise<CreateAliasResponse> {
        return await this.request("CreateAlias", req, cb);
    }

    /**
     * 该接口根据传入的参数查询函数的版本。
     * @public
     */
    async ListVersionByFunction(req: ListVersionByFunctionRequest, cb?: (error: string, rep: ListVersionByFunctionResponse) => void): Promise<ListVersionByFunctionResponse> {
        return await this.request("ListVersionByFunction", req, cb);
    }

    /**
     * 返回全部层的列表，其中包含了每个层最新版本的信息，可以通过适配运行时进行过滤。
     * @public
     */
    async ListLayers(req: ListLayersRequest, cb?: (error: string, rep: ListLayersResponse) => void): Promise<ListLayersResponse> {
        return await this.request("ListLayers", req, cb);
    }

    /**
     * 返回指定层的全部版本的信息
     * @public
     */
    async ListLayerVersions(req: ListLayerVersionsRequest, cb?: (error: string, rep: ListLayerVersionsResponse) => void): Promise<ListLayerVersionsResponse> {
        return await this.request("ListLayerVersions", req, cb);
    }

    /**
     * 该接口根据传入的查询参数返回相关函数信息。
     * @public
     */
    async ListFunctions(req: ListFunctionsRequest, cb?: (error: string, rep: ListFunctionsResponse) => void): Promise<ListFunctionsResponse> {
        return await this.request("ListFunctions", req, cb);
    }

    /**
     * 该接口根据传入参数更新函数配置。
     * @public
     */
    async UpdateFunctionConfiguration(req: UpdateFunctionConfigurationRequest, cb?: (error: string, rep: UpdateFunctionConfigurationResponse) => void): Promise<UpdateFunctionConfigurationResponse> {
        return await this.request("UpdateFunctionConfiguration", req, cb);
    }

    /**
     * 使用给定的zip文件或cos对象创建一个层的新版本，每次使用相同的层的名称调用本接口，都会生成一个新版本。
     * @public
     */
    async PublishLayerVersion(req: PublishLayerVersionRequest, cb?: (error: string, rep: PublishLayerVersionResponse) => void): Promise<PublishLayerVersionResponse> {
        return await this.request("PublishLayerVersion", req, cb);
    }

    /**
     * 该接口用于获取函数代码包的下载地址。
     * @public
     */
    async GetFunctionAddress(req: GetFunctionAddressRequest, cb?: (error: string, rep: GetFunctionAddressResponse) => void): Promise<GetFunctionAddressResponse> {
        return await this.request("GetFunctionAddress", req, cb);
    }

    /**
     * 获取别名的详细信息，包括名称、描述、版本、路由信息等。
     * @public
     */
    async GetAlias(req: GetAliasRequest, cb?: (error: string, rep: GetAliasResponse) => void): Promise<GetAliasResponse> {
        return await this.request("GetAlias", req, cb);
    }

    /**
     * 该接口根据传入参数创建新的函数。
     * @public
     */
    async CreateFunction(req: CreateFunctionRequest, cb?: (error: string, rep: CreateFunctionResponse) => void): Promise<CreateFunctionResponse> {
        return await this.request("CreateFunction", req, cb);
    }

    /**
     * 列出命名空间列表
     * @public
     */
    async ListNamespaces(req: ListNamespacesRequest, cb?: (error: string, rep: ListNamespacesResponse) => void): Promise<ListNamespacesResponse> {
        return await this.request("ListNamespaces", req, cb);
    }

    /**
     * 该接口根据传入参数更新函数代码。
     * @public
     */
    async UpdateFunctionCode(req: UpdateFunctionCodeRequest, cb?: (error: string, rep: UpdateFunctionCodeResponse) => void): Promise<UpdateFunctionCodeResponse> {
        return await this.request("UpdateFunctionCode", req, cb);
    }


}
