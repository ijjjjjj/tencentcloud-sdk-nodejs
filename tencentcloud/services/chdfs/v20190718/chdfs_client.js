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
 * chdfs client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("chdfs.tencentcloudapi.com", "2019-07-18", clientConfig);
    }
    /**
     * 查看挂载点详细信息。
     * @public
     */
    async DescribeMountPoint(req, cb) {
        return this.request("DescribeMountPoint", req, cb);
    }
    /**
     * 修改文件系统属性，仅限于创建成功的文件系统。
     * @public
     */
    async ModifyFileSystem(req, cb) {
        return this.request("ModifyFileSystem", req, cb);
    }
    /**
     * 删除文件系统，不允许删除非空文件系统。
     * @public
     */
    async DeleteFileSystem(req, cb) {
        return this.request("DeleteFileSystem", req, cb);
    }
    /**
     * 批量删除权限规则。
     * @public
     */
    async DeleteAccessRules(req, cb) {
        return this.request("DeleteAccessRules", req, cb);
    }
    /**
     * 查看文件系统详细信息。
     * @public
     */
    async DescribeFileSystem(req, cb) {
        return this.request("DescribeFileSystem", req, cb);
    }
    /**
     * 查看权限组列表。
     * @public
     */
    async DescribeAccessGroups(req, cb) {
        return this.request("DescribeAccessGroups", req, cb);
    }
    /**
     * 通过权限组ID查看权限规则列表。
     * @public
     */
    async DescribeAccessRules(req, cb) {
        return this.request("DescribeAccessRules", req, cb);
    }
    /**
     * 查看文件系统列表。
     * @public
     */
    async DescribeFileSystems(req, cb) {
        return this.request("DescribeFileSystems", req, cb);
    }
    /**
     * 创建文件系统挂载点，仅限于创建成功的文件系统。
     * @public
     */
    async CreateMountPoint(req, cb) {
        return this.request("CreateMountPoint", req, cb);
    }
    /**
     * 通过文件系统ID或者权限组ID查看挂载点列表。
     * @public
     */
    async DescribeMountPoints(req, cb) {
        return this.request("DescribeMountPoints", req, cb);
    }
    /**
     * 修改权限组属性。
     * @public
     */
    async ModifyAccessGroup(req, cb) {
        return this.request("ModifyAccessGroup", req, cb);
    }
    /**
     * 批量修改权限规则属性，需要指定权限规则ID。
     * @public
     */
    async ModifyAccessRules(req, cb) {
        return this.request("ModifyAccessRules", req, cb);
    }
    /**
     * 删除权限组。
     * @public
     */
    async DeleteAccessGroup(req, cb) {
        return this.request("DeleteAccessGroup", req, cb);
    }
    /**
     * 修改挂载点属性。
     * @public
     */
    async ModifyMountPoint(req, cb) {
        return this.request("ModifyMountPoint", req, cb);
    }
    /**
     * 创建文件系统（异步）。
     * @public
     */
    async CreateFileSystem(req, cb) {
        return this.request("CreateFileSystem", req, cb);
    }
    /**
     * 创建权限组。
     * @public
     */
    async CreateAccessGroup(req, cb) {
        return this.request("CreateAccessGroup", req, cb);
    }
    /**
     * 批量创建权限规则，权限规则ID和创建时间无需填写。
     * @public
     */
    async CreateAccessRules(req, cb) {
        return this.request("CreateAccessRules", req, cb);
    }
    /**
     * 删除挂载点。
     * @public
     */
    async DeleteMountPoint(req, cb) {
        return this.request("DeleteMountPoint", req, cb);
    }
}
exports.Client = Client;
