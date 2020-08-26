import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeSubnetRequest, DescribeVsmsResponse, InquiryPriceBuyVsmRequest, DescribeVpcResponse, ModifyVsmAttributesRequest, DescribeSubnetResponse, DescribeHSMByVpcIdRequest, DescribeHSMByVpcIdResponse, DescribeUsgRuleResponse, DescribeVpcRequest, DescribeUsgRequest, DescribeVsmAttributesResponse, InquiryPriceBuyVsmResponse, DescribeHSMBySubnetIdResponse, DescribeUsgResponse, DescribeHSMBySubnetIdRequest, DescribeVsmsRequest, DescribeUsgRuleRequest, ModifyVsmAttributesResponse, DescribeVsmAttributesRequest } from "./cloudhsm_models";
/**
 * cloudhsm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改VSM属性
     * @public
     */
    ModifyVsmAttributes(req: ModifyVsmAttributesRequest, cb?: (error: string, rep: ModifyVsmAttributesResponse) => void): Promise<ModifyVsmAttributesResponse>;
    /**
     * 获取VSM属性
     * @public
     */
    DescribeVsmAttributes(req: DescribeVsmAttributesRequest, cb?: (error: string, rep: DescribeVsmAttributesResponse) => void): Promise<DescribeVsmAttributesResponse>;
    /**
     * 获取用户VSM列表
     * @public
     */
    DescribeVsms(req: DescribeVsmsRequest, cb?: (error: string, rep: DescribeVsmsResponse) => void): Promise<DescribeVsmsResponse>;
    /**
     * 查询用户的私有网络列表
     * @public
     */
    DescribeVpc(req: DescribeVpcRequest, cb?: (error: string, rep: DescribeVpcResponse) => void): Promise<DescribeVpcResponse>;
    /**
     * 通过VpcId获取Hsm资源数
     * @public
     */
    DescribeHSMByVpcId(req: DescribeHSMByVpcIdRequest, cb?: (error: string, rep: DescribeHSMByVpcIdResponse) => void): Promise<DescribeHSMByVpcIdResponse>;
    /**
     * 通过SubnetId获取Hsm资源数
     * @public
     */
    DescribeHSMBySubnetId(req: DescribeHSMBySubnetIdRequest, cb?: (error: string, rep: DescribeHSMBySubnetIdResponse) => void): Promise<DescribeHSMBySubnetIdResponse>;
    /**
     * 根据用户的AppId获取用户安全组列表
     * @public
     */
    DescribeUsg(req: DescribeUsgRequest, cb?: (error: string, rep: DescribeUsgResponse) => void): Promise<DescribeUsgResponse>;
    /**
     * 查询子网列表
     * @public
     */
    DescribeSubnet(req: DescribeSubnetRequest, cb?: (error: string, rep: DescribeSubnetResponse) => void): Promise<DescribeSubnetResponse>;
    /**
     * 购买询价接口
     * @public
     */
    InquiryPriceBuyVsm(req: InquiryPriceBuyVsmRequest, cb?: (error: string, rep: InquiryPriceBuyVsmResponse) => void): Promise<InquiryPriceBuyVsmResponse>;
    /**
     * 获取安全组详情
     * @public
     */
    DescribeUsgRule(req: DescribeUsgRuleRequest, cb?: (error: string, rep: DescribeUsgRuleResponse) => void): Promise<DescribeUsgRuleResponse>;
}
