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
   GetReturnCodeInfoResponse,
   ModifyAgentGroupRequest,
   BindAlarmPolicyResponse,
   AlarmInfo,
   GetDailyAvailRatioRequest,
   ModifyTaskExResponse,
   DescribeAgentsRequest,
   CatReturnSummary,
   CatReturnDetail,
   RunTaskRequest,
   DimensionsDetail,
   GetRespTimeTrendExResponse,
   ModifyAgentGroupResponse,
   DescribeTaskDetailResponse,
   IspDetail,
   DataPointMetric,
   GetReturnCodeInfoRequest,
   DescribeCatLogsRequest,
   DescribeAgentsResponse,
   GetAvailRatioHistoryResponse,
   CreateAgentGroupResponse,
   DeleteTasksResponse,
   DescribeAlarmsResponse,
   GetRealAvailRatioRequest,
   DeleteAgentGroupResponse,
   AgentGroup,
   DescribeTaskDetailRequest,
   DescribeTasksByTypeResponse,
   GetResultSummaryResponse,
   GetReturnCodeHistoryRequest,
   BindAlarmPolicyRequest,
   DescribeAgentGroupsResponse,
   ProvinceDetail,
   AlarmTopic,
   ResultSummary,
   PauseTaskRequest,
   GetResultSummaryRequest,
   DescribeAlarmsRequest,
   DescribeUserLimitResponse,
   GetRespTimeTrendExRequest,
   DeleteTasksRequest,
   DescribeAlarmsByTaskRequest,
   PauseTaskResponse,
   CreateAgentGroupRequest,
   CatLog,
   GetDailyAvailRatioResponse,
   DeleteAgentGroupRequest,
   GetAvailRatioHistoryRequest,
   DescribeAgentGroupsRequest,
   DescribeAlarmsByTaskResponse,
   ModifyTaskExRequest,
   DescribeAlarmTopicRequest,
   CreateTaskExRequest,
   GetTaskTotalNumberRequest,
   TaskAlarm,
   DescribeTasksByTypeRequest,
   VerifyResultRequest,
   VerifyResultResponse,
   CatTaskDetail,
   GetReturnCodeHistoryResponse,
   DataPoint,
   DescribeAlarmTopicResponse,
   GetRealAvailRatioResponse,
   RunTaskResponse,
   CatAgent,
   DescribeCatLogsResponse,
   GetTaskTotalNumberResponse,
   CreateTaskExResponse,
   DescribeUserLimitRequest,

} from "./cat_models"

/**
 * cat client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("cat.tencentcloudapi.com", "2018-04-09", clientConfig);
    }
    
    /**
     * 查询拨测任务的走势数据
     * @public
     */
    async GetRespTimeTrendEx(req: GetRespTimeTrendExRequest, cb?: (error: string, rep: GetRespTimeTrendExResponse) => void): Promise<GetRespTimeTrendExResponse> {
        return await this.request("GetRespTimeTrendEx", req, cb);
    }

    /**
     * 修改拨测分组
     * @public
     */
    async ModifyAgentGroup(req: ModifyAgentGroupRequest, cb?: (error: string, rep: ModifyAgentGroupResponse) => void): Promise<ModifyAgentGroupResponse> {
        return await this.request("ModifyAgentGroup", req, cb);
    }

    /**
     * 按类型查询拨测任务列表
     * @public
     */
    async DescribeTasksByType(req: DescribeTasksByTypeRequest, cb?: (error: string, rep: DescribeTasksByTypeResponse) => void): Promise<DescribeTasksByTypeResponse> {
        return await this.request("DescribeTasksByType", req, cb);
    }

    /**
     * 创建拨测任务(扩展)
     * @public
     */
    async CreateTaskEx(req: CreateTaskExRequest, cb?: (error: string, rep: CreateTaskExResponse) => void): Promise<CreateTaskExResponse> {
        return await this.request("CreateTaskEx", req, cb);
    }

    /**
     * 暂停拨测任务
     * @public
     */
    async PauseTask(req: PauseTaskRequest, cb?: (error: string, rep: PauseTaskResponse) => void): Promise<PauseTaskResponse> {
        return await this.request("PauseTask", req, cb);
    }

    /**
     * 查询拨测分组列表
     * @public
     */
    async DescribeAgentGroups(req: DescribeAgentGroupsRequest, cb?: (error: string, rep: DescribeAgentGroupsResponse) => void): Promise<DescribeAgentGroupsResponse> {
        return await this.request("DescribeAgentGroups", req, cb);
    }

    /**
     * 获取实时可用率信息
     * @public
     */
    async GetRealAvailRatio(req: GetRealAvailRatioRequest, cb?: (error: string, rep: GetRealAvailRatioResponse) => void): Promise<GetRealAvailRatioResponse> {
        return await this.request("GetRealAvailRatio", req, cb);
    }

    /**
     * 添加拨测分组
     * @public
     */
    async CreateAgentGroup(req: CreateAgentGroupRequest, cb?: (error: string, rep: CreateAgentGroupResponse) => void): Promise<CreateAgentGroupResponse> {
        return await this.request("CreateAgentGroup", req, cb);
    }

    /**
     * 查询拨测任务信息
     * @public
     */
    async DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse> {
        return await this.request("DescribeTaskDetail", req, cb);
    }

    /**
     * 查询用户的告警主题列表
     * @public
     */
    async DescribeAlarmTopic(req: DescribeAlarmTopicRequest, cb?: (error: string, rep: DescribeAlarmTopicResponse) => void): Promise<DescribeAlarmTopicResponse> {
        return await this.request("DescribeAlarmTopic", req, cb);
    }

    /**
     * 查询拨测告警列表
     * @public
     */
    async DescribeAlarms(req: DescribeAlarmsRequest, cb?: (error: string, rep: DescribeAlarmsResponse) => void): Promise<DescribeAlarmsResponse> {
        return await this.request("DescribeAlarms", req, cb);
    }

    /**
     * 查询拨测任务的历史返回码信息
     * @public
     */
    async GetReturnCodeHistory(req: GetReturnCodeHistoryRequest, cb?: (error: string, rep: GetReturnCodeHistoryResponse) => void): Promise<GetReturnCodeHistoryResponse> {
        return await this.request("GetReturnCodeHistory", req, cb);
    }

    /**
     * 删除多个拨测任务
     * @public
     */
    async DeleteTasks(req: DeleteTasksRequest, cb?: (error: string, rep: DeleteTasksResponse) => void): Promise<DeleteTasksResponse> {
        return await this.request("DeleteTasks", req, cb);
    }

    /**
     * 获取一天的整体可用率信息
     * @public
     */
    async GetDailyAvailRatio(req: GetDailyAvailRatioRequest, cb?: (error: string, rep: GetDailyAvailRatioResponse) => void): Promise<GetDailyAvailRatioResponse> {
        return await this.request("GetDailyAvailRatio", req, cb);
    }

    /**
     * 修改拨测任务(扩展)
     * @public
     */
    async ModifyTaskEx(req: ModifyTaskExRequest, cb?: (error: string, rep: ModifyTaskExResponse) => void): Promise<ModifyTaskExResponse> {
        return await this.request("ModifyTaskEx", req, cb);
    }

    /**
     * 查询本用户可选的拨测点列表
     * @public
     */
    async DescribeAgents(req: DescribeAgentsRequest, cb?: (error: string, rep: DescribeAgentsResponse) => void): Promise<DescribeAgentsResponse> {
        return await this.request("DescribeAgents", req, cb);
    }

    /**
     * 获取用户可用资源限制
     * @public
     */
    async DescribeUserLimit(req: DescribeUserLimitRequest, cb?: (error: string, rep: DescribeUserLimitResponse) => void): Promise<DescribeUserLimitResponse> {
        return await this.request("DescribeUserLimit", req, cb);
    }

    /**
     * 查询拨测流水
     * @public
     */
    async DescribeCatLogs(req: DescribeCatLogsRequest, cb?: (error: string, rep: DescribeCatLogsResponse) => void): Promise<DescribeCatLogsResponse> {
        return await this.request("DescribeCatLogs", req, cb);
    }

    /**
     * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
     * @public
     */
    async VerifyResult(req: VerifyResultRequest, cb?: (error: string, rep: VerifyResultResponse) => void): Promise<VerifyResultResponse> {
        return await this.request("VerifyResult", req, cb);
    }

    /**
     * 绑定拨测任务和告警策略组
     * @public
     */
    async BindAlarmPolicy(req: BindAlarmPolicyRequest, cb?: (error: string, rep: BindAlarmPolicyResponse) => void): Promise<BindAlarmPolicyResponse> {
        return await this.request("BindAlarmPolicy", req, cb);
    }

    /**
     * 获取任务列表的实时数据
     * @public
     */
    async GetResultSummary(req: GetResultSummaryRequest, cb?: (error: string, rep: GetResultSummaryResponse) => void): Promise<GetResultSummaryResponse> {
        return await this.request("GetResultSummary", req, cb);
    }

    /**
     * 删除拨测分组
     * @public
     */
    async DeleteAgentGroup(req: DeleteAgentGroupRequest, cb?: (error: string, rep: DeleteAgentGroupResponse) => void): Promise<DeleteAgentGroupResponse> {
        return await this.request("DeleteAgentGroup", req, cb);
    }

    /**
     * 获取指定时刻的可用率地图信息
     * @public
     */
    async GetAvailRatioHistory(req: GetAvailRatioHistoryRequest, cb?: (error: string, rep: GetAvailRatioHistoryResponse) => void): Promise<GetAvailRatioHistoryResponse> {
        return await this.request("GetAvailRatioHistory", req, cb);
    }

    /**
     * 运行拨测任务
     * @public
     */
    async RunTask(req: RunTaskRequest, cb?: (error: string, rep: RunTaskResponse) => void): Promise<RunTaskResponse> {
        return await this.request("RunTask", req, cb);
    }

    /**
     * 查询拨测任务的返回码统计信息
     * @public
     */
    async GetReturnCodeInfo(req: GetReturnCodeInfoRequest, cb?: (error: string, rep: GetReturnCodeInfoResponse) => void): Promise<GetReturnCodeInfoResponse> {
        return await this.request("GetReturnCodeInfo", req, cb);
    }

    /**
     * 按任务查询拨测告警列表
     * @public
     */
    async DescribeAlarmsByTask(req: DescribeAlarmsByTaskRequest, cb?: (error: string, rep: DescribeAlarmsByTaskResponse) => void): Promise<DescribeAlarmsByTaskResponse> {
        return await this.request("DescribeAlarmsByTask", req, cb);
    }

    /**
     * 获取AppId下的拨测任务总数
     * @public
     */
    async GetTaskTotalNumber(req: GetTaskTotalNumberRequest, cb?: (error: string, rep: GetTaskTotalNumberResponse) => void): Promise<GetTaskTotalNumberResponse> {
        return await this.request("GetTaskTotalNumber", req, cb);
    }


}
