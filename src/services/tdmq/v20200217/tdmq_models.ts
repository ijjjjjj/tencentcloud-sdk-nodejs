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

/**
 * ModifyEnvironmentAttributes请求参数结构体
 */
export interface ModifyEnvironmentAttributesRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 未消费消息过期时间，单位：秒，最大1296000。
      */
    MsgTTL: number;
        
    /**
      * 备注，字符串最长不超过128。
      */
    Remark?: string;
}

/**
 * DescribeSubscriptions请求参数结构体
 */
export interface DescribeSubscriptionsRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
      */
    TopicName: string;
        
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
        
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
        
    /**
      * 订阅者名称，模糊匹配。
      */
    SubscriptionName?: string;
        
    /**
      * 数据过滤条件。
      */
    Filters?: Array<FilterSubscription>;
}

/**
 * 环境信息
 */
export interface Environment {

    /**
      * 环境（命名空间）名称
      */
    EnvironmentId: string;
        
    /**
      * 说明
      */
    Remark: string;
        
    /**
      * 未消费消息过期时间，单位：秒，最大1296000（15天）
      */
    MsgTTL: number;
        
    /**
      * 创建时间
      */
    CreateTime: string;
        
    /**
      * 最近修改时间
      */
    UpdateTime: string;
}

/**
 * DescribeEnvironmentAttributes请求参数结构体
 */
export interface DescribeEnvironmentAttributesRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
}

/**
 * 分区topic
 */
export interface PartitionsTopic {

    /**
      * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AverageMsgSize: string;
        
    /**
      * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerCount: string;
        
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfirmedEntry: string;
        
    /**
      * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastLedgerCreatedTimestamp: string;
        
    /**
      * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateIn: string;
        
    /**
      * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateOut: string;
        
    /**
      * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputIn: string;
        
    /**
      * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputOut: string;
        
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberOfEntries: string;
        
    /**
      * 子分区id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
        
    /**
      * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerCount: string;
        
    /**
      * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSize: string;
        
    /**
      * topic类型描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicType: number;
}

/**
 * ResetMsgSubOffsetByTimestamp返回参数结构体
 */
export interface ResetMsgSubOffsetByTimestampResponse {

    /**
      * 结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * DescribeTopics返回参数结构体
 */
export interface DescribeTopicsResponse {

    /**
      * 主题集合数组。
      */
    TopicSets?: Array<Topic>;
        
    /**
      * 主题数量。
      */
    TotalCount?: number;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId?: string;
        
    /**
      * 主题名。
      */
    TopicName?: string;
        
    /**
      * 0：非分区topic，无分区；非0：具体分区topic的分区数。
      */
    Partitions?: number;
        
    /**
      * 备注，128字符以内。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
        
    /**
      * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列；
5 ：事务消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicType?: number;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {

    /**
      * 环境（命名空间）记录数。
      */
    TotalCount?: number;
        
    /**
      * 环境（命名空间）集合数组。
      */
    EnvironmentSet?: Array<Environment>;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * ModifyTopic返回参数结构体
 */
export interface ModifyTopicResponse {

    /**
      * 分区数
      */
    Partitions?: number;
        
    /**
      * 备注，128字符以内。
      */
    Remark?: string;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * DescribeProducers请求参数结构体
 */
export interface DescribeProducersRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名。
      */
    TopicName: string;
        
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
        
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
        
    /**
      * 生产者名称，模糊匹配。
      */
    ProducerName?: string;
}

/**
 * DescribeEnvironmentAttributes返回参数结构体
 */
export interface DescribeEnvironmentAttributesResponse {

    /**
      * 未消费消息过期时间，单位：秒，最大1296000（15天）。
      */
    MsgTTL?: number;
        
    /**
      * 消费速率限制，单位：byte/秒，0：不限速。
      */
    RateInByte?: number;
        
    /**
      * 消费速率限制，单位：个数/秒，0：不限速。
      */
    RateInSize?: number;
        
    /**
      * 已消费消息保存策略，单位：小时，0：消费完马上删除。
      */
    RetentionHours?: number;
        
    /**
      * 已消费消息保存策略，单位：G，0：消费完马上删除。
      */
    RetentionSize?: number;
        
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId?: string;
        
    /**
      * 副本数。
      */
    Replicas?: number;
        
    /**
      * 备注。
      */
    Remark?: string;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * 订阅者
 */
export interface Subscription {

    /**
      * 主题名称。
      */
    TopicName: string;
        
    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConnectedSince: string;
        
    /**
      * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerAddr: string;
        
    /**
      * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerCount: string;
        
    /**
      * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerName: string;
        
    /**
      * 堆积的消息数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgBacklog: string;
        
    /**
      * 于TTL，此订阅下没有被发送而是被丢弃的比例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateExpired: string;
        
    /**
      * 消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateOut: string;
        
    /**
      * 消费者每秒消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputOut: string;
        
    /**
      * 订阅名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubscriptionName: string;
        
    /**
      * 消费者集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerSets: Array<Consumer>;
        
    /**
      * 是否在线。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsOnline: boolean;
        
    /**
      * 消费进度集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumersScheduleSets: Array<ConsumersSchedule>;
        
    /**
      * 备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
        
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
        
    /**
      * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
}

/**
 * DeleteTopics返回参数结构体
 */
export interface DeleteTopicsResponse {

    /**
      * 被删除的主题数组。
      */
    TopicSets?: Array<TopicRecord>;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * 订阅关系
 */
export interface SubscriptionTopic {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
      */
    TopicName: string;
        
    /**
      * 订阅名称。
      */
    SubscriptionName: string;
}

/**
 * DescribeSubscriptions返回参数结构体
 */
export interface DescribeSubscriptionsResponse {

    /**
      * 订阅者集合数组。
      */
    SubscriptionSets?: Array<Subscription>;
        
    /**
      * 数量。
      */
    TotalCount?: number;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * DescribeProducers返回参数结构体
 */
export interface DescribeProducersResponse {

    /**
      * 生产者集合数组。
      */
    ProducerSets?: Array<Producer>;
        
    /**
      * 记录总数。
      */
    TotalCount?: number;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名，不支持中字以及除了短线和下划线外的特殊字符且不超过32个字符。
      */
    TopicName: string;
        
    /**
      * 0：非分区topic，无分区；非0：具体分区topic的分区数，最大不允许超过128。
      */
    Partitions: number;
        
    /**
      * 0： 普通消息；
1 ：全局顺序消息；
2 ：局部顺序消息；
3 ：重试队列；
4 ：死信队列；
5 ：事务消息。
      */
    TopicType: number;
        
    /**
      * 备注，128字符以内。
      */
    Remark?: string;
}

/**
 * DescribeTopics请求参数结构体
 */
export interface DescribeTopicsRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名模糊匹配。
      */
    TopicName?: string;
        
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
        
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
        
    /**
      * topic类型描述：
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
      */
    TopicType?: number;
}

/**
 * DeleteEnvironments返回参数结构体
 */
export interface DeleteEnvironmentsResponse {

    /**
      * 成功删除的环境（命名空间）数组。
      */
    EnvironmentIds?: Array<string>;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * 生产者连接实例
 */
export interface Connection {

    /**
      * 生产者地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
        
    /**
      * 主题分区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
        
    /**
      * 生产者版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientVersion: string;
        
    /**
      * 生产者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerName: string;
        
    /**
      * 生产者ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerId: string;
        
    /**
      * 消息平均大小(byte)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AverageMsgSize: string;
        
    /**
      * 生成速率(byte/秒)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputIn: string;
}

/**
 * DeleteTopics请求参数结构体
 */
export interface DeleteTopicsRequest {

    /**
      * 主题集合，每次最多删除20个。
      */
    TopicSets: Array<TopicRecord>;
}

/**
 * CreateSubscription请求参数结构体
 */
export interface CreateSubscriptionRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
      */
    TopicName: string;
        
    /**
      * 订阅者名称，不支持中字以及除了短线和下划线外的特殊字符且不超过150个字符。
      */
    SubscriptionName: string;
        
    /**
      * 是否幂等创建，若否不允许创建同名的订阅关系。
      */
    IsIdempotent: boolean;
        
    /**
      * 备注，128个字符以内。
      */
    Remark?: string;
}

/**
 * ModifyTopic请求参数结构体
 */
export interface ModifyTopicRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名。
      */
    TopicName: string;
        
    /**
      * 分区数，必须大于或者等于原分区数，若想维持原分区数请输入原数目，修改分区数仅对非全局顺序消息起效果，不允许超过128个分区。
      */
    Partitions: number;
        
    /**
      * 备注，128字符以内。
      */
    Remark?: string;
}

/**
 *  消费者
 */
export interface Consumer {

    /**
      * 消费者开始连接的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConnectedSince: string;
        
    /**
      * 消费者地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerAddr: string;
        
    /**
      * 消费者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerName: string;
        
    /**
      * 消费者版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientVersion: string;
}

/**
 * 过滤订阅列表
 */
export interface FilterSubscription {

    /**
      * 是否仅展示包含真实消费者的订阅。
      */
    ConsumerHasCount?: boolean;
        
    /**
      * 是否仅展示消息堆积的订阅。
      */
    ConsumerHasBacklog?: boolean;
        
    /**
      * 是否仅展示存在消息超期丢弃的订阅。
      */
    ConsumerHasExpired?: boolean;
}

/**
 * ModifyEnvironmentAttributes返回参数结构体
 */
export interface ModifyEnvironmentAttributesResponse {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId?: string;
        
    /**
      * 未消费消息过期时间，单位：秒。
      */
    MsgTTL?: number;
        
    /**
      * 备注，字符串最长不超过128。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * DeleteSubscriptions请求参数结构体
 */
export interface DeleteSubscriptionsRequest {

    /**
      * 订阅关系集合，每次最多删除20个。
      */
    SubscriptionTopicSets: Array<SubscriptionTopic>;
}

/**
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId?: string;
        
    /**
      * 未消费消息过期时间，单位：秒。
      */
    MsgTTL?: number;
        
    /**
      * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * ResetMsgSubOffsetByTimestamp请求参数结构体
 */
export interface ResetMsgSubOffsetByTimestampRequest {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
      */
    TopicName: string;
        
    /**
      * 订阅者名称。
      */
    Subscription: string;
        
    /**
      * 时间戳，精确到毫秒。
      */
    ToTimestamp: number;
}

/**
 * 生产者
 */
export interface Producer {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
      */
    TopicName: string;
        
    /**
      * 连接数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CountConnect: number;
        
    /**
      * 连接集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConnectionSets: Array<Connection>;
}

/**
 * DeleteSubscriptions返回参数结构体
 */
export interface DeleteSubscriptionsResponse {

    /**
      * 成功删除的订阅关系数组。
      */
    SubscriptionTopicSets?: Array<SubscriptionTopic>;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * CreateSubscription返回参数结构体
 */
export interface CreateSubscriptionResponse {

    /**
      * 创建结果。
      */
    Result?: boolean;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * 消费进度详情
 */
export interface ConsumersSchedule {

    /**
      * 当前分区id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
        
    /**
      * 消息数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberOfEntries: number;
        
    /**
      * 消息积压数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgBacklog: number;
        
    /**
      * 消费者每秒分发消息的数量之和。
      */
    MsgRateOut: string;
        
    /**
      * 消费者每秒消息的byte。
      */
    MsgThroughputOut: string;
        
    /**
      * 超时丢弃比例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateExpired: string;
}

/**
 * DeleteEnvironments请求参数结构体
 */
export interface DeleteEnvironmentsRequest {

    /**
      * 环境（命名空间）数组，每次最多删除20个。
      */
    EnvironmentIds: Array<string>;
}

/**
 * 主题实例
 */
export interface Topic {

    /**
      * 最后一次间隔内发布消息的平均byte大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AverageMsgSize: string;
        
    /**
      * 消费者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsumerCount: string;
        
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfirmedEntry: string;
        
    /**
      * 最后一个ledger创建的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastLedgerCreatedTimestamp: string;
        
    /**
      * 本地和复制的发布者每秒发布消息的速率。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateIn: string;
        
    /**
      * 本地和复制的消费者每秒分发消息的数量之和。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgRateOut: string;
        
    /**
      * 本地和复制的发布者每秒发布消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputIn: string;
        
    /**
      * 本地和复制的消费者每秒分发消息的byte。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MsgThroughputOut: string;
        
    /**
      * 被记录下来的消息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberOfEntries: string;
        
    /**
      * 分区数<=0：topic下无子分区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Partitions: number;
        
    /**
      * 生产者数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProducerCount: string;
        
    /**
      * 以byte计算的所有消息存储总量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSize: string;
        
    /**
      * 分区topic里面的子分区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubTopicSets: Array<PartitionsTopic>;
        
    /**
      * topic类型描述：
0：普通消息；
1：全局顺序消息；
2：局部顺序消息；
3：重试队列；
4：死信队列；
5：事务消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicType: number;
        
    /**
      * 环境（命名空间）名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName: string;
        
    /**
      * 说明，128个字符以内。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
        
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
        
    /**
      * 最近修改时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
}

/**
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {

    /**
      * 环境（命名空间）名称，模糊搜索。
      */
    EnvironmentId?: string;
        
    /**
      * 起始下标，不填默认为0。
      */
    Offset?: number;
        
    /**
      * 返回数量，不填则默认为10，最大值为20。
      */
    Limit?: number;
}

/**
 * 主题关键信息
 */
export interface TopicRecord {

    /**
      * 环境（命名空间）名称。
      */
    EnvironmentId: string;
        
    /**
      * 主题名称。
      */
    TopicName: string;
}

/**
 * CreateEnvironment请求参数结构体
 */
export interface CreateEnvironmentRequest {

    /**
      * 环境（命名空间）名称，不支持中字以及除了短线和下划线外的特殊字符且不超过16个字符。
      */
    EnvironmentId: string;
        
    /**
      * 未消费消息过期时间，单位：秒，最小60，最大1296000，（15天）。
      */
    MsgTTL: number;
        
    /**
      * 说明，128个字符以内。
      */
    Remark?: string;
}

