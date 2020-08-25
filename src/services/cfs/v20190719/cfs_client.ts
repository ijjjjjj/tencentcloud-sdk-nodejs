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
   DeleteCfsFileSystemRequest,
   DeleteCfsFileSystemResponse,
   UpdateCfsRuleRequest,
   DeleteMountTargetRequest,
   CreateCfsRuleRequest,
   PGroup,
   DescribeAvailableZoneInfoResponse,
   UpdateCfsFileSystemNameResponse,
   UpdateCfsFileSystemNameRequest,
   DescribeCfsPGroupsResponse,
   UpdateCfsPGroupRequest,
   DeleteMountTargetResponse,
   DescribeMountTargetsResponse,
   DeleteCfsRuleResponse,
   DeleteCfsRuleRequest,
   MountInfo,
   UpdateCfsRuleResponse,
   DescribeCfsFileSystemsResponse,
   CreateCfsFileSystemResponse,
   FileSystemInfo,
   TagInfo,
   DescribeCfsPGroupsRequest,
   AvailableZone,
   CreateCfsPGroupRequest,
   DeleteCfsPGroupResponse,
   UpdateCfsFileSystemSizeLimitResponse,
   DescribeAvailableZoneInfoRequest,
   AvailableRegion,
   CreateCfsFileSystemRequest,
   DescribeMountTargetsRequest,
   CreateCfsPGroupResponse,
   SignUpCfsServiceRequest,
   DescribeCfsServiceStatusRequest,
   PGroupInfo,
   SignUpCfsServiceResponse,
   UpdateCfsFileSystemPGroupRequest,
   DescribeCfsServiceStatusResponse,
   CreateCfsRuleResponse,
   AvailableProtoStatus,
   DescribeCfsRulesRequest,
   PGroupRuleInfo,
   DeleteCfsPGroupRequest,
   AvailableType,
   UpdateCfsFileSystemSizeLimitRequest,
   DescribeCfsFileSystemsRequest,
   UpdateCfsPGroupResponse,
   DescribeCfsRulesResponse,
   UpdateCfsFileSystemPGroupResponse,

} from "./cfs_models"

/**
 * cfs client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("cfs.tencentcloudapi.com", "2019-07-19", clientConfig);
    }
    
    /**
     * 用于添加新文件系统
     * @public
     */
    async CreateCfsFileSystem(req: CreateCfsFileSystemRequest, cb?: (error: string, rep: CreateCfsFileSystemResponse) => void): Promise<CreateCfsFileSystemResponse> {
        return await this.request("CreateCfsFileSystem", req, cb);
    }

    /**
     * 本接口（DescribeCfsPGroups）用于查询权限组列表。
     * @public
     */
    async DescribeCfsPGroups(req: DescribeCfsPGroupsRequest, cb?: (error: string, rep: DescribeCfsPGroupsResponse) => void): Promise<DescribeCfsPGroupsResponse> {
        return await this.request("DescribeCfsPGroups", req, cb);
    }

    /**
     * 本接口（DescribeCfsRules）用于查询权限组规则列表。
     * @public
     */
    async DescribeCfsRules(req: DescribeCfsRulesRequest, cb?: (error: string, rep: DescribeCfsRulesResponse) => void): Promise<DescribeCfsRulesResponse> {
        return await this.request("DescribeCfsRules", req, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemPGroup）用于更新文件系统所使用的权限组
     * @public
     */
    async UpdateCfsFileSystemPGroup(req: UpdateCfsFileSystemPGroupRequest, cb?: (error: string, rep: UpdateCfsFileSystemPGroupResponse) => void): Promise<UpdateCfsFileSystemPGroupResponse> {
        return await this.request("UpdateCfsFileSystemPGroup", req, cb);
    }

    /**
     * 本接口（DescribeAvailableZoneInfo）用于查询区域的可用情况。
     * @public
     */
    async DescribeAvailableZoneInfo(req: DescribeAvailableZoneInfoRequest, cb?: (error: string, rep: DescribeAvailableZoneInfoResponse) => void): Promise<DescribeAvailableZoneInfoResponse> {
        return await this.request("DescribeAvailableZoneInfo", req, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemName）用于更新文件系统名
     * @public
     */
    async UpdateCfsFileSystemName(req: UpdateCfsFileSystemNameRequest, cb?: (error: string, rep: UpdateCfsFileSystemNameResponse) => void): Promise<UpdateCfsFileSystemNameResponse> {
        return await this.request("UpdateCfsFileSystemName", req, cb);
    }

    /**
     * 用于删除文件系统
     * @public
     */
    async DeleteCfsFileSystem(req: DeleteCfsFileSystemRequest, cb?: (error: string, rep: DeleteCfsFileSystemResponse) => void): Promise<DeleteCfsFileSystemResponse> {
        return await this.request("DeleteCfsFileSystem", req, cb);
    }

    /**
     * 本接口（UpdateCfsFileSystemSizeLimit）用于更新文件系统存储容量限制。
     * @public
     */
    async UpdateCfsFileSystemSizeLimit(req: UpdateCfsFileSystemSizeLimitRequest, cb?: (error: string, rep: UpdateCfsFileSystemSizeLimitResponse) => void): Promise<UpdateCfsFileSystemSizeLimitResponse> {
        return await this.request("UpdateCfsFileSystemSizeLimit", req, cb);
    }

    /**
     * 本接口（CreateCfsPGroup）用于创建权限组
     * @public
     */
    async CreateCfsPGroup(req: CreateCfsPGroupRequest, cb?: (error: string, rep: CreateCfsPGroupResponse) => void): Promise<CreateCfsPGroupResponse> {
        return await this.request("CreateCfsPGroup", req, cb);
    }

    /**
     * 本接口（UpdateCfsRule）用于更新权限规则。
     * @public
     */
    async UpdateCfsRule(req: UpdateCfsRuleRequest, cb?: (error: string, rep: UpdateCfsRuleResponse) => void): Promise<UpdateCfsRuleResponse> {
        return await this.request("UpdateCfsRule", req, cb);
    }

    /**
     * 本接口（DescribeCfsServiceStatus）用于查询用户使用CFS的服务状态。
     * @public
     */
    async DescribeCfsServiceStatus(req: DescribeCfsServiceStatusRequest, cb?: (error: string, rep: DescribeCfsServiceStatusResponse) => void): Promise<DescribeCfsServiceStatusResponse> {
        return await this.request("DescribeCfsServiceStatus", req, cb);
    }

    /**
     * 本接口（DescribeCfsFileSystems）用于查询文件系统
     * @public
     */
    async DescribeCfsFileSystems(req: DescribeCfsFileSystemsRequest, cb?: (error: string, rep: DescribeCfsFileSystemsResponse) => void): Promise<DescribeCfsFileSystemsResponse> {
        return await this.request("DescribeCfsFileSystems", req, cb);
    }

    /**
     * 本接口（SignUpCfsService）用于开通CFS服务。
     * @public
     */
    async SignUpCfsService(req: SignUpCfsServiceRequest, cb?: (error: string, rep: SignUpCfsServiceResponse) => void): Promise<SignUpCfsServiceResponse> {
        return await this.request("SignUpCfsService", req, cb);
    }

    /**
     * 本接口（CreateCfsRule）用于创建权限组规则。
     * @public
     */
    async CreateCfsRule(req: CreateCfsRuleRequest, cb?: (error: string, rep: CreateCfsRuleResponse) => void): Promise<CreateCfsRuleResponse> {
        return await this.request("CreateCfsRule", req, cb);
    }

    /**
     * 本接口（DeleteCfsPGroup）用于删除权限组。
     * @public
     */
    async DeleteCfsPGroup(req: DeleteCfsPGroupRequest, cb?: (error: string, rep: DeleteCfsPGroupResponse) => void): Promise<DeleteCfsPGroupResponse> {
        return await this.request("DeleteCfsPGroup", req, cb);
    }

    /**
     * 本接口（DescribeMountTargets）用于查询文件系统挂载点信息
     * @public
     */
    async DescribeMountTargets(req: DescribeMountTargetsRequest, cb?: (error: string, rep: DescribeMountTargetsResponse) => void): Promise<DescribeMountTargetsResponse> {
        return await this.request("DescribeMountTargets", req, cb);
    }

    /**
     * 本接口（UpdateCfsPGroup）更新权限组信息。
     * @public
     */
    async UpdateCfsPGroup(req: UpdateCfsPGroupRequest, cb?: (error: string, rep: UpdateCfsPGroupResponse) => void): Promise<UpdateCfsPGroupResponse> {
        return await this.request("UpdateCfsPGroup", req, cb);
    }

    /**
     * 本接口（DeleteCfsRule）用于删除权限组规则。
     * @public
     */
    async DeleteCfsRule(req: DeleteCfsRuleRequest, cb?: (error: string, rep: DeleteCfsRuleResponse) => void): Promise<DeleteCfsRuleResponse> {
        return await this.request("DeleteCfsRule", req, cb);
    }

    /**
     * 本接口（DeleteMountTarget）用于删除挂载点
     * @public
     */
    async DeleteMountTarget(req: DeleteMountTargetRequest, cb?: (error: string, rep: DeleteMountTargetResponse) => void): Promise<DeleteMountTargetResponse> {
        return await this.request("DeleteMountTarget", req, cb);
    }


}
