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
  RunEIPDirectServiceEnabled,
  DescribeTaskResultResponse,
  Ipv6Address,
  DescribePeakBaseOverviewRequest,
  CreateNetworkInterfaceRequest,
  DescribeInstancesDeniedActionsRequest,
  Internet,
  DescribeModuleResponse,
  ImageTask,
  Province,
  ImportCustomImageResponse,
  ModifyModuleNameResponse,
  DescribeNetworkInterfacesRequest,
  DescribeSubnetsRequest,
  CreateSubnetRequest,
  DeleteModuleResponse,
  EipQuota,
  DeleteSubnetResponse,
  ModifyAddressesBandwidthResponse,
  DescribeSubnetsResponse,
  RunInstancesRequest,
  DescribeInstancesResponse,
  NetworkInterface,
  ResetInstancesPasswordResponse,
  SrcImage,
  InstanceTypeConfig,
  DescribeNodeResponse,
  RemovePrivateIpAddressesResponse,
  DescribeDefaultSubnetResponse,
  VpcInfo,
  DescribeCustomImageTaskResponse,
  SecurityGroup,
  DeleteSubnetRequest,
  DescribeModuleRequest,
  Position,
  CreateModuleResponse,
  RebootInstancesRequest,
  AllocateAddressesRequest,
  DeleteNetworkInterfaceRequest,
  RemovePrivateIpAddressesRequest,
  ModifyInstancesAttributeRequest,
  InstanceFamilyTypeConfig,
  ResetInstancesResponse,
  DescribeImageRequest,
  MigratePrivateIpAddressRequest,
  ModifySubnetAttributeResponse,
  ZoneInfo,
  DescribeNodeRequest,
  CreateSubnetResponse,
  ResetInstancesPasswordRequest,
  ModifyModuleConfigRequest,
  Area,
  DescribeConfigRequest,
  DescribeInstanceVncUrlRequest,
  NetworkStorageRange,
  StartInstancesResponse,
  CreateVpcResponse,
  AssistantCidr,
  DescribeTaskStatusResponse,
  ModifyModuleIpDirectRequest,
  CreateModuleRequest,
  ModifyInstancesAttributeResponse,
  ReleaseAddressesResponse,
  DescribeInstancesDeniedActionsResponse,
  DisassociateAddressRequest,
  TaskOutput,
  ModuleCounter,
  ZoneInstanceCountISP,
  TaskInput,
  StartInstancesRequest,
  Tag,
  DescribeDefaultSubnetRequest,
  ResetInstancesMaxBandwidthResponse,
  DeleteVpcRequest,
  CreateNetworkInterfaceResponse,
  Node,
  RunInstancesResponse,
  DescribeAddressQuotaRequest,
  DescribeInstanceTypeConfigResponse,
  NodeInstanceNum,
  DescribeAddressesResponse,
  ImportImageRequest,
  DetachNetworkInterfaceResponse,
  InstanceFamilyConfig,
  DeleteModuleRequest,
  DescribeVpcsRequest,
  ResetInstancesMaxBandwidthRequest,
  OsVersion,
  PeakBase,
  ModifyModuleNetworkRequest,
  Image,
  TagSpecification,
  DetachNetworkInterfaceRequest,
  DescribeConfigResponse,
  ModifyDefaultSubnetResponse,
  DescribeImportImageOsResponse,
  DescribeModuleDetailResponse,
  StopInstancesRequest,
  Subnet,
  ModifyVpcAttributeResponse,
  DeleteVpcResponse,
  ImageUrl,
  ISP,
  PrivateIpAddressSpecification,
  ISPCounter,
  MigratePrivateIpAddressResponse,
  CreateImageRequest,
  Instance,
  EnhancedService,
  DescribeInstanceVncUrlResponse,
  DisassociateAddressResponse,
  DescribeInstanceTypeConfigRequest,
  ImportCustomImageRequest,
  DescribeModuleDetailRequest,
  AssociateAddressRequest,
  ModifyVpcAttributeRequest,
  DescribePeakNetworkOverviewResponse,
  AttachNetworkInterfaceResponse,
  CreateImageResponse,
  DescribeBaseOverviewRequest,
  ModifyModuleNetworkResponse,
  DiskInfo,
  DescribeImportImageOsRequest,
  NetworkInterfaceAttachment,
  StopInstancesResponse,
  ModifyModuleIpDirectResponse,
  ModifyModuleNameRequest,
  ModifyDefaultSubnetRequest,
  DescribeInstancesRequest,
  DescribeTaskResultRequest,
  AssociateAddressResponse,
  Filter,
  PublicIPAddressInfo,
  TerminateInstancesResponse,
  DescribeAddressesRequest,
  ModifyModuleConfigResponse,
  MigrateNetworkInterfaceRequest,
  DescribeAddressQuotaResponse,
  CreateSecurityGroupResponse,
  ZoneInstanceInfo,
  DescribeTaskStatusRequest,
  ModifyAddressAttributeRequest,
  ModifyModuleImageResponse,
  ResetInstancesRequest,
  PeakNetwork,
  DescribeCustomImageTaskRequest,
  ImageOsList,
  InstanceOperator,
  ModifyAddressAttributeResponse,
  ImportImageResponse,
  CreateSecurityGroupRequest,
  City,
  PrivateIPAddressInfo,
  TerminateInstancesRequest,
  DeleteNetworkInterfaceResponse,
  SimpleModule,
  DescribePeakNetworkOverviewRequest,
  AssignPrivateIpAddressesResponse,
  PeakNetworkRegionInfo,
  RebootInstancesResponse,
  ModifyAddressesBandwidthRequest,
  OperatorAction,
  PeakFamilyInfo,
  DescribePeakBaseOverviewResponse,
  ModifyImageAttributeResponse,
  DescribeImageResponse,
  RegionInfo,
  DeleteImageResponse,
  Address,
  DescribeNetworkInterfacesResponse,
  AssignPrivateIpAddressesRequest,
  ModifyImageAttributeRequest,
  ReleaseAddressesRequest,
  CreateVpcRequest,
  RunSecurityServiceEnabled,
  Country,
  ModifySubnetAttributeRequest,
  AllocateAddressesResponse,
  AttachNetworkInterfaceRequest,
  ModuleItem,
  ModifyModuleImageRequest,
  RunMonitorServiceEnabled,
  MigrateNetworkInterfaceResponse,
  DescribeVpcsResponse,
  DeleteImageRequest,
  Module,
  DescribeBaseOverviewResponse,
} from "./ecm_models"

/**
 * ecm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ecm.tencentcloudapi.com", "2019-07-19", clientConfig)
  }

  /**
   * 重置实例的最大带宽上限。
   * @public
   */
  async ResetInstancesMaxBandwidth(
    req: ResetInstancesMaxBandwidthRequest,
    cb?: (error: string, rep: ResetInstancesMaxBandwidthResponse) => void
  ): Promise<ResetInstancesMaxBandwidthResponse> {
    return this.request("ResetInstancesMaxBandwidth", req, cb)
  }

  /**
   * 销毁实例
   * @public
   */
  async TerminateInstances(
    req: TerminateInstancesRequest,
    cb?: (error: string, rep: TerminateInstancesResponse) => void
  ): Promise<TerminateInstancesResponse> {
    return this.request("TerminateInstances", req, cb)
  }

  /**
   * 获取模块列表
   * @public
   */
  async DescribeModule(
    req: DescribeModuleRequest,
    cb?: (error: string, rep: DescribeModuleResponse) => void
  ): Promise<DescribeModuleResponse> {
    return this.request("DescribeModule", req, cb)
  }

  /**
   * 获取带宽硬盘等数据的限制
   * @public
   */
  async DescribeConfig(
    req: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }

  /**
   * 获取概览页统计的基本数据
   * @public
   */
  async DescribeBaseOverview(
    req: DescribeBaseOverviewRequest,
    cb?: (error: string, rep: DescribeBaseOverviewResponse) => void
  ): Promise<DescribeBaseOverviewResponse> {
    return this.request("DescribeBaseOverview", req, cb)
  }

  /**
   * 只有状态为STOPPED的实例才可以进行此操作；接口调用成功时，实例会进入STARTING状态；启动实例成功时，实例会进入RUNNING状态。
   * @public
   */
  async StartInstances(
    req: StartInstancesRequest,
    cb?: (error: string, rep: StartInstancesResponse) => void
  ): Promise<StartInstancesResponse> {
    return this.request("StartInstances", req, cb)
  }

  /**
   * 修改模块名称
   * @public
   */
  async ModifyModuleName(
    req: ModifyModuleNameRequest,
    cb?: (error: string, rep: ModifyModuleNameResponse) => void
  ): Promise<ModifyModuleNameResponse> {
    return this.request("ModifyModuleName", req, cb)
  }

  /**
   * 从CVM产品导入镜像到ECM
   * @public
   */
  async ImportImage(
    req: ImportImageRequest,
    cb?: (error: string, rep: ImportImageResponse) => void
  ): Promise<ImportImageResponse> {
    return this.request("ImportImage", req, cb)
  }

  /**
     * 解绑弹性公网IP（简称 EIP）
只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
EIP 如果被封堵，则不能进行解绑定操作。
     * @public
     */
  async DisassociateAddress(
    req: DisassociateAddressRequest,
    cb?: (error: string, rep: DisassociateAddressResponse) => void
  ): Promise<DisassociateAddressResponse> {
    return this.request("DisassociateAddress", req, cb)
  }

  /**
   * 弹性网卡绑定云主机
   * @public
   */
  async AttachNetworkInterface(
    req: AttachNetworkInterfaceRequest,
    cb?: (error: string, rep: AttachNetworkInterfaceResponse) => void
  ): Promise<AttachNetworkInterfaceResponse> {
    return this.request("AttachNetworkInterface", req, cb)
  }

  /**
     * 释放一个或多个弹性公网IP（简称 EIP）。
该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
只有状态为 UNBIND 的 EIP 才能进行释放操作。
     * @public
     */
  async ReleaseAddresses(
    req: ReleaseAddressesRequest,
    cb?: (error: string, rep: ReleaseAddressesResponse) => void
  ): Promise<ReleaseAddressesResponse> {
    return this.request("ReleaseAddresses", req, cb)
  }

  /**
   * 创建私有网络
   * @public
   */
  async CreateVpc(
    req: CreateVpcRequest,
    cb?: (error: string, rep: CreateVpcResponse) => void
  ): Promise<CreateVpcResponse> {
    return this.request("CreateVpc", req, cb)
  }

  /**
   * 查询您账户的弹性公网IP（简称 EIP）在当前地域的配额信息
   * @public
   */
  async DescribeAddressQuota(
    req: DescribeAddressQuotaRequest,
    cb?: (error: string, rep: DescribeAddressQuotaResponse) => void
  ): Promise<DescribeAddressQuotaResponse> {
    return this.request("DescribeAddressQuota", req, cb)
  }

  /**
   * 修改模块配置，已关联实例的模块不支持调整配置。
   * @public
   */
  async ModifyModuleConfig(
    req: ModifyModuleConfigRequest,
    cb?: (error: string, rep: ModifyModuleConfigResponse) => void
  ): Promise<ModifyModuleConfigResponse> {
    return this.request("ModifyModuleConfig", req, cb)
  }

  /**
   * 删除私有网络
   * @public
   */
  async DeleteVpc(
    req: DeleteVpcRequest,
    cb?: (error: string, rep: DeleteVpcResponse) => void
  ): Promise<DeleteVpcResponse> {
    return this.request("DeleteVpc", req, cb)
  }

  /**
   * 查询子网列表
   * @public
   */
  async DescribeSubnets(
    req: DescribeSubnetsRequest,
    cb?: (error: string, rep: DescribeSubnetsResponse) => void
  ): Promise<DescribeSubnetsResponse> {
    return this.request("DescribeSubnets", req, cb)
  }

  /**
   * 修改弹性公网IP属性
   * @public
   */
  async ModifyAddressAttribute(
    req: ModifyAddressAttributeRequest,
    cb?: (error: string, rep: ModifyAddressAttributeResponse) => void
  ): Promise<ModifyAddressAttributeResponse> {
    return this.request("ModifyAddressAttribute", req, cb)
  }

  /**
   * 申请一个或多个弹性公网IP（简称 EIP）
   * @public
   */
  async AllocateAddresses(
    req: AllocateAddressesRequest,
    cb?: (error: string, rep: AllocateAddressesResponse) => void
  ): Promise<AllocateAddressesResponse> {
    return this.request("AllocateAddresses", req, cb)
  }

  /**
   * 获取实例的相关信息。
   * @public
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 获取机型配置列表
   * @public
   */
  async DescribeInstanceTypeConfig(
    req: DescribeInstanceTypeConfigRequest,
    cb?: (error: string, rep: DescribeInstanceTypeConfigResponse) => void
  ): Promise<DescribeInstanceTypeConfigResponse> {
    return this.request("DescribeInstanceTypeConfig", req, cb)
  }

  /**
   * 创建ECM实例
   * @public
   */
  async RunInstances(
    req: RunInstancesRequest,
    cb?: (error: string, rep: RunInstancesResponse) => void
  ): Promise<RunInstancesResponse> {
    return this.request("RunInstances", req, cb)
  }

  /**
   * 弹性网卡申请内网 IP
   * @public
   */
  async AssignPrivateIpAddresses(
    req: AssignPrivateIpAddressesRequest,
    cb?: (error: string, rep: AssignPrivateIpAddressesResponse) => void
  ): Promise<AssignPrivateIpAddressesResponse> {
    return this.request("AssignPrivateIpAddresses", req, cb)
  }

  /**
   * 查询可用区的默认子网
   * @public
   */
  async DescribeDefaultSubnet(
    req: DescribeDefaultSubnetRequest,
    cb?: (error: string, rep: DescribeDefaultSubnetResponse) => void
  ): Promise<DescribeDefaultSubnetResponse> {
    return this.request("DescribeDefaultSubnet", req, cb)
  }

  /**
     * 将弹性公网IP（简称 EIP）绑定到实例或弹性网卡的指定内网 IP 上。
将 EIP 绑定到实例（CVM）上，其本质是将 EIP 绑定到实例上主网卡的主内网 IP 上。
将 EIP 绑定到主网卡的主内网IP上，绑定过程会把其上绑定的普通公网 IP 自动解绑并释放。
将 EIP 绑定到指定网卡的内网 IP上（非主网卡的主内网IP），则必须先解绑该 EIP，才能再绑定新的。
将 EIP 绑定到NAT网关，请使用接口EipBindNatGateway
EIP 如果欠费或被封堵，则不能被绑定。
只有状态为 UNBIND 的 EIP 才能够被绑定。
     * @public
     */
  async AssociateAddress(
    req: AssociateAddressRequest,
    cb?: (error: string, rep: AssociateAddressResponse) => void
  ): Promise<AssociateAddressResponse> {
    return this.request("AssociateAddress", req, cb)
  }

  /**
   * 查询EIP异步任务执行结果
   * @public
   */
  async DescribeTaskResult(
    req: DescribeTaskResultRequest,
    cb?: (error: string, rep: DescribeTaskResultResponse) => void
  ): Promise<DescribeTaskResultResponse> {
    return this.request("DescribeTaskResult", req, cb)
  }

  /**
   * 创建模块
   * @public
   */
  async CreateModule(
    req: CreateModuleRequest,
    cb?: (error: string, rep: CreateModuleResponse) => void
  ): Promise<CreateModuleResponse> {
    return this.request("CreateModule", req, cb)
  }

  /**
   * 查询弹性公网IP列表
   * @public
   */
  async DescribeAddresses(
    req: DescribeAddressesRequest,
    cb?: (error: string, rep: DescribeAddressesResponse) => void
  ): Promise<DescribeAddressesResponse> {
    return this.request("DescribeAddresses", req, cb)
  }

  /**
   * 删除子网，若子网为可用区下的默认子网，则默认子网会回退到系统自动创建的默认子网，非用户最新创建的子网。若默认子网不满足需求，可调用设置默认子网接口设置。
   * @public
   */
  async DeleteSubnet(
    req: DeleteSubnetRequest,
    cb?: (error: string, rep: DeleteSubnetResponse) => void
  ): Promise<DeleteSubnetResponse> {
    return this.request("DeleteSubnet", req, cb)
  }

  /**
   * 修改子网属性
   * @public
   */
  async ModifySubnetAttribute(
    req: ModifySubnetAttributeRequest,
    cb?: (error: string, rep: ModifySubnetAttributeResponse) => void
  ): Promise<ModifySubnetAttributeResponse> {
    return this.request("ModifySubnetAttribute", req, cb)
  }

  /**
   * 查询弹性网卡列表
   * @public
   */
  async DescribeNetworkInterfaces(
    req: DescribeNetworkInterfacesRequest,
    cb?: (error: string, rep: DescribeNetworkInterfacesResponse) => void
  ): Promise<DescribeNetworkInterfacesResponse> {
    return this.request("DescribeNetworkInterfaces", req, cb)
  }

  /**
   * 弹性网卡迁移
   * @public
   */
  async MigrateNetworkInterface(
    req: MigrateNetworkInterfaceRequest,
    cb?: (error: string, rep: MigrateNetworkInterfaceResponse) => void
  ): Promise<MigrateNetworkInterfaceResponse> {
    return this.request("MigrateNetworkInterface", req, cb)
  }

  /**
   * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
   * @public
   */
  async CreateImage(
    req: CreateImageRequest,
    cb?: (error: string, rep: CreateImageResponse) => void
  ): Promise<CreateImageResponse> {
    return this.request("CreateImage", req, cb)
  }

  /**
   * 修改模块默认带宽上限
   * @public
   */
  async ModifyModuleNetwork(
    req: ModifyModuleNetworkRequest,
    cb?: (error: string, rep: ModifyModuleNetworkResponse) => void
  ): Promise<ModifyModuleNetworkResponse> {
    return this.request("ModifyModuleNetwork", req, cb)
  }

  /**
   * 重置处于运行中状态的实例的密码，需要显式指定强制关机参数ForceStop。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
   * @public
   */
  async ResetInstancesPassword(
    req: ResetInstancesPasswordRequest,
    cb?: (error: string, rep: ResetInstancesPasswordResponse) => void
  ): Promise<ResetInstancesPasswordResponse> {
    return this.request("ResetInstancesPassword", req, cb)
  }

  /**
   * 本接口（ModifyImageAttribute）用于修改镜像属性。
   * @public
   */
  async ModifyImageAttribute(
    req: ModifyImageAttributeRequest,
    cb?: (error: string, rep: ModifyImageAttributeResponse) => void
  ): Promise<ModifyImageAttributeResponse> {
    return this.request("ModifyImageAttribute", req, cb)
  }

  /**
   * 通过实例id获取当前禁止的操作
   * @public
   */
  async DescribeInstancesDeniedActions(
    req: DescribeInstancesDeniedActionsRequest,
    cb?: (error: string, rep: DescribeInstancesDeniedActionsResponse) => void
  ): Promise<DescribeInstancesDeniedActionsResponse> {
    return this.request("DescribeInstancesDeniedActions", req, cb)
  }

  /**
   * 本接口(DescribeTaskStatus)用于获取异步任务状态
   * @public
   */
  async DescribeTaskStatus(
    req: DescribeTaskStatusRequest,
    cb?: (error: string, rep: DescribeTaskStatusResponse) => void
  ): Promise<DescribeTaskStatusResponse> {
    return this.request("DescribeTaskStatus", req, cb)
  }

  /**
   * 创建弹性网卡
   * @public
   */
  async CreateNetworkInterface(
    req: CreateNetworkInterfaceRequest,
    cb?: (error: string, rep: CreateNetworkInterfaceResponse) => void
  ): Promise<CreateNetworkInterfaceResponse> {
    return this.request("CreateNetworkInterface", req, cb)
  }

  /**
   * 获取网络峰值数据
   * @public
   */
  async DescribePeakNetworkOverview(
    req: DescribePeakNetworkOverviewRequest,
    cb?: (error: string, rep: DescribePeakNetworkOverviewResponse) => void
  ): Promise<DescribePeakNetworkOverviewResponse> {
    return this.request("DescribePeakNetworkOverview", req, cb)
  }

  /**
     * 只有处于"RUNNING"状态的实例才能够进行关机操作；
调用成功时，实例会进入STOPPING状态；关闭实例成功时，实例会进入STOPPED状态；
支持强制关闭，强制关机的效果等同于关闭物理计算机的电源开关，强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
     * @public
     */
  async StopInstances(
    req: StopInstancesRequest,
    cb?: (error: string, rep: StopInstancesResponse) => void
  ): Promise<StopInstancesResponse> {
    return this.request("StopInstances", req, cb)
  }

  /**
   * 查询外部导入镜像支持的OS列表
   * @public
   */
  async DescribeImportImageOs(
    req: DescribeImportImageOsRequest,
    cb?: (error: string, rep: DescribeImportImageOsResponse) => void
  ): Promise<DescribeImportImageOsResponse> {
    return this.request("DescribeImportImageOs", req, cb)
  }

  /**
   * 创建安全组
   * @public
   */
  async CreateSecurityGroup(
    req: CreateSecurityGroupRequest,
    cb?: (error: string, rep: CreateSecurityGroupResponse) => void
  ): Promise<CreateSecurityGroupResponse> {
    return this.request("CreateSecurityGroup", req, cb)
  }

  /**
   * 获取节点列表
   * @public
   */
  async DescribeNode(
    req: DescribeNodeRequest,
    cb?: (error: string, rep: DescribeNodeResponse) => void
  ): Promise<DescribeNodeResponse> {
    return this.request("DescribeNode", req, cb)
  }

  /**
   * 导入自定义镜像，支持 RAW、VHD、QCOW2、VMDK 镜像格式
   * @public
   */
  async ImportCustomImage(
    req: ImportCustomImageRequest,
    cb?: (error: string, rep: ImportCustomImageResponse) => void
  ): Promise<ImportCustomImageResponse> {
    return this.request("ImportCustomImage", req, cb)
  }

  /**
   * 展示模块详细信息
   * @public
   */
  async DescribeModuleDetail(
    req: DescribeModuleDetailRequest,
    cb?: (error: string, rep: DescribeModuleDetailResponse) => void
  ): Promise<DescribeModuleDetailResponse> {
    return this.request("DescribeModuleDetail", req, cb)
  }

  /**
   * 弹性网卡解绑云主机
   * @public
   */
  async DetachNetworkInterface(
    req: DetachNetworkInterfaceRequest,
    cb?: (error: string, rep: DetachNetworkInterfaceResponse) => void
  ): Promise<DetachNetworkInterfaceResponse> {
    return this.request("DetachNetworkInterface", req, cb)
  }

  /**
   * 查询导入镜像任务
   * @public
   */
  async DescribeCustomImageTask(
    req: DescribeCustomImageTaskRequest,
    cb?: (error: string, rep: DescribeCustomImageTaskResponse) => void
  ): Promise<DescribeCustomImageTaskResponse> {
    return this.request("DescribeCustomImageTask", req, cb)
  }

  /**
   * 重装实例，若指定了ImageId参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装；若未指定密码，则密码通过站内信形式随后发送。
   * @public
   */
  async ResetInstances(
    req: ResetInstancesRequest,
    cb?: (error: string, rep: ResetInstancesResponse) => void
  ): Promise<ResetInstancesResponse> {
    return this.request("ResetInstances", req, cb)
  }

  /**
   * 查询实例管理终端地址
   * @public
   */
  async DescribeInstanceVncUrl(
    req: DescribeInstanceVncUrlRequest,
    cb?: (error: string, rep: DescribeInstanceVncUrlResponse) => void
  ): Promise<DescribeInstanceVncUrlResponse> {
    return this.request("DescribeInstanceVncUrl", req, cb)
  }

  /**
   * 修改私有网络（VPC）的相关属性
   * @public
   */
  async ModifyVpcAttribute(
    req: ModifyVpcAttributeRequest,
    cb?: (error: string, rep: ModifyVpcAttributeResponse) => void
  ): Promise<ModifyVpcAttributeResponse> {
    return this.request("ModifyVpcAttribute", req, cb)
  }

  /**
   * 修改模块的默认镜像
   * @public
   */
  async ModifyModuleImage(
    req: ModifyModuleImageRequest,
    cb?: (error: string, rep: ModifyModuleImageResponse) => void
  ): Promise<ModifyModuleImageResponse> {
    return this.request("ModifyModuleImage", req, cb)
  }

  /**
   * 修改实例的属性。
   * @public
   */
  async ModifyInstancesAttribute(
    req: ModifyInstancesAttributeRequest,
    cb?: (error: string, rep: ModifyInstancesAttributeResponse) => void
  ): Promise<ModifyInstancesAttributeResponse> {
    return this.request("ModifyInstancesAttribute", req, cb)
  }

  /**
   * CPU 内存 硬盘等基础信息峰值数据
   * @public
   */
  async DescribePeakBaseOverview(
    req: DescribePeakBaseOverviewRequest,
    cb?: (error: string, rep: DescribePeakBaseOverviewResponse) => void
  ): Promise<DescribePeakBaseOverviewResponse> {
    return this.request("DescribePeakBaseOverview", req, cb)
  }

  /**
   * 修改在一个可用区下创建实例时使用的默认子网（创建实例时，未填写VPC参数时使用的sunbetId）
   * @public
   */
  async ModifyDefaultSubnet(
    req: ModifyDefaultSubnetRequest,
    cb?: (error: string, rep: ModifyDefaultSubnetResponse) => void
  ): Promise<ModifyDefaultSubnetResponse> {
    return this.request("ModifyDefaultSubnet", req, cb)
  }

  /**
   * 删除弹性网卡
   * @public
   */
  async DeleteNetworkInterface(
    req: DeleteNetworkInterfaceRequest,
    cb?: (error: string, rep: DeleteNetworkInterfaceResponse) => void
  ): Promise<DeleteNetworkInterfaceResponse> {
    return this.request("DeleteNetworkInterface", req, cb)
  }

  /**
   * 删除业务模块
   * @public
   */
  async DeleteModule(
    req: DeleteModuleRequest,
    cb?: (error: string, rep: DeleteModuleResponse) => void
  ): Promise<DeleteModuleResponse> {
    return this.request("DeleteModule", req, cb)
  }

  /**
   * 只有状态为RUNNING的实例才可以进行此操作；接口调用成功时，实例会进入REBOOTING状态；重启实例成功时，实例会进入RUNNING状态；支持强制重启，强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
   * @public
   */
  async RebootInstances(
    req: RebootInstancesRequest,
    cb?: (error: string, rep: RebootInstancesResponse) => void
  ): Promise<RebootInstancesResponse> {
    return this.request("RebootInstances", req, cb)
  }

  /**
   * 查询私有网络列表
   * @public
   */
  async DescribeVpcs(
    req: DescribeVpcsRequest,
    cb?: (error: string, rep: DescribeVpcsResponse) => void
  ): Promise<DescribeVpcsResponse> {
    return this.request("DescribeVpcs", req, cb)
  }

  /**
     * 弹性网卡内网IP迁移。
该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
迁移前后的弹性网卡必须在同一个子网内。
     * @public
     */
  async MigratePrivateIpAddress(
    req: MigratePrivateIpAddressRequest,
    cb?: (error: string, rep: MigratePrivateIpAddressResponse) => void
  ): Promise<MigratePrivateIpAddressResponse> {
    return this.request("MigratePrivateIpAddress", req, cb)
  }

  /**
   * 展示镜像列表
   * @public
   */
  async DescribeImage(
    req: DescribeImageRequest,
    cb?: (error: string, rep: DescribeImageResponse) => void
  ): Promise<DescribeImageResponse> {
    return this.request("DescribeImage", req, cb)
  }

  /**
   * 修改模块IP直通。
   * @public
   */
  async ModifyModuleIpDirect(
    req: ModifyModuleIpDirectRequest,
    cb?: (error: string, rep: ModifyModuleIpDirectResponse) => void
  ): Promise<ModifyModuleIpDirectResponse> {
    return this.request("ModifyModuleIpDirect", req, cb)
  }

  /**
   * 删除镜像
   * @public
   */
  async DeleteImage(
    req: DeleteImageRequest,
    cb?: (error: string, rep: DeleteImageResponse) => void
  ): Promise<DeleteImageResponse> {
    return this.request("DeleteImage", req, cb)
  }

  /**
     * 调整弹性公网IP带宽

     * @public
     */
  async ModifyAddressesBandwidth(
    req: ModifyAddressesBandwidthRequest,
    cb?: (error: string, rep: ModifyAddressesBandwidthResponse) => void
  ): Promise<ModifyAddressesBandwidthResponse> {
    return this.request("ModifyAddressesBandwidth", req, cb)
  }

  /**
     * 弹性网卡退还内网 IP。
退还弹性网卡上的辅助内网IP，接口自动解关联弹性公网 IP。不能退还弹性网卡的主内网IP。
     * @public
     */
  async RemovePrivateIpAddresses(
    req: RemovePrivateIpAddressesRequest,
    cb?: (error: string, rep: RemovePrivateIpAddressesResponse) => void
  ): Promise<RemovePrivateIpAddressesResponse> {
    return this.request("RemovePrivateIpAddresses", req, cb)
  }

  /**
   * 创建子网，若创建成功，则此子网会成为此可用区的默认子网。
   * @public
   */
  async CreateSubnet(
    req: CreateSubnetRequest,
    cb?: (error: string, rep: CreateSubnetResponse) => void
  ): Promise<CreateSubnetResponse> {
    return this.request("CreateSubnet", req, cb)
  }
}
