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
   ModifyClusterNameRequest,
   ModifyTableGroupNameResponse,
   DescribeTableTagsRequest,
   ModifyClusterPasswordResponse,
   DeleteClusterResponse,
   DeleteTableIndexResponse,
   TableRollbackResultNew,
   DescribeTablesResponse,
   DeleteClusterRequest,
   SelectedTableWithField,
   DeleteTableIndexRequest,
   DescribeTasksResponse,
   DeleteTablesRequest,
   DescribeRegionsResponse,
   SelectedTableInfoNew,
   ModifyClusterPasswordRequest,
   DeleteTableGroupRequest,
   TagsInfoOfTableGroup,
   CreateTableGroupRequest,
   TagsInfoOfTable,
   DeleteIdlFilesResponse,
   FieldInfo,
   ModifyTableTagsRequest,
   IdlFileInfo,
   DescribeTasksRequest,
   RecoverRecycleTablesResponse,
   ClearTablesResponse,
   DescribeIdlFileInfosRequest,
   ClusterInfo,
   DescribeTablesInRecycleResponse,
   ModifyTablesResponse,
   ModifyTableGroupTagsResponse,
   ModifyClusterTagsRequest,
   DescribeTableGroupTagsResponse,
   SetTableIndexRequest,
   ModifyTableQuotasResponse,
   RecoverRecycleTablesRequest,
   ModifyTableGroupNameRequest,
   DescribeTableGroupsRequest,
   ModifyTableTagsResponse,
   ModifyTableGroupTagsRequest,
   ModifyTableQuotasRequest,
   CompareIdlFilesResponse,
   CreateTablesResponse,
   DescribeRegionsRequest,
   DescribeClustersResponse,
   ModifyClusterTagsResponse,
   DescribeClusterTagsResponse,
   TagsInfoOfCluster,
   SetTableIndexResponse,
   ClearTablesRequest,
   DescribeIdlFileInfosResponse,
   TagInfoUnit,
   CreateClusterResponse,
   DescribeClustersRequest,
   TableInfoNew,
   TaskInfoNew,
   DeleteIdlFilesRequest,
   CreateBackupResponse,
   VerifyIdlFilesResponse,
   DescribeTableTagsResponse,
   CreateTableGroupResponse,
   VerifyIdlFilesRequest,
   ModifyClusterNameResponse,
   ModifyTablesRequest,
   DescribeTableGroupTagsRequest,
   DescribeTablesInRecycleRequest,
   DescribeTablesRequest,
   ModifyTableMemosRequest,
   DescribeUinInWhitelistResponse,
   ParsedTableInfoNew,
   RollbackTablesResponse,
   CreateBackupRequest,
   CreateClusterRequest,
   TableResultNew,
   CreateTablesRequest,
   DescribeClusterTagsRequest,
   RegionInfo,
   DescribeTableGroupsResponse,
   DeleteTableGroupResponse,
   RollbackTablesRequest,
   DescribeUinInWhitelistRequest,
   CompareIdlFilesRequest,
   IdlFileInfoWithoutContent,
   ModifyTableMemosResponse,
   Filter,
   DeleteTablesResponse,
   ErrorInfo,
   TableGroupInfo,

} from "./tcaplusdb_models"

/**
 * tcaplusdb client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("tcaplusdb.tencentcloudapi.com", "2019-08-23", clientConfig);
    }
    
    /**
     * 删除表格的分布式索引
     * @public
     */
    async DeleteTableIndex(req: DeleteTableIndexRequest, cb?: (error: string, rep: DeleteTableIndexResponse) => void): Promise<DeleteTableIndexResponse> {
        return await this.request("DeleteTableIndex", req, cb);
    }

    /**
     * 获取表格标签
     * @public
     */
    async DescribeTableTags(req: DescribeTableTagsRequest, cb?: (error: string, rep: DescribeTableTagsResponse) => void): Promise<DescribeTableTagsResponse> {
        return await this.request("DescribeTableTags", req, cb);
    }

    /**
     * 修改表格标签
     * @public
     */
    async ModifyTableTags(req: ModifyTableTagsRequest, cb?: (error: string, rep: ModifyTableTagsResponse) => void): Promise<ModifyTableTagsResponse> {
        return await this.request("ModifyTableTags", req, cb);
    }

    /**
     * 本接口用于创建TcaplusDB集群
     * @public
     */
    async CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse> {
        return await this.request("CreateCluster", req, cb);
    }

    /**
     * 查询本用户是否在白名单中，控制是否能创建TDR类型的APP或表
     * @public
     */
    async DescribeUinInWhitelist(req: DescribeUinInWhitelistRequest, cb?: (error: string, rep: DescribeUinInWhitelistResponse) => void): Promise<DescribeUinInWhitelistResponse> {
        return await this.request("DescribeUinInWhitelist", req, cb);
    }

    /**
     * 查询回收站中的表详情
     * @public
     */
    async DescribeTablesInRecycle(req: DescribeTablesInRecycleRequest, cb?: (error: string, rep: DescribeTablesInRecycleResponse) => void): Promise<DescribeTablesInRecycleResponse> {
        return await this.request("DescribeTablesInRecycle", req, cb);
    }

    /**
     * 表格数据回档
     * @public
     */
    async RollbackTables(req: RollbackTablesRequest, cb?: (error: string, rep: RollbackTablesResponse) => void): Promise<RollbackTablesResponse> {
        return await this.request("RollbackTables", req, cb);
    }

    /**
     * 修改指定的集群名称
     * @public
     */
    async ModifyClusterName(req: ModifyClusterNameRequest, cb?: (error: string, rep: ModifyClusterNameResponse) => void): Promise<ModifyClusterNameResponse> {
        return await this.request("ModifyClusterName", req, cb);
    }

    /**
     * 删除TcaplusDB集群，必须在集群所属所有资源（包括表格组，表）都已经释放的情况下才会成功。
     * @public
     */
    async DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse> {
        return await this.request("DeleteCluster", req, cb);
    }

    /**
     * 修改指定集群的密码，后台将在旧密码失效之前同时支持TcaplusDB SDK使用旧密码和新密码访问数据库。在旧密码失效之前不能提交新的密码修改请求，在旧密码失效之后不能提交修改旧密码过期时间的请求。
     * @public
     */
    async ModifyClusterPassword(req: ModifyClusterPasswordRequest, cb?: (error: string, rep: ModifyClusterPasswordResponse) => void): Promise<ModifyClusterPasswordResponse> {
        return await this.request("ModifyClusterPassword", req, cb);
    }

    /**
     * 指定集群ID和待删除IDL文件的信息，删除目标文件，如果文件正在被表关联则删除失败。
     * @public
     */
    async DeleteIdlFiles(req: DeleteIdlFilesRequest, cb?: (error: string, rep: DeleteIdlFilesResponse) => void): Promise<DeleteIdlFilesResponse> {
        return await this.request("DeleteIdlFiles", req, cb);
    }

    /**
     * 恢复回收站中，用户自行删除的表。对欠费待释放的表无效。
     * @public
     */
    async RecoverRecycleTables(req: RecoverRecycleTablesRequest, cb?: (error: string, rep: RecoverRecycleTablesResponse) => void): Promise<RecoverRecycleTablesResponse> {
        return await this.request("RecoverRecycleTables", req, cb);
    }

    /**
     * 设置表格分布式索引
     * @public
     */
    async SetTableIndex(req: SetTableIndexRequest, cb?: (error: string, rep: SetTableIndexResponse) => void): Promise<SetTableIndexResponse> {
        return await this.request("SetTableIndex", req, cb);
    }

    /**
     * 用户创建备份任务
     * @public
     */
    async CreateBackup(req: CreateBackupRequest, cb?: (error: string, rep: CreateBackupResponse) => void): Promise<CreateBackupResponse> {
        return await this.request("CreateBackup", req, cb);
    }

    /**
     * 根据选择的IDL文件列表，批量创建表格
     * @public
     */
    async CreateTables(req: CreateTablesRequest, cb?: (error: string, rep: CreateTablesResponse) => void): Promise<CreateTablesResponse> {
        return await this.request("CreateTables", req, cb);
    }

    /**
     * 表格扩缩容
     * @public
     */
    async ModifyTableQuotas(req: ModifyTableQuotasRequest, cb?: (error: string, rep: ModifyTableQuotasResponse) => void): Promise<ModifyTableQuotasResponse> {
        return await this.request("ModifyTableQuotas", req, cb);
    }

    /**
     * 查询TcaplusDB集群列表，包含集群详细信息。
     * @public
     */
    async DescribeClusters(req: DescribeClustersRequest, cb?: (error: string, rep: DescribeClustersResponse) => void): Promise<DescribeClustersResponse> {
        return await this.request("DescribeClusters", req, cb);
    }

    /**
     * 删除表格组
     * @public
     */
    async DeleteTableGroup(req: DeleteTableGroupRequest, cb?: (error: string, rep: DeleteTableGroupResponse) => void): Promise<DeleteTableGroupResponse> {
        return await this.request("DeleteTableGroup", req, cb);
    }

    /**
     * 修改TcaplusDB表格组名称
     * @public
     */
    async ModifyTableGroupName(req: ModifyTableGroupNameRequest, cb?: (error: string, rep: ModifyTableGroupNameResponse) => void): Promise<ModifyTableGroupNameResponse> {
        return await this.request("ModifyTableGroupName", req, cb);
    }

    /**
     * 在TcaplusDB集群下创建表格组
     * @public
     */
    async CreateTableGroup(req: CreateTableGroupRequest, cb?: (error: string, rep: CreateTableGroupResponse) => void): Promise<CreateTableGroupResponse> {
        return await this.request("CreateTableGroup", req, cb);
    }

    /**
     * 查询TcaplusDB服务支持的地域列表
     * @public
     */
    async DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse> {
        return await this.request("DescribeRegions", req, cb);
    }

    /**
     * 查询任务列表
     * @public
     */
    async DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse> {
        return await this.request("DescribeTasks", req, cb);
    }

    /**
     * 修改集群标签
     * @public
     */
    async ModifyClusterTags(req: ModifyClusterTagsRequest, cb?: (error: string, rep: ModifyClusterTagsResponse) => void): Promise<ModifyClusterTagsResponse> {
        return await this.request("ModifyClusterTags", req, cb);
    }

    /**
     * 修改表格组标签
     * @public
     */
    async ModifyTableGroupTags(req: ModifyTableGroupTagsRequest, cb?: (error: string, rep: ModifyTableGroupTagsResponse) => void): Promise<ModifyTableGroupTagsResponse> {
        return await this.request("ModifyTableGroupTags", req, cb);
    }

    /**
     * 获取表格组关联的标签列表
     * @public
     */
    async DescribeTableGroupTags(req: DescribeTableGroupTagsRequest, cb?: (error: string, rep: DescribeTableGroupTagsResponse) => void): Promise<DescribeTableGroupTagsResponse> {
        return await this.request("DescribeTableGroupTags", req, cb);
    }

    /**
     * 查询表格组列表
     * @public
     */
    async DescribeTableGroups(req: DescribeTableGroupsRequest, cb?: (error: string, rep: DescribeTableGroupsResponse) => void): Promise<DescribeTableGroupsResponse> {
        return await this.request("DescribeTableGroups", req, cb);
    }

    /**
     * 选中目标表格，上传并校验改表文件，返回是否允许修改表格结构的结果。
     * @public
     */
    async CompareIdlFiles(req: CompareIdlFilesRequest, cb?: (error: string, rep: CompareIdlFilesResponse) => void): Promise<CompareIdlFilesResponse> {
        return await this.request("CompareIdlFiles", req, cb);
    }

    /**
     * 查询表描述文件详情
     * @public
     */
    async DescribeIdlFileInfos(req: DescribeIdlFileInfosRequest, cb?: (error: string, rep: DescribeIdlFileInfosResponse) => void): Promise<DescribeIdlFileInfosResponse> {
        return await this.request("DescribeIdlFileInfos", req, cb);
    }

    /**
     * 删除指定的表,第一次调用此接口代表将表移动至回收站，再次调用代表将此表格从回收站中彻底删除。
     * @public
     */
    async DeleteTables(req: DeleteTablesRequest, cb?: (error: string, rep: DeleteTablesResponse) => void): Promise<DeleteTablesResponse> {
        return await this.request("DeleteTables", req, cb);
    }

    /**
     * 修改表备注信息
     * @public
     */
    async ModifyTableMemos(req: ModifyTableMemosRequest, cb?: (error: string, rep: ModifyTableMemosResponse) => void): Promise<ModifyTableMemosResponse> {
        return await this.request("ModifyTableMemos", req, cb);
    }

    /**
     * 上传并校验创建表格文件，返回校验合法的表格定义
     * @public
     */
    async VerifyIdlFiles(req: VerifyIdlFilesRequest, cb?: (error: string, rep: VerifyIdlFilesResponse) => void): Promise<VerifyIdlFilesResponse> {
        return await this.request("VerifyIdlFiles", req, cb);
    }

    /**
     * 根据给定的表信息，清除表数据。
     * @public
     */
    async ClearTables(req: ClearTablesRequest, cb?: (error: string, rep: ClearTablesResponse) => void): Promise<ClearTablesResponse> {
        return await this.request("ClearTables", req, cb);
    }

    /**
     * 根据用户选定的表定义IDL文件，批量修改指定的表
     * @public
     */
    async ModifyTables(req: ModifyTablesRequest, cb?: (error: string, rep: ModifyTablesResponse) => void): Promise<ModifyTablesResponse> {
        return await this.request("ModifyTables", req, cb);
    }

    /**
     * 查询表详情
     * @public
     */
    async DescribeTables(req: DescribeTablesRequest, cb?: (error: string, rep: DescribeTablesResponse) => void): Promise<DescribeTablesResponse> {
        return await this.request("DescribeTables", req, cb);
    }

    /**
     * 获取集群关联的标签列表
     * @public
     */
    async DescribeClusterTags(req: DescribeClusterTagsRequest, cb?: (error: string, rep: DescribeClusterTagsResponse) => void): Promise<DescribeClusterTagsResponse> {
        return await this.request("DescribeClusterTags", req, cb);
    }


}
