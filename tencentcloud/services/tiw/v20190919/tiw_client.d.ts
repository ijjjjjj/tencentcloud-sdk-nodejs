import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { ResumeOnlineRecordResponse, StartOnlineRecordRequest, DescribeOnlineRecordCallbackRequest, DescribeOnlineRecordCallbackResponse, SetTranscodeCallbackResponse, StopOnlineRecordRequest, CreateTranscodeResponse, SetTranscodeCallbackKeyResponse, DescribeOnlineRecordRequest, StartOnlineRecordResponse, DescribeOnlineRecordResponse, CreateTranscodeRequest, SetOnlineRecordCallbackKeyResponse, PauseOnlineRecordResponse, SetTranscodeCallbackKeyRequest, DescribeTranscodeRequest, DescribeTranscodeResponse, SetOnlineRecordCallbackResponse, SetOnlineRecordCallbackKeyRequest, StopOnlineRecordResponse, DescribeTranscodeCallbackRequest, ResumeOnlineRecordRequest, DescribeTranscodeCallbackResponse, SetTranscodeCallbackRequest, SetOnlineRecordCallbackRequest, PauseOnlineRecordRequest } from "./tiw_models";
/**
 * tiw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     * @public
     */
    SetOnlineRecordCallback(req: SetOnlineRecordCallbackRequest, cb?: (error: string, rep: SetOnlineRecordCallbackResponse) => void): Promise<SetOnlineRecordCallbackResponse>;
    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @public
     */
    SetTranscodeCallbackKey(req: SetTranscodeCallbackKeyRequest, cb?: (error: string, rep: SetTranscodeCallbackKeyResponse) => void): Promise<SetTranscodeCallbackKeyResponse>;
    /**
     * 查询文档转码任务的执行进度与转码结果
     * @public
     */
    DescribeTranscode(req: DescribeTranscodeRequest, cb?: (error: string, rep: DescribeTranscodeResponse) => void): Promise<DescribeTranscodeResponse>;
    /**
     * 创建一个文档转码任务
     * @public
     */
    CreateTranscode(req: CreateTranscodeRequest, cb?: (error: string, rep: CreateTranscodeResponse) => void): Promise<CreateTranscodeResponse>;
    /**
     * 停止实时录制
     * @public
     */
    StopOnlineRecord(req: StopOnlineRecordRequest, cb?: (error: string, rep: StopOnlineRecordResponse) => void): Promise<StopOnlineRecordResponse>;
    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     * @public
     */
    SetTranscodeCallback(req: SetTranscodeCallbackRequest, cb?: (error: string, rep: SetTranscodeCallbackResponse) => void): Promise<SetTranscodeCallbackResponse>;
    /**
     * 发起一个实时录制任务
     * @public
     */
    StartOnlineRecord(req: StartOnlineRecordRequest, cb?: (error: string, rep: StartOnlineRecordResponse) => void): Promise<StartOnlineRecordResponse>;
    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     * @public
     */
    SetOnlineRecordCallbackKey(req: SetOnlineRecordCallbackKeyRequest, cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void): Promise<SetOnlineRecordCallbackKeyResponse>;
    /**
     * 暂停实时录制
     * @public
     */
    PauseOnlineRecord(req: PauseOnlineRecordRequest, cb?: (error: string, rep: PauseOnlineRecordResponse) => void): Promise<PauseOnlineRecordResponse>;
    /**
     * 查询文档转码回调地址
     * @public
     */
    DescribeTranscodeCallback(req: DescribeTranscodeCallbackRequest, cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void): Promise<DescribeTranscodeCallbackResponse>;
    /**
     * 查询实时录制任务状态与结果
     * @public
     */
    DescribeOnlineRecord(req: DescribeOnlineRecordRequest, cb?: (error: string, rep: DescribeOnlineRecordResponse) => void): Promise<DescribeOnlineRecordResponse>;
    /**
     * 查询实时录制回调地址
     * @public
     */
    DescribeOnlineRecordCallback(req: DescribeOnlineRecordCallbackRequest, cb?: (error: string, rep: DescribeOnlineRecordCallbackResponse) => void): Promise<DescribeOnlineRecordCallbackResponse>;
    /**
     * 恢复实时录制
     * @public
     */
    ResumeOnlineRecord(req: ResumeOnlineRecordRequest, cb?: (error: string, rep: ResumeOnlineRecordResponse) => void): Promise<ResumeOnlineRecordResponse>;
}
