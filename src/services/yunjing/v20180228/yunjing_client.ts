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
   ExportBashEventsRequest,
   ModifyAutoOpenProVersionConfigRequest,
   DescribeProcessTaskStatusResponse,
   ExportReverseShellEventsResponse,
   DescribeBashRulesRequest,
   ExportPrivilegeEventsResponse,
   DescribeAlarmAttributeResponse,
   DescribeWeeklyReportBruteAttacksResponse,
   DescribeAgentVulsRequest,
   DescribeTagsRequest,
   AddMachineTagResponse,
   UsualPlace,
   DescribeReverseShellRulesRequest,
   SetBashEventsStatusRequest,
   DescribeAccountsRequest,
   DescribeReverseShellEventsRequest,
   WeeklyReportVul,
   DescribeWeeklyReportBruteAttacksRequest,
   CreateUsualLoginPlacesRequest,
   DescribeProcessTaskStatusRequest,
   DescribeVulScanResultResponse,
   ModifyAlarmAttributeRequest,
   DescribeAttackLogsRequest,
   ComponentStatistics,
   InquiryPriceOpenProVersionPrepaidRequest,
   ExportMalwaresRequest,
   DescribeProcessesResponse,
   DeleteBashEventsResponse,
   ExportPrivilegeEventsRequest,
   WeeklyReportMalware,
   CreateBaselineStrategyRequest,
   DescribeSecurityTrendsRequest,
   Account,
   DescribeReverseShellEventsResponse,
   DescribePrivilegeRulesRequest,
   BruteAttack,
   DescribeOpenPortsRequest,
   DescribeImpactedHostsRequest,
   DescribeMaliciousRequestsResponse,
   NonLocalLoginPlace,
   CreateProcessTaskResponse,
   SecurityDynamic,
   RenewProVersionRequest,
   DescribeComponentsRequest,
   DescribeNonlocalLoginPlacesRequest,
   DeleteMachineTagRequest,
   CreateBaselineStrategyResponse,
   ReverseShellRule,
   OpenPortStatistics,
   EditPrivilegeRuleResponse,
   DescribeHistoryAccountsResponse,
   AgentVul,
   UntrustMalwaresRequest,
   ExportAttackLogsResponse,
   DescribeAccountsResponse,
   DescribeLoginWhiteListRequest,
   ReverseShell,
   UntrustMaliciousRequestRequest,
   ExportNonlocalLoginPlacesRequest,
   DescribeComponentInfoResponse,
   DescribeAccountStatisticsResponse,
   OpenProVersionPrepaidRequest,
   ModifyLoginWhiteListResponse,
   DescribeTagsResponse,
   OpenPort,
   DescribeProVersionInfoRequest,
   CreateProcessTaskRequest,
   DeleteMaliciousRequestsResponse,
   ExportBruteAttacksResponse,
   EditReverseShellRuleResponse,
   ExportBruteAttacksRequest,
   DeleteMachineResponse,
   DeleteLoginWhiteListRequest,
   MachineTag,
   DescribeAttackLogInfoResponse,
   DescribePrivilegeEventsResponse,
   WeeklyReportNonlocalLoginPlace,
   DescribeOverviewStatisticsResponse,
   RecoverMalwaresRequest,
   MaliciousRequest,
   TrustMalwaresResponse,
   TagMachine,
   DescribeWeeklyReportInfoRequest,
   EditTagsRequest,
   AddLoginWhiteListRequest,
   DeleteReverseShellRulesRequest,
   DescribeWeeklyReportsRequest,
   DescribeBashRulesResponse,
   DescribeImpactedHostsResponse,
   RescanImpactedHostRequest,
   DescribeBashEventsResponse,
   ModifyLoginWhiteListRequest,
   DescribeBashEventsRequest,
   DeleteTagsRequest,
   DescribeOpenPortStatisticsRequest,
   ExportAttackLogsRequest,
   DeleteMachineRequest,
   DescribeVulInfoRequest,
   UntrustMaliciousRequestResponse,
   DescribeComponentStatisticsResponse,
   PrivilegeEscalationProcess,
   Place,
   SwitchBashRulesResponse,
   LoginWhiteLists,
   DeleteUsualLoginPlacesResponse,
   DeleteNonlocalLoginPlacesResponse,
   DescribeNonlocalLoginPlacesResponse,
   DeleteReverseShellRulesResponse,
   ExportMalwaresResponse,
   UntrustMalwaresResponse,
   DeletePrivilegeRulesResponse,
   CreateOpenPortTaskResponse,
   EditBashRuleRequest,
   DeletePrivilegeEventsResponse,
   InquiryPriceOpenProVersionPrepaidResponse,
   CloseProVersionRequest,
   SetBashEventsStatusResponse,
   DescribeUsualLoginPlacesResponse,
   DescribeProcessStatisticsResponse,
   MisAlarmNonlocalLoginPlacesRequest,
   TrustMaliciousRequestRequest,
   ExportMaliciousRequestsResponse,
   DescribeAttackLogInfoRequest,
   DescribeWeeklyReportMalwaresRequest,
   DescribeBruteAttacksResponse,
   ExportNonlocalLoginPlacesResponse,
   DescribeComponentStatisticsRequest,
   DescribeOverviewStatisticsRequest,
   DescribeOpenPortStatisticsResponse,
   DeleteAttackLogsResponse,
   DescribeLoginWhiteListResponse,
   DescribeVulInfoResponse,
   DescribeTagMachinesRequest,
   EditReverseShellRuleRequest,
   DescribeProVersionInfoResponse,
   DeleteTagsResponse,
   DeleteBruteAttacksRequest,
   DescribeWeeklyReportVulsRequest,
   AddLoginWhiteListResponse,
   BashRule,
   DescribeOpenPortTaskStatusResponse,
   DescribeWeeklyReportNonlocalLoginPlacesResponse,
   SeparateMalwaresRequest,
   RenewProVersionResponse,
   LoginWhiteListsRule,
   DescribeTagMachinesResponse,
   DescribeSecurityTrendsResponse,
   ProVersionMachine,
   CreateOpenPortTaskRequest,
   DescribeWeeklyReportInfoResponse,
   DescribeSecurityDynamicsResponse,
   DeleteReverseShellEventsResponse,
   DeletePrivilegeEventsRequest,
   DeleteBashRulesRequest,
   CloseProVersionResponse,
   DeleteAttackLogsRequest,
   DescribeOpenPortsResponse,
   EditBashRuleResponse,
   OpenProVersionResponse,
   DescribeMachineInfoRequest,
   DescribeMaliciousRequestsRequest,
   DescribeProcessesRequest,
   DeleteUsualLoginPlacesRequest,
   WeeklyReport,
   DescribeOpenPortTaskStatusRequest,
   Filter,
   DeleteLoginWhiteListResponse,
   DescribeAccountStatisticsRequest,
   DescribeAttackLogsResponse,
   OpenProVersionPrepaidResponse,
   MisAlarmNonlocalLoginPlacesResponse,
   DeleteMalwaresResponse,
   ChargePrepaid,
   DescribeWeeklyReportNonlocalLoginPlacesRequest,
   SeparateMalwaresResponse,
   ProcessStatistics,
   Process,
   DescribeBruteAttacksRequest,
   DescribeVulScanResultRequest,
   DescribePrivilegeEventsRequest,
   DescribeWeeklyReportMalwaresResponse,
   DescribeSecurityDynamicsRequest,
   ExportBashEventsResponse,
   ImpactedHost,
   DescribeReverseShellRulesResponse,
   DescribeComponentInfoRequest,
   DeleteNonlocalLoginPlacesRequest,
   EditPrivilegeRuleRequest,
   ExportMaliciousRequestsRequest,
   AccountStatistics,
   DescribeMachinesResponse,
   CreateUsualLoginPlacesResponse,
   DescribePrivilegeRulesResponse,
   ModifyProVersionRenewFlagResponse,
   Machine,
   TrustMalwaresRequest,
   Malware,
   DescribeWeeklyReportVulsResponse,
   WeeklyReportBruteAttack,
   DefendAttackLog,
   PrivilegeRule,
   HistoryAccount,
   ModifyProVersionRenewFlagRequest,
   TrustMaliciousRequestResponse,
   DescribeUsualLoginPlacesRequest,
   Component,
   DescribeVulsRequest,
   DescribeAgentVulsResponse,
   SwitchBashRulesRequest,
   DescribeProcessStatisticsRequest,
   DeleteMachineTagResponse,
   DescribeHistoryAccountsRequest,
   DescribeMachineInfoResponse,
   OpenProVersionRequest,
   DeleteBashRulesResponse,
   IgnoreImpactedHostsResponse,
   DeleteBashEventsRequest,
   DescribeComponentsResponse,
   Tag,
   RescanImpactedHostResponse,
   SecurityTrend,
   Vul,
   AddMachineTagRequest,
   DescribeWeeklyReportsResponse,
   DeleteReverseShellEventsRequest,
   ModifyAutoOpenProVersionConfigResponse,
   ExportReverseShellEventsRequest,
   DescribeVulsResponse,
   RecoverMalwaresResponse,
   EditTagsResponse,
   IgnoreImpactedHostsRequest,
   DescribeAlarmAttributeRequest,
   DescribeMalwaresRequest,
   DeleteBruteAttacksResponse,
   DeleteMaliciousRequestsRequest,
   DescribeMachinesRequest,
   ModifyAlarmAttributeResponse,
   BashEvent,
   DeleteMalwaresRequest,
   DescribeMalwaresResponse,
   DeletePrivilegeRulesRequest,

} from "./yunjing_models"

/**
 * yunjing client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("yunjing.tencentcloudapi.com", "2018-02-28", clientConfig);
    }
    
    /**
     * 删除标签
     * @public
     */
    async DeleteTags(req: DeleteTagsRequest, cb?: (error: string, rep: DeleteTagsResponse) => void): Promise<DeleteTagsResponse> {
        return await this.request("DeleteTags", req, cb);
    }

    /**
     * 本接口(TrustMalwares)将被识别木马文件设为信任。
     * @public
     */
    async TrustMalwares(req: TrustMalwaresRequest, cb?: (error: string, rep: TrustMalwaresResponse) => void): Promise<TrustMalwaresResponse> {
        return await this.request("TrustMalwares", req, cb);
    }

    /**
     * 本接口 (DescribeComponentStatistics) 用于获取组件统计列表数据。
     * @public
     */
    async DescribeComponentStatistics(req: DescribeComponentStatisticsRequest, cb?: (error: string, rep: DescribeComponentStatisticsResponse) => void): Promise<DescribeComponentStatisticsResponse> {
        return await this.request("DescribeComponentStatistics", req, cb);
    }

    /**
     * 删除服务器关联的标签
     * @public
     */
    async DeleteMachineTag(req: DeleteMachineTagRequest, cb?: (error: string, rep: DeleteMachineTagResponse) => void): Promise<DeleteMachineTagResponse> {
        return await this.request("DeleteMachineTag", req, cb);
    }

    /**
     * 按分页形式展示网络攻击日志列表
     * @public
     */
    async DescribeAttackLogs(req: DescribeAttackLogsRequest, cb?: (error: string, rep: DescribeAttackLogsResponse) => void): Promise<DescribeAttackLogsResponse> {
        return await this.request("DescribeAttackLogs", req, cb);
    }

    /**
     * 本接口 (OpenProVersion) 用于开通专业版。
     * @public
     */
    async OpenProVersion(req: OpenProVersionRequest, cb?: (error: string, rep: OpenProVersionResponse) => void): Promise<OpenProVersionResponse> {
        return await this.request("OpenProVersion", req, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportMalwares) 用于获取专业周报木马数据。
     * @public
     */
    async DescribeWeeklyReportMalwares(req: DescribeWeeklyReportMalwaresRequest, cb?: (error: string, rep: DescribeWeeklyReportMalwaresResponse) => void): Promise<DescribeWeeklyReportMalwaresResponse> {
        return await this.request("DescribeWeeklyReportMalwares", req, cb);
    }

    /**
     * 本接口 (DescribeVulInfo) 用于获取漏洞详情。
     * @public
     */
    async DescribeVulInfo(req: DescribeVulInfoRequest, cb?: (error: string, rep: DescribeVulInfoResponse) => void): Promise<DescribeVulInfoResponse> {
        return await this.request("DescribeVulInfo", req, cb);
    }

    /**
     * 新增或修改高危命令规则
     * @public
     */
    async EditBashRule(req: EditBashRuleRequest, cb?: (error: string, rep: EditBashRuleResponse) => void): Promise<EditBashRuleResponse> {
        return await this.request("EditBashRule", req, cb);
    }

    /**
     * 本接口（DeleteUsualLoginPlaces）用于删除常用登录地。
     * @public
     */
    async DeleteUsualLoginPlaces(req: DeleteUsualLoginPlacesRequest, cb?: (error: string, rep: DeleteUsualLoginPlacesResponse) => void): Promise<DeleteUsualLoginPlacesResponse> {
        return await this.request("DeleteUsualLoginPlaces", req, cb);
    }

    /**
     * 本接口 (DescribeVuls) 用于获取漏洞列表数据。
     * @public
     */
    async DescribeVuls(req: DescribeVulsRequest, cb?: (error: string, rep: DescribeVulsResponse) => void): Promise<DescribeVulsResponse> {
        return await this.request("DescribeVuls", req, cb);
    }

    /**
     * 本接口{MisAlarmNonlocalLoginPlaces}将设置当前地点为常用登录地。
     * @public
     */
    async MisAlarmNonlocalLoginPlaces(req: MisAlarmNonlocalLoginPlacesRequest, cb?: (error: string, rep: MisAlarmNonlocalLoginPlacesResponse) => void): Promise<MisAlarmNonlocalLoginPlacesResponse> {
        return await this.request("MisAlarmNonlocalLoginPlaces", req, cb);
    }

    /**
     * 根据策略信息创建基线策略
     * @public
     */
    async CreateBaselineStrategy(req: CreateBaselineStrategyRequest, cb?: (error: string, rep: CreateBaselineStrategyResponse) => void): Promise<CreateBaselineStrategyResponse> {
        return await this.request("CreateBaselineStrategy", req, cb);
    }

    /**
     * 获取高危命令规则列表
     * @public
     */
    async DescribeBashRules(req: DescribeBashRulesRequest, cb?: (error: string, rep: DescribeBashRulesResponse) => void): Promise<DescribeBashRulesResponse> {
        return await this.request("DescribeBashRules", req, cb);
    }

    /**
     * 根据Ids删除本地提权
     * @public
     */
    async DeletePrivilegeEvents(req: DeletePrivilegeEventsRequest, cb?: (error: string, rep: DeletePrivilegeEventsResponse) => void): Promise<DeletePrivilegeEventsResponse> {
        return await this.request("DeletePrivilegeEvents", req, cb);
    }

    /**
     * 本接口 (RenewProVersion) 用于续费专业版(包年包月)。
     * @public
     */
    async RenewProVersion(req: RenewProVersionRequest, cb?: (error: string, rep: RenewProVersionResponse) => void): Promise<RenewProVersionResponse> {
        return await this.request("RenewProVersion", req, cb);
    }

    /**
     * 导出网络攻击日志
     * @public
     */
    async ExportAttackLogs(req: ExportAttackLogsRequest, cb?: (error: string, rep: ExportAttackLogsResponse) => void): Promise<ExportAttackLogsResponse> {
        return await this.request("ExportAttackLogs", req, cb);
    }

    /**
     * 此接口（DescribeUsualLoginPlaces）用于查询常用登录地。
     * @public
     */
    async DescribeUsualLoginPlaces(req: DescribeUsualLoginPlacesRequest, cb?: (error: string, rep: DescribeUsualLoginPlacesResponse) => void): Promise<DescribeUsualLoginPlacesResponse> {
        return await this.request("DescribeUsualLoginPlaces", req, cb);
    }

    /**
     * 根据Ids删除高危命令事件
     * @public
     */
    async DeleteBashEvents(req: DeleteBashEventsRequest, cb?: (error: string, rep: DeleteBashEventsResponse) => void): Promise<DeleteBashEventsResponse> {
        return await this.request("DeleteBashEvents", req, cb);
    }

    /**
     * 本接口 (DeleteMaliciousRequests) 用于删除恶意请求记录。
     * @public
     */
    async DeleteMaliciousRequests(req: DeleteMaliciousRequestsRequest, cb?: (error: string, rep: DeleteMaliciousRequestsResponse) => void): Promise<DeleteMaliciousRequestsResponse> {
        return await this.request("DeleteMaliciousRequests", req, cb);
    }

    /**
     * 获取反弹Shell规则列表
     * @public
     */
    async DescribeReverseShellRules(req: DescribeReverseShellRulesRequest, cb?: (error: string, rep: DescribeReverseShellRulesResponse) => void): Promise<DescribeReverseShellRulesResponse> {
        return await this.request("DescribeReverseShellRules", req, cb);
    }

    /**
     * 本接口（RecoverMalwares）用于批量恢复已经被隔离的木马文件。
     * @public
     */
    async RecoverMalwares(req: RecoverMalwaresRequest, cb?: (error: string, rep: RecoverMalwaresResponse) => void): Promise<RecoverMalwaresResponse> {
        return await this.request("RecoverMalwares", req, cb);
    }

    /**
     * 删除反弹Shell规则
     * @public
     */
    async DeleteReverseShellRules(req: DeleteReverseShellRulesRequest, cb?: (error: string, rep: DeleteReverseShellRulesResponse) => void): Promise<DeleteReverseShellRulesResponse> {
        return await this.request("DeleteReverseShellRules", req, cb);
    }

    /**
     * 本接口 (DeleteBruteAttacks) 用于删除暴力破解记录。
     * @public
     */
    async DeleteBruteAttacks(req: DeleteBruteAttacksRequest, cb?: (error: string, rep: DeleteBruteAttacksResponse) => void): Promise<DeleteBruteAttacksResponse> {
        return await this.request("DeleteBruteAttacks", req, cb);
    }

    /**
     * 导出高危命令事件
     * @public
     */
    async ExportBashEvents(req: ExportBashEventsRequest, cb?: (error: string, rep: ExportBashEventsResponse) => void): Promise<ExportBashEventsResponse> {
        return await this.request("ExportBashEvents", req, cb);
    }

    /**
     * 本接口 (CreateProcessTask) 用于创建实时拉取进程任务。
     * @public
     */
    async CreateProcessTask(req: CreateProcessTaskRequest, cb?: (error: string, rep: CreateProcessTaskResponse) => void): Promise<CreateProcessTaskResponse> {
        return await this.request("CreateProcessTask", req, cb);
    }

    /**
     * 编辑反弹Shell规则
     * @public
     */
    async EditReverseShellRule(req: EditReverseShellRuleRequest, cb?: (error: string, rep: EditReverseShellRuleResponse) => void): Promise<EditReverseShellRuleResponse> {
        return await this.request("EditReverseShellRule", req, cb);
    }

    /**
     * 本接口 (DescribeProcesses) 用于获取进程列表数据。
     * @public
     */
    async DescribeProcesses(req: DescribeProcessesRequest, cb?: (error: string, rep: DescribeProcessesResponse) => void): Promise<DescribeProcessesResponse> {
        return await this.request("DescribeProcesses", req, cb);
    }

    /**
     * 本接口（DescribeMalwares）用于获取木马事件列表。
     * @public
     */
    async DescribeMalwares(req: DescribeMalwaresRequest, cb?: (error: string, rep: DescribeMalwaresResponse) => void): Promise<DescribeMalwaresResponse> {
        return await this.request("DescribeMalwares", req, cb);
    }

    /**
     * 编辑白名单规则
     * @public
     */
    async ModifyLoginWhiteList(req: ModifyLoginWhiteListRequest, cb?: (error: string, rep: ModifyLoginWhiteListResponse) => void): Promise<ModifyLoginWhiteListResponse> {
        return await this.request("ModifyLoginWhiteList", req, cb);
    }

    /**
     * 获取本地提权规则列表
     * @public
     */
    async DescribePrivilegeRules(req: DescribePrivilegeRulesRequest, cb?: (error: string, rep: DescribePrivilegeRulesResponse) => void): Promise<DescribePrivilegeRulesResponse> {
        return await this.request("DescribePrivilegeRules", req, cb);
    }

    /**
     * 本接口 (UntrustMaliciousRequest) 用于取消信任恶意请求。
     * @public
     */
    async UntrustMaliciousRequest(req: UntrustMaliciousRequestRequest, cb?: (error: string, rep: UntrustMaliciousRequestResponse) => void): Promise<UntrustMaliciousRequestResponse> {
        return await this.request("UntrustMaliciousRequest", req, cb);
    }

    /**
     * 本接口 (DescribeImpactedHosts) 用于获取漏洞受影响机器列表。
     * @public
     */
    async DescribeImpactedHosts(req: DescribeImpactedHostsRequest, cb?: (error: string, rep: DescribeImpactedHostsResponse) => void): Promise<DescribeImpactedHostsResponse> {
        return await this.request("DescribeImpactedHosts", req, cb);
    }

    /**
     * 本接口 (DeleteNonlocalLoginPlaces) 用于删除异地登录记录。
     * @public
     */
    async DeleteNonlocalLoginPlaces(req: DeleteNonlocalLoginPlacesRequest, cb?: (error: string, rep: DeleteNonlocalLoginPlacesResponse) => void): Promise<DeleteNonlocalLoginPlacesResponse> {
        return await this.request("DeleteNonlocalLoginPlaces", req, cb);
    }

    /**
     * 本接口 (DescribeOpenPorts) 用于获取端口列表数据。

     * @public
     */
    async DescribeOpenPorts(req: DescribeOpenPortsRequest, cb?: (error: string, rep: DescribeOpenPortsResponse) => void): Promise<DescribeOpenPortsResponse> {
        return await this.request("DescribeOpenPorts", req, cb);
    }

    /**
     * 本接口 (ExportMaliciousRequests) 用于导出下载恶意请求文件。
     * @public
     */
    async ExportMaliciousRequests(req: ExportMaliciousRequestsRequest, cb?: (error: string, rep: ExportMaliciousRequestsResponse) => void): Promise<ExportMaliciousRequestsResponse> {
        return await this.request("ExportMaliciousRequests", req, cb);
    }

    /**
     * 获取指定标签关联的服务器信息
     * @public
     */
    async DescribeTagMachines(req: DescribeTagMachinesRequest, cb?: (error: string, rep: DescribeTagMachinesResponse) => void): Promise<DescribeTagMachinesResponse> {
        return await this.request("DescribeTagMachines", req, cb);
    }

    /**
     * 本接口(DescribeNonlocalLoginPlaces)用于获取异地登录事件。
     * @public
     */
    async DescribeNonlocalLoginPlaces(req: DescribeNonlocalLoginPlacesRequest, cb?: (error: string, rep: DescribeNonlocalLoginPlacesResponse) => void): Promise<DescribeNonlocalLoginPlacesResponse> {
        return await this.request("DescribeNonlocalLoginPlaces", req, cb);
    }

    /**
     * 导出本地提权事件
     * @public
     */
    async ExportPrivilegeEvents(req: ExportPrivilegeEventsRequest, cb?: (error: string, rep: ExportPrivilegeEventsResponse) => void): Promise<ExportPrivilegeEventsResponse> {
        return await this.request("ExportPrivilegeEvents", req, cb);
    }

    /**
     * 本接口用于（DescribeOverviewStatistics）获取概览统计数据。
     * @public
     */
    async DescribeOverviewStatistics(req: DescribeOverviewStatisticsRequest, cb?: (error: string, rep: DescribeOverviewStatisticsResponse) => void): Promise<DescribeOverviewStatisticsResponse> {
        return await this.request("DescribeOverviewStatistics", req, cb);
    }

    /**
     * 本接口 (DescribeOpenPortTaskStatus) 用于获取实时拉取端口任务状态。
     * @public
     */
    async DescribeOpenPortTaskStatus(req: DescribeOpenPortTaskStatusRequest, cb?: (error: string, rep: DescribeOpenPortTaskStatusResponse) => void): Promise<DescribeOpenPortTaskStatusResponse> {
        return await this.request("DescribeOpenPortTaskStatus", req, cb);
    }

    /**
     * 本接口 (DescribeSecurityDynamics) 用于获取安全事件消息数据。
     * @public
     */
    async DescribeSecurityDynamics(req: DescribeSecurityDynamicsRequest, cb?: (error: string, rep: DescribeSecurityDynamicsResponse) => void): Promise<DescribeSecurityDynamicsResponse> {
        return await this.request("DescribeSecurityDynamics", req, cb);
    }

    /**
     * 根据Ids删除反弹Shell事件
     * @public
     */
    async DeleteReverseShellEvents(req: DeleteReverseShellEventsRequest, cb?: (error: string, rep: DeleteReverseShellEventsResponse) => void): Promise<DeleteReverseShellEventsResponse> {
        return await this.request("DeleteReverseShellEvents", req, cb);
    }

    /**
     * 删除本地提权规则
     * @public
     */
    async DeletePrivilegeRules(req: DeletePrivilegeRulesRequest, cb?: (error: string, rep: DeletePrivilegeRulesResponse) => void): Promise<DeletePrivilegeRulesResponse> {
        return await this.request("DeletePrivilegeRules", req, cb);
    }

    /**
     * 本接口 (DeleteMalwares) 用于删除木马记录。
     * @public
     */
    async DeleteMalwares(req: DeleteMalwaresRequest, cb?: (error: string, rep: DeleteMalwaresResponse) => void): Promise<DeleteMalwaresResponse> {
        return await this.request("DeleteMalwares", req, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportNonlocalLoginPlaces) 用于获取专业周报异地登录数据。
     * @public
     */
    async DescribeWeeklyReportNonlocalLoginPlaces(req: DescribeWeeklyReportNonlocalLoginPlacesRequest, cb?: (error: string, rep: DescribeWeeklyReportNonlocalLoginPlacesResponse) => void): Promise<DescribeWeeklyReportNonlocalLoginPlacesResponse> {
        return await this.request("DescribeWeeklyReportNonlocalLoginPlaces", req, cb);
    }

    /**
     * 删除白名单规则
     * @public
     */
    async DeleteLoginWhiteList(req: DeleteLoginWhiteListRequest, cb?: (error: string, rep: DeleteLoginWhiteListResponse) => void): Promise<DeleteLoginWhiteListResponse> {
        return await this.request("DeleteLoginWhiteList", req, cb);
    }

    /**
     * 本接口 (CreateOpenPortTask) 用于创建实时获取端口任务。
     * @public
     */
    async CreateOpenPortTask(req: CreateOpenPortTaskRequest, cb?: (error: string, rep: CreateOpenPortTaskResponse) => void): Promise<CreateOpenPortTaskResponse> {
        return await this.request("CreateOpenPortTask", req, cb);
    }

    /**
     * 本接口 (CloseProVersion) 用于关闭专业版。
     * @public
     */
    async CloseProVersion(req: CloseProVersionRequest, cb?: (error: string, rep: CloseProVersionResponse) => void): Promise<CloseProVersionResponse> {
        return await this.request("CloseProVersion", req, cb);
    }

    /**
     * 本接口 (DescribeAccountStatistics) 用于获取帐号统计列表数据。
     * @public
     */
    async DescribeAccountStatistics(req: DescribeAccountStatisticsRequest, cb?: (error: string, rep: DescribeAccountStatisticsResponse) => void): Promise<DescribeAccountStatisticsResponse> {
        return await this.request("DescribeAccountStatistics", req, cb);
    }

    /**
     * 本接口（ModifyAlarmAttribute）用于修改告警设置。
     * @public
     */
    async ModifyAlarmAttribute(req: ModifyAlarmAttributeRequest, cb?: (error: string, rep: ModifyAlarmAttributeResponse) => void): Promise<ModifyAlarmAttributeResponse> {
        return await this.request("ModifyAlarmAttribute", req, cb);
    }

    /**
     * 本接口 (DescribeOpenPortStatistics) 用于获取端口统计列表。
     * @public
     */
    async DescribeOpenPortStatistics(req: DescribeOpenPortStatisticsRequest, cb?: (error: string, rep: DescribeOpenPortStatisticsResponse) => void): Promise<DescribeOpenPortStatisticsResponse> {
        return await this.request("DescribeOpenPortStatistics", req, cb);
    }

    /**
     * 本接口 (ExportBruteAttacks) 用于导出密码破解记录成CSV文件。
     * @public
     */
    async ExportBruteAttacks(req: ExportBruteAttacksRequest, cb?: (error: string, rep: ExportBruteAttacksResponse) => void): Promise<ExportBruteAttacksResponse> {
        return await this.request("ExportBruteAttacks", req, cb);
    }

    /**
     * 本接口 (TrustMaliciousRequest) 用于恶意请求添加信任。
     * @public
     */
    async TrustMaliciousRequest(req: TrustMaliciousRequestRequest, cb?: (error: string, rep: TrustMaliciousRequestResponse) => void): Promise<TrustMaliciousRequestResponse> {
        return await this.request("TrustMaliciousRequest", req, cb);
    }

    /**
     * 切换高危命令规则状态
     * @public
     */
    async SwitchBashRules(req: SwitchBashRulesRequest, cb?: (error: string, rep: SwitchBashRulesResponse) => void): Promise<SwitchBashRulesResponse> {
        return await this.request("SwitchBashRules", req, cb);
    }

    /**
     * 新增或修改本地提权规则
     * @public
     */
    async EditPrivilegeRule(req: EditPrivilegeRuleRequest, cb?: (error: string, rep: EditPrivilegeRuleResponse) => void): Promise<EditPrivilegeRuleResponse> {
        return await this.request("EditPrivilegeRule", req, cb);
    }

    /**
     * 本接口 (ExportMalwares) 用于导出木马记录CSV文件。
     * @public
     */
    async ExportMalwares(req: ExportMalwaresRequest, cb?: (error: string, rep: ExportMalwaresResponse) => void): Promise<ExportMalwaresResponse> {
        return await this.request("ExportMalwares", req, cb);
    }

    /**
     * 本接口{DescribeBruteAttacks}用于获取暴力破解事件列表。
     * @public
     */
    async DescribeBruteAttacks(req: DescribeBruteAttacksRequest, cb?: (error: string, rep: DescribeBruteAttacksResponse) => void): Promise<DescribeBruteAttacksResponse> {
        return await this.request("DescribeBruteAttacks", req, cb);
    }

    /**
     * 本接口 (OpenProVersionPrepaid) 用于开通专业版(包年包月)。
     * @public
     */
    async OpenProVersionPrepaid(req: OpenProVersionPrepaidRequest, cb?: (error: string, rep: OpenProVersionPrepaidResponse) => void): Promise<OpenProVersionPrepaidResponse> {
        return await this.request("OpenProVersionPrepaid", req, cb);
    }

    /**
     * 增加机器关联标签
     * @public
     */
    async AddMachineTag(req: AddMachineTagRequest, cb?: (error: string, rep: AddMachineTagResponse) => void): Promise<AddMachineTagResponse> {
        return await this.request("AddMachineTag", req, cb);
    }

    /**
     * 新增或编辑标签
     * @public
     */
    async EditTags(req: EditTagsRequest, cb?: (error: string, rep: EditTagsResponse) => void): Promise<EditTagsResponse> {
        return await this.request("EditTags", req, cb);
    }

    /**
     * 本接口（SeparateMalwares）用于隔离木马。
     * @public
     */
    async SeparateMalwares(req: SeparateMalwaresRequest, cb?: (error: string, rep: SeparateMalwaresResponse) => void): Promise<SeparateMalwaresResponse> {
        return await this.request("SeparateMalwares", req, cb);
    }

    /**
     * 本接口（AddLoginWhiteList）用于添加白名单规则
     * @public
     */
    async AddLoginWhiteList(req: AddLoginWhiteListRequest, cb?: (error: string, rep: AddLoginWhiteListResponse) => void): Promise<AddLoginWhiteListResponse> {
        return await this.request("AddLoginWhiteList", req, cb);
    }

    /**
     * 本接口 (ExportNonlocalLoginPlaces) 用于导出异地登录事件记录CSV文件。
     * @public
     */
    async ExportNonlocalLoginPlaces(req: ExportNonlocalLoginPlacesRequest, cb?: (error: string, rep: ExportNonlocalLoginPlacesResponse) => void): Promise<ExportNonlocalLoginPlacesResponse> {
        return await this.request("ExportNonlocalLoginPlaces", req, cb);
    }

    /**
     * 本接口 (DescribeMaliciousRequests) 用于获取恶意请求数据。
     * @public
     */
    async DescribeMaliciousRequests(req: DescribeMaliciousRequestsRequest, cb?: (error: string, rep: DescribeMaliciousRequestsResponse) => void): Promise<DescribeMaliciousRequestsResponse> {
        return await this.request("DescribeMaliciousRequests", req, cb);
    }

    /**
     * 删除高危命令规则
     * @public
     */
    async DeleteBashRules(req: DeleteBashRulesRequest, cb?: (error: string, rep: DeleteBashRulesResponse) => void): Promise<DeleteBashRulesResponse> {
        return await this.request("DeleteBashRules", req, cb);
    }

    /**
     * 获取反弹Shell列表
     * @public
     */
    async DescribeReverseShellEvents(req: DescribeReverseShellEventsRequest, cb?: (error: string, rep: DescribeReverseShellEventsResponse) => void): Promise<DescribeReverseShellEventsResponse> {
        return await this.request("DescribeReverseShellEvents", req, cb);
    }

    /**
     * 本接口 (ModifyAutoOpenProVersionConfig) 用于设置新增主机自动开通专业版配置。
     * @public
     */
    async ModifyAutoOpenProVersionConfig(req: ModifyAutoOpenProVersionConfigRequest, cb?: (error: string, rep: ModifyAutoOpenProVersionConfigResponse) => void): Promise<ModifyAutoOpenProVersionConfigResponse> {
        return await this.request("ModifyAutoOpenProVersionConfig", req, cb);
    }

    /**
     * 本接口 (DescribeAgentVuls) 用于获取单台主机的漏洞列表。
     * @public
     */
    async DescribeAgentVuls(req: DescribeAgentVulsRequest, cb?: (error: string, rep: DescribeAgentVulsResponse) => void): Promise<DescribeAgentVulsResponse> {
        return await this.request("DescribeAgentVuls", req, cb);
    }

    /**
     * 本接口 (DescribeAccounts) 用于获取帐号列表数据。
     * @public
     */
    async DescribeAccounts(req: DescribeAccountsRequest, cb?: (error: string, rep: DescribeAccountsResponse) => void): Promise<DescribeAccountsResponse> {
        return await this.request("DescribeAccounts", req, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReports) 用于获取周报列表数据。
     * @public
     */
    async DescribeWeeklyReports(req: DescribeWeeklyReportsRequest, cb?: (error: string, rep: DescribeWeeklyReportsResponse) => void): Promise<DescribeWeeklyReportsResponse> {
        return await this.request("DescribeWeeklyReports", req, cb);
    }

    /**
     * 本接口 (DescribeProVersionInfo) 用于获取专业版信息。
     * @public
     */
    async DescribeProVersionInfo(req: DescribeProVersionInfoRequest, cb?: (error: string, rep: DescribeProVersionInfoResponse) => void): Promise<DescribeProVersionInfoResponse> {
        return await this.request("DescribeProVersionInfo", req, cb);
    }

    /**
     * 获取本地提权事件列表
     * @public
     */
    async DescribePrivilegeEvents(req: DescribePrivilegeEventsRequest, cb?: (error: string, rep: DescribePrivilegeEventsResponse) => void): Promise<DescribePrivilegeEventsResponse> {
        return await this.request("DescribePrivilegeEvents", req, cb);
    }

    /**
     * 本接口（DescribeMachineInfo）用于获取机器详细信息。
     * @public
     */
    async DescribeMachineInfo(req: DescribeMachineInfoRequest, cb?: (error: string, rep: DescribeMachineInfoResponse) => void): Promise<DescribeMachineInfoResponse> {
        return await this.request("DescribeMachineInfo", req, cb);
    }

    /**
     * 本接口 (DescribeAlarmAttribute) 用于获取告警设置。
     * @public
     */
    async DescribeAlarmAttribute(req: DescribeAlarmAttributeRequest, cb?: (error: string, rep: DescribeAlarmAttributeResponse) => void): Promise<DescribeAlarmAttributeResponse> {
        return await this.request("DescribeAlarmAttribute", req, cb);
    }

    /**
     * 本接口 (DescribeComponents) 用于获取组件列表数据。
     * @public
     */
    async DescribeComponents(req: DescribeComponentsRequest, cb?: (error: string, rep: DescribeComponentsResponse) => void): Promise<DescribeComponentsResponse> {
        return await this.request("DescribeComponents", req, cb);
    }

    /**
     * 获取异地登录白名单列表
     * @public
     */
    async DescribeLoginWhiteList(req: DescribeLoginWhiteListRequest, cb?: (error: string, rep: DescribeLoginWhiteListResponse) => void): Promise<DescribeLoginWhiteListResponse> {
        return await this.request("DescribeLoginWhiteList", req, cb);
    }

    /**
     * 本接口 (DescribeVulScanResult) 用于获取漏洞检测结果。

     * @public
     */
    async DescribeVulScanResult(req: DescribeVulScanResultRequest, cb?: (error: string, rep: DescribeVulScanResultResponse) => void): Promise<DescribeVulScanResultResponse> {
        return await this.request("DescribeVulScanResult", req, cb);
    }

    /**
     * 本接口 (DescribeHistoryAccounts) 用于获取帐号变更历史列表数据。
     * @public
     */
    async DescribeHistoryAccounts(req: DescribeHistoryAccountsRequest, cb?: (error: string, rep: DescribeHistoryAccountsResponse) => void): Promise<DescribeHistoryAccountsResponse> {
        return await this.request("DescribeHistoryAccounts", req, cb);
    }

    /**
     * 本接口 (DescribeProcessStatistics) 用于获取进程统计列表数据。
     * @public
     */
    async DescribeProcessStatistics(req: DescribeProcessStatisticsRequest, cb?: (error: string, rep: DescribeProcessStatisticsResponse) => void): Promise<DescribeProcessStatisticsResponse> {
        return await this.request("DescribeProcessStatistics", req, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportBruteAttacks) 用于获取专业周报密码破解数据。
     * @public
     */
    async DescribeWeeklyReportBruteAttacks(req: DescribeWeeklyReportBruteAttacksRequest, cb?: (error: string, rep: DescribeWeeklyReportBruteAttacksResponse) => void): Promise<DescribeWeeklyReportBruteAttacksResponse> {
        return await this.request("DescribeWeeklyReportBruteAttacks", req, cb);
    }

    /**
     * 本接口（UntrustMalwares）用于取消信任木马文件。
     * @public
     */
    async UntrustMalwares(req: UntrustMalwaresRequest, cb?: (error: string, rep: UntrustMalwaresResponse) => void): Promise<UntrustMalwaresResponse> {
        return await this.request("UntrustMalwares", req, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportVuls) 用于专业版周报漏洞数据。

     * @public
     */
    async DescribeWeeklyReportVuls(req: DescribeWeeklyReportVulsRequest, cb?: (error: string, rep: DescribeWeeklyReportVulsResponse) => void): Promise<DescribeWeeklyReportVulsResponse> {
        return await this.request("DescribeWeeklyReportVuls", req, cb);
    }

    /**
     * 本接口 (DescribeWeeklyReportInfo) 用于获取专业周报详情数据。
     * @public
     */
    async DescribeWeeklyReportInfo(req: DescribeWeeklyReportInfoRequest, cb?: (error: string, rep: DescribeWeeklyReportInfoResponse) => void): Promise<DescribeWeeklyReportInfoResponse> {
        return await this.request("DescribeWeeklyReportInfo", req, cb);
    }

    /**
     * 本接口 (DescribeComponentInfo) 用于获取组件信息数据。
     * @public
     */
    async DescribeComponentInfo(req: DescribeComponentInfoRequest, cb?: (error: string, rep: DescribeComponentInfoResponse) => void): Promise<DescribeComponentInfoResponse> {
        return await this.request("DescribeComponentInfo", req, cb);
    }

    /**
     * 本接口 (ModifyProVersionRenewFlag) 用于修改专业版包年包月续费标识。
     * @public
     */
    async ModifyProVersionRenewFlag(req: ModifyProVersionRenewFlagRequest, cb?: (error: string, rep: ModifyProVersionRenewFlagResponse) => void): Promise<ModifyProVersionRenewFlagResponse> {
        return await this.request("ModifyProVersionRenewFlag", req, cb);
    }

    /**
     * 设置高危命令事件状态
     * @public
     */
    async SetBashEventsStatus(req: SetBashEventsStatusRequest, cb?: (error: string, rep: SetBashEventsStatusResponse) => void): Promise<SetBashEventsStatusResponse> {
        return await this.request("SetBashEventsStatus", req, cb);
    }

    /**
     * 导出反弹Shell事件
     * @public
     */
    async ExportReverseShellEvents(req: ExportReverseShellEventsRequest, cb?: (error: string, rep: ExportReverseShellEventsResponse) => void): Promise<ExportReverseShellEventsResponse> {
        return await this.request("ExportReverseShellEvents", req, cb);
    }

    /**
     * 删除网络攻击日志
     * @public
     */
    async DeleteAttackLogs(req: DeleteAttackLogsRequest, cb?: (error: string, rep: DeleteAttackLogsResponse) => void): Promise<DeleteAttackLogsResponse> {
        return await this.request("DeleteAttackLogs", req, cb);
    }

    /**
     * 本接口（DeleteMachine）用于卸载云镜客户端。
     * @public
     */
    async DeleteMachine(req: DeleteMachineRequest, cb?: (error: string, rep: DeleteMachineResponse) => void): Promise<DeleteMachineResponse> {
        return await this.request("DeleteMachine", req, cb);
    }

    /**
     * 本接口 (DescribeProcessTaskStatus) 用于获取实时拉取进程任务状态。
     * @public
     */
    async DescribeProcessTaskStatus(req: DescribeProcessTaskStatusRequest, cb?: (error: string, rep: DescribeProcessTaskStatusResponse) => void): Promise<DescribeProcessTaskStatusResponse> {
        return await this.request("DescribeProcessTaskStatus", req, cb);
    }

    /**
     * 本接口 (RescanImpactedHost) 用于漏洞重新检测。
     * @public
     */
    async RescanImpactedHost(req: RescanImpactedHostRequest, cb?: (error: string, rep: RescanImpactedHostResponse) => void): Promise<RescanImpactedHostResponse> {
        return await this.request("RescanImpactedHost", req, cb);
    }

    /**
     * 获取所有主机标签
     * @public
     */
    async DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse> {
        return await this.request("DescribeTags", req, cb);
    }

    /**
     * 本接口 (DescribeSecurityTrends) 用于获取安全事件统计数据。
     * @public
     */
    async DescribeSecurityTrends(req: DescribeSecurityTrendsRequest, cb?: (error: string, rep: DescribeSecurityTrendsResponse) => void): Promise<DescribeSecurityTrendsResponse> {
        return await this.request("DescribeSecurityTrends", req, cb);
    }

    /**
     * 网络攻击日志详情
     * @public
     */
    async DescribeAttackLogInfo(req: DescribeAttackLogInfoRequest, cb?: (error: string, rep: DescribeAttackLogInfoResponse) => void): Promise<DescribeAttackLogInfoResponse> {
        return await this.request("DescribeAttackLogInfo", req, cb);
    }

    /**
     * 本接口 (IgnoreImpactedHosts) 用于忽略漏洞。
     * @public
     */
    async IgnoreImpactedHosts(req: IgnoreImpactedHostsRequest, cb?: (error: string, rep: IgnoreImpactedHostsResponse) => void): Promise<IgnoreImpactedHostsResponse> {
        return await this.request("IgnoreImpactedHosts", req, cb);
    }

    /**
     * 获取高危命令列表
     * @public
     */
    async DescribeBashEvents(req: DescribeBashEventsRequest, cb?: (error: string, rep: DescribeBashEventsResponse) => void): Promise<DescribeBashEventsResponse> {
        return await this.request("DescribeBashEvents", req, cb);
    }

    /**
     * 本接口 (DescribeMachines) 用于获取区域主机列表。
     * @public
     */
    async DescribeMachines(req: DescribeMachinesRequest, cb?: (error: string, rep: DescribeMachinesResponse) => void): Promise<DescribeMachinesResponse> {
        return await this.request("DescribeMachines", req, cb);
    }

    /**
     * 此接口（CreateUsualLoginPlaces）用于添加常用登录地。
     * @public
     */
    async CreateUsualLoginPlaces(req: CreateUsualLoginPlacesRequest, cb?: (error: string, rep: CreateUsualLoginPlacesResponse) => void): Promise<CreateUsualLoginPlacesResponse> {
        return await this.request("CreateUsualLoginPlaces", req, cb);
    }

    /**
     * 本接口 (InquiryPriceOpenProVersionPrepaid) 用于开通专业版询价(预付费)。
     * @public
     */
    async InquiryPriceOpenProVersionPrepaid(req: InquiryPriceOpenProVersionPrepaidRequest, cb?: (error: string, rep: InquiryPriceOpenProVersionPrepaidResponse) => void): Promise<InquiryPriceOpenProVersionPrepaidResponse> {
        return await this.request("InquiryPriceOpenProVersionPrepaid", req, cb);
    }


}
