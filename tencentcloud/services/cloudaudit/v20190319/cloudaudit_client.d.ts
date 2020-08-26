import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { InquireAuditCreditResponse, StopLoggingRequest, GetAttributeKeyRequest, DeleteAuditResponse, UpdateAuditRequest, InquireAuditCreditRequest, ListAuditsRequest, LookUpEventsRequest, StartLoggingRequest, CreateAuditResponse, StartLoggingResponse, ListCosEnableRegionRequest, ListCosEnableRegionResponse, StopLoggingResponse, ListAuditsResponse, UpdateAuditResponse, DescribeAuditRequest, CreateAuditRequest, DeleteAuditRequest, ListCmqEnableRegionRequest, GetAttributeKeyResponse, ListCmqEnableRegionResponse, LookUpEventsResponse, DescribeAuditResponse } from "./cloudaudit_models";
/**
 * cloudaudit client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 开启跟踪集
     * @public
     */
    StartLogging(req: StartLoggingRequest, cb?: (error: string, rep: StartLoggingResponse) => void): Promise<StartLoggingResponse>;
    /**
     * 查询AttributeKey的有效取值范围
     * @public
     */
    GetAttributeKey(req: GetAttributeKeyRequest, cb?: (error: string, rep: GetAttributeKeyResponse) => void): Promise<GetAttributeKeyResponse>;
    /**
     * 查询云审计支持的cmq的可用区
     * @public
     */
    ListCmqEnableRegion(req: ListCmqEnableRegionRequest, cb?: (error: string, rep: ListCmqEnableRegionResponse) => void): Promise<ListCmqEnableRegionResponse>;
    /**
     * 删除跟踪集
     * @public
     */
    DeleteAudit(req: DeleteAuditRequest, cb?: (error: string, rep: DeleteAuditResponse) => void): Promise<DeleteAuditResponse>;
    /**
     * 关闭跟踪集
     * @public
     */
    StopLogging(req: StopLoggingRequest, cb?: (error: string, rep: StopLoggingResponse) => void): Promise<StopLoggingResponse>;
    /**
     * 查询用户可创建跟踪集的数量
     * @public
     */
    InquireAuditCredit(req: InquireAuditCreditRequest, cb?: (error: string, rep: InquireAuditCreditResponse) => void): Promise<InquireAuditCreditResponse>;
    /**
       * 参数要求：
  1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
  2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
  3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
  4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
       * @public
       */
    UpdateAudit(req: UpdateAuditRequest, cb?: (error: string, rep: UpdateAuditResponse) => void): Promise<UpdateAuditResponse>;
    /**
     * 查询跟踪集详情
     * @public
     */
    DescribeAudit(req: DescribeAuditRequest, cb?: (error: string, rep: DescribeAuditResponse) => void): Promise<DescribeAuditResponse>;
    /**
       * 参数要求：
  1、如果IsCreateNewBucket的值存在的话，cosRegion和cosBucketName都是必填参数。
  2、如果IsEnableCmqNotify的值是1的话，IsCreateNewQueue、CmqRegion和CmqQueueName都是必填参数。
  3、如果IsEnableCmqNotify的值是0的话，IsCreateNewQueue、CmqRegion和CmqQueueName都不能传。
  4、如果IsEnableKmsEncry的值是1的话，KmsRegion和KeyId属于必填项
       * @public
       */
    CreateAudit(req: CreateAuditRequest, cb?: (error: string, rep: CreateAuditResponse) => void): Promise<CreateAuditResponse>;
    /**
     * 查询云审计支持的cos可用区
     * @public
     */
    ListCosEnableRegion(req: ListCosEnableRegionRequest, cb?: (error: string, rep: ListCosEnableRegionResponse) => void): Promise<ListCosEnableRegionResponse>;
    /**
     * 用于对操作日志进行检索，便于用户进行查询相关的操作信息。
     * @public
     */
    LookUpEvents(req: LookUpEventsRequest, cb?: (error: string, rep: LookUpEventsResponse) => void): Promise<LookUpEventsResponse>;
    /**
     * 查询跟踪集概要
     * @public
     */
    ListAudits(req: ListAuditsRequest, cb?: (error: string, rep: ListAuditsResponse) => void): Promise<ListAuditsResponse>;
}
