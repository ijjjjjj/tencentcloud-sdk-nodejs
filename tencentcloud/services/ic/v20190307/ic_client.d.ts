import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { SendMultiSmsResponse, RenewCardsResponse, DescribeCardsResponse, DescribeCardResponse, DescribeAppResponse, DescribeCardRequest, DescribeAppRequest, SendSmsResponse, SendSmsRequest, DescribeCardsRequest, SendMultiSmsRequest, RenewCardsRequest } from "./ic_models";
/**
 * ic client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据应用id查询物联卡应用详情
     * @public
     */
    DescribeApp(req: DescribeAppRequest, cb?: (error: string, rep: DescribeAppResponse) => void): Promise<DescribeAppResponse>;
    /**
     * 查询卡片详细信息
     * @public
     */
    DescribeCard(req: DescribeCardRequest, cb?: (error: string, rep: DescribeCardResponse) => void): Promise<DescribeCardResponse>;
    /**
     * 发送短信息接口
     * @public
     */
    SendSms(req: SendSmsRequest, cb?: (error: string, rep: SendSmsResponse) => void): Promise<SendSmsResponse>;
    /**
     * 群发短信
     * @public
     */
    SendMultiSms(req: SendMultiSmsRequest, cb?: (error: string, rep: SendMultiSmsResponse) => void): Promise<SendMultiSmsResponse>;
    /**
       * 批量为卡片续费，此接口建议调用至少间隔10s,如果出现返回deal lock failed相关的错误，请过10s再重试。
  续费的必要条件：
  1、单次续费的卡片不可以超过 100张。
  2、接口只支持在控制台购买的卡片进行续费
  3、销户和未激活的卡片不支持续费。
  4、每张物联网卡，续费总周期不能超过24个月
       * @public
       */
    RenewCards(req: RenewCardsRequest, cb?: (error: string, rep: RenewCardsResponse) => void): Promise<RenewCardsResponse>;
    /**
     * 查询卡片列表信息
     * @public
     */
    DescribeCards(req: DescribeCardsRequest, cb?: (error: string, rep: DescribeCardsResponse) => void): Promise<DescribeCardsResponse>;
}