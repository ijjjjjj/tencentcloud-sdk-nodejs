"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
 * tag client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tag.tencentcloudapi.com", "2018-08-13", clientConfig);
    }
    /**
     * 根据标签键获取资源标签
     * @public
     */
    async DescribeResourceTagsByTagKeys(req, cb) {
        return this.request("DescribeResourceTagsByTagKeys", req, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     * @public
     */
    async DescribeTagValuesSeq(req, cb) {
        return this.request("DescribeTagValuesSeq", req, cb);
    }
    /**
     * 解绑多个资源关联的某个标签
     * @public
     */
    async DetachResourcesTag(req, cb) {
        return this.request("DetachResourcesTag", req, cb);
    }
    /**
     * 用于查询已建立的标签列表中的标签值。
     * @public
     */
    async DescribeTagValues(req, cb) {
        return this.request("DescribeTagValues", req, cb);
    }
    /**
     * 用于查询已有资源标签键值对
     * @public
     */
    async DescribeResourceTagsByResourceIds(req, cb) {
        return this.request("DescribeResourceTagsByResourceIds", req, cb);
    }
    /**
     * 查询资源关联标签
     * @public
     */
    async DescribeResourceTags(req, cb) {
        return this.request("DescribeResourceTags", req, cb);
    }
    /**
     * 本接口用于修改资源关联的所有标签
     * @public
     */
    async ModifyResourceTags(req, cb) {
        return this.request("ModifyResourceTags", req, cb);
    }
    /**
       * 用于查询已建立的标签列表中的标签键。
  
       * @public
       */
    async DescribeTagKeys(req, cb) {
        return this.request("DescribeTagKeys", req, cb);
    }
    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     * @public
     */
    async UpdateResourceTagValue(req, cb) {
        return this.request("UpdateResourceTagValue", req, cb);
    }
    /**
     * 本接口用于解除标签和资源的关联关系
     * @public
     */
    async DeleteResourceTag(req, cb) {
        return this.request("DeleteResourceTag", req, cb);
    }
    /**
     * 通过标签查询资源列表并集
     * @public
     */
    async DescribeResourcesByTagsUnion(req, cb) {
        return this.request("DescribeResourcesByTagsUnion", req, cb);
    }
    /**
     * 按顺序查看资源关联的标签
     * @public
     */
    async DescribeResourceTagsByResourceIdsSeq(req, cb) {
        return this.request("DescribeResourceTagsByResourceIdsSeq", req, cb);
    }
    /**
       * 用于查询已建立的标签列表。
  
       * @public
       */
    async DescribeTags(req, cb) {
        return this.request("DescribeTags", req, cb);
    }
    /**
       * 用于查询已建立的标签列表。
  
       * @public
       */
    async DescribeTagsSeq(req, cb) {
        return this.request("DescribeTagsSeq", req, cb);
    }
    /**
     * 通过标签查询资源列表
     * @public
     */
    async DescribeResourcesByTags(req, cb) {
        return this.request("DescribeResourcesByTags", req, cb);
    }
    /**
     * 本接口用于给标签关联资源
     * @public
     */
    async AddResourceTag(req, cb) {
        return this.request("AddResourceTag", req, cb);
    }
    /**
     * 本接口用于删除一对标签键和标签值
     * @public
     */
    async DeleteTag(req, cb) {
        return this.request("DeleteTag", req, cb);
    }
    /**
     * 给多个资源关联某个标签
     * @public
     */
    async AttachResourcesTag(req, cb) {
        return this.request("AttachResourcesTag", req, cb);
    }
    /**
     * 本接口用于创建一对标签键和标签值
     * @public
     */
    async CreateTag(req, cb) {
        return this.request("CreateTag", req, cb);
    }
    /**
     * 修改多个资源关联的某个标签键对应的标签值
     * @public
     */
    async ModifyResourcesTagValue(req, cb) {
        return this.request("ModifyResourcesTagValue", req, cb);
    }
}
exports.Client = Client;
