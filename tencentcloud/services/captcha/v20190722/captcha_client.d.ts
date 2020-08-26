import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeCaptchaResultResponse, DescribeCaptchaOperDataResponse, DescribeCaptchaAppIdInfoRequest, DescribeCaptchaAppIdInfoResponse, DescribeCaptchaDataResponse, DescribeCaptchaDataRequest, DescribeCaptchaUserAllAppIdResponse, DescribeCaptchaDataSumRequest, UpdateCaptchaAppIdInfoRequest, UpdateCaptchaAppIdInfoResponse, DescribeCaptchaUserAllAppIdRequest, DescribeCaptchaDataSumResponse, DescribeCaptchaOperDataRequest, DescribeCaptchaResultRequest } from "./captcha_models";
/**
 * captcha client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 安全验证码获取用户注册所有APPId和应用名称
     * @public
     */
    DescribeCaptchaUserAllAppId(req: DescribeCaptchaUserAllAppIdRequest, cb?: (error: string, rep: DescribeCaptchaUserAllAppIdResponse) => void): Promise<DescribeCaptchaUserAllAppIdResponse>;
    /**
     * 安全验证码查询请求数据概况，例如：按照时间段查询数据  昨日请求量、昨日恶意比例、昨日验证量、昨日通过量、昨日恶意拦截量……
     * @public
     */
    DescribeCaptchaDataSum(req: DescribeCaptchaDataSumRequest, cb?: (error: string, rep: DescribeCaptchaDataSumResponse) => void): Promise<DescribeCaptchaDataSumResponse>;
    /**
     * 安全验证码用户操作数据查询，验证码加载耗时type = 1 、拦截情况type = 2、 一周通过平均尝试次数 type = 3、尝试次数分布 type = 4
     * @public
     */
    DescribeCaptchaOperData(req: DescribeCaptchaOperDataRequest, cb?: (error: string, rep: DescribeCaptchaOperDataResponse) => void): Promise<DescribeCaptchaOperDataResponse>;
    /**
     * 查询安全验证码应用APPId信息
     * @public
     */
    DescribeCaptchaAppIdInfo(req: DescribeCaptchaAppIdInfoRequest, cb?: (error: string, rep: DescribeCaptchaAppIdInfoResponse) => void): Promise<DescribeCaptchaAppIdInfoResponse>;
    /**
     * 安全验证码分类查询数据接口，请求量type=0、验证量type=1、通过量type=2、拦截量type=3  分钟级查询
     * @public
     */
    DescribeCaptchaData(req: DescribeCaptchaDataRequest, cb?: (error: string, rep: DescribeCaptchaDataResponse) => void): Promise<DescribeCaptchaDataResponse>;
    /**
     * 更新验证码应用APPId信息
     * @public
     */
    UpdateCaptchaAppIdInfo(req: UpdateCaptchaAppIdInfoRequest, cb?: (error: string, rep: UpdateCaptchaAppIdInfoResponse) => void): Promise<UpdateCaptchaAppIdInfoResponse>;
    /**
     * 核查验证码票据结果
     * @public
     */
    DescribeCaptchaResult(req: DescribeCaptchaResultRequest, cb?: (error: string, rep: DescribeCaptchaResultResponse) => void): Promise<DescribeCaptchaResultResponse>;
}
