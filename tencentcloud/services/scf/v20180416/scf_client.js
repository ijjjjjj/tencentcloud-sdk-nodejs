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
 * scf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("scf.tencentcloudapi.com", "2018-04-16", clientConfig);
    }
    /**
     * 该接口根据传入参数删除函数。
     * @public
     */
    async DeleteFunction(req, cb) {
        return this.request("DeleteFunction", req, cb);
    }
    /**
     * 更新别名的配置
     * @public
     */
    async UpdateAlias(req, cb) {
        return this.request("UpdateAlias", req, cb);
    }
    /**
     * 获取函数触发器列表
     * @public
     */
    async ListTriggers(req, cb) {
        return this.request("ListTriggers", req, cb);
    }
    /**
     * 获取层版本详细信息，包括用于下载层中文件的链接。
     * @public
     */
    async GetLayerVersion(req, cb) {
        return this.request("GetLayerVersion", req, cb);
    }
    /**
     * 该接口根据参数输入设置新的触发方式。
     * @public
     */
    async CreateTrigger(req, cb) {
        return this.request("CreateTrigger", req, cb);
    }
    /**
     * 该接口根据传入的参数创建命名空间。
     * @public
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
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
    async CopyFunction(req, cb) {
        return this.request("CopyFunction", req, cb);
    }
    /**
     * 该接口根据参数传入删除已有的触发方式。
     * @public
     */
    async DeleteTrigger(req, cb) {
        return this.request("DeleteTrigger", req, cb);
    }
    /**
     * 返回一个函数下的全部别名，可以根据特定函数版本过滤。
     * @public
     */
    async ListAliases(req, cb) {
        return this.request("ListAliases", req, cb);
    }
    /**
     * 该接口根据指定的日志查询条件返回函数运行日志。
     * @public
     */
    async GetFunctionLogs(req, cb) {
        return this.request("GetFunctionLogs", req, cb);
    }
    /**
     * 更新命名空间
     * @public
     */
    async UpdateNamespace(req, cb) {
        return this.request("UpdateNamespace", req, cb);
    }
    /**
     * 该接口用于运行函数。
     * @public
     */
    async Invoke(req, cb) {
        return this.request("Invoke", req, cb);
    }
    /**
     * 该接口用于用户发布新版本函数。
     * @public
     */
    async PublishVersion(req, cb) {
        return this.request("PublishVersion", req, cb);
    }
    /**
     * 删除指定层的指定版本，被删除的版本无法再关联到函数上，但不会影响正在引用这个层的函数。
     * @public
     */
    async DeleteLayerVersion(req, cb) {
        return this.request("DeleteLayerVersion", req, cb);
    }
    /**
     * 该接口获取某个函数的详细信息，包括名称、代码、处理方法、关联触发器和超时时间等字段。
     * @public
     */
    async GetFunction(req, cb) {
        return this.request("GetFunction", req, cb);
    }
    /**
     * 删除一个函数版本的别名
     * @public
     */
    async DeleteAlias(req, cb) {
        return this.request("DeleteAlias", req, cb);
    }
    /**
     * 该接口根据传入的参数创建命名空间。
     * @public
     */
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    /**
       * 为某个函数版本创建一个别名，您可以使用别名来标记特定的函数版本，如DEV/RELEASE版本，也可以随时修改别名指向的版本。
  一个别名必须指向一个主版本，此外还可以同时指向一个附加版本。调用函数时指定特定的别名，则请求会被发送到别名指向的版本上，您可以配置请求发送到主版本和附加版本的比例。
       * @public
       */
    async CreateAlias(req, cb) {
        return this.request("CreateAlias", req, cb);
    }
    /**
     * 该接口根据传入的参数查询函数的版本。
     * @public
     */
    async ListVersionByFunction(req, cb) {
        return this.request("ListVersionByFunction", req, cb);
    }
    /**
     * 返回全部层的列表，其中包含了每个层最新版本的信息，可以通过适配运行时进行过滤。
     * @public
     */
    async ListLayers(req, cb) {
        return this.request("ListLayers", req, cb);
    }
    /**
     * 返回指定层的全部版本的信息
     * @public
     */
    async ListLayerVersions(req, cb) {
        return this.request("ListLayerVersions", req, cb);
    }
    /**
     * 该接口根据传入的查询参数返回相关函数信息。
     * @public
     */
    async ListFunctions(req, cb) {
        return this.request("ListFunctions", req, cb);
    }
    /**
     * 该接口根据传入参数更新函数配置。
     * @public
     */
    async UpdateFunctionConfiguration(req, cb) {
        return this.request("UpdateFunctionConfiguration", req, cb);
    }
    /**
     * 使用给定的zip文件或cos对象创建一个层的新版本，每次使用相同的层的名称调用本接口，都会生成一个新版本。
     * @public
     */
    async PublishLayerVersion(req, cb) {
        return this.request("PublishLayerVersion", req, cb);
    }
    /**
     * 该接口用于获取函数代码包的下载地址。
     * @public
     */
    async GetFunctionAddress(req, cb) {
        return this.request("GetFunctionAddress", req, cb);
    }
    /**
     * 获取别名的详细信息，包括名称、描述、版本、路由信息等。
     * @public
     */
    async GetAlias(req, cb) {
        return this.request("GetAlias", req, cb);
    }
    /**
     * 该接口根据传入参数创建新的函数。
     * @public
     */
    async CreateFunction(req, cb) {
        return this.request("CreateFunction", req, cb);
    }
    /**
     * 列出命名空间列表
     * @public
     */
    async ListNamespaces(req, cb) {
        return this.request("ListNamespaces", req, cb);
    }
    /**
     * 该接口根据传入参数更新函数代码。
     * @public
     */
    async UpdateFunctionCode(req, cb) {
        return this.request("UpdateFunctionCode", req, cb);
    }
}
exports.Client = Client;