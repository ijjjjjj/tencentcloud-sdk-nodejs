import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { SwapGenderPicRequest, SwapGenderPicResponse, ChangeAgePicResponse, ChangeAgePicRequest } from "./ft_models";
/**
 * ft client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸性别转换的图片。男变女可实现美颜、淡妆、加刘海和长发的效果；女变男可实现加胡须、变短发的效果。
     * @public
     */
    SwapGenderPic(req: SwapGenderPicRequest, cb?: (error: string, rep: SwapGenderPicResponse) => void): Promise<SwapGenderPicResponse>;
    /**
     * 用户上传一张人脸图片，基于人脸编辑与生成算法，输出一张人脸变老或变年轻的图片，支持实现人脸不同年龄的变化。
     * @public
     */
    ChangeAgePic(req: ChangeAgePicRequest, cb?: (error: string, rep: ChangeAgePicResponse) => void): Promise<ChangeAgePicResponse>;
}
