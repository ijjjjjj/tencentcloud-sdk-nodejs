"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
* 描述预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。
* @class
*/
class ChargePrepaid {
    constructor(params) {
        this.Period = params && params.Period || null;
        this.RenewFlag = params && params.RenewFlag || null;
    }
}
exports.ChargePrepaid = ChargePrepaid;
/**
 * 本地磁盘规格
 * @class
 */
class LocalDiskType {
    constructor(params) {
        this.Type = params && params.Type || null;
        this.PartitionType = params && params.PartitionType || null;
        this.MinSize = params && params.MinSize || null;
        this.MaxSize = params && params.MaxSize || null;
        this.Required = params && params.Required || null;
    }
}
exports.LocalDiskType = LocalDiskType;
/**
 * AssociateInstancesKeyPairs返回参数结构体
 * @class
 */
class AssociateInstancesKeyPairsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.AssociateInstancesKeyPairsResponse = AssociateInstancesKeyPairsResponse;
/**
 * RenewInstances请求参数结构体
 * @class
 */
class RenewInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;
        this.RenewPortableDataDisk = params && params.RenewPortableDataDisk || null;
    }
}
exports.RenewInstancesRequest = RenewInstancesRequest;
/**
 * DescribeImageQuota返回参数结构体
 * @class
 */
class DescribeImageQuotaResponse {
    constructor(params) {
        this.ImageNumQuota = params && params.ImageNumQuota || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeImageQuotaResponse = DescribeImageQuotaResponse;
/**
 * ModifyInstancesProject请求参数结构体
 * @class
 */
class ModifyInstancesProjectRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.ProjectId = params && params.ProjectId || null;
    }
}
exports.ModifyInstancesProjectRequest = ModifyInstancesProjectRequest;
/**
 * ResetInstancesType返回参数结构体
 * @class
 */
class ResetInstancesTypeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ResetInstancesTypeResponse = ResetInstancesTypeResponse;
/**
 * cdh实例的资源信息
 * @class
 */
class HostResource {
    constructor(params) {
        this.CpuTotal = params && params.CpuTotal || null;
        this.CpuAvailable = params && params.CpuAvailable || null;
        this.MemTotal = params && params.MemTotal || null;
        this.MemAvailable = params && params.MemAvailable || null;
        this.DiskTotal = params && params.DiskTotal || null;
        this.DiskAvailable = params && params.DiskAvailable || null;
        this.DiskType = params && params.DiskType || null;
    }
}
exports.HostResource = HostResource;
/**
 * DeleteDisasterRecoverGroups请求参数结构体
 * @class
 */
class DeleteDisasterRecoverGroupsRequest {
    constructor(params) {
        this.DisasterRecoverGroupIds = params && params.DisasterRecoverGroupIds || null;
    }
}
exports.DeleteDisasterRecoverGroupsRequest = DeleteDisasterRecoverGroupsRequest;
/**
 * DeleteKeyPairs返回参数结构体
 * @class
 */
class DeleteKeyPairsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DeleteKeyPairsResponse = DeleteKeyPairsResponse;
/**
 * TerminateInstances返回参数结构体
 * @class
 */
class TerminateInstancesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.TerminateInstancesResponse = TerminateInstancesResponse;
/**
 * ModifyInstancesChargeType返回参数结构体
 * @class
 */
class ModifyInstancesChargeTypeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyInstancesChargeTypeResponse = ModifyInstancesChargeTypeResponse;
/**
 * CreateDisasterRecoverGroup返回参数结构体
 * @class
 */
class CreateDisasterRecoverGroupResponse {
    constructor(params) {
        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;
        this.Type = params && params.Type || null;
        this.Name = params && params.Name || null;
        this.CvmQuotaTotal = params && params.CvmQuotaTotal || null;
        this.CurrentNum = params && params.CurrentNum || null;
        this.CreateTime = params && params.CreateTime || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.CreateDisasterRecoverGroupResponse = CreateDisasterRecoverGroupResponse;
/**
 * InquiryPriceResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceResetInstancesInternetMaxBandwidthResponse = InquiryPriceResetInstancesInternetMaxBandwidthResponse;
/**
 * ModifyKeyPairAttribute请求参数结构体
 * @class
 */
class ModifyKeyPairAttributeRequest {
    constructor(params) {
        this.KeyId = params && params.KeyId || null;
        this.KeyName = params && params.KeyName || null;
        this.Description = params && params.Description || null;
    }
}
exports.ModifyKeyPairAttributeRequest = ModifyKeyPairAttributeRequest;
/**
 * AssociateSecurityGroups请求参数结构体
 * @class
 */
class AssociateSecurityGroupsRequest {
    constructor(params) {
        this.SecurityGroupIds = params && params.SecurityGroupIds || null;
        this.InstanceIds = params && params.InstanceIds || null;
    }
}
exports.AssociateSecurityGroupsRequest = AssociateSecurityGroupsRequest;
/**
 * ResetInstancesType请求参数结构体
 * @class
 */
class ResetInstancesTypeRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceType = params && params.InstanceType || null;
        this.ForceStop = params && params.ForceStop || null;
    }
}
exports.ResetInstancesTypeRequest = ResetInstancesTypeRequest;
/**
 * InquiryPriceResetInstance请求参数结构体
 * @class
 */
class InquiryPriceResetInstanceRequest {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
        this.ImageId = params && params.ImageId || null;
        this.SystemDisk = params && params.SystemDisk || null;
        this.LoginSettings = params && params.LoginSettings || null;
        this.EnhancedService = params && params.EnhancedService || null;
    }
}
exports.InquiryPriceResetInstanceRequest = InquiryPriceResetInstanceRequest;
/**
 * RunInstances请求参数结构体
 * @class
 */
class RunInstancesRequest {
    constructor(params) {
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
exports.RunInstancesRequest = RunInstancesRequest;
/**
 * DeleteImages请求参数结构体
 * @class
 */
class DeleteImagesRequest {
    constructor(params) {
        this.ImageIds = params && params.ImageIds || null;
    }
}
exports.DeleteImagesRequest = DeleteImagesRequest;
/**
 * DescribeInstances返回参数结构体
 * @class
 */
class DescribeInstancesResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.InstanceSet = params && params.InstanceSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstancesResponse = DescribeInstancesResponse;
/**
 * DescribeHosts返回参数结构体
 * @class
 */
class DescribeHostsResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.HostSet = params && params.HostSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeHostsResponse = DescribeHostsResponse;
/**
 * DeleteKeyPairs请求参数结构体
 * @class
 */
class DeleteKeyPairsRequest {
    constructor(params) {
        this.KeyIds = params && params.KeyIds || null;
    }
}
exports.DeleteKeyPairsRequest = DeleteKeyPairsRequest;
/**
 * 描述了操作系统所在块设备即系统盘的信息
 * @class
 */
class SystemDisk {
    constructor(params) {
        this.DiskType = params && params.DiskType || null;
        this.DiskId = params && params.DiskId || null;
        this.DiskSize = params && params.DiskSize || null;
    }
}
exports.SystemDisk = SystemDisk;
/**
 * ResetInstance请求参数结构体
 * @class
 */
class ResetInstanceRequest {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
        this.ImageId = params && params.ImageId || null;
        this.SystemDisk = params && params.SystemDisk || null;
        this.LoginSettings = params && params.LoginSettings || null;
        this.EnhancedService = params && params.EnhancedService || null;
        this.HostName = params && params.HostName || null;
    }
}
exports.ResetInstanceRequest = ResetInstanceRequest;
/**
 * 描述实例机型配置信息
 * @class
 */
class InstanceTypeConfig {
    constructor(params) {
        this.Zone = params && params.Zone || null;
        this.InstanceType = params && params.InstanceType || null;
        this.InstanceFamily = params && params.InstanceFamily || null;
        this.GPU = params && params.GPU || null;
        this.CPU = params && params.CPU || null;
        this.Memory = params && params.Memory || null;
        this.FPGA = params && params.FPGA || null;
    }
}
exports.InstanceTypeConfig = InstanceTypeConfig;
/**
 * AllocateHosts请求参数结构体
 * @class
 */
class AllocateHostsRequest {
    constructor(params) {
        this.Placement = params && params.Placement || null;
        this.ClientToken = params && params.ClientToken || null;
        this.HostChargePrepaid = params && params.HostChargePrepaid || null;
        this.HostChargeType = params && params.HostChargeType || null;
        this.HostType = params && params.HostType || null;
        this.HostCount = params && params.HostCount || null;
        this.TagSpecification = params && params.TagSpecification || null;
    }
}
exports.AllocateHostsRequest = AllocateHostsRequest;
/**
 * 描述了实例登录相关配置与信息。
 * @class
 */
class LoginSettings {
    constructor(params) {
        this.Password = params && params.Password || null;
        this.KeyIds = params && params.KeyIds || null;
        this.KeepImageLogin = params && params.KeepImageLogin || null;
    }
}
exports.LoginSettings = LoginSettings;
/**
 * DescribeRegions返回参数结构体
 * @class
 */
class DescribeRegionsResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.RegionSet = params && params.RegionSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeRegionsResponse = DescribeRegionsResponse;
/**
 * PurchaseReservedInstancesOffering请求参数结构体
 * @class
 */
class PurchaseReservedInstancesOfferingRequest {
    constructor(params) {
        this.InstanceCount = params && params.InstanceCount || null;
        this.ReservedInstancesOfferingId = params && params.ReservedInstancesOfferingId || null;
        this.DryRun = params && params.DryRun || null;
        this.ClientToken = params && params.ClientToken || null;
    }
}
exports.PurchaseReservedInstancesOfferingRequest = PurchaseReservedInstancesOfferingRequest;
/**
 * RebootInstances请求参数结构体
 * @class
 */
class RebootInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.ForceReboot = params && params.ForceReboot || null;
        this.StopType = params && params.StopType || null;
    }
}
exports.RebootInstancesRequest = RebootInstancesRequest;
/**
 * AssociateInstancesKeyPairs请求参数结构体
 * @class
 */
class AssociateInstancesKeyPairsRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.KeyIds = params && params.KeyIds || null;
        this.ForceStop = params && params.ForceStop || null;
    }
}
exports.AssociateInstancesKeyPairsRequest = AssociateInstancesKeyPairsRequest;
/**
 * ImportKeyPair返回参数结构体
 * @class
 */
class ImportKeyPairResponse {
    constructor(params) {
        this.KeyId = params && params.KeyId || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ImportKeyPairResponse = ImportKeyPairResponse;
/**
 * DescribeInstancesStatus返回参数结构体
 * @class
 */
class DescribeInstancesStatusResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.InstanceStatusSet = params && params.InstanceStatusSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstancesStatusResponse = DescribeInstancesStatusResponse;
/**
 * 可用区信息
 * @class
 */
class ZoneInfo {
    constructor(params) {
        this.Zone = params && params.Zone || null;
        this.ZoneName = params && params.ZoneName || null;
        this.ZoneId = params && params.ZoneId || null;
        this.ZoneState = params && params.ZoneState || null;
    }
}
exports.ZoneInfo = ZoneInfo;
/**
 * InquiryPriceModifyInstancesChargeType返回参数结构体
 * @class
 */
class InquiryPriceModifyInstancesChargeTypeResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceModifyInstancesChargeTypeResponse = InquiryPriceModifyInstancesChargeTypeResponse;
/**
 * DescribeKeyPairs返回参数结构体
 * @class
 */
class DescribeKeyPairsResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.KeyPairSet = params && params.KeyPairSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeKeyPairsResponse = DescribeKeyPairsResponse;
/**
 * ResetInstancesPassword请求参数结构体
 * @class
 */
class ResetInstancesPasswordRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.Password = params && params.Password || null;
        this.UserName = params && params.UserName || null;
        this.ForceStop = params && params.ForceStop || null;
    }
}
exports.ResetInstancesPasswordRequest = ResetInstancesPasswordRequest;
/**
 * 描述了网络计费
 * @class
 */
class InternetChargeTypeConfig {
    constructor(params) {
        this.InternetChargeType = params && params.InternetChargeType || null;
        this.Description = params && params.Description || null;
    }
}
exports.InternetChargeTypeConfig = InternetChargeTypeConfig;
/**
 * DescribeImages返回参数结构体
 * @class
 */
class DescribeImagesResponse {
    constructor(params) {
        this.ImageSet = params && params.ImageSet || null;
        this.TotalCount = params && params.TotalCount || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeImagesResponse = DescribeImagesResponse;
/**
 * ModifyInstancesVpcAttribute返回参数结构体
 * @class
 */
class ModifyInstancesVpcAttributeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyInstancesVpcAttributeResponse = ModifyInstancesVpcAttributeResponse;
/**
 * InquiryPriceResetInstancesType请求参数结构体
 * @class
 */
class InquiryPriceResetInstancesTypeRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceType = params && params.InstanceType || null;
    }
}
exports.InquiryPriceResetInstancesTypeRequest = InquiryPriceResetInstancesTypeRequest;
/**
 * DescribeInstancesOperationLimit请求参数结构体
 * @class
 */
class DescribeInstancesOperationLimitRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.Operation = params && params.Operation || null;
    }
}
exports.DescribeInstancesOperationLimitRequest = DescribeInstancesOperationLimitRequest;
/**
 * ModifyInstancesChargeType请求参数结构体
 * @class
 */
class ModifyInstancesChargeTypeRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceChargeType = params && params.InstanceChargeType || null;
        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;
    }
}
exports.ModifyInstancesChargeTypeRequest = ModifyInstancesChargeTypeRequest;
/**
 * DescribeInstanceVncUrl请求参数结构体
 * @class
 */
class DescribeInstanceVncUrlRequest {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
    }
}
exports.DescribeInstanceVncUrlRequest = DescribeInstanceVncUrlRequest;
/**
 * ModifyImageSharePermission请求参数结构体
 * @class
 */
class ModifyImageSharePermissionRequest {
    constructor(params) {
        this.ImageId = params && params.ImageId || null;
        this.AccountIds = params && params.AccountIds || null;
        this.Permission = params && params.Permission || null;
    }
}
exports.ModifyImageSharePermissionRequest = ModifyImageSharePermissionRequest;
/**
 * DisassociateInstancesKeyPairs返回参数结构体
 * @class
 */
class DisassociateInstancesKeyPairsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DisassociateInstancesKeyPairsResponse = DisassociateInstancesKeyPairsResponse;
/**
 * InquiryPriceResizeInstanceDisks请求参数结构体
 * @class
 */
class InquiryPriceResizeInstanceDisksRequest {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
        this.DataDisks = params && params.DataDisks || null;
        this.ForceStop = params && params.ForceStop || null;
    }
}
exports.InquiryPriceResizeInstanceDisksRequest = InquiryPriceResizeInstanceDisksRequest;
/**
 * RunInstances返回参数结构体
 * @class
 */
class RunInstancesResponse {
    constructor(params) {
        this.InstanceIdSet = params && params.InstanceIdSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.RunInstancesResponse = RunInstancesResponse;
/**
 * ResetInstancesInternetMaxBandwidth返回参数结构体
 * @class
 */
class ResetInstancesInternetMaxBandwidthResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ResetInstancesInternetMaxBandwidthResponse = ResetInstancesInternetMaxBandwidthResponse;
/**
 * ModifyInstancesAttribute返回参数结构体
 * @class
 */
class ModifyInstancesAttributeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyInstancesAttributeResponse = ModifyInstancesAttributeResponse;
/**
 * ModifyImageSharePermission返回参数结构体
 * @class
 */
class ModifyImageSharePermissionResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyImageSharePermissionResponse = ModifyImageSharePermissionResponse;
/**
 * DescribeInstancesOperationLimit返回参数结构体
 * @class
 */
class DescribeInstancesOperationLimitResponse {
    constructor(params) {
        this.InstanceOperationLimitSet = params && params.InstanceOperationLimitSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstancesOperationLimitResponse = DescribeInstancesOperationLimitResponse;
/**
 * SyncImages返回参数结构体
 * @class
 */
class SyncImagesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.SyncImagesResponse = SyncImagesResponse;
/**
 * DescribeZoneInstanceConfigInfos返回参数结构体
 * @class
 */
class DescribeZoneInstanceConfigInfosResponse {
    constructor(params) {
        this.InstanceTypeQuotaSet = params && params.InstanceTypeQuotaSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeZoneInstanceConfigInfosResponse = DescribeZoneInstanceConfigInfosResponse;
/**
 * ModifyInstancesAttribute请求参数结构体
 * @class
 */
class ModifyInstancesAttributeRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceName = params && params.InstanceName || null;
        this.SecurityGroups = params && params.SecurityGroups || null;
    }
}
exports.ModifyInstancesAttributeRequest = ModifyInstancesAttributeRequest;
/**
 * RenewHosts请求参数结构体
 * @class
 */
class RenewHostsRequest {
    constructor(params) {
        this.HostIds = params && params.HostIds || null;
        this.HostChargePrepaid = params && params.HostChargePrepaid || null;
    }
}
exports.RenewHostsRequest = RenewHostsRequest;
/**
 * DescribeZones请求参数结构体
 * @class
 */
class DescribeZonesRequest {
    constructor(params) {
    }
}
exports.DescribeZonesRequest = DescribeZonesRequest;
/**
 * StartInstances请求参数结构体
 * @class
 */
class StartInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
    }
}
exports.StartInstancesRequest = StartInstancesRequest;
/**
 * 标签键值对
 * @class
 */
class Tag {
    constructor(params) {
        this.Key = params && params.Key || null;
        this.Value = params && params.Value || null;
    }
}
exports.Tag = Tag;
/**
 * DescribeInstanceInternetBandwidthConfigs返回参数结构体
 * @class
 */
class DescribeInstanceInternetBandwidthConfigsResponse {
    constructor(params) {
        this.InternetBandwidthConfigSet = params && params.InternetBandwidthConfigSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstanceInternetBandwidthConfigsResponse = DescribeInstanceInternetBandwidthConfigsResponse;
/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 * @class
 */
class Placement {
    constructor(params) {
        this.Zone = params && params.Zone || null;
        this.ProjectId = params && params.ProjectId || null;
        this.HostIds = params && params.HostIds || null;
        this.HostIps = params && params.HostIps || null;
        this.HostId = params && params.HostId || null;
    }
}
exports.Placement = Placement;
/**
 * DescribeDisasterRecoverGroups请求参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupsRequest {
    constructor(params) {
        this.DisasterRecoverGroupIds = params && params.DisasterRecoverGroupIds || null;
        this.Name = params && params.Name || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
    }
}
exports.DescribeDisasterRecoverGroupsRequest = DescribeDisasterRecoverGroupsRequest;
/**
 * SyncImages请求参数结构体
 * @class
 */
class SyncImagesRequest {
    constructor(params) {
        this.ImageIds = params && params.ImageIds || null;
        this.DestinationRegions = params && params.DestinationRegions || null;
    }
}
exports.SyncImagesRequest = SyncImagesRequest;
/**
 * DisassociateInstancesKeyPairs请求参数结构体
 * @class
 */
class DisassociateInstancesKeyPairsRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.KeyIds = params && params.KeyIds || null;
        this.ForceStop = params && params.ForceStop || null;
    }
}
exports.DisassociateInstancesKeyPairsRequest = DisassociateInstancesKeyPairsRequest;
/**
 * DescribeImageQuota请求参数结构体
 * @class
 */
class DescribeImageQuotaRequest {
    constructor(params) {
    }
}
exports.DescribeImageQuotaRequest = DescribeImageQuotaRequest;
/**
 * DescribeInstanceFamilyConfigs返回参数结构体
 * @class
 */
class DescribeInstanceFamilyConfigsResponse {
    constructor(params) {
        this.InstanceFamilyConfigSet = params && params.InstanceFamilyConfigSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstanceFamilyConfigsResponse = DescribeInstanceFamilyConfigsResponse;
/**
 * CreateImage返回参数结构体
 * @class
 */
class CreateImageResponse {
    constructor(params) {
        this.ImageId = params && params.ImageId || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.CreateImageResponse = CreateImageResponse;
/**
 * StopInstances返回参数结构体
 * @class
 */
class StopInstancesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.StopInstancesResponse = StopInstancesResponse;
/**
 * 竞价请求相关选项
 * @class
 */
class InstanceMarketOptionsRequest {
    constructor(params) {
        this.SpotOptions = params && params.SpotOptions || null;
        this.MarketType = params && params.MarketType || null;
    }
}
exports.InstanceMarketOptionsRequest = InstanceMarketOptionsRequest;
/**
 * InquiryPriceResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
class InquiryPriceResetInstancesInternetMaxBandwidthRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InternetAccessible = params && params.InternetAccessible || null;
        this.StartTime = params && params.StartTime || null;
        this.EndTime = params && params.EndTime || null;
    }
}
exports.InquiryPriceResetInstancesInternetMaxBandwidthRequest = InquiryPriceResetInstancesInternetMaxBandwidthRequest;
/**
 * ResetInstancesPassword返回参数结构体
 * @class
 */
class ResetInstancesPasswordResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ResetInstancesPasswordResponse = ResetInstancesPasswordResponse;
/**
 * InquiryPriceRunInstances请求参数结构体
 * @class
 */
class InquiryPriceRunInstancesRequest {
    constructor(params) {
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
exports.InquiryPriceRunInstancesRequest = InquiryPriceRunInstancesRequest;
/**
 * 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。
 * @class
 */
class Image {
    constructor(params) {
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
exports.Image = Image;
/**
 * DescribeDisasterRecoverGroupQuota返回参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupQuotaResponse {
    constructor(params) {
        this.GroupQuota = params && params.GroupQuota || null;
        this.CurrentNum = params && params.CurrentNum || null;
        this.CvmInHostGroupQuota = params && params.CvmInHostGroupQuota || null;
        this.CvmInSwGroupQuota = params && params.CvmInSwGroupQuota || null;
        this.CvmInRackGroupQuota = params && params.CvmInRackGroupQuota || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeDisasterRecoverGroupQuotaResponse = DescribeDisasterRecoverGroupQuotaResponse;
/**
 * DescribeRegions请求参数结构体
 * @class
 */
class DescribeRegionsRequest {
    constructor(params) {
    }
}
exports.DescribeRegionsRequest = DescribeRegionsRequest;
/**
 * CreateDisasterRecoverGroup请求参数结构体
 * @class
 */
class CreateDisasterRecoverGroupRequest {
    constructor(params) {
        this.Name = params && params.Name || null;
        this.Type = params && params.Type || null;
        this.ClientToken = params && params.ClientToken || null;
    }
}
exports.CreateDisasterRecoverGroupRequest = CreateDisasterRecoverGroupRequest;
/**
 * DescribeReservedInstances返回参数结构体
 * @class
 */
class DescribeReservedInstancesResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.ReservedInstancesSet = params && params.ReservedInstancesSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeReservedInstancesResponse = DescribeReservedInstancesResponse;
/**
 * DescribeImportImageOs返回参数结构体
 * @class
 */
class DescribeImportImageOsResponse {
    constructor(params) {
        this.ImportImageOsListSupported = params && params.ImportImageOsListSupported || null;
        this.ImportImageOsVersionSet = params && params.ImportImageOsVersionSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeImportImageOsResponse = DescribeImportImageOsResponse;
/**
 * ModifyKeyPairAttribute返回参数结构体
 * @class
 */
class ModifyKeyPairAttributeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyKeyPairAttributeResponse = ModifyKeyPairAttributeResponse;
/**
 * 描述了数据盘的信息
 * @class
 */
class DataDisk {
    constructor(params) {
        this.DiskSize = params && params.DiskSize || null;
        this.DiskType = params && params.DiskType || null;
        this.DiskId = params && params.DiskId || null;
        this.DeleteWithInstance = params && params.DeleteWithInstance || null;
        this.SnapshotId = params && params.SnapshotId || null;
        this.Encrypt = params && params.Encrypt || null;
        this.KmsKeyId = params && params.KmsKeyId || null;
    }
}
exports.DataDisk = DataDisk;
/**
 * DescribeKeyPairs请求参数结构体
 * @class
 */
class DescribeKeyPairsRequest {
    constructor(params) {
        this.KeyIds = params && params.KeyIds || null;
        this.Filters = params && params.Filters || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
    }
}
exports.DescribeKeyPairsRequest = DescribeKeyPairsRequest;
/**
 * 描述了单台实例操作次数限制
 * @class
 */
class OperationCountLimit {
    constructor(params) {
        this.Operation = params && params.Operation || null;
        this.InstanceId = params && params.InstanceId || null;
        this.CurrentCount = params && params.CurrentCount || null;
        this.LimitCount = params && params.LimitCount || null;
    }
}
exports.OperationCountLimit = OperationCountLimit;
/**
 * DeleteDisasterRecoverGroups返回参数结构体
 * @class
 */
class DeleteDisasterRecoverGroupsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DeleteDisasterRecoverGroupsResponse = DeleteDisasterRecoverGroupsResponse;
/**
 * cdh实例详细信息
 * @class
 */
class HostItem {
    constructor(params) {
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
exports.HostItem = HostItem;
/**
 * 扩展数据
 * @class
 */
class Externals {
    constructor(params) {
        this.ReleaseAddress = params && params.ReleaseAddress || null;
        this.UnsupportNetworks = params && params.UnsupportNetworks || null;
        this.StorageBlockAttr = params && params.StorageBlockAttr || null;
    }
}
exports.Externals = Externals;
/**
 * InquiryPriceModifyInstancesChargeType请求参数结构体
 * @class
 */
class InquiryPriceModifyInstancesChargeTypeRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceChargeType = params && params.InstanceChargeType || null;
        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;
    }
}
exports.InquiryPriceModifyInstancesChargeTypeRequest = InquiryPriceModifyInstancesChargeTypeRequest;
/**
 * CreateImage请求参数结构体
 * @class
 */
class CreateImageRequest {
    constructor(params) {
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
exports.CreateImageRequest = CreateImageRequest;
/**
 * 描述实例的信息
 * @class
 */
class Instance {
    constructor(params) {
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
exports.Instance = Instance;
/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 * @class
 */
class EnhancedService {
    constructor(params) {
        this.SecurityService = params && params.SecurityService || null;
        this.MonitorService = params && params.MonitorService || null;
    }
}
exports.EnhancedService = EnhancedService;
/**
 * CreateKeyPair返回参数结构体
 * @class
 */
class CreateKeyPairResponse {
    constructor(params) {
        this.KeyPair = params && params.KeyPair || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.CreateKeyPairResponse = CreateKeyPairResponse;
/**
 * DescribeInstanceVncUrl返回参数结构体
 * @class
 */
class DescribeInstanceVncUrlResponse {
    constructor(params) {
        this.InstanceVncUrl = params && params.InstanceVncUrl || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstanceVncUrlResponse = DescribeInstanceVncUrlResponse;
/**
 * DescribeReservedInstancesOfferings请求参数结构体
 * @class
 */
class DescribeReservedInstancesOfferingsRequest {
    constructor(params) {
        this.DryRun = params && params.DryRun || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
        this.MaxDuration = params && params.MaxDuration || null;
        this.MinDuration = params && params.MinDuration || null;
        this.Filters = params && params.Filters || null;
    }
}
exports.DescribeReservedInstancesOfferingsRequest = DescribeReservedInstancesOfferingsRequest;
/**
 * DescribeDisasterRecoverGroups返回参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupsResponse {
    constructor(params) {
        this.DisasterRecoverGroupSet = params && params.DisasterRecoverGroupSet || null;
        this.TotalCount = params && params.TotalCount || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeDisasterRecoverGroupsResponse = DescribeDisasterRecoverGroupsResponse;
/**
 * 描述了 “云安全” 服务相关的信息
 * @class
 */
class RunSecurityServiceEnabled {
    constructor(params) {
        this.Enabled = params && params.Enabled || null;
    }
}
exports.RunSecurityServiceEnabled = RunSecurityServiceEnabled;
/**
 * 定时任务
 * @class
 */
class ActionTimer {
    constructor(params) {
        this.Externals = params && params.Externals || null;
        this.TimerAction = params && params.TimerAction || null;
        this.ActionTime = params && params.ActionTime || null;
    }
}
exports.ActionTimer = ActionTimer;
/**
 * 创建资源实例时同时绑定的标签对说明
 * @class
 */
class TagSpecification {
    constructor(params) {
        this.ResourceType = params && params.ResourceType || null;
        this.Tags = params && params.Tags || null;
    }
}
exports.TagSpecification = TagSpecification;
/**
 * ResetInstancesInternetMaxBandwidth请求参数结构体
 * @class
 */
class ResetInstancesInternetMaxBandwidthRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InternetAccessible = params && params.InternetAccessible || null;
        this.StartTime = params && params.StartTime || null;
        this.EndTime = params && params.EndTime || null;
    }
}
exports.ResetInstancesInternetMaxBandwidthRequest = ResetInstancesInternetMaxBandwidthRequest;
/**
 * 描述实例的机型族配置信息
形如：{'InstanceFamilyName': '标准型S1', 'InstanceFamily': 'S1'}、{'InstanceFamilyName': '网络优化型N1', 'InstanceFamily': 'N1'}、{'InstanceFamilyName': '高IO型I1', 'InstanceFamily': 'I1'}等。
 * @class
 */
class InstanceFamilyConfig {
    constructor(params) {
        this.InstanceFamilyName = params && params.InstanceFamilyName || null;
        this.InstanceFamily = params && params.InstanceFamily || null;
    }
}
exports.InstanceFamilyConfig = InstanceFamilyConfig;
/**
 * AssociateSecurityGroups返回参数结构体
 * @class
 */
class AssociateSecurityGroupsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.AssociateSecurityGroupsResponse = AssociateSecurityGroupsResponse;
/**
 * ImportImage请求参数结构体
 * @class
 */
class ImportImageRequest {
    constructor(params) {
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
exports.ImportImageRequest = ImportImageRequest;
/**
 * 竞价相关选项
 * @class
 */
class SpotMarketOptions {
    constructor(params) {
        this.MaxPrice = params && params.MaxPrice || null;
        this.SpotInstanceType = params && params.SpotInstanceType || null;
    }
}
exports.SpotMarketOptions = SpotMarketOptions;
/**
 * DescribeImportImageOs请求参数结构体
 * @class
 */
class DescribeImportImageOsRequest {
    constructor(params) {
    }
}
exports.DescribeImportImageOsRequest = DescribeImportImageOsRequest;
/**
 * CreateKeyPair请求参数结构体
 * @class
 */
class CreateKeyPairRequest {
    constructor(params) {
        this.KeyName = params && params.KeyName || null;
        this.ProjectId = params && params.ProjectId || null;
    }
}
exports.CreateKeyPairRequest = CreateKeyPairRequest;
/**
 * 描述实例的状态。状态类型详见[实例状态表](/document/api/213/15753#InstanceStatus)
 * @class
 */
class InstanceStatus {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
        this.InstanceState = params && params.InstanceState || null;
    }
}
exports.InstanceStatus = InstanceStatus;
/**
 * InquiryPriceRenewInstances返回参数结构体
 * @class
 */
class InquiryPriceRenewInstancesResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceRenewInstancesResponse = InquiryPriceRenewInstancesResponse;
/**
 * AllocateHosts返回参数结构体
 * @class
 */
class AllocateHostsResponse {
    constructor(params) {
        this.HostIdSet = params && params.HostIdSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.AllocateHostsResponse = AllocateHostsResponse;
/**
 * DescribeImageSharePermission请求参数结构体
 * @class
 */
class DescribeImageSharePermissionRequest {
    constructor(params) {
        this.ImageId = params && params.ImageId || null;
    }
}
exports.DescribeImageSharePermissionRequest = DescribeImageSharePermissionRequest;
/**
 * 容灾组信息
 * @class
 */
class DisasterRecoverGroup {
    constructor(params) {
        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;
        this.Name = params && params.Name || null;
        this.Type = params && params.Type || null;
        this.CvmQuotaTotal = params && params.CvmQuotaTotal || null;
        this.CurrentNum = params && params.CurrentNum || null;
        this.InstanceIds = params && params.InstanceIds || null;
        this.CreateTime = params && params.CreateTime || null;
    }
}
exports.DisasterRecoverGroup = DisasterRecoverGroup;
/**
 * InquiryPriceResetInstance返回参数结构体
 * @class
 */
class InquiryPriceResetInstanceResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceResetInstanceResponse = InquiryPriceResetInstanceResponse;
/**
 * DescribeInstanceTypeConfigs请求参数结构体
 * @class
 */
class DescribeInstanceTypeConfigsRequest {
    constructor(params) {
        this.Filters = params && params.Filters || null;
    }
}
exports.DescribeInstanceTypeConfigsRequest = DescribeInstanceTypeConfigsRequest;
/**
 * DescribeImageSharePermission返回参数结构体
 * @class
 */
class DescribeImageSharePermissionResponse {
    constructor(params) {
        this.SharePermissionSet = params && params.SharePermissionSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeImageSharePermissionResponse = DescribeImageSharePermissionResponse;
/**
 * ModifyHostsAttribute返回参数结构体
 * @class
 */
class ModifyHostsAttributeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyHostsAttributeResponse = ModifyHostsAttributeResponse;
/**
 * DescribeDisasterRecoverGroupQuota请求参数结构体
 * @class
 */
class DescribeDisasterRecoverGroupQuotaRequest {
    constructor(params) {
    }
}
exports.DescribeDisasterRecoverGroupQuotaRequest = DescribeDisasterRecoverGroupQuotaRequest;
/**
 * StartInstances返回参数结构体
 * @class
 */
class StartInstancesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.StartInstancesResponse = StartInstancesResponse;
/**
 * ModifyInstancesVpcAttribute请求参数结构体
 * @class
 */
class ModifyInstancesVpcAttributeRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.VirtualPrivateCloud = params && params.VirtualPrivateCloud || null;
        this.ForceStop = params && params.ForceStop || null;
        this.ReserveHostName = params && params.ReserveHostName || null;
    }
}
exports.ModifyInstancesVpcAttributeRequest = ModifyInstancesVpcAttributeRequest;
/**
 * DescribeReservedInstances请求参数结构体
 * @class
 */
class DescribeReservedInstancesRequest {
    constructor(params) {
        this.DryRun = params && params.DryRun || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
        this.Filters = params && params.Filters || null;
    }
}
exports.DescribeReservedInstancesRequest = DescribeReservedInstancesRequest;
/**
 * DescribeInternetChargeTypeConfigs返回参数结构体
 * @class
 */
class DescribeInternetChargeTypeConfigsResponse {
    constructor(params) {
        this.InternetChargeTypeConfigSet = params && params.InternetChargeTypeConfigSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInternetChargeTypeConfigsResponse = DescribeInternetChargeTypeConfigsResponse;
/**
 * DescribeZoneInstanceConfigInfos请求参数结构体
 * @class
 */
class DescribeZoneInstanceConfigInfosRequest {
    constructor(params) {
        this.Filters = params && params.Filters || null;
    }
}
exports.DescribeZoneInstanceConfigInfosRequest = DescribeZoneInstanceConfigInfosRequest;
/**
 * DescribeZones返回参数结构体
 * @class
 */
class DescribeZonesResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.ZoneSet = params && params.ZoneSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeZonesResponse = DescribeZonesResponse;
/**
 * 描述了单项的价格信息
 * @class
 */
class ItemPrice {
    constructor(params) {
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
exports.ItemPrice = ItemPrice;
/**
 * 描述实例机型配额信息。
 * @class
 */
class InstanceTypeQuotaItem {
    constructor(params) {
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
exports.InstanceTypeQuotaItem = InstanceTypeQuotaItem;
/**
 * 支持的操作系统类型，根据windows和Linux分类。
 * @class
 */
class ImageOsList {
    constructor(params) {
        this.Windows = params && params.Windows || null;
        this.Linux = params && params.Linux || null;
    }
}
exports.ImageOsList = ImageOsList;
/**
 * InquiryPriceRunInstances返回参数结构体
 * @class
 */
class InquiryPriceRunInstancesResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceRunInstancesResponse = InquiryPriceRunInstancesResponse;
/**
 * DescribeHosts请求参数结构体
 * @class
 */
class DescribeHostsRequest {
    constructor(params) {
        this.Filters = params && params.Filters || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
    }
}
exports.DescribeHostsRequest = DescribeHostsRequest;
/**
 * ModifyInstancesRenewFlag返回参数结构体
 * @class
 */
class ModifyInstancesRenewFlagResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyInstancesRenewFlagResponse = ModifyInstancesRenewFlagResponse;
/**
 * DescribeInstancesStatus请求参数结构体
 * @class
 */
class DescribeInstancesStatusRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
    }
}
exports.DescribeInstancesStatusRequest = DescribeInstancesStatusRequest;
/**
 * InquiryPriceResizeInstanceDisks返回参数结构体
 * @class
 */
class InquiryPriceResizeInstanceDisksResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceResizeInstanceDisksResponse = InquiryPriceResizeInstanceDisksResponse;
/**
 * TerminateInstances请求参数结构体
 * @class
 */
class TerminateInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
    }
}
exports.TerminateInstancesRequest = TerminateInstancesRequest;
/**
 * 镜像分享信息结构
 * @class
 */
class SharePermission {
    constructor(params) {
        this.CreatedTime = params && params.CreatedTime || null;
        this.AccountId = params && params.AccountId || null;
    }
}
exports.SharePermission = SharePermission;
/**
 * 描述用户已购买预留实例计费信息
 * @class
 */
class ReservedInstances {
    constructor(params) {
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
exports.ReservedInstances = ReservedInstances;
/**
 * DeleteImages返回参数结构体
 * @class
 */
class DeleteImagesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DeleteImagesResponse = DeleteImagesResponse;
/**
 * ImportImage返回参数结构体
 * @class
 */
class ImportImageResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ImportImageResponse = ImportImageResponse;
/**
 * ModifyDisasterRecoverGroupAttribute请求参数结构体
 * @class
 */
class ModifyDisasterRecoverGroupAttributeRequest {
    constructor(params) {
        this.DisasterRecoverGroupId = params && params.DisasterRecoverGroupId || null;
        this.Name = params && params.Name || null;
    }
}
exports.ModifyDisasterRecoverGroupAttributeRequest = ModifyDisasterRecoverGroupAttributeRequest;
/**
 * RebootInstances返回参数结构体
 * @class
 */
class RebootInstancesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.RebootInstancesResponse = RebootInstancesResponse;
/**
 * InquiryPriceResetInstancesType返回参数结构体
 * @class
 */
class InquiryPriceResetInstancesTypeResponse {
    constructor(params) {
        this.Price = params && params.Price || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.InquiryPriceResetInstancesTypeResponse = InquiryPriceResetInstancesTypeResponse;
/**
 * 描述可购买预留实例计费信息
 * @class
 */
class ReservedInstancesOffering {
    constructor(params) {
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
exports.ReservedInstancesOffering = ReservedInstancesOffering;
/**
 * 操作系统支持的类型。
 * @class
 */
class OsVersion {
    constructor(params) {
        this.OsName = params && params.OsName || null;
        this.OsVersions = params && params.OsVersions || null;
        this.Architecture = params && params.Architecture || null;
    }
}
exports.OsVersion = OsVersion;
/**
 * ModifyImageAttribute返回参数结构体
 * @class
 */
class ModifyImageAttributeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyImageAttributeResponse = ModifyImageAttributeResponse;
/**
 * InquiryPriceRenewInstances请求参数结构体
 * @class
 */
class InquiryPriceRenewInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.InstanceChargePrepaid = params && params.InstanceChargePrepaid || null;
        this.DryRun = params && params.DryRun || null;
        this.RenewPortableDataDisk = params && params.RenewPortableDataDisk || null;
    }
}
exports.InquiryPriceRenewInstancesRequest = InquiryPriceRenewInstancesRequest;
/**
 * DescribeInstances请求参数结构体
 * @class
 */
class DescribeInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.Filters = params && params.Filters || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
    }
}
exports.DescribeInstancesRequest = DescribeInstancesRequest;
/**
 * 地域信息
 * @class
 */
class RegionInfo {
    constructor(params) {
        this.Region = params && params.Region || null;
        this.RegionName = params && params.RegionName || null;
        this.RegionState = params && params.RegionState || null;
    }
}
exports.RegionInfo = RegionInfo;
/**
 * StopInstances请求参数结构体
 * @class
 */
class StopInstancesRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.ForceStop = params && params.ForceStop || null;
        this.StopType = params && params.StopType || null;
        this.StoppedMode = params && params.StoppedMode || null;
    }
}
exports.StopInstancesRequest = StopInstancesRequest;
/**
 * DescribeInternetChargeTypeConfigs请求参数结构体
 * @class
 */
class DescribeInternetChargeTypeConfigsRequest {
    constructor(params) {
    }
}
exports.DescribeInternetChargeTypeConfigsRequest = DescribeInternetChargeTypeConfigsRequest;
/**
 * DescribeImages请求参数结构体
 * @class
 */
class DescribeImagesRequest {
    constructor(params) {
        this.ImageIds = params && params.ImageIds || null;
        this.Filters = params && params.Filters || null;
        this.Offset = params && params.Offset || null;
        this.Limit = params && params.Limit || null;
        this.InstanceType = params && params.InstanceType || null;
    }
}
exports.DescribeImagesRequest = DescribeImagesRequest;
/**
 * ModifyImageAttribute请求参数结构体
 * @class
 */
class ModifyImageAttributeRequest {
    constructor(params) {
        this.ImageId = params && params.ImageId || null;
        this.ImageName = params && params.ImageName || null;
        this.ImageDescription = params && params.ImageDescription || null;
    }
}
exports.ModifyImageAttributeRequest = ModifyImageAttributeRequest;
/**
 * ResizeInstanceDisks返回参数结构体
 * @class
 */
class ResizeInstanceDisksResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ResizeInstanceDisksResponse = ResizeInstanceDisksResponse;
/**
 * ModifyInstancesRenewFlag请求参数结构体
 * @class
 */
class ModifyInstancesRenewFlagRequest {
    constructor(params) {
        this.InstanceIds = params && params.InstanceIds || null;
        this.RenewFlag = params && params.RenewFlag || null;
    }
}
exports.ModifyInstancesRenewFlagRequest = ModifyInstancesRenewFlagRequest;
/**
 * DisassociateSecurityGroups请求参数结构体
 * @class
 */
class DisassociateSecurityGroupsRequest {
    constructor(params) {
        this.SecurityGroupIds = params && params.SecurityGroupIds || null;
        this.InstanceIds = params && params.InstanceIds || null;
    }
}
exports.DisassociateSecurityGroupsRequest = DisassociateSecurityGroupsRequest;
/**
 * ModifyHostsAttribute请求参数结构体
 * @class
 */
class ModifyHostsAttributeRequest {
    constructor(params) {
        this.HostIds = params && params.HostIds || null;
        this.HostName = params && params.HostName || null;
        this.RenewFlag = params && params.RenewFlag || null;
        this.ProjectId = params && params.ProjectId || null;
    }
}
exports.ModifyHostsAttributeRequest = ModifyHostsAttributeRequest;
/**
 * ImportKeyPair请求参数结构体
 * @class
 */
class ImportKeyPairRequest {
    constructor(params) {
        this.KeyName = params && params.KeyName || null;
        this.ProjectId = params && params.ProjectId || null;
        this.PublicKey = params && params.PublicKey || null;
    }
}
exports.ImportKeyPairRequest = ImportKeyPairRequest;
/**
 * 描述密钥对信息
 * @class
 */
class KeyPair {
    constructor(params) {
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
exports.KeyPair = KeyPair;
/**
 * DescribeReservedInstancesOfferings返回参数结构体
 * @class
 */
class DescribeReservedInstancesOfferingsResponse {
    constructor(params) {
        this.TotalCount = params && params.TotalCount || null;
        this.ReservedInstancesOfferingsSet = params && params.ReservedInstancesOfferingsSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeReservedInstancesOfferingsResponse = DescribeReservedInstancesOfferingsResponse;
/**
 * RenewInstances返回参数结构体
 * @class
 */
class RenewInstancesResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.RenewInstancesResponse = RenewInstancesResponse;
/**
 * 描述了 “云监控” 服务相关的信息
 * @class
 */
class RunMonitorServiceEnabled {
    constructor(params) {
        this.Enabled = params && params.Enabled || null;
    }
}
exports.RunMonitorServiceEnabled = RunMonitorServiceEnabled;
/**
 * ResetInstance返回参数结构体
 * @class
 */
class ResetInstanceResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ResetInstanceResponse = ResetInstanceResponse;
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
class Filter {
    constructor(params) {
        this.Name = params && params.Name || null;
        this.Values = params && params.Values || null;
    }
}
exports.Filter = Filter;
/**
 * 描述了VPC相关信息，包括子网，IP信息等
 * @class
 */
class VirtualPrivateCloud {
    constructor(params) {
        this.VpcId = params && params.VpcId || null;
        this.SubnetId = params && params.SubnetId || null;
        this.AsVpcGateway = params && params.AsVpcGateway || null;
        this.PrivateIpAddresses = params && params.PrivateIpAddresses || null;
        this.Ipv6AddressCount = params && params.Ipv6AddressCount || null;
    }
}
exports.VirtualPrivateCloud = VirtualPrivateCloud;
/**
 * 描述了按带宽计费的相关信息
 * @class
 */
class InternetBandwidthConfig {
    constructor(params) {
        this.StartTime = params && params.StartTime || null;
        this.EndTime = params && params.EndTime || null;
        this.InternetAccessible = params && params.InternetAccessible || null;
    }
}
exports.InternetBandwidthConfig = InternetBandwidthConfig;
/**
 * ModifyDisasterRecoverGroupAttribute返回参数结构体
 * @class
 */
class ModifyDisasterRecoverGroupAttributeResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyDisasterRecoverGroupAttributeResponse = ModifyDisasterRecoverGroupAttributeResponse;
/**
 * DescribeInstanceTypeConfigs返回参数结构体
 * @class
 */
class DescribeInstanceTypeConfigsResponse {
    constructor(params) {
        this.InstanceTypeConfigSet = params && params.InstanceTypeConfigSet || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DescribeInstanceTypeConfigsResponse = DescribeInstanceTypeConfigsResponse;
/**
 * ResizeInstanceDisks请求参数结构体
 * @class
 */
class ResizeInstanceDisksRequest {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
        this.DataDisks = params && params.DataDisks || null;
        this.ForceStop = params && params.ForceStop || null;
    }
}
exports.ResizeInstanceDisksRequest = ResizeInstanceDisksRequest;
/**
 * DescribeInstanceFamilyConfigs请求参数结构体
 * @class
 */
class DescribeInstanceFamilyConfigsRequest {
    constructor(params) {
    }
}
exports.DescribeInstanceFamilyConfigsRequest = DescribeInstanceFamilyConfigsRequest;
/**
 * DescribeInstanceInternetBandwidthConfigs请求参数结构体
 * @class
 */
class DescribeInstanceInternetBandwidthConfigsRequest {
    constructor(params) {
        this.InstanceId = params && params.InstanceId || null;
    }
}
exports.DescribeInstanceInternetBandwidthConfigsRequest = DescribeInstanceInternetBandwidthConfigsRequest;
/**
 * PurchaseReservedInstancesOffering返回参数结构体
 * @class
 */
class PurchaseReservedInstancesOfferingResponse {
    constructor(params) {
        this.ReservedInstanceId = params && params.ReservedInstanceId || null;
        this.RequestId = params && params.RequestId || null;
    }
}
exports.PurchaseReservedInstancesOfferingResponse = PurchaseReservedInstancesOfferingResponse;
/**
 * HDD的本地存储信息
 * @class
 */
class StorageBlock {
    constructor(params) {
        this.Type = params && params.Type || null;
        this.MinSize = params && params.MinSize || null;
        this.MaxSize = params && params.MaxSize || null;
    }
}
exports.StorageBlock = StorageBlock;
/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 * @class
 */
class InternetAccessible {
    constructor(params) {
        this.InternetChargeType = params && params.InternetChargeType || null;
        this.InternetMaxBandwidthOut = params && params.InternetMaxBandwidthOut || null;
        this.PublicIpAssigned = params && params.PublicIpAssigned || null;
        this.BandwidthPackageId = params && params.BandwidthPackageId || null;
    }
}
exports.InternetAccessible = InternetAccessible;
/**
 * RenewHosts返回参数结构体
 * @class
 */
class RenewHostsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.RenewHostsResponse = RenewHostsResponse;
/**
 * DisassociateSecurityGroups返回参数结构体
 * @class
 */
class DisassociateSecurityGroupsResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.DisassociateSecurityGroupsResponse = DisassociateSecurityGroupsResponse;
/**
 * 描述镜像关联的快照信息
 * @class
 */
class Snapshot {
    constructor(params) {
        this.SnapshotId = params && params.SnapshotId || null;
        this.DiskUsage = params && params.DiskUsage || null;
        this.DiskSize = params && params.DiskSize || null;
    }
}
exports.Snapshot = Snapshot;
/**
 * ModifyInstancesProject返回参数结构体
 * @class
 */
class ModifyInstancesProjectResponse {
    constructor(params) {
        this.RequestId = params && params.RequestId || null;
    }
}
exports.ModifyInstancesProjectResponse = ModifyInstancesProjectResponse;
/**
 * 描述了实例的计费模式
 * @class
 */
class InstanceChargePrepaid {
    constructor(params) {
        this.Period = params && params.Period || null;
        this.RenewFlag = params && params.RenewFlag || null;
    }
}
exports.InstanceChargePrepaid = InstanceChargePrepaid;
/**
 * 价格
 * @class
 */
class Price {
    constructor(params) {
        this.InstancePrice = params && params.InstancePrice || null;
        this.BandwidthPrice = params && params.BandwidthPrice || null;
    }
}
exports.Price = Price;
//# sourceMappingURL=cvm_models.js.map