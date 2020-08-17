/**
 * 认证信息类
 * @class
 */
export class Credential {
  secretId: string
  secretKey: string
  token: string
  /**
   * @param {string} secretId
   * @param {string} secretKey
   * @param {string=} token
   */
  constructor(secretId: string, secretKey: string, token?: string) {
    /**
     * secretId,可在控制台获取
     */
    this.secretId = secretId

    /**
     * secretKey,可在控制台获取
     */
    this.secretKey = secretKey

    /**
     * token
     */
    this.token = token
  }
}
