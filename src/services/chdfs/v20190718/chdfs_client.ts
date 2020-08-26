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
  CreateFileSystemResponse,
  AccessRule,
  DescribeFileSystemResponse,
  AccessGroup,
  ModifyFileSystemResponse,
  ModifyAccessGroupRequest,
  DescribeFileSystemsResponse,
  DescribeFileSystemRequest,
  CreateMountPointRequest,
  DeleteAccessGroupRequest,
  DeleteFileSystemRequest,
  DescribeMountPointRequest,
  DescribeAccessGroupsRequest,
  DeleteAccessGroupResponse,
  DeleteMountPointResponse,
  CreateMountPointResponse,
  CreateFileSystemRequest,
  ModifyFileSystemRequest,
  DescribeMountPointsResponse,
  DeleteMountPointRequest,
  DeleteFileSystemResponse,
  Filter,
  CreateAccessGroupResponse,
  FileSystem,
  ModifyMountPointRequest,
  DescribeAccessGroupsResponse,
  CreateAccessRulesResponse,
  DeleteAccessRulesRequest,
  DescribeAccessRulesResponse,
  DescribeFileSystemsRequest,
  CreateAccessRulesRequest,
  DeleteAccessRulesResponse,
  MountPoint,
  DescribeAccessRulesRequest,
  ModifyAccessRulesResponse,
  DescribeMountPointsRequest,
  ModifyAccessGroupResponse,
  ModifyMountPointResponse,
  ModifyAccessRulesRequest,
  CreateAccessGroupRequest,
  DescribeMountPointResponse,
} from "./chdfs_models"

/**
 * chdfs client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("chdfs.tencentcloudapi.com", "2019-07-18", clientConfig)
  }

  /**
   * 查看挂载点详细信息。
   * @public
   */
  async DescribeMountPoint(
    req: DescribeMountPointRequest,
    cb?: (error: string, rep: DescribeMountPointResponse) => void
  ): Promise<DescribeMountPointResponse> {
    return this.request("DescribeMountPoint", req, cb)
  }

  /**
   * 修改文件系统属性，仅限于创建成功的文件系统。
   * @public
   */
  async ModifyFileSystem(
    req: ModifyFileSystemRequest,
    cb?: (error: string, rep: ModifyFileSystemResponse) => void
  ): Promise<ModifyFileSystemResponse> {
    return this.request("ModifyFileSystem", req, cb)
  }

  /**
   * 删除文件系统，不允许删除非空文件系统。
   * @public
   */
  async DeleteFileSystem(
    req: DeleteFileSystemRequest,
    cb?: (error: string, rep: DeleteFileSystemResponse) => void
  ): Promise<DeleteFileSystemResponse> {
    return this.request("DeleteFileSystem", req, cb)
  }

  /**
   * 批量删除权限规则。
   * @public
   */
  async DeleteAccessRules(
    req: DeleteAccessRulesRequest,
    cb?: (error: string, rep: DeleteAccessRulesResponse) => void
  ): Promise<DeleteAccessRulesResponse> {
    return this.request("DeleteAccessRules", req, cb)
  }

  /**
   * 查看文件系统详细信息。
   * @public
   */
  async DescribeFileSystem(
    req: DescribeFileSystemRequest,
    cb?: (error: string, rep: DescribeFileSystemResponse) => void
  ): Promise<DescribeFileSystemResponse> {
    return this.request("DescribeFileSystem", req, cb)
  }

  /**
   * 查看权限组列表。
   * @public
   */
  async DescribeAccessGroups(
    req: DescribeAccessGroupsRequest,
    cb?: (error: string, rep: DescribeAccessGroupsResponse) => void
  ): Promise<DescribeAccessGroupsResponse> {
    return this.request("DescribeAccessGroups", req, cb)
  }

  /**
   * 通过权限组ID查看权限规则列表。
   * @public
   */
  async DescribeAccessRules(
    req: DescribeAccessRulesRequest,
    cb?: (error: string, rep: DescribeAccessRulesResponse) => void
  ): Promise<DescribeAccessRulesResponse> {
    return this.request("DescribeAccessRules", req, cb)
  }

  /**
   * 查看文件系统列表。
   * @public
   */
  async DescribeFileSystems(
    req: DescribeFileSystemsRequest,
    cb?: (error: string, rep: DescribeFileSystemsResponse) => void
  ): Promise<DescribeFileSystemsResponse> {
    return this.request("DescribeFileSystems", req, cb)
  }

  /**
   * 创建文件系统挂载点，仅限于创建成功的文件系统。
   * @public
   */
  async CreateMountPoint(
    req: CreateMountPointRequest,
    cb?: (error: string, rep: CreateMountPointResponse) => void
  ): Promise<CreateMountPointResponse> {
    return this.request("CreateMountPoint", req, cb)
  }

  /**
   * 通过文件系统ID或者权限组ID查看挂载点列表。
   * @public
   */
  async DescribeMountPoints(
    req: DescribeMountPointsRequest,
    cb?: (error: string, rep: DescribeMountPointsResponse) => void
  ): Promise<DescribeMountPointsResponse> {
    return this.request("DescribeMountPoints", req, cb)
  }

  /**
   * 修改权限组属性。
   * @public
   */
  async ModifyAccessGroup(
    req: ModifyAccessGroupRequest,
    cb?: (error: string, rep: ModifyAccessGroupResponse) => void
  ): Promise<ModifyAccessGroupResponse> {
    return this.request("ModifyAccessGroup", req, cb)
  }

  /**
   * 批量修改权限规则属性，需要指定权限规则ID。
   * @public
   */
  async ModifyAccessRules(
    req: ModifyAccessRulesRequest,
    cb?: (error: string, rep: ModifyAccessRulesResponse) => void
  ): Promise<ModifyAccessRulesResponse> {
    return this.request("ModifyAccessRules", req, cb)
  }

  /**
   * 删除权限组。
   * @public
   */
  async DeleteAccessGroup(
    req: DeleteAccessGroupRequest,
    cb?: (error: string, rep: DeleteAccessGroupResponse) => void
  ): Promise<DeleteAccessGroupResponse> {
    return this.request("DeleteAccessGroup", req, cb)
  }

  /**
   * 修改挂载点属性。
   * @public
   */
  async ModifyMountPoint(
    req: ModifyMountPointRequest,
    cb?: (error: string, rep: ModifyMountPointResponse) => void
  ): Promise<ModifyMountPointResponse> {
    return this.request("ModifyMountPoint", req, cb)
  }

  /**
   * 创建文件系统（异步）。
   * @public
   */
  async CreateFileSystem(
    req: CreateFileSystemRequest,
    cb?: (error: string, rep: CreateFileSystemResponse) => void
  ): Promise<CreateFileSystemResponse> {
    return this.request("CreateFileSystem", req, cb)
  }

  /**
   * 创建权限组。
   * @public
   */
  async CreateAccessGroup(
    req: CreateAccessGroupRequest,
    cb?: (error: string, rep: CreateAccessGroupResponse) => void
  ): Promise<CreateAccessGroupResponse> {
    return this.request("CreateAccessGroup", req, cb)
  }

  /**
   * 批量创建权限规则，权限规则ID和创建时间无需填写。
   * @public
   */
  async CreateAccessRules(
    req: CreateAccessRulesRequest,
    cb?: (error: string, rep: CreateAccessRulesResponse) => void
  ): Promise<CreateAccessRulesResponse> {
    return this.request("CreateAccessRules", req, cb)
  }

  /**
   * 删除挂载点。
   * @public
   */
  async DeleteMountPoint(
    req: DeleteMountPointRequest,
    cb?: (error: string, rep: DeleteMountPointResponse) => void
  ): Promise<DeleteMountPointResponse> {
    return this.request("DeleteMountPoint", req, cb)
  }
}
