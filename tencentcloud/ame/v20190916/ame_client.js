"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const models_1 = require("./models");
const abstract_client_1 = require("../../common/abstract_client");
const Album = models_1.Models.Album;
const DescribeMusicResponse = models_1.Models.DescribeMusicResponse;
const ImagePath = models_1.Models.ImagePath;
const DataInfo = models_1.Models.DataInfo;
const DescribeItemsResponse = models_1.Models.DescribeItemsResponse;
const Music = models_1.Models.Music;
const Artist = models_1.Models.Artist;
const DescribeLyricResponse = models_1.Models.DescribeLyricResponse;
const DescribeItemByIdResponse = models_1.Models.DescribeItemByIdResponse;
const ReportDataResponse = models_1.Models.ReportDataResponse;
const DescribeItemsRequest = models_1.Models.DescribeItemsRequest;
const DescribeStationsRequest = models_1.Models.DescribeStationsRequest;
const Item = models_1.Models.Item;
const Station = models_1.Models.Station;
const Lyric = models_1.Models.Lyric;
const DescribeLyricRequest = models_1.Models.DescribeLyricRequest;
const DescribeStationsResponse = models_1.Models.DescribeStationsResponse;
const ReportDataRequest = models_1.Models.ReportDataRequest;
const DescribeItemByIdRequest = models_1.Models.DescribeItemByIdRequest;
const DescribeMusicRequest = models_1.Models.DescribeMusicRequest;
/**
 * ame client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(credential, region, profile) {
        super("ame.tencentcloudapi.com", "2019-09-16", credential, region, profile);
    }
    /**
     * 根据歌曲ID查询歌曲信息
     * @param {DescribeItemByIdRequest} req
     * @param {function(string, DescribeItemByIdResponse):void} cb
     * @public
     */
    DescribeItemById(req, cb) {
        const resp = new DescribeItemByIdResponse();
        this.request("DescribeItemById", req, resp, cb);
    }
    /**
     * 客户上报用户数据功能，为了更好的为用户提供优质服务
     * @param {ReportDataRequest} req
     * @param {function(string, ReportDataResponse):void} cb
     * @public
     */
    ReportData(req, cb) {
        const resp = new ReportDataResponse();
        this.request("ReportData", req, resp, cb);
    }
    /**
     * 根据接口的模式及歌曲ID来取得歌词信息。
     * @param {DescribeLyricRequest} req
     * @param {function(string, DescribeLyricResponse):void} cb
     * @public
     */
    DescribeLyric(req, cb) {
        const resp = new DescribeLyricResponse();
        this.request("DescribeLyric", req, resp, cb);
    }
    /**
     * 分类内容下歌曲列表获取，根据CategoryID或CategoryCode
     * @param {DescribeItemsRequest} req
     * @param {function(string, DescribeItemsResponse):void} cb
     * @public
     */
    DescribeItems(req, cb) {
        const resp = new DescribeItemsResponse();
        this.request("DescribeItems", req, resp, cb);
    }
    /**
     * 根据接口的模式及歌曲ID来取得对应权限的歌曲播放地址等信息。
     * @param {DescribeMusicRequest} req
     * @param {function(string, DescribeMusicResponse):void} cb
     * @public
     */
    DescribeMusic(req, cb) {
        const resp = new DescribeMusicResponse();
        this.request("DescribeMusic", req, resp, cb);
    }
    /**
     * 获取素材库列表时使用
     * @param {DescribeStationsRequest} req
     * @param {function(string, DescribeStationsResponse):void} cb
     * @public
     */
    DescribeStations(req, cb) {
        const resp = new DescribeStationsResponse();
        this.request("DescribeStations", req, resp, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=ame_client.js.map