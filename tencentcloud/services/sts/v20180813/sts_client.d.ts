import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { AssumeRoleWithSAMLResponse, AssumeRoleWithSAMLRequest, GetFederationTokenResponse, QueryApiKeyResponse, AssumeRoleResponse, QueryApiKeyRequest, GetFederationTokenRequest, AssumeRoleRequest } from "./sts_models";
/**
 * sts client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取联合身份临时访问凭证
     * @public
     */
    GetFederationToken(req: GetFederationTokenRequest, cb?: (error: string, rep: GetFederationTokenResponse) => void): Promise<GetFederationTokenResponse>;
    /**
     * 拉取API密钥列表
     * @public
     */
    QueryApiKey(req: QueryApiKeyRequest, cb?: (error: string, rep: QueryApiKeyResponse) => void): Promise<QueryApiKeyResponse>;
    /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时凭证。
     * @public
     */
    AssumeRoleWithSAML(req: AssumeRoleWithSAMLRequest, cb?: (error: string, rep: AssumeRoleWithSAMLResponse) => void): Promise<AssumeRoleWithSAMLResponse>;
    /**
     * 申请扮演角色
     * @public
     */
    AssumeRole(req: AssumeRoleRequest, cb?: (error: string, rep: AssumeRoleResponse) => void): Promise<AssumeRoleResponse>;
}
