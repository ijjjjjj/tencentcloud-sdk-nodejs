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
 * 描述预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。
 * @class
 */
export class ChargePrepaid {

    /**
      * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
      */
    Period: number;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;

    constructor(params: {

    /**
      * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。
      */
    Period: number;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;

    }){

        this.Period = params && params.Period || null;

        this.RenewFlag = params && params.RenewFlag || null;

    }
}

/**
 * 本地磁盘规格
 * @class
 */
export class LocalDiskType {

    /**
      * 本地磁盘类型。
      */
    Type: string;

    /**
      * 本地磁盘属性。
      */
    PartitionType: string;

    /**
      * 本地磁盘最小值。
      */
    MinSize: number;

    /**
      * 本地磁盘最大值。
      */
    MaxSize: number;

    /**
      * 购买时本地盘是否为必选。取值范围：<br><li>REQUIRED：表示必选<br><li>OPTIONAL：表示可选。
      */
    Required: string;

    constructor(params: {

    /**
      * 本地磁盘类型。
      */
    Type: string;

    /**
      * 本地磁盘属性。
      */
    PartitionType: string;

    /**
      * 本地磁盘最小值。
      */
    MinSize: number;

    /**
      * 本地磁盘最大值。
      */
    MaxSize: number;

    /**
      * 购买时本地盘是否为必选。取值范围：<br><li>REQUIRED：表示必选<br><li>OPTIONAL：表示可选。
      */
    Required: string;

    }){

        this.Type = params && params.Type || null;

        this.PartitionType = params && params.PartitionType || null;

        this.MinSize = params && params.MinSize || null;

        this.MaxSize = params && params.MaxSize || null;

        this.Required = params && params.Required || null;

    }
}

/**
 * AssociateInstancesKeyPairs返回参数结构体
 * @class
 */
export class AssociateInstancesKeyPairsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * RenewInstances请求参数结构体
 * @class
 */
export class RenewInstancesRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    /**
      * 是否续费弹性数据盘。取值范围：<br><li>TRUE：表示续费包年包月实例同时续费其挂载的弹性数据盘<br><li>FALSE：表示续费包年包月实例同时不再续费其挂载的弹性数据盘<br><br>默认取值：TRUE。
      */
    RenewPortableDataDisk?: boolean;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    /**
      * 是否续费弹性数据盘。取值范围：<br><li>TRUE：表示续费包年包月实例同时续费其挂载的弹性数据盘<br><li>FALSE：表示续费包年包月实例同时不再续费其挂载的弹性数据盘<br><br>默认取值：TRUE。
      */
    RenewPortableDataDisk?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;

        this.RenewPortableDataDisk = params && params.RenewPortableDataDisk || null;

    }
}

/**
 * DescribeImageQuota返回参数结构体
 * @class
 */
export class DescribeImageQuotaResponse {

    /**
      * 账户的镜像配额
      */
    ImageNumQuota?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 账户的镜像配额
      */
    ImageNumQuota?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.ImageNumQuota = params && params.ImageNumQuota || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesProject请求参数结构体
 * @class
 */
export class ModifyInstancesProjectRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/doc/api/403/4398)接口创建。可通过[`DescribeProject`](https://cloud.tencent.com/document/product/378/4400) API返回值中的`projectId`获取。后续使用[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口查询实例时，项目ID可用于过滤结果。
      */
    ProjectId: number;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/doc/api/403/4398)接口创建。可通过[`DescribeProject`](https://cloud.tencent.com/document/product/378/4400) API返回值中的`projectId`获取。后续使用[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口查询实例时，项目ID可用于过滤结果。
      */
    ProjectId: number;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.ProjectId = params && params.ProjectId || null;

    }
}

/**
 * ResetInstancesType返回参数结构体
 * @class
 */
export class ResetInstancesTypeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * cdh实例的资源信息
 * @class
 */
export class HostResource {

    /**
      * cdh实例总cpu核数
      */
    CpuTotal?: number;

    /**
      * cdh实例可用cpu核数
      */
    CpuAvailable?: number;

    /**
      * cdh实例总内存大小（单位为:GiB）
      */
    MemTotal?: number;

    /**
      * cdh实例可用内存大小（单位为:GiB）
      */
    MemAvailable?: number;

    /**
      * cdh实例总磁盘大小（单位为:GiB）
      */
    DiskTotal?: number;

    /**
      * cdh实例可用磁盘大小（单位为:GiB）
      */
    DiskAvailable?: number;

    /**
      * cdh实例磁盘类型
      */
    DiskType: string;

    constructor(params: {

    /**
      * cdh实例总cpu核数
      */
    CpuTotal?: number;

    /**
      * cdh实例可用cpu核数
      */
    CpuAvailable?: number;

    /**
      * cdh实例总内存大小（单位为:GiB）
      */
    MemTotal?: number;

    /**
      * cdh实例可用内存大小（单位为:GiB）
      */
    MemAvailable?: number;

    /**
      * cdh实例总磁盘大小（单位为:GiB）
      */
    DiskTotal?: number;

    /**
      * cdh实例可用磁盘大小（单位为:GiB）
      */
    DiskAvailable?: number;

    /**
      * cdh实例磁盘类型
      */
    DiskType: string;

    }){

        this.CpuTotal = params && params.CpuTotal || null;

        this.CpuAvailable = params && params.CpuAvailable || null;

        this.MemTotal = params && params.MemTotal || null;

        this.MemAvailable = params && params.MemAvailable || null;

        this.DiskTotal = params && params.DiskTotal || null;

        this.DiskAvailable = params && params.DiskAvailable || null;

        this.DiskType = params && params.DiskType || null;

    }
}

/**
 * DeleteDisasterRecoverGroups请求参数结构体
 * @class
 */
export class DeleteDisasterRecoverGroupsRequest {

    /**
      * 分散置放群组ID列表，可通过[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。每次请求允许操作的分散置放群组数量上限是100。
      */
    DisasterRecoverGroupIds: Array<string>;

    constructor(params: {

    /**
      * 分散置放群组ID列表，可通过[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。每次请求允许操作的分散置放群组数量上限是100。
      */
    DisasterRecoverGroupIds: Array<string>;

    }){

        this.DisasterRecoverGroupIds = params && params.DisasterRecoverGroupIds || null;

    }
}

/**
 * DeleteKeyPairs返回参数结构体
 * @class
 */
export class DeleteKeyPairsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * TerminateInstances返回参数结构体
 * @class
 */
export class TerminateInstancesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesChargeType返回参数结构体
 * @class
 */
export class ModifyInstancesChargeTypeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * CreateDisasterRecoverGroup返回参数结构体
 * @class
 */
export class CreateDisasterRecoverGroupResponse {

    /**
      * 分散置放群组ID列表。
      */
    DisasterRecoverGroupId?: string;

    /**
      * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
      */
    Type?: string;

    /**
      * 分散置放群组名称，长度1-60个字符，支持中、英文。
      */
    Name?: string;

    /**
      * 置放群组内可容纳的云服务器数量。
      */
    CvmQuotaTotal?: number;

    /**
      * 置放群组内已有的云服务器数量。
      */
    CurrentNum?: number;

    /**
      * 置放群组创建时间。
      */
    CreateTime?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 分散置放群组ID列表。
      */
    DisasterRecoverGroupId?: string;

    /**
      * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
      */
    Type?: string;

    /**
      * 分散置放群组名称，长度1-60个字符，支持中、英文。
      */
    Name?: string;

    /**
      * 置放群组内可容纳的云服务器数量。
      */
    CvmQuotaTotal?: number;

    /**
      * 置放群组内已有的云服务器数量。
      */
    CurrentNum?: number;

    /**
      * 置放群组创建时间。
      */
    CreateTime?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;

        this.Type = params && params.Type || null;

        this.Name = params && params.Name || null;

        this.CvmQuotaTotal = params && params.CvmQuotaTotal || null;

        this.CurrentNum = params && params.CurrentNum || null;

        this.CreateTime = params && params.CreateTime || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * InquiryPriceResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
export class InquiryPriceResetInstancesInternetMaxBandwidthResponse {

    /**
      * 该参数表示带宽调整为对应大小之后的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示带宽调整为对应大小之后的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyKeyPairAttribute请求参数结构体
 * @class
 */
export class ModifyKeyPairAttributeRequest {

    /**
      * 密钥对ID，密钥对ID形如：`skey-xxxxxxxx`。<br><br>可以通过以下方式获取可用的密钥 ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥 ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/9403) ，取返回信息中的 `KeyId` 获取密钥对 ID。
      */
    KeyId: string;

    /**
      * 修改后的密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName?: string;

    /**
      * 修改后的密钥对描述信息。可任意命名，但不得超过60个字符。
      */
    Description?: string;

    constructor(params: {

    /**
      * 密钥对ID，密钥对ID形如：`skey-xxxxxxxx`。<br><br>可以通过以下方式获取可用的密钥 ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥 ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/9403) ，取返回信息中的 `KeyId` 获取密钥对 ID。
      */
    KeyId: string;

    /**
      * 修改后的密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName?: string;

    /**
      * 修改后的密钥对描述信息。可任意命名，但不得超过60个字符。
      */
    Description?: string;

    }){

        this.KeyId = params && params.KeyId || null;

        this.KeyName = params && params.KeyName || null;

        this.Description = params && params.Description || null;

    }
}

/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
export class AssociateSecurityGroupsRequest {

    /**
      * 要绑定的`安全组ID`，类似sg-efil73jd，只支持绑定单个安全组。
      */
    SecurityGroupIds: Array<string>;

    /**
      * 被绑定的`实例ID`，类似ins-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    constructor(params: {

    /**
      * 要绑定的`安全组ID`，类似sg-efil73jd，只支持绑定单个安全组。
      */
    SecurityGroupIds: Array<string>;

    /**
      * 被绑定的`实例ID`，类似ins-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    }){

        this.SecurityGroupIds = params && params.SecurityGroupIds || null;

        this.InstanceIds = params && params.InstanceIds || null;

    }
}

/**
 * ResetInstancesType请求参数结构体
 * @class
 */
export class ResetInstancesTypeRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。本接口目前仅支持每次操作1个实例。
      */
    InstanceIds: Array<string>;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[`DescribeInstanceTypeConfigs`](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。
      */
    InstanceType: string;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。本接口目前仅支持每次操作1个实例。
      */
    InstanceIds: Array<string>;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[`DescribeInstanceTypeConfigs`](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。
      */
    InstanceType: string;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceType = params && params.InstanceType || null;

        this.ForceStop = params && params.ForceStop || null;

    }
}

/**
 * InquiryPriceResetInstance请求参数结构体
 * @class
 */
export class InquiryPriceResetInstanceRequest {

    /**
      * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 指定有效的[镜像](/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId?: string;

    /**
      * 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定则默认系统盘大小保持不变。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;

    constructor(params: {

    /**
      * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 指定有效的[镜像](/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId?: string;

    /**
      * 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定则默认系统盘大小保持不变。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;

    }){

        this.InstanceId = params && params.InstanceId || null;

        this.ImageId = params && params.ImageId || null;

        this.SystemDisk = params && params.SystemDisk || null;

        this.LoginSettings = params && params.LoginSettings || null;

        this.EnhancedService = params && params.EnhancedService || null;

    }
}

/**
 * RunInstances请求参数结构体
 * @class
 */
export class RunInstancesRequest {

    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。
      */
    Placement: Placement;

    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，传入InstanceType获取当前机型支持的镜像列表，取返回信息中的`ImageId`字段。</li>
      */
    ImageId: string;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>CDHPAID：独享子机（基于专用宿主机创建，宿主机部分的资源不收费）<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
      */
    InstanceChargeType?: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格。
<br><li>对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。<br><li>对于付费模式为CDHPAID的实例创建，该参数以"CDH_"为前缀，根据CPU和内存配置生成，具体形式为：CDH_XCXG，例如对于创建CPU为1核，内存为1G大小的专用宿主机的实例，该参数应该为CDH_1C1G。
      */
    InstanceType?: string;

    /**
      * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，即表示每个实例的主网卡IP；同时，InstanceCount参数必须与私有网络IP的个数一致且不能大于20。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;

    /**
      * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
      */
    InternetAccessible?: InternetAccessible;

    /**
      * 购买实例数量。包年包月实例取值范围：[1，300]，按量计费实例取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。
      */
    InstanceCount?: number;

    /**
      * 实例显示名称。<br><li>不指定实例显示名称则默认显示‘未命名’。</li><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。</li><li>购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。</li><li>最多支持60个字符（包含模式串）。
      */
    InstanceName?: string;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
      */
    SecurityGroupIds?: Array<string>;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务；自定义镜像与镜像市场镜像默认不开启云监控，云安全服务，而使用镜像里保留的服务。
      */
    EnhancedService?: EnhancedService;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;

    /**
      * 云服务器的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;

    /**
      * 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。
      */
    ActionTimer?: ActionTimer;

    /**
      * 置放群组id，仅支持指定一个。
      */
    DisasterRecoverGroupIds?: Array<string>;

    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。
      */
    TagSpecification?: Array<TagSpecification>;

    /**
      * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;

    /**
      * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。
      */
    UserData?: string;

    /**
      * 是否只预检此次请求。
true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId.
false（默认）：发送正常请求，通过检查后直接创建实例
      */
    DryRun?: boolean;

    /**
      * 高性能计算集群ID。若创建的实例为高性能计算实例，需指定实例放置的集群，否则不可指定。
      */
    HpcClusterId?: string;

    constructor(params: {

    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。
      */
    Placement: Placement;

    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，传入InstanceType获取当前机型支持的镜像列表，取返回信息中的`ImageId`字段。</li>
      */
    ImageId: string;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>CDHPAID：独享子机（基于专用宿主机创建，宿主机部分的资源不收费）<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
      */
    InstanceChargeType?: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格。
<br><li>对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。<br><li>对于付费模式为CDHPAID的实例创建，该参数以"CDH_"为前缀，根据CPU和内存配置生成，具体形式为：CDH_XCXG，例如对于创建CPU为1核，内存为1G大小的专用宿主机的实例，该参数应该为CDH_1C1G。
      */
    InstanceType?: string;

    /**
      * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，即表示每个实例的主网卡IP；同时，InstanceCount参数必须与私有网络IP的个数一致且不能大于20。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;

    /**
      * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
      */
    InternetAccessible?: InternetAccessible;

    /**
      * 购买实例数量。包年包月实例取值范围：[1，300]，按量计费实例取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。
      */
    InstanceCount?: number;

    /**
      * 实例显示名称。<br><li>不指定实例显示名称则默认显示‘未命名’。</li><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。</li><li>购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。</li><li>最多支持60个字符（包含模式串）。
      */
    InstanceName?: string;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
      */
    SecurityGroupIds?: Array<string>;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务；自定义镜像与镜像市场镜像默认不开启云监控，云安全服务，而使用镜像里保留的服务。
      */
    EnhancedService?: EnhancedService;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;

    /**
      * 云服务器的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;

    /**
      * 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。
      */
    ActionTimer?: ActionTimer;

    /**
      * 置放群组id，仅支持指定一个。
      */
    DisasterRecoverGroupIds?: Array<string>;

    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。
      */
    TagSpecification?: Array<TagSpecification>;

    /**
      * 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;

    /**
      * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。
      */
    UserData?: string;

    /**
      * 是否只预检此次请求。
true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId.
false（默认）：发送正常请求，通过检查后直接创建实例
      */
    DryRun?: boolean;

    /**
      * 高性能计算集群ID。若创建的实例为高性能计算实例，需指定实例放置的集群，否则不可指定。
      */
    HpcClusterId?: string;

    }){

        this.Placement = params && params.Placement || null;

        this.ImageId = params && params.ImageId || null;

        this.InstanceChargeType = params && params.InstanceChargeType || null;

        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;

        this.InstanceType = params && params.InstanceType || null;

        this.SystemDisk = params && params.SystemDisk || null;

        this.DataDisks = params && params.DataDisks || null;

        this.VirtualPrivateCloud = params && params.VirtualPrivateCloud || null;

        this.InternetAccessible = params && params.InternetAccessible || null;

        this.InstanceCount = params && params.InstanceCount || null;

        this.InstanceName = params && params.InstanceName || null;

        this.LoginSettings = params && params.LoginSettings || null;

        this.SecurityGroupIds = params && params.SecurityGroupIds || null;

        this.EnhancedService = params && params.EnhancedService || null;

        this.ClientToken = params && params.ClientToken || null;

        this.HostName = params && params.HostName || null;

        this.ActionTimer = params && params.ActionTimer || null;

        this.DisasterRecoverGroupIds = params && params.DisasterRecoverGroupIds || null;

        this.TagSpecification = params && params.TagSpecification || null;

        this.InstanceMarketOptions = params && params.InstanceMarketOptions || null;

        this.UserData = params && params.UserData || null;

        this.DryRun = params && params.DryRun || null;

        this.HpcClusterId = params && params.HpcClusterId || null;

    }
}

/**
 * DeleteImages请求参数结构体
 * @class
 */
export class DeleteImagesRequest {

    /**
      * 准备删除的镜像Id列表
      */
    ImageIds: Array<string>;

    constructor(params: {

    /**
      * 准备删除的镜像Id列表
      */
    ImageIds: Array<string>;

    }){

        this.ImageIds = params && params.ImageIds || null;

    }
}

/**
 * DescribeInstances返回参数结构体
 * @class
 */
export class DescribeInstancesResponse {

    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;

    /**
      * 实例详细信息列表。
      */
    InstanceSet?: Array<Instance>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;

    /**
      * 实例详细信息列表。
      */
    InstanceSet?: Array<Instance>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.InstanceSet = params && params.InstanceSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeHosts返回参数结构体
 * @class
 */
export class DescribeHostsResponse {

    /**
      * 符合查询条件的cdh实例总数
      */
    TotalCount?: number;

    /**
      * cdh实例详细信息列表
      */
    HostSet?: Array<HostItem>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 符合查询条件的cdh实例总数
      */
    TotalCount?: number;

    /**
      * cdh实例详细信息列表
      */
    HostSet?: Array<HostItem>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.HostSet = params && params.HostSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DeleteKeyPairs请求参数结构体
 * @class
 */
export class DeleteKeyPairsRequest {

    /**
      * 一个或多个待操作的密钥对ID。每次请求批量密钥对的上限为100。<br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。
      */
    KeyIds: Array<string>;

    constructor(params: {

    /**
      * 一个或多个待操作的密钥对ID。每次请求批量密钥对的上限为100。<br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。
      */
    KeyIds: Array<string>;

    }){

        this.KeyIds = params && params.KeyIds || null;

    }
}

/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
export class SystemDisk {

    /**
      * 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><br>默认取值：CLOUD_BASIC。
      */
    DiskType?: string;

    /**
      * 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
      */
    DiskId?: string;

    /**
      * 系统盘大小，单位：GB。默认值为 50
      */
    DiskSize?: number;

    constructor(params: {

    /**
      * 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><br>默认取值：CLOUD_BASIC。
      */
    DiskType?: string;

    /**
      * 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
      */
    DiskId?: string;

    /**
      * 系统盘大小，单位：GB。默认值为 50
      */
    DiskSize?: number;

    }){

        this.DiskType = params && params.DiskType || null;

        this.DiskId = params && params.DiskId || null;

        this.DiskSize = params && params.DiskSize || null;

    }
}

/**
 * ResetInstance请求参数结构体
 * @class
 */
export class ResetInstanceRequest {

    /**
      * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
<br>默认取值：默认使用当前镜像。
      */
    ImageId?: string;

    /**
      * 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定大小且原系统盘大小小于镜像大小，则会自动扩容，产生多余的磁盘费用。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;

    /**
      * 重装系统时，可以指定修改实例的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;

    constructor(params: {

    /**
      * 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
<br>默认取值：默认使用当前镜像。
      */
    ImageId?: string;

    /**
      * 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定大小且原系统盘大小小于镜像大小，则会自动扩容，产生多余的磁盘费用。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;

    /**
      * 重装系统时，可以指定修改实例的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;

    }){

        this.InstanceId = params && params.InstanceId || null;

        this.ImageId = params && params.ImageId || null;

        this.SystemDisk = params && params.SystemDisk || null;

        this.LoginSettings = params && params.LoginSettings || null;

        this.EnhancedService = params && params.EnhancedService || null;

        this.HostName = params && params.HostName || null;

    }
}

/**
 * 描述实例机型配置信息
 * @class
 */
export class InstanceTypeConfig {

    /**
      * 可用区。
      */
    Zone?: string;

    /**
      * 实例机型。
      */
    InstanceType?: string;

    /**
      * 实例机型系列。
      */
    InstanceFamily?: string;

    /**
      * GPU核数，单位：核。
      */
    GPU?: number;

    /**
      * CPU核数，单位：核。
      */
    CPU?: number;

    /**
      * 内存容量，单位：`GB`。
      */
    Memory?: number;

    /**
      * FPGA核数，单位：核。
      */
    FPGA: number;

    constructor(params: {

    /**
      * 可用区。
      */
    Zone?: string;

    /**
      * 实例机型。
      */
    InstanceType?: string;

    /**
      * 实例机型系列。
      */
    InstanceFamily?: string;

    /**
      * GPU核数，单位：核。
      */
    GPU?: number;

    /**
      * CPU核数，单位：核。
      */
    CPU?: number;

    /**
      * 内存容量，单位：`GB`。
      */
    Memory?: number;

    /**
      * FPGA核数，单位：核。
      */
    FPGA: number;

    }){

        this.Zone = params && params.Zone || null;

        this.InstanceType = params && params.InstanceType || null;

        this.InstanceFamily = params && params.InstanceFamily || null;

        this.GPU = params && params.GPU || null;

        this.CPU = params && params.CPU || null;

        this.Memory = params && params.Memory || null;

        this.FPGA = params && params.FPGA || null;

    }
}

/**
 * AllocateHosts请求参数结构体
 * @class
 */
export class AllocateHostsRequest {

    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
      */
    Placement: Placement;

    /**
      * 用于保证请求幂等性的字符串。
      */
    ClientToken?: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    HostChargePrepaid?: ChargePrepaid;

    /**
      * 实例计费类型。目前仅支持：PREPAID（预付费，即包年包月模式），默认为：'PREPAID'。
      */
    HostChargeType?: string;

    /**
      * CDH实例机型，默认为：'HS1'。
      */
    HostType?: string;

    /**
      * 购买CDH实例数量，默认为：1。
      */
    HostCount?: number;

    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例。
      */
    TagSpecification?: Array<TagSpecification>;

    constructor(params: {

    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
      */
    Placement: Placement;

    /**
      * 用于保证请求幂等性的字符串。
      */
    ClientToken?: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    HostChargePrepaid?: ChargePrepaid;

    /**
      * 实例计费类型。目前仅支持：PREPAID（预付费，即包年包月模式），默认为：'PREPAID'。
      */
    HostChargeType?: string;

    /**
      * CDH实例机型，默认为：'HS1'。
      */
    HostType?: string;

    /**
      * 购买CDH实例数量，默认为：1。
      */
    HostCount?: number;

    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例。
      */
    TagSpecification?: Array<TagSpecification>;

    }){

        this.Placement = params && params.Placement || null;

        this.ClientToken = params && params.ClientToken || null;

        this.HostChargePrepaid = params && params.HostChargePrepaid || null;

        this.HostChargeType = params && params.HostChargeType || null;

        this.HostType = params && params.HostType || null;

        this.HostCount = params && params.HostCount || null;

        this.TagSpecification = params && params.TagSpecification || null;

    }
}

/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
export class LoginSettings {

    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;

    /**
      * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyIds?: Array<string>;

    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepImageLogin?: string;

    constructor(params: {

    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;

    /**
      * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyIds?: Array<string>;

    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepImageLogin?: string;

    }){

        this.Password = params && params.Password || null;

        this.KeyIds = params && params.KeyIds || null;

        this.KeepImageLogin = params && params.KeepImageLogin || null;

    }
}

/**
 * DescribeRegions返回参数结构体
 * @class
 */
export class DescribeRegionsResponse {

    /**
      * 地域数量
      */
    TotalCount?: number;

    /**
      * 地域列表信息
      */
    RegionSet?: Array<RegionInfo>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 地域数量
      */
    TotalCount?: number;

    /**
      * 地域列表信息
      */
    RegionSet?: Array<RegionInfo>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.RegionSet = params && params.RegionSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * PurchaseReservedInstancesOffering请求参数结构体
 * @class
 */
export class PurchaseReservedInstancesOfferingRequest {

    /**
      * 购买预留实例计费数量
      */
    InstanceCount: number;

    /**
      * 预留实例计费配置ID
      */
    ReservedInstancesOfferingId: string;

    /**
      * 试运行
      */
    DryRun?: boolean;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性
      */
    ClientToken?: string;

    constructor(params: {

    /**
      * 购买预留实例计费数量
      */
    InstanceCount: number;

    /**
      * 预留实例计费配置ID
      */
    ReservedInstancesOfferingId: string;

    /**
      * 试运行
      */
    DryRun?: boolean;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性
      */
    ClientToken?: string;

    }){

        this.InstanceCount = params && params.InstanceCount || null;

        this.ReservedInstancesOfferingId = params && params.ReservedInstancesOfferingId || null;

        this.DryRun = params && params.DryRun || null;

        this.ClientToken = params && params.ClientToken || null;

    }
}

/**
 * RebootInstances请求参数结构体
 * @class
 */
export class RebootInstancesRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 是否在正常重启失败后选择强制重启实例。取值范围：<br><li>TRUE：表示在正常重启失败后进行强制重启<br><li>FALSE：表示在正常重启失败后不进行强制重启<br><br>默认取值：FALSE。
      */
    ForceReboot?: boolean;

    /**
      * 关机类型。取值范围：<br><li>SOFT：表示软关机<br><li>HARD：表示硬关机<br><li>SOFT_FIRST：表示优先软关机，失败再执行硬关机<br><br>默认取值：SOFT。
      */
    StopType?: string;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 是否在正常重启失败后选择强制重启实例。取值范围：<br><li>TRUE：表示在正常重启失败后进行强制重启<br><li>FALSE：表示在正常重启失败后不进行强制重启<br><br>默认取值：FALSE。
      */
    ForceReboot?: boolean;

    /**
      * 关机类型。取值范围：<br><li>SOFT：表示软关机<br><li>HARD：表示硬关机<br><li>SOFT_FIRST：表示优先软关机，失败再执行硬关机<br><br>默认取值：SOFT。
      */
    StopType?: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.ForceReboot = params && params.ForceReboot || null;

        this.StopType = params && params.StopType || null;

    }
}

/**
 * AssociateInstancesKeyPairs请求参数结构体
 * @class
 */
export class AssociateInstancesKeyPairsRequest {

    /**
      * 一个或多个待操作的实例ID，每次请求批量实例的上限为100。<br>可以通过以下方式获取可用的实例ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。<br><li>通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的`InstanceId`获取实例ID。
      */
    InstanceIds: Array<string>;

    /**
      * 一个或多个待操作的密钥对ID，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-3glfot13`。<br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的`KeyId`获取密钥对ID。
      */
    KeyIds: Array<string>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再绑定密钥。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机。<br><li>FALSE：表示在正常关机失败后不进行强制关机。<br>默认取值：FALSE。
      */
    ForceStop?: boolean;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID，每次请求批量实例的上限为100。<br>可以通过以下方式获取可用的实例ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。<br><li>通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的`InstanceId`获取实例ID。
      */
    InstanceIds: Array<string>;

    /**
      * 一个或多个待操作的密钥对ID，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-3glfot13`。<br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的`KeyId`获取密钥对ID。
      */
    KeyIds: Array<string>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再绑定密钥。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机。<br><li>FALSE：表示在正常关机失败后不进行强制关机。<br>默认取值：FALSE。
      */
    ForceStop?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.KeyIds = params && params.KeyIds || null;

        this.ForceStop = params && params.ForceStop || null;

    }
}

/**
 * ImportKeyPair返回参数结构体
 * @class
 */
export class ImportKeyPairResponse {

    /**
      * 密钥对ID。
      */
    KeyId?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 密钥对ID。
      */
    KeyId?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.KeyId = params && params.KeyId || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeInstancesStatus返回参数结构体
 * @class
 */
export class DescribeInstancesStatusResponse {

    /**
      * 符合条件的实例状态数量。
      */
    TotalCount?: number;

    /**
      * [实例状态](https://cloud.tencent.com/document/api/213/15753#InstanceStatus) 列表。
      */
    InstanceStatusSet?: Array<InstanceStatus>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 符合条件的实例状态数量。
      */
    TotalCount?: number;

    /**
      * [实例状态](https://cloud.tencent.com/document/api/213/15753#InstanceStatus) 列表。
      */
    InstanceStatusSet?: Array<InstanceStatus>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.InstanceStatusSet = params && params.InstanceStatusSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 可用区信息
 * @class
 */
export class ZoneInfo {

    /**
      * 可用区名称，例如，ap-guangzhou-3
全网可用区名称如下：
<li> ap-chongqing-1 </li>
<li> ap-seoul-1 </li>
<li> ap-chengdu-1 </li>
<li> ap-chengdu-2 </li>
<li> ap-hongkong-1 </li>
<li> ap-hongkong-2 </li>
<li> ap-shenzhen-fsi-1 </li>
<li> ap-shenzhen-fsi-2 </li>
<li> ap-shenzhen-fsi-3 </li>
<li> ap-guangzhou-1（售罄）</li>
<li> ap-guangzhou-2（售罄）</li>
<li> ap-guangzhou-3 </li>
<li> ap-guangzhou-4 </li>
<li> ap-tokyo-1 </li>
<li> ap-singapore-1 </li>
<li> ap-shanghai-fsi-1 </li>
<li> ap-shanghai-fsi-2 </li>
<li> ap-shanghai-fsi-3 </li>
<li> ap-bangkok-1 </li>
<li> ap-shanghai-1（售罄） </li>
<li> ap-shanghai-2 </li>
<li> ap-shanghai-3 </li>
<li> ap-shanghai-4 </li>
<li> ap-mumbai-1 </li>
<li> ap-mumbai-2 </li>
<li> eu-moscow-1 </li>
<li> ap-beijing-1 </li>
<li> ap-beijing-2 </li>
<li> ap-beijing-3 </li>
<li> ap-beijing-4 </li>
<li> na-siliconvalley-1 </li>
<li> na-siliconvalley-2 </li>
<li> eu-frankfurt-1 </li>
<li> na-toronto-1 </li>
<li> na-ashburn-1 </li>
<li> na-ashburn-2 </li>
<li> ap-nanjing-1 </li>
<li> ap-nanjing-2 </li>
      */
    Zone: string;

    /**
      * 可用区描述，例如，广州三区
      */
    ZoneName: string;

    /**
      * 可用区ID
      */
    ZoneId: string;

    /**
      * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
      */
    ZoneState: string;

    constructor(params: {

    /**
      * 可用区名称，例如，ap-guangzhou-3
全网可用区名称如下：
<li> ap-chongqing-1 </li>
<li> ap-seoul-1 </li>
<li> ap-chengdu-1 </li>
<li> ap-chengdu-2 </li>
<li> ap-hongkong-1 </li>
<li> ap-hongkong-2 </li>
<li> ap-shenzhen-fsi-1 </li>
<li> ap-shenzhen-fsi-2 </li>
<li> ap-shenzhen-fsi-3 </li>
<li> ap-guangzhou-1（售罄）</li>
<li> ap-guangzhou-2（售罄）</li>
<li> ap-guangzhou-3 </li>
<li> ap-guangzhou-4 </li>
<li> ap-tokyo-1 </li>
<li> ap-singapore-1 </li>
<li> ap-shanghai-fsi-1 </li>
<li> ap-shanghai-fsi-2 </li>
<li> ap-shanghai-fsi-3 </li>
<li> ap-bangkok-1 </li>
<li> ap-shanghai-1（售罄） </li>
<li> ap-shanghai-2 </li>
<li> ap-shanghai-3 </li>
<li> ap-shanghai-4 </li>
<li> ap-mumbai-1 </li>
<li> ap-mumbai-2 </li>
<li> eu-moscow-1 </li>
<li> ap-beijing-1 </li>
<li> ap-beijing-2 </li>
<li> ap-beijing-3 </li>
<li> ap-beijing-4 </li>
<li> na-siliconvalley-1 </li>
<li> na-siliconvalley-2 </li>
<li> eu-frankfurt-1 </li>
<li> na-toronto-1 </li>
<li> na-ashburn-1 </li>
<li> na-ashburn-2 </li>
<li> ap-nanjing-1 </li>
<li> ap-nanjing-2 </li>
      */
    Zone: string;

    /**
      * 可用区描述，例如，广州三区
      */
    ZoneName: string;

    /**
      * 可用区ID
      */
    ZoneId: string;

    /**
      * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
      */
    ZoneState: string;

    }){

        this.Zone = params && params.Zone || null;

        this.ZoneName = params && params.ZoneName || null;

        this.ZoneId = params && params.ZoneId || null;

        this.ZoneState = params && params.ZoneState || null;

    }
}

/**
 * InquiryPriceModifyInstancesChargeType返回参数结构体
 * @class
 */
export class InquiryPriceModifyInstancesChargeTypeResponse {

    /**
      * 该参数表示对应配置实例转换计费模式的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示对应配置实例转换计费模式的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeKeyPairs返回参数结构体
 * @class
 */
export class DescribeKeyPairsResponse {

    /**
      * 符合条件的密钥对数量。
      */
    TotalCount?: number;

    /**
      * 密钥对详细信息列表。
      */
    KeyPairSet?: Array<KeyPair>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 符合条件的密钥对数量。
      */
    TotalCount?: number;

    /**
      * 密钥对详细信息列表。
      */
    KeyPairSet?: Array<KeyPair>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.KeyPairSet = params && params.KeyPairSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
export class ResetInstancesPasswordRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8-30位，推荐使用12位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字：0-9<br><li>特殊字符： ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/
Windows实例密码必须12~30位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字： 0-9<br><li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/<br><li>如果实例即包含`Linux`实例又包含`Windows`实例，则密码复杂度限制按照`Windows`实例的限制。
      */
    Password: string;

    /**
      * 待重置密码的实例操作系统的用户名。不得超过64个字符。
      */
    UserName?: string;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8-30位，推荐使用12位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字：0-9<br><li>特殊字符： ()\`~!@#$%^&\*-+=\_|{}[]:;'<>,.?/
Windows实例密码必须12~30位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符<br><li>小写字母：[a-z]<br><li>大写字母：[A-Z]<br><li>数字： 0-9<br><li>特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/<br><li>如果实例即包含`Linux`实例又包含`Windows`实例，则密码复杂度限制按照`Windows`实例的限制。
      */
    Password: string;

    /**
      * 待重置密码的实例操作系统的用户名。不得超过64个字符。
      */
    UserName?: string;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.Password = params && params.Password || null;

        this.UserName = params && params.UserName || null;

        this.ForceStop = params && params.ForceStop || null;

    }
}

/**
 * 描述了网络计费
 * @class
 */
export class InternetChargeTypeConfig {

    /**
      * 网络计费模式。
      */
    InternetChargeType?: string;

    /**
      * 网络计费模式描述信息。
      */
    Description?: string;

    constructor(params: {

    /**
      * 网络计费模式。
      */
    InternetChargeType?: string;

    /**
      * 网络计费模式描述信息。
      */
    Description?: string;

    }){

        this.InternetChargeType = params && params.InternetChargeType || null;

        this.Description = params && params.Description || null;

    }
}

/**
 * DescribeImages返回参数结构体
 * @class
 */
export class DescribeImagesResponse {

    /**
      * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
      */
    ImageSet?: Array<Image>;

    /**
      * 符合要求的镜像数量。
      */
    TotalCount?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
      */
    ImageSet?: Array<Image>;

    /**
      * 符合要求的镜像数量。
      */
    TotalCount?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.ImageSet = params && params.ImageSet || null;

        this.TotalCount = params && params.TotalCount || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesVpcAttribute返回参数结构体
 * @class
 */
export class ModifyInstancesVpcAttributeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * InquiryPriceResetInstancesType请求参数结构体
 * @class
 */
export class InquiryPriceResetInstancesTypeRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。本接口每次请求批量实例的上限为1。
      */
    InstanceIds: Array<string>;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可参见附表[实例资源规格](https://cloud.tencent.com/document/product/213/11518)对照表，也可以调用查询[实例资源规格列表](https://cloud.tencent.com/document/product/213/15749)接口获得最新的规格表。
      */
    InstanceType: string;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。本接口每次请求批量实例的上限为1。
      */
    InstanceIds: Array<string>;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可参见附表[实例资源规格](https://cloud.tencent.com/document/product/213/11518)对照表，也可以调用查询[实例资源规格列表](https://cloud.tencent.com/document/product/213/15749)接口获得最新的规格表。
      */
    InstanceType: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceType = params && params.InstanceType || null;

    }
}

/**
 * DescribeInstancesOperationLimit请求参数结构体
 * @class
 */
export class DescribeInstancesOperationLimitRequest {

    /**
      * 按照一个或者多个实例ID查询，可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)API返回值中的InstanceId获取。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的ids.N一节）。每次请求的实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例操作。
<li> INSTANCE_DEGRADE：实例降配操作</li>
      */
    Operation: string;

    constructor(params: {

    /**
      * 按照一个或者多个实例ID查询，可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)API返回值中的InstanceId获取。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的ids.N一节）。每次请求的实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例操作。
<li> INSTANCE_DEGRADE：实例降配操作</li>
      */
    Operation: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.Operation = params && params.Operation || null;

    }
}

/**
 * ModifyInstancesChargeType请求参数结构体
 * @class
 */
export class ModifyInstancesChargeTypeRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月。
      */
    InstanceChargeType: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月。
      */
    InstanceChargeType: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceChargeType = params && params.InstanceChargeType || null;

        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;

    }
}

/**
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
export class DescribeInstanceVncUrlRequest {

    /**
      * 一个操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    constructor(params: {

    /**
      * 一个操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    }){

        this.InstanceId = params && params.InstanceId || null;

    }
}

/**
 * ModifyImageSharePermission请求参数结构体
 * @class
 */
export class ModifyImageSharePermissionRequest {

    /**
      * 镜像ID，形如`img-gvbnzy6f`。镜像Id可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。 <br>镜像ID必须指定为状态为`NORMAL`的镜像。镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753#Image)。
      */
    ImageId: string;

    /**
      * 接收分享镜像的账号Id列表，array型参数的格式可以参考[API简介](/document/api/213/568)。帐号ID不同于QQ号，查询用户帐号ID请查看[帐号信息](https://console.cloud.tencent.com/developer)中的帐号ID栏。
      */
    AccountIds: Array<string>;

    /**
      * 操作，包括 `SHARE`，`CANCEL`。其中`SHARE`代表分享操作，`CANCEL`代表取消分享操作。
      */
    Permission: string;

    constructor(params: {

    /**
      * 镜像ID，形如`img-gvbnzy6f`。镜像Id可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。 <br>镜像ID必须指定为状态为`NORMAL`的镜像。镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753#Image)。
      */
    ImageId: string;

    /**
      * 接收分享镜像的账号Id列表，array型参数的格式可以参考[API简介](/document/api/213/568)。帐号ID不同于QQ号，查询用户帐号ID请查看[帐号信息](https://console.cloud.tencent.com/developer)中的帐号ID栏。
      */
    AccountIds: Array<string>;

    /**
      * 操作，包括 `SHARE`，`CANCEL`。其中`SHARE`代表分享操作，`CANCEL`代表取消分享操作。
      */
    Permission: string;

    }){

        this.ImageId = params && params.ImageId || null;

        this.AccountIds = params && params.AccountIds || null;

        this.Permission = params && params.Permission || null;

    }
}

/**
 * DisassociateInstancesKeyPairs返回参数结构体
 * @class
 */
export class DisassociateInstancesKeyPairsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * InquiryPriceResizeInstanceDisks请求参数结构体
 * @class
 */
export class InquiryPriceResizeInstanceDisksRequest {

    /**
      * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](https://cloud.tencent.com/document/product/213/15753#DataDisk)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考硬盘产品简介。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    constructor(params: {

    /**
      * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](https://cloud.tencent.com/document/product/213/15753#DataDisk)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考硬盘产品简介。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    }){

        this.InstanceId = params && params.InstanceId || null;

        this.DataDisks = params && params.DataDisks || null;

        this.ForceStop = params && params.ForceStop || null;

    }
}

/**
 * RunInstances返回参数结构体
 * @class
 */
export class RunInstancesResponse {

    /**
      * 当通过本接口来创建实例时会返回该参数，表示一个或多个实例`ID`。返回实例`ID`列表并不代表实例创建成功，可根据 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口查询返回的InstancesSet中对应实例的`ID`的状态来判断创建是否完成；如果实例状态由“准备中”变为“正在运行”，则为创建成功。
      */
    InstanceIdSet?: Array<string>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 当通过本接口来创建实例时会返回该参数，表示一个或多个实例`ID`。返回实例`ID`列表并不代表实例创建成功，可根据 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口查询返回的InstancesSet中对应实例的`ID`的状态来判断创建是否完成；如果实例状态由“准备中”变为“正在运行”，则为创建成功。
      */
    InstanceIdSet?: Array<string>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InstanceIdSet = params && params.InstanceIdSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
export class ResetInstancesInternetMaxBandwidthResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
export class ModifyInstancesAttributeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyImageSharePermission返回参数结构体
 * @class
 */
export class ModifyImageSharePermissionResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeInstancesOperationLimit返回参数结构体
 * @class
 */
export class DescribeInstancesOperationLimitResponse {

    /**
      * 该参数表示调整配置操作（降配）限制次数查询。
      */
    InstanceOperationLimitSet?: Array<OperationCountLimit>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示调整配置操作（降配）限制次数查询。
      */
    InstanceOperationLimitSet?: Array<OperationCountLimit>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InstanceOperationLimitSet = params && params.InstanceOperationLimitSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * SyncImages返回参数结构体
 * @class
 */
export class SyncImagesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeZoneInstanceConfigInfos返回参数结构体
 * @class
 */
export class DescribeZoneInstanceConfigInfosResponse {

    /**
      * 可用区机型配置列表。
      */
    InstanceTypeQuotaSet?: Array<InstanceTypeQuotaItem>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 可用区机型配置列表。
      */
    InstanceTypeQuotaSet?: Array<InstanceTypeQuotaItem>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InstanceTypeQuotaSet = params && params.InstanceTypeQuotaSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
export class ModifyInstancesAttributeRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例名称。可任意命名，但不得超过60个字符。
      */
    InstanceName?: string;

    /**
      * 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。
      */
    SecurityGroups?: Array<string>;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例名称。可任意命名，但不得超过60个字符。
      */
    InstanceName?: string;

    /**
      * 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。
      */
    SecurityGroups?: Array<string>;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceName = params && params.InstanceName || null;

        this.SecurityGroups = params && params.SecurityGroups || null;

    }
}

/**
 * RenewHosts请求参数结构体
 * @class
 */
export class RenewHostsRequest {

    /**
      * 一个或多个待操作的CDH实例ID。每次请求的CDH实例的上限为100。
      */
    HostIds: Array<string>;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    HostChargePrepaid: ChargePrepaid;

    constructor(params: {

    /**
      * 一个或多个待操作的CDH实例ID。每次请求的CDH实例的上限为100。
      */
    HostIds: Array<string>;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    HostChargePrepaid: ChargePrepaid;

    }){

        this.HostIds = params && params.HostIds || null;

        this.HostChargePrepaid = params && params.HostChargePrepaid || null;

    }
}

/**
 * DescribeZones请求参数结构体
 * @class
 */
export class DescribeZonesRequest {


    constructor(params: {


    }){

    }
}

/**
 * StartInstances请求参数结构体
 * @class
 */
export class StartInstancesRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

    }
}

/**
 * 标签键值对
 * @class
 */
export class Tag {

    /**
      * 标签键
      */
    Key: string;

    /**
      * 标签值
      */
    Value: string;

    constructor(params: {

    /**
      * 标签键
      */
    Key: string;

    /**
      * 标签值
      */
    Value: string;

    }){

        this.Key = params && params.Key || null;

        this.Value = params && params.Value || null;

    }
}

/**
 * DescribeInstanceInternetBandwidthConfigs返回参数结构体
 * @class
 */
export class DescribeInstanceInternetBandwidthConfigsResponse {

    /**
      * 带宽配置信息列表。
      */
    InternetBandwidthConfigSet?: Array<InternetBandwidthConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 带宽配置信息列表。
      */
    InternetBandwidthConfigSet?: Array<InternetBandwidthConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InternetBandwidthConfigSet = params && params.InternetBandwidthConfigSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
export class Placement {

    /**
      * 实例所属的[可用区](https://cloud.tencent.com/document/product/213/15753#ZoneInfo)ID。该参数也可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
      */
    Zone: string;

    /**
      * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
      */
    ProjectId?: number;

    /**
      * 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
      */
    HostIds?: Array<string>;

    /**
      * 指定母机ip生产子机
      */
    HostIps?: Array<string>;

    /**
      * 实例所属的专用宿主机ID，仅用于出参。
      */
    HostId?: string;

    constructor(params: {

    /**
      * 实例所属的[可用区](https://cloud.tencent.com/document/product/213/15753#ZoneInfo)ID。该参数也可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
      */
    Zone: string;

    /**
      * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
      */
    ProjectId?: number;

    /**
      * 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
      */
    HostIds?: Array<string>;

    /**
      * 指定母机ip生产子机
      */
    HostIps?: Array<string>;

    /**
      * 实例所属的专用宿主机ID，仅用于出参。
      */
    HostId?: string;

    }){

        this.Zone = params && params.Zone || null;

        this.ProjectId = params && params.ProjectId || null;

        this.HostIds = params && params.HostIds || null;

        this.HostIps = params && params.HostIps || null;

        this.HostId = params && params.HostId || null;

    }
}

/**
 * DescribeDisasterRecoverGroups请求参数结构体
 * @class
 */
export class DescribeDisasterRecoverGroupsRequest {

    /**
      * 分散置放群组ID列表。每次请求允许操作的分散置放群组数量上限是100。
      */
    DisasterRecoverGroupIds?: Array<string>;

    /**
      * 分散置放群组名称，支持模糊匹配。
      */
    Name?: string;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    constructor(params: {

    /**
      * 分散置放群组ID列表。每次请求允许操作的分散置放群组数量上限是100。
      */
    DisasterRecoverGroupIds?: Array<string>;

    /**
      * 分散置放群组名称，支持模糊匹配。
      */
    Name?: string;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    }){

        this.DisasterRecoverGroupIds = params && params.DisasterRecoverGroupIds || null;

        this.Name = params && params.Name || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

    }
}

/**
 * SyncImages请求参数结构体
 * @class
 */
export class SyncImagesRequest {

    /**
      * 镜像ID列表 ，镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。<br>镜像ID必须满足限制：<br><li>镜像ID对应的镜像状态必须为`NORMAL`。<br><li>镜像大小小于50GB。<br>镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753#Image)。
      */
    ImageIds: Array<string>;

    /**
      * 目的同步地域列表；必须满足限制：<br><li>不能为源地域，<br><li>必须是一个合法的Region。<br><li>暂不支持部分地域同步。<br>具体地域参数请参考[Region](https://cloud.tencent.com/document/product/213/6091)。
      */
    DestinationRegions: Array<string>;

    constructor(params: {

    /**
      * 镜像ID列表 ，镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。<br>镜像ID必须满足限制：<br><li>镜像ID对应的镜像状态必须为`NORMAL`。<br><li>镜像大小小于50GB。<br>镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753#Image)。
      */
    ImageIds: Array<string>;

    /**
      * 目的同步地域列表；必须满足限制：<br><li>不能为源地域，<br><li>必须是一个合法的Region。<br><li>暂不支持部分地域同步。<br>具体地域参数请参考[Region](https://cloud.tencent.com/document/product/213/6091)。
      */
    DestinationRegions: Array<string>;

    }){

        this.ImageIds = params && params.ImageIds || null;

        this.DestinationRegions = params && params.DestinationRegions || null;

    }
}

/**
 * DisassociateInstancesKeyPairs请求参数结构体
 * @class
 */
export class DisassociateInstancesKeyPairsRequest {

    /**
      * 一个或多个待操作的实例ID，每次请求批量实例的上限为100。<br><br>可以通过以下方式获取可用的实例ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。<br><li>通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的 `InstanceId` 获取实例ID。
      */
    InstanceIds: Array<string>;

    /**
      * 密钥对ID列表，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-11112222`。<br><br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。
      */
    KeyIds: Array<string>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再解绑密钥。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机。<br><li>FALSE：表示在正常关机失败后不进行强制关机。<br><br>默认取值：FALSE。
      */
    ForceStop?: boolean;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID，每次请求批量实例的上限为100。<br><br>可以通过以下方式获取可用的实例ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。<br><li>通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的 `InstanceId` 获取实例ID。
      */
    InstanceIds: Array<string>;

    /**
      * 密钥对ID列表，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-11112222`。<br><br>可以通过以下方式获取可用的密钥ID：<br><li>通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。<br><li>通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。
      */
    KeyIds: Array<string>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再解绑密钥。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机。<br><li>FALSE：表示在正常关机失败后不进行强制关机。<br><br>默认取值：FALSE。
      */
    ForceStop?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.KeyIds = params && params.KeyIds || null;

        this.ForceStop = params && params.ForceStop || null;

    }
}

/**
 * DescribeImageQuota请求参数结构体
 * @class
 */
export class DescribeImageQuotaRequest {


    constructor(params: {


    }){

    }
}

/**
 * DescribeInstanceFamilyConfigs返回参数结构体
 * @class
 */
export class DescribeInstanceFamilyConfigsResponse {

    /**
      * 实例机型组配置的列表信息
      */
    InstanceFamilyConfigSet?: Array<InstanceFamilyConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 实例机型组配置的列表信息
      */
    InstanceFamilyConfigSet?: Array<InstanceFamilyConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InstanceFamilyConfigSet = params && params.InstanceFamilyConfigSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * CreateImage返回参数结构体
 * @class
 */
export class CreateImageResponse {

    /**
      * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.ImageId = params && params.ImageId || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * StopInstances返回参数结构体
 * @class
 */
export class StopInstancesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 竞价请求相关选项
 * @class
 */
export class InstanceMarketOptionsRequest {

    /**
      * 竞价相关选项
      */
    SpotOptions: SpotMarketOptions;

    /**
      * 市场选项类型，当前只支持取值：spot
      */
    MarketType?: string;

    constructor(params: {

    /**
      * 竞价相关选项
      */
    SpotOptions: SpotMarketOptions;

    /**
      * 市场选项类型，当前只支持取值：spot
      */
    MarketType?: string;

    }){

        this.SpotOptions = params && params.SpotOptions || null;

        this.MarketType = params && params.MarketType || null;

    }
}

/**
 * InquiryPriceResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
export class InquiryPriceResetInstancesInternetMaxBandwidthRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。
      */
    InstanceIds: Array<string>;

    /**
      * 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持`InternetMaxBandwidthOut`参数。
      */
    InternetAccessible: InternetAccessible;

    /**
      * 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    StartTime?: string;

    /**
      * 带宽生效的终止时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    EndTime?: string;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。
      */
    InstanceIds: Array<string>;

    /**
      * 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持`InternetMaxBandwidthOut`参数。
      */
    InternetAccessible: InternetAccessible;

    /**
      * 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    StartTime?: string;

    /**
      * 带宽生效的终止时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    EndTime?: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InternetAccessible = params && params.InternetAccessible || null;

        this.StartTime = params && params.StartTime || null;

        this.EndTime = params && params.EndTime || null;

    }
}

/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
export class ResetInstancesPasswordResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * InquiryPriceRunInstances请求参数结构体
 * @class
 */
export class InquiryPriceRunInstancesRequest {

    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
      */
    Placement: Placement;

    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId: string;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
      */
    InstanceChargeType?: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。
      */
    InstanceType?: string;

    /**
      * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，那么InstanceCount参数只能为1。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;

    /**
      * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
      */
    InternetAccessible?: InternetAccessible;

    /**
      * 购买实例数量。取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。
      */
    InstanceCount?: number;

    /**
      * 实例显示名称。<br><li>不指定实例显示名称则默认显示‘未命名’。</li><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。</li><li>购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。</li><li>最多支持60个字符（包含模式串）。
      */
    InstanceName?: string;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则默认不绑定安全组。
      */
    SecurityGroupIds?: Array<string>;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;

    /**
      * 云服务器的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 30]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;

    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。
      */
    TagSpecification?: Array<TagSpecification>;

    /**
      * 实例的市场相关选项，如竞价实例相关参数
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;

    /**
      * 高性能计算集群ID。
      */
    HpcClusterId?: string;

    constructor(params: {

    /**
      * 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
      */
    Placement: Placement;

    /**
      * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：<br/><li>公共镜像</li><li>自定义镜像</li><li>共享镜像</li><li>服务市场镜像</li><br/>可通过以下方式获取可用的镜像ID：<br/><li>`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。</li><li>通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。</li>
      */
    ImageId: string;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
      */
    InstanceChargeType?: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    /**
      * 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。
      */
    InstanceType?: string;

    /**
      * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，那么InstanceCount参数只能为1。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;

    /**
      * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
      */
    InternetAccessible?: InternetAccessible;

    /**
      * 购买实例数量。取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。
      */
    InstanceCount?: number;

    /**
      * 实例显示名称。<br><li>不指定实例显示名称则默认显示‘未命名’。</li><li>购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。</li><li>购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。</li><li>最多支持60个字符（包含模式串）。
      */
    InstanceName?: string;

    /**
      * 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。
      */
    LoginSettings?: LoginSettings;

    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则默认不绑定安全组。
      */
    SecurityGroupIds?: Array<string>;

    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;

    /**
      * 云服务器的主机名。<br><li>点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。<br><li>Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。<br><li>其他类型（Linux 等）实例：字符长度为[2, 30]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
    HostName?: string;

    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。
      */
    TagSpecification?: Array<TagSpecification>;

    /**
      * 实例的市场相关选项，如竞价实例相关参数
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;

    /**
      * 高性能计算集群ID。
      */
    HpcClusterId?: string;

    }){

        this.Placement = params && params.Placement || null;

        this.ImageId = params && params.ImageId || null;

        this.InstanceChargeType = params && params.InstanceChargeType || null;

        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;

        this.InstanceType = params && params.InstanceType || null;

        this.SystemDisk = params && params.SystemDisk || null;

        this.DataDisks = params && params.DataDisks || null;

        this.VirtualPrivateCloud = params && params.VirtualPrivateCloud || null;

        this.InternetAccessible = params && params.InternetAccessible || null;

        this.InstanceCount = params && params.InstanceCount || null;

        this.InstanceName = params && params.InstanceName || null;

        this.LoginSettings = params && params.LoginSettings || null;

        this.SecurityGroupIds = params && params.SecurityGroupIds || null;

        this.EnhancedService = params && params.EnhancedService || null;

        this.ClientToken = params && params.ClientToken || null;

        this.HostName = params && params.HostName || null;

        this.TagSpecification = params && params.TagSpecification || null;

        this.InstanceMarketOptions = params && params.InstanceMarketOptions || null;

        this.HpcClusterId = params && params.HpcClusterId || null;

    }
}

/**
 * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
 * @class
 */
export class Image {

    /**
      * 镜像ID
      */
    ImageId?: string;

    /**
      * 镜像操作系统
      */
    OsName?: string;

    /**
      * 镜像类型
      */
    ImageType?: string;

    /**
      * 镜像创建时间
      */
    CreatedTime: string;

    /**
      * 镜像名称
      */
    ImageName: string;

    /**
      * 镜像描述
      */
    ImageDescription: string;

    /**
      * 镜像大小
      */
    ImageSize: number;

    /**
      * 镜像架构
      */
    Architecture: string;

    /**
      * 镜像状态:
CREATING-创建中
NORMAL-正常
CREATEFAILED-创建失败
USING-使用中
SYNCING-同步中
IMPORTING-导入中
IMPORTFAILED-导入失败
      */
    ImageState: string;

    /**
      * 镜像来源平台
      */
    Platform?: string;

    /**
      * 镜像创建者
      */
    ImageCreator?: string;

    /**
      * 镜像来源
      */
    ImageSource?: string;

    /**
      * 同步百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
    SyncPercent: number;

    /**
      * 镜像是否支持cloud-init
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsSupportCloudinit: boolean;

    /**
      * 镜像关联的快照信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotSet: Array<Snapshot>;

    constructor(params: {

    /**
      * 镜像ID
      */
    ImageId?: string;

    /**
      * 镜像操作系统
      */
    OsName?: string;

    /**
      * 镜像类型
      */
    ImageType?: string;

    /**
      * 镜像创建时间
      */
    CreatedTime: string;

    /**
      * 镜像名称
      */
    ImageName: string;

    /**
      * 镜像描述
      */
    ImageDescription: string;

    /**
      * 镜像大小
      */
    ImageSize: number;

    /**
      * 镜像架构
      */
    Architecture: string;

    /**
      * 镜像状态:
CREATING-创建中
NORMAL-正常
CREATEFAILED-创建失败
USING-使用中
SYNCING-同步中
IMPORTING-导入中
IMPORTFAILED-导入失败
      */
    ImageState: string;

    /**
      * 镜像来源平台
      */
    Platform?: string;

    /**
      * 镜像创建者
      */
    ImageCreator?: string;

    /**
      * 镜像来源
      */
    ImageSource?: string;

    /**
      * 同步百分比
注意：此字段可能返回 null，表示取不到有效值。
      */
    SyncPercent: number;

    /**
      * 镜像是否支持cloud-init
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsSupportCloudinit: boolean;

    /**
      * 镜像关联的快照信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotSet: Array<Snapshot>;

    }){

        this.ImageId = params && params.ImageId || null;

        this.OsName = params && params.OsName || null;

        this.ImageType = params && params.ImageType || null;

        this.CreatedTime = params && params.CreatedTime || null;

        this.ImageName = params && params.ImageName || null;

        this.ImageDescription = params && params.ImageDescription || null;

        this.ImageSize = params && params.ImageSize || null;

        this.Architecture = params && params.Architecture || null;

        this.ImageState = params && params.ImageState || null;

        this.Platform = params && params.Platform || null;

        this.ImageCreator = params && params.ImageCreator || null;

        this.ImageSource = params && params.ImageSource || null;

        this.SyncPercent = params && params.SyncPercent || null;

        this.IsSupportCloudinit = params && params.IsSupportCloudinit || null;

        this.SnapshotSet = params && params.SnapshotSet || null;

    }
}

/**
 * DescribeDisasterRecoverGroupQuota返回参数结构体
 * @class
 */
export class DescribeDisasterRecoverGroupQuotaResponse {

    /**
      * 可创建置放群组数量的上限。
      */
    GroupQuota?: number;

    /**
      * 当前用户已经创建的置放群组数量。
      */
    CurrentNum?: number;

    /**
      * 物理机类型容灾组内实例的配额数。
      */
    CvmInHostGroupQuota?: number;

    /**
      * 交换机类型容灾组内实例的配额数。
      */
    CvmInSwGroupQuota?: number;

    /**
      * 机架类型容灾组内实例的配额数。
      */
    CvmInRackGroupQuota?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 可创建置放群组数量的上限。
      */
    GroupQuota?: number;

    /**
      * 当前用户已经创建的置放群组数量。
      */
    CurrentNum?: number;

    /**
      * 物理机类型容灾组内实例的配额数。
      */
    CvmInHostGroupQuota?: number;

    /**
      * 交换机类型容灾组内实例的配额数。
      */
    CvmInSwGroupQuota?: number;

    /**
      * 机架类型容灾组内实例的配额数。
      */
    CvmInRackGroupQuota?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.GroupQuota = params && params.GroupQuota || null;

        this.CurrentNum = params && params.CurrentNum || null;

        this.CvmInHostGroupQuota = params && params.CvmInHostGroupQuota || null;

        this.CvmInSwGroupQuota = params && params.CvmInSwGroupQuota || null;

        this.CvmInRackGroupQuota = params && params.CvmInRackGroupQuota || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeRegions请求参数结构体
 * @class
 */
export class DescribeRegionsRequest {


    constructor(params: {


    }){

    }
}

/**
 * CreateDisasterRecoverGroup请求参数结构体
 * @class
 */
export class CreateDisasterRecoverGroupRequest {

    /**
      * 分散置放群组名称，长度1-60个字符，支持中、英文。
      */
    Name: string;

    /**
      * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
      */
    Type: string;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;

    constructor(params: {

    /**
      * 分散置放群组名称，长度1-60个字符，支持中、英文。
      */
    Name: string;

    /**
      * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
      */
    Type: string;

    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。<br>更多详细信息请参阅：如何保证幂等性。
      */
    ClientToken?: string;

    }){

        this.Name = params && params.Name || null;

        this.Type = params && params.Type || null;

        this.ClientToken = params && params.ClientToken || null;

    }
}

/**
 * DescribeReservedInstances返回参数结构体
 * @class
 */
export class DescribeReservedInstancesResponse {

    /**
      * 符合条件的预留实例计费数量。
      */
    TotalCount?: number;

    /**
      * 符合条件的预留实例计费列表。
      */
    ReservedInstancesSet?: Array<ReservedInstances>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 符合条件的预留实例计费数量。
      */
    TotalCount?: number;

    /**
      * 符合条件的预留实例计费列表。
      */
    ReservedInstancesSet?: Array<ReservedInstances>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.ReservedInstancesSet = params && params.ReservedInstancesSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeImportImageOs返回参数结构体
 * @class
 */
export class DescribeImportImageOsResponse {

    /**
      * 支持的导入镜像的操作系统类型。
      */
    ImportImageOsListSupported?: ImageOsList;

    /**
      * 支持的导入镜像的操作系统版本。
      */
    ImportImageOsVersionSet?: Array<OsVersion>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 支持的导入镜像的操作系统类型。
      */
    ImportImageOsListSupported?: ImageOsList;

    /**
      * 支持的导入镜像的操作系统版本。
      */
    ImportImageOsVersionSet?: Array<OsVersion>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.ImportImageOsListSupported = params && params.ImportImageOsListSupported || null;

        this.ImportImageOsVersionSet = params && params.ImportImageOsVersionSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyKeyPairAttribute返回参数结构体
 * @class
 */
export class ModifyKeyPairAttributeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述了数据盘的信息
 * @class
 */
export class DataDisk {

    /**
      * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
      */
    DiskSize: number;

    /**
      * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。<br><br>该参数对`ResizeInstanceDisk`接口无效。
      */
    DiskType?: string;

    /**
      * 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID，暂时不支持该参数。
      */
    DiskId?: string;

    /**
      * 数据盘是否随子机销毁。取值范围：
<li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘
<li>FALSE：子机销毁时，保留数据盘<br>
默认取值：TRUE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteWithInstance?: boolean;

    /**
      * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotId?: string;

    /**
      * 数据盘是加密。取值范围：
<li>TRUE：加密
<li>FALSE：不加密<br>
默认取值：FALSE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Encrypt?: boolean;

    /**
      * 自定义CMK对应的ID，取值为UUID或者类似kms-abcd1234。用于加密云盘。

该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KmsKeyId?: string;

    constructor(params: {

    /**
      * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
      */
    DiskSize: number;

    /**
      * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><br>默认取值：LOCAL_BASIC。<br><br>该参数对`ResizeInstanceDisk`接口无效。
      */
    DiskType?: string;

    /**
      * 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID，暂时不支持该参数。
      */
    DiskId?: string;

    /**
      * 数据盘是否随子机销毁。取值范围：
<li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘
<li>FALSE：子机销毁时，保留数据盘<br>
默认取值：TRUE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteWithInstance?: boolean;

    /**
      * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotId?: string;

    /**
      * 数据盘是加密。取值范围：
<li>TRUE：加密
<li>FALSE：不加密<br>
默认取值：FALSE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Encrypt?: boolean;

    /**
      * 自定义CMK对应的ID，取值为UUID或者类似kms-abcd1234。用于加密云盘。

该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KmsKeyId?: string;

    }){

        this.DiskSize = params && params.DiskSize || null;

        this.DiskType = params && params.DiskType || null;

        this.DiskId = params && params.DiskId || null;

        this.DeleteWithInstance = params && params.DeleteWithInstance || null;

        this.SnapshotId = params && params.SnapshotId || null;

        this.Encrypt = params && params.Encrypt || null;

        this.KmsKeyId = params && params.KmsKeyId || null;

    }
}

/**
 * DescribeKeyPairs请求参数结构体
 * @class
 */
export class DescribeKeyPairsRequest {

    /**
      * 密钥对ID，密钥对ID形如：`skey-11112222`（此接口支持同时传入多个ID进行过滤。此参数的具体格式可参考 API [简介](https://cloud.tencent.com/document/api/213/15688)的 `id.N` 一节）。参数不支持同时指定 `KeyIds` 和 `Filters`。密钥对ID可以通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询。
      */
    KeyIds?: Array<string>;

    /**
      * 过滤条件。
<li> project-id - Integer - 是否必填：否 -（过滤条件）按照项目ID过滤。可以通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID，或者调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的projectId获取项目ID。</li>
<li> key-name - String - 是否必填：否 -（过滤条件）按照密钥对名称过滤。</li>参数不支持同时指定 `KeyIds` 和 `Filters`。
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    constructor(params: {

    /**
      * 密钥对ID，密钥对ID形如：`skey-11112222`（此接口支持同时传入多个ID进行过滤。此参数的具体格式可参考 API [简介](https://cloud.tencent.com/document/api/213/15688)的 `id.N` 一节）。参数不支持同时指定 `KeyIds` 和 `Filters`。密钥对ID可以通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询。
      */
    KeyIds?: Array<string>;

    /**
      * 过滤条件。
<li> project-id - Integer - 是否必填：否 -（过滤条件）按照项目ID过滤。可以通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID，或者调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的projectId获取项目ID。</li>
<li> key-name - String - 是否必填：否 -（过滤条件）按照密钥对名称过滤。</li>参数不支持同时指定 `KeyIds` 和 `Filters`。
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    }){

        this.KeyIds = params && params.KeyIds || null;

        this.Filters = params && params.Filters || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

    }
}

/**
 * 描述了单台实例操作次数限制
 * @class
 */
export class OperationCountLimit {

    /**
      * 实例操作。取值范围：<br><li>`INSTANCE_DEGRADE`：降配操作<br><li>`INTERNET_CHARGE_TYPE_CHANGE`：修改网络带宽计费模式
      */
    Operation: string;

    /**
      * 实例ID。
      */
    InstanceId: string;

    /**
      * 当前已使用次数，如果返回值为-1表示该操作无次数限制。
      */
    CurrentCount: number;

    /**
      * 操作次数最高额度，如果返回值为-1表示该操作无次数限制，如果返回值为0表示不支持调整配置。
      */
    LimitCount: number;

    constructor(params: {

    /**
      * 实例操作。取值范围：<br><li>`INSTANCE_DEGRADE`：降配操作<br><li>`INTERNET_CHARGE_TYPE_CHANGE`：修改网络带宽计费模式
      */
    Operation: string;

    /**
      * 实例ID。
      */
    InstanceId: string;

    /**
      * 当前已使用次数，如果返回值为-1表示该操作无次数限制。
      */
    CurrentCount: number;

    /**
      * 操作次数最高额度，如果返回值为-1表示该操作无次数限制，如果返回值为0表示不支持调整配置。
      */
    LimitCount: number;

    }){

        this.Operation = params && params.Operation || null;

        this.InstanceId = params && params.InstanceId || null;

        this.CurrentCount = params && params.CurrentCount || null;

        this.LimitCount = params && params.LimitCount || null;

    }
}

/**
 * DeleteDisasterRecoverGroups返回参数结构体
 * @class
 */
export class DeleteDisasterRecoverGroupsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * cdh实例详细信息
 * @class
 */
export class HostItem {

    /**
      * cdh实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
      */
    Placement?: Placement;

    /**
      * cdh实例id
      */
    HostId?: string;

    /**
      * cdh实例类型
      */
    HostType?: string;

    /**
      * cdh实例名称
      */
    HostName?: string;

    /**
      * cdh实例付费模式
      */
    HostChargeType?: string;

    /**
      * cdh实例自动续费标记
      */
    RenewFlag?: string;

    /**
      * cdh实例创建时间
      */
    CreatedTime?: string;

    /**
      * cdh实例过期时间
      */
    ExpiredTime?: string;

    /**
      * cdh实例上已创建云子机的实例id列表
      */
    InstanceIds?: Array<string>;

    /**
      * cdh实例状态
      */
    HostState?: string;

    /**
      * cdh实例ip
      */
    HostIp?: string;

    /**
      * cdh实例资源信息
      */
    HostResource?: HostResource;

    /**
      * 专用宿主机所属的围笼ID。该字段仅对金融专区围笼内的专用宿主机有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CageId: string;

    constructor(params: {

    /**
      * cdh实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。
      */
    Placement?: Placement;

    /**
      * cdh实例id
      */
    HostId?: string;

    /**
      * cdh实例类型
      */
    HostType?: string;

    /**
      * cdh实例名称
      */
    HostName?: string;

    /**
      * cdh实例付费模式
      */
    HostChargeType?: string;

    /**
      * cdh实例自动续费标记
      */
    RenewFlag?: string;

    /**
      * cdh实例创建时间
      */
    CreatedTime?: string;

    /**
      * cdh实例过期时间
      */
    ExpiredTime?: string;

    /**
      * cdh实例上已创建云子机的实例id列表
      */
    InstanceIds?: Array<string>;

    /**
      * cdh实例状态
      */
    HostState?: string;

    /**
      * cdh实例ip
      */
    HostIp?: string;

    /**
      * cdh实例资源信息
      */
    HostResource?: HostResource;

    /**
      * 专用宿主机所属的围笼ID。该字段仅对金融专区围笼内的专用宿主机有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CageId: string;

    }){

        this.Placement = params && params.Placement || null;

        this.HostId = params && params.HostId || null;

        this.HostType = params && params.HostType || null;

        this.HostName = params && params.HostName || null;

        this.HostChargeType = params && params.HostChargeType || null;

        this.RenewFlag = params && params.RenewFlag || null;

        this.CreatedTime = params && params.CreatedTime || null;

        this.ExpiredTime = params && params.ExpiredTime || null;

        this.InstanceIds = params && params.InstanceIds || null;

        this.HostState = params && params.HostState || null;

        this.HostIp = params && params.HostIp || null;

        this.HostResource = params && params.HostResource || null;

        this.CageId = params && params.CageId || null;

    }
}

/**
 * 扩展数据
 * @class
 */
export class Externals {

    /**
      * 释放地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseAddress?: boolean;

    /**
      * 不支持的网络类型，取值范围：<br><li>BASIC：基础网络<br><li>VPC1.0：私有网络VPC1.0
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnsupportNetworks?: Array<string>;

    /**
      * HDD本地存储属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageBlockAttr?: StorageBlock;

    constructor(params: {

    /**
      * 释放地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseAddress?: boolean;

    /**
      * 不支持的网络类型，取值范围：<br><li>BASIC：基础网络<br><li>VPC1.0：私有网络VPC1.0
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnsupportNetworks?: Array<string>;

    /**
      * HDD本地存储属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageBlockAttr?: StorageBlock;

    }){

        this.ReleaseAddress = params && params.ReleaseAddress || null;

        this.UnsupportNetworks = params && params.UnsupportNetworks || null;

        this.StorageBlockAttr = params && params.StorageBlockAttr || null;

    }
}

/**
 * InquiryPriceModifyInstancesChargeType请求参数结构体
 * @class
 */
export class InquiryPriceModifyInstancesChargeTypeRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月。
      */
    InstanceChargeType: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月。
      */
    InstanceChargeType: string;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
      */
    InstanceChargePrepaid?: InstanceChargePrepaid;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceChargeType = params && params.InstanceChargeType || null;

        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;

    }
}

/**
 * CreateImage请求参数结构体
 * @class
 */
export class CreateImageRequest {

    /**
      * 镜像名称
      */
    ImageName: string;

    /**
      * 需要制作镜像的实例ID。
      */
    InstanceId?: string;

    /**
      * 镜像描述
      */
    ImageDescription?: string;

    /**
      * 是否执行强制关机以制作镜像。
取值范围：<br><li>TRUE：表示关机之后制作镜像<br><li>FALSE：表示开机状态制作镜像<br><br>默认取值：FALSE。<br><br>开机状态制作镜像，可能导致部分数据未备份，影响数据安全。
      */
    ForcePoweroff?: string;

    /**
      * 创建Windows镜像时是否启用Sysprep
      */
    Sysprep?: string;

    /**
      * 基于实例创建整机镜像时，指定包含在镜像里的数据盘Id
      */
    DataDiskIds?: Array<string>;

    /**
      * 基于快照创建镜像，指定快照ID，必须包含一个系统盘快照。不可与InstanceId同时传入。
      */
    SnapshotIds?: Array<string>;

    /**
      * 检测本次请求的是否成功，但不会对操作的资源产生任何影响
      */
    DryRun?: boolean;

    constructor(params: {

    /**
      * 镜像名称
      */
    ImageName: string;

    /**
      * 需要制作镜像的实例ID。
      */
    InstanceId?: string;

    /**
      * 镜像描述
      */
    ImageDescription?: string;

    /**
      * 是否执行强制关机以制作镜像。
取值范围：<br><li>TRUE：表示关机之后制作镜像<br><li>FALSE：表示开机状态制作镜像<br><br>默认取值：FALSE。<br><br>开机状态制作镜像，可能导致部分数据未备份，影响数据安全。
      */
    ForcePoweroff?: string;

    /**
      * 创建Windows镜像时是否启用Sysprep
      */
    Sysprep?: string;

    /**
      * 基于实例创建整机镜像时，指定包含在镜像里的数据盘Id
      */
    DataDiskIds?: Array<string>;

    /**
      * 基于快照创建镜像，指定快照ID，必须包含一个系统盘快照。不可与InstanceId同时传入。
      */
    SnapshotIds?: Array<string>;

    /**
      * 检测本次请求的是否成功，但不会对操作的资源产生任何影响
      */
    DryRun?: boolean;

    }){

        this.ImageName = params && params.ImageName || null;

        this.InstanceId = params && params.InstanceId || null;

        this.ImageDescription = params && params.ImageDescription || null;

        this.ForcePoweroff = params && params.ForcePoweroff || null;

        this.Sysprep = params && params.Sysprep || null;

        this.DataDiskIds = params && params.DataDiskIds || null;

        this.SnapshotIds = params && params.SnapshotIds || null;

        this.DryRun = params && params.DryRun || null;

    }
}

/**
 * 描述实例的信息
 * @class
 */
export class Instance {

    /**
      * 实例所在的位置。
      */
    Placement?: Placement;

    /**
      * 实例`ID`。
      */
    InstanceId?: string;

    /**
      * 实例机型。
      */
    InstanceType?: string;

    /**
      * 实例的CPU核数，单位：核。
      */
    CPU?: number;

    /**
      * 实例内存容量，单位：`GB`。
      */
    Memory?: number;

    /**
      * 实例业务状态。取值范围：<br><li>NORMAL：表示正常状态的实例<br><li>EXPIRED：表示过期的实例<br><li>PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
      */
    RestrictState?: string;

    /**
      * 实例名称。
      */
    InstanceName?: string;

    /**
      * 实例计费模式。取值范围：<br><li>`PREPAID`：表示预付费，即包年包月<br><li>`POSTPAID_BY_HOUR`：表示后付费，即按量计费<br><li>`CDHPAID`：`CDH`付费，即只对`CDH`计费，不对`CDH`上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
      */
    InstanceChargeType?: string;

    /**
      * 实例系统盘信息。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例数据盘信息。只包含随实例购买的数据盘。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 实例主网卡的内网`IP`列表。
      */
    PrivateIpAddresses?: Array<string>;

    /**
      * 实例主网卡的公网`IP`列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses?: Array<string>;

    /**
      * 实例带宽信息。
      */
    InternetAccessible?: InternetAccessible;

    /**
      * 实例所属虚拟私有网络信息。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;

    /**
      * 生产实例所使用的镜像`ID`。
      */
    ImageId?: string;

    /**
      * 自动续费标识。取值范围：<br><li>`NOTIFY_AND_MANUAL_RENEW`：表示通知即将过期，但不自动续费<br><li>`NOTIFY_AND_AUTO_RENEW`：表示通知即将过期，而且自动续费<br><li>`DISABLE_NOTIFY_AND_MANUAL_RENEW`：表示不通知即将过期，也不自动续费。
<br><li>注意：后付费模式本项为null
      */
    RenewFlag?: string;

    /**
      * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    CreatedTime?: string;

    /**
      * 到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。注意：后付费模式本项为null
      */
    ExpiredTime?: string;

    /**
      * 操作系统名称。
      */
    OsName: string;

    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。
      */
    SecurityGroupIds: Array<string>;

    /**
      * 实例登录设置。目前只返回实例所关联的密钥。
      */
    LoginSettings: LoginSettings;

    /**
      * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
      */
    InstanceState: string;

    /**
      * 实例关联的标签列表。
      */
    Tags: Array<Tag>;

    /**
      * 实例的关机计费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<li>NOT_APPLICABLE：实例处于非关机状态或者不适用关机停止计费的条件<br>
      */
    StopChargingMode: string;

    /**
      * 实例全局唯一ID
      */
    Uuid: string;

    /**
      * 实例的最新操作。例：StopInstances、ResetInstance。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperation: string;

    /**
      * 实例的最新操作状态。取值范围：<br><li>SUCCESS：表示操作成功<br><li>OPERATING：表示操作执行中<br><li>FAILED：表示操作失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperationState: string;

    /**
      * 实例最新操作的唯一请求 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperationRequestId: string;

    /**
      * 分散置放群组ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisasterRecoverGroupId: string;

    /**
      * 实例的IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPv6Addresses: Array<string>;

    /**
      * CAM角色名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CamRoleName: string;

    /**
      * 高性能计算集群`ID`。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HpcClusterId: string;

    /**
      * 高性能计算集群`IP`列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RdmaIpAddresses: Array<string>;

    constructor(params: {

    /**
      * 实例所在的位置。
      */
    Placement?: Placement;

    /**
      * 实例`ID`。
      */
    InstanceId?: string;

    /**
      * 实例机型。
      */
    InstanceType?: string;

    /**
      * 实例的CPU核数，单位：核。
      */
    CPU?: number;

    /**
      * 实例内存容量，单位：`GB`。
      */
    Memory?: number;

    /**
      * 实例业务状态。取值范围：<br><li>NORMAL：表示正常状态的实例<br><li>EXPIRED：表示过期的实例<br><li>PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
      */
    RestrictState?: string;

    /**
      * 实例名称。
      */
    InstanceName?: string;

    /**
      * 实例计费模式。取值范围：<br><li>`PREPAID`：表示预付费，即包年包月<br><li>`POSTPAID_BY_HOUR`：表示后付费，即按量计费<br><li>`CDHPAID`：`CDH`付费，即只对`CDH`计费，不对`CDH`上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
      */
    InstanceChargeType?: string;

    /**
      * 实例系统盘信息。
      */
    SystemDisk?: SystemDisk;

    /**
      * 实例数据盘信息。只包含随实例购买的数据盘。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 实例主网卡的内网`IP`列表。
      */
    PrivateIpAddresses?: Array<string>;

    /**
      * 实例主网卡的公网`IP`列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses?: Array<string>;

    /**
      * 实例带宽信息。
      */
    InternetAccessible?: InternetAccessible;

    /**
      * 实例所属虚拟私有网络信息。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;

    /**
      * 生产实例所使用的镜像`ID`。
      */
    ImageId?: string;

    /**
      * 自动续费标识。取值范围：<br><li>`NOTIFY_AND_MANUAL_RENEW`：表示通知即将过期，但不自动续费<br><li>`NOTIFY_AND_AUTO_RENEW`：表示通知即将过期，而且自动续费<br><li>`DISABLE_NOTIFY_AND_MANUAL_RENEW`：表示不通知即将过期，也不自动续费。
<br><li>注意：后付费模式本项为null
      */
    RenewFlag?: string;

    /**
      * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    CreatedTime?: string;

    /**
      * 到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。注意：后付费模式本项为null
      */
    ExpiredTime?: string;

    /**
      * 操作系统名称。
      */
    OsName: string;

    /**
      * 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。
      */
    SecurityGroupIds: Array<string>;

    /**
      * 实例登录设置。目前只返回实例所关联的密钥。
      */
    LoginSettings: LoginSettings;

    /**
      * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
      */
    InstanceState: string;

    /**
      * 实例关联的标签列表。
      */
    Tags: Array<Tag>;

    /**
      * 实例的关机计费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<li>NOT_APPLICABLE：实例处于非关机状态或者不适用关机停止计费的条件<br>
      */
    StopChargingMode: string;

    /**
      * 实例全局唯一ID
      */
    Uuid: string;

    /**
      * 实例的最新操作。例：StopInstances、ResetInstance。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperation: string;

    /**
      * 实例的最新操作状态。取值范围：<br><li>SUCCESS：表示操作成功<br><li>OPERATING：表示操作执行中<br><li>FAILED：表示操作失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperationState: string;

    /**
      * 实例最新操作的唯一请求 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperationRequestId: string;

    /**
      * 分散置放群组ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisasterRecoverGroupId: string;

    /**
      * 实例的IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPv6Addresses: Array<string>;

    /**
      * CAM角色名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CamRoleName: string;

    /**
      * 高性能计算集群`ID`。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HpcClusterId: string;

    /**
      * 高性能计算集群`IP`列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RdmaIpAddresses: Array<string>;

    }){

        this.Placement = params && params.Placement || null;

        this.InstanceId = params && params.InstanceId || null;

        this.InstanceType = params && params.InstanceType || null;

        this.CPU = params && params.CPU || null;

        this.Memory = params && params.Memory || null;

        this.RestrictState = params && params.RestrictState || null;

        this.InstanceName = params && params.InstanceName || null;

        this.InstanceChargeType = params && params.InstanceChargeType || null;

        this.SystemDisk = params && params.SystemDisk || null;

        this.DataDisks = params && params.DataDisks || null;

        this.PrivateIpAddresses = params && params.PrivateIpAddresses || null;

        this.PublicIpAddresses = params && params.PublicIpAddresses || null;

        this.InternetAccessible = params && params.InternetAccessible || null;

        this.VirtualPrivateCloud = params && params.VirtualPrivateCloud || null;

        this.ImageId = params && params.ImageId || null;

        this.RenewFlag = params && params.RenewFlag || null;

        this.CreatedTime = params && params.CreatedTime || null;

        this.ExpiredTime = params && params.ExpiredTime || null;

        this.OsName = params && params.OsName || null;

        this.SecurityGroupIds = params && params.SecurityGroupIds || null;

        this.LoginSettings = params && params.LoginSettings || null;

        this.InstanceState = params && params.InstanceState || null;

        this.Tags = params && params.Tags || null;

        this.StopChargingMode = params && params.StopChargingMode || null;

        this.Uuid = params && params.Uuid || null;

        this.LatestOperation = params && params.LatestOperation || null;

        this.LatestOperationState = params && params.LatestOperationState || null;

        this.LatestOperationRequestId = params && params.LatestOperationRequestId || null;

        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;

        this.IPv6Addresses = params && params.IPv6Addresses || null;

        this.CamRoleName = params && params.CamRoleName || null;

        this.HpcClusterId = params && params.HpcClusterId || null;

        this.RdmaIpAddresses = params && params.RdmaIpAddresses || null;

    }
}

/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 * @class
 */
export class EnhancedService {

    /**
      * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
      */
    SecurityService?: RunSecurityServiceEnabled;

    /**
      * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
      */
    MonitorService?: RunMonitorServiceEnabled;

    constructor(params: {

    /**
      * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
      */
    SecurityService?: RunSecurityServiceEnabled;

    /**
      * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
      */
    MonitorService?: RunMonitorServiceEnabled;

    }){

        this.SecurityService = params && params.SecurityService || null;

        this.MonitorService = params && params.MonitorService || null;

    }
}

/**
 * CreateKeyPair返回参数结构体
 * @class
 */
export class CreateKeyPairResponse {

    /**
      * 密钥对信息。
      */
    KeyPair?: KeyPair;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 密钥对信息。
      */
    KeyPair?: KeyPair;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.KeyPair = params && params.KeyPair || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
export class DescribeInstanceVncUrlResponse {

    /**
      * 实例的管理终端地址。
      */
    InstanceVncUrl?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 实例的管理终端地址。
      */
    InstanceVncUrl?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InstanceVncUrl = params && params.InstanceVncUrl || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeReservedInstancesOfferings请求参数结构体
 * @class
 */
export class DescribeReservedInstancesOfferingsRequest {

    /**
      * 试运行, 默认为 false。
      */
    DryRun?: boolean;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    /**
      * 以最大有效期作为过滤参数。
计量单位: 秒
默认为 94608000。
      */
    MaxDuration?: number;

    /**
      * 以最小有效期作为过滤参数。
计量单位: 秒
默认为 2592000。
      */
    MinDuration?: number;

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照预留实例计费可购买的【<strong>可用区</strong>】进行过滤。形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">按照预留实例计费【<strong>有效期</strong>】即预留实例计费购买时长进行过滤。形如：31536000。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">计量单位：秒</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：31536000 (1年) | 94608000（3年）</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费类型</strong>】进行过滤。形如：S3.MEDIUM4。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>付款类型</strong>】进行过滤。形如：All Upfront (预付全部费用)。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：All Upfront (预付全部费用)</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">按照预留实例计费的【<strong>平台描述</strong>】（即操作系统）进行过滤。形如：linux。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：linux</p>
<li><strong>reserved-instances-offering-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费配置ID</strong>】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    constructor(params: {

    /**
      * 试运行, 默认为 false。
      */
    DryRun?: boolean;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    /**
      * 以最大有效期作为过滤参数。
计量单位: 秒
默认为 94608000。
      */
    MaxDuration?: number;

    /**
      * 以最小有效期作为过滤参数。
计量单位: 秒
默认为 2592000。
      */
    MinDuration?: number;

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照预留实例计费可购买的【<strong>可用区</strong>】进行过滤。形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">按照预留实例计费【<strong>有效期</strong>】即预留实例计费购买时长进行过滤。形如：31536000。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">计量单位：秒</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：31536000 (1年) | 94608000（3年）</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费类型</strong>】进行过滤。形如：S3.MEDIUM4。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>付款类型</strong>】进行过滤。形如：All Upfront (预付全部费用)。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：All Upfront (预付全部费用)</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">按照预留实例计费的【<strong>平台描述</strong>】（即操作系统）进行过滤。形如：linux。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：linux</p>
<li><strong>reserved-instances-offering-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费配置ID</strong>】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    }){

        this.DryRun = params && params.DryRun || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

        this.MaxDuration = params && params.MaxDuration || null;

        this.MinDuration = params && params.MinDuration || null;

        this.Filters = params && params.Filters || null;

    }
}

/**
 * DescribeDisasterRecoverGroups返回参数结构体
 * @class
 */
export class DescribeDisasterRecoverGroupsResponse {

    /**
      * 分散置放群组信息列表。
      */
    DisasterRecoverGroupSet?: Array<DisasterRecoverGroup>;

    /**
      * 用户置放群组总量。
      */
    TotalCount?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 分散置放群组信息列表。
      */
    DisasterRecoverGroupSet?: Array<DisasterRecoverGroup>;

    /**
      * 用户置放群组总量。
      */
    TotalCount?: number;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.DisasterRecoverGroupSet = params && params.DisasterRecoverGroupSet || null;

        this.TotalCount = params && params.TotalCount || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
export class RunSecurityServiceEnabled {

    /**
      * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
      */
    Enabled?: boolean;

    constructor(params: {

    /**
      * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
      */
    Enabled?: boolean;

    }){

        this.Enabled = params && params.Enabled || null;

    }
}

/**
 * 定时任务
 * @class
 */
export class ActionTimer {

    /**
      * 扩展数据
      */
    Externals: Externals;

    /**
      * 定时器名称，目前仅支持销毁一个值：TerminateInstances。
      */
    TimerAction?: string;

    /**
      * 执行时间，格式形如：2018-5-29 11:26:40,执行时间必须大于当前时间5分钟。
      */
    ActionTime?: string;

    constructor(params: {

    /**
      * 扩展数据
      */
    Externals: Externals;

    /**
      * 定时器名称，目前仅支持销毁一个值：TerminateInstances。
      */
    TimerAction?: string;

    /**
      * 执行时间，格式形如：2018-5-29 11:26:40,执行时间必须大于当前时间5分钟。
      */
    ActionTime?: string;

    }){

        this.Externals = params && params.Externals || null;

        this.TimerAction = params && params.TimerAction || null;

        this.ActionTime = params && params.ActionTime || null;

    }
}

/**
 * 创建资源实例时同时绑定的标签对说明
 * @class
 */
export class TagSpecification {

    /**
      * 标签绑定的资源类型，当前支持类型："instance"和"host"
      */
    ResourceType: string;

    /**
      * 标签对列表
      */
    Tags: Array<Tag>;

    constructor(params: {

    /**
      * 标签绑定的资源类型，当前支持类型："instance"和"host"
      */
    ResourceType: string;

    /**
      * 标签对列表
      */
    Tags: Array<Tag>;

    }){

        this.ResourceType = params && params.ResourceType || null;

        this.Tags = params && params.Tags || null;

    }
}

/**
 * ResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
export class ResetInstancesInternetMaxBandwidthRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的 `InstanceId` 获取。 每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。
      */
    InstanceIds: Array<string>;

    /**
      * 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持 `InternetMaxBandwidthOut` 参数。
      */
    InternetAccessible: InternetAccessible;

    /**
      * 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    StartTime?: string;

    /**
      * 带宽生效的终止时间。格式： `YYYY-MM-DD` ，例如：`2016-10-30` 。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过 [`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    EndTime?: string;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的 `InstanceId` 获取。 每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。
      */
    InstanceIds: Array<string>;

    /**
      * 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持 `InternetMaxBandwidthOut` 参数。
      */
    InternetAccessible: InternetAccessible;

    /**
      * 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    StartTime?: string;

    /**
      * 带宽生效的终止时间。格式： `YYYY-MM-DD` ，例如：`2016-10-30` 。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过 [`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。
      */
    EndTime?: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InternetAccessible = params && params.InternetAccessible || null;

        this.StartTime = params && params.StartTime || null;

        this.EndTime = params && params.EndTime || null;

    }
}

/**
 * 描述实例的机型族配置信息
形如：{'InstanceFamilyName': '标准型S1', 'InstanceFamily': 'S1'}、{'InstanceFamilyName': '网络优化型N1', 'InstanceFamily': 'N1'}、{'InstanceFamilyName': '高IO型I1', 'InstanceFamily': 'I1'}等。
 * @class
 */
export class InstanceFamilyConfig {

    /**
      * 机型族名称的中文全称。
      */
    InstanceFamilyName: string;

    /**
      * 机型族名称的英文简称。
      */
    InstanceFamily: string;

    constructor(params: {

    /**
      * 机型族名称的中文全称。
      */
    InstanceFamilyName: string;

    /**
      * 机型族名称的英文简称。
      */
    InstanceFamily: string;

    }){

        this.InstanceFamilyName = params && params.InstanceFamilyName || null;

        this.InstanceFamily = params && params.InstanceFamily || null;

    }
}

/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
export class AssociateSecurityGroupsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ImportImage请求参数结构体
 * @class
 */
export class ImportImageRequest {

    /**
      * 导入镜像的操作系统架构，`x86_64` 或 `i386`
      */
    Architecture: string;

    /**
      * 导入镜像的操作系统类型，通过`DescribeImportImageOs`获取
      */
    OsType: string;

    /**
      * 导入镜像的操作系统版本，通过`DescribeImportImageOs`获取
      */
    OsVersion: string;

    /**
      * 导入镜像存放的cos地址
      */
    ImageUrl: string;

    /**
      * 镜像名称
      */
    ImageName: string;

    /**
      * 镜像描述
      */
    ImageDescription?: string;

    /**
      * 只检查参数，不执行任务
      */
    DryRun?: boolean;

    /**
      * 是否强制导入，参考[强制导入镜像](https://cloud.tencent.com/document/product/213/12849)
      */
    Force?: boolean;

    constructor(params: {

    /**
      * 导入镜像的操作系统架构，`x86_64` 或 `i386`
      */
    Architecture: string;

    /**
      * 导入镜像的操作系统类型，通过`DescribeImportImageOs`获取
      */
    OsType: string;

    /**
      * 导入镜像的操作系统版本，通过`DescribeImportImageOs`获取
      */
    OsVersion: string;

    /**
      * 导入镜像存放的cos地址
      */
    ImageUrl: string;

    /**
      * 镜像名称
      */
    ImageName: string;

    /**
      * 镜像描述
      */
    ImageDescription?: string;

    /**
      * 只检查参数，不执行任务
      */
    DryRun?: boolean;

    /**
      * 是否强制导入，参考[强制导入镜像](https://cloud.tencent.com/document/product/213/12849)
      */
    Force?: boolean;

    }){

        this.Architecture = params && params.Architecture || null;

        this.OsType = params && params.OsType || null;

        this.OsVersion = params && params.OsVersion || null;

        this.ImageUrl = params && params.ImageUrl || null;

        this.ImageName = params && params.ImageName || null;

        this.ImageDescription = params && params.ImageDescription || null;

        this.DryRun = params && params.DryRun || null;

        this.Force = params && params.Force || null;

    }
}

/**
 * 竞价相关选项
 * @class
 */
export class SpotMarketOptions {

    /**
      * 竞价出价
      */
    MaxPrice: string;

    /**
      * 竞价请求类型，当前仅支持类型：one-time
      */
    SpotInstanceType?: string;

    constructor(params: {

    /**
      * 竞价出价
      */
    MaxPrice: string;

    /**
      * 竞价请求类型，当前仅支持类型：one-time
      */
    SpotInstanceType?: string;

    }){

        this.MaxPrice = params && params.MaxPrice || null;

        this.SpotInstanceType = params && params.SpotInstanceType || null;

    }
}

/**
 * DescribeImportImageOs请求参数结构体
 * @class
 */
export class DescribeImportImageOsRequest {


    constructor(params: {


    }){

    }
}

/**
 * CreateKeyPair请求参数结构体
 * @class
 */
export class CreateKeyPairRequest {

    /**
      * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName: string;

    /**
      * 密钥对创建后所属的项目ID。
可以通过以下方式获取项目ID：
<li>通过项目列表查询项目ID。
<li>通过调用接口DescribeProject，取返回信息中的`projectId `获取项目ID。
      */
    ProjectId: number;

    constructor(params: {

    /**
      * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName: string;

    /**
      * 密钥对创建后所属的项目ID。
可以通过以下方式获取项目ID：
<li>通过项目列表查询项目ID。
<li>通过调用接口DescribeProject，取返回信息中的`projectId `获取项目ID。
      */
    ProjectId: number;

    }){

        this.KeyName = params && params.KeyName || null;

        this.ProjectId = params && params.ProjectId || null;

    }
}

/**
 * 描述实例的状态。状态类型详见[实例状态表](/document/api/213/15753#InstanceStatus)
 * @class
 */
export class InstanceStatus {

    /**
      * 实例`ID`。
      */
    InstanceId?: string;

    /**
      * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
      */
    InstanceState?: string;

    constructor(params: {

    /**
      * 实例`ID`。
      */
    InstanceId?: string;

    /**
      * 实例状态。取值范围：<br><li>PENDING：表示创建中<br></li><li>LAUNCH_FAILED：表示创建失败<br></li><li>RUNNING：表示运行中<br></li><li>STOPPED：表示关机<br></li><li>STARTING：表示开机中<br></li><li>STOPPING：表示关机中<br></li><li>REBOOTING：表示重启中<br></li><li>SHUTDOWN：表示停止待销毁<br></li><li>TERMINATING：表示销毁中。<br></li>
      */
    InstanceState?: string;

    }){

        this.InstanceId = params && params.InstanceId || null;

        this.InstanceState = params && params.InstanceState || null;

    }
}

/**
 * InquiryPriceRenewInstances返回参数结构体
 * @class
 */
export class InquiryPriceRenewInstancesResponse {

    /**
      * 该参数表示对应配置实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示对应配置实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * AllocateHosts返回参数结构体
 * @class
 */
export class AllocateHostsResponse {

    /**
      * 新创建云子机的实例id列表。
      */
    HostIdSet?: Array<string>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 新创建云子机的实例id列表。
      */
    HostIdSet?: Array<string>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.HostIdSet = params && params.HostIdSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeImageSharePermission请求参数结构体
 * @class
 */
export class DescribeImageSharePermissionRequest {

    /**
      * 需要共享的镜像Id
      */
    ImageId: string;

    constructor(params: {

    /**
      * 需要共享的镜像Id
      */
    ImageId: string;

    }){

        this.ImageId = params && params.ImageId || null;

    }
}

/**
 * 容灾组信息
 * @class
 */
export class DisasterRecoverGroup {

    /**
      * 分散置放群组id。
      */
    DisasterRecoverGroupId: string;

    /**
      * 分散置放群组名称，长度1-60个字符。
      */
    Name: string;

    /**
      * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
      */
    Type: string;

    /**
      * 分散置放群组内最大容纳云服务器数量。
      */
    CvmQuotaTotal: number;

    /**
      * 分散置放群组内云服务器当前数量。
      */
    CurrentNum: number;

    /**
      * 分散置放群组内，云服务器id列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceIds: Array<string>;

    /**
      * 分散置放群组创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;

    constructor(params: {

    /**
      * 分散置放群组id。
      */
    DisasterRecoverGroupId: string;

    /**
      * 分散置放群组名称，长度1-60个字符。
      */
    Name: string;

    /**
      * 分散置放群组类型，取值范围：<br><li>HOST：物理机<br><li>SW：交换机<br><li>RACK：机架
      */
    Type: string;

    /**
      * 分散置放群组内最大容纳云服务器数量。
      */
    CvmQuotaTotal: number;

    /**
      * 分散置放群组内云服务器当前数量。
      */
    CurrentNum: number;

    /**
      * 分散置放群组内，云服务器id列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceIds: Array<string>;

    /**
      * 分散置放群组创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;

    }){

        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;

        this.Name = params && params.Name || null;

        this.Type = params && params.Type || null;

        this.CvmQuotaTotal = params && params.CvmQuotaTotal || null;

        this.CurrentNum = params && params.CurrentNum || null;

        this.InstanceIds = params && params.InstanceIds || null;

        this.CreateTime = params && params.CreateTime || null;

    }
}

/**
 * InquiryPriceResetInstance返回参数结构体
 * @class
 */
export class InquiryPriceResetInstanceResponse {

    /**
      * 该参数表示重装成对应配置实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示重装成对应配置实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeInstanceTypeConfigs请求参数结构体
 * @class
 */
export class DescribeInstanceTypeConfigsRequest {

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>instance-family</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例机型系列</strong>】进行过滤。实例机型系列形如：S1、I1、M1等。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为1。
      */
    Filters?: Array<Filter>;

    constructor(params: {

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>instance-family</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例机型系列</strong>】进行过滤。实例机型系列形如：S1、I1、M1等。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为1。
      */
    Filters?: Array<Filter>;

    }){

        this.Filters = params && params.Filters || null;

    }
}

/**
 * DescribeImageSharePermission返回参数结构体
 * @class
 */
export class DescribeImageSharePermissionResponse {

    /**
      * 镜像共享信息
      */
    SharePermissionSet?: Array<SharePermission>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 镜像共享信息
      */
    SharePermissionSet?: Array<SharePermission>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.SharePermissionSet = params && params.SharePermissionSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyHostsAttribute返回参数结构体
 * @class
 */
export class ModifyHostsAttributeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeDisasterRecoverGroupQuota请求参数结构体
 * @class
 */
export class DescribeDisasterRecoverGroupQuotaRequest {


    constructor(params: {


    }){

    }
}

/**
 * StartInstances返回参数结构体
 * @class
 */
export class StartInstancesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesVpcAttribute请求参数结构体
 * @class
 */
export class ModifyInstancesVpcAttributeRequest {

    /**
      * 待操作的实例ID数组。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceIds: Array<string>;

    /**
      * 私有网络相关信息配置，通过该参数指定私有网络的ID，子网ID，私有网络ip等信息。<br><li>当指定私有网络ID和子网ID（子网必须在实例所在的可用区）与指定实例所在私有网络不一致时，会将实例迁移至指定的私有网络的子网下。<br><li>可通过`PrivateIpAddresses`指定私有网络子网IP，若需指定则所有已指定的实例均需要指定子网IP，此时`InstanceIds`与`PrivateIpAddresses`一一对应。<br><li>不指定`PrivateIpAddresses`时随机分配私有网络子网IP。
      */
    VirtualPrivateCloud: VirtualPrivateCloud;

    /**
      * 是否对运行中的实例选择强制关机。默认为TRUE。
      */
    ForceStop?: boolean;

    /**
      * 是否保留主机名。默认为FALSE。
      */
    ReserveHostName?: boolean;

    constructor(params: {

    /**
      * 待操作的实例ID数组。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceIds: Array<string>;

    /**
      * 私有网络相关信息配置，通过该参数指定私有网络的ID，子网ID，私有网络ip等信息。<br><li>当指定私有网络ID和子网ID（子网必须在实例所在的可用区）与指定实例所在私有网络不一致时，会将实例迁移至指定的私有网络的子网下。<br><li>可通过`PrivateIpAddresses`指定私有网络子网IP，若需指定则所有已指定的实例均需要指定子网IP，此时`InstanceIds`与`PrivateIpAddresses`一一对应。<br><li>不指定`PrivateIpAddresses`时随机分配私有网络子网IP。
      */
    VirtualPrivateCloud: VirtualPrivateCloud;

    /**
      * 是否对运行中的实例选择强制关机。默认为TRUE。
      */
    ForceStop?: boolean;

    /**
      * 是否保留主机名。默认为FALSE。
      */
    ReserveHostName?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.VirtualPrivateCloud = params && params.VirtualPrivateCloud || null;

        this.ForceStop = params && params.ForceStop || null;

        this.ReserveHostName = params && params.ReserveHostName || null;

    }
}

/**
 * DescribeReservedInstances请求参数结构体
 * @class
 */
export class DescribeReservedInstancesRequest {

    /**
      * 试运行。默认为 false。
      */
    DryRun?: boolean;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照预留实例计费可购买的【<strong>可用区</strong>】进行过滤。形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">按照预留实例计费【<strong>有效期</strong>】即预留实例计费购买时长进行过滤。形如：31536000。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">计量单位：秒</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：31536000 (1年) | 94608000（3年）</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费类型</strong>】进行过滤。形如：S3.MEDIUM4。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>付款类型</strong>】进行过滤。形如：All Upfront (预付全部费用)。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：All Upfront (预付全部费用)</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">按照预留实例计费的【<strong>平台描述</strong>】（即操作系统）进行过滤。形如：linux。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：linux</p>
<li><strong>reserved-instances-id</strong></li>
<p style="padding-left: 30px;">按照已购买【<strong>预留实例计费ID</strong>】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>state</strong></li>
<p style="padding-left: 30px;">按照已购买【<strong>预留实例计费状态</strong>】进行过滤。形如：active。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：active (以创建) | pending (等待被创建) | retired (过期)</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    constructor(params: {

    /**
      * 试运行。默认为 false。
      */
    DryRun?: boolean;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照预留实例计费可购买的【<strong>可用区</strong>】进行过滤。形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>duration</strong></li>
<p style="padding-left: 30px;">按照预留实例计费【<strong>有效期</strong>】即预留实例计费购买时长进行过滤。形如：31536000。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">计量单位：秒</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：31536000 (1年) | 94608000（3年）</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>预留实例计费类型</strong>】进行过滤。形如：S3.MEDIUM4。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a></p>
<li><strong>offering-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>付款类型</strong>】进行过滤。形如：All Upfront (预付全部费用)。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：All Upfront (预付全部费用)</p>
<li><strong>product-description</strong></li>
<p style="padding-left: 30px;">按照预留实例计费的【<strong>平台描述</strong>】（即操作系统）进行过滤。形如：linux。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：linux</p>
<li><strong>reserved-instances-id</strong></li>
<p style="padding-left: 30px;">按照已购买【<strong>预留实例计费ID</strong>】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>state</strong></li>
<p style="padding-left: 30px;">按照已购买【<strong>预留实例计费状态</strong>】进行过滤。形如：active。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：active (以创建) | pending (等待被创建) | retired (过期)</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    }){

        this.DryRun = params && params.DryRun || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

        this.Filters = params && params.Filters || null;

    }
}

/**
 * DescribeInternetChargeTypeConfigs返回参数结构体
 * @class
 */
export class DescribeInternetChargeTypeConfigsResponse {

    /**
      * 网络计费类型配置。
      */
    InternetChargeTypeConfigSet?: Array<InternetChargeTypeConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 网络计费类型配置。
      */
    InternetChargeTypeConfigSet?: Array<InternetChargeTypeConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InternetChargeTypeConfigSet = params && params.InternetChargeTypeConfigSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeZoneInstanceConfigInfos请求参数结构体
 * @class
 */
export class DescribeZoneInstanceConfigInfosRequest {

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>instance-family</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例机型系列</strong>】进行过滤。实例机型系列形如：S1、I1、M1等。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例机型</strong>】进行过滤。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/product/213/15749) 来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-charge-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例计费模式</strong>】进行过滤。(PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对[CDH](https://cloud.tencent.com/document/product/416)计费，不对[CDH](https://cloud.tencent.com/document/product/416)上的实例计费。)</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    constructor(params: {

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>instance-family</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例机型系列</strong>】进行过滤。实例机型系列形如：S1、I1、M1等。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例机型</strong>】进行过滤。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/product/213/15749) 来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-charge-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例计费模式</strong>】进行过滤。(PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对[CDH](https://cloud.tencent.com/document/product/416)计费，不对[CDH](https://cloud.tencent.com/document/product/416)上的实例计费。)</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    }){

        this.Filters = params && params.Filters || null;

    }
}

/**
 * DescribeZones返回参数结构体
 * @class
 */
export class DescribeZonesResponse {

    /**
      * 可用区数量。
      */
    TotalCount?: number;

    /**
      * 可用区列表信息。
      */
    ZoneSet?: Array<ZoneInfo>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 可用区数量。
      */
    TotalCount?: number;

    /**
      * 可用区列表信息。
      */
    ZoneSet?: Array<ZoneInfo>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.ZoneSet = params && params.ZoneSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述了单项的价格信息
 * @class
 */
export class ItemPrice {

    /**
      * 后续合计费用的原价，后付费模式使用，单位：元。<br><li>如返回了其他时间区间项，如UnitPriceSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPrice?: number;

    /**
      * 后续计价单元，后付费模式使用，可取值范围： <br><li>HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：<br><li>GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeUnit?: string;

    /**
      * 预支合计费用的原价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalPrice?: number;

    /**
      * 预支合计费用的折扣价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountPrice?: number;

    /**
      * 折扣，如20.0代表2折
注意：此字段可能返回 null，表示取不到有效值。
      */
    Discount: number;

    /**
      * 后续合计费用的折扣价，后付费模式使用，单位：元<br><li>如返回了其他时间区间项，如UnitPriceDiscountSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscount: number;

    /**
      * 使用时间区间在(96, 360)小时的后续合计费用的原价，后付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceSecondStep: number;

    /**
      * 使用时间区间在(96, 360)小时的后续合计费用的折扣价，后付费模式使用，单位：元
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscountSecondStep: number;

    /**
      * 使用时间区间在(360, ∞)小时的后续合计费用的原价，后付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceThirdStep: number;

    /**
      * 使用时间区间在(360, ∞)小时的后续合计费用的折扣价，后付费模式使用，单位：元
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscountThirdStep: number;

    constructor(params: {

    /**
      * 后续合计费用的原价，后付费模式使用，单位：元。<br><li>如返回了其他时间区间项，如UnitPriceSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPrice?: number;

    /**
      * 后续计价单元，后付费模式使用，可取值范围： <br><li>HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：<br><li>GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeUnit?: string;

    /**
      * 预支合计费用的原价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalPrice?: number;

    /**
      * 预支合计费用的折扣价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountPrice?: number;

    /**
      * 折扣，如20.0代表2折
注意：此字段可能返回 null，表示取不到有效值。
      */
    Discount: number;

    /**
      * 后续合计费用的折扣价，后付费模式使用，单位：元<br><li>如返回了其他时间区间项，如UnitPriceDiscountSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscount: number;

    /**
      * 使用时间区间在(96, 360)小时的后续合计费用的原价，后付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceSecondStep: number;

    /**
      * 使用时间区间在(96, 360)小时的后续合计费用的折扣价，后付费模式使用，单位：元
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscountSecondStep: number;

    /**
      * 使用时间区间在(360, ∞)小时的后续合计费用的原价，后付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceThirdStep: number;

    /**
      * 使用时间区间在(360, ∞)小时的后续合计费用的折扣价，后付费模式使用，单位：元
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscountThirdStep: number;

    }){

        this.UnitPrice = params && params.UnitPrice || null;

        this.ChargeUnit = params && params.ChargeUnit || null;

        this.OriginalPrice = params && params.OriginalPrice || null;

        this.DiscountPrice = params && params.DiscountPrice || null;

        this.Discount = params && params.Discount || null;

        this.UnitPriceDiscount = params && params.UnitPriceDiscount || null;

        this.UnitPriceSecondStep = params && params.UnitPriceSecondStep || null;

        this.UnitPriceDiscountSecondStep = params && params.UnitPriceDiscountSecondStep || null;

        this.UnitPriceThirdStep = params && params.UnitPriceThirdStep || null;

        this.UnitPriceDiscountThirdStep = params && params.UnitPriceDiscountThirdStep || null;

    }
}

/**
 * 描述实例机型配额信息。
 * @class
 */
export class InstanceTypeQuotaItem {

    /**
      * 可用区。
      */
    Zone: string;

    /**
      * 实例机型。
      */
    InstanceType: string;

    /**
      * 实例计费模式。取值范围： <br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费<br><li>CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对CDH计费，不对CDH上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
      */
    InstanceChargeType: string;

    /**
      * 网卡类型，例如：25代表25G网卡
      */
    NetworkCard: number;

    /**
      * 扩展属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Externals: Externals;

    /**
      * 实例的CPU核数，单位：核。
      */
    Cpu: number;

    /**
      * 实例内存容量，单位：`GB`。
      */
    Memory: number;

    /**
      * 实例机型系列。
      */
    InstanceFamily: string;

    /**
      * 机型名称。
      */
    TypeName: string;

    /**
      * 本地磁盘规格列表。当该参数返回为空值时，表示当前情况下无法创建本地盘。
      */
    LocalDiskTypeList: Array<LocalDiskType>;

    /**
      * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br><li>SOLD_OUT：表示实例已售罄。
      */
    Status: string;

    /**
      * 实例的售卖价格。
      */
    Price: ItemPrice;

    /**
      * 售罄原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SoldOutReason: string;

    /**
      * 内网带宽，单位Gbps。
      */
    InstanceBandwidth: number;

    /**
      * 网络收发包能力，单位万PPS。
      */
    InstancePps: number;

    /**
      * 本地存储块数量。
      */
    StorageBlockAmount: number;

    /**
      * 处理器型号。
      */
    CpuType: string;

    /**
      * 实例的GPU数量。
      */
    Gpu: number;

    /**
      * 实例的FPGA数量。
      */
    Fpga: number;

    /**
      * 实例备注信息。
      */
    Remark: string;

    constructor(params: {

    /**
      * 可用区。
      */
    Zone: string;

    /**
      * 实例机型。
      */
    InstanceType: string;

    /**
      * 实例计费模式。取值范围： <br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费<br><li>CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对CDH计费，不对CDH上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
      */
    InstanceChargeType: string;

    /**
      * 网卡类型，例如：25代表25G网卡
      */
    NetworkCard: number;

    /**
      * 扩展属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Externals: Externals;

    /**
      * 实例的CPU核数，单位：核。
      */
    Cpu: number;

    /**
      * 实例内存容量，单位：`GB`。
      */
    Memory: number;

    /**
      * 实例机型系列。
      */
    InstanceFamily: string;

    /**
      * 机型名称。
      */
    TypeName: string;

    /**
      * 本地磁盘规格列表。当该参数返回为空值时，表示当前情况下无法创建本地盘。
      */
    LocalDiskTypeList: Array<LocalDiskType>;

    /**
      * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br><li>SOLD_OUT：表示实例已售罄。
      */
    Status: string;

    /**
      * 实例的售卖价格。
      */
    Price: ItemPrice;

    /**
      * 售罄原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SoldOutReason: string;

    /**
      * 内网带宽，单位Gbps。
      */
    InstanceBandwidth: number;

    /**
      * 网络收发包能力，单位万PPS。
      */
    InstancePps: number;

    /**
      * 本地存储块数量。
      */
    StorageBlockAmount: number;

    /**
      * 处理器型号。
      */
    CpuType: string;

    /**
      * 实例的GPU数量。
      */
    Gpu: number;

    /**
      * 实例的FPGA数量。
      */
    Fpga: number;

    /**
      * 实例备注信息。
      */
    Remark: string;

    }){

        this.Zone = params && params.Zone || null;

        this.InstanceType = params && params.InstanceType || null;

        this.InstanceChargeType = params && params.InstanceChargeType || null;

        this.NetworkCard = params && params.NetworkCard || null;

        this.Externals = params && params.Externals || null;

        this.Cpu = params && params.Cpu || null;

        this.Memory = params && params.Memory || null;

        this.InstanceFamily = params && params.InstanceFamily || null;

        this.TypeName = params && params.TypeName || null;

        this.LocalDiskTypeList = params && params.LocalDiskTypeList || null;

        this.Status = params && params.Status || null;

        this.Price = params && params.Price || null;

        this.SoldOutReason = params && params.SoldOutReason || null;

        this.InstanceBandwidth = params && params.InstanceBandwidth || null;

        this.InstancePps = params && params.InstancePps || null;

        this.StorageBlockAmount = params && params.StorageBlockAmount || null;

        this.CpuType = params && params.CpuType || null;

        this.Gpu = params && params.Gpu || null;

        this.Fpga = params && params.Fpga || null;

        this.Remark = params && params.Remark || null;

    }
}

/**
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
export class ImageOsList {

    /**
      * 支持的windows操作系统。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Windows: Array<string>;

    /**
      * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    Linux: Array<string>;

    constructor(params: {

    /**
      * 支持的windows操作系统。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Windows: Array<string>;

    /**
      * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    Linux: Array<string>;

    }){

        this.Windows = params && params.Windows || null;

        this.Linux = params && params.Linux || null;

    }
}

/**
 * InquiryPriceRunInstances返回参数结构体
 * @class
 */
export class InquiryPriceRunInstancesResponse {

    /**
      * 该参数表示对应配置实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示对应配置实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeHosts请求参数结构体
 * @class
 */
export class DescribeHostsRequest {

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>project-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>项目ID</strong>】进行过滤，可通过调用[DescribeProject](https://cloud.tencent.com/document/api/378/4400)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/378/4398)创建新的项目。项目ID形如：1002189。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>[CDH](https://cloud.tencent.com/document/product/416) ID</strong>】进行过滤。[CDH](https://cloud.tencent.com/document/product/416) ID形如：host-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-name</strong></li>
<p style="padding-left: 30px;">按照【<strong>CDH实例名称</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-state</strong></li>
<p style="padding-left: 30px;">按照【<strong>CDH实例状态</strong>】进行过滤。（PENDING：创建中 | LAUNCH_FAILURE：创建失败 | RUNNING：运行中 | EXPIRED：已过期）</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;

    constructor(params: {

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>project-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>项目ID</strong>】进行过滤，可通过调用[DescribeProject](https://cloud.tencent.com/document/api/378/4400)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/378/4398)创建新的项目。项目ID形如：1002189。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>[CDH](https://cloud.tencent.com/document/product/416) ID</strong>】进行过滤。[CDH](https://cloud.tencent.com/document/product/416) ID形如：host-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-name</strong></li>
<p style="padding-left: 30px;">按照【<strong>CDH实例名称</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-state</strong></li>
<p style="padding-left: 30px;">按照【<strong>CDH实例状态</strong>】进行过滤。（PENDING：创建中 | LAUNCH_FAILURE：创建失败 | RUNNING：运行中 | EXPIRED：已过期）</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;

    }){

        this.Filters = params && params.Filters || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

    }
}

/**
 * ModifyInstancesRenewFlag返回参数结构体
 * @class
 */
export class ModifyInstancesRenewFlagResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeInstancesStatus请求参数结构体
 * @class
 */
export class DescribeInstancesStatusRequest {

    /**
      * 按照一个或者多个实例ID查询。实例ID形如：`ins-11112222`。此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`ids.N`一节）。每次请求的实例的上限为100。
      */
    InstanceIds?: Array<string>;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    constructor(params: {

    /**
      * 按照一个或者多个实例ID查询。实例ID形如：`ins-11112222`。此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`ids.N`一节）。每次请求的实例的上限为100。
      */
    InstanceIds?: Array<string>;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

    }
}

/**
 * InquiryPriceResizeInstanceDisks返回参数结构体
 * @class
 */
export class InquiryPriceResizeInstanceDisksResponse {

    /**
      * 该参数表示磁盘扩容成对应配置的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示磁盘扩容成对应配置的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * TerminateInstances请求参数结构体
 * @class
 */
export class TerminateInstancesRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

    }
}

/**
 * 镜像分享信息结构
 * @class
 */
export class SharePermission {

    /**
      * 镜像分享时间
      */
    CreatedTime: string;

    /**
      * 镜像分享的账户ID
      */
    AccountId: string;

    constructor(params: {

    /**
      * 镜像分享时间
      */
    CreatedTime: string;

    /**
      * 镜像分享的账户ID
      */
    AccountId: string;

    }){

        this.CreatedTime = params && params.CreatedTime || null;

        this.AccountId = params && params.AccountId || null;

    }
}

/**
 * 描述用户已购买预留实例计费信息
 * @class
 */
export class ReservedInstances {

    /**
      * 已购买的预留实例计费ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。
      */
    ReservedInstancesId: string;

    /**
      * 预留实例计费的类型。形如：S3.MEDIUM4。
返回项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a>
      */
    InstanceType: string;

    /**
      * 预留实例计费可购买的可用区。形如：ap-guangzhou-1。
返回项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a>
      */
    Zone: string;

    /**
      * 预留实例计费开始时间。形如：1949-10-01 00:00:00
      */
    StartTime: string;

    /**
      * 预留实例计费到期时间。形如：1949-10-01 00:00:00
      */
    EndTime: string;

    /**
      * 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。
计量单位：秒。
      */
    Duration: number;

    /**
      * 已购买的预留实例计费个数。形如：10。
      */
    InstanceCount: number;

    /**
      * 描述预留实例计费的平台描述（即操作系统）。形如：linux。
返回项： linux 。
      */
    ProductDescription: string;

    /**
      * 预留实例计费购买的状态。形如：active
返回项： active (以创建) | pending (等待被创建) | retired (过期)。
      */
    State: string;

    /**
      * 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。形如：USD。
返回项：USD（美元）。
      */
    CurrencyCode: string;

    /**
      * 预留实例计费的付款类型。形如：All Upfront。
返回项： All Upfront (预付全部费用)。
      */
    OfferingType: string;

    constructor(params: {

    /**
      * 已购买的预留实例计费ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。
      */
    ReservedInstancesId: string;

    /**
      * 预留实例计费的类型。形如：S3.MEDIUM4。
返回项：<a href="https://cloud.tencent.com/document/product/213/11518">预留实例计费类型列表</a>
      */
    InstanceType: string;

    /**
      * 预留实例计费可购买的可用区。形如：ap-guangzhou-1。
返回项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a>
      */
    Zone: string;

    /**
      * 预留实例计费开始时间。形如：1949-10-01 00:00:00
      */
    StartTime: string;

    /**
      * 预留实例计费到期时间。形如：1949-10-01 00:00:00
      */
    EndTime: string;

    /**
      * 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。
计量单位：秒。
      */
    Duration: number;

    /**
      * 已购买的预留实例计费个数。形如：10。
      */
    InstanceCount: number;

    /**
      * 描述预留实例计费的平台描述（即操作系统）。形如：linux。
返回项： linux 。
      */
    ProductDescription: string;

    /**
      * 预留实例计费购买的状态。形如：active
返回项： active (以创建) | pending (等待被创建) | retired (过期)。
      */
    State: string;

    /**
      * 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。形如：USD。
返回项：USD（美元）。
      */
    CurrencyCode: string;

    /**
      * 预留实例计费的付款类型。形如：All Upfront。
返回项： All Upfront (预付全部费用)。
      */
    OfferingType: string;

    }){

        this.ReservedInstancesId = params && params.ReservedInstancesId || null;

        this.InstanceType = params && params.InstanceType || null;

        this.Zone = params && params.Zone || null;

        this.StartTime = params && params.StartTime || null;

        this.EndTime = params && params.EndTime || null;

        this.Duration = params && params.Duration || null;

        this.InstanceCount = params && params.InstanceCount || null;

        this.ProductDescription = params && params.ProductDescription || null;

        this.State = params && params.State || null;

        this.CurrencyCode = params && params.CurrencyCode || null;

        this.OfferingType = params && params.OfferingType || null;

    }
}

/**
 * DeleteImages返回参数结构体
 * @class
 */
export class DeleteImagesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ImportImage返回参数结构体
 * @class
 */
export class ImportImageResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyDisasterRecoverGroupAttribute请求参数结构体
 * @class
 */
export class ModifyDisasterRecoverGroupAttributeRequest {

    /**
      * 分散置放群组ID，可使用[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。
      */
    DisasterRecoverGroupId: string;

    /**
      * 分散置放群组名称，长度1-60个字符，支持中、英文。
      */
    Name: string;

    constructor(params: {

    /**
      * 分散置放群组ID，可使用[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。
      */
    DisasterRecoverGroupId: string;

    /**
      * 分散置放群组名称，长度1-60个字符，支持中、英文。
      */
    Name: string;

    }){

        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;

        this.Name = params && params.Name || null;

    }
}

/**
 * RebootInstances返回参数结构体
 * @class
 */
export class RebootInstancesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * InquiryPriceResetInstancesType返回参数结构体
 * @class
 */
export class InquiryPriceResetInstancesTypeResponse {

    /**
      * 该参数表示调整成对应机型实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 该参数表示调整成对应机型实例的价格。
      */
    Price?: Price;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.Price = params && params.Price || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述可购买预留实例计费信息
 * @class
 */
export class ReservedInstancesOffering {

    /**
      * 预留实例计费可购买的可用区。形如：ap-guangzhou-1。
返回项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a>
      */
    Zone: string;

    /**
      * 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。
返回项：USD（美元）。
      */
    CurrencyCode: string;

    /**
      * 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。
计量单位：秒
      */
    Duration: number;

    /**
      * 预留实例计费的购买价格。形如：4000.0。
计量单位：与 currencyCode 一致，目前支持 USD（美元）
      */
    FixedPrice: number;

    /**
      * 预留实例计费的实例类型。形如：S3.MEDIUM4。
返回项：<a href="https://cloud.tencent.com/product/cvm/instances">预留实例计费类型列表</a>
      */
    InstanceType: string;

    /**
      * 预留实例计费的付款类型。形如：All Upfront。
返回项： All Upfront (预付全部费用)。
      */
    OfferingType: string;

    /**
      * 可购买的预留实例计费配置ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。
      */
    ReservedInstancesOfferingId: string;

    /**
      * 预留实例计费的平台描述（即操作系统）。形如：linux。
返回项： linux 。
      */
    ProductDescription: string;

    /**
      * 扣除预付费之后的使用价格 (按小时计费)。形如：0.0。
目前，因为只支持 All Upfront 付款类型，所以默认为 0元/小时。
计量单位：元/小时，货币单位与 currencyCode 一致，目前支持 USD（美元）
      */
    UsagePrice: number;

    constructor(params: {

    /**
      * 预留实例计费可购买的可用区。形如：ap-guangzhou-1。
返回项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a>
      */
    Zone: string;

    /**
      * 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。
返回项：USD（美元）。
      */
    CurrencyCode: string;

    /**
      * 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。
计量单位：秒
      */
    Duration: number;

    /**
      * 预留实例计费的购买价格。形如：4000.0。
计量单位：与 currencyCode 一致，目前支持 USD（美元）
      */
    FixedPrice: number;

    /**
      * 预留实例计费的实例类型。形如：S3.MEDIUM4。
返回项：<a href="https://cloud.tencent.com/product/cvm/instances">预留实例计费类型列表</a>
      */
    InstanceType: string;

    /**
      * 预留实例计费的付款类型。形如：All Upfront。
返回项： All Upfront (预付全部费用)。
      */
    OfferingType: string;

    /**
      * 可购买的预留实例计费配置ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。
      */
    ReservedInstancesOfferingId: string;

    /**
      * 预留实例计费的平台描述（即操作系统）。形如：linux。
返回项： linux 。
      */
    ProductDescription: string;

    /**
      * 扣除预付费之后的使用价格 (按小时计费)。形如：0.0。
目前，因为只支持 All Upfront 付款类型，所以默认为 0元/小时。
计量单位：元/小时，货币单位与 currencyCode 一致，目前支持 USD（美元）
      */
    UsagePrice: number;

    }){

        this.Zone = params && params.Zone || null;

        this.CurrencyCode = params && params.CurrencyCode || null;

        this.Duration = params && params.Duration || null;

        this.FixedPrice = params && params.FixedPrice || null;

        this.InstanceType = params && params.InstanceType || null;

        this.OfferingType = params && params.OfferingType || null;

        this.ReservedInstancesOfferingId = params && params.ReservedInstancesOfferingId || null;

        this.ProductDescription = params && params.ProductDescription || null;

        this.UsagePrice = params && params.UsagePrice || null;

    }
}

/**
 * 操作系统支持的类型。
 * @class
 */
export class OsVersion {

    /**
      * 操作系统类型
      */
    OsName: string;

    /**
      * 支持的操作系统版本
      */
    OsVersions: Array<string>;

    /**
      * 支持的操作系统架构
      */
    Architecture: Array<string>;

    constructor(params: {

    /**
      * 操作系统类型
      */
    OsName: string;

    /**
      * 支持的操作系统版本
      */
    OsVersions: Array<string>;

    /**
      * 支持的操作系统架构
      */
    Architecture: Array<string>;

    }){

        this.OsName = params && params.OsName || null;

        this.OsVersions = params && params.OsVersions || null;

        this.Architecture = params && params.Architecture || null;

    }
}

/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
export class ModifyImageAttributeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * InquiryPriceRenewInstances请求参数结构体
 * @class
 */
export class InquiryPriceRenewInstancesRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
      */
    InstanceChargePrepaid: InstanceChargePrepaid;

    /**
      * 试运行，测试使用，不执行具体逻辑。取值范围：<br><li>TRUE：跳过执行逻辑<br><li>FALSE：执行逻辑<br><br>默认取值：FALSE。
      */
    DryRun?: boolean;

    /**
      * 是否续费弹性数据盘。取值范围：<br><li>TRUE：表示续费包年包月实例同时续费其挂载的弹性数据盘<br><li>FALSE：表示续费包年包月实例同时不再续费其挂载的弹性数据盘<br><br>默认取值：TRUE。
      */
    RenewPortableDataDisk?: boolean;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
      */
    InstanceChargePrepaid: InstanceChargePrepaid;

    /**
      * 试运行，测试使用，不执行具体逻辑。取值范围：<br><li>TRUE：跳过执行逻辑<br><li>FALSE：执行逻辑<br><br>默认取值：FALSE。
      */
    DryRun?: boolean;

    /**
      * 是否续费弹性数据盘。取值范围：<br><li>TRUE：表示续费包年包月实例同时续费其挂载的弹性数据盘<br><li>FALSE：表示续费包年包月实例同时不再续费其挂载的弹性数据盘<br><br>默认取值：TRUE。
      */
    RenewPortableDataDisk?: boolean;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;

        this.DryRun = params && params.DryRun || null;

        this.RenewPortableDataDisk = params && params.RenewPortableDataDisk || null;

    }
}

/**
 * DescribeInstances请求参数结构体
 * @class
 */
export class DescribeInstancesRequest {

    /**
      * 按照一个或者多个实例ID查询。实例ID形如：`ins-xxxxxxxx`。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`ids.N`一节）。每次请求的实例的上限为100。参数不支持同时指定`InstanceIds`和`Filters`。
      */
    InstanceIds?: Array<string>;

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>project-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>项目ID</strong>】进行过滤，可通过调用[DescribeProject](https://cloud.tencent.com/document/api/378/4400)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/378/4398)创建新的项目。项目ID形如：1002189。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>[CDH](https://cloud.tencent.com/document/product/416) ID</strong>】进行过滤。[CDH](https://cloud.tencent.com/document/product/416) ID形如：host-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>vpc-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>VPC ID</strong>】进行过滤。VPC ID形如：vpc-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>subnet-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>子网ID</strong>】进行过滤。子网ID形如：subnet-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例ID</strong>】进行过滤。实例ID形如：ins-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>security-group-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>安全组ID</strong>】进行过滤。安全组ID形如: sg-8jlk3f3r。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-name</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例名称</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-charge-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例计费模式</strong>】进行过滤。(PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对[CDH](https://cloud.tencent.com/document/product/416)计费，不对[CDH](https://cloud.tencent.com/document/product/416)上的实例计费。)</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>private-ip-address</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例主网卡的内网IP</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>public-ip-address</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例主网卡的公网IP</strong>】进行过滤，包含实例创建时自动分配的IP和实例创建后手动绑定的弹性IP。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>tag-key</strong></li>
<p style="padding-left: 30px;">按照【<strong>标签键</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>tag-value</strong></li>
<p style="padding-left: 30px;">按照【<strong>标签值</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>tag:tag-key</strong></li>
<p style="padding-left: 30px;">按照【<strong>标签键值对</strong>】进行过滤。tag-key使用具体的标签键进行替换。使用请参考示例2。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`InstanceIds`和`Filters`。
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    constructor(params: {

    /**
      * 按照一个或者多个实例ID查询。实例ID形如：`ins-xxxxxxxx`。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`ids.N`一节）。每次请求的实例的上限为100。参数不支持同时指定`InstanceIds`和`Filters`。
      */
    InstanceIds?: Array<string>;

    /**
      * <li><strong>zone</strong></li>
<p style="padding-left: 30px;">按照【<strong>可用区</strong>】进行过滤。可用区形如：ap-guangzhou-1。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p><p style="padding-left: 30px;">可选项：<a href="https://cloud.tencent.com/document/product/213/6091">可用区列表</a></p>
<li><strong>project-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>项目ID</strong>】进行过滤，可通过调用[DescribeProject](https://cloud.tencent.com/document/api/378/4400)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/378/4398)创建新的项目。项目ID形如：1002189。</p><p style="padding-left: 30px;">类型：Integer</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>host-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>[CDH](https://cloud.tencent.com/document/product/416) ID</strong>】进行过滤。[CDH](https://cloud.tencent.com/document/product/416) ID形如：host-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>vpc-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>VPC ID</strong>】进行过滤。VPC ID形如：vpc-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>subnet-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>子网ID</strong>】进行过滤。子网ID形如：subnet-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例ID</strong>】进行过滤。实例ID形如：ins-xxxxxxxx。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>security-group-id</strong></li>
<p style="padding-left: 30px;">按照【<strong>安全组ID</strong>】进行过滤。安全组ID形如: sg-8jlk3f3r。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-name</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例名称</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>instance-charge-type</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例计费模式</strong>】进行过滤。(PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对[CDH](https://cloud.tencent.com/document/product/416)计费，不对[CDH](https://cloud.tencent.com/document/product/416)上的实例计费。)</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>private-ip-address</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例主网卡的内网IP</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>public-ip-address</strong></li>
<p style="padding-left: 30px;">按照【<strong>实例主网卡的公网IP</strong>】进行过滤，包含实例创建时自动分配的IP和实例创建后手动绑定的弹性IP。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>tag-key</strong></li>
<p style="padding-left: 30px;">按照【<strong>标签键</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>tag-value</strong></li>
<p style="padding-left: 30px;">按照【<strong>标签值</strong>】进行过滤。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
<li><strong>tag:tag-key</strong></li>
<p style="padding-left: 30px;">按照【<strong>标签键值对</strong>】进行过滤。tag-key使用具体的标签键进行替换。使用请参考示例2。</p><p style="padding-left: 30px;">类型：String</p><p style="padding-left: 30px;">必选：否</p>
每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`InstanceIds`和`Filters`。
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;

    /**
      * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.Filters = params && params.Filters || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

    }
}

/**
 * 地域信息
 * @class
 */
export class RegionInfo {

    /**
      * 地域名称，例如，ap-guangzhou
      */
    Region: string;

    /**
      * 地域描述，例如，华南地区(广州)
      */
    RegionName: string;

    /**
      * 地域是否可用状态
      */
    RegionState: string;

    constructor(params: {

    /**
      * 地域名称，例如，ap-guangzhou
      */
    Region: string;

    /**
      * 地域描述，例如，华南地区(广州)
      */
    RegionName: string;

    /**
      * 地域是否可用状态
      */
    RegionState: string;

    }){

        this.Region = params && params.Region || null;

        this.RegionName = params && params.RegionName || null;

        this.RegionState = params && params.RegionState || null;

    }
}

/**
 * StopInstances请求参数结构体
 * @class
 */
export class StopInstancesRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 是否在正常关闭失败后选择强制关闭实例。取值范围：<br><li>TRUE：表示在正常关闭失败后进行强制关闭<br><li>FALSE：表示在正常关闭失败后不进行强制关闭<br><br>默认取值：FALSE。
      */
    ForceStop?: boolean;

    /**
      * 实例的关闭模式。取值范围：<br><li>SOFT_FIRST：表示在正常关闭失败后进行强制关闭<br><li>HARD：直接强制关闭<br><li>SOFT：仅软关机<br>默认取值：SOFT。
      */
    StopType?: string;

    /**
      * 按量计费实例关机收费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<br>默认取值：KEEP_CHARGING。
该参数只针对部分按量计费云硬盘实例生效，详情参考[按量计费实例关机不收费说明](https://cloud.tencent.com/document/product/213/19918)
      */
    StoppedMode?: string;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。
      */
    InstanceIds: Array<string>;

    /**
      * 是否在正常关闭失败后选择强制关闭实例。取值范围：<br><li>TRUE：表示在正常关闭失败后进行强制关闭<br><li>FALSE：表示在正常关闭失败后不进行强制关闭<br><br>默认取值：FALSE。
      */
    ForceStop?: boolean;

    /**
      * 实例的关闭模式。取值范围：<br><li>SOFT_FIRST：表示在正常关闭失败后进行强制关闭<br><li>HARD：直接强制关闭<br><li>SOFT：仅软关机<br>默认取值：SOFT。
      */
    StopType?: string;

    /**
      * 按量计费实例关机收费模式。
取值范围：<br><li>KEEP_CHARGING：关机继续收费<br><li>STOP_CHARGING：关机停止收费<br>默认取值：KEEP_CHARGING。
该参数只针对部分按量计费云硬盘实例生效，详情参考[按量计费实例关机不收费说明](https://cloud.tencent.com/document/product/213/19918)
      */
    StoppedMode?: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.ForceStop = params && params.ForceStop || null;

        this.StopType = params && params.StopType || null;

        this.StoppedMode = params && params.StoppedMode || null;

    }
}

/**
 * DescribeInternetChargeTypeConfigs请求参数结构体
 * @class
 */
export class DescribeInternetChargeTypeConfigsRequest {


    constructor(params: {


    }){

    }
}

/**
 * DescribeImages请求参数结构体
 * @class
 */
export class DescribeImagesRequest {

    /**
      * 镜像ID列表 。镜像ID如：`img-gvbnzy6f`。array型参数的格式可以参考[API简介](https://cloud.tencent.com/document/api/213/15688)。镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。
      */
    ImageIds?: Array<string>;

    /**
      * 过滤条件，每次请求的`Filters`的上限为0，`Filters.Values`的上限为5。参数不可以同时指定`ImageIds`和`Filters`。详细的过滤条件如下：
<li> image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤</li>
<li> image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
    PRIVATE_IMAGE: 私有镜像 (本账户创建的镜像)
    PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
   SHARED_IMAGE: 共享镜像(其他账户共享给本账户的镜像) 。</li>
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。关于Offset详见[API简介](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89)。
      */
    Offset?: number;

    /**
      * 数量限制，默认为20，最大值为100。关于Limit详见[API简介](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89)。
      */
    Limit?: number;

    /**
      * 实例类型，如 `S1.SMALL1`
      */
    InstanceType?: string;

    constructor(params: {

    /**
      * 镜像ID列表 。镜像ID如：`img-gvbnzy6f`。array型参数的格式可以参考[API简介](https://cloud.tencent.com/document/api/213/15688)。镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。
      */
    ImageIds?: Array<string>;

    /**
      * 过滤条件，每次请求的`Filters`的上限为0，`Filters.Values`的上限为5。参数不可以同时指定`ImageIds`和`Filters`。详细的过滤条件如下：
<li> image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤</li>
<li> image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
    PRIVATE_IMAGE: 私有镜像 (本账户创建的镜像)
    PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
   SHARED_IMAGE: 共享镜像(其他账户共享给本账户的镜像) 。</li>
      */
    Filters?: Array<Filter>;

    /**
      * 偏移量，默认为0。关于Offset详见[API简介](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89)。
      */
    Offset?: number;

    /**
      * 数量限制，默认为20，最大值为100。关于Limit详见[API简介](/document/api/213/568#.E8.BE.93.E5.85.A5.E5.8F.82.E6.95.B0.E4.B8.8E.E8.BF.94.E5.9B.9E.E5.8F.82.E6.95.B0.E9.87.8A.E4.B9.89)。
      */
    Limit?: number;

    /**
      * 实例类型，如 `S1.SMALL1`
      */
    InstanceType?: string;

    }){

        this.ImageIds = params && params.ImageIds || null;

        this.Filters = params && params.Filters || null;

        this.Offset = params && params.Offset || null;

        this.Limit = params && params.Limit || null;

        this.InstanceType = params && params.InstanceType || null;

    }
}

/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
export class ModifyImageAttributeRequest {

    /**
      * 镜像ID，形如`img-gvbnzy6f`。镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。
      */
    ImageId: string;

    /**
      * 设置新的镜像名称；必须满足下列限制：<br> <li> 不得超过20个字符。<br> <li> 镜像名称不能与已有镜像重复。
      */
    ImageName?: string;

    /**
      * 设置新的镜像描述；必须满足下列限制：<br> <li> 不得超过60个字符。
      */
    ImageDescription?: string;

    constructor(params: {

    /**
      * 镜像ID，形如`img-gvbnzy6f`。镜像ID可以通过如下方式获取：<br><li>通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。<br><li>通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。
      */
    ImageId: string;

    /**
      * 设置新的镜像名称；必须满足下列限制：<br> <li> 不得超过20个字符。<br> <li> 镜像名称不能与已有镜像重复。
      */
    ImageName?: string;

    /**
      * 设置新的镜像描述；必须满足下列限制：<br> <li> 不得超过60个字符。
      */
    ImageDescription?: string;

    }){

        this.ImageId = params && params.ImageId || null;

        this.ImageName = params && params.ImageName || null;

        this.ImageDescription = params && params.ImageDescription || null;

    }
}

/**
 * ResizeInstanceDisks返回参数结构体
 * @class
 */
export class ResizeInstanceDisksResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ModifyInstancesRenewFlag请求参数结构体
 * @class
 */
export class ModifyInstancesRenewFlagRequest {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag: string;

    constructor(params: {

    /**
      * 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。
      */
    InstanceIds: Array<string>;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag: string;

    }){

        this.InstanceIds = params && params.InstanceIds || null;

        this.RenewFlag = params && params.RenewFlag || null;

    }
}

/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
export class DisassociateSecurityGroupsRequest {

    /**
      * 要解绑的`安全组ID`，类似sg-efil73jd，只支持解绑单个安全组。
      */
    SecurityGroupIds: Array<string>;

    /**
      * 被解绑的`实例ID`，类似ins-lesecurk，支持指定多个实例 。
      */
    InstanceIds: Array<string>;

    constructor(params: {

    /**
      * 要解绑的`安全组ID`，类似sg-efil73jd，只支持解绑单个安全组。
      */
    SecurityGroupIds: Array<string>;

    /**
      * 被解绑的`实例ID`，类似ins-lesecurk，支持指定多个实例 。
      */
    InstanceIds: Array<string>;

    }){

        this.SecurityGroupIds = params && params.SecurityGroupIds || null;

        this.InstanceIds = params && params.InstanceIds || null;

    }
}

/**
 * ModifyHostsAttribute请求参数结构体
 * @class
 */
export class ModifyHostsAttributeRequest {

    /**
      * 一个或多个待操作的CDH实例ID。
      */
    HostIds: Array<string>;

    /**
      * CDH实例显示名称。可任意命名，但不得超过60个字符。
      */
    HostName?: string;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;

    /**
      * 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/doc/api/403/4398)接口创建。可通过[`DescribeProject`](https://cloud.tencent.com/document/product/378/4400) API返回值中的`projectId`获取。后续使用[DescribeHosts](https://cloud.tencent.com/document/api/213/16474)接口查询实例时，项目ID可用于过滤结果。
      */
    ProjectId?: number;

    constructor(params: {

    /**
      * 一个或多个待操作的CDH实例ID。
      */
    HostIds: Array<string>;

    /**
      * CDH实例显示名称。可任意命名，但不得超过60个字符。
      */
    HostName?: string;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;

    /**
      * 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/doc/api/403/4398)接口创建。可通过[`DescribeProject`](https://cloud.tencent.com/document/product/378/4400) API返回值中的`projectId`获取。后续使用[DescribeHosts](https://cloud.tencent.com/document/api/213/16474)接口查询实例时，项目ID可用于过滤结果。
      */
    ProjectId?: number;

    }){

        this.HostIds = params && params.HostIds || null;

        this.HostName = params && params.HostName || null;

        this.RenewFlag = params && params.RenewFlag || null;

        this.ProjectId = params && params.ProjectId || null;

    }
}

/**
 * ImportKeyPair请求参数结构体
 * @class
 */
export class ImportKeyPairRequest {

    /**
      * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName: string;

    /**
      * 密钥对创建后所属的[项目](https://cloud.tencent.com/document/product/378/10861)ID。<br><br>可以通过以下方式获取项目ID：<br><li>通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID。<br><li>通过调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的 `projectId ` 获取项目ID。

如果是默认项目，直接填0就可以。
      */
    ProjectId: number;

    /**
      * 密钥对的公钥内容，`OpenSSH RSA` 格式。
      */
    PublicKey: string;

    constructor(params: {

    /**
      * 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。
      */
    KeyName: string;

    /**
      * 密钥对创建后所属的[项目](https://cloud.tencent.com/document/product/378/10861)ID。<br><br>可以通过以下方式获取项目ID：<br><li>通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID。<br><li>通过调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的 `projectId ` 获取项目ID。

如果是默认项目，直接填0就可以。
      */
    ProjectId: number;

    /**
      * 密钥对的公钥内容，`OpenSSH RSA` 格式。
      */
    PublicKey: string;

    }){

        this.KeyName = params && params.KeyName || null;

        this.ProjectId = params && params.ProjectId || null;

        this.PublicKey = params && params.PublicKey || null;

    }
}

/**
 * 描述密钥对信息
 * @class
 */
export class KeyPair {

    /**
      * 密钥对的`ID`，是密钥对的唯一标识。
      */
    KeyId?: string;

    /**
      * 密钥对名称。
      */
    KeyName?: string;

    /**
      * 密钥对所属的项目`ID`。
      */
    ProjectId?: number;

    /**
      * 密钥对描述信息。
      */
    Description?: string;

    /**
      * 密钥对的纯文本公钥。
      */
    PublicKey?: string;

    /**
      * 密钥对的纯文本私钥。腾讯云不会保管私钥，请用户自行妥善保存。
      */
    PrivateKey?: string;

    /**
      * 密钥关联的实例`ID`列表。
      */
    AssociatedInstanceIds?: Array<string>;

    /**
      * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    CreatedTime?: string;

    constructor(params: {

    /**
      * 密钥对的`ID`，是密钥对的唯一标识。
      */
    KeyId?: string;

    /**
      * 密钥对名称。
      */
    KeyName?: string;

    /**
      * 密钥对所属的项目`ID`。
      */
    ProjectId?: number;

    /**
      * 密钥对描述信息。
      */
    Description?: string;

    /**
      * 密钥对的纯文本公钥。
      */
    PublicKey?: string;

    /**
      * 密钥对的纯文本私钥。腾讯云不会保管私钥，请用户自行妥善保存。
      */
    PrivateKey?: string;

    /**
      * 密钥关联的实例`ID`列表。
      */
    AssociatedInstanceIds?: Array<string>;

    /**
      * 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    CreatedTime?: string;

    }){

        this.KeyId = params && params.KeyId || null;

        this.KeyName = params && params.KeyName || null;

        this.ProjectId = params && params.ProjectId || null;

        this.Description = params && params.Description || null;

        this.PublicKey = params && params.PublicKey || null;

        this.PrivateKey = params && params.PrivateKey || null;

        this.AssociatedInstanceIds = params && params.AssociatedInstanceIds || null;

        this.CreatedTime = params && params.CreatedTime || null;

    }
}

/**
 * DescribeReservedInstancesOfferings返回参数结构体
 * @class
 */
export class DescribeReservedInstancesOfferingsResponse {

    /**
      * 符合条件的预留实例计费数量。
      */
    TotalCount?: number;

    /**
      * 符合条件的预留实例计费列表。
      */
    ReservedInstancesOfferingsSet?: Array<ReservedInstancesOffering>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 符合条件的预留实例计费数量。
      */
    TotalCount?: number;

    /**
      * 符合条件的预留实例计费列表。
      */
    ReservedInstancesOfferingsSet?: Array<ReservedInstancesOffering>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.TotalCount = params && params.TotalCount || null;

        this.ReservedInstancesOfferingsSet = params && params.ReservedInstancesOfferingsSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * RenewInstances返回参数结构体
 * @class
 */
export class RenewInstancesResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
export class RunMonitorServiceEnabled {

    /**
      * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
      */
    Enabled?: boolean;

    constructor(params: {

    /**
      * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
      */
    Enabled?: boolean;

    }){

        this.Enabled = params && params.Enabled || null;

    }
}

/**
 * ResetInstance返回参数结构体
 * @class
 */
export class ResetInstanceResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
 * @class
 */
export class Filter {

    /**
      * 需要过滤的字段。
      */
    Name: string;

    /**
      * 字段的过滤值。
      */
    Values: Array<string>;

    constructor(params: {

    /**
      * 需要过滤的字段。
      */
    Name: string;

    /**
      * 字段的过滤值。
      */
    Values: Array<string>;

    }){

        this.Name = params && params.Name || null;

        this.Values = params && params.Values || null;

    }
}

/**
 * 描述了VPC相关信息，包括子网，IP信息等
 * @class
 */
export class VirtualPrivateCloud {

    /**
      * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
      */
    VpcId: string;

    /**
      * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
      */
    SubnetId: string;

    /**
      * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：<br><li>TRUE：表示用作公网网关<br><li>FALSE：表示不用作公网网关<br><br>默认取值：FALSE。
      */
    AsVpcGateway?: boolean;

    /**
      * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
      */
    PrivateIpAddresses?: Array<string>;

    /**
      * 为弹性网卡指定随机生成的 IPv6 地址数量。
      */
    Ipv6AddressCount?: number;

    constructor(params: {

    /**
      * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
      */
    VpcId: string;

    /**
      * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
      */
    SubnetId: string;

    /**
      * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：<br><li>TRUE：表示用作公网网关<br><li>FALSE：表示不用作公网网关<br><br>默认取值：FALSE。
      */
    AsVpcGateway?: boolean;

    /**
      * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
      */
    PrivateIpAddresses?: Array<string>;

    /**
      * 为弹性网卡指定随机生成的 IPv6 地址数量。
      */
    Ipv6AddressCount?: number;

    }){

        this.VpcId = params && params.VpcId || null;

        this.SubnetId = params && params.SubnetId || null;

        this.AsVpcGateway = params && params.AsVpcGateway || null;

        this.PrivateIpAddresses = params && params.PrivateIpAddresses || null;

        this.Ipv6AddressCount = params && params.Ipv6AddressCount || null;

    }
}

/**
 * 描述了按带宽计费的相关信息
 * @class
 */
export class InternetBandwidthConfig {

    /**
      * 开始时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    StartTime?: string;

    /**
      * 结束时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    EndTime?: string;

    /**
      * 实例带宽信息。
      */
    InternetAccessible?: InternetAccessible;

    constructor(params: {

    /**
      * 开始时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    StartTime?: string;

    /**
      * 结束时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
      */
    EndTime?: string;

    /**
      * 实例带宽信息。
      */
    InternetAccessible?: InternetAccessible;

    }){

        this.StartTime = params && params.StartTime || null;

        this.EndTime = params && params.EndTime || null;

        this.InternetAccessible = params && params.InternetAccessible || null;

    }
}

/**
 * ModifyDisasterRecoverGroupAttribute返回参数结构体
 * @class
 */
export class ModifyDisasterRecoverGroupAttributeResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DescribeInstanceTypeConfigs返回参数结构体
 * @class
 */
export class DescribeInstanceTypeConfigsResponse {

    /**
      * 实例机型配置列表。
      */
    InstanceTypeConfigSet?: Array<InstanceTypeConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 实例机型配置列表。
      */
    InstanceTypeConfigSet?: Array<InstanceTypeConfig>;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.InstanceTypeConfigSet = params && params.InstanceTypeConfigSet || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * ResizeInstanceDisks请求参数结构体
 * @class
 */
export class ResizeInstanceDisksRequest {

    /**
      * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](/document/api/213/9452#block_device)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考[硬盘产品简介](https://cloud.tencent.com/document/product/362/2353)。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    constructor(params: {

    /**
      * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    /**
      * 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性），且[数据盘类型](/document/api/213/9452#block_device)为：`CLOUD_BASIC`、`CLOUD_PREMIUM`、`CLOUD_SSD`。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考[硬盘产品简介](https://cloud.tencent.com/document/product/362/2353)。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。
      */
    DataDisks?: Array<DataDisk>;

    /**
      * 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：<br><li>TRUE：表示在正常关机失败后进行强制关机<br><li>FALSE：表示在正常关机失败后不进行强制关机<br><br>默认取值：FALSE。<br><br>强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
      */
    ForceStop?: boolean;

    }){

        this.InstanceId = params && params.InstanceId || null;

        this.DataDisks = params && params.DataDisks || null;

        this.ForceStop = params && params.ForceStop || null;

    }
}

/**
 * DescribeInstanceFamilyConfigs请求参数结构体
 * @class
 */
export class DescribeInstanceFamilyConfigsRequest {


    constructor(params: {


    }){

    }
}

/**
 * DescribeInstanceInternetBandwidthConfigs请求参数结构体
 * @class
 */
export class DescribeInstanceInternetBandwidthConfigsRequest {

    /**
      * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    constructor(params: {

    /**
      * 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。
      */
    InstanceId: string;

    }){

        this.InstanceId = params && params.InstanceId || null;

    }
}

/**
 * PurchaseReservedInstancesOffering返回参数结构体
 * @class
 */
export class PurchaseReservedInstancesOfferingResponse {

    /**
      * 已购买预留实例计费ID
      */
    ReservedInstanceId?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 已购买预留实例计费ID
      */
    ReservedInstanceId?: string;

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.ReservedInstanceId = params && params.ReservedInstanceId || null;

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * HDD的本地存储信息
 * @class
 */
export class StorageBlock {

    /**
      * HDD本地存储类型，值为：LOCAL_PRO.
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;

    /**
      * HDD本地存储的最小容量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinSize: number;

    /**
      * HDD本地存储的最大容量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxSize: number;

    constructor(params: {

    /**
      * HDD本地存储类型，值为：LOCAL_PRO.
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;

    /**
      * HDD本地存储的最小容量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinSize: number;

    /**
      * HDD本地存储的最大容量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxSize: number;

    }){

        this.Type = params && params.Type || null;

        this.MinSize = params && params.MinSize || null;

        this.MaxSize = params && params.MaxSize || null;

    }
}

/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
export class InternetAccessible {

    /**
      * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：非带宽包用户默认与子机付费类型保持一致。
      */
    InternetChargeType?: string;

    /**
      * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。
      */
    InternetMaxBandwidthOut?: number;

    /**
      * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。
      */
    PublicIpAssigned?: boolean;

    /**
      * 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。
      */
    BandwidthPackageId?: string;

    constructor(params: {

    /**
      * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：非带宽包用户默认与子机付费类型保持一致。
      */
    InternetChargeType?: string;

    /**
      * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。
      */
    InternetMaxBandwidthOut?: number;

    /**
      * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。
      */
    PublicIpAssigned?: boolean;

    /**
      * 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。
      */
    BandwidthPackageId?: string;

    }){

        this.InternetChargeType = params && params.InternetChargeType || null;

        this.InternetMaxBandwidthOut = params && params.InternetMaxBandwidthOut || null;

        this.PublicIpAssigned = params && params.PublicIpAssigned || null;

        this.BandwidthPackageId = params && params.BandwidthPackageId || null;

    }
}

/**
 * RenewHosts返回参数结构体
 * @class
 */
export class RenewHostsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
export class DisassociateSecurityGroupsResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述镜像关联的快照信息
 * @class
 */
export class Snapshot {

    /**
      * 快照Id。
      */
    SnapshotId: string;

    /**
      * 创建此快照的云硬盘类型。取值范围：
SYSTEM_DISK：系统盘
DATA_DISK：数据盘。
      */
    DiskUsage: string;

    /**
      * 创建此快照的云硬盘大小，单位GB。
      */
    DiskSize: number;

    constructor(params: {

    /**
      * 快照Id。
      */
    SnapshotId: string;

    /**
      * 创建此快照的云硬盘类型。取值范围：
SYSTEM_DISK：系统盘
DATA_DISK：数据盘。
      */
    DiskUsage: string;

    /**
      * 创建此快照的云硬盘大小，单位GB。
      */
    DiskSize: number;

    }){

        this.SnapshotId = params && params.SnapshotId || null;

        this.DiskUsage = params && params.DiskUsage || null;

        this.DiskSize = params && params.DiskSize || null;

    }
}

/**
 * ModifyInstancesProject返回参数结构体
 * @class
 */
export class ModifyInstancesProjectResponse {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    constructor(params: {

    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;

    }){

        this.RequestId = params && params.RequestId || null;

    }
}

/**
 * 描述了实例的计费模式
 * @class
 */
export class InstanceChargePrepaid {

    /**
      * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
      */
    Period: number;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;

    constructor(params: {

    /**
      * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
      */
    Period: number;

    /**
      * 自动续费标识。取值范围：<br><li>NOTIFY_AND_AUTO_RENEW：通知过期且自动续费<br><li>NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费<br><li>DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费<br><br>默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
    RenewFlag?: string;

    }){

        this.Period = params && params.Period || null;

        this.RenewFlag = params && params.RenewFlag || null;

    }
}

/**
 * 价格
 * @class
 */
export class Price {

    /**
      * 描述了实例价格。
      */
    InstancePrice?: ItemPrice;

    /**
      * 描述了网络价格。
      */
    BandwidthPrice?: ItemPrice;

    constructor(params: {

    /**
      * 描述了实例价格。
      */
    InstancePrice?: ItemPrice;

    /**
      * 描述了网络价格。
      */
    BandwidthPrice?: ItemPrice;

    }){

        this.InstancePrice = params && params.InstancePrice || null;

        this.BandwidthPrice = params && params.BandwidthPrice || null;

    }
}

