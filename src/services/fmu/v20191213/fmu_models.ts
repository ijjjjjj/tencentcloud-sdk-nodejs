/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * DeleteModel请求参数结构体
 */
export interface DeleteModelRequest {
  /**
   * 素材ID。
   */
  ModelId: string
}

/**
 * TryLipstickPic请求参数结构体
 */
export interface TryLipstickPicRequest {
  /**
      * 唇色信息。 
您可以输入最多3个 LipColorInfo 来实现给一张图中的最多3张人脸试唇色。
      */
  LipColorInfos: Array<LipColorInfo>

  /**
      * 图片 base64 数据，base64 编码后大小不可超过6M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
  Image?: string

  /**
      * 图片的 Url ，对应图片 base64 编码后大小不可超过6M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
  Url?: string

  /**
   * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
   */
  RspImgType?: string
}

/**
 * GetModelList请求参数结构体
 */
export interface GetModelListRequest {
  /**
   * 起始序号，默认值为0。
   */
  Offset?: number

  /**
   * 返回数量，默认值为10，最大值为100。
   */
  Limit?: number
}

/**
 * TryLipstickPic返回参数结构体
 */
export interface TryLipstickPicResponse {
  /**
   * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
   */
  ResultImage?: string

  /**
   * RspImgType 为 url 时，返回处理后的图片 url 数据。
   */
  ResultUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 唇色信息
 */
export interface LipColorInfo {
  /**
   * 使用RGBA模型试唇色。
   */
  RGBA?: RGBAInfo

  /**
      * 使用已注册的 LUT 文件试唇色。  
ModelId 和 RGBA 两个参数只需提供一个，若都提供只使用 ModelId。
      */
  ModelId?: string

  /**
      * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
      */
  FaceRect?: FaceRect

  /**
   * 涂妆浓淡[0,100]。建议取值50。本参数仅控制ModelId对应的涂妆浓淡。
   */
  ModelAlpha?: number
}

/**
 * CreateModel请求参数结构体
 */
export interface CreateModelRequest {
  /**
   * 用于试唇色，要求必须是LUT 格式的cube文件转换成512*512的PNG图片。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。了解 [cube文件转png图片小工具](http://yyb.gtimg.com/aiplat/static/qcloud-cube-to-png.html)。
   */
  LUTFile: string

  /**
   * 文件描述信息，可用于备注。
   */
  Description?: string
}

/**
 * RGBA通道信息
 */
export interface RGBAInfo {
  /**
   * R通道数值。[0,255]。
   */
  R: number

  /**
   * G通道数值。[0,255]。
   */
  G: number

  /**
   * B通道数值。[0,255]。
   */
  B: number

  /**
   * A通道数值。[0,100]。建议取值50。
   */
  A: number
}

/**
 * GetModelList返回参数结构体
 */
export interface GetModelListResponse {
  /**
   * 唇色素材总数量。
   */
  ModelIdNum?: number

  /**
      * 素材数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModelInfos?: Array<ModelInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LUT素材信息
 */
export interface ModelInfo {
  /**
   * 唇色素材ID
   */
  ModelId: string

  /**
   * 唇色素材 url 。 LUT 文件 url 5分钟有效。
   */
  LUTFileUrl: string

  /**
   * 文件描述信息。
   */
  Description: string
}

/**
 * 人脸框信息
 */
export interface FaceRect {
  /**
   * 人脸框左上角横坐标。
   */
  X: number

  /**
   * 人脸框左上角纵坐标。
   */
  Y: number

  /**
   * 人脸框宽度。
   */
  Width: number

  /**
   * 人脸框高度。
   */
  Height: number
}

/**
 * BeautifyPic请求参数结构体
 */
export interface BeautifyPicRequest {
  /**
      * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
  Image?: string

  /**
      * 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 
Url、Image必须提供一个，如果都提供，只使用 Url。  
图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。  
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
  Url?: string

  /**
   * 美白程度，取值范围[0,100]。0不美白，100代表最高程度。默认值30。
   */
  Whitening?: number

  /**
   * 磨皮程度，取值范围[0,100]。0不磨皮，100代表最高程度。默认值10。
   */
  Smoothing?: number

  /**
   * 瘦脸程度，取值范围[0,100]。0不瘦脸，100代表最高程度。默认值70。
   */
  FaceLifting?: number

  /**
   * 大眼程度，取值范围[0,100]。0不大眼，100代表最高程度。默认值70。
   */
  EyeEnlarging?: number

  /**
   * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
   */
  RspImgType?: string
}

/**
 * CreateModel返回参数结构体
 */
export interface CreateModelResponse {
  /**
   * 唇色素材ID。
   */
  ModelId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteModel返回参数结构体
 */
export interface DeleteModelResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BeautifyPic返回参数结构体
 */
export interface BeautifyPicResponse {
  /**
   * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
   */
  ResultImage?: string

  /**
   * RspImgType 为 url 时，返回处理后的图片 url 数据。
   */
  ResultUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
