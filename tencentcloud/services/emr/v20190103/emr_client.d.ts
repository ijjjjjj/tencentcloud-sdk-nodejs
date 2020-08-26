import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { ScaleOutInstanceResponse, InquiryPriceCreateInstanceRequest, TerminateInstanceRequest, TerminateInstanceResponse, CreateInstanceResponse, InquiryPriceRenewInstanceResponse, TerminateTasksRequest, InquiryPriceCreateInstanceResponse, DescribeClusterNodesRequest, CreateInstanceRequest, DescribeInstancesResponse, InquiryPriceScaleOutInstanceRequest, DescribeInstancesRequest, InquiryPriceUpdateInstanceRequest, InquiryPriceScaleOutInstanceResponse, TerminateTasksResponse, DescribeClusterNodesResponse, InquiryPriceUpdateInstanceResponse, InquiryPriceRenewInstanceRequest, ScaleOutInstanceRequest } from "./emr_models";
/**
 * emr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 缩容Task节点
     * @public
     */
    TerminateTasks(req: TerminateTasksRequest, cb?: (error: string, rep: TerminateTasksResponse) => void): Promise<TerminateTasksResponse>;
    /**
     * 查询EMR实例
     * @public
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 变配询价
     * @public
     */
    InquiryPriceUpdateInstance(req: InquiryPriceUpdateInstanceRequest, cb?: (error: string, rep: InquiryPriceUpdateInstanceResponse) => void): Promise<InquiryPriceUpdateInstanceResponse>;
    /**
     * 查询硬件节点信息
     * @public
     */
    DescribeClusterNodes(req: DescribeClusterNodesRequest, cb?: (error: string, rep: DescribeClusterNodesResponse) => void): Promise<DescribeClusterNodesResponse>;
    /**
     * 续费询价。
     * @public
     */
    InquiryPriceRenewInstance(req: InquiryPriceRenewInstanceRequest, cb?: (error: string, rep: InquiryPriceRenewInstanceResponse) => void): Promise<InquiryPriceRenewInstanceResponse>;
    /**
     * 创建EMR实例
     * @public
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 创建实例询价
     * @public
     */
    InquiryPriceCreateInstance(req: InquiryPriceCreateInstanceRequest, cb?: (error: string, rep: InquiryPriceCreateInstanceResponse) => void): Promise<InquiryPriceCreateInstanceResponse>;
    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     * @public
     */
    InquiryPriceScaleOutInstance(req: InquiryPriceScaleOutInstanceRequest, cb?: (error: string, rep: InquiryPriceScaleOutInstanceResponse) => void): Promise<InquiryPriceScaleOutInstanceResponse>;
    /**
     * 实例扩容
     * @public
     */
    ScaleOutInstance(req: ScaleOutInstanceRequest, cb?: (error: string, rep: ScaleOutInstanceResponse) => void): Promise<ScaleOutInstanceResponse>;
    /**
     * 销毁EMR实例。此接口仅支持弹性MapReduce正式计费版本。
     * @public
     */
    TerminateInstance(req: TerminateInstanceRequest, cb?: (error: string, rep: TerminateInstanceResponse) => void): Promise<TerminateInstanceResponse>;
}
