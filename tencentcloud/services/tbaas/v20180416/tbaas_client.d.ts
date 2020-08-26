import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { QueryRequest, GetBlockTransactionListForUserResponse, SendTransactionHandlerResponse, ApplyUserCertRequest, TransByDynamicContractHandlerRequest, GetTransListHandlerResponse, DeployDynamicContractHandlerResponse, ApplyUserCertResponse, GetInvokeTxRequest, InvokeResponse, DownloadUserCertResponse, GetLatesdTransactionListRequest, GetTransactionDetailForUserRequest, GetBlockListResponse, SrvInvokeRequest, BlockByNumberHandlerResponse, GetTransByHashHandlerResponse, DeployDynamicContractHandlerRequest, GetLatesdTransactionListResponse, DownloadUserCertRequest, GetClusterSummaryResponse, TransByDynamicContractHandlerResponse, GetBlockTransactionListForUserRequest, SrvInvokeResponse, GetBlockListHandlerRequest, GetClusterSummaryRequest, GetBlockListRequest, InvokeRequest, GetInvokeTxResponse, GetBlockListHandlerResponse, GetTransactionDetailForUserResponse, GetTransListHandlerRequest, SendTransactionHandlerRequest, BlockByNumberHandlerRequest, GetTransByHashHandlerRequest, QueryResponse } from "./tbaas_models";
/**
 * tbaas client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 申请用户证书
     * @public
     */
    ApplyUserCert(req: ApplyUserCertRequest, cb?: (error: string, rep: ApplyUserCertResponse) => void): Promise<ApplyUserCertResponse>;
    /**
     * 根据动态部署的合约发送交易
     * @public
     */
    TransByDynamicContractHandler(req: TransByDynamicContractHandlerRequest, cb?: (error: string, rep: TransByDynamicContractHandlerResponse) => void): Promise<TransByDynamicContractHandlerResponse>;
    /**
     * trustsql服务统一接口
     * @public
     */
    SrvInvoke(req: SrvInvokeRequest, cb?: (error: string, rep: SrvInvokeResponse) => void): Promise<SrvInvokeResponse>;
    /**
     * 新增交易
     * @public
     */
    Invoke(req: InvokeRequest, cb?: (error: string, rep: InvokeResponse) => void): Promise<InvokeResponse>;
    /**
     * 获取区块链网络概要
     * @public
     */
    GetClusterSummary(req: GetClusterSummaryRequest, cb?: (error: string, rep: GetClusterSummaryResponse) => void): Promise<GetClusterSummaryResponse>;
    /**
     * 获取交易详情
     * @public
     */
    GetTransactionDetailForUser(req: GetTransactionDetailForUserRequest, cb?: (error: string, rep: GetTransactionDetailForUserResponse) => void): Promise<GetTransactionDetailForUserResponse>;
    /**
     * Bcos根据块高查询区块信息
     * @public
     */
    BlockByNumberHandler(req: BlockByNumberHandlerRequest, cb?: (error: string, rep: BlockByNumberHandlerResponse) => void): Promise<BlockByNumberHandlerResponse>;
    /**
     * Invoke异步调用结果查询
     * @public
     */
    GetInvokeTx(req: GetInvokeTxRequest, cb?: (error: string, rep: GetInvokeTxResponse) => void): Promise<GetInvokeTxResponse>;
    /**
     * Bcos分页查询当前群组的交易信息列表
     * @public
     */
    GetTransListHandler(req: GetTransListHandlerRequest, cb?: (error: string, rep: GetTransListHandlerResponse) => void): Promise<GetTransListHandlerResponse>;
    /**
     * Bcos发送交易
     * @public
     */
    SendTransactionHandler(req: SendTransactionHandlerRequest, cb?: (error: string, rep: SendTransactionHandlerResponse) => void): Promise<SendTransactionHandlerResponse>;
    /**
     * 下载用户证书
     * @public
     */
    DownloadUserCert(req: DownloadUserCertRequest, cb?: (error: string, rep: DownloadUserCertResponse) => void): Promise<DownloadUserCertResponse>;
    /**
     * 获取区块内的交易列表
     * @public
     */
    GetBlockTransactionListForUser(req: GetBlockTransactionListForUserRequest, cb?: (error: string, rep: GetBlockTransactionListForUserResponse) => void): Promise<GetBlockTransactionListForUserResponse>;
    /**
     * 查看当前网络下的所有区块列表，分页展示
     * @public
     */
    GetBlockList(req: GetBlockListRequest, cb?: (error: string, rep: GetBlockListResponse) => void): Promise<GetBlockListResponse>;
    /**
     * 查询交易
     * @public
     */
    Query(req: QueryRequest, cb?: (error: string, rep: QueryResponse) => void): Promise<QueryResponse>;
    /**
     * 动态部署合约
     * @public
     */
    DeployDynamicContractHandler(req: DeployDynamicContractHandlerRequest, cb?: (error: string, rep: DeployDynamicContractHandlerResponse) => void): Promise<DeployDynamicContractHandlerResponse>;
    /**
     * Bcos根据交易哈希查看交易详细信息
     * @public
     */
    GetTransByHashHandler(req: GetTransByHashHandlerRequest, cb?: (error: string, rep: GetTransByHashHandlerResponse) => void): Promise<GetTransByHashHandlerResponse>;
    /**
     * Bcos分页查询当前群组下的区块列表
     * @public
     */
    GetBlockListHandler(req: GetBlockListHandlerRequest, cb?: (error: string, rep: GetBlockListHandlerResponse) => void): Promise<GetBlockListHandlerResponse>;
    /**
     * 获取最新交易列表
     * @public
     */
    GetLatesdTransactionList(req: GetLatesdTransactionListRequest, cb?: (error: string, rep: GetLatesdTransactionListResponse) => void): Promise<GetLatesdTransactionListResponse>;
}
