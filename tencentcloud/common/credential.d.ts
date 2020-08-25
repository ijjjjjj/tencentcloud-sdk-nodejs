/**
 * 认证信息类
 * @class
 */
export interface Credential {
    /**
     * 腾讯云账户secretId，secretKey
     */
    secretId?: string;
    /**
     * 腾讯云账户secretKey
     */
    secretKey?: string;
    /**
     * 腾讯云账户token
     */
    token?: string;
}
