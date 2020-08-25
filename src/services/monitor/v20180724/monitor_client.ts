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
   DescribePolicyConditionListConfigManual,
   UnBindingPolicyObjectRequest,
   DescribePolicyConditionListRequest,
   DeletePolicyGroupResponse,
   DescribeAccidentEventListAlarms,
   CreatePolicyGroupEventCondition,
   DescribeProductEventListRequest,
   DescribeProductListResponse,
   UnBindingAllPolicyObjectRequest,
   Instance,
   DescribeProductEventListEvents,
   BindingPolicyObjectDimension,
   DescribePolicyConditionListMetric,
   CreatePolicyGroupRequest,
   CreatePolicyGroupCondition,
   DescribePolicyGroupInfoReceiverInfo,
   BindingPolicyObjectRequest,
   DescribeProductEventListEventsGroupInfo,
   ModifyPolicyGroupRequest,
   DescribePolicyConditionListConfigManualPeriod,
   DescribePolicyConditionListEventMetric,
   DescribePolicyConditionListCondition,
   DescribeBasicAlarmListRequest,
   DescribePolicyGroupListResponse,
   DescribePolicyGroupInfoRequest,
   DimensionsDesc,
   DescribePolicyGroupListGroup,
   DescribeBasicAlarmListAlarms,
   DescribeProductListRequest,
   PeriodsSt,
   DescribeAccidentEventListRequest,
   DescribeProductEventListOverView,
   MetricObjectMeaning,
   MetricDatum,
   DeletePolicyGroupRequest,
   DescribePolicyGroupInfoCallback,
   DescribeBindingPolicyObjectListInstanceGroup,
   DescribePolicyConditionListResponse,
   DescribePolicyConditionListConfigManualCalcType,
   ModifyPolicyGroupResponse,
   PutMonitorDataResponse,
   ReceiverInfo,
   ModifyAlarmReceiversRequest,
   DescribeProductEventListDimensions,
   DescribePolicyGroupInfoResponse,
   DescribeBasicAlarmListResponse,
   ProductSimple,
   DescribeBindingPolicyObjectListDimension,
   DescribePolicyGroupInfoCondition,
   UnBindingPolicyObjectResponse,
   GetMonitorDataResponse,
   MetricSet,
   DescribeBindingPolicyObjectListResponse,
   DescribePolicyGroupInfoConditionTpl,
   DescribeBindingPolicyObjectListRequest,
   CreatePolicyGroupResponse,
   PutMonitorDataRequest,
   InstanceGroup,
   DescribePolicyGroupInfoEventCondition,
   DescribeBaseMetricsResponse,
   SendCustomAlarmMsgResponse,
   GetMonitorDataRequest,
   DescribePolicyConditionListConfigManualPeriodNum,
   DescribeBindingPolicyObjectListInstance,
   ModifyPolicyGroupCondition,
   ModifyPolicyGroupEventCondition,
   DescribePolicyConditionListConfigManualContinueTime,
   DescribePolicyGroupListRequest,
   DescribeAccidentEventListResponse,
   DescribeProductEventListResponse,
   DescribeBaseMetricsRequest,
   Dimension,
   DataPoint,
   UnBindingAllPolicyObjectResponse,
   DescribePolicyConditionListConfigManualStatType,
   SendCustomAlarmMsgRequest,
   DescribeProductEventListEventsDimensions,
   DescribePolicyConditionListConfigManualCalcValue,
   ModifyAlarmReceiversResponse,
   DescribePolicyGroupListGroupInstanceGroup,
   BindingPolicyObjectResponse,

} from "./monitor_models"

/**
 * monitor client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("monitor.tencentcloudapi.com", "2018-07-24", clientConfig);
    }
    
    /**
     * 分页获取产品事件的列表
     * @public
     */
    async DescribeProductEventList(req: DescribeProductEventListRequest, cb?: (error: string, rep: DescribeProductEventListResponse) => void): Promise<DescribeProductEventListResponse> {
        return await this.request("DescribeProductEventList", req, cb);
    }

    /**
     * 获取平台事件列表
     * @public
     */
    async DescribeAccidentEventList(req: DescribeAccidentEventListRequest, cb?: (error: string, rep: DescribeAccidentEventListResponse) => void): Promise<DescribeAccidentEventListResponse> {
        return await this.request("DescribeAccidentEventList", req, cb);
    }

    /**
     * 删除策略的关联对象
     * @public
     */
    async UnBindingPolicyObject(req: UnBindingPolicyObjectRequest, cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void): Promise<UnBindingPolicyObjectResponse> {
        return await this.request("UnBindingPolicyObject", req, cb);
    }

    /**
     * 将告警策略绑定到特定对象
     * @public
     */
    async BindingPolicyObject(req: BindingPolicyObjectRequest, cb?: (error: string, rep: BindingPolicyObjectResponse) => void): Promise<BindingPolicyObjectResponse> {
        return await this.request("BindingPolicyObject", req, cb);
    }

    /**
     * 修改告警接收人
     * @public
     */
    async ModifyAlarmReceivers(req: ModifyAlarmReceiversRequest, cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void): Promise<ModifyAlarmReceiversResponse> {
        return await this.request("ModifyAlarmReceivers", req, cb);
    }

    /**
     * 获取已绑定对象列表
     * @public
     */
    async DescribeBindingPolicyObjectList(req: DescribeBindingPolicyObjectListRequest, cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void): Promise<DescribeBindingPolicyObjectListResponse> {
        return await this.request("DescribeBindingPolicyObjectList", req, cb);
    }

    /**
     * 发送自定义消息告警
     * @public
     */
    async SendCustomAlarmMsg(req: SendCustomAlarmMsgRequest, cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void): Promise<SendCustomAlarmMsgResponse> {
        return await this.request("SendCustomAlarmMsg", req, cb);
    }

    /**
     * 删除告警策略组
     * @public
     */
    async DeletePolicyGroup(req: DeletePolicyGroupRequest, cb?: (error: string, rep: DeletePolicyGroupResponse) => void): Promise<DeletePolicyGroupResponse> {
        return await this.request("DeletePolicyGroup", req, cb);
    }

    /**
     * 获取基础指标详情
     * @public
     */
    async DescribeBaseMetrics(req: DescribeBaseMetricsRequest, cb?: (error: string, rep: DescribeBaseMetricsResponse) => void): Promise<DescribeBaseMetricsResponse> {
        return await this.request("DescribeBaseMetrics", req, cb);
    }

    /**
     * 获取基础策略组详情
     * @public
     */
    async DescribePolicyGroupInfo(req: DescribePolicyGroupInfoRequest, cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void): Promise<DescribePolicyGroupInfoResponse> {
        return await this.request("DescribePolicyGroupInfo", req, cb);
    }

    /**
     * 查询云监控产品列表
     * @public
     */
    async DescribeProductList(req: DescribeProductListRequest, cb?: (error: string, rep: DescribeProductListResponse) => void): Promise<DescribeProductListResponse> {
        return await this.request("DescribeProductList", req, cb);
    }

    /**
     * 获取基础策略告警组列表
     * @public
     */
    async DescribePolicyGroupList(req: DescribePolicyGroupListRequest, cb?: (error: string, rep: DescribePolicyGroupListResponse) => void): Promise<DescribePolicyGroupListResponse> {
        return await this.request("DescribePolicyGroupList", req, cb);
    }

    /**
     * 获取基础告警列表
     * @public
     */
    async DescribeBasicAlarmList(req: DescribeBasicAlarmListRequest, cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void): Promise<DescribeBasicAlarmListResponse> {
        return await this.request("DescribeBasicAlarmList", req, cb);
    }

    /**
     * 获取云产品的监控数据。传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     * @public
     */
    async GetMonitorData(req: GetMonitorDataRequest, cb?: (error: string, rep: GetMonitorDataResponse) => void): Promise<GetMonitorDataResponse> {
        return await this.request("GetMonitorData", req, cb);
    }

    /**
     * 更新策略组
     * @public
     */
    async ModifyPolicyGroup(req: ModifyPolicyGroupRequest, cb?: (error: string, rep: ModifyPolicyGroupResponse) => void): Promise<ModifyPolicyGroupResponse> {
        return await this.request("ModifyPolicyGroup", req, cb);
    }

    /**
     * 增加策略组
     * @public
     */
    async CreatePolicyGroup(req: CreatePolicyGroupRequest, cb?: (error: string, rep: CreatePolicyGroupResponse) => void): Promise<CreatePolicyGroupResponse> {
        return await this.request("CreatePolicyGroup", req, cb);
    }

    /**
     * 删除全部的关联对象
     * @public
     */
    async UnBindingAllPolicyObject(req: UnBindingAllPolicyObjectRequest, cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void): Promise<UnBindingAllPolicyObjectResponse> {
        return await this.request("UnBindingAllPolicyObject", req, cb);
    }

    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     * @public
     */
    async PutMonitorData(req: PutMonitorDataRequest, cb?: (error: string, rep: PutMonitorDataResponse) => void): Promise<PutMonitorDataResponse> {
        return await this.request("PutMonitorData", req, cb);
    }

    /**
     * 获取基础告警策略条件
     * @public
     */
    async DescribePolicyConditionList(req: DescribePolicyConditionListRequest, cb?: (error: string, rep: DescribePolicyConditionListResponse) => void): Promise<DescribePolicyConditionListResponse> {
        return await this.request("DescribePolicyConditionList", req, cb);
    }


}
