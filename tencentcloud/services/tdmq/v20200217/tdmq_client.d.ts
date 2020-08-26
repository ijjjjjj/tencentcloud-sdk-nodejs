import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { ModifyEnvironmentAttributesRequest, DescribeSubscriptionsRequest, DescribeEnvironmentAttributesRequest, ResetMsgSubOffsetByTimestampResponse, DescribeTopicsResponse, CreateTopicResponse, DescribeEnvironmentsResponse, ModifyTopicResponse, DescribeProducersRequest, DescribeEnvironmentAttributesResponse, DeleteTopicsResponse, DescribeSubscriptionsResponse, DescribeProducersResponse, CreateTopicRequest, DescribeTopicsRequest, DeleteEnvironmentsResponse, DeleteTopicsRequest, CreateSubscriptionRequest, ModifyTopicRequest, ModifyEnvironmentAttributesResponse, DeleteSubscriptionsRequest, CreateEnvironmentResponse, ResetMsgSubOffsetByTimestampRequest, DeleteSubscriptionsResponse, CreateSubscriptionResponse, DeleteEnvironmentsRequest, DescribeEnvironmentsRequest, CreateEnvironmentRequest } from "./tdmq_models";
/**
 * tdmq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 新增指定分区、类型的消息主题
     * @public
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 批量删除租户下的环境
     * @public
     */
    DeleteEnvironments(req: DeleteEnvironmentsRequest, cb?: (error: string, rep: DeleteEnvironmentsResponse) => void): Promise<DeleteEnvironmentsResponse>;
    /**
     * 修改主题备注和分区数
     * @public
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 批量删除topics
     * @public
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 创建一个主题的订阅关系
     * @public
     */
    CreateSubscription(req: CreateSubscriptionRequest, cb?: (error: string, rep: CreateSubscriptionResponse) => void): Promise<CreateSubscriptionResponse>;
    /**
     * 查询指定环境和主题下的订阅者列表
     * @public
     */
    DescribeSubscriptions(req: DescribeSubscriptionsRequest, cb?: (error: string, rep: DescribeSubscriptionsResponse) => void): Promise<DescribeSubscriptionsResponse>;
    /**
     * 修改指定环境的属性值
     * @public
     */
    ModifyEnvironmentAttributes(req: ModifyEnvironmentAttributesRequest, cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void): Promise<ModifyEnvironmentAttributesResponse>;
    /**
     * 获取指定环境的属性
     * @public
     */
    DescribeEnvironmentAttributes(req: DescribeEnvironmentAttributesRequest, cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void): Promise<DescribeEnvironmentAttributesResponse>;
    /**
     * 用于在用户账户下创建消息队列 Tdmq环境（命名空间）
     * @public
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 获取租户下环境列表
     * @public
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     * @public
     */
    ResetMsgSubOffsetByTimestamp(req: ResetMsgSubOffsetByTimestampRequest, cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void): Promise<ResetMsgSubOffsetByTimestampResponse>;
    /**
     * 获取生产者列表，仅显示在线的生产者
     * @public
     */
    DescribeProducers(req: DescribeProducersRequest, cb?: (error: string, rep: DescribeProducersResponse) => void): Promise<DescribeProducersResponse>;
    /**
     * 获取环境下主题列表
     * @public
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 删除订阅关系
     * @public
     */
    DeleteSubscriptions(req: DeleteSubscriptionsRequest, cb?: (error: string, rep: DeleteSubscriptionsResponse) => void): Promise<DeleteSubscriptionsResponse>;
}
