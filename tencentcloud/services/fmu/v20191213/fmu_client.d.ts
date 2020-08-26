import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DeleteModelRequest, TryLipstickPicRequest, GetModelListRequest, TryLipstickPicResponse, CreateModelRequest, GetModelListResponse, BeautifyPicRequest, CreateModelResponse, DeleteModelResponse, BeautifyPicResponse } from "./fmu_models";
/**
 * fmu client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
       * 在使用LUT素材的modelid实现试唇色前，您需要先上传 LUT 格式的cube文件注册唇色ID。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。
  
  注：您也可以直接使用 [试唇色接口](https://cloud.tencent.com/document/product/1172/40706)，通过输入RGBA模型数值的方式指定唇色，更简单易用。
  
       * @public
       */
    CreateModel(req: CreateModelRequest, cb?: (error: string, rep: CreateModelResponse) => void): Promise<CreateModelResponse>;
    /**
     * 查询已注册的唇色素材。
     * @public
     */
    GetModelList(req: GetModelListRequest, cb?: (error: string, rep: GetModelListResponse) => void): Promise<GetModelListResponse>;
    /**
     * 删除已注册的唇色素材。
     * @public
     */
    DeleteModel(req: DeleteModelRequest, cb?: (error: string, rep: DeleteModelResponse) => void): Promise<DeleteModelResponse>;
    /**
       * 对图片中的人脸嘴唇进行着色，最多支持同时对一张图中的3张人脸进行试唇色。
  
  您可以通过事先注册在腾讯云的唇色素材（LUT文件）改变图片中的人脸唇色，也可以输入RGBA模型数值。
  
  为了更好的效果，建议您使用事先注册在腾讯云的唇色素材（LUT文件）。
  
  >
  - 公共参数中的签名方式请使用V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
       * @public
       */
    TryLipstickPic(req: TryLipstickPicRequest, cb?: (error: string, rep: TryLipstickPicResponse) => void): Promise<TryLipstickPicResponse>;
    /**
     * 用户上传一张人脸图片，精准定位五官，实现美肤、亮肤、祛痘等美颜功能。
     * @public
     */
    BeautifyPic(req: BeautifyPicRequest, cb?: (error: string, rep: BeautifyPicResponse) => void): Promise<BeautifyPicResponse>;
}
