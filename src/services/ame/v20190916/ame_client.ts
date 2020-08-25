/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient, ClientConfig } from "../../../common/abstract_client"
import {
   Album,
   DescribeMusicResponse,
   ImagePath,
   DataInfo,
   DescribeItemsResponse,
   Music,
   Artist,
   DescribeLyricResponse,
   DescribeItemByIdResponse,
   ReportDataResponse,
   DescribeItemsRequest,
   DescribeStationsRequest,
   Item,
   Station,
   Lyric,
   DescribeLyricRequest,
   DescribeStationsResponse,
   ReportDataRequest,
   DescribeItemByIdRequest,
   DescribeMusicRequest,

} from "./ame_models"

/**
 * ame client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("ame.tencentcloudapi.com", "2019-09-16", clientConfig);
    }
    
    /**
     * 根据歌曲ID查询歌曲信息
     * @public
     */
    async DescribeItemById(req: DescribeItemByIdRequest, cb?: (error: string, rep: DescribeItemByIdResponse) => void): Promise<DescribeItemByIdResponse> {
        return await this.request("DescribeItemById", req, cb);
    }

    /**
     * 客户上报用户数据功能，为了更好的为用户提供优质服务
     * @public
     */
    async ReportData(req: ReportDataRequest, cb?: (error: string, rep: ReportDataResponse) => void): Promise<ReportDataResponse> {
        return await this.request("ReportData", req, cb);
    }

    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
     * @public
     */
    async DescribeLyric(req: DescribeLyricRequest, cb?: (error: string, rep: DescribeLyricResponse) => void): Promise<DescribeLyricResponse> {
        return await this.request("DescribeLyric", req, cb);
    }

    /**
     * 分类内容下歌曲列表获取，根据CategoryID或CategoryCode
     * @public
     */
    async DescribeItems(req: DescribeItemsRequest, cb?: (error: string, rep: DescribeItemsResponse) => void): Promise<DescribeItemsResponse> {
        return await this.request("DescribeItems", req, cb);
    }

    /**
     * 根据接口的模式及歌曲ID来取得对应权限的歌曲播放地址等信息。
     * @public
     */
    async DescribeMusic(req: DescribeMusicRequest, cb?: (error: string, rep: DescribeMusicResponse) => void): Promise<DescribeMusicResponse> {
        return await this.request("DescribeMusic", req, cb);
    }

    /**
     * 获取素材库列表时使用
     * @public
     */
    async DescribeStations(req: DescribeStationsRequest, cb?: (error: string, rep: DescribeStationsResponse) => void): Promise<DescribeStationsResponse> {
        return await this.request("DescribeStations", req, cb);
    }


}
