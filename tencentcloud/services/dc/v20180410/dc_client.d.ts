import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { RejectDirectConnectTunnelRequest, ModifyDirectConnectAttributeRequest, DeleteDirectConnectTunnelRequest, CreateDirectConnectResponse, DescribeAccessPointsResponse, AcceptDirectConnectTunnelResponse, DescribeDirectConnectTunnelsRequest, ModifyDirectConnectTunnelAttributeResponse, AcceptDirectConnectTunnelRequest, CreateDirectConnectTunnelRequest, DeleteDirectConnectResponse, DescribeDirectConnectsResponse, DescribeAccessPointsRequest, DescribeDirectConnectsRequest, ModifyDirectConnectTunnelAttributeRequest, CreateDirectConnectRequest, ModifyDirectConnectAttributeResponse, RejectDirectConnectTunnelResponse, CreateDirectConnectTunnelResponse, DeleteDirectConnectTunnelResponse, DeleteDirectConnectRequest, DescribeDirectConnectTunnelsResponse } from "./dc_models";
/**
 * dc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改物理专线的属性。
     * @public
     */
    ModifyDirectConnectAttribute(req: ModifyDirectConnectAttributeRequest, cb?: (error: string, rep: ModifyDirectConnectAttributeResponse) => void): Promise<ModifyDirectConnectAttributeResponse>;
    /**
     * 用于创建专用通道的接口
     * @public
     */
    CreateDirectConnectTunnel(req: CreateDirectConnectTunnelRequest, cb?: (error: string, rep: CreateDirectConnectTunnelResponse) => void): Promise<CreateDirectConnectTunnelResponse>;
    /**
       * 删除物理专线。
  只能删除处于已连接状态的物理专线。
       * @public
       */
    DeleteDirectConnect(req: DeleteDirectConnectRequest, cb?: (error: string, rep: DeleteDirectConnectResponse) => void): Promise<DeleteDirectConnectResponse>;
    /**
     * 接受专用通道申请
     * @public
     */
    AcceptDirectConnectTunnel(req: AcceptDirectConnectTunnelRequest, cb?: (error: string, rep: AcceptDirectConnectTunnelResponse) => void): Promise<AcceptDirectConnectTunnelResponse>;
    /**
     * 删除专用通道
     * @public
     */
    DeleteDirectConnectTunnel(req: DeleteDirectConnectTunnelRequest, cb?: (error: string, rep: DeleteDirectConnectTunnelResponse) => void): Promise<DeleteDirectConnectTunnelResponse>;
    /**
       * 查询物理专线接入点
  
       * @public
       */
    DescribeAccessPoints(req: DescribeAccessPointsRequest, cb?: (error: string, rep: DescribeAccessPointsResponse) => void): Promise<DescribeAccessPointsResponse>;
    /**
     * 用于查询专用通道列表。
     * @public
     */
    DescribeDirectConnectTunnels(req: DescribeDirectConnectTunnelsRequest, cb?: (error: string, rep: DescribeDirectConnectTunnelsResponse) => void): Promise<DescribeDirectConnectTunnelsResponse>;
    /**
       * 申请物理专线接入。
  调用该接口时，请注意：
  账号要进行实名认证，否则不允许申请物理专线；
  若账户下存在欠费状态的物理专线，则不能申请更多的物理专线。
       * @public
       */
    CreateDirectConnect(req: CreateDirectConnectRequest, cb?: (error: string, rep: CreateDirectConnectResponse) => void): Promise<CreateDirectConnectResponse>;
    /**
     * 拒绝专用通道申请
     * @public
     */
    RejectDirectConnectTunnel(req: RejectDirectConnectTunnelRequest, cb?: (error: string, rep: RejectDirectConnectTunnelResponse) => void): Promise<RejectDirectConnectTunnelResponse>;
    /**
     * 查询物理专线列表。
     * @public
     */
    DescribeDirectConnects(req: DescribeDirectConnectsRequest, cb?: (error: string, rep: DescribeDirectConnectsResponse) => void): Promise<DescribeDirectConnectsResponse>;
    /**
     * 修改专用通道属性
     * @public
     */
    ModifyDirectConnectTunnelAttribute(req: ModifyDirectConnectTunnelAttributeRequest, cb?: (error: string, rep: ModifyDirectConnectTunnelAttributeResponse) => void): Promise<ModifyDirectConnectTunnelAttributeResponse>;
}
