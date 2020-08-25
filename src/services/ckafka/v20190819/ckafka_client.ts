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
   TopicDetail,
   DeleteAclRequest,
   GroupInfoMember,
   DeleteUserRequest,
   PartitionOffset,
   DescribeACLRequest,
   DescribeTopicAttributesRequest,
   DescribeInstanceAttributesRequest,
   ConsumerGroup,
   Assignment,
   DescribeConsumerGroupResponse,
   DeleteTopicRequest,
   DescribeInstancesResponse,
   GroupInfoTopics,
   TopicResult,
   DescribeInstancesDetailResponse,
   CreateInstancePreData,
   DescribeACLResponse,
   JgwOperateResponse,
   Topic,
   Tag,
   GroupResponse,
   DescribeTopicAttributesResponse,
   RouteResponse,
   DescribeGroupResponse,
   ModifyInstanceAttributesConfig,
   OperateResponseData,
   CreateUserResponse,
   GroupOffsetTopic,
   CreatePartitionResponse,
   DeleteUserResponse,
   CreateAclRequest,
   DescribeAppInfoRequest,
   DescribeTopicResponse,
   ConsumerGroupResponse,
   CreateTopicIpWhiteListResponse,
   ModifyInstanceAttributesResponse,
   ModifyGroupOffsetsResponse,
   Partition,
   CreateAclResponse,
   CreateTopicRequest,
   DeleteAclResponse,
   DescribeRouteRequest,
   InstanceConfigDO,
   UserResponse,
   DescribeGroupInfoRequest,
   DescribeGroupInfoResponse,
   DescribeUserResponse,
   AppIdResponse,
   DescribeTopicRequest,
   CreatePartitionRequest,
   Group,
   DescribeAppInfoResponse,
   AclResponse,
   Instance,
   DescribeInstanceAttributesResponse,
   TopicDetailResponse,
   Config,
   ModifyPasswordRequest,
   ModifyInstanceAttributesRequest,
   ModifyTopicAttributesResponse,
   DescribeConsumerGroupRequest,
   VipEntity,
   ConsumerGroupTopic,
   User,
   GroupOffsetPartition,
   DeleteTopicResponse,
   DescribeInstancesRequest,
   InstanceAttributesResponse,
   DescribeGroupRequest,
   Filter,
   GroupOffsetResponse,
   CreateUserRequest,
   DeleteTopicIpWhiteListResponse,
   CreateInstancePreResponse,
   DescribeInstancesDetailRequest,
   ModifyPasswordResponse,
   InstanceDetailResponse,
   GroupInfoResponse,
   TopicAttributesResponse,
   InstanceResponse,
   DescribeGroup,
   TopicPartitionDO,
   CreateTopicResp,
   DescribeRouteResponse,
   DescribeTopicDetailRequest,
   DescribeGroupOffsetsResponse,
   ModifyGroupOffsetsRequest,
   CreateTopicIpWhiteListRequest,
   Route,
   Acl,
   ModifyTopicAttributesRequest,
   CreateTopicResponse,
   CreateInstancePreRequest,
   DeleteTopicIpWhiteListRequest,
   DescribeGroupOffsetsRequest,
   DescribeUserRequest,
   InstanceDetail,
   DescribeTopicDetailResponse,
   SubscribedInfo,

} from "./ckafka_models"

/**
 * ckafka client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("ckafka.tencentcloudapi.com", "2019-08-19", clientConfig);
    }
    
    /**
     * 查看路由信息
     * @public
     */
    async DescribeRoute(req: DescribeRouteRequest, cb?: (error: string, rep: DescribeRouteResponse) => void): Promise<DescribeRouteResponse> {
        return await this.request("DescribeRoute", req, cb);
    }

    /**
     * 获取消费分组信息
     * @public
     */
    async DescribeGroupInfo(req: DescribeGroupInfoRequest, cb?: (error: string, rep: DescribeGroupInfoResponse) => void): Promise<DescribeGroupInfoResponse> {
        return await this.request("DescribeGroupInfo", req, cb);
    }

    /**
     * 查询消费分组信息
     * @public
     */
    async DescribeConsumerGroup(req: DescribeConsumerGroupRequest, cb?: (error: string, rep: DescribeConsumerGroupResponse) => void): Promise<DescribeConsumerGroupResponse> {
        return await this.request("DescribeConsumerGroup", req, cb);
    }

    /**
     * 本接口用于修改主题属性。
     * @public
     */
    async ModifyTopicAttributes(req: ModifyTopicAttributesRequest, cb?: (error: string, rep: ModifyTopicAttributesResponse) => void): Promise<ModifyTopicAttributesResponse> {
        return await this.request("ModifyTopicAttributes", req, cb);
    }

    /**
     * 创建主题ip白名单
     * @public
     */
    async CreateTopicIpWhiteList(req: CreateTopicIpWhiteListRequest, cb?: (error: string, rep: CreateTopicIpWhiteListResponse) => void): Promise<CreateTopicIpWhiteListResponse> {
        return await this.request("CreateTopicIpWhiteList", req, cb);
    }

    /**
     * 枚举消费分组(精简版)
     * @public
     */
    async DescribeGroup(req: DescribeGroupRequest, cb?: (error: string, rep: DescribeGroupResponse) => void): Promise<DescribeGroupResponse> {
        return await this.request("DescribeGroup", req, cb);
    }

    /**
     * 设置Groups 消费分组offset
     * @public
     */
    async ModifyGroupOffsets(req: ModifyGroupOffsetsRequest, cb?: (error: string, rep: ModifyGroupOffsetsResponse) => void): Promise<ModifyGroupOffsetsResponse> {
        return await this.request("ModifyGroupOffsets", req, cb);
    }

    /**
     * 本接口（DescribeInstance）用于在用户账户下获取消息队列 CKafka 实例列表
     * @public
     */
    async DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse> {
        return await this.request("DescribeInstances", req, cb);
    }

    /**
     * 设置实例属性
     * @public
     */
    async ModifyInstanceAttributes(req: ModifyInstanceAttributesRequest, cb?: (error: string, rep: ModifyInstanceAttributesResponse) => void): Promise<ModifyInstanceAttributesResponse> {
        return await this.request("ModifyInstanceAttributes", req, cb);
    }

    /**
     * 查询用户信息
     * @public
     */
    async DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse> {
        return await this.request("DescribeUser", req, cb);
    }

    /**
     * 枚举ACL
     * @public
     */
    async DescribeACL(req: DescribeACLRequest, cb?: (error: string, rep: DescribeACLResponse) => void): Promise<DescribeACLResponse> {
        return await this.request("DescribeACL", req, cb);
    }

    /**
     * 获取主题列表详情（仅控制台调用）
     * @public
     */
    async DescribeTopicDetail(req: DescribeTopicDetailRequest, cb?: (error: string, rep: DescribeTopicDetailResponse) => void): Promise<DescribeTopicDetailResponse> {
        return await this.request("DescribeTopicDetail", req, cb);
    }

    /**
     * 创建实例(预付费包年包月)
     * @public
     */
    async CreateInstancePre(req: CreateInstancePreRequest, cb?: (error: string, rep: CreateInstancePreResponse) => void): Promise<CreateInstancePreResponse> {
        return await this.request("CreateInstancePre", req, cb);
    }

    /**
     * 删除主题IP白名单
     * @public
     */
    async DeleteTopicIpWhiteList(req: DeleteTopicIpWhiteListRequest, cb?: (error: string, rep: DeleteTopicIpWhiteListResponse) => void): Promise<DeleteTopicIpWhiteListResponse> {
        return await this.request("DeleteTopicIpWhiteList", req, cb);
    }

    /**
     * 修改密码
     * @public
     */
    async ModifyPassword(req: ModifyPasswordRequest, cb?: (error: string, rep: ModifyPasswordResponse) => void): Promise<ModifyPasswordResponse> {
        return await this.request("ModifyPassword", req, cb);
    }

    /**
     * 添加 ACL 策略
     * @public
     */
    async CreateAcl(req: CreateAclRequest, cb?: (error: string, rep: CreateAclResponse) => void): Promise<CreateAclResponse> {
        return await this.request("CreateAcl", req, cb);
    }

    /**
     * 创建ckafka主题
     * @public
     */
    async CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse> {
        return await this.request("CreateTopic", req, cb);
    }

    /**
     * 本接口用于增加主题中的分区
     * @public
     */
    async CreatePartition(req: CreatePartitionRequest, cb?: (error: string, rep: CreatePartitionResponse) => void): Promise<CreatePartitionResponse> {
        return await this.request("CreatePartition", req, cb);
    }

    /**
     * 删除ACL
     * @public
     */
    async DeleteAcl(req: DeleteAclRequest, cb?: (error: string, rep: DeleteAclResponse) => void): Promise<DeleteAclResponse> {
        return await this.request("DeleteAcl", req, cb);
    }

    /**
     * 查询用户列表
     * @public
     */
    async DescribeAppInfo(req: DescribeAppInfoRequest, cb?: (error: string, rep: DescribeAppInfoResponse) => void): Promise<DescribeAppInfoResponse> {
        return await this.request("DescribeAppInfo", req, cb);
    }

    /**
     * 获取主题属性

     * @public
     */
    async DescribeTopicAttributes(req: DescribeTopicAttributesRequest, cb?: (error: string, rep: DescribeTopicAttributesResponse) => void): Promise<DescribeTopicAttributesResponse> {
        return await this.request("DescribeTopicAttributes", req, cb);
    }

    /**
     * 获取实例属性
     * @public
     */
    async DescribeInstanceAttributes(req: DescribeInstanceAttributesRequest, cb?: (error: string, rep: DescribeInstanceAttributesResponse) => void): Promise<DescribeInstanceAttributesResponse> {
        return await this.request("DescribeInstanceAttributes", req, cb);
    }

    /**
     * 用户账户下获取实例列表详情
     * @public
     */
    async DescribeInstancesDetail(req: DescribeInstancesDetailRequest, cb?: (error: string, rep: DescribeInstancesDetailResponse) => void): Promise<DescribeInstancesDetailResponse> {
        return await this.request("DescribeInstancesDetail", req, cb);
    }

    /**
     * 删除用户
     * @public
     */
    async DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse> {
        return await this.request("DeleteUser", req, cb);
    }

    /**
     * 获取消费分组offset
     * @public
     */
    async DescribeGroupOffsets(req: DescribeGroupOffsetsRequest, cb?: (error: string, rep: DescribeGroupOffsetsResponse) => void): Promise<DescribeGroupOffsetsResponse> {
        return await this.request("DescribeGroupOffsets", req, cb);
    }

    /**
     * 接口请求域名：https://ckafka.tencentcloudapi.com
本接口（DescribeTopic）用于在用户获取消息队列 CKafka 实例的主题列表
     * @public
     */
    async DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse> {
        return await this.request("DescribeTopic", req, cb);
    }

    /**
     * 添加用户
     * @public
     */
    async CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse> {
        return await this.request("CreateUser", req, cb);
    }

    /**
     * 删除ckafka主题
     * @public
     */
    async DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse> {
        return await this.request("DeleteTopic", req, cb);
    }


}
