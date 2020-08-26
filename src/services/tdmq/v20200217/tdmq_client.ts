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
  ModifyEnvironmentAttributesRequest,
  DescribeSubscriptionsRequest,
  Environment,
  DescribeEnvironmentAttributesRequest,
  PartitionsTopic,
  ResetMsgSubOffsetByTimestampResponse,
  DescribeTopicsResponse,
  CreateTopicResponse,
  DescribeEnvironmentsResponse,
  ModifyTopicResponse,
  DescribeProducersRequest,
  DescribeEnvironmentAttributesResponse,
  Subscription,
  DeleteTopicsResponse,
  SubscriptionTopic,
  DescribeSubscriptionsResponse,
  DescribeProducersResponse,
  CreateTopicRequest,
  DescribeTopicsRequest,
  DeleteEnvironmentsResponse,
  Connection,
  DeleteTopicsRequest,
  CreateSubscriptionRequest,
  ModifyTopicRequest,
  Consumer,
  FilterSubscription,
  ModifyEnvironmentAttributesResponse,
  DeleteSubscriptionsRequest,
  CreateEnvironmentResponse,
  ResetMsgSubOffsetByTimestampRequest,
  Producer,
  DeleteSubscriptionsResponse,
  CreateSubscriptionResponse,
  ConsumersSchedule,
  DeleteEnvironmentsRequest,
  Topic,
  DescribeEnvironmentsRequest,
  TopicRecord,
  CreateEnvironmentRequest,
} from "./tdmq_models"

/**
 * tdmq client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tdmq.tencentcloudapi.com", "2020-02-17", clientConfig)
  }

  /**
   * 新增指定分区、类型的消息主题
   * @public
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 批量删除租户下的环境
   * @public
   */
  async DeleteEnvironments(
    req: DeleteEnvironmentsRequest,
    cb?: (error: string, rep: DeleteEnvironmentsResponse) => void
  ): Promise<DeleteEnvironmentsResponse> {
    return this.request("DeleteEnvironments", req, cb)
  }

  /**
   * 修改主题备注和分区数
   * @public
   */
  async ModifyTopic(
    req: ModifyTopicRequest,
    cb?: (error: string, rep: ModifyTopicResponse) => void
  ): Promise<ModifyTopicResponse> {
    return this.request("ModifyTopic", req, cb)
  }

  /**
   * 批量删除topics
   * @public
   */
  async DeleteTopics(
    req: DeleteTopicsRequest,
    cb?: (error: string, rep: DeleteTopicsResponse) => void
  ): Promise<DeleteTopicsResponse> {
    return this.request("DeleteTopics", req, cb)
  }

  /**
   * 创建一个主题的订阅关系
   * @public
   */
  async CreateSubscription(
    req: CreateSubscriptionRequest,
    cb?: (error: string, rep: CreateSubscriptionResponse) => void
  ): Promise<CreateSubscriptionResponse> {
    return this.request("CreateSubscription", req, cb)
  }

  /**
   * 查询指定环境和主题下的订阅者列表
   * @public
   */
  async DescribeSubscriptions(
    req: DescribeSubscriptionsRequest,
    cb?: (error: string, rep: DescribeSubscriptionsResponse) => void
  ): Promise<DescribeSubscriptionsResponse> {
    return this.request("DescribeSubscriptions", req, cb)
  }

  /**
   * 修改指定环境的属性值
   * @public
   */
  async ModifyEnvironmentAttributes(
    req: ModifyEnvironmentAttributesRequest,
    cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void
  ): Promise<ModifyEnvironmentAttributesResponse> {
    return this.request("ModifyEnvironmentAttributes", req, cb)
  }

  /**
   * 获取指定环境的属性
   * @public
   */
  async DescribeEnvironmentAttributes(
    req: DescribeEnvironmentAttributesRequest,
    cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void
  ): Promise<DescribeEnvironmentAttributesResponse> {
    return this.request("DescribeEnvironmentAttributes", req, cb)
  }

  /**
   * 用于在用户账户下创建消息队列 Tdmq环境（命名空间）
   * @public
   */
  async CreateEnvironment(
    req: CreateEnvironmentRequest,
    cb?: (error: string, rep: CreateEnvironmentResponse) => void
  ): Promise<CreateEnvironmentResponse> {
    return this.request("CreateEnvironment", req, cb)
  }

  /**
   * 获取租户下环境列表
   * @public
   */
  async DescribeEnvironments(
    req: DescribeEnvironmentsRequest,
    cb?: (error: string, rep: DescribeEnvironmentsResponse) => void
  ): Promise<DescribeEnvironmentsResponse> {
    return this.request("DescribeEnvironments", req, cb)
  }

  /**
   * 根据时间戳进行消息回溯，精确到毫秒
   * @public
   */
  async ResetMsgSubOffsetByTimestamp(
    req: ResetMsgSubOffsetByTimestampRequest,
    cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void
  ): Promise<ResetMsgSubOffsetByTimestampResponse> {
    return this.request("ResetMsgSubOffsetByTimestamp", req, cb)
  }

  /**
   * 获取生产者列表，仅显示在线的生产者
   * @public
   */
  async DescribeProducers(
    req: DescribeProducersRequest,
    cb?: (error: string, rep: DescribeProducersResponse) => void
  ): Promise<DescribeProducersResponse> {
    return this.request("DescribeProducers", req, cb)
  }

  /**
   * 获取环境下主题列表
   * @public
   */
  async DescribeTopics(
    req: DescribeTopicsRequest,
    cb?: (error: string, rep: DescribeTopicsResponse) => void
  ): Promise<DescribeTopicsResponse> {
    return this.request("DescribeTopics", req, cb)
  }

  /**
   * 删除订阅关系
   * @public
   */
  async DeleteSubscriptions(
    req: DeleteSubscriptionsRequest,
    cb?: (error: string, rep: DeleteSubscriptionsResponse) => void
  ): Promise<DeleteSubscriptionsResponse> {
    return this.request("DeleteSubscriptions", req, cb)
  }
}
