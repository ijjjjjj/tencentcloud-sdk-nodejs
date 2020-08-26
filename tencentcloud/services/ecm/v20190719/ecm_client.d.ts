import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeTaskResultResponse, DescribePeakBaseOverviewRequest, CreateNetworkInterfaceRequest, DescribeInstancesDeniedActionsRequest, DescribeModuleResponse, ImportCustomImageResponse, ModifyModuleNameResponse, DescribeNetworkInterfacesRequest, DescribeSubnetsRequest, CreateSubnetRequest, DeleteModuleResponse, DeleteSubnetResponse, ModifyAddressesBandwidthResponse, DescribeSubnetsResponse, RunInstancesRequest, DescribeInstancesResponse, ResetInstancesPasswordResponse, DescribeNodeResponse, RemovePrivateIpAddressesResponse, DescribeDefaultSubnetResponse, DescribeCustomImageTaskResponse, DeleteSubnetRequest, DescribeModuleRequest, CreateModuleResponse, RebootInstancesRequest, AllocateAddressesRequest, DeleteNetworkInterfaceRequest, RemovePrivateIpAddressesRequest, ModifyInstancesAttributeRequest, ResetInstancesResponse, DescribeImageRequest, MigratePrivateIpAddressRequest, ModifySubnetAttributeResponse, DescribeNodeRequest, CreateSubnetResponse, ResetInstancesPasswordRequest, ModifyModuleConfigRequest, DescribeConfigRequest, DescribeInstanceVncUrlRequest, StartInstancesResponse, CreateVpcResponse, DescribeTaskStatusResponse, ModifyModuleIpDirectRequest, CreateModuleRequest, ModifyInstancesAttributeResponse, ReleaseAddressesResponse, DescribeInstancesDeniedActionsResponse, DisassociateAddressRequest, StartInstancesRequest, DescribeDefaultSubnetRequest, ResetInstancesMaxBandwidthResponse, DeleteVpcRequest, CreateNetworkInterfaceResponse, RunInstancesResponse, DescribeAddressQuotaRequest, DescribeInstanceTypeConfigResponse, DescribeAddressesResponse, ImportImageRequest, DetachNetworkInterfaceResponse, DeleteModuleRequest, DescribeVpcsRequest, ResetInstancesMaxBandwidthRequest, ModifyModuleNetworkRequest, DetachNetworkInterfaceRequest, DescribeConfigResponse, ModifyDefaultSubnetResponse, DescribeImportImageOsResponse, DescribeModuleDetailResponse, StopInstancesRequest, ModifyVpcAttributeResponse, DeleteVpcResponse, MigratePrivateIpAddressResponse, CreateImageRequest, DescribeInstanceVncUrlResponse, DisassociateAddressResponse, DescribeInstanceTypeConfigRequest, ImportCustomImageRequest, DescribeModuleDetailRequest, AssociateAddressRequest, ModifyVpcAttributeRequest, DescribePeakNetworkOverviewResponse, AttachNetworkInterfaceResponse, CreateImageResponse, DescribeBaseOverviewRequest, ModifyModuleNetworkResponse, DescribeImportImageOsRequest, StopInstancesResponse, ModifyModuleIpDirectResponse, ModifyModuleNameRequest, ModifyDefaultSubnetRequest, DescribeInstancesRequest, DescribeTaskResultRequest, AssociateAddressResponse, TerminateInstancesResponse, DescribeAddressesRequest, ModifyModuleConfigResponse, MigrateNetworkInterfaceRequest, DescribeAddressQuotaResponse, CreateSecurityGroupResponse, DescribeTaskStatusRequest, ModifyAddressAttributeRequest, ModifyModuleImageResponse, ResetInstancesRequest, DescribeCustomImageTaskRequest, ModifyAddressAttributeResponse, ImportImageResponse, CreateSecurityGroupRequest, TerminateInstancesRequest, DeleteNetworkInterfaceResponse, DescribePeakNetworkOverviewRequest, AssignPrivateIpAddressesResponse, RebootInstancesResponse, ModifyAddressesBandwidthRequest, DescribePeakBaseOverviewResponse, ModifyImageAttributeResponse, DescribeImageResponse, DeleteImageResponse, DescribeNetworkInterfacesResponse, AssignPrivateIpAddressesRequest, ModifyImageAttributeRequest, ReleaseAddressesRequest, CreateVpcRequest, ModifySubnetAttributeRequest, AllocateAddressesResponse, AttachNetworkInterfaceRequest, ModifyModuleImageRequest, MigrateNetworkInterfaceResponse, DescribeVpcsResponse, DeleteImageRequest, DescribeBaseOverviewResponse } from "./ecm_models";
/**
 * ecm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 重置实例的最大带宽上限。
     * @public
     */
    ResetInstancesMaxBandwidth(req: ResetInstancesMaxBandwidthRequest, cb?: (error: string, rep: ResetInstancesMaxBandwidthResponse) => void): Promise<ResetInstancesMaxBandwidthResponse>;
    /**
     * 销毁实例
     * @public
     */
    TerminateInstances(req: TerminateInstancesRequest, cb?: (error: string, rep: TerminateInstancesResponse) => void): Promise<TerminateInstancesResponse>;
    /**
     * 获取模块列表
     * @public
     */
    DescribeModule(req: DescribeModuleRequest, cb?: (error: string, rep: DescribeModuleResponse) => void): Promise<DescribeModuleResponse>;
    /**
     * 获取带宽硬盘等数据的限制
     * @public
     */
    DescribeConfig(req: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     * 获取概览页统计的基本数据
     * @public
     */
    DescribeBaseOverview(req: DescribeBaseOverviewRequest, cb?: (error: string, rep: DescribeBaseOverviewResponse) => void): Promise<DescribeBaseOverviewResponse>;
    /**
     * 只有状态为STOPPED的实例才可以进行此操作；接口调用成功时，实例会进入STARTING状态；启动实例成功时，实例会进入RUNNING状态。
     * @public
     */
    StartInstances(req: StartInstancesRequest, cb?: (error: string, rep: StartInstancesResponse) => void): Promise<StartInstancesResponse>;
    /**
     * 修改模块名称
     * @public
     */
    ModifyModuleName(req: ModifyModuleNameRequest, cb?: (error: string, rep: ModifyModuleNameResponse) => void): Promise<ModifyModuleNameResponse>;
    /**
     * 从CVM产品导入镜像到ECM
     * @public
     */
    ImportImage(req: ImportImageRequest, cb?: (error: string, rep: ImportImageResponse) => void): Promise<ImportImageResponse>;
    /**
       * 解绑弹性公网IP（简称 EIP）
  只有状态为 BIND 和 BIND_ENI 的 EIP 才能进行解绑定操作。
  EIP 如果被封堵，则不能进行解绑定操作。
       * @public
       */
    DisassociateAddress(req: DisassociateAddressRequest, cb?: (error: string, rep: DisassociateAddressResponse) => void): Promise<DisassociateAddressResponse>;
    /**
     * 弹性网卡绑定云主机
     * @public
     */
    AttachNetworkInterface(req: AttachNetworkInterfaceRequest, cb?: (error: string, rep: AttachNetworkInterfaceResponse) => void): Promise<AttachNetworkInterfaceResponse>;
    /**
       * 释放一个或多个弹性公网IP（简称 EIP）。
  该操作不可逆，释放后 EIP 关联的 IP 地址将不再属于您的名下。
  只有状态为 UNBIND 的 EIP 才能进行释放操作。
       * @public
       */
    ReleaseAddresses(req: ReleaseAddressesRequest, cb?: (error: string, rep: ReleaseAddressesResponse) => void): Promise<ReleaseAddressesResponse>;
    /**
     * 创建私有网络
     * @public
     */
    CreateVpc(req: CreateVpcRequest, cb?: (error: string, rep: CreateVpcResponse) => void): Promise<CreateVpcResponse>;
    /**
     * 查询您账户的弹性公网IP（简称 EIP）在当前地域的配额信息
     * @public
     */
    DescribeAddressQuota(req: DescribeAddressQuotaRequest, cb?: (error: string, rep: DescribeAddressQuotaResponse) => void): Promise<DescribeAddressQuotaResponse>;
    /**
     * 修改模块配置，已关联实例的模块不支持调整配置。
     * @public
     */
    ModifyModuleConfig(req: ModifyModuleConfigRequest, cb?: (error: string, rep: ModifyModuleConfigResponse) => void): Promise<ModifyModuleConfigResponse>;
    /**
     * 删除私有网络
     * @public
     */
    DeleteVpc(req: DeleteVpcRequest, cb?: (error: string, rep: DeleteVpcResponse) => void): Promise<DeleteVpcResponse>;
    /**
     * 查询子网列表
     * @public
     */
    DescribeSubnets(req: DescribeSubnetsRequest, cb?: (error: string, rep: DescribeSubnetsResponse) => void): Promise<DescribeSubnetsResponse>;
    /**
     * 修改弹性公网IP属性
     * @public
     */
    ModifyAddressAttribute(req: ModifyAddressAttributeRequest, cb?: (error: string, rep: ModifyAddressAttributeResponse) => void): Promise<ModifyAddressAttributeResponse>;
    /**
     * 申请一个或多个弹性公网IP（简称 EIP）
     * @public
     */
    AllocateAddresses(req: AllocateAddressesRequest, cb?: (error: string, rep: AllocateAddressesResponse) => void): Promise<AllocateAddressesResponse>;
    /**
     * 获取实例的相关信息。
     * @public
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 获取机型配置列表
     * @public
     */
    DescribeInstanceTypeConfig(req: DescribeInstanceTypeConfigRequest, cb?: (error: string, rep: DescribeInstanceTypeConfigResponse) => void): Promise<DescribeInstanceTypeConfigResponse>;
    /**
     * 创建ECM实例
     * @public
     */
    RunInstances(req: RunInstancesRequest, cb?: (error: string, rep: RunInstancesResponse) => void): Promise<RunInstancesResponse>;
    /**
     * 弹性网卡申请内网 IP
     * @public
     */
    AssignPrivateIpAddresses(req: AssignPrivateIpAddressesRequest, cb?: (error: string, rep: AssignPrivateIpAddressesResponse) => void): Promise<AssignPrivateIpAddressesResponse>;
    /**
     * 查询可用区的默认子网
     * @public
     */
    DescribeDefaultSubnet(req: DescribeDefaultSubnetRequest, cb?: (error: string, rep: DescribeDefaultSubnetResponse) => void): Promise<DescribeDefaultSubnetResponse>;
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
    AssociateAddress(req: AssociateAddressRequest, cb?: (error: string, rep: AssociateAddressResponse) => void): Promise<AssociateAddressResponse>;
    /**
     * 查询EIP异步任务执行结果
     * @public
     */
    DescribeTaskResult(req: DescribeTaskResultRequest, cb?: (error: string, rep: DescribeTaskResultResponse) => void): Promise<DescribeTaskResultResponse>;
    /**
     * 创建模块
     * @public
     */
    CreateModule(req: CreateModuleRequest, cb?: (error: string, rep: CreateModuleResponse) => void): Promise<CreateModuleResponse>;
    /**
     * 查询弹性公网IP列表
     * @public
     */
    DescribeAddresses(req: DescribeAddressesRequest, cb?: (error: string, rep: DescribeAddressesResponse) => void): Promise<DescribeAddressesResponse>;
    /**
     * 删除子网，若子网为可用区下的默认子网，则默认子网会回退到系统自动创建的默认子网，非用户最新创建的子网。若默认子网不满足需求，可调用设置默认子网接口设置。
     * @public
     */
    DeleteSubnet(req: DeleteSubnetRequest, cb?: (error: string, rep: DeleteSubnetResponse) => void): Promise<DeleteSubnetResponse>;
    /**
     * 修改子网属性
     * @public
     */
    ModifySubnetAttribute(req: ModifySubnetAttributeRequest, cb?: (error: string, rep: ModifySubnetAttributeResponse) => void): Promise<ModifySubnetAttributeResponse>;
    /**
     * 查询弹性网卡列表
     * @public
     */
    DescribeNetworkInterfaces(req: DescribeNetworkInterfacesRequest, cb?: (error: string, rep: DescribeNetworkInterfacesResponse) => void): Promise<DescribeNetworkInterfacesResponse>;
    /**
     * 弹性网卡迁移
     * @public
     */
    MigrateNetworkInterface(req: MigrateNetworkInterfaceRequest, cb?: (error: string, rep: MigrateNetworkInterfaceResponse) => void): Promise<MigrateNetworkInterfaceResponse>;
    /**
     * 本接口(CreateImage)用于将实例的系统盘制作为新镜像，创建后的镜像可以用于创建实例。
     * @public
     */
    CreateImage(req: CreateImageRequest, cb?: (error: string, rep: CreateImageResponse) => void): Promise<CreateImageResponse>;
    /**
     * 修改模块默认带宽上限
     * @public
     */
    ModifyModuleNetwork(req: ModifyModuleNetworkRequest, cb?: (error: string, rep: ModifyModuleNetworkResponse) => void): Promise<ModifyModuleNetworkResponse>;
    /**
     * 重置处于运行中状态的实例的密码，需要显式指定强制关机参数ForceStop。如果没有显式指定强制关机参数，则只有处于关机状态的实例才允许执行重置密码操作。
     * @public
     */
    ResetInstancesPassword(req: ResetInstancesPasswordRequest, cb?: (error: string, rep: ResetInstancesPasswordResponse) => void): Promise<ResetInstancesPasswordResponse>;
    /**
     * 本接口（ModifyImageAttribute）用于修改镜像属性。
     * @public
     */
    ModifyImageAttribute(req: ModifyImageAttributeRequest, cb?: (error: string, rep: ModifyImageAttributeResponse) => void): Promise<ModifyImageAttributeResponse>;
    /**
     * 通过实例id获取当前禁止的操作
     * @public
     */
    DescribeInstancesDeniedActions(req: DescribeInstancesDeniedActionsRequest, cb?: (error: string, rep: DescribeInstancesDeniedActionsResponse) => void): Promise<DescribeInstancesDeniedActionsResponse>;
    /**
     * 本接口(DescribeTaskStatus)用于获取异步任务状态
     * @public
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 创建弹性网卡
     * @public
     */
    CreateNetworkInterface(req: CreateNetworkInterfaceRequest, cb?: (error: string, rep: CreateNetworkInterfaceResponse) => void): Promise<CreateNetworkInterfaceResponse>;
    /**
     * 获取网络峰值数据
     * @public
     */
    DescribePeakNetworkOverview(req: DescribePeakNetworkOverviewRequest, cb?: (error: string, rep: DescribePeakNetworkOverviewResponse) => void): Promise<DescribePeakNetworkOverviewResponse>;
    /**
       * 只有处于"RUNNING"状态的实例才能够进行关机操作；
  调用成功时，实例会进入STOPPING状态；关闭实例成功时，实例会进入STOPPED状态；
  支持强制关闭，强制关机的效果等同于关闭物理计算机的电源开关，强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。
       * @public
       */
    StopInstances(req: StopInstancesRequest, cb?: (error: string, rep: StopInstancesResponse) => void): Promise<StopInstancesResponse>;
    /**
     * 查询外部导入镜像支持的OS列表
     * @public
     */
    DescribeImportImageOs(req: DescribeImportImageOsRequest, cb?: (error: string, rep: DescribeImportImageOsResponse) => void): Promise<DescribeImportImageOsResponse>;
    /**
     * 创建安全组
     * @public
     */
    CreateSecurityGroup(req: CreateSecurityGroupRequest, cb?: (error: string, rep: CreateSecurityGroupResponse) => void): Promise<CreateSecurityGroupResponse>;
    /**
     * 获取节点列表
     * @public
     */
    DescribeNode(req: DescribeNodeRequest, cb?: (error: string, rep: DescribeNodeResponse) => void): Promise<DescribeNodeResponse>;
    /**
     * 导入自定义镜像，支持 RAW、VHD、QCOW2、VMDK 镜像格式
     * @public
     */
    ImportCustomImage(req: ImportCustomImageRequest, cb?: (error: string, rep: ImportCustomImageResponse) => void): Promise<ImportCustomImageResponse>;
    /**
     * 展示模块详细信息
     * @public
     */
    DescribeModuleDetail(req: DescribeModuleDetailRequest, cb?: (error: string, rep: DescribeModuleDetailResponse) => void): Promise<DescribeModuleDetailResponse>;
    /**
     * 弹性网卡解绑云主机
     * @public
     */
    DetachNetworkInterface(req: DetachNetworkInterfaceRequest, cb?: (error: string, rep: DetachNetworkInterfaceResponse) => void): Promise<DetachNetworkInterfaceResponse>;
    /**
     * 查询导入镜像任务
     * @public
     */
    DescribeCustomImageTask(req: DescribeCustomImageTaskRequest, cb?: (error: string, rep: DescribeCustomImageTaskResponse) => void): Promise<DescribeCustomImageTaskResponse>;
    /**
     * 重装实例，若指定了ImageId参数，则使用指定的镜像重装；否则按照当前实例使用的镜像进行重装；若未指定密码，则密码通过站内信形式随后发送。
     * @public
     */
    ResetInstances(req: ResetInstancesRequest, cb?: (error: string, rep: ResetInstancesResponse) => void): Promise<ResetInstancesResponse>;
    /**
     * 查询实例管理终端地址
     * @public
     */
    DescribeInstanceVncUrl(req: DescribeInstanceVncUrlRequest, cb?: (error: string, rep: DescribeInstanceVncUrlResponse) => void): Promise<DescribeInstanceVncUrlResponse>;
    /**
     * 修改私有网络（VPC）的相关属性
     * @public
     */
    ModifyVpcAttribute(req: ModifyVpcAttributeRequest, cb?: (error: string, rep: ModifyVpcAttributeResponse) => void): Promise<ModifyVpcAttributeResponse>;
    /**
     * 修改模块的默认镜像
     * @public
     */
    ModifyModuleImage(req: ModifyModuleImageRequest, cb?: (error: string, rep: ModifyModuleImageResponse) => void): Promise<ModifyModuleImageResponse>;
    /**
     * 修改实例的属性。
     * @public
     */
    ModifyInstancesAttribute(req: ModifyInstancesAttributeRequest, cb?: (error: string, rep: ModifyInstancesAttributeResponse) => void): Promise<ModifyInstancesAttributeResponse>;
    /**
     * CPU 内存 硬盘等基础信息峰值数据
     * @public
     */
    DescribePeakBaseOverview(req: DescribePeakBaseOverviewRequest, cb?: (error: string, rep: DescribePeakBaseOverviewResponse) => void): Promise<DescribePeakBaseOverviewResponse>;
    /**
     * 修改在一个可用区下创建实例时使用的默认子网（创建实例时，未填写VPC参数时使用的sunbetId）
     * @public
     */
    ModifyDefaultSubnet(req: ModifyDefaultSubnetRequest, cb?: (error: string, rep: ModifyDefaultSubnetResponse) => void): Promise<ModifyDefaultSubnetResponse>;
    /**
     * 删除弹性网卡
     * @public
     */
    DeleteNetworkInterface(req: DeleteNetworkInterfaceRequest, cb?: (error: string, rep: DeleteNetworkInterfaceResponse) => void): Promise<DeleteNetworkInterfaceResponse>;
    /**
     * 删除业务模块
     * @public
     */
    DeleteModule(req: DeleteModuleRequest, cb?: (error: string, rep: DeleteModuleResponse) => void): Promise<DeleteModuleResponse>;
    /**
     * 只有状态为RUNNING的实例才可以进行此操作；接口调用成功时，实例会进入REBOOTING状态；重启实例成功时，实例会进入RUNNING状态；支持强制重启，强制重启的效果等同于关闭物理计算机的电源开关再重新启动。强制重启可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常重启时使用。
     * @public
     */
    RebootInstances(req: RebootInstancesRequest, cb?: (error: string, rep: RebootInstancesResponse) => void): Promise<RebootInstancesResponse>;
    /**
     * 查询私有网络列表
     * @public
     */
    DescribeVpcs(req: DescribeVpcsRequest, cb?: (error: string, rep: DescribeVpcsResponse) => void): Promise<DescribeVpcsResponse>;
    /**
       * 弹性网卡内网IP迁移。
  该接口用于将一个内网IP从一个弹性网卡上迁移到另外一个弹性网卡，主IP地址不支持迁移。
  迁移前后的弹性网卡必须在同一个子网内。
       * @public
       */
    MigratePrivateIpAddress(req: MigratePrivateIpAddressRequest, cb?: (error: string, rep: MigratePrivateIpAddressResponse) => void): Promise<MigratePrivateIpAddressResponse>;
    /**
     * 展示镜像列表
     * @public
     */
    DescribeImage(req: DescribeImageRequest, cb?: (error: string, rep: DescribeImageResponse) => void): Promise<DescribeImageResponse>;
    /**
     * 修改模块IP直通。
     * @public
     */
    ModifyModuleIpDirect(req: ModifyModuleIpDirectRequest, cb?: (error: string, rep: ModifyModuleIpDirectResponse) => void): Promise<ModifyModuleIpDirectResponse>;
    /**
     * 删除镜像
     * @public
     */
    DeleteImage(req: DeleteImageRequest, cb?: (error: string, rep: DeleteImageResponse) => void): Promise<DeleteImageResponse>;
    /**
       * 调整弹性公网IP带宽
  
       * @public
       */
    ModifyAddressesBandwidth(req: ModifyAddressesBandwidthRequest, cb?: (error: string, rep: ModifyAddressesBandwidthResponse) => void): Promise<ModifyAddressesBandwidthResponse>;
    /**
       * 弹性网卡退还内网 IP。
  退还弹性网卡上的辅助内网IP，接口自动解关联弹性公网 IP。不能退还弹性网卡的主内网IP。
       * @public
       */
    RemovePrivateIpAddresses(req: RemovePrivateIpAddressesRequest, cb?: (error: string, rep: RemovePrivateIpAddressesResponse) => void): Promise<RemovePrivateIpAddressesResponse>;
    /**
     * 创建子网，若创建成功，则此子网会成为此可用区的默认子网。
     * @public
     */
    CreateSubnet(req: CreateSubnetRequest, cb?: (error: string, rep: CreateSubnetResponse) => void): Promise<CreateSubnetResponse>;
}
