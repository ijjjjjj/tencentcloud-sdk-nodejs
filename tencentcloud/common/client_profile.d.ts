/**
 * 可选参数类
 * @class
 */
export interface ClientProfile {
  /**
   * 签名方法，当前支持(HmacSHA1 HmacSHA256)
   * @type {string}
   */
  signMethod: string
  /**
   * http相关选项实例
   * @type {httpProfile}
   */
  httpProfile: HttpProfile
}
/**
 * http可选参数类
 * @class
 */
export interface HttpProfile {
  /**
   * 请求方法，目前支持（POST GET）
   * @type {string}
   */
  reqMethod?: string
  /**
   * 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
   * @type {string}
   */
  endpoint?: string
  /**
   * 协议，目前支持（https://）
   * @type {string}
   */
  protocol?: string
  /**
   *  请求超时时间，默认60s
   * @type {number}
   */
  reqTimeout?: number
}
/**
 * 认证信息类
 * @class
 */
export interface Credential {
  /**
   * 腾讯云账户secretId，secretKey
   */
  secretId?: string
  /**
   * 腾讯云账户secretKey
   */
  secretKey?: string
  /**
   * 腾讯云账户token
   */
  token?: string
}
