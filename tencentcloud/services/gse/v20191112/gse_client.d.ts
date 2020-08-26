import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DeleteScalingPolicyRequest, DescribeGameServerSessionsResponse, DescribeGameServerSessionQueuesResponse, GetInstanceAccessResponse, JoinGameServerSessionRequest, DescribePlayerSessionsResponse, SetServerWeightResponse, StopGameServerSessionPlacementRequest, UpdateGameServerSessionResponse, GetInstanceAccessRequest, DescribeGameServerSessionsRequest, UpdateGameServerSessionRequest, StartMatchPlacementResponse, DescribePlayerSessionsRequest, StartGameServerSessionPlacementResponse, DescribeInstancesResponse, GetGameServerSessionLogUrlRequest, StartMatchPlacementRequest, CreateGameServerSessionResponse, DescribeInstancesRequest, DescribeScalingPoliciesRequest, DescribeGameServerSessionDetailsResponse, PutScalingPolicyResponse, JoinGameServerSessionResponse, SearchGameServerSessionsResponse, DescribeGameServerSessionPlacementRequest, DescribeScalingPoliciesResponse, SetServerWeightRequest, CreateGameServerSessionRequest, GetGameServerSessionLogUrlResponse, DescribeGameServerSessionDetailsRequest, StartGameServerSessionPlacementRequest, DescribeGameServerSessionQueuesRequest, DeleteScalingPolicyResponse, DescribeGameServerSessionPlacementResponse, SearchGameServerSessionsRequest, PutScalingPolicyRequest, StopGameServerSessionPlacementResponse } from "./gse_models";
/**
 * gse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（UpdateGameServerSession）用于更新游戏服务器会话
     * @public
     */
    UpdateGameServerSession(req: UpdateGameServerSessionRequest, cb?: (error: string, rep: UpdateGameServerSessionResponse) => void): Promise<UpdateGameServerSessionResponse>;
    /**
     * 用于查询服务部署的动态扩缩容配置
     * @public
     */
    DescribeScalingPolicies(req: DescribeScalingPoliciesRequest, cb?: (error: string, rep: DescribeScalingPoliciesResponse) => void): Promise<DescribeScalingPoliciesResponse>;
    /**
     * 用于查询服务器实例列表
     * @public
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 本接口（DescribeGameServerSessions）用于查询游戏服务器会话列表
     * @public
     */
    DescribeGameServerSessions(req: DescribeGameServerSessionsRequest, cb?: (error: string, rep: DescribeGameServerSessionsResponse) => void): Promise<DescribeGameServerSessionsResponse>;
    /**
     * 获取实例登录所需要的凭据
     * @public
     */
    GetInstanceAccess(req: GetInstanceAccessRequest, cb?: (error: string, rep: GetInstanceAccessResponse) => void): Promise<GetInstanceAccessResponse>;
    /**
     * 本接口（JoinGameServerSession）用于加入游戏服务器会话
     * @public
     */
    JoinGameServerSession(req: JoinGameServerSessionRequest, cb?: (error: string, rep: JoinGameServerSessionResponse) => void): Promise<JoinGameServerSessionResponse>;
    /**
     * 本接口（DescribeGameServerSessionPlacement）用于查询游戏服务器会话的放置
     * @public
     */
    DescribeGameServerSessionPlacement(req: DescribeGameServerSessionPlacementRequest, cb?: (error: string, rep: DescribeGameServerSessionPlacementResponse) => void): Promise<DescribeGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribeGameServerSessionDetails）用于查询游戏服务器会话详情列表
     * @public
     */
    DescribeGameServerSessionDetails(req: DescribeGameServerSessionDetailsRequest, cb?: (error: string, rep: DescribeGameServerSessionDetailsResponse) => void): Promise<DescribeGameServerSessionDetailsResponse>;
    /**
     * 用于设置动态扩缩容配置
     * @public
     */
    PutScalingPolicy(req: PutScalingPolicyRequest, cb?: (error: string, rep: PutScalingPolicyResponse) => void): Promise<PutScalingPolicyResponse>;
    /**
     * 本接口（StartGameServerSessionPlacement）用于开始放置游戏服务器会话
     * @public
     */
    StartGameServerSessionPlacement(req: StartGameServerSessionPlacementRequest, cb?: (error: string, rep: StartGameServerSessionPlacementResponse) => void): Promise<StartGameServerSessionPlacementResponse>;
    /**
     * 设置服务器权重
     * @public
     */
    SetServerWeight(req: SetServerWeightRequest, cb?: (error: string, rep: SetServerWeightResponse) => void): Promise<SetServerWeightResponse>;
    /**
     * 本接口（StartMatchPlacement）用于开始匹配放置游戏服务器会话
     * @public
     */
    StartMatchPlacement(req: StartMatchPlacementRequest, cb?: (error: string, rep: StartMatchPlacementResponse) => void): Promise<StartMatchPlacementResponse>;
    /**
     * 本接口（StopGameServerSessionPlacement）用于停止放置游戏服务器会话
     * @public
     */
    StopGameServerSessionPlacement(req: StopGameServerSessionPlacementRequest, cb?: (error: string, rep: StopGameServerSessionPlacementResponse) => void): Promise<StopGameServerSessionPlacementResponse>;
    /**
     * 本接口（DescribePlayerSessions）用于获取玩家会话列表
     * @public
     */
    DescribePlayerSessions(req: DescribePlayerSessionsRequest, cb?: (error: string, rep: DescribePlayerSessionsResponse) => void): Promise<DescribePlayerSessionsResponse>;
    /**
     * 本接口（GetGameServerSessionLogUrl）用于获取游戏服务器会话的日志URL
     * @public
     */
    GetGameServerSessionLogUrl(req: GetGameServerSessionLogUrlRequest, cb?: (error: string, rep: GetGameServerSessionLogUrlResponse) => void): Promise<GetGameServerSessionLogUrlResponse>;
    /**
     * 本接口（SearchGameServerSessions）用于搜索游戏服务器会话列表
     * @public
     */
    SearchGameServerSessions(req: SearchGameServerSessionsRequest, cb?: (error: string, rep: SearchGameServerSessionsResponse) => void): Promise<SearchGameServerSessionsResponse>;
    /**
     * 用于删除扩缩容配置
     * @public
     */
    DeleteScalingPolicy(req: DeleteScalingPolicyRequest, cb?: (error: string, rep: DeleteScalingPolicyResponse) => void): Promise<DeleteScalingPolicyResponse>;
    /**
     * 本接口（CreateGameServerSession）用于创建游戏服务会话
     * @public
     */
    CreateGameServerSession(req: CreateGameServerSessionRequest, cb?: (error: string, rep: CreateGameServerSessionResponse) => void): Promise<CreateGameServerSessionResponse>;
    /**
     * 本接口（DescribeGameServerSessionQueues）用于查询游戏服务器会话队列
     * @public
     */
    DescribeGameServerSessionQueues(req: DescribeGameServerSessionQueuesRequest, cb?: (error: string, rep: DescribeGameServerSessionQueuesResponse) => void): Promise<DescribeGameServerSessionQueuesResponse>;
}
