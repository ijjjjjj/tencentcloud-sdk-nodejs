import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeSmpnChpRequest, CreateSmpnEpaResponse, DescribeSmpnFnrResponse, DescribeSmpnMhmResponse, DescribeSmpnFnrRequest, DescribeSmpnMrlRequest, DescribeSmpnMrlResponse, DescribeSmpnMhmRequest, CreateSmpnEpaRequest, DescribeSmpnChpResponse } from "./smpn_models";
/**
 * smpn client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 号码营销监控
     * @public
     */
    DescribeSmpnMhm(req: DescribeSmpnMhmRequest, cb?: (error: string, rep: DescribeSmpnMhmResponse) => void): Promise<DescribeSmpnMhmResponse>;
    /**
     * 虚假号码识别
     * @public
     */
    DescribeSmpnFnr(req: DescribeSmpnFnrRequest, cb?: (error: string, rep: DescribeSmpnFnrResponse) => void): Promise<DescribeSmpnFnrResponse>;
    /**
     * 企业号码认证
     * @public
     */
    CreateSmpnEpa(req: CreateSmpnEpaRequest, cb?: (error: string, rep: CreateSmpnEpaResponse) => void): Promise<CreateSmpnEpaResponse>;
    /**
     * 查询号码的标记和标记次数
     * @public
     */
    DescribeSmpnChp(req: DescribeSmpnChpRequest, cb?: (error: string, rep: DescribeSmpnChpResponse) => void): Promise<DescribeSmpnChpResponse>;
    /**
     * 查询号码恶意标记等级
     * @public
     */
    DescribeSmpnMrl(req: DescribeSmpnMrlRequest, cb?: (error: string, rep: DescribeSmpnMrlResponse) => void): Promise<DescribeSmpnMrlResponse>;
}
