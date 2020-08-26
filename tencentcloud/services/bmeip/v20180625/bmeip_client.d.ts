import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { UnbindEipAclsRequest, ModifyEipChargeResponse, ModifyEipAclResponse, DescribeEipsResponse, ModifyEipAclRequest, UnbindVpcIpRequest, BindRsResponse, BindEipAclsResponse, CreateEipRequest, UnbindHostedResponse, DeleteEipAclRequest, UnbindEipAclsResponse, DescribeEipAclsResponse, ModifyEipNameResponse, DescribeEipQuotaResponse, UnbindRsResponse, BindRsRequest, UnbindHostedRequest, UnbindRsListResponse, BindVpcIpResponse, DescribeEipsRequest, ModifyEipNameRequest, DeleteEipResponse, BindHostedResponse, BindVpcIpRequest, CreateEipAclRequest, CreateEipResponse, BindHostedRequest, DescribeEipTaskResponse, ModifyEipChargeRequest, DescribeEipQuotaRequest, DeleteEipRequest, UnbindRsListRequest, DeleteEipAclResponse, DescribeEipAclsRequest, BindEipAclsRequest, DescribeEipTaskRequest, UnbindRsRequest, UnbindVpcIpResponse, CreateEipAclResponse } from "./bmeip_models";
/**
 * bmeip client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 解绑黑石EIP
     * @public
     */
    UnbindRs(req: UnbindRsRequest, cb?: (error: string, rep: UnbindRsResponse) => void): Promise<UnbindRsResponse>;
    /**
     * BindHosted接口用于绑定黑石弹性公网IP到黑石托管机器上
     * @public
     */
    BindHosted(req: BindHostedRequest, cb?: (error: string, rep: BindHostedResponse) => void): Promise<BindHostedResponse>;
    /**
     * 创建黑石弹性公网 EIPACL
     * @public
     */
    CreateEipAcl(req: CreateEipAclRequest, cb?: (error: string, rep: CreateEipAclResponse) => void): Promise<CreateEipAclResponse>;
    /**
     * 创建黑石弹性公网IP
     * @public
     */
    CreateEip(req: CreateEipRequest, cb?: (error: string, rep: CreateEipResponse) => void): Promise<CreateEipResponse>;
    /**
     * 修改弹性公网IP ACL
     * @public
     */
    ModifyEipAcl(req: ModifyEipAclRequest, cb?: (error: string, rep: ModifyEipAclResponse) => void): Promise<ModifyEipAclResponse>;
    /**
     * 查询黑石EIP 限额
     * @public
     */
    DescribeEipQuota(req: DescribeEipQuotaRequest, cb?: (error: string, rep: DescribeEipQuotaResponse) => void): Promise<DescribeEipQuotaResponse>;
    /**
     * 绑定黑石EIP
     * @public
     */
    BindRs(req: BindRsRequest, cb?: (error: string, rep: BindRsResponse) => void): Promise<BindRsResponse>;
    /**
     * 黑石EIP查询任务状态
     * @public
     */
    DescribeEipTask(req: DescribeEipTaskRequest, cb?: (error: string, rep: DescribeEipTaskResponse) => void): Promise<DescribeEipTaskResponse>;
    /**
     * UnbindHosted接口用于解绑托管机器上的EIP
     * @public
     */
    UnbindHosted(req: UnbindHostedRequest, cb?: (error: string, rep: UnbindHostedResponse) => void): Promise<UnbindHostedResponse>;
    /**
     * 黑石EIP解绑VPCIP
     * @public
     */
    UnbindVpcIp(req: UnbindVpcIpRequest, cb?: (error: string, rep: UnbindVpcIpResponse) => void): Promise<UnbindVpcIpResponse>;
    /**
     * 释放黑石弹性公网IP
     * @public
     */
    DeleteEip(req: DeleteEipRequest, cb?: (error: string, rep: DeleteEipResponse) => void): Promise<DeleteEipResponse>;
    /**
     * 黑石EIP修改计费方式
     * @public
     */
    ModifyEipCharge(req: ModifyEipChargeRequest, cb?: (error: string, rep: ModifyEipChargeResponse) => void): Promise<ModifyEipChargeResponse>;
    /**
     * 更新黑石EIP名称
     * @public
     */
    ModifyEipName(req: ModifyEipNameRequest, cb?: (error: string, rep: ModifyEipNameResponse) => void): Promise<ModifyEipNameResponse>;
    /**
     * 此接口用于为某个 EIP 关联 ACL。
     * @public
     */
    BindEipAcls(req: BindEipAclsRequest, cb?: (error: string, rep: BindEipAclsResponse) => void): Promise<BindEipAclsResponse>;
    /**
     * 删除弹性公网IP ACL
     * @public
     */
    DeleteEipAcl(req: DeleteEipAclRequest, cb?: (error: string, rep: DeleteEipAclResponse) => void): Promise<DeleteEipAclResponse>;
    /**
     * 解绑弹性公网IP ACL
     * @public
     */
    UnbindEipAcls(req: UnbindEipAclsRequest, cb?: (error: string, rep: UnbindEipAclsResponse) => void): Promise<UnbindEipAclsResponse>;
    /**
     * 黑石EIP查询接口
     * @public
     */
    DescribeEips(req: DescribeEipsRequest, cb?: (error: string, rep: DescribeEipsResponse) => void): Promise<DescribeEipsResponse>;
    /**
     * 黑石EIP绑定VPCIP
     * @public
     */
    BindVpcIp(req: BindVpcIpRequest, cb?: (error: string, rep: BindVpcIpResponse) => void): Promise<BindVpcIpResponse>;
    /**
     * 批量解绑物理机弹性公网IP接口
     * @public
     */
    UnbindRsList(req: UnbindRsListRequest, cb?: (error: string, rep: UnbindRsListResponse) => void): Promise<UnbindRsListResponse>;
    /**
     * 查询弹性公网IP ACL
     * @public
     */
    DescribeEipAcls(req: DescribeEipAclsRequest, cb?: (error: string, rep: DescribeEipAclsResponse) => void): Promise<DescribeEipAclsResponse>;
}
