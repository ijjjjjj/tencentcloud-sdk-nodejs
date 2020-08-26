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
 * taf client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("taf.tencentcloudapi.com", "2020-02-10", clientConfig);
    }
    /**
     * 流量反欺诈-虚假TA识别
     * @public
     */
    async EnhanceTaDegree(req, cb) {
        return this.request("EnhanceTaDegree", req, cb);
    }
    /**
     * 流量反欺诈-流量验准
     * @public
     */
    async RecognizeTargetAudience(req, cb) {
        return this.request("RecognizeTargetAudience", req, cb);
    }
    /**
     * 流量反欺诈-流量验准定制版
     * @public
     */
    async RecognizeCustomizedAudience(req, cb) {
        return this.request("RecognizeCustomizedAudience", req, cb);
    }
    /**
     * DetectFraudKOL
     * @public
     */
    async DetectFraudKOL(req, cb) {
        return this.request("DetectFraudKOL", req, cb);
    }
    /**
     * 流量反欺诈-流量验准高级版
     * @public
     */
    async RecognizePreciseTargetAudience(req, cb) {
        return this.request("RecognizePreciseTargetAudience", req, cb);
    }
    /**
     * SendTrafficSecuritySmsMessage
     * @public
     */
    async SendTrafficSecuritySmsMessage(req, cb) {
        return this.request("SendTrafficSecuritySmsMessage", req, cb);
    }
}
exports.Client = Client;
//# sourceMappingURL=taf_client.js.map