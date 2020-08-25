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
   GameProperty,
   TargetConfiguration,
   DeleteScalingPolicyRequest,
   PlacedPlayerSession,
   DescribeGameServerSessionsResponse,
   Instance,
   DescribeGameServerSessionQueuesResponse,
   GetInstanceAccessResponse,
   JoinGameServerSessionRequest,
   DescribePlayerSessionsResponse,
   SetServerWeightResponse,
   PlayerLatency,
   StopGameServerSessionPlacementRequest,
   UpdateGameServerSessionResponse,
   ScalingPolicy,
   GetInstanceAccessRequest,
   DescribeGameServerSessionsRequest,
   UpdateGameServerSessionRequest,
   StartMatchPlacementResponse,
   DescribePlayerSessionsRequest,
   StartGameServerSessionPlacementResponse,
   Credentials,
   DescribeInstancesResponse,
   GetGameServerSessionLogUrlRequest,
   StartMatchPlacementRequest,
   CreateGameServerSessionResponse,
   DescribeInstancesRequest,
   DescribeScalingPoliciesRequest,
   DescribeGameServerSessionDetailsResponse,
   PlayerLatencyPolicy,
   PutScalingPolicyResponse,
   JoinGameServerSessionResponse,
   DesiredPlayerSession,
   SearchGameServerSessionsResponse,
   DescribeGameServerSessionPlacementRequest,
   DescribeScalingPoliciesResponse,
   GameServerSessionQueueDestination,
   GameServerSessionPlacement,
   GameServerSessionQueue,
   SetServerWeightRequest,
   PlayerSession,
   CreateGameServerSessionRequest,
   GetGameServerSessionLogUrlResponse,
   GameServerSessionDetail,
   DescribeGameServerSessionDetailsRequest,
   StartGameServerSessionPlacementRequest,
   GameServerSession,
   DescribeGameServerSessionQueuesRequest,
   DeleteScalingPolicyResponse,
   DescribeGameServerSessionPlacementResponse,
   SearchGameServerSessionsRequest,
   PutScalingPolicyRequest,
   StopGameServerSessionPlacementResponse,
   InstanceAccess,

} from "./gse_models"

/**
 * gse client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("gse.tencentcloudapi.com", "2019-11-12", clientConfig);
    }
    
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     * @public
     */
    async UpdateGameServerSession(req: UpdateGameServerSessionRequest, cb?: (error: string, rep: UpdateGameServerSessionResponse) => void): Promise<UpdateGameServerSessionResponse> {
        return await this.request("UpdateGameServerSession", req, cb);
    }

    /**
     * 用于查询服务部署的动态扩缩容配置
     * @public
     */
    async DescribeScalingPolicies(req: DescribeScalingPoliciesRequest, cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void): Promise<DescribeScalingPoliciesResponse> {
        return await this.request("DescribeScalingPolicies", req, cb);
    }

    /**
     * 用于查询服务器实例列表
     * @public
     */
    async DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse> {
        return await this.request("DescribeInstances", req, cb);
    }

    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     * @public
     */
    async DescribeGameServerSessions(req: DescribeGameServerSessionsRequest, cb?: (error: string, rep: DescribeGameServerSessionsResponse) => void): Promise<DescribeGameServerSessionsResponse> {
        return await this.request("DescribeGameServerSessions", req, cb);
    }

    /**
     * 获取实例登录所需要的凭据
     * @public
     */
    async GetInstanceAccess(req: GetInstanceAccessRequest, cb?: (error: string, rep: GetInstanceAccessResponse) => void): Promise<GetInstanceAccessResponse> {
        return await this.request("GetInstanceAccess", req, cb);
    }

    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     * @public
     */
    async JoinGameServerSession(req: JoinGameServerSessionRequest, cb?: (error: string, rep: JoinGameServerSessionResponse) => void): Promise<JoinGameServerSessionResponse> {
        return await this.request("JoinGameServerSession", req, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     * @public
     */
    async DescribeGameServerSessionPlacement(req: DescribeGameServerSessionPlacementRequest, cb?: (error: string, rep: DescribeGameServerSessionPlacementResponse) => void): Promise<DescribeGameServerSessionPlacementResponse> {
        return await this.request("DescribeGameServerSessionPlacement", req, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     * @public
     */
    async DescribeGameServerSessionDetails(req: DescribeGameServerSessionDetailsRequest, cb?: (error: string, rep: DescribeGameServerSessionDetailsResponse) => void): Promise<DescribeGameServerSessionDetailsResponse> {
        return await this.request("DescribeGameServerSessionDetails", req, cb);
    }

    /**
     * 用于设置动态扩缩容配置
     * @public
     */
    async PutScalingPolicy(req: PutScalingPolicyRequest, cb?: (error: string, rep: PutScalingPolicyResponse) => void): Promise<PutScalingPolicyResponse> {
        return await this.request("PutScalingPolicy", req, cb);
    }

    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     * @public
     */
    async StartGameServerSessionPlacement(req: StartGameServerSessionPlacementRequest, cb?: (error: string, rep: StartGameServerSessionPlacementResponse) => void): Promise<StartGameServerSessionPlacementResponse> {
        return await this.request("StartGameServerSessionPlacement", req, cb);
    }

    /**
     * 设置服务器权重
     * @public
     */
    async SetServerWeight(req: SetServerWeightRequest, cb?: (error: string, rep: SetServerWeightResponse) => void): Promise<SetServerWeightResponse> {
        return await this.request("SetServerWeight", req, cb);
    }

    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     * @public
     */
    async StartMatchPlacement(req: StartMatchPlacementRequest, cb?: (error: string, rep: StartMatchPlacementResponse) => void): Promise<StartMatchPlacementResponse> {
        return await this.request("StartMatchPlacement", req, cb);
    }

    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     * @public
     */
    async StopGameServerSessionPlacement(req: StopGameServerSessionPlacementRequest, cb?: (error: string, rep: StopGameServerSessionPlacementResponse) => void): Promise<StopGameServerSessionPlacementResponse> {
        return await this.request("StopGameServerSessionPlacement", req, cb);
    }

    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     * @public
     */
    async DescribePlayerSessions(req: DescribePlayerSessionsRequest, cb?: (error: string, rep: DescribePlayerSessionsResponse) => void): Promise<DescribePlayerSessionsResponse> {
        return await this.request("DescribePlayerSessions", req, cb);
    }

    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     * @public
     */
    async GetGameServerSessionLogUrl(req: GetGameServerSessionLogUrlRequest, cb?: (error: string, rep: GetGameServerSessionLogUrlResponse) => void): Promise<GetGameServerSessionLogUrlResponse> {
        return await this.request("GetGameServerSessionLogUrl", req, cb);
    }

    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     * @public
     */
    async SearchGameServerSessions(req: SearchGameServerSessionsRequest, cb?: (error: string, rep: SearchGameServerSessionsResponse) => void): Promise<SearchGameServerSessionsResponse> {
        return await this.request("SearchGameServerSessions", req, cb);
    }

    /**
     * 用于删除扩缩容配置
     * @public
     */
    async DeleteScalingPolicy(req: DeleteScalingPolicyRequest, cb?: (error: string, rep: DeleteScalingPolicyResponse) => void): Promise<DeleteScalingPolicyResponse> {
        return await this.request("DeleteScalingPolicy", req, cb);
    }

    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     * @public
     */
    async CreateGameServerSession(req: CreateGameServerSessionRequest, cb?: (error: string, rep: CreateGameServerSessionResponse) => void): Promise<CreateGameServerSessionResponse> {
        return await this.request("CreateGameServerSession", req, cb);
    }

    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     * @public
     */
    async DescribeGameServerSessionQueues(req: DescribeGameServerSessionQueuesRequest, cb?: (error: string, rep: DescribeGameServerSessionQueuesResponse) => void): Promise<DescribeGameServerSessionQueuesResponse> {
        return await this.request("DescribeGameServerSessionQueues", req, cb);
    }


}
