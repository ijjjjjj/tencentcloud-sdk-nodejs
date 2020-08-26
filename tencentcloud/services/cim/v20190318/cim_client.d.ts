import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeSdkAppidResponse, DescribeSdkAppidRequest } from "./cim_models";
/**
 * cim client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取云通信IM中腾讯云账号对应的SDKAppID
     * @public
     */
    DescribeSdkAppid(req: DescribeSdkAppidRequest, cb?: (error: string, rep: DescribeSdkAppidResponse) => void): Promise<DescribeSdkAppidResponse>;
}
