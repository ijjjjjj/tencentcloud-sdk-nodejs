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
 * 账号风险检测结果
 */
export interface RiskDetails {
  /**
   * 风险类别，RiskAccount，RiskIP, RiskIMEI
   */
  Label: string

  /**
   * 风险等级，1:疑似，2：恶意
   */
  Level: number
}

/**
 * TextModeration请求参数结构体
 */
export interface TextModerationRequest {
  /**
   * 文本内容Base64编码。原文长度需小于15000字节，即5000个汉字以内。
   */
  Content: string

  /**
   * 数据ID，英文字母、下划线、-组成，不超过64个字符
   */
  DataId?: string

  /**
   * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略。 -- 该字段暂未开放。
   */
  BizType?: string

  /**
   * 用户相关信息
   */
  User?: User

  /**
   * 设备相关信息
   */
  Device?: Device
}

/**
 * 文本返回的详细结果
 */
export interface DetailResults {
  /**
   * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
   */
  Label: string

  /**
      * 建议值,Block：打击,Review：待复审,Normal：正常
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
      * 该标签下命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keywords: Array<string>

  /**
      * 该标签模型命中的分值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number

  /**
      * 仅当Lable为Custom自定义关键词时有效，表示自定义关键词库类型，1:黑白库，2：自定义库
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibType: number

  /**
      * 仅当Lable为Custom自定义关键词时有效，表示自定义库id
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibId: string

  /**
      * 仅当Lable为Custom自定义关键词时有效，表示自定义库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibName: string
}

/**
 * 用户相关信息
 */
export interface User {
  /**
   * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
   */
  UserId?: string

  /**
   * 用户昵称
   */
  Nickname?: string

  /**
   * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
   */
  AccountType?: number

  /**
   * 性别 默认0 未知 1 男性 2 女性
   */
  Gender?: number

  /**
   * 年龄 默认0 未知
   */
  Age?: number

  /**
   * 用户等级，默认0 未知 1 低 2 中 3 高
   */
  Level?: number

  /**
   * 手机号
   */
  Phone?: string
}

/**
 * 设备信息
 */
export interface Device {
  /**
   * 用户IP
   */
  IP?: string

  /**
   * Mac地址
   */
  Mac?: string

  /**
   * 设备指纹Token
   */
  TokenId?: string

  /**
   * 设备指纹ID
   */
  DeviceId?: string

  /**
   * 设备序列号
   */
  IMEI?: string

  /**
   * IOS设备，Identifier For Advertising（广告标识符）
   */
  IDFA?: string

  /**
   * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
   */
  IDFV?: string
}

/**
 * TextModeration返回参数结构体
 */
export interface TextModerationResponse {
  /**
   * 最终使用的BizType
   */
  BizType?: string

  /**
   * 是否恶意 0：正常 1：可疑
   */
  EvilFlag?: number

  /**
   * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
   */
  Label?: string

  /**
   * 建议值,Block：打击,Review：待复审,Normal：正常
   */
  Suggestion?: string

  /**
      * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keywords?: Array<string>

  /**
   * 命中的模型分值
   */
  Score?: number

  /**
      * 返回的详细结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailResults?: Array<DetailResults>

  /**
      * 账号风险检测结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskDetails?: Array<RiskDetails>

  /**
      * 预留字段，不同客户返回结果不同
注意：此字段可能返回 null，表示取不到有效值。
      */
  Extra?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
