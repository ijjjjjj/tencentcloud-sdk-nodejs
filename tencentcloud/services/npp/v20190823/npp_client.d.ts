import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeCallBackStatusRequest, DescribeCallBackCdrRequest, CreateCallBackRequest, DeleteCallBackRequest, GetVirtualNumResponse, DelVirtualNumResponse, DescribeCallerDisplayListRequest, DescribeCallerDisplayListResponse, CreateCallBackResponse, DelVirtualNumRequest, GetVirtualNumRequest, DeleteCallBackResponse, Get400CdrRequest, DescribeCallBackCdrResponse, Get400CdrResponse, DescribeCallBackStatusResponse } from "./npp_models";
/**
 * npp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 回拨呼叫取消
     * @public
     */
    DeleteCallBack(req: DeleteCallBackRequest, cb?: (error: string, rep: DeleteCallBackResponse) => void): Promise<DeleteCallBackResponse>;
    /**
     * 回拨拉取主叫显号号码集合
     * @public
     */
    DescribeCallerDisplayList(req: DescribeCallerDisplayListRequest, cb?: (error: string, rep: DescribeCallerDisplayListResponse) => void): Promise<DescribeCallerDisplayListResponse>;
    /**
     * 直拨解绑中间号
     * @public
     */
    DelVirtualNum(req: DelVirtualNumRequest, cb?: (error: string, rep: DelVirtualNumResponse) => void): Promise<DelVirtualNumResponse>;
    /**
     * 直拨获取中间号（App 使用方发起）
     * @public
     */
    GetVirtualNum(req: GetVirtualNumRequest, cb?: (error: string, rep: GetVirtualNumResponse) => void): Promise<GetVirtualNumResponse>;
    /**
     * 直拨话单获取接口
     * @public
     */
    Get400Cdr(req: Get400CdrRequest, cb?: (error: string, rep: Get400CdrResponse) => void): Promise<Get400CdrResponse>;
    /**
     * 回拨通话状态获取
     * @public
     */
    DescribeCallBackStatus(req: DescribeCallBackStatusRequest, cb?: (error: string, rep: DescribeCallBackStatusResponse) => void): Promise<DescribeCallBackStatusResponse>;
    /**
     * 回拨呼叫请求
     * @public
     */
    CreateCallBack(req: CreateCallBackRequest, cb?: (error: string, rep: CreateCallBackResponse) => void): Promise<CreateCallBackResponse>;
    /**
     * 回拨话单获取接口
     * @public
     */
    DescribeCallBackCdr(req: DescribeCallBackCdrRequest, cb?: (error: string, rep: DescribeCallBackCdrResponse) => void): Promise<DescribeCallBackCdrResponse>;
}