import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { SegmentPortraitPicResponse, DetectBodyJointsResponse, DeletePersonRequest, ModifyGroupResponse, GetGroupListResponse, ModifyGroupRequest, CreatePersonRequest, ModifyPersonInfoResponse, DeleteGroupRequest, ModifyPersonInfoRequest, SegmentCustomizedPortraitPicRequest, CreateGroupRequest, DeleteGroupResponse, DetectBodyRequest, SearchTraceRequest, DetectBodyResponse, SegmentCustomizedPortraitPicResponse, DetectBodyJointsRequest, SegmentPortraitPicRequest, GetGroupListRequest, SearchTraceResponse, CreateTraceResponse, CreatePersonResponse, GetPersonListResponse, GetPersonListRequest, CreateTraceRequest, DeletePersonResponse, CreateGroupResponse } from "./bda_models";
/**
 * bda client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
       * 本接口用于对一组待识别的人体轨迹（Trace）图片，在人体库中识别出最相似的 TopK 人体，按照相似度从大到小排列。
  
  人体轨迹（Trace）图片要求：图片中当且仅包含一个人体。人体完整、无遮挡。
  
  > 请注意：
  - 我们希望您的输入为严格符合轨迹图片要求的图片。如果您输入的图片不符合轨迹图片要求，会对最终效果产生较大负面影响；
  - 人体轨迹，是一个包含1-5张图片的图片序列。您可以输入1张图片作为轨迹，也可以输入多张。单个轨迹中包含越多符合质量的图片，搜索效果越好。
  - 构成人体轨迹单张图片大小不得超过2M，分辨率不得超过1920*1080。
       * @public
       */
    SearchTrace(req: SearchTraceRequest, cb?: (error: string, rep: SearchTraceResponse) => void): Promise<SearchTraceResponse>;
    /**
       * 检测给定图片中的人体（Body）的位置信息及属性信息。
  
       * @public
       */
    DetectBody(req: DetectBodyRequest, cb?: (error: string, rep: DetectBodyResponse) => void): Promise<DetectBodyResponse>;
    /**
       * 识别传入图片中人体的完整轮廓，进行抠像。
  
       * @public
       */
    SegmentPortraitPic(req: SegmentPortraitPicRequest, cb?: (error: string, rep: SegmentPortraitPicResponse) => void): Promise<SegmentPortraitPicResponse>;
    /**
       * 检测图片中人体的14个关键点。建议用于人体图像清晰、无遮挡的场景。支持一张图片中存在多个人体的识别。
  
       * @public
       */
    DetectBodyJoints(req: DetectBodyJointsRequest, cb?: (error: string, rep: DetectBodyJointsResponse) => void): Promise<DetectBodyJointsResponse>;
    /**
       * 将一个人体轨迹添加到一个人员中。一个人员最多允许包含 5 个人体轨迹。同一人的人体轨迹越多，搜索识别效果越好。
  
  >请注意：
  - 我们希望您的输入为 严格符合轨迹图片 要求的图片。如果您输入的图片不符合轨迹图片要求，会对最终效果产生较大负面影响。请您尽量保证一个Trace中的图片人体清晰、无遮挡、连贯。
  - 一个人体轨迹（Trace）可以包含1-5张人体图片。提供越多质量高的人体图片有助于提升最终识别结果。
  - 无论您在单个Trace中提供了多少张人体图片，我们都将生成一个对应的轨迹（Trace）信息。即，Trace仅和本次输入的图片序列相关，和图片的个数无关。
  - 输入的图片组中，若有部分图片输入不合法（如图片大小过大、分辨率过大、无法解码等），我们将舍弃这部分图片，确保合法图片被正确搜索。即，我们将尽可能保证请求成功，去除不合法的输入；
  - 构成人体轨迹单张图片大小限制为2M，分辨率限制为1920*1080。
       * @public
       */
    CreateTrace(req: CreateTraceRequest, cb?: (error: string, rep: CreateTraceResponse) => void): Promise<CreateTraceResponse>;
    /**
     * 删除该人体库及包含的所有的人员。
     * @public
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 删除人员。
     * @public
     */
    DeletePerson(req: DeletePersonRequest, cb?: (error: string, rep: DeletePersonResponse) => void): Promise<DeletePersonResponse>;
    /**
     * 修改人员信息。
     * @public
     */
    ModifyPersonInfo(req: ModifyPersonInfoRequest, cb?: (error: string, rep: ModifyPersonInfoResponse) => void): Promise<ModifyPersonInfoResponse>;
    /**
     * 修改人体库名称、备注。
     * @public
     */
    ModifyGroup(req: ModifyGroupRequest, cb?: (error: string, rep: ModifyGroupResponse) => void): Promise<ModifyGroupResponse>;
    /**
     * 获取人体库列表。
     * @public
     */
    GetGroupList(req: GetGroupListRequest, cb?: (error: string, rep: GetGroupListResponse) => void): Promise<GetGroupListResponse>;
    /**
       * 用于创建一个空的人体库，如果人体库已存在返回错误。
  
  1个APPID下最多有2000W个人体轨迹（Trace），最多1W个人体库（Group）。
  
  单个人体库（Group）最多10W个人体轨迹（Trace）。
  
  单个人员（Person）最多添加 5 个人体轨迹（Trace）。
       * @public
       */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
       * 创建人员，添加对应人员的人体轨迹信息。
  
  请注意：
  - 我们希望您的输入为 严格符合轨迹图片 要求的图片。如果您输入的图片不符合轨迹图片要求，会对最终效果产生较大负面影响。请您尽量保证一个Trace中的图片人体清晰、无遮挡、连贯；
  - 一个人体轨迹（Trace）可以包含1-5张人体图片。提供越多质量高的人体图片有助于提升最终识别结果；
  - 无论您在单个Trace中提供了多少张人体图片，我们都将生成一个对应的轨迹（Trace）信息。即，Trace仅和本次输入的图片序列相关，和图片的个数无关；
  - 输入的图片组中，若有部分图片输入不合法（如图片大小过大、分辨率过大、无法解码等），我们将舍弃这部分图片，确保合法图片被正确搜索。即，我们将尽可能保证请求成功，去除不合法的输入；
  - 构成人体轨迹单张图片大小不得超过2M，分辨率不得超过1920*1080。
       * @public
       */
    CreatePerson(req: CreatePersonRequest, cb?: (error: string, rep: CreatePersonResponse) => void): Promise<CreatePersonResponse>;
    /**
     * 在前后景分割的基础上优化多分类分割，支持对头发、五官等的分割，既作为换发型、挂件等底层技术，也可用于扣人头、扣人脸等玩法
     * @public
     */
    SegmentCustomizedPortraitPic(req: SegmentCustomizedPortraitPicRequest, cb?: (error: string, rep: SegmentCustomizedPortraitPicResponse) => void): Promise<SegmentCustomizedPortraitPicResponse>;
    /**
     * 获取指定人体库中的人员列表。
     * @public
     */
    GetPersonList(req: GetPersonListRequest, cb?: (error: string, rep: GetPersonListResponse) => void): Promise<GetPersonListResponse>;
}
