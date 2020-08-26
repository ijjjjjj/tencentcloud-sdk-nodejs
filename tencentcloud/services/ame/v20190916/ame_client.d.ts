import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeMusicResponse, DescribeItemsResponse, DescribeLyricResponse, DescribeItemByIdResponse, ReportDataResponse, DescribeItemsRequest, DescribeStationsRequest, DescribeLyricRequest, DescribeStationsResponse, ReportDataRequest, DescribeItemByIdRequest, DescribeMusicRequest } from "./ame_models";
/**
 * ame client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据歌曲ID查询歌曲信息
     * @public
     */
    DescribeItemById(req: DescribeItemByIdRequest, cb?: (error: string, rep: DescribeItemByIdResponse) => void): Promise<DescribeItemByIdResponse>;
    /**
     * 客户上报用户数据功能，为了更好的为用户提供优质服务
     * @public
     */
    ReportData(req: ReportDataRequest, cb?: (error: string, rep: ReportDataResponse) => void): Promise<ReportDataResponse>;
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
     * @public
     */
    DescribeLyric(req: DescribeLyricRequest, cb?: (error: string, rep: DescribeLyricResponse) => void): Promise<DescribeLyricResponse>;
    /**
     * 分类内容下歌曲列表获取，根据CategoryID或CategoryCode
     * @public
     */
    DescribeItems(req: DescribeItemsRequest, cb?: (error: string, rep: DescribeItemsResponse) => void): Promise<DescribeItemsResponse>;
    /**
     * 根据接口的模式及歌曲ID来取得对应权限的歌曲播放地址等信息。
     * @public
     */
    DescribeMusic(req: DescribeMusicRequest, cb?: (error: string, rep: DescribeMusicResponse) => void): Promise<DescribeMusicResponse>;
    /**
     * 获取素材库列表时使用
     * @public
     */
    DescribeStations(req: DescribeStationsRequest, cb?: (error: string, rep: DescribeStationsResponse) => void): Promise<DescribeStationsResponse>;
}
