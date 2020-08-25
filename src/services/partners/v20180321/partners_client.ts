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
   AgentClientElem,
   DescribeAgentDealsCacheRequest,
   DescribeSalesmansRequest,
   DescribeAgentAuditedClientsRequest,
   RemovePayRelationForClientRequest,
   AgentPayDealsRequest,
   DescribeAgentClientGradeResponse,
   RebateInfoElem,
   DescribeClientBalanceResponse,
   AgentTransferMoneyRequest,
   DescribeClientBalanceRequest,
   RemovePayRelationForClientResponse,
   DescribeRebateInfosRequest,
   CreatePayRelationForClientResponse,
   DescribeAgentAuditedClientsResponse,
   DescribeAgentBillsResponse,
   DescribeAgentPayDealsRequest,
   AuditApplyClientRequest,
   ModifyClientRemarkResponse,
   DescribeAgentClientsResponse,
   DescribeAgentClientsRequest,
   DescribeSalesmansResponse,
   AgentAuditedClient,
   DescribeAgentPayDealsResponse,
   DealGoodsPriceElem,
   ModifyClientRemarkRequest,
   CreatePayRelationForClientRequest,
   AgentTransferMoneyResponse,
   AgentBillElem,
   AuditApplyClientResponse,
   DescribeAgentDealsCacheResponse,
   DescribeAgentBillsRequest,
   AgentPayDealsResponse,
   AgentDealElem,
   AgentSalesmanElem,
   DescribeRebateInfosResponse,
   DescribeAgentClientGradeRequest,

} from "./partners_models"

/**
 * partners client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("partners.tencentcloudapi.com", "2018-03-21", clientConfig);
    }
    
    /**
     * 供超大型代理商（代客数量>=3000 ）拉取缓存的全量客户订单。
     * @public
     */
    async DescribeAgentDealsCache(req: DescribeAgentDealsCacheRequest, cb?: (error: string, rep: DescribeAgentDealsCacheResponse) => void): Promise<DescribeAgentDealsCacheResponse> {
        return await this.request("DescribeAgentDealsCache", req, cb);
    }

    /**
     * 代理商支付订单接口，支持自付/代付
     * @public
     */
    async AgentPayDeals(req: AgentPayDealsRequest, cb?: (error: string, rep: AgentPayDealsResponse) => void): Promise<AgentPayDealsResponse> {
        return await this.request("AgentPayDeals", req, cb);
    }

    /**
     * 代理商可查询自己及名下代客所有业务明细
     * @public
     */
    async DescribeAgentBills(req: DescribeAgentBillsRequest, cb?: (error: string, rep: DescribeAgentBillsResponse) => void): Promise<DescribeAgentBillsResponse> {
        return await this.request("DescribeAgentBills", req, cb);
    }

    /**
     * 为合作伙伴提供转账给客户能力。仅支持合作伙伴为自己名下客户转账。
     * @public
     */
    async AgentTransferMoney(req: AgentTransferMoneyRequest, cb?: (error: string, rep: AgentTransferMoneyResponse) => void): Promise<AgentTransferMoneyResponse> {
        return await this.request("AgentTransferMoney", req, cb);
    }

    /**
     * 代理商可查询自己名下全部返佣信息
     * @public
     */
    async DescribeRebateInfos(req: DescribeRebateInfosRequest, cb?: (error: string, rep: DescribeRebateInfosResponse) => void): Promise<DescribeRebateInfosResponse> {
        return await this.request("DescribeRebateInfos", req, cb);
    }

    /**
     * 代理商查询名下业务员列表信息
     * @public
     */
    async DescribeSalesmans(req: DescribeSalesmansRequest, cb?: (error: string, rep: DescribeSalesmansResponse) => void): Promise<DescribeSalesmansResponse> {
        return await this.request("DescribeSalesmans", req, cb);
    }

    /**
     * 合作伙伴为客户消除强代付关系
     * @public
     */
    async RemovePayRelationForClient(req: RemovePayRelationForClientRequest, cb?: (error: string, rep: RemovePayRelationForClientResponse) => void): Promise<RemovePayRelationForClientResponse> {
        return await this.request("RemovePayRelationForClient", req, cb);
    }

    /**
     * 代理商可以对名下客户添加备注、修改备注
     * @public
     */
    async ModifyClientRemark(req: ModifyClientRemarkRequest, cb?: (error: string, rep: ModifyClientRemarkResponse) => void): Promise<ModifyClientRemarkResponse> {
        return await this.request("ModifyClientRemark", req, cb);
    }

    /**
     * 可以查询代理商代付的所有订单
     * @public
     */
    async DescribeAgentPayDeals(req: DescribeAgentPayDealsRequest, cb?: (error: string, rep: DescribeAgentPayDealsResponse) => void): Promise<DescribeAgentPayDealsResponse> {
        return await this.request("DescribeAgentPayDeals", req, cb);
    }

    /**
     * 代理商可查询自己名下待审核客户列表
     * @public
     */
    async DescribeAgentClients(req: DescribeAgentClientsRequest, cb?: (error: string, rep: DescribeAgentClientsResponse) => void): Promise<DescribeAgentClientsResponse> {
        return await this.request("DescribeAgentClients", req, cb);
    }

    /**
     * 为合作伙伴提供查询客户余额能力。调用者必须是合作伙伴，只能查询自己名下客户余额
     * @public
     */
    async DescribeClientBalance(req: DescribeClientBalanceRequest, cb?: (error: string, rep: DescribeClientBalanceResponse) => void): Promise<DescribeClientBalanceResponse> {
        return await this.request("DescribeClientBalance", req, cb);
    }

    /**
     * 传入代客uin，查客户级别，客户审核状态，客户实名认证状态
     * @public
     */
    async DescribeAgentClientGrade(req: DescribeAgentClientGradeRequest, cb?: (error: string, rep: DescribeAgentClientGradeResponse) => void): Promise<DescribeAgentClientGradeResponse> {
        return await this.request("DescribeAgentClientGrade", req, cb);
    }

    /**
     * 查询已审核客户列表
     * @public
     */
    async DescribeAgentAuditedClients(req: DescribeAgentAuditedClientsRequest, cb?: (error: string, rep: DescribeAgentAuditedClientsResponse) => void): Promise<DescribeAgentAuditedClientsResponse> {
        return await this.request("DescribeAgentAuditedClients", req, cb);
    }

    /**
     * 合作伙伴为客户创建强代付关系
     * @public
     */
    async CreatePayRelationForClient(req: CreatePayRelationForClientRequest, cb?: (error: string, rep: CreatePayRelationForClientResponse) => void): Promise<CreatePayRelationForClientResponse> {
        return await this.request("CreatePayRelationForClient", req, cb);
    }

    /**
     * 代理商可以审核其名下申请中代客
     * @public
     */
    async AuditApplyClient(req: AuditApplyClientRequest, cb?: (error: string, rep: AuditApplyClientResponse) => void): Promise<AuditApplyClientResponse> {
        return await this.request("AuditApplyClient", req, cb);
    }


}
