/**
 * http可选参数类
 * @class
 */
export interface HttpProfile {
    /**
     * 请求方法，目前支持（POST GET）
     * @type {string}
     */
    reqMethod?: string;
    /**
     * 接入点域名，形如（cvm.ap-shanghai.tencentcloud.com）
     * @type {string}
     */
    endpoint?: string;
    /**
     * 协议，目前支持（https://）
     * @type {string}
     */
    protocol?: string;
    /**
     *  请求超时时间，默认60s
     * @type {number}
     */
    reqTimeout?: number;
}
