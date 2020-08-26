/**
 * Album
 */
export interface Album {
    /**
     * 专辑名
     */
    AlbumName: string;
    /**
        * 专辑图片大小及类别
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ImagePathMap: Array<ImagePath>;
}
/**
 * DescribeMusic返回参数结构体
 */
export interface DescribeMusicResponse {
    /**
        * 音乐相关信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Music?: Music;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片路径
 */
export interface ImagePath {
    /**
        * station图片大小及类别
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Key: string;
    /**
        * station图片地址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Value: string;
}
/**
 * 数据信息
 */
export interface DataInfo {
    /**
     * Song Name
     */
    Name: string;
    /**
     * 歌曲版本
     */
    Version: string;
    /**
     * 歌曲总时长（非试听时长）
     */
    Duration: string;
    /**
     * 试听开始时间
     */
    AuditionBegin: number;
    /**
     * 试听结束时间
     */
    AuditionEnd: number;
}
/**
 * DescribeItems返回参数结构体
 */
export interface DescribeItemsResponse {
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 当前页歌曲数量
     */
    Size?: number;
    /**
     * 总数据条数
     */
    Total?: number;
    /**
        * 剩余数量（total-offset-size），通过这个值判断是否
  还有下一页
        */
    HaveMore?: number;
    /**
        * Items 歌曲列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Items?: Array<Item>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音乐详情
 */
export interface Music {
    /**
     * 音乐播放链接相对路径，必须通过在正版曲库直通车控制台上登记的域名进行拼接。
     */
    Url: string;
    /**
     * 音频文件大小
     */
    FileSize: number;
    /**
     * 音频文件类型
     */
    FileExtension: string;
    /**
        * Song fragment start.试听片段开始时间，试听时长为auditionEnd-auditionBegin
  Unit :ms
        */
    AuditionBegin: number;
    /**
        * Song fragment end.试听片段结束时间, 试听时长为auditionEnd-auditionBegin
  Unit :ms
        */
    AuditionEnd: number;
    /**
        * 音乐播放链接全路径，前提是在正版曲库直通车控制台添加过域名，否则返回空字符。
  如果添加过多个域名只返回第一个添加域名的播放全路径。
        */
    FullUrl: string;
}
/**
 * Artist
 */
export interface Artist {
    /**
     * 歌手名
     */
    ArtistName: string;
}
/**
 * DescribeLyric返回参数结构体
 */
export interface DescribeLyricResponse {
    /**
        * 歌词详情
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Lyric?: Lyric;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeItemById返回参数结构体
 */
export interface DescribeItemByIdResponse {
    /**
        * 歌曲信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Items?: Array<Item>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReportData返回参数结构体
 */
export interface ReportDataResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeItems请求参数结构体
 */
export interface DescribeItemsRequest {
    /**
     * offset (Default = 0)，(当前页-1) * Limit
     */
    Offset: number;
    /**
     * 条数，必须大于0，最大值为30
     */
    Limit: number;
    /**
     * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
     */
    CategoryId?: string;
    /**
     * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
     */
    CategoryCode?: string;
}
/**
 * DescribeStations请求参数结构体
 */
export interface DescribeStationsRequest {
    /**
     * 条数，必须大于0
     */
    Limit: number;
    /**
     * offset (Default = 0)，(当前页-1) * Limit
     */
    Offset: number;
}
/**
 * Item
 */
export interface Item {
    /**
     * Song ID
     */
    ItemID: string;
    /**
        * Song info
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DataInfo: DataInfo;
    /**
        * 专辑信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Album: Album;
    /**
        * 多个歌手集合
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Artists: Array<Artist>;
}
/**
 * 分类内容
 */
export interface Station {
    /**
     * StationID
     */
    CategoryID: string;
    /**
        * Station MCCode
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CategoryCode: string;
    /**
        * Category Name
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Name: string;
    /**
        * Station的排序值，供参考（返回结果已按其升序）
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Rank: number;
    /**
        * station图片集合
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ImagePathMap: Array<ImagePath>;
}
/**
 * 歌词信息
 */
export interface Lyric {
    /**
     * 歌词cdn地址
     */
    Url: string;
    /**
     * 歌词后缀名
     */
    FileNameExt: string;
    /**
     * 歌词类型
     */
    SubItemType: string;
}
/**
 * DescribeLyric请求参数结构体
 */
export interface DescribeLyricRequest {
    /**
     * 歌曲ID
     */
    ItemId: string;
    /**
     * 歌词格式，可选项，可不填写，目前填写只能填LRC-LRC。该字段为预留的扩展字段。后续如果不填，会返回歌曲的所有格式的歌词。如果填写某个正确的格式，则只返回该格式的歌词。
     */
    SubItemType?: string;
}
/**
 * DescribeStations返回参数结构体
 */
export interface DescribeStationsResponse {
    /**
     * 总数量
     */
    Total?: number;
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 当前页station数量
     */
    Size?: number;
    /**
     * 剩余数量（total-offset-size），通过这个值判断是否还有下一页
     */
    HaveMore?: number;
    /**
        * Stations 素材库列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Stations?: Array<Station>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReportData请求参数结构体
 */
export interface ReportDataRequest {
    /**
        * 上报数据
  注:reportData为客户端压缩后的上报数据进行16进制转换的字符串数据
  压缩说明：
  a) 上报的json格式字符串通过流的转换（ByteArrayInputStream, java.util.zip.GZIPOutputStream），获取到压缩后的字节数组。
  b) 将压缩后的字节数组转成16进制字符串。
  
  reportData由两部分数据组成：
  1）report_type（上报类型）
  2）data（歌曲上报数据）
  不同的report_type对应的data数据结构不一样。
  
  详细说明请参考文档reportdata.docx：
  https://github.com/ame-demo/doc
        */
    ReportData: string;
}
/**
 * DescribeItemById请求参数结构体
 */
export interface DescribeItemByIdRequest {
    /**
     * 歌曲ID，目前暂不支持批量查询
     */
    ItemIDs: string;
}
/**
 * DescribeMusic请求参数结构体
 */
export interface DescribeMusicRequest {
    /**
     * 歌曲ID
     */
    ItemId: string;
    /**
     * 在应用前端播放音乐C端用户的唯一标识。无需是账户信息，用户唯一标识即可。
     */
    IdentityId: string;
    /**
     * 填 MP3-64K-FTD-P 获取歌曲热门片段
     */
    SubItemType?: string;
    /**
        * CDN URL Protocol:HTTP or HTTPS/SSL
  Values:Y , N(default)
        */
    Ssl?: string;
}
