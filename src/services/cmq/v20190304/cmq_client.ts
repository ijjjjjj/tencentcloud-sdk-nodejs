/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient, ClientConfig } from "../../../common/abstract_client"
import {
   TopicSet,
   RewindQueueRequest,
   DescribeSubscriptionDetailRequest,
   ModifyQueueAttributeResponse,
   CreateQueueRequest,
   ModifySubscriptionAttributeResponse,
   DeadLetterPolicy,
   ModifyTopicAttributeResponse,
   DeleteSubscribeRequest,
   DescribeSubscriptionDetailResponse,
   CreateSubscribeRequest,
   ClearQueueRequest,
   CreateTopicResponse,
   ClearSubscriptionFilterTagsResponse,
   UnbindDeadLetterResponse,
   TransactionPolicy,
   DescribeTopicDetailRequest,
   DeleteTopicRequest,
   DescribeTopicDetailResponse,
   DescribeQueueDetailResponse,
   UnbindDeadLetterRequest,
   CreateTopicRequest,
   DeleteQueueRequest,
   Filter,
   DescribeDeadLetterSourceQueuesResponse,
   RewindQueueResponse,
   ModifyTopicAttributeRequest,
   DescribeQueueDetailRequest,
   QueueSet,
   DeleteTopicResponse,
   ClearSubscriptionFilterTagsRequest,
   CreateQueueResponse,
   DeleteSubscribeResponse,
   DescribeDeadLetterSourceQueuesRequest,
   Tag,
   DeadLetterSource,
   CreateSubscribeResponse,
   ClearQueueResponse,
   ModifySubscriptionAttributeRequest,
   Subscription,
   DeleteQueueResponse,
   ModifyQueueAttributeRequest,

} from "./cmq_models"

/**
 * cmq client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("cmq.tencentcloudapi.com", "2019-03-04", clientConfig);
    }
    
    /**
     * 创建主题
     * @public
     */
    async CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse> {
        return await this.request("CreateTopic", req, cb);
    }

    /**
     * 创建订阅接口
     * @public
     */
    async CreateSubscribe(req: CreateSubscribeRequest, cb?: (error: string, rep: CreateSubscribeResponse) => void): Promise<CreateSubscribeResponse> {
        return await this.request("CreateSubscribe", req, cb);
    }

    /**
     * 修改主题属性
     * @public
     */
    async ModifyTopicAttribute(req: ModifyTopicAttributeRequest, cb?: (error: string, rep: ModifyTopicAttributeResponse) => void): Promise<ModifyTopicAttributeResponse> {
        return await this.request("ModifyTopicAttribute", req, cb);
    }

    /**
     * 清空订阅者消息标签
     * @public
     */
    async ClearSubscriptionFilterTags(req: ClearSubscriptionFilterTagsRequest, cb?: (error: string, rep: ClearSubscriptionFilterTagsResponse) => void): Promise<ClearSubscriptionFilterTagsResponse> {
        return await this.request("ClearSubscriptionFilterTags", req, cb);
    }

    /**
     * 删除订阅
     * @public
     */
    async DeleteSubscribe(req: DeleteSubscribeRequest, cb?: (error: string, rep: DeleteSubscribeResponse) => void): Promise<DeleteSubscribeResponse> {
        return await this.request("DeleteSubscribe", req, cb);
    }

    /**
     * 创建队列接口

     * @public
     */
    async CreateQueue(req: CreateQueueRequest, cb?: (error: string, rep: CreateQueueResponse) => void): Promise<CreateQueueResponse> {
        return await this.request("CreateQueue", req, cb);
    }

    /**
     * 回溯队列
     * @public
     */
    async RewindQueue(req: RewindQueueRequest, cb?: (error: string, rep: RewindQueueResponse) => void): Promise<RewindQueueResponse> {
        return await this.request("RewindQueue", req, cb);
    }

    /**
     * 修改订阅属性
     * @public
     */
    async ModifySubscriptionAttribute(req: ModifySubscriptionAttributeRequest, cb?: (error: string, rep: ModifySubscriptionAttributeResponse) => void): Promise<ModifySubscriptionAttributeResponse> {
        return await this.request("ModifySubscriptionAttribute", req, cb);
    }

    /**
     * 查询主题详情 
     * @public
     */
    async DescribeTopicDetail(req: DescribeTopicDetailRequest, cb?: (error: string, rep: DescribeTopicDetailResponse) => void): Promise<DescribeTopicDetailResponse> {
        return await this.request("DescribeTopicDetail", req, cb);
    }

    /**
     * 枚举队列
     * @public
     */
    async DescribeQueueDetail(req: DescribeQueueDetailRequest, cb?: (error: string, rep: DescribeQueueDetailResponse) => void): Promise<DescribeQueueDetailResponse> {
        return await this.request("DescribeQueueDetail", req, cb);
    }

    /**
     * DeleteQueue
     * @public
     */
    async DeleteQueue(req: DeleteQueueRequest, cb?: (error: string, rep: DeleteQueueResponse) => void): Promise<DeleteQueueResponse> {
        return await this.request("DeleteQueue", req, cb);
    }

    /**
     * 查询订阅详情
     * @public
     */
    async DescribeSubscriptionDetail(req: DescribeSubscriptionDetailRequest, cb?: (error: string, rep: DescribeSubscriptionDetailResponse) => void): Promise<DescribeSubscriptionDetailResponse> {
        return await this.request("DescribeSubscriptionDetail", req, cb);
    }

    /**
     * 枚举死信队列源队列
     * @public
     */
    async DescribeDeadLetterSourceQueues(req: DescribeDeadLetterSourceQueuesRequest, cb?: (error: string, rep: DescribeDeadLetterSourceQueuesResponse) => void): Promise<DescribeDeadLetterSourceQueuesResponse> {
        return await this.request("DescribeDeadLetterSourceQueues", req, cb);
    }

    /**
     * 删除主题
     * @public
     */
    async DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse> {
        return await this.request("DeleteTopic", req, cb);
    }

    /**
     * 清除queue中的所有消息
     * @public
     */
    async ClearQueue(req: ClearQueueRequest, cb?: (error: string, rep: ClearQueueResponse) => void): Promise<ClearQueueResponse> {
        return await this.request("ClearQueue", req, cb);
    }

    /**
     * 解绑死信队列
     * @public
     */
    async UnbindDeadLetter(req: UnbindDeadLetterRequest, cb?: (error: string, rep: UnbindDeadLetterResponse) => void): Promise<UnbindDeadLetterResponse> {
        return await this.request("UnbindDeadLetter", req, cb);
    }

    /**
     * 修改队列属性
     * @public
     */
    async ModifyQueueAttribute(req: ModifyQueueAttributeRequest, cb?: (error: string, rep: ModifyQueueAttributeResponse) => void): Promise<ModifyQueueAttributeResponse> {
        return await this.request("ModifyQueueAttribute", req, cb);
    }


}
