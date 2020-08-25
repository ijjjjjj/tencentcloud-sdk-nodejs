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
   CreateLiveSnapshotRuleRequest,
   BillDataInfo,
   EnableLiveDomainResponse,
   CreateLiveCertRequest,
   StopRecordTaskResponse,
   DescribeDeliverBandwidthListResponse,
   DeleteLiveRecordRuleRequest,
   ResumeLiveStreamRequest,
   DeleteLiveTranscodeTemplateResponse,
   DescribeBillBandwidthAndFluxListResponse,
   TemplateInfo,
   DeleteLiveCallbackRuleResponse,
   ResumeDelayLiveStreamRequest,
   DescribeLiveWatermarkRulesResponse,
   DescribeLiveCallbackTemplateResponse,
   DeleteLiveSnapshotTemplateRequest,
   DescribeGroupProIspPlayInfoListResponse,
   PushAuthKeyInfo,
   DomainInfoList,
   DeleteLiveRecordTemplateRequest,
   DeleteLiveCallbackTemplateResponse,
   DescribeLiveStreamOnlineListResponse,
   PushQualityData,
   ModifyLivePlayAuthKeyRequest,
   DescribeLiveDelayInfoListRequest,
   DomainCertInfo,
   RecordTemplateInfo,
   DeleteLiveTranscodeRuleResponse,
   ConcurrentRecordStreamNum,
   DescribeStreamPlayInfoListResponse,
   DescribeScreenShotSheetNumListResponse,
   ModifyLiveSnapshotTemplateResponse,
   ModifyLivePushAuthKeyRequest,
   DeleteLiveCallbackTemplateRequest,
   DescribeLiveStreamStateRequest,
   DescribeLivePlayAuthKeyResponse,
   DescribeLiveCallbackTemplatesRequest,
   DomainInfo,
   DescribeLiveTranscodeRulesRequest,
   DeleteLiveSnapshotRuleRequest,
   DescribePlayErrorCodeDetailInfoListRequest,
   DescribeBillBandwidthAndFluxListRequest,
   CommonMixOutputParams,
   DescribeLiveSnapshotRulesResponse,
   DescribeLiveTranscodeDetailInfoResponse,
   DescribeLiveDomainRequest,
   DescribeLiveStreamPublishedListRequest,
   DeleteLiveTranscodeRuleRequest,
   CreateLiveRecordRuleRequest,
   DescribeLiveSnapshotTemplatesRequest,
   AddLiveWatermarkResponse,
   DescribeLiveStreamPushInfoListResponse,
   DescribeLiveDomainCertResponse,
   DescribeLiveRecordTemplateRequest,
   ModifyLiveDomainCertRequest,
   StreamOnlineInfo,
   CreateLiveWatermarkRuleResponse,
   DescribeProIspPlaySumInfoListRequest,
   DescribeDeliverBandwidthListRequest,
   PlayCodeTotalInfo,
   AddLiveWatermarkRequest,
   ModifyLiveTranscodeTemplateResponse,
   ModifyLiveRecordTemplateResponse,
   ModifyLivePlayDomainRequest,
   DeleteLiveRecordTemplateResponse,
   DescribeLiveWatermarkRequest,
   LogInfo,
   AddDelayLiveStreamRequest,
   DescribeLiveDomainCertRequest,
   DescribeLiveStreamEventListRequest,
   DescribePullStreamConfigsRequest,
   CallBackTemplateInfo,
   DescribePlayErrorCodeSumInfoListResponse,
   UnBindLiveDomainCertRequest,
   DeleteLiveRecordResponse,
   DescribeScreenShotSheetNumListRequest,
   ForbidLiveStreamRequest,
   DescribeLiveDomainsResponse,
   TimeValue,
   PullStreamConfig,
   CreateLiveRecordResponse,
   RuleInfo,
   UpdateLiveWatermarkResponse,
   LivePackageInfo,
   CreateLiveTranscodeTemplateResponse,
   PlayDataInfoByStream,
   DescribeVisitTopSumInfoListRequest,
   DayStreamPlayInfo,
   ModifyPullStreamStatusResponse,
   ModifyLivePlayDomainResponse,
   CancelCommonMixStreamResponse,
   DescribeConcurrentRecordStreamNumResponse,
   DescribeLiveCertsResponse,
   CommonMixInputParam,
   DescribeProvinceIspPlayInfoListResponse,
   DescribeLiveRecordTemplatesResponse,
   DescribeLiveCertRequest,
   DescribeLiveCallbackTemplatesResponse,
   ModifyLivePlayAuthKeyResponse,
   CreateLiveCallbackTemplateRequest,
   DescribeTopClientIpSumInfoListResponse,
   DropLiveStreamResponse,
   DescribeLiveStreamStateResponse,
   StopLiveRecordRequest,
   DeletePullStreamConfigResponse,
   DeleteLiveWatermarkRuleRequest,
   StreamEventInfo,
   DeleteRecordTaskResponse,
   DescribeLiveWatermarksRequest,
   DescribeLivePackageInfoResponse,
   CreateLiveTranscodeRuleRequest,
   DescribeLiveWatermarkRulesRequest,
   DropLiveStreamRequest,
   CreateCommonMixStreamRequest,
   CreateLiveCertResponse,
   PushDataInfo,
   CommonMixLayoutParams,
   DescribeGroupProIspPlayInfoListRequest,
   ModifyPullStreamStatusRequest,
   DescribeStreamDayPlayInfoListRequest,
   TranscodeDetailInfo,
   DescribeLiveSnapshotTemplateResponse,
   DescribeLiveTranscodeRulesResponse,
   AddLiveDomainRequest,
   StreamName,
   DescribeLivePackageInfoRequest,
   CreatePullStreamConfigRequest,
   DescribeLiveCertsRequest,
   CdnPlayStatData,
   AddLiveDomainResponse,
   DescribeHttpStatusInfoListRequest,
   ModifyPullStreamConfigResponse,
   ModifyLiveCallbackTemplateRequest,
   DescribeProvinceIspPlayInfoListRequest,
   DescribeLivePlayAuthKeyRequest,
   DescribeLiveForbidStreamListResponse,
   DescribeStreamPushInfoListRequest,
   DescribeLiveWatermarkResponse,
   ResumeLiveStreamResponse,
   ModifyLiveRecordTemplateRequest,
   DeletePullStreamConfigRequest,
   ModifyPullStreamConfigRequest,
   DescribeStreamPushInfoListResponse,
   DescribeLiveStreamPushInfoListRequest,
   DescribeLiveWatermarksResponse,
   WatermarkInfo,
   DescribeLiveForbidStreamListRequest,
   DescribeLiveDomainPlayInfoListRequest,
   CreatePullStreamConfigResponse,
   BindLiveDomainCertRequest,
   DescribeTopClientIpSumInfoListRequest,
   CreateLiveCallbackRuleRequest,
   DeleteLiveWatermarkRuleResponse,
   PublishTime,
   ModifyLiveCertResponse,
   MonitorStreamPlayInfo,
   DescribeLiveTranscodeDetailInfoRequest,
   ProIspPlayCodeDataInfo,
   DeleteLiveWatermarkRequest,
   DescribeLiveDomainsRequest,
   ProIspPlaySumInfo,
   SnapshotTemplateInfo,
   DeleteLiveSnapshotRuleResponse,
   CreateLiveRecordRequest,
   ForbidLiveStreamResponse,
   BandwidthInfo,
   DescribeLogDownloadListResponse,
   CancelCommonMixStreamRequest,
   UpdateLiveWatermarkRequest,
   CertInfo,
   ModifyLivePushAuthKeyResponse,
   DescribeLiveDelayInfoListResponse,
   DeleteLiveTranscodeTemplateRequest,
   DescribeLiveCallbackRulesRequest,
   ClientIpPlaySumInfo,
   DescribeLiveTranscodeTemplateResponse,
   CreateLiveSnapshotTemplateResponse,
   DescribeConcurrentRecordStreamNumRequest,
   DescribePlayErrorCodeSumInfoListRequest,
   ModifyLiveCertRequest,
   CommonMixControlParams,
   UnBindLiveDomainCertResponse,
   ForbidLiveDomainRequest,
   DescribeLiveRecordRulesRequest,
   DescribePlayErrorCodeDetailInfoListResponse,
   CreateLiveRecordTemplateResponse,
   RecordParam,
   DomainDetailInfo,
   HttpStatusInfo,
   DeleteLiveRecordRequest,
   DescribeLiveSnapshotTemplatesResponse,
   StopRecordTaskRequest,
   HttpStatusData,
   HttpCodeInfo,
   DescribeStreamPlayInfoListRequest,
   CreateLiveTranscodeTemplateRequest,
   DescribeLiveStreamPublishedListResponse,
   DeleteLiveDomainRequest,
   AddDelayLiveStreamResponse,
   DescribeLiveTranscodeTemplatesResponse,
   DeleteLiveCallbackRuleRequest,
   PlayAuthKeyInfo,
   ModifyLiveTranscodeTemplateRequest,
   ModifyLiveDomainCertResponse,
   ModifyLiveCallbackTemplateResponse,
   EnableLiveDomainRequest,
   DescribeAllStreamPlayInfoListResponse,
   ForbidLiveDomainResponse,
   DescribeLiveSnapshotRulesRequest,
   CreateRecordTaskRequest,
   CreateLiveTranscodeRuleResponse,
   CreateLiveCallbackRuleResponse,
   DescribeLiveRecordTemplateResponse,
   DescribeVisitTopSumInfoListResponse,
   BindLiveDomainCertResponse,
   CallBackRuleInfo,
   PlaySumStatInfo,
   DescribeLiveTranscodeTemplatesRequest,
   HlsSpecialParam,
   DescribeLiveRecordRulesResponse,
   CreateLiveSnapshotTemplateRequest,
   DescribeLiveDomainPlayInfoListResponse,
   HttpCodeValue,
   DescribeLiveStreamOnlineListRequest,
   DeleteLiveSnapshotTemplateResponse,
   DescribeLiveSnapshotTemplateRequest,
   DeleteLiveCertResponse,
   CreateCommonMixStreamResponse,
   CreateLiveCallbackTemplateResponse,
   DescribeLivePushAuthKeyRequest,
   PlayStatInfo,
   DescribeLiveCallbackTemplateRequest,
   ModifyLiveSnapshotTemplateRequest,
   DescribeLiveCertResponse,
   CreateLiveRecordRuleResponse,
   DescribeLiveTranscodeTemplateRequest,
   DescribeLogDownloadListRequest,
   DeleteLiveWatermarkResponse,
   DescribeLivePushAuthKeyResponse,
   CreateLiveWatermarkRuleRequest,
   DescribeLiveRecordTemplatesRequest,
   DescribeAllStreamPlayInfoListRequest,
   DescribeLiveDomainResponse,
   DeleteRecordTaskRequest,
   StopLiveRecordResponse,
   DescribeStreamDayPlayInfoListResponse,
   CreateLiveSnapshotRuleResponse,
   DelayInfo,
   DescribeLiveStreamEventListResponse,
   DescribePullStreamConfigsResponse,
   DescribeLiveCallbackRulesResponse,
   CreateRecordTaskResponse,
   ForbidStreamInfo,
   ResumeDelayLiveStreamResponse,
   GroupProIspDataInfo,
   DeleteLiveDomainResponse,
   CommonMixCropParams,
   CreateLiveRecordTemplateRequest,
   DescribeProIspPlaySumInfoListResponse,
   DeleteLiveCertRequest,
   DescribeHttpStatusInfoListResponse,
   DeleteLiveRecordRuleResponse,

} from "./live_models"

/**
 * live client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("live.tencentcloudapi.com", "2018-08-01", clientConfig);
    }
    
    /**
     * 断开推流连接，但可以重新推流。
     * @public
     */
    async DropLiveStream(req: DropLiveStreamRequest, cb?: (error: string, rep: DropLiveStreamResponse) => void): Promise<DropLiveStreamResponse> {
        return await this.request("DropLiveStream", req, cb);
    }

    /**
     * 查询水印列表。
     * @public
     */
    async DescribeLiveWatermarks(req: DescribeLiveWatermarksRequest, cb?: (error: string, rep: DescribeLiveWatermarksResponse) => void): Promise<DescribeLiveWatermarksResponse> {
        return await this.request("DescribeLiveWatermarks", req, cb);
    }

    /**
     * 查询并发录制路数，对慢直播和普通直播适用。
     * @public
     */
    async DescribeConcurrentRecordStreamNum(req: DescribeConcurrentRecordStreamNumRequest, cb?: (error: string, rep: DescribeConcurrentRecordStreamNumResponse) => void): Promise<DescribeConcurrentRecordStreamNumResponse> {
        return await this.request("DescribeConcurrentRecordStreamNum", req, cb);
    }

    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式【默认模式】。
    需要传入开始时间与结束时间，录制任务根据起止时间自动开始与结束。在所设置结束时间过期之前（且未调用StopLiveRecord提前终止任务），录制任务都是有效的，期间多次断流然后重推都会启动录制任务。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及按不同起止时间调用都有可能产生重复录制任务，进而导致额外录制费用。
  2. 受限于音视频文件格式（FLV/MP4/HLS）对编码类型的支持，视频编码类型支持 H.264，音频编码类型支持 AAC。
  3. 为避免恶意或非主观的频繁 API 请求，对定时录制模式最大创建任务数做了限制：其中，当天可以创建的最大任务数不超过4000（不含已删除的任务）；当前时刻并发运行的任务数不超过400。有超出此限制的需要提工单申请。
  4. 此调用方式暂时不支持海外推流录制。
     * @public
     */
    async CreateLiveRecord(req: CreateLiveRecordRequest, cb?: (error: string, rep: CreateLiveRecordResponse) => void): Promise<CreateLiveRecordResponse> {
        return await this.request("CreateLiveRecord", req, cb);
    }

    /**
     * 更新水印。
     * @public
     */
    async UpdateLiveWatermark(req: UpdateLiveWatermarkRequest, cb?: (error: string, rep: UpdateLiveWatermarkResponse) => void): Promise<UpdateLiveWatermarkResponse> {
        return await this.request("UpdateLiveWatermark", req, cb);
    }

    /**
     * 修改截图模板配置。
     * @public
     */
    async ModifyLiveSnapshotTemplate(req: ModifyLiveSnapshotTemplateRequest, cb?: (error: string, rep: ModifyLiveSnapshotTemplateResponse) => void): Promise<ModifyLiveSnapshotTemplateResponse> {
        return await this.request("ModifyLiveSnapshotTemplate", req, cb);
    }

    /**
     * 修改录制模板配置。
     * @public
     */
    async ModifyLiveRecordTemplate(req: ModifyLiveRecordTemplateRequest, cb?: (error: string, rep: ModifyLiveRecordTemplateResponse) => void): Promise<ModifyLiveRecordTemplateResponse> {
        return await this.request("ModifyLiveRecordTemplate", req, cb);
    }

    /**
     * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
     * @public
     */
    async CreateLiveWatermarkRule(req: CreateLiveWatermarkRuleRequest, cb?: (error: string, rep: CreateLiveWatermarkRuleResponse) => void): Promise<CreateLiveWatermarkRuleResponse> {
        return await this.request("CreateLiveWatermarkRule", req, cb);
    }

    /**
     * 用于查询推断流事件。<br>

注意：该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     * @public
     */
    async DescribeLiveStreamEventList(req: DescribeLiveStreamEventListRequest, cb?: (error: string, rep: DescribeLiveStreamEventListResponse) => void): Promise<DescribeLiveStreamEventListResponse> {
        return await this.request("DescribeLiveStreamEventList", req, cb);
    }

    /**
     * 查询直播拉流配置。
     * @public
     */
    async DescribePullStreamConfigs(req: DescribePullStreamConfigsRequest, cb?: (error: string, rep: DescribePullStreamConfigsResponse) => void): Promise<DescribePullStreamConfigsResponse> {
        return await this.request("DescribePullStreamConfigs", req, cb);
    }

    /**
     * 查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     * @public
     */
    async DescribeHttpStatusInfoList(req: DescribeHttpStatusInfoListRequest, cb?: (error: string, rep: DescribeHttpStatusInfoListResponse) => void): Promise<DescribeHttpStatusInfoListResponse> {
        return await this.request("DescribeHttpStatusInfoList", req, cb);
    }

    /**
     * 查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     * @public
     */
    async DescribeProvinceIspPlayInfoList(req: DescribeProvinceIspPlayInfoListRequest, cb?: (error: string, rep: DescribeProvinceIspPlayInfoListResponse) => void): Promise<DescribeProvinceIspPlayInfoListResponse> {
        return await this.request("DescribeProvinceIspPlayInfoList", req, cb);
    }

    /**
     * 修改播放域名信息。
     * @public
     */
    async ModifyLivePlayDomain(req: ModifyLivePlayDomainRequest, cb?: (error: string, rep: ModifyLivePlayDomainResponse) => void): Promise<ModifyLivePlayDomainResponse> {
        return await this.request("ModifyLivePlayDomain", req, cb);
    }

    /**
     * 查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     * @public
     */
    async DescribeStreamPushInfoList(req: DescribeStreamPushInfoListRequest, cb?: (error: string, rep: DescribeStreamPushInfoListResponse) => void): Promise<DescribeStreamPushInfoListResponse> {
        return await this.request("DescribeStreamPushInfoList", req, cb);
    }

    /**
     * 获取截图规则列表
     * @public
     */
    async DescribeLiveSnapshotRules(req: DescribeLiveSnapshotRulesRequest, cb?: (error: string, rep: DescribeLiveSnapshotRulesResponse) => void): Promise<DescribeLiveSnapshotRulesResponse> {
        return await this.request("DescribeLiveSnapshotRules", req, cb);
    }

    /**
     * 删除转码模板。
     * @public
     */
    async DeleteLiveTranscodeTemplate(req: DeleteLiveTranscodeTemplateRequest, cb?: (error: string, rep: DeleteLiveTranscodeTemplateResponse) => void): Promise<DeleteLiveTranscodeTemplateResponse> {
        return await this.request("DeleteLiveTranscodeTemplate", req, cb);
    }

    /**
     * 查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     * @public
     */
    async DescribeTopClientIpSumInfoList(req: DescribeTopClientIpSumInfoListRequest, cb?: (error: string, rep: DescribeTopClientIpSumInfoListResponse) => void): Promise<DescribeTopClientIpSumInfoListResponse> {
        return await this.request("DescribeTopClientIpSumInfoList", req, cb);
    }

    /**
     * 修改直播拉流配置的状态。
     * @public
     */
    async ModifyPullStreamStatus(req: ModifyPullStreamStatusRequest, cb?: (error: string, rep: ModifyPullStreamStatusResponse) => void): Promise<ModifyPullStreamStatusResponse> {
        return await this.request("ModifyPullStreamStatus", req, cb);
    }

    /**
     * 获取录制模板列表。
     * @public
     */
    async DescribeLiveRecordTemplates(req: DescribeLiveRecordTemplatesRequest, cb?: (error: string, rep: DescribeLiveRecordTemplatesResponse) => void): Promise<DescribeLiveRecordTemplatesResponse> {
        return await this.request("DescribeLiveRecordTemplates", req, cb);
    }

    /**
     * 修改域名和证书绑定信息
     * @public
     */
    async ModifyLiveDomainCert(req: ModifyLiveDomainCertRequest, cb?: (error: string, rep: ModifyLiveDomainCertResponse) => void): Promise<ModifyLiveDomainCertResponse> {
        return await this.request("ModifyLiveDomainCert", req, cb);
    }

    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     * @public
     */
    async DescribeVisitTopSumInfoList(req: DescribeVisitTopSumInfoListRequest, cb?: (error: string, rep: DescribeVisitTopSumInfoListResponse) => void): Promise<DescribeVisitTopSumInfoListResponse> {
        return await this.request("DescribeVisitTopSumInfoList", req, cb);
    }

    /**
     * 获取域名证书信息。
     * @public
     */
    async DescribeLiveDomainCert(req: DescribeLiveDomainCertRequest, cb?: (error: string, rep: DescribeLiveDomainCertResponse) => void): Promise<DescribeLiveDomainCertResponse> {
        return await this.request("DescribeLiveDomainCert", req, cb);
    }

    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。
     * @public
     */
    async AddLiveWatermark(req: AddLiveWatermarkRequest, cb?: (error: string, rep: AddLiveWatermarkResponse) => void): Promise<AddLiveWatermarkResponse> {
        return await this.request("AddLiveWatermark", req, cb);
    }

    /**
     * 删除水印规则
     * @public
     */
    async DeleteLiveWatermarkRule(req: DeleteLiveWatermarkRuleRequest, cb?: (error: string, rep: DeleteLiveWatermarkRuleResponse) => void): Promise<DeleteLiveWatermarkRuleResponse> {
        return await this.request("DeleteLiveWatermarkRule", req, cb);
    }

    /**
     * 删除回调规则。
     * @public
     */
    async DeleteLiveCallbackRule(req: DeleteLiveCallbackRuleRequest, cb?: (error: string, rep: DeleteLiveCallbackRuleResponse) => void): Promise<DeleteLiveCallbackRuleResponse> {
        return await this.request("DeleteLiveCallbackRule", req, cb);
    }

    /**
     * 更新拉流配置。
     * @public
     */
    async ModifyPullStreamConfig(req: ModifyPullStreamConfigRequest, cb?: (error: string, rep: ModifyPullStreamConfigResponse) => void): Promise<ModifyPullStreamConfigResponse> {
        return await this.request("ModifyPullStreamConfig", req, cb);
    }

    /**
     * 创建截图模板，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     * @public
     */
    async CreateLiveSnapshotTemplate(req: CreateLiveSnapshotTemplateRequest, cb?: (error: string, rep: CreateLiveSnapshotTemplateResponse) => void): Promise<CreateLiveSnapshotTemplateResponse> {
        return await this.request("CreateLiveSnapshotTemplate", req, cb);
    }

    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。
注意：该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     * @public
     */
    async DescribeLiveStreamOnlineList(req: DescribeLiveStreamOnlineListRequest, cb?: (error: string, rep: DescribeLiveStreamOnlineListResponse) => void): Promise<DescribeLiveStreamOnlineListResponse> {
        return await this.request("DescribeLiveStreamOnlineList", req, cb);
    }

    /**
     * 删除回调模板。
     * @public
     */
    async DeleteLiveCallbackTemplate(req: DeleteLiveCallbackTemplateRequest, cb?: (error: string, rep: DeleteLiveCallbackTemplateResponse) => void): Promise<DeleteLiveCallbackTemplateResponse> {
        return await this.request("DeleteLiveCallbackTemplate", req, cb);
    }

    /**
     * 查询直播推流鉴权key
     * @public
     */
    async DescribeLivePushAuthKey(req: DescribeLivePushAuthKeyRequest, cb?: (error: string, rep: DescribeLivePushAuthKeyResponse) => void): Promise<DescribeLivePushAuthKeyResponse> {
        return await this.request("DescribeLivePushAuthKey", req, cb);
    }

    /**
     * 删除直播拉流配置。
     * @public
     */
    async DeletePullStreamConfig(req: DeletePullStreamConfigRequest, cb?: (error: string, rep: DeletePullStreamConfigResponse) => void): Promise<DeletePullStreamConfigResponse> {
        return await this.request("DeletePullStreamConfig", req, cb);
    }

    /**
     * 获取单个录制模板。
     * @public
     */
    async DescribeLiveRecordTemplate(req: DescribeLiveRecordTemplateRequest, cb?: (error: string, rep: DescribeLiveRecordTemplateResponse) => void): Promise<DescribeLiveRecordTemplateResponse> {
        return await this.request("DescribeLiveRecordTemplate", req, cb);
    }

    /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     * @public
     */
    async CreateCommonMixStream(req: CreateCommonMixStreamRequest, cb?: (error: string, rep: CreateCommonMixStreamResponse) => void): Promise<CreateCommonMixStreamResponse> {
        return await this.request("CreateCommonMixStream", req, cb);
    }

    /**
     * 删除水印。
     * @public
     */
    async DeleteLiveWatermark(req: DeleteLiveWatermarkRequest, cb?: (error: string, rep: DeleteLiveWatermarkResponse) => void): Promise<DeleteLiveWatermarkResponse> {
        return await this.request("DeleteLiveWatermark", req, cb);
    }

    /**
     * 查询下行播放错误码信息。
     * @public
     */
    async DescribePlayErrorCodeSumInfoList(req: DescribePlayErrorCodeSumInfoListRequest, cb?: (error: string, rep: DescribePlayErrorCodeSumInfoListResponse) => void): Promise<DescribePlayErrorCodeSumInfoListResponse> {
        return await this.request("DescribePlayErrorCodeSumInfoList", req, cb);
    }

    /**
     * 对流设置延播时间
注意：如果在推流前设置延播，需要提前5分钟设置。
目前该接口只支持流粒度的，域名及应用粒度功能支持当前开发中。
使用场景：对重要直播，避免出现突发状况，可通过设置延迟播放，提前做好把控。

     * @public
     */
    async AddDelayLiveStream(req: AddDelayLiveStreamRequest, cb?: (error: string, rep: AddDelayLiveStreamResponse) => void): Promise<AddDelayLiveStreamResponse> {
        return await this.request("AddDelayLiveStream", req, cb);
    }

    /**
     * 查询天维度每条流的播放数据，包括总流量等。
     * @public
     */
    async DescribeStreamDayPlayInfoList(req: DescribeStreamDayPlayInfoListRequest, cb?: (error: string, rep: DescribeStreamDayPlayInfoListResponse) => void): Promise<DescribeStreamDayPlayInfoListResponse> {
        return await this.request("DescribeStreamDayPlayInfoList", req, cb);
    }

    /**
     * 修改直播推流鉴权key
     * @public
     */
    async ModifyLivePushAuthKey(req: ModifyLivePushAuthKeyRequest, cb?: (error: string, rep: ModifyLivePushAuthKeyResponse) => void): Promise<ModifyLivePushAuthKeyResponse> {
        return await this.request("ModifyLivePushAuthKey", req, cb);
    }

    /**
     * 修改转码模板配置。
     * @public
     */
    async ModifyLiveTranscodeTemplate(req: ModifyLiveTranscodeTemplateRequest, cb?: (error: string, rep: ModifyLiveTranscodeTemplateResponse) => void): Promise<ModifyLiveTranscodeTemplateResponse> {
        return await this.request("ModifyLiveTranscodeTemplate", req, cb);
    }

    /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     * @public
     */
    async DeleteLiveTranscodeRule(req: DeleteLiveTranscodeRuleRequest, cb?: (error: string, rep: DeleteLiveTranscodeRuleResponse) => void): Promise<DeleteLiveTranscodeRuleResponse> {
        return await this.request("DeleteLiveTranscodeRule", req, cb);
    }

    /**
     * 删除截图规则。
     * @public
     */
    async DeleteLiveSnapshotRule(req: DeleteLiveSnapshotRuleRequest, cb?: (error: string, rep: DeleteLiveSnapshotRuleResponse) => void): Promise<DeleteLiveSnapshotRuleResponse> {
        return await this.request("DeleteLiveSnapshotRule", req, cb);
    }

    /**
     * 获取禁推流列表。
     * @public
     */
    async DescribeLiveForbidStreamList(req: DescribeLiveForbidStreamListRequest, cb?: (error: string, rep: DescribeLiveForbidStreamListResponse) => void): Promise<DescribeLiveForbidStreamListResponse> {
        return await this.request("DescribeLiveForbidStreamList", req, cb);
    }

    /**
     * 获取证书信息
     * @public
     */
    async DescribeLiveCert(req: DescribeLiveCertRequest, cb?: (error: string, rep: DescribeLiveCertResponse) => void): Promise<DescribeLiveCertResponse> {
        return await this.request("DescribeLiveCert", req, cb);
    }

    /**
     * 修改证书
     * @public
     */
    async ModifyLiveCert(req: ModifyLiveCertRequest, cb?: (error: string, rep: ModifyLiveCertResponse) => void): Promise<ModifyLiveCertResponse> {
        return await this.request("ModifyLiveCert", req, cb);
    }

    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     * @public
     */
    async DescribeLiveDomains(req: DescribeLiveDomainsRequest, cb?: (error: string, rep: DescribeLiveDomainsResponse) => void): Promise<DescribeLiveDomainsResponse> {
        return await this.request("DescribeLiveDomains", req, cb);
    }

    /**
     * 删除域名对应的证书
     * @public
     */
    async DeleteLiveCert(req: DeleteLiveCertRequest, cb?: (error: string, rep: DeleteLiveCertResponse) => void): Promise<DeleteLiveCertResponse> {
        return await this.request("DeleteLiveCert", req, cb);
    }

    /**
     * 创建回调模板，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     * @public
     */
    async CreateLiveCallbackTemplate(req: CreateLiveCallbackTemplateRequest, cb?: (error: string, rep: CreateLiveCallbackTemplateResponse) => void): Promise<CreateLiveCallbackTemplateResponse> {
        return await this.request("CreateLiveCallbackTemplate", req, cb);
    }

    /**
     * 恢复某条流的推流。
     * @public
     */
    async ResumeLiveStream(req: ResumeLiveStreamRequest, cb?: (error: string, rep: ResumeLiveStreamResponse) => void): Promise<ResumeLiveStreamResponse> {
        return await this.request("ResumeLiveStream", req, cb);
    }

    /**
     * 获取单个回调模板。
     * @public
     */
    async DescribeLiveCallbackTemplate(req: DescribeLiveCallbackTemplateRequest, cb?: (error: string, rep: DescribeLiveCallbackTemplateResponse) => void): Promise<DescribeLiveCallbackTemplateResponse> {
        return await this.request("DescribeLiveCallbackTemplate", req, cb);
    }

    /**
     * 删除已添加的直播域名
     * @public
     */
    async DeleteLiveDomain(req: DeleteLiveDomainRequest, cb?: (error: string, rep: DeleteLiveDomainResponse) => void): Promise<DeleteLiveDomainResponse> {
        return await this.request("DeleteLiveDomain", req, cb);
    }

    /**
     * 修改回调模板。
     * @public
     */
    async ModifyLiveCallbackTemplate(req: ModifyLiveCallbackTemplateRequest, cb?: (error: string, rep: ModifyLiveCallbackTemplateResponse) => void): Promise<ModifyLiveCallbackTemplateResponse> {
        return await this.request("ModifyLiveCallbackTemplate", req, cb);
    }

    /**
     * 查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     * @public
     */
    async DescribeProIspPlaySumInfoList(req: DescribeProIspPlaySumInfoListRequest, cb?: (error: string, rep: DescribeProIspPlaySumInfoListResponse) => void): Promise<DescribeProIspPlaySumInfoListResponse> {
        return await this.request("DescribeProIspPlaySumInfoList", req, cb);
    }

    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
     * @public
     */
    async DescribeStreamPlayInfoList(req: DescribeStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeStreamPlayInfoListResponse) => void): Promise<DescribeStreamPlayInfoListResponse> {
        return await this.request("DescribeStreamPlayInfoList", req, cb);
    }

    /**
     * 添加证书
     * @public
     */
    async CreateLiveCert(req: CreateLiveCertRequest, cb?: (error: string, rep: CreateLiveCertResponse) => void): Promise<CreateLiveCertResponse> {
        return await this.request("CreateLiveCert", req, cb);
    }

    /**
     * 获取转码规则列表
     * @public
     */
    async DescribeLiveTranscodeRules(req: DescribeLiveTranscodeRulesRequest, cb?: (error: string, rep: DescribeLiveTranscodeRulesResponse) => void): Promise<DescribeLiveTranscodeRulesResponse> {
        return await this.request("DescribeLiveTranscodeRules", req, cb);
    }

    /**
     * 获取单个截图模板。
     * @public
     */
    async DescribeLiveSnapshotTemplate(req: DescribeLiveSnapshotTemplateRequest, cb?: (error: string, rep: DescribeLiveSnapshotTemplateResponse) => void): Promise<DescribeLiveSnapshotTemplateResponse> {
        return await this.request("DescribeLiveSnapshotTemplate", req, cb);
    }

    /**
     * 获取回调模板列表
     * @public
     */
    async DescribeLiveCallbackTemplates(req: DescribeLiveCallbackTemplatesRequest, cb?: (error: string, rep: DescribeLiveCallbackTemplatesResponse) => void): Promise<DescribeLiveCallbackTemplatesResponse> {
        return await this.request("DescribeLiveCallbackTemplates", req, cb);
    }

    /**
     * 提前结束录制，并中止运行中的录制任务。任务被成功中止后将不再启动。
     * @public
     */
    async StopRecordTask(req: StopRecordTaskRequest, cb?: (error: string, rep: StopRecordTaskResponse) => void): Promise<StopRecordTaskResponse> {
        return await this.request("StopRecordTask", req, cb);
    }

    /**
     * 获取截图模板列表。
     * @public
     */
    async DescribeLiveSnapshotTemplates(req: DescribeLiveSnapshotTemplatesRequest, cb?: (error: string, rep: DescribeLiveSnapshotTemplatesResponse) => void): Promise<DescribeLiveSnapshotTemplatesResponse> {
        return await this.request("DescribeLiveSnapshotTemplates", req, cb);
    }

    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     * @public
     */
    async StopLiveRecord(req: StopLiveRecordRequest, cb?: (error: string, rep: StopLiveRecordResponse) => void): Promise<StopLiveRecordResponse> {
        return await this.request("StopLiveRecord", req, cb);
    }

    /**
     * 修改播放鉴权key
     * @public
     */
    async ModifyLivePlayAuthKey(req: ModifyLivePlayAuthKeyRequest, cb?: (error: string, rep: ModifyLivePlayAuthKeyResponse) => void): Promise<ModifyLivePlayAuthKeyResponse> {
        return await this.request("ModifyLivePlayAuthKey", req, cb);
    }

    /**
     * 获取单个转码模板。
     * @public
     */
    async DescribeLiveTranscodeTemplate(req: DescribeLiveTranscodeTemplateRequest, cb?: (error: string, rep: DescribeLiveTranscodeTemplateResponse) => void): Promise<DescribeLiveTranscodeTemplateResponse> {
        return await this.request("DescribeLiveTranscodeTemplate", req, cb);
    }

    /**
     * 接口用来查询直播增值业务--截图的张数
     * @public
     */
    async DescribeScreenShotSheetNumList(req: DescribeScreenShotSheetNumListRequest, cb?: (error: string, rep: DescribeScreenShotSheetNumListResponse) => void): Promise<DescribeScreenShotSheetNumListResponse> {
        return await this.request("DescribeScreenShotSheetNumList", req, cb);
    }

    /**
     * 解绑域名证书
     * @public
     */
    async UnBindLiveDomainCert(req: UnBindLiveDomainCertRequest, cb?: (error: string, rep: UnBindLiveDomainCertResponse) => void): Promise<UnBindLiveDomainCertResponse> {
        return await this.request("UnBindLiveDomainCert", req, cb);
    }

    /**
     * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     * @public
     */
    async DeleteRecordTask(req: DeleteRecordTaskRequest, cb?: (error: string, rep: DeleteRecordTaskResponse) => void): Promise<DeleteRecordTaskResponse> {
        return await this.request("DeleteRecordTask", req, cb);
    }

    /**
     * 支持查询某天或某段时间的转码详细信息。
     * @public
     */
    async DescribeLiveTranscodeDetailInfo(req: DescribeLiveTranscodeDetailInfoRequest, cb?: (error: string, rep: DescribeLiveTranscodeDetailInfoResponse) => void): Promise<DescribeLiveTranscodeDetailInfoResponse> {
        return await this.request("DescribeLiveTranscodeDetailInfo", req, cb);
    }

    /**
     * 批量获取日志URL。
     * @public
     */
    async DescribeLogDownloadList(req: DescribeLogDownloadListRequest, cb?: (error: string, rep: DescribeLogDownloadListResponse) => void): Promise<DescribeLogDownloadListResponse> {
        return await this.request("DescribeLogDownloadList", req, cb);
    }

    /**
     * 获取录制规则列表
     * @public
     */
    async DescribeLiveRecordRules(req: DescribeLiveRecordRulesRequest, cb?: (error: string, rep: DescribeLiveRecordRulesResponse) => void): Promise<DescribeLiveRecordRulesResponse> {
        return await this.request("DescribeLiveRecordRules", req, cb);
    }

    /**
     * 获取直播延播列表。
     * @public
     */
    async DescribeLiveDelayInfoList(req: DescribeLiveDelayInfoListRequest, cb?: (error: string, rep: DescribeLiveDelayInfoListResponse) => void): Promise<DescribeLiveDelayInfoListResponse> {
        return await this.request("DescribeLiveDelayInfoList", req, cb);
    }

    /**
     * 删除录制规则。
     * @public
     */
    async DeleteLiveRecordRule(req: DeleteLiveRecordRuleRequest, cb?: (error: string, rep: DeleteLiveRecordRuleResponse) => void): Promise<DeleteLiveRecordRuleResponse> {
        return await this.request("DeleteLiveRecordRule", req, cb);
    }

    /**
     * 查询直播域名信息。
     * @public
     */
    async DescribeLiveDomain(req: DescribeLiveDomainRequest, cb?: (error: string, rep: DescribeLiveDomainResponse) => void): Promise<DescribeLiveDomainResponse> {
        return await this.request("DescribeLiveDomain", req, cb);
    }

    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     * @public
     */
    async CreateLiveCallbackRule(req: CreateLiveCallbackRuleRequest, cb?: (error: string, rep: CreateLiveCallbackRuleResponse) => void): Promise<CreateLiveCallbackRuleResponse> {
        return await this.request("CreateLiveCallbackRule", req, cb);
    }

    /**
     * 域名绑定证书。
注意：需先调用添加证书接口进行证书添加。获取到证书Id后再调用该接口进行绑定。
     * @public
     */
    async BindLiveDomainCert(req: BindLiveDomainCertRequest, cb?: (error: string, rep: BindLiveDomainCertResponse) => void): Promise<BindLiveDomainCertResponse> {
        return await this.request("BindLiveDomainCert", req, cb);
    }

    /**
     * 获取回调规则列表
     * @public
     */
    async DescribeLiveCallbackRules(req: DescribeLiveCallbackRulesRequest, cb?: (error: string, rep: DescribeLiveCallbackRulesResponse) => void): Promise<DescribeLiveCallbackRulesResponse> {
        return await this.request("DescribeLiveCallbackRules", req, cb);
    }

    /**
     * 查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。


     * @public
     */
    async DescribePlayErrorCodeDetailInfoList(req: DescribePlayErrorCodeDetailInfoListRequest, cb?: (error: string, rep: DescribePlayErrorCodeDetailInfoListResponse) => void): Promise<DescribePlayErrorCodeDetailInfoListResponse> {
        return await this.request("DescribePlayErrorCodeDetailInfoList", req, cb);
    }

    /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     * @public
     */
    async DescribeLiveStreamPublishedList(req: DescribeLiveStreamPublishedListRequest, cb?: (error: string, rep: DescribeLiveStreamPublishedListResponse) => void): Promise<DescribeLiveStreamPublishedListResponse> {
        return await this.request("DescribeLiveStreamPublishedList", req, cb);
    }

    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     * @public
     */
    async ForbidLiveStream(req: ForbidLiveStreamRequest, cb?: (error: string, rep: ForbidLiveStreamResponse) => void): Promise<ForbidLiveStreamResponse> {
        return await this.request("ForbidLiveStream", req, cb);
    }

    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     * @public
     */
    async AddLiveDomain(req: AddLiveDomainRequest, cb?: (error: string, rep: AddLiveDomainResponse) => void): Promise<AddLiveDomainResponse> {
        return await this.request("AddLiveDomain", req, cb);
    }

    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     * @public
     */
    async DescribeDeliverBandwidthList(req: DescribeDeliverBandwidthListRequest, cb?: (error: string, rep: DescribeDeliverBandwidthListResponse) => void): Promise<DescribeDeliverBandwidthListResponse> {
        return await this.request("DescribeDeliverBandwidthList", req, cb);
    }

    /**
     * 查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     * @public
     */
    async DescribeLiveDomainPlayInfoList(req: DescribeLiveDomainPlayInfoListRequest, cb?: (error: string, rep: DescribeLiveDomainPlayInfoListResponse) => void): Promise<DescribeLiveDomainPlayInfoListResponse> {
        return await this.request("DescribeLiveDomainPlayInfoList", req, cb);
    }

    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     * @public
     */
    async CreateLiveRecordRule(req: CreateLiveRecordRuleRequest, cb?: (error: string, rep: CreateLiveRecordRuleResponse) => void): Promise<CreateLiveRecordRuleResponse> {
        return await this.request("CreateLiveRecordRule", req, cb);
    }

    /**
     * 获取单个水印信息。
     * @public
     */
    async DescribeLiveWatermark(req: DescribeLiveWatermarkRequest, cb?: (error: string, rep: DescribeLiveWatermarkResponse) => void): Promise<DescribeLiveWatermarkResponse> {
        return await this.request("DescribeLiveWatermark", req, cb);
    }

    /**
     * 获取转码模板列表。
     * @public
     */
    async DescribeLiveTranscodeTemplates(req: DescribeLiveTranscodeTemplatesRequest, cb?: (error: string, rep: DescribeLiveTranscodeTemplatesResponse) => void): Promise<DescribeLiveTranscodeTemplatesResponse> {
        return await this.request("DescribeLiveTranscodeTemplates", req, cb);
    }

    /**
     * 创建录制模板，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     * @public
     */
    async CreateLiveRecordTemplate(req: CreateLiveRecordTemplateRequest, cb?: (error: string, rep: CreateLiveRecordTemplateResponse) => void): Promise<CreateLiveRecordTemplateResponse> {
        return await this.request("CreateLiveRecordTemplate", req, cb);
    }

    /**
     * 直播计费带宽和流量数据查询。
     * @public
     */
    async DescribeBillBandwidthAndFluxList(req: DescribeBillBandwidthAndFluxListRequest, cb?: (error: string, rep: DescribeBillBandwidthAndFluxListResponse) => void): Promise<DescribeBillBandwidthAndFluxListResponse> {
        return await this.request("DescribeBillBandwidthAndFluxList", req, cb);
    }

    /**
     * 停止使用某个直播域名。
     * @public
     */
    async ForbidLiveDomain(req: ForbidLiveDomainRequest, cb?: (error: string, rep: ForbidLiveDomainResponse) => void): Promise<ForbidLiveDomainResponse> {
        return await this.request("ForbidLiveDomain", req, cb);
    }

    /**
     * 创建转码规则，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     * @public
     */
    async CreateLiveTranscodeRule(req: CreateLiveTranscodeRuleRequest, cb?: (error: string, rep: CreateLiveTranscodeRuleResponse) => void): Promise<CreateLiveTranscodeRuleResponse> {
        return await this.request("CreateLiveTranscodeRule", req, cb);
    }

    /**
     * 获取水印规则列表。
     * @public
     */
    async DescribeLiveWatermarkRules(req: DescribeLiveWatermarkRulesRequest, cb?: (error: string, rep: DescribeLiveWatermarkRulesResponse) => void): Promise<DescribeLiveWatermarkRulesResponse> {
        return await this.request("DescribeLiveWatermarkRules", req, cb);
    }

    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     * @public
     */
    async DeleteLiveRecord(req: DeleteLiveRecordRequest, cb?: (error: string, rep: DeleteLiveRecordResponse) => void): Promise<DeleteLiveRecordResponse> {
        return await this.request("DeleteLiveRecord", req, cb);
    }

    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     * @public
     */
    async CreateLiveSnapshotRule(req: CreateLiveSnapshotRuleRequest, cb?: (error: string, rep: CreateLiveSnapshotRuleResponse) => void): Promise<CreateLiveSnapshotRuleResponse> {
        return await this.request("CreateLiveSnapshotRule", req, cb);
    }

    /**
     * 查询按省份和运营商分组的下行播放数据。
     * @public
     */
    async DescribeGroupProIspPlayInfoList(req: DescribeGroupProIspPlayInfoListRequest, cb?: (error: string, rep: DescribeGroupProIspPlayInfoListResponse) => void): Promise<DescribeGroupProIspPlayInfoListResponse> {
        return await this.request("DescribeGroupProIspPlayInfoList", req, cb);
    }

    /**
     * 输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     * @public
     */
    async DescribeAllStreamPlayInfoList(req: DescribeAllStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeAllStreamPlayInfoListResponse) => void): Promise<DescribeAllStreamPlayInfoListResponse> {
        return await this.request("DescribeAllStreamPlayInfoList", req, cb);
    }

    /**
     * 查询播放鉴权key。
     * @public
     */
    async DescribeLivePlayAuthKey(req: DescribeLivePlayAuthKeyRequest, cb?: (error: string, rep: DescribeLivePlayAuthKeyResponse) => void): Promise<DescribeLivePlayAuthKeyResponse> {
        return await this.request("DescribeLivePlayAuthKey", req, cb);
    }

    /**
     * 返回直播中、无推流或者禁播等状态
     * @public
     */
    async DescribeLiveStreamState(req: DescribeLiveStreamStateRequest, cb?: (error: string, rep: DescribeLiveStreamStateResponse) => void): Promise<DescribeLiveStreamStateResponse> {
        return await this.request("DescribeLiveStreamState", req, cb);
    }

    /**
     * 删除录制模板。
     * @public
     */
    async DeleteLiveRecordTemplate(req: DeleteLiveRecordTemplateRequest, cb?: (error: string, rep: DeleteLiveRecordTemplateResponse) => void): Promise<DeleteLiveRecordTemplateResponse> {
        return await this.request("DeleteLiveRecordTemplate", req, cb);
    }

    /**
     * 恢复延迟播放设置
     * @public
     */
    async ResumeDelayLiveStream(req: ResumeDelayLiveStreamRequest, cb?: (error: string, rep: ResumeDelayLiveStreamResponse) => void): Promise<ResumeDelayLiveStreamResponse> {
        return await this.request("ResumeDelayLiveStream", req, cb);
    }

    /**
     * 创建一个在指定时间启动、结束的录制任务，并使用指定录制模板ID对应的配置进行录制。
- 使用前提
1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 对应文档。
- 注意事项
1. 断流会结束当前录制并生成录制文件。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常录制，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的录制任务。若同一条流当前存在多个时段重叠的任务，为避免重复录制系统将启动最多3个录制任务。
3. 创建的录制任务记录在平台侧只保留3个月。
4. 当前录制任务管理API（CreateRecordTask/StopRecordTask/DeleteRecordTask）与旧API（CreateLiveRecord/StopLiveRecord/DeleteLiveRecord）不兼容，两套接口不能混用。
     * @public
     */
    async CreateRecordTask(req: CreateRecordTaskRequest, cb?: (error: string, rep: CreateRecordTaskResponse) => void): Promise<CreateRecordTaskResponse> {
        return await this.request("CreateRecordTask", req, cb);
    }

    /**
     * 创建转码模板，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     * @public
     */
    async CreateLiveTranscodeTemplate(req: CreateLiveTranscodeTemplateRequest, cb?: (error: string, rep: CreateLiveTranscodeTemplateResponse) => void): Promise<CreateLiveTranscodeTemplateResponse> {
        return await this.request("CreateLiveTranscodeTemplate", req, cb);
    }

    /**
     * 获取证书信息列表
     * @public
     */
    async DescribeLiveCerts(req: DescribeLiveCertsRequest, cb?: (error: string, rep: DescribeLiveCertsResponse) => void): Promise<DescribeLiveCertsResponse> {
        return await this.request("DescribeLiveCerts", req, cb);
    }

    /**
     * 启用状态为停用的直播域名。
     * @public
     */
    async EnableLiveDomain(req: EnableLiveDomainRequest, cb?: (error: string, rep: EnableLiveDomainResponse) => void): Promise<EnableLiveDomainResponse> {
        return await this.request("EnableLiveDomain", req, cb);
    }

    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     * @public
     */
    async CancelCommonMixStream(req: CancelCommonMixStreamRequest, cb?: (error: string, rep: CancelCommonMixStreamResponse) => void): Promise<CancelCommonMixStreamResponse> {
        return await this.request("CancelCommonMixStream", req, cb);
    }

    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     * @public
     */
    async DescribeLivePackageInfo(req: DescribeLivePackageInfoRequest, cb?: (error: string, rep: DescribeLivePackageInfoResponse) => void): Promise<DescribeLivePackageInfoResponse> {
        return await this.request("DescribeLivePackageInfo", req, cb);
    }

    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     * @public
     */
    async CreatePullStreamConfig(req: CreatePullStreamConfigRequest, cb?: (error: string, rep: CreatePullStreamConfigResponse) => void): Promise<CreatePullStreamConfigResponse> {
        return await this.request("CreatePullStreamConfig", req, cb);
    }

    /**
     * 查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     * @public
     */
    async DescribeLiveStreamPushInfoList(req: DescribeLiveStreamPushInfoListRequest, cb?: (error: string, rep: DescribeLiveStreamPushInfoListResponse) => void): Promise<DescribeLiveStreamPushInfoListResponse> {
        return await this.request("DescribeLiveStreamPushInfoList", req, cb);
    }

    /**
     * 删除截图模板
     * @public
     */
    async DeleteLiveSnapshotTemplate(req: DeleteLiveSnapshotTemplateRequest, cb?: (error: string, rep: DeleteLiveSnapshotTemplateResponse) => void): Promise<DeleteLiveSnapshotTemplateResponse> {
        return await this.request("DeleteLiveSnapshotTemplate", req, cb);
    }


}
