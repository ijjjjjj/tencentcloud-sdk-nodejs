"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * ecdn client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ecdn.tencentcloudapi.com", "2019-10-12", clientConfig);
    }
    /**
     * 本接口（AddEcdnDomain）用于创建加速域名。
     * @public
     */
    async AddEcdnDomain(req, cb) {
        return this.request("AddEcdnDomain", req, cb);
    }
    /**
     * PurgePathCache 用于批量刷新目录缓存，一次提交将返回一个刷新任务id。
     * @public
     */
    async PurgePathCache(req, cb) {
        return this.request("PurgePathCache", req, cb);
    }
    /**
     * 本接口（StartEcdnDomain）用于启用加速域名，待启用域名必须处于已下线状态。
     * @public
     */
    async StartEcdnDomain(req, cb) {
        return this.request("StartEcdnDomain", req, cb);
    }
    /**
       * 本接口（UpdateDomainConfig）用于更新ECDN加速域名配置信息。
  注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值。建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
       * @public
       */
    async UpdateDomainConfig(req, cb) {
        return this.request("UpdateDomainConfig", req, cb);
    }
    /**
     * DescribePurgeTasks 用于查询刷新任务提交历史记录及执行进度。
     * @public
     */
    async DescribePurgeTasks(req, cb) {
        return this.request("DescribePurgeTasks", req, cb);
    }
    /**
     * 本接口（DescribeEcdnDomainLogs）用于查询域名的访问日志下载地址。
     * @public
     */
    async DescribeEcdnDomainLogs(req, cb) {
        return this.request("DescribeEcdnDomainLogs", req, cb);
    }
    /**
     * 本接口（DescribeDomainsConfig）用于查询CDN加速域名详细配置信息。
     * @public
     */
    async DescribeDomainsConfig(req, cb) {
        return this.request("DescribeDomainsConfig", req, cb);
    }
    /**
     * 查询刷新接口的用量配额。
     * @public
     */
    async DescribePurgeQuota(req, cb) {
        return this.request("DescribePurgeQuota", req, cb);
    }
    /**
     * PurgeUrlsCache 用于批量刷新Url，一次提交将返回一个刷新任务id。
     * @public
     */
    async PurgeUrlsCache(req, cb) {
        return this.request("PurgeUrlsCache", req, cb);
    }
    /**
     * 本接口（StopCdnDomain）用于停止加速域名，待停用加速域名必须处于已上线或部署中状态。
     * @public
     */
    async StopEcdnDomain(req, cb) {
        return this.request("StopEcdnDomain", req, cb);
    }
    /**
     * 本接口（DeleteEcdnDomain）用于删除指定加速域名。待删除域名必须处于已停用状态。
     * @public
     */
    async DeleteEcdnDomain(req, cb) {
        return this.request("DeleteEcdnDomain", req, cb);
    }
    /**
     * 本接口（DescribeDomains）用于查询CDN域名基本信息，包括项目id，状态，业务类型，创建时间，更新时间等。
     * @public
     */
    async DescribeDomains(req, cb) {
        return this.request("DescribeDomains", req, cb);
    }
    /**
       * DescribeEcdnStatistics用于查询 ECDN 实时访问监控数据，支持以下指标查询：
  
  + 流量（单位为 byte）
  + 带宽（单位为 bps）
  + 请求数（单位为 次）
  + 响应时间（单位为ms）
  + 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
  + 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
  + 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
  + 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
       * @public
       */
    async DescribeEcdnStatistics(req, cb) {
        return this.request("DescribeEcdnStatistics", req, cb);
    }
    /**
     * 本接口（DescribeEcdnDomainStatistics）用于查询指定时间段内的域名访问统计指标
     * @public
     */
    async DescribeEcdnDomainStatistics(req, cb) {
        return this.request("DescribeEcdnDomainStatistics", req, cb);
    }
}
exports.Client = Client;