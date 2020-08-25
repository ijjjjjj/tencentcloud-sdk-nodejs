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
 * SwapGenderPic请求参数结构体
 */
export interface SwapGenderPicRequest {

    /**
      * 人脸转化性别信息。 
您可以输入最多3个 GenderInfo 来实现给一张图中的最多3张人脸转换性别。
      */
    GenderInfos: Array<GenderInfo>;
        
    /**
      * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
    Image?: string;
        
    /**
      * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
    Url?: string;
        
    /**
      * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
      */
    RspImgType?: string;
}

/**
 * 人脸变年龄信息
 */
export interface AgeInfo {

    /**
      * 变化到的人脸年龄 [10,80]。
      */
    Age: number;
        
    /**
      * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
      */
    FaceRect?: FaceRect;
}

/**
 * 人脸转换性别信息
 */
export interface GenderInfo {

    /**
      * 选择转换方向，0：男变女，1：女变男。
      */
    Gender: number;
        
    /**
      * 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。  
您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800)  接口获取人脸框位置信息。
      */
    FaceRect?: FaceRect;
}

/**
 * SwapGenderPic返回参数结构体
 */
export interface SwapGenderPicResponse {

    /**
      * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
      */
    ResultImage?: string;
        
    /**
      * RspImgType 为 url 时，返回处理后的图片 url 数据。
      */
    ResultUrl?: string;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * ChangeAgePic返回参数结构体
 */
export interface ChangeAgePicResponse {

    /**
      * RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64
      */
    ResultImage?: string;
        
    /**
      * RspImgType 为 url 时，返回处理后的图片 url 数据。
      */
    ResultUrl?: string;
        
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}

/**
 * 人脸框位置
 */
export interface FaceRect {

    /**
      * 人脸框左上角横坐标。
      */
    X: number;
        
    /**
      * 人脸框左上角纵坐标。
      */
    Y: number;
        
    /**
      * 人脸框宽度。
      */
    Width: number;
        
    /**
      * 人脸框高度。
      */
    Height: number;
}

/**
 * ChangeAgePic请求参数结构体
 */
export interface ChangeAgePicRequest {

    /**
      * 人脸变老变年轻信息。 
您可以输入最多3个 AgeInfo 来实现给一张图中的最多3张人脸变老变年轻。
      */
    AgeInfos: Array<AgeInfo>;
        
    /**
      * 图片 base64 数据，base64 编码后大小不可超过5M。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
    Image?: string;
        
    /**
      * 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 
图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 
图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 
非腾讯云存储的Url速度和稳定性可能受一定影响。 
支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。
      */
    Url?: string;
        
    /**
      * 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。
      */
    RspImgType?: string;
}

