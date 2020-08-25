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
   OutputDataConfig,
   StopTrainingJobResponse,
   BillingLabel,
   EnvConfig,
   CreateNotebookInstanceRequest,
   DescribeNotebookSummaryRequest,
   SecondaryStatusTransition,
   DescribeNotebookInstanceRequest,
   DeleteNotebookInstanceResponse,
   NotebookInstanceSummary,
   GitConfig,
   CodeRepoSummary,
   ResourceConfig,
   DeleteNotebookLifecycleScriptResponse,
   DescribeNotebookLifecycleScriptsRequest,
   GitSecret,
   DeleteCodeRepositoryRequest,
   DescribeCodeRepositoryResponse,
   InputDataConfig,
   StartNotebookInstanceResponse,
   UpdateCodeRepositoryResponse,
   CreateNotebookInstanceResponse,
   FileSystemDataSource,
   NotebookLifecycleScriptsSummary,
   StopTrainingJobRequest,
   UpdateNotebookInstanceResponse,
   ClsConfig,
   UpdateNotebookLifecycleScriptRequest,
   UpdateNotebookInstanceRequest,
   CreatePresignedNotebookInstanceUrlRequest,
   CreateNotebookLifecycleScriptRequest,
   CreateCodeRepositoryRequest,
   DescribeNotebookInstancesRequest,
   DescribeTrainingJobsResponse,
   StoppingCondition,
   DescribeCodeRepositoriesResponse,
   DescribeNotebookInstancesResponse,
   DescribeCodeRepositoryRequest,
   CreateTrainingJobResponse,
   DescribeNotebookInstanceResponse,
   DescribeTrainingJobRequest,
   TrainingJobSummary,
   AlgorithmSpecification,
   CosDataSource,
   DescribeNotebookLifecycleScriptsResponse,
   DescribeNotebookSummaryResponse,
   Filter,
   StopNotebookInstanceRequest,
   DeleteNotebookLifecycleScriptRequest,
   DescribeNotebookLifecycleScriptResponse,
   DescribeTrainingJobResponse,
   StopNotebookInstanceResponse,
   UpdateCodeRepositoryRequest,
   CreateTrainingJobRequest,
   DeleteNotebookInstanceRequest,
   DescribeNotebookLifecycleScriptRequest,
   VpcConfig,
   CreateNotebookLifecycleScriptResponse,
   CreatePresignedNotebookInstanceUrlResponse,
   UpdateNotebookLifecycleScriptResponse,
   DescribeTrainingJobsRequest,
   StartNotebookInstanceRequest,
   CreateCodeRepositoryResponse,
   DescribeCodeRepositoriesRequest,
   DataSource,
   ModelArtifacts,
   DeleteCodeRepositoryResponse,

} from "./tione_models"

/**
 * tione client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("tione.tencentcloudapi.com", "2019-10-22", clientConfig);
    }
    
    /**
     * 更新Notebook实例
     * @public
     */
    async UpdateNotebookInstance(req: UpdateNotebookInstanceRequest, cb?: (error: string, rep: UpdateNotebookInstanceResponse) => void): Promise<UpdateNotebookInstanceResponse> {
        return await this.request("UpdateNotebookInstance", req, cb);
    }

    /**
     * 查看notebook生命周期脚本列表
     * @public
     */
    async DescribeNotebookLifecycleScripts(req: DescribeNotebookLifecycleScriptsRequest, cb?: (error: string, rep: DescribeNotebookLifecycleScriptsResponse) => void): Promise<DescribeNotebookLifecycleScriptsResponse> {
        return await this.request("DescribeNotebookLifecycleScripts", req, cb);
    }

    /**
     * 启动Notebook实例
     * @public
     */
    async StartNotebookInstance(req: StartNotebookInstanceRequest, cb?: (error: string, rep: StartNotebookInstanceResponse) => void): Promise<StartNotebookInstanceResponse> {
        return await this.request("StartNotebookInstance", req, cb);
    }

    /**
     * 删除notebook实例
     * @public
     */
    async DeleteNotebookInstance(req: DeleteNotebookInstanceRequest, cb?: (error: string, rep: DeleteNotebookInstanceResponse) => void): Promise<DeleteNotebookInstanceResponse> {
        return await this.request("DeleteNotebookInstance", req, cb);
    }

    /**
     * 查看notebook生命周期脚本详情
     * @public
     */
    async DescribeNotebookLifecycleScript(req: DescribeNotebookLifecycleScriptRequest, cb?: (error: string, rep: DescribeNotebookLifecycleScriptResponse) => void): Promise<DescribeNotebookLifecycleScriptResponse> {
        return await this.request("DescribeNotebookLifecycleScript", req, cb);
    }

    /**
     * 创建Notebook授权Url
     * @public
     */
    async CreatePresignedNotebookInstanceUrl(req: CreatePresignedNotebookInstanceUrlRequest, cb?: (error: string, rep: CreatePresignedNotebookInstanceUrlResponse) => void): Promise<CreatePresignedNotebookInstanceUrlResponse> {
        return await this.request("CreatePresignedNotebookInstanceUrl", req, cb);
    }

    /**
     * 创建存储库
     * @public
     */
    async CreateCodeRepository(req: CreateCodeRepositoryRequest, cb?: (error: string, rep: CreateCodeRepositoryResponse) => void): Promise<CreateCodeRepositoryResponse> {
        return await this.request("CreateCodeRepository", req, cb);
    }

    /**
     * 更新notebook生命周期脚本
     * @public
     */
    async UpdateNotebookLifecycleScript(req: UpdateNotebookLifecycleScriptRequest, cb?: (error: string, rep: UpdateNotebookLifecycleScriptResponse) => void): Promise<UpdateNotebookLifecycleScriptResponse> {
        return await this.request("UpdateNotebookLifecycleScript", req, cb);
    }

    /**
     * 查询训练任务
     * @public
     */
    async DescribeTrainingJob(req: DescribeTrainingJobRequest, cb?: (error: string, rep: DescribeTrainingJobResponse) => void): Promise<DescribeTrainingJobResponse> {
        return await this.request("DescribeTrainingJob", req, cb);
    }

    /**
     * 停止Notebook实例
     * @public
     */
    async StopNotebookInstance(req: StopNotebookInstanceRequest, cb?: (error: string, rep: StopNotebookInstanceResponse) => void): Promise<StopNotebookInstanceResponse> {
        return await this.request("StopNotebookInstance", req, cb);
    }

    /**
     * 创建Notebook实例
     * @public
     */
    async CreateNotebookInstance(req: CreateNotebookInstanceRequest, cb?: (error: string, rep: CreateNotebookInstanceResponse) => void): Promise<CreateNotebookInstanceResponse> {
        return await this.request("CreateNotebookInstance", req, cb);
    }

    /**
     * 查询存储库详情
     * @public
     */
    async DescribeCodeRepository(req: DescribeCodeRepositoryRequest, cb?: (error: string, rep: DescribeCodeRepositoryResponse) => void): Promise<DescribeCodeRepositoryResponse> {
        return await this.request("DescribeCodeRepository", req, cb);
    }

    /**
     * 查询训练任务列表
     * @public
     */
    async DescribeTrainingJobs(req: DescribeTrainingJobsRequest, cb?: (error: string, rep: DescribeTrainingJobsResponse) => void): Promise<DescribeTrainingJobsResponse> {
        return await this.request("DescribeTrainingJobs", req, cb);
    }

    /**
     * 删除存储库
     * @public
     */
    async DeleteCodeRepository(req: DeleteCodeRepositoryRequest, cb?: (error: string, rep: DeleteCodeRepositoryResponse) => void): Promise<DeleteCodeRepositoryResponse> {
        return await this.request("DeleteCodeRepository", req, cb);
    }

    /**
     * 查询Notebook概览数据
     * @public
     */
    async DescribeNotebookSummary(req: DescribeNotebookSummaryRequest, cb?: (error: string, rep: DescribeNotebookSummaryResponse) => void): Promise<DescribeNotebookSummaryResponse> {
        return await this.request("DescribeNotebookSummary", req, cb);
    }

    /**
     * 创建Notebook生命周期脚本
     * @public
     */
    async CreateNotebookLifecycleScript(req: CreateNotebookLifecycleScriptRequest, cb?: (error: string, rep: CreateNotebookLifecycleScriptResponse) => void): Promise<CreateNotebookLifecycleScriptResponse> {
        return await this.request("CreateNotebookLifecycleScript", req, cb);
    }

    /**
     * 删除Notebook生命周期脚本
     * @public
     */
    async DeleteNotebookLifecycleScript(req: DeleteNotebookLifecycleScriptRequest, cb?: (error: string, rep: DeleteNotebookLifecycleScriptResponse) => void): Promise<DeleteNotebookLifecycleScriptResponse> {
        return await this.request("DeleteNotebookLifecycleScript", req, cb);
    }

    /**
     * 查询Notebook实例详情
     * @public
     */
    async DescribeNotebookInstance(req: DescribeNotebookInstanceRequest, cb?: (error: string, rep: DescribeNotebookInstanceResponse) => void): Promise<DescribeNotebookInstanceResponse> {
        return await this.request("DescribeNotebookInstance", req, cb);
    }

    /**
     * 更新存储库
     * @public
     */
    async UpdateCodeRepository(req: UpdateCodeRepositoryRequest, cb?: (error: string, rep: UpdateCodeRepositoryResponse) => void): Promise<UpdateCodeRepositoryResponse> {
        return await this.request("UpdateCodeRepository", req, cb);
    }

    /**
     * 查询Notebook实例列表
     * @public
     */
    async DescribeNotebookInstances(req: DescribeNotebookInstancesRequest, cb?: (error: string, rep: DescribeNotebookInstancesResponse) => void): Promise<DescribeNotebookInstancesResponse> {
        return await this.request("DescribeNotebookInstances", req, cb);
    }

    /**
     * 创建训练任务
     * @public
     */
    async CreateTrainingJob(req: CreateTrainingJobRequest, cb?: (error: string, rep: CreateTrainingJobResponse) => void): Promise<CreateTrainingJobResponse> {
        return await this.request("CreateTrainingJob", req, cb);
    }

    /**
     * 查询存储库列表
     * @public
     */
    async DescribeCodeRepositories(req: DescribeCodeRepositoriesRequest, cb?: (error: string, rep: DescribeCodeRepositoriesResponse) => void): Promise<DescribeCodeRepositoriesResponse> {
        return await this.request("DescribeCodeRepositories", req, cb);
    }

    /**
     * 停止训练任务
     * @public
     */
    async StopTrainingJob(req: StopTrainingJobRequest, cb?: (error: string, rep: StopTrainingJobResponse) => void): Promise<StopTrainingJobResponse> {
        return await this.request("StopTrainingJob", req, cb);
    }


}
