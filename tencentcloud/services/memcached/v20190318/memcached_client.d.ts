import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeInstancesRequest, DescribeInstancesResponse } from "./memcached_models";
/**
 * memcached client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取Cmem实例列表
     * @public
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
}