import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { VideoModerationResponse, ImageModerationResponse, ImageModerationRequest, VideoModerationRequest, DescribeVideoTaskRequest, DescribeVideoTaskResponse } from "./ticm_models";
/**
 * ticm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口提供多种维度的图像审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
     * @public
     */
    ImageModeration(req: ImageModerationRequest, cb?: (error: string, rep: ImageModerationResponse) => void): Promise<ImageModerationResponse>;
    /**
     * 本接口提供多种维度的视频审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
     * @public
     */
    VideoModeration(req: VideoModerationRequest, cb?: (error: string, rep: VideoModerationResponse) => void): Promise<VideoModerationResponse>;
    /**
     * 提交完视频审核任务后，可以通过本接口来获取当前处理的进度和结果
     * @public
     */
    DescribeVideoTask(req: DescribeVideoTaskRequest, cb?: (error: string, rep: DescribeVideoTaskResponse) => void): Promise<DescribeVideoTaskResponse>;
}