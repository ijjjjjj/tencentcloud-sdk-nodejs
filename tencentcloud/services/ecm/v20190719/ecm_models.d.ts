/**
 * IP直通相关的信息
 */
export interface RunEIPDirectServiceEnabled {
    /**
        * 是否开通IP直通。取值范围：
  TRUE：表示开通IP直通
  FALSE：表示不开通IP直通
  默认取值：TRUE。
  windows镜像目前不支持IP直通。
        */
    Enabled?: boolean;
}
/**
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
    /**
     * 异步任务ID。
     */
    TaskId?: string;
    /**
     * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
     */
    Result?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * IPv6地址信息。
 */
export interface Ipv6Address {
    /**
     * IPv6地址，形如：3402:4e00:20:100:0:8cd9:2a67:71f3
     */
    Address: string;
    /**
     * 是否是主IP。
     */
    Primary: boolean;
    /**
     * EIP实例ID，形如：eip-hxlqja90。
     */
    AddressId: string;
    /**
     * 描述信息。
     */
    Description: string;
    /**
     * 公网IP是否被封堵。
     */
    IsWanIpBlocked: boolean;
    /**
        * IPv6地址状态：
  PENDING：生产中
  MIGRATING：迁移中
  DELETING：删除中
  AVAILABLE：可用的
        */
    State: string;
}
/**
 * DescribePeakBaseOverview请求参数结构体
 */
export interface DescribePeakBaseOverviewRequest {
    /**
     * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期。
     */
    StartTime?: string;
    /**
     * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天。
     */
    EndTime?: string;
}
/**
 * CreateNetworkInterface请求参数结构体
 */
export interface CreateNetworkInterfaceRequest {
    /**
     * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
     */
    VpcId: string;
    /**
     * 弹性网卡名称，最大长度不能超过60个字节。
     */
    NetworkInterfaceName: string;
    /**
     * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
     */
    SubnetId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 弹性网卡描述，可任意命名，但不得超过60个字符。
     */
    NetworkInterfaceDescription?: string;
    /**
     * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。
     */
    SecondaryPrivateIpAddressCount?: number;
    /**
     * 指定绑定的安全组，例如：['sg-1dd51d']。
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 指定的内网IP信息，单次最多指定10个。
     */
    PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
    /**
     * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
     */
    Tags?: Array<Tag>;
}
/**
 * DescribeInstancesDeniedActions请求参数结构体
 */
export interface DescribeInstancesDeniedActionsRequest {
    /**
     * 无
     */
    InstanceIdSet: Array<string>;
}
/**
 * 实例的网络相关信息。
 */
export interface Internet {
    /**
        * 实例的内网相关信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PrivateIPAddressSet: Array<PrivateIPAddressInfo>;
    /**
        * 实例的公网相关信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PublicIPAddressSet: Array<PublicIPAddressInfo>;
}
/**
 * DescribeModule返回参数结构体
 */
export interface DescribeModuleResponse {
    /**
        * 符合条件的模块数量。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TotalCount?: number;
    /**
        * 模块详情信息的列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ModuleItemSet?: Array<ModuleItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 镜像任务
 */
export interface ImageTask {
    /**
     * 镜像导入状态， PENDING, PROCESSING, SUCCESS, FAILED
     */
    State: string;
    /**
        * 导入失败(FAILED)时， 说明失败原因
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Message: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 创建时间
     */
    CreateTime: string;
}
/**
 * 省份信息
 */
export interface Province {
    /**
     * 省份Id
     */
    ProvinceId: string;
    /**
     * 省份名称
     */
    ProvinceName: string;
}
/**
 * ImportCustomImage返回参数结构体
 */
export interface ImportCustomImageResponse {
    /**
     * 镜像ID
     */
    ImageId?: string;
    /**
     * 异步任务ID，可根据DescribeCustomImageTask查询任务信息
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyModuleName返回参数结构体
 */
export interface ModifyModuleNameResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNetworkInterfaces请求参数结构体
 */
export interface DescribeNetworkInterfacesRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
     */
    NetworkInterfaceIds?: Array<string>;
    /**
        * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
  vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
  subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。
  network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。
  attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。
  groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。
  network-interface-name - String - （过滤条件）网卡实例名称。
  network-interface-description - String - （过滤条件）网卡实例描述。
  address-ip - String - （过滤条件）内网IPv4地址。
  tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2
  tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。
  is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；次过滤参数为提供时，同时过滤主网卡和辅助网卡。
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
}
/**
 * DescribeSubnets请求参数结构体
 */
export interface DescribeSubnetsRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
     */
    SubnetIds?: Array<string>;
    /**
        * 过滤条件，参数不支持同时指定SubnetIds和Filters。
  subnet-id - String - （过滤条件）Subnet实例名称。
  vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
  cidr-block - String - （过滤条件）子网网段，形如: 192.168.1.0 。
  is-default - Boolean - （过滤条件）是否是默认子网。
  is-remote-vpc-snat - Boolean - （过滤条件）是否为VPC SNAT地址池子网。
  subnet-name - String - （过滤条件）子网名称。
  zone - String - （过滤条件）可用区。
  tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
  tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例
        */
    Filters?: Array<Filter>;
    /**
     * 偏移量
     */
    Offset?: string;
    /**
     * 返回数量
     */
    Limit?: string;
}
/**
 * CreateSubnet请求参数结构体
 */
export interface CreateSubnetRequest {
    /**
     * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
     */
    VpcId: string;
    /**
     * 子网名称，最大长度不能超过60个字节。
     */
    SubnetName: string;
    /**
     * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
     */
    CidrBlock: string;
    /**
     * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
     */
    Zone: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
     */
    Tags?: Array<Tag>;
}
/**
 * DeleteModule返回参数结构体
 */
export interface DeleteModuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述EIP配额信息
 */
export interface EipQuota {
    /**
        * 配额名称，取值范围：
  TOTAL_EIP_QUOTA：用户当前地域下EIP的配额数；
  DAILY_EIP_APPLY：用户当前地域下今日申购次数；
  DAILY_PUBLIC_IP_ASSIGN：用户当前地域下，重新分配公网 IP次数。
        */
    QuotaId: string;
    /**
     * 当前数量
     */
    QuotaCurrent: number;
    /**
     * 配额数量
     */
    QuotaLimit: number;
}
/**
 * DeleteSubnet返回参数结构体
 */
export interface DeleteSubnetResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAddressesBandwidth返回参数结构体
 */
export interface ModifyAddressesBandwidthResponse {
    /**
     * 异步任务TaskId。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSubnets返回参数结构体
 */
export interface DescribeSubnetsResponse {
    /**
     * 符合条件的实例数量。
     */
    TotalCount?: number;
    /**
        * 子网对象。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SubnetSet?: Array<Subnet>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RunInstances请求参数结构体
 */
export interface RunInstancesRequest {
    /**
     * 需要创建实例的可用区及创建数目及运营商的列表。在单次请求的过程中，单个region下的请求创建实例数上限为100
     */
    ZoneInstanceCountISPSet: Array<ZoneInstanceCountISP>;
    /**
        * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
  Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]中的特殊符。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /]中的特殊符号。
        */
    Password?: string;
    /**
     * 公网出带宽上限，单位：Mbps。如果未传该参数或者传的值为0，则使用模块下的默认值
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 模块ID。如果未传该参数，则必须传ImageId，InstanceType，DataDiskSize，InternetMaxBandwidthOut参数
     */
    ModuleId?: string;
    /**
     * 镜像ID。如果未传该参数或者传的值为空，则使用模块下的默认值
     */
    ImageId?: string;
    /**
        * 实例显示名称。
  不指定实例显示名称则默认显示‘未命名’。
  购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server\_{R:3}，购买1台时，实例显示名称为server\_3；购买2台时，实例显示名称分别为server\_3，server\_4。
  支持指定多个模式串{R:x}。
  购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server\_1，server\_2。
  如果购买的实例属于不同的地域或运营商，则上述规则在每个地域和运营商内独立计数。
  最多支持60个字符（包含模式串）。
        */
    InstanceName?: string;
    /**
        * 主机名称
  点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。
  Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。
  其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
        */
    HostName?: string;
    /**
     * 用于保证请求幂等性的字符串。目前为保留参数，请勿使用。
     */
    ClientToken?: string;
    /**
     * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务
     */
    EnhancedService?: EnhancedService;
    /**
     * 标签列表
     */
    TagSpecification?: Array<TagSpecification>;
    /**
     * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB
     */
    UserData?: string;
    /**
     * 机型。如果未传该参数或者传的值为空，则使用模块下的默认值
     */
    InstanceType?: string;
    /**
     * 数据盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
     */
    DataDiskSize?: number;
    /**
     * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 系统盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
     */
    SystemDiskSize?: number;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 返回的实例相关信息列表的长度。
     */
    TotalCount?: number;
    /**
        * 返回的实例相关信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceSet?: Array<Instance>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 弹性网卡
 */
export interface NetworkInterface {
    /**
     * 弹性网卡实例ID，例如：eni-f1xjkw1b。
     */
    NetworkInterfaceId: string;
    /**
     * 弹性网卡名称。
     */
    NetworkInterfaceName: string;
    /**
     * 弹性网卡描述。
     */
    NetworkInterfaceDescription: string;
    /**
     * 子网实例ID。
     */
    SubnetId: string;
    /**
     * VPC实例ID。
     */
    VpcId: string;
    /**
        * 绑定的安全组。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    GroupSet: Array<string>;
    /**
     * 是否是主网卡。
     */
    Primary: boolean;
    /**
     * MAC地址。
     */
    MacAddress: string;
    /**
        * 弹性网卡状态：
  PENDING：创建中
  AVAILABLE：可用的
  ATTACHING：绑定中
  DETACHING：解绑中
  DELETING：删除中
        */
    State: string;
    /**
        * 内网IP信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PrivateIpAddressSet: Array<PrivateIpAddressSpecification>;
    /**
        * 绑定的云服务器对象。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Attachment: NetworkInterfaceAttachment;
    /**
     * 可用区。
     */
    Zone: string;
    /**
     * 创建时间。
     */
    CreatedTime: string;
    /**
        * IPv6地址列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Ipv6AddressSet: Array<Ipv6Address>;
    /**
        * 标签键值对。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagSet: Array<Tag>;
    /**
     * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
     */
    EniType: number;
}
/**
 * ResetInstancesPassword返回参数结构体
 */
export interface ResetInstancesPasswordResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 镜像来源信息
 */
export interface SrcImage {
    /**
     * 镜像id
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 系统名称
     */
    ImageOsName: string;
    /**
     * 镜像描述
     */
    ImageDescription: string;
    /**
     * 区域
     */
    Region: string;
    /**
     * 区域ID
     */
    RegionID: number;
    /**
     * 区域名称
     */
    RegionName: string;
    /**
     * 来源实例名称
     */
    InstanceName: string;
    /**
     * 来源实例ID
     */
    InstanceId: string;
    /**
     * 来源镜像类型
     */
    ImageType: string;
}
/**
 * 机型配置
 */
export interface InstanceTypeConfig {
    /**
     * 机型族配置信息
     */
    InstanceFamilyConfig: InstanceFamilyConfig;
    /**
     * 机型
     */
    InstanceType: string;
    /**
     * CPU核数
     */
    Vcpu: number;
    /**
     * 内存大小
     */
    Memory: number;
    /**
     * 主频
     */
    Frequency: string;
    /**
     * 处理器型号
     */
    CpuModelName: string;
    /**
     * 机型族类别配置信息
     */
    InstanceFamilyTypeConfig: InstanceFamilyTypeConfig;
    /**
        * 机型额外信息 是一个json字符串，如果存在则表示特殊机型，格式如下：{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"系统盘默认60G","dataDiskSizeShow":"本地NVMe SSD 硬盘3200 GB"}
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExtInfo: string;
}
/**
 * DescribeNode返回参数结构体
 */
export interface DescribeNodeResponse {
    /**
        * 节点详细信息的列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NodeSet?: Array<Node>;
    /**
     * 所有的节点数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RemovePrivateIpAddresses返回参数结构体
 */
export interface RemovePrivateIpAddressesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDefaultSubnet返回参数结构体
 */
export interface DescribeDefaultSubnetResponse {
    /**
     * 默认子网信息，若无子网，则为空数据。
     */
    Subnet?: Subnet;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 私有网络(VPC)对象。
 */
export interface VpcInfo {
    /**
     * VPC名称。
     */
    VpcName: string;
    /**
     * VPC实例ID，例如：vpc-azd4dt1c。
     */
    VpcId: string;
    /**
     * VPC的IPv4 CIDR。
     */
    CidrBlock: string;
    /**
     * 是否默认VPC。
     */
    IsDefault: boolean;
    /**
     * 是否开启组播。
     */
    EnableMulticast: boolean;
    /**
     * 创建时间。
     */
    CreatedTime: string;
    /**
        * DNS列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DnsServerSet: Array<string>;
    /**
     * DHCP域名选项值。
     */
    DomainName: string;
    /**
     * DHCP选项集ID。
     */
    DhcpOptionsId: string;
    /**
     * 是否开启DHCP。
     */
    EnableDhcp: boolean;
    /**
     * VPC的IPv6 CIDR。
     */
    Ipv6CidrBlock: string;
    /**
        * 标签键值对
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagSet: Array<Tag>;
    /**
        * 辅助CIDR
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AssistantCidrSet: Array<AssistantCidr>;
}
/**
 * DescribeCustomImageTask返回参数结构体
 */
export interface DescribeCustomImageTaskResponse {
    /**
        * 导入任务详情
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ImageTaskSet?: Array<ImageTask>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 安全组对象
 */
export interface SecurityGroup {
    /**
     * 安全组实例ID，例如：esg-ohuuioma。
     */
    SecurityGroupId: string;
    /**
     * 安全组名称，可任意命名，但不得超过60个字符。
     */
    SecurityGroupName: string;
    /**
     * 安全组备注，最多100个字符。
     */
    SecurityGroupDesc: string;
    /**
     * 是否是默认安全组，默认安全组不支持删除。
     */
    IsDefault?: boolean;
    /**
     * 安全组创建时间。
     */
    CreatedTime?: string;
    /**
     * 标签键值对。
     */
    TagSet?: Array<Tag>;
}
/**
 * DeleteSubnet请求参数结构体
 */
export interface DeleteSubnetRequest {
    /**
     * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
     */
    SubnetId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
}
/**
 * DescribeModule请求参数结构体
 */
export interface DescribeModuleRequest {
    /**
        * 过滤条件。
  module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。
  module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。
  image-id      String      是否必填：否      （过滤条件）按照镜像ID过滤。
  instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
  security-group-id - string 是否必填：否 - （过滤条件）按照模块绑定的安全组id过滤。
  每次请求的Filters的上限为10，Filter.Values的上限为5。
        */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
     */
    Limit?: number;
    /**
        * 指定排序字段。目前支持的可选值如下
  instance-num 按实例数量排序。
  node-num 按节点数量排序。
  timestamp 按实例创建时间排序。
  如果不传，默认按实例创建时间排序
        */
    OrderByField?: string;
    /**
     * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
     */
    OrderDirection?: number;
}
/**
 * 描述实例的位置相关信息。
 */
export interface Position {
    /**
     * 实例所在的Zone的信息。
     */
    ZoneInfo: ZoneInfo;
    /**
     * 实例所在的国家的信息。
     */
    Country: Country;
    /**
     * 实例所在的Area的信息。
     */
    Area: Area;
    /**
     * 实例所在的省份的信息。
     */
    Province: Province;
    /**
     * 实例所在的城市的信息。
     */
    City: City;
    /**
     * 实例所在的Region的信息。
     */
    RegionInfo: RegionInfo;
}
/**
 * CreateModule返回参数结构体
 */
export interface CreateModuleResponse {
    /**
     * 模块ID，创建模块成功后分配给该模块的ID。
     */
    ModuleId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RebootInstances请求参数结构体
 */
export interface RebootInstancesRequest {
    /**
     * 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
     */
    InstanceIdSet: Array<string>;
    /**
        * 是否在正常重启失败后选择强制重启实例。取值范围：
  TRUE：表示在正常重启失败后进行强制重启；
  FALSE：表示在正常重启失败后不进行强制重启；
  默认取值：FALSE。
        */
    ForceReboot?: boolean;
    /**
        * 关机类型。取值范围：
  SOFT：表示软关机
  HARD：表示硬关机
  SOFT_FIRST：表示优先软关机，失败再执行硬关机
  
  默认取值：SOFT。
        */
    StopType?: string;
}
/**
 * AllocateAddresses请求参数结构体
 */
export interface AllocateAddressesRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * EIP数量。默认值：1。
     */
    AddressCount?: number;
    /**
        * CMCC：中国移动
  CTCC：中国电信
  CUCC：中国联通
        */
    InternetServiceProvider?: string;
    /**
     * 1 Mbps 至 5000 Mbps，默认值：1 Mbps。
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 需要关联的标签列表。
     */
    Tags?: Array<Tag>;
}
/**
 * DeleteNetworkInterface请求参数结构体
 */
export interface DeleteNetworkInterfaceRequest {
    /**
     * 弹性网卡实例ID，例如：eni-m6dyj72l。
     */
    NetworkInterfaceId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
}
/**
 * RemovePrivateIpAddresses请求参数结构体
 */
export interface RemovePrivateIpAddressesRequest {
    /**
     * ECM 地域。
     */
    EcmRegion: string;
    /**
     * 弹性网卡实例ID，例如：eni-11112222。
     */
    NetworkInterfaceId: string;
    /**
     * 指定的内网IP信息，单次最多指定10个。
     */
    PrivateIpAddresses: Array<PrivateIpAddressSpecification>;
}
/**
 * ModifyInstancesAttribute请求参数结构体
 */
export interface ModifyInstancesAttributeRequest {
    /**
     * 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。
     */
    InstanceIdSet: Array<string>;
    /**
     * 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。
     */
    InstanceName?: string;
}
/**
 * 实例系列类型配置
 */
export interface InstanceFamilyTypeConfig {
    /**
     * 实例机型系列类型Id
     */
    InstanceFamilyType: string;
    /**
     * 实例机型系列类型名称
     */
    InstanceFamilyTypeName: string;
}
/**
 * ResetInstances返回参数结构体
 */
export interface ResetInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImage请求参数结构体
 */
export interface DescribeImageRequest {
    /**
        * 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：
  image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤
  image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
  PRIVATE_IMAGE: 私有镜像 (本帐户创建的镜像)
  PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
        */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
     */
    Limit?: number;
}
/**
 * MigratePrivateIpAddress请求参数结构体
 */
export interface MigratePrivateIpAddressRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 当内网IP绑定的弹性网卡实例ID，例如：eni-11112222。
     */
    SourceNetworkInterfaceId: string;
    /**
     * 待迁移的目的弹性网卡实例ID。
     */
    DestinationNetworkInterfaceId: string;
    /**
     * 迁移的内网IP地址，例如：10.0.0.6。
     */
    PrivateIpAddress: string;
}
/**
 * ModifySubnetAttribute返回参数结构体
 */
export interface ModifySubnetAttributeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Zone信息
 */
export interface ZoneInfo {
    /**
     * ZoneId
     */
    ZoneId: number;
    /**
     * ZoneName
     */
    ZoneName: string;
    /**
     * Zone
     */
    Zone: string;
}
/**
 * DescribeNode请求参数结构体
 */
export interface DescribeNodeRequest {
    /**
     * 过滤条件，name取值为： InstanceFamily-实例系列
     */
    Filters?: Array<Filter>;
}
/**
 * CreateSubnet返回参数结构体
 */
export interface CreateSubnetResponse {
    /**
     * 子网对象。
     */
    Subnet?: Subnet;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResetInstancesPassword请求参数结构体
 */
export interface ResetInstancesPasswordRequest {
    /**
     * 待重置密码的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
     */
    InstanceIdSet: Array<string>;
    /**
        * 新密码，Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
  Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
  如果实例即包含Linux实例又包含Windows实例，则密码复杂度限制按照Windows实例的限制。
        */
    Password: string;
    /**
     * 是否强制关机，默认为false。
     */
    ForceStop?: boolean;
    /**
     * 待重置密码的实例的用户名，不得超过64个字符。若未指定用户名，则对于Linux而言，默认重置root用户的密码，对于Windows而言，默认重置administrator的密码。
     */
    UserName?: string;
}
/**
 * ModifyModuleConfig请求参数结构体
 */
export interface ModifyModuleConfigRequest {
    /**
     * 模块ID。
     */
    ModuleId: string;
    /**
     * 机型ID。
     */
    InstanceType: string;
    /**
     * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
     */
    DefaultDataDiskSize: number;
}
/**
 * 区域信息
 */
export interface Area {
    /**
     * 区域ID
     */
    AreaId: string;
    /**
     * 区域名称
     */
    AreaName: string;
}
/**
 * DescribeConfig请求参数结构体
 */
export declare type DescribeConfigRequest = null;
/**
 * DescribeInstanceVncUrl请求参数结构体
 */
export interface DescribeInstanceVncUrlRequest {
    /**
     * 一个操作的实例ID。可通过DescribeInstances API返回值中的InstanceId获取。
     */
    InstanceId: string;
}
/**
 * 网络硬盘上下限数据
 */
export interface NetworkStorageRange {
    /**
     * 网络带宽上限
     */
    MaxBandwidth: number;
    /**
     * 数据盘上限
     */
    MaxSystemDiskSize: number;
    /**
     * 网络带宽下限
     */
    MinBandwidth: number;
    /**
     * 数据盘下限
     */
    MinSystemDiskSize: number;
    /**
     * 最大数据盘大小
     */
    MaxDataDiskSize: number;
    /**
     * 最小数据盘大小
     */
    MinDataDiskSize: number;
    /**
     * 建议带宽
     */
    SuggestBandwidth: number;
    /**
     * 建议硬盘大小
     */
    SuggestDataDiskSize: number;
    /**
     * 建议系统盘大小
     */
    SuggestSystemDiskSize: number;
    /**
     * Cpu核数峰值
     */
    MaxVcpu: number;
    /**
     * Cpu核最小值
     */
    MinVcpu: number;
    /**
     * 单次请求最大cpu核数
     */
    MaxVcpuPerReq: number;
    /**
     * 带宽步长
     */
    PerBandwidth: number;
    /**
     * 数据盘步长
     */
    PerDataDisk: number;
    /**
     * 总模块数量
     */
    MaxModuleNum: number;
}
/**
 * StartInstances返回参数结构体
 */
export interface StartInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateVpc返回参数结构体
 */
export interface CreateVpcResponse {
    /**
     * Vpc对象。
     */
    Vpc?: VpcInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VPC辅助CIDR信息。
 */
export interface AssistantCidr {
    /**
     * VPC实例ID。形如：vpc-6v2ht8q5
     */
    VpcId: string;
    /**
     * 辅助CIDR。形如：172.16.0.0/16
     */
    CidrBlock: string;
    /**
     * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
     */
    AssistantType: number;
    /**
        * 辅助CIDR拆分的子网。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SubnetSet: Array<Subnet>;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
     * 任务描述
     */
    TaskSet?: Array<TaskOutput>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyModuleIpDirect请求参数结构体
 */
export interface ModifyModuleIpDirectRequest {
    /**
     * 模块ID。
     */
    ModuleId: string;
    /**
        * 是否关闭IP直通。取值范围：
  1：表示关闭IP直通
  0：表示开通IP直通
        */
    CloseIpDirect: boolean;
}
/**
 * CreateModule请求参数结构体
 */
export interface CreateModuleRequest {
    /**
     * 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。
     */
    ModuleName: string;
    /**
     * 默认带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
     */
    DefaultBandWidth: number;
    /**
     * 默认镜像，如img-qsdf3ff2。
     */
    DefaultImageId: string;
    /**
     * 机型ID。
     */
    InstanceType: string;
    /**
     * 默认系统盘大小，单位：G，默认大小为50G。范围不得超过系统盘上下限制，详看DescribeConfig。
     */
    DefaultSystemDiskSize: number;
    /**
     * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
     */
    DefaultDataDiskSize: number;
    /**
        * 是否关闭IP直通。取值范围：
  1：表示关闭IP直通
  0：表示开通IP直通
        */
    CloseIpDirect?: boolean;
    /**
     * 标签列表。
     */
    TagSpecification?: Array<TagSpecification>;
}
/**
 * ModifyInstancesAttribute返回参数结构体
 */
export interface ModifyInstancesAttributeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReleaseAddresses返回参数结构体
 */
export interface ReleaseAddressesResponse {
    /**
     * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstancesDeniedActions返回参数结构体
 */
export interface DescribeInstancesDeniedActionsResponse {
    /**
     * 实例对应的禁止操作
     */
    InstanceOperatorSet?: Array<InstanceOperator>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateAddress请求参数结构体
 */
export interface DisassociateAddressRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
     */
    AddressId: string;
    /**
        * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：
  TRUE：表示解绑 EIP 之后分配普通公网 IP。
  FALSE：表示解绑 EIP 之后不分配普通公网 IP。
  默认取值：FALSE。
  
  只有满足以下条件时才能指定该参数：
  只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。
  解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 DescribeAddressQuota 接口获取。
        */
    ReallocateNormalPublicIp?: boolean;
}
/**
 * 任务查询出参
 */
export interface TaskOutput {
    /**
     * 任务id
     */
    TaskId: string;
    /**
     * 状态描述
     */
    Message: string;
    /**
     * 状态值，SUCCESS/FAILED/OPERATING
     */
    Status: string;
    /**
     * 任务提交时间
     */
    AddTime: string;
    /**
     * 任务结束时间
     */
    EndTime: string;
    /**
     * 操作名
     */
    Operation: string;
}
/**
 * 节点统计数据
 */
export interface ModuleCounter {
    /**
     * 运营商统计信息列表
     */
    ISPCounterSet: Array<ISPCounter>;
    /**
     * 省份数量
     */
    ProvinceNum: number;
    /**
     * 城市数量
     */
    CityNum: number;
    /**
     * 节点数量
     */
    NodeNum: number;
    /**
     * 实例数量
     */
    InstanceNum: number;
}
/**
 * 实例可用区及对应的实例创建数目及运营商的组合；
 */
export interface ZoneInstanceCountISP {
    /**
     * 创建实例的可用区。
     */
    Zone: string;
    /**
     * 在当前可用区欲创建的实例数目。
     */
    InstanceCount: number;
    /**
     * 运营商，CTCC电信，CUCC联通，CMCC移动，多个运营商用英文分号连接";"。多运营商需要开通白名单，请直接联系腾讯云客服。
     */
    ISP: string;
    /**
     * 指定私有网络编号，SubnetId与VpcId必须同时指定或不指定
     */
    VpcId?: string;
    /**
     * 指定子网编号，SubnetId与VpcId必须同时指定或不指定
     */
    SubnetId?: string;
    /**
     * 指定主网卡内网IP。条件：SubnetId与VpcId必须同时指定，并且IP数量与InstanceCount相同，多IP主机副网卡内网IP在相同子网内通过DHCP获取。
     */
    PrivateIpAddresses?: Array<string>;
}
/**
 * 任务查询
 */
export interface TaskInput {
    /**
     * 操作名，即API名称，比如：CreateImage
     */
    Operation: string;
    /**
     * 任务id
     */
    TaskId: string;
}
/**
 * StartInstances请求参数结构体
 */
export interface StartInstancesRequest {
    /**
     * 待开启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
     */
    InstanceIdSet: Array<string>;
}
/**
 * 标签信息。
 */
export interface Tag {
    /**
        * 标签的键。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Key: string;
    /**
        * 标签的值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Value: string;
}
/**
 * DescribeDefaultSubnet请求参数结构体
 */
export interface DescribeDefaultSubnetRequest {
    /**
     * ECM地域
     */
    EcmRegion: string;
    /**
     * ECM可用区
     */
    Zone: string;
}
/**
 * ResetInstancesMaxBandwidth返回参数结构体
 */
export interface ResetInstancesMaxBandwidthResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteVpc请求参数结构体
 */
export interface DeleteVpcRequest {
    /**
     * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
     */
    VpcId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
}
/**
 * CreateNetworkInterface返回参数结构体
 */
export interface CreateNetworkInterfaceResponse {
    /**
     * 弹性网卡实例。
     */
    NetworkInterface?: NetworkInterface;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 节点信息
 */
export interface Node {
    /**
     * zone信息
     */
    ZoneInfo: ZoneInfo;
    /**
     * 国家信息
     */
    Country: Country;
    /**
     * 区域信息
     */
    Area: Area;
    /**
     * 省份信息
     */
    Province: Province;
    /**
     * 城市信息
     */
    City: City;
    /**
     * Region信息
     */
    RegionInfo: RegionInfo;
    /**
     * 运营商列表
     */
    ISPSet: Array<ISP>;
    /**
     * 运营商数量
     */
    ISPNum: number;
}
/**
 * RunInstances返回参数结构体
 */
export interface RunInstancesResponse {
    /**
        * 创建中的实例ID列表
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceIdSet?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAddressQuota请求参数结构体
 */
export interface DescribeAddressQuotaRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
}
/**
 * DescribeInstanceTypeConfig返回参数结构体
 */
export interface DescribeInstanceTypeConfigResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
        * 机型配置信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceTypeConfigSet?: Array<InstanceTypeConfig>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 节点实例数量信息
 */
export interface NodeInstanceNum {
    /**
     * 节点数量
     */
    NodeNum: number;
    /**
     * 实例数量
     */
    InstanceNum: number;
}
/**
 * DescribeAddresses返回参数结构体
 */
export interface DescribeAddressesResponse {
    /**
     * 符合条件的 EIP 数量。
     */
    TotalCount?: number;
    /**
     * EIP 详细信息列表。
     */
    AddressSet?: Array<Address>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportImage请求参数结构体
 */
export interface ImportImageRequest {
    /**
     * 镜像的Id。
     */
    ImageId: string;
    /**
     * 镜像的描述。
     */
    ImageDescription: string;
    /**
     * 源地域
     */
    SourceRegion: string;
}
/**
 * DetachNetworkInterface返回参数结构体
 */
export interface DetachNetworkInterfaceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 机型族配置
 */
export interface InstanceFamilyConfig {
    /**
     * 机型名称
     */
    InstanceFamilyName: string;
    /**
     * 机型ID
     */
    InstanceFamily: string;
}
/**
 * DeleteModule请求参数结构体
 */
export interface DeleteModuleRequest {
    /**
     * 模块ID。如：em-qn46snq8
     */
    ModuleId: string;
}
/**
 * DescribeVpcs请求参数结构体
 */
export interface DescribeVpcsRequest {
    /**
     * 地域
     */
    EcmRegion: string;
    /**
     * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
     */
    VpcIds?: Array<string>;
    /**
        * 过滤条件，参数不支持同时指定VpcIds和Filters。
  vpc-name - String - （过滤条件）VPC实例名称。
  is-default - String - （过滤条件）是否默认VPC。
  vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。
  cidr-block - String - （过滤条件）vpc的cidr。
  tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
  tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例
        */
    Filters?: Array<Filter>;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 返回数量
     */
    Limit?: number;
}
/**
 * ResetInstancesMaxBandwidth请求参数结构体
 */
export interface ResetInstancesMaxBandwidthRequest {
    /**
     * 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
     */
    InstanceIdSet: Array<string>;
    /**
     * 修改后的最大带宽上限。
     */
    MaxBandwidthOut: number;
}
/**
 * 操作系统支持的类型。
 */
export interface OsVersion {
    /**
     * 操作系统类型
     */
    OsName: string;
    /**
        * 支持的操作系统版本
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OsVersions: Array<string>;
    /**
        * 支持的操作系统架构
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Architecture: Array<string>;
}
/**
 * 峰值信息
 */
export interface PeakBase {
    /**
     * CPU峰值
     */
    PeakCpuNum: number;
    /**
     * 内存峰值
     */
    PeakMemoryNum: number;
    /**
     * 硬盘峰值
     */
    PeakStorageNum: number;
    /**
     * 记录时间
     */
    RecordTime: string;
}
/**
 * ModifyModuleNetwork请求参数结构体
 */
export interface ModifyModuleNetworkRequest {
    /**
     * 模块Id
     */
    ModuleId: string;
    /**
     * 默认带宽上限
     */
    DefaultBandwidth: number;
}
/**
 * 镜像信息
 */
export interface Image {
    /**
     * 镜像ID
     */
    ImageId: string;
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 镜像状态
     */
    ImageState: string;
    /**
     * 镜像类型
     */
    ImageType: string;
    /**
     * 操作系统名称
     */
    ImageOsName: string;
    /**
     * 镜像描述
     */
    ImageDescription: string;
    /**
     * 镜像导入时间
     */
    ImageCreateTime: string;
    /**
     * 操作系统位数
     */
    Architecture: string;
    /**
     * 操作系统类型
     */
    OsType: string;
    /**
     * 操作系统版本
     */
    OsVersion: string;
    /**
     * 操作系统平台
     */
    Platform: string;
    /**
     * 镜像所有者
     */
    ImageOwner: number;
    /**
     * 镜像大小。单位：GB
     */
    ImageSize: number;
    /**
     * 镜像来源信息
     */
    SrcImage: SrcImage;
    /**
     * 镜像来源类型
     */
    ImageSource: string;
}
/**
 * 资源类型的Tag
 */
export interface TagSpecification {
    /**
     * 资源类型，目前仅支持"instance"、"module"
     */
    ResourceType: string;
    /**
     * 标签列表
     */
    Tags: Array<Tag>;
}
/**
 * DetachNetworkInterface请求参数结构体
 */
export interface DetachNetworkInterfaceRequest {
    /**
     * 弹性网卡实例ID，例如：eni-m6dyj72l。
     */
    NetworkInterfaceId: string;
    /**
     * 实例ID。形如：ein-hcs7jkg4
     */
    InstanceId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
}
/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
    /**
     * 网络带宽硬盘大小的范围信息。
     */
    NetworkStorageRange?: NetworkStorageRange;
    /**
        * 镜像操作系统白名单
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ImageWhiteSet?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDefaultSubnet返回参数结构体
 */
export interface ModifyDefaultSubnetResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImportImageOs返回参数结构体
 */
export interface DescribeImportImageOsResponse {
    /**
     * 支持的导入镜像的操作系统类型
     */
    ImportImageOsListSupported?: ImageOsList;
    /**
     * 支持的导入镜像的操作系统版本
     */
    ImportImageOsVersionSet?: Array<OsVersion>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeModuleDetail返回参数结构体
 */
export interface DescribeModuleDetailResponse {
    /**
        * 模块的详细信息，详细见数据结构中的ModuleInfo。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Module?: Module;
    /**
        * 模块的统计信息，详细见数据结构中的ModuleCounterInfo。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ModuleCounter?: ModuleCounter;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopInstances请求参数结构体
 */
export interface StopInstancesRequest {
    /**
     * 需要关机的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
     */
    InstanceIdSet: Array<string>;
    /**
     * 是否在正常关闭失败后选择强制关闭实例，默认为false，即否。
     */
    ForceStop?: boolean;
    /**
        * 实例的关闭模式。取值范围：
  SOFT_FIRST：表示在正常关闭失败后进行强制关闭;
  HARD：直接强制关闭;
  SOFT：仅软关机；
  默认为SOFT。
        */
    StopType?: string;
}
/**
 * 子网对象
 */
export interface Subnet {
    /**
     * VPC实例ID。
     */
    VpcId: string;
    /**
     * 子网实例ID，例如：subnet-bthucmmy。
     */
    SubnetId: string;
    /**
     * 子网名称。
     */
    SubnetName: string;
    /**
     * 子网的 IPv4 CIDR。
     */
    CidrBlock: string;
    /**
     * 是否默认子网。
     */
    IsDefault: boolean;
    /**
     * 是否开启广播。
     */
    EnableBroadcast: boolean;
    /**
     * 路由表实例ID，例如：rtb-l2h8d7c2。
     */
    RouteTableId: string;
    /**
     * 创建时间。
     */
    CreatedTime: string;
    /**
     * 可用IP数。
     */
    AvailableIpAddressCount: number;
    /**
     * 子网的 IPv6 CIDR。
     */
    Ipv6CidrBlock: string;
    /**
     * 关联ACLID
     */
    NetworkAclId: string;
    /**
     * 是否为 SNAT 地址池子网。
     */
    IsRemoteVpcSnat: boolean;
    /**
        * 标签键值对。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagSet: Array<Tag>;
    /**
     * 所在区域
     */
    Zone: string;
}
/**
 * ModifyVpcAttribute返回参数结构体
 */
export interface ModifyVpcAttributeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteVpc返回参数结构体
 */
export interface DeleteVpcResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 镜像文件信息
 */
export interface ImageUrl {
    /**
     * 镜像文件COS链接，如设置私有读写，需授权腾讯云ECM运营账号访问权限。
     */
    ImageFile: string;
}
/**
 * 运营商信息
 */
export interface ISP {
    /**
     * 运营商ID
     */
    ISPId: string;
    /**
     * 运营商名称
     */
    ISPName: string;
}
/**
 * 内网IP信息
 */
export interface PrivateIpAddressSpecification {
    /**
     * 内网IP地址。
     */
    PrivateIpAddress: string;
    /**
        * 是否是主IP。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Primary?: boolean;
    /**
     * 公网IP地址。
     */
    PublicIpAddress?: string;
    /**
     * EIP实例ID，例如：eip-11112222。
     */
    AddressId?: string;
    /**
     * 内网IP描述信息。
     */
    Description?: string;
    /**
        * 公网IP是否被封堵。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IsWanIpBlocked?: boolean;
    /**
        * IP状态：
  PENDING：生产中
  MIGRATING：迁移中
  DELETING：删除中
  AVAILABLE：可用的
        */
    State?: string;
}
/**
 * 运行商统计信息
 */
export interface ISPCounter {
    /**
     * 运营商名称
     */
    ProviderName: string;
    /**
     * 节点数量
     */
    ProviderNodeNum: number;
    /**
     * 实例数量
     */
    ProvederInstanceNum: number;
    /**
     * Zone实例信息结构体数组
     */
    ZoneInstanceInfoSet: Array<ZoneInstanceInfo>;
}
/**
 * MigratePrivateIpAddress返回参数结构体
 */
export interface MigratePrivateIpAddressResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImage请求参数结构体
 */
export interface CreateImageRequest {
    /**
     * 镜像名称。
     */
    ImageName: string;
    /**
     * 需要制作镜像的实例ID。
     */
    InstanceId: string;
    /**
     * 镜像描述。
     */
    ImageDescription?: string;
    /**
        * 是否执行强制关机以制作镜像。取值范围：
  TRUE：表示自动关机后制作镜像
  FALSE：表示开机状态制作，目前不支持，需要先手动关机
  默认取值：FALSE。
        */
    ForcePoweroff?: string;
}
/**
 * 用于描述实例相关的信息。
 */
export interface Instance {
    /**
     * 实例ID。
     */
    InstanceId: string;
    /**
        * 实例名称，如ens-34241f3s。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceName: string;
    /**
        * 实例状态。取值范围：
  PENDING：表示创建中
  LAUNCH_FAILED：表示创建失败
  RUNNING：表示运行中
  STOPPED：表示关机
  STARTING：表示开机中
  STOPPING：表示关机中
  REBOOTING：表示重启中
  SHUTDOWN：表示停止待销毁
  TERMINATING：表示销毁中。
        */
    InstanceState: string;
    /**
        * 实例当前使用的镜像的信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Image: Image;
    /**
        * 实例当前所属的模块简要信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SimpleModule: SimpleModule;
    /**
        * 实例所在的位置相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Position: Position;
    /**
        * 实例的网络相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Internet: Internet;
    /**
        * 实例的配置相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceTypeConfig: InstanceTypeConfig;
    /**
        * 实例的创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CreateTime: string;
    /**
        * 实例的标签信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagSet: Array<Tag>;
    /**
        * 实例最后一次操作。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    LatestOperation: string;
    /**
        * 实例最后一次操作结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    LatestOperationState: string;
    /**
        * 实例业务状态。取值范围：
  NORMAL：表示正常状态的实例
  EXPIRED：表示过期的实例
  PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RestrictState: string;
    /**
        * 系统盘大小，单位GB。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SystemDiskSize: number;
    /**
        * 数据盘大小，单位GB。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DataDiskSize: number;
    /**
        * 实例UUID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    UUID: string;
    /**
        * 付费方式。
      0为后付费。
      1为预付费。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PayMode: number;
    /**
        * 过期时间。格式为yyyy-mm-dd HH:mm:ss。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExpireTime: string;
    /**
        * 隔离时间。格式为yyyy-mm-dd HH:mm:ss。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IsolatedTime: string;
    /**
        * 是否自动续费。
        0为不自动续费。
        1为自动续费。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RenewFlag: number;
    /**
        * 过期状态。
      NORMAL 表示机器运行正常。
      WILL_EXPIRE 表示即将过期。
      EXPIRED 表示已过期。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExpireState: string;
    /**
        * 系统盘信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SystemDisk: DiskInfo;
    /**
        * 数据盘信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DataDisks: Array<DiskInfo>;
    /**
        * 新实例标志
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NewFlag: number;
    /**
        * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    SecurityGroupIds: Array<string>;
}
/**
 * 增强服务
 */
export interface EnhancedService {
    /**
     * 是否开启云镜服务。
     */
    SecurityService?: RunSecurityServiceEnabled;
    /**
     * 是否开启云监控服务。
     */
    MonitorService?: RunMonitorServiceEnabled;
    /**
     * 是否开通IP直通。若不指定该参数，则Linux镜像默认开通，windows镜像暂不支持IP直通。
     */
    EIPDirectService?: RunEIPDirectServiceEnabled;
}
/**
 * DescribeInstanceVncUrl返回参数结构体
 */
export interface DescribeInstanceVncUrlResponse {
    /**
     * 实例的管理终端地址。
     */
    InstanceVncUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateAddress返回参数结构体
 */
export interface DisassociateAddressResponse {
    /**
     * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceTypeConfig请求参数结构体
 */
export declare type DescribeInstanceTypeConfigRequest = null;
/**
 * ImportCustomImage请求参数结构体
 */
export interface ImportCustomImageRequest {
    /**
     * 镜像名称
     */
    ImageName: string;
    /**
     * 导入镜像的操作系统架构，x86_64 或 i386
     */
    Architecture: string;
    /**
     * 导入镜像的操作系统类型，通过DescribeImportImageOs获取
     */
    OsType: string;
    /**
     * 导入镜像的操作系统版本，通过DescribeImportImageOs获取
     */
    OsVersion: string;
    /**
     * 镜像描述
     */
    ImageDescription?: string;
    /**
     * 镜像启动方式，cloudinit或nbd， 默认cloudinit
     */
    InitFlag?: string;
    /**
     * 镜像描述，多层镜像按顺序传入
     */
    ImageUrls?: Array<ImageUrl>;
}
/**
 * DescribeModuleDetail请求参数结构体
 */
export interface DescribeModuleDetailRequest {
    /**
     * 模块ID，如em-qn46snq8。
     */
    ModuleId: string;
}
/**
 * AssociateAddress请求参数结构体
 */
export interface AssociateAddressRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
     */
    AddressId: string;
    /**
     * 要绑定的实例 ID。
     */
    InstanceId?: string;
    /**
     * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
     */
    NetworkInterfaceId?: string;
    /**
     * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
     */
    PrivateIpAddress?: string;
}
/**
 * ModifyVpcAttribute请求参数结构体
 */
export interface ModifyVpcAttributeRequest {
    /**
     * VPC实例ID。形如：vpc-f49l6u0z。
     */
    VpcId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 私有网络名称，可任意命名，但不得超过60个字符。
     */
    VpcName?: string;
}
/**
 * DescribePeakNetworkOverview返回参数结构体
 */
export interface DescribePeakNetworkOverviewResponse {
    /**
        * 网络峰值数组。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PeakNetworkRegionSet?: Array<PeakNetworkRegionInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachNetworkInterface返回参数结构体
 */
export interface AttachNetworkInterfaceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImage返回参数结构体
 */
export interface CreateImageResponse {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBaseOverview请求参数结构体
 */
export declare type DescribeBaseOverviewRequest = null;
/**
 * ModifyModuleNetwork返回参数结构体
 */
export interface ModifyModuleNetworkResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 磁盘信息
 */
export interface DiskInfo {
    /**
     * 磁盘类型：LOCAL_BASIC
     */
    DiskType: string;
    /**
     * 磁盘ID
     */
    DiskId: string;
    /**
     * 磁盘大小（GB）
     */
    DiskSize: number;
}
/**
 * DescribeImportImageOs请求参数结构体
 */
export declare type DescribeImportImageOsRequest = null;
/**
 * 弹性网卡绑定关系
 */
export interface NetworkInterfaceAttachment {
    /**
     * 云主机实例ID。
     */
    InstanceId: string;
    /**
     * 网卡在云主机实例内的序号。
     */
    DeviceIndex: number;
    /**
     * 云主机所有者账户信息。
     */
    InstanceAccountId: string;
    /**
     * 绑定时间。
     */
    AttachTime: string;
}
/**
 * StopInstances返回参数结构体
 */
export interface StopInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyModuleIpDirect返回参数结构体
 */
export interface ModifyModuleIpDirectResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyModuleName请求参数结构体
 */
export interface ModifyModuleNameRequest {
    /**
     * 模块ID。
     */
    ModuleId: string;
    /**
     * 模块名称。
     */
    ModuleName: string;
}
/**
 * ModifyDefaultSubnet请求参数结构体
 */
export interface ModifyDefaultSubnetRequest {
    /**
     * ECM地域
     */
    EcmRegion: string;
    /**
     * ECM可用区
     */
    Zone: string;
    /**
     * 私有网络ID
     */
    VpcId: string;
    /**
     * 子网ID
     */
    SubnetId: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
        * 过滤条件。
  zone      String      是否必填：否     （过滤条件）按照可用区英文标识符过滤。
  zone-name      String      是否必填：否     （过滤条件）按照可用区中文名过滤,支持模糊匹配。
  module-id      String      是否必填：否     （过滤条件）按照模块ID过滤。
  instance-id      String      是否必填：否      （过滤条件）按照实例ID过滤。
  instance-name      String      是否必填：否      （过滤条件）按照实例名称过滤,支持模糊匹配。
  ip-address      String      是否必填：否      （过滤条件）按照实例的内网/公网IP过滤。
  instance-uuid   string 是否必填：否 （过滤条件）按照uuid过滤实例列表。
  instance-state  string  是否必填：否 （过滤条件）按照实例状态更新实例列表。
  internet-service-provider      String      是否必填：否      （过滤条件）按照实例公网IP所属的运营商进行过滤。
  tag-key      String      是否必填：否      （过滤条件）按照标签键进行过滤。
  tag:tag-key      String      是否必填：否      （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
  instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
  module-name      String      是否必填：否      （过滤条件）按照模块名称过滤,支持模糊匹配。
  image-id      String      是否必填：否      （过滤条件）按照实例的镜像ID过滤。
  
  若不传Filters参数则表示查询所有相关的实例信息。
  单次请求的Filter.Values的上限为5。
        */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。
     */
    Limit?: number;
    /**
        * 指定排序字段。目前支持的可选值如下
  timestamp 按实例创建时间排序。
  注意：目前仅支持按创建时间排序，后续可能会有扩展。
  如果不传，默认按实例创建时间排序
        */
    OrderByField?: string;
    /**
     * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
     */
    OrderDirection?: number;
}
/**
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 异步任务ID。
     */
    TaskId: string;
}
/**
 * AssociateAddress返回参数结构体
 */
export interface AssociateAddressResponse {
    /**
     * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 过滤器Filter;由Name和ValueSet组成，是string的key和字符串数组的value
 */
export interface Filter {
    /**
     * 过滤字段名称
     */
    Name: string;
    /**
     * 过滤字段内容数组
     */
    Values: Array<string>;
}
/**
 * 实例的公网ip相关信息。
 */
export interface PublicIPAddressInfo {
    /**
     * 计费模式。
     */
    ChargeMode: string;
    /**
     * 实例的公网ip。
     */
    PublicIPAddress: string;
    /**
     * 实例的公网ip所属的运营商。
     */
    ISP: ISP;
    /**
     * 实例的最大出带宽上限。
     */
    MaxBandwidthOut: number;
}
/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAddresses请求参数结构体
 */
export interface DescribeAddressesRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：eip-11112222。参数不支持同时指定AddressIds和Filters。
     */
    AddressIds?: Array<string>;
    /**
        * 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定AddressIds和Filters。详细的过滤条件如下：
  address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。
  address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。
  address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。
  address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：详见EIP状态列表。
  instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。
  private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。
  network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。
  is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）
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
}
/**
 * ModifyModuleConfig返回参数结构体
 */
export interface ModifyModuleConfigResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MigrateNetworkInterface请求参数结构体
 */
export interface MigrateNetworkInterfaceRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 弹性网卡实例ID，例如：eni-m6dyj72l。
     */
    NetworkInterfaceId: string;
    /**
     * 弹性网卡当前绑定的ECM实例ID。形如：ein-r8hr2upy。
     */
    SourceInstanceId: string;
    /**
     * 待迁移的目的ECM实例ID。
     */
    DestinationInstanceId: string;
}
/**
 * DescribeAddressQuota返回参数结构体
 */
export interface DescribeAddressQuotaResponse {
    /**
     * 账户 EIP 配额信息。
     */
    QuotaSet?: Array<EipQuota>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSecurityGroup返回参数结构体
 */
export interface CreateSecurityGroupResponse {
    /**
     * 安全组对象。
     */
    SecurityGroup?: SecurityGroup;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Zone的实例信息
 */
export interface ZoneInstanceInfo {
    /**
     * Zone名称
     */
    ZoneName: string;
    /**
     * 实例数量
     */
    InstanceNum: number;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
     * 任务描述
     */
    TaskSet: Array<TaskInput>;
}
/**
 * ModifyAddressAttribute请求参数结构体
 */
export interface ModifyAddressAttributeRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
     */
    AddressId: string;
    /**
     * 修改后的 EIP 名称。长度上限为20个字符。
     */
    AddressName?: string;
    /**
     * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
     */
    EipDirectConnection?: string;
}
/**
 * ModifyModuleImage返回参数结构体
 */
export interface ModifyModuleImageResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResetInstances请求参数结构体
 */
export interface ResetInstancesRequest {
    /**
     * 待重装的实例ID列表。
     */
    InstanceIdSet: Array<string>;
    /**
     * 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。
     */
    ImageId?: string;
    /**
     * 密码设置，若未指定，则后续将以站内信的形式通知密码。
     */
    Password?: string;
    /**
     * 是否开启云监控和云镜服务，未指定时默认开启。
     */
    EnhancedService?: EnhancedService;
    /**
     * 是否保留数据盘数据，取值"true"/"false"。默认为"true"
     */
    KeepData?: string;
}
/**
 * 峰值网络数据
 */
export interface PeakNetwork {
    /**
     * 记录时间。
     */
    RecordTime: string;
    /**
     * 入带宽数据。
     */
    PeakInNetwork: string;
    /**
     * 出带宽数据。
     */
    PeakOutNetwork: string;
}
/**
 * DescribeCustomImageTask请求参数结构体
 */
export interface DescribeCustomImageTaskRequest {
    /**
        * 支持key,value查询
  task-id: 异步任务ID
  image-id: 镜像ID
  image-name: 镜像名称
        */
    Filters: Array<Filter>;
}
/**
 * 支持的操作系统类型，根据windows和Linux分类。
 */
export interface ImageOsList {
    /**
        * 支持的windows操作系统
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Windows: Array<string>;
    /**
        * 支持的linux操作系统
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Linux: Array<string>;
}
/**
 * 实例可执行操作
 */
export interface InstanceOperator {
    /**
     * 实例id
     */
    InstanceId: string;
    /**
        * 实例禁止的操作
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DeniedActions: Array<OperatorAction>;
}
/**
 * ModifyAddressAttribute返回参数结构体
 */
export interface ModifyAddressAttributeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImportImage返回参数结构体
 */
export interface ImportImageResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSecurityGroup请求参数结构体
 */
export interface CreateSecurityGroupRequest {
    /**
     * 安全组名称，可任意命名，但不得超过60个字符。
     */
    GroupName: string;
    /**
     * 安全组备注，最多100个字符。
     */
    GroupDescription: string;
    /**
     * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
     */
    Tags?: Array<Tag>;
}
/**
 * 城市信息
 */
export interface City {
    /**
     * 城市ID
     */
    CityId: string;
    /**
     * 城市名称
     */
    CityName: string;
}
/**
 * 实例的内网ip相关信息。
 */
export interface PrivateIPAddressInfo {
    /**
        * 实例的内网ip。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PrivateIPAddress: string;
}
/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
    /**
     * 待销毁的实例ID列表。
     */
    InstanceIdSet: Array<string>;
    /**
     * 是否定时销毁，默认为否。
     */
    TerminateDelay?: boolean;
    /**
     * 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。
     */
    TerminateTime?: string;
}
/**
 * DeleteNetworkInterface返回参数结构体
 */
export interface DeleteNetworkInterfaceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Module的简要信息
 */
export interface SimpleModule {
    /**
     * 模块ID
     */
    ModuleId: string;
    /**
     * 模块名称
     */
    ModuleName: string;
}
/**
 * DescribePeakNetworkOverview请求参数结构体
 */
export interface DescribePeakNetworkOverviewRequest {
    /**
     * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期。
     */
    StartTime?: string;
    /**
     * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天。
     */
    EndTime?: string;
    /**
        * 过滤条件。
  region    String      是否必填：否     （过滤条件）按照region过滤,不支持模糊匹配。
        */
    Filters?: Array<Filter>;
}
/**
 * AssignPrivateIpAddresses返回参数结构体
 */
export interface AssignPrivateIpAddressesResponse {
    /**
        * 内网IP详细信息。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PrivateIpAddressSet?: Array<PrivateIpAddressSpecification>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * region维度的网络峰值信息
 */
export interface PeakNetworkRegionInfo {
    /**
     * region信息
     */
    Region: string;
    /**
        * 网络峰值集合
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PeakNetworkSet: Array<PeakNetwork>;
}
/**
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAddressesBandwidth请求参数结构体
 */
export interface ModifyAddressesBandwidthRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * EIP唯一标识ID，形如'eip-xxxxxxx'
     */
    AddressIds: Array<string>;
    /**
     * 调整带宽目标值
     */
    InternetMaxBandwidthOut: number;
}
/**
 * 操作Action
 */
export interface OperatorAction {
    /**
     * 可执行操作
     */
    Action: string;
    /**
        * 编码Code
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Code: string;
    /**
        * 具体信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Message: string;
}
/**
 * PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息
 */
export interface PeakFamilyInfo {
    /**
     * 机型类别信息。
     */
    InstanceFamily: InstanceFamilyTypeConfig;
    /**
     * 基础数据峰值信息。
     */
    PeakBaseSet: Array<PeakBase>;
}
/**
 * DescribePeakBaseOverview返回参数结构体
 */
export interface DescribePeakBaseOverviewResponse {
    /**
        * 基础峰值列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PeakFamilyInfoSet?: Array<PeakFamilyInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyImageAttribute返回参数结构体
 */
export interface ModifyImageAttributeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImage返回参数结构体
 */
export interface DescribeImageResponse {
    /**
     * 镜像总数
     */
    TotalCount?: number;
    /**
        * 镜像数组
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ImageSet?: Array<Image>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Region和RegionName
 */
export interface RegionInfo {
    /**
     * Region
     */
    Region: string;
    /**
     * Region名称
     */
    RegionName: string;
    /**
     * RegionID
     */
    RegionId: number;
}
/**
 * DeleteImage返回参数结构体
 */
export interface DeleteImageResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述 EIP 信息
 */
export interface Address {
    /**
     * EIP的ID，是EIP的唯一标识。
     */
    AddressId: string;
    /**
     * EIP名称。
     */
    AddressName: string;
    /**
     * EIP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
     */
    AddressStatus: string;
    /**
     * 外网IP地址
     */
    AddressIp: string;
    /**
        * 绑定的资源实例ID。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InstanceId: string;
    /**
     * 创建时间。ISO 8601 格式：YYYY-MM-DDTHH:mm:ss.sssZ
     */
    CreatedTime: string;
    /**
        * 绑定的弹性网卡ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NetworkInterfaceId: string;
    /**
        * 绑定的资源内网ip
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PrivateAddressIp: string;
    /**
     * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
     */
    IsArrears: boolean;
    /**
     * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
     */
    IsBlocked: boolean;
    /**
     * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
     */
    IsEipDirectConnection: boolean;
    /**
     * eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP
     */
    AddressType: string;
    /**
     * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
     */
    CascadeRelease: boolean;
    /**
        * 运营商，CTCC电信，CUCC联通，CMCC移动
  注意：此字段可能返回 null，表示取不到有效值。
        */
    InternetServiceProvider: string;
    /**
        * 带宽上限
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Bandwidth: number;
    /**
        * 计费模式
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PayMode: string;
}
/**
 * DescribeNetworkInterfaces返回参数结构体
 */
export interface DescribeNetworkInterfacesResponse {
    /**
     * 符合条件的实例数量。
     */
    TotalCount?: number;
    /**
        * 实例详细信息列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NetworkInterfaceSet?: Array<NetworkInterface>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AssignPrivateIpAddresses请求参数结构体
 */
export interface AssignPrivateIpAddressesRequest {
    /**
     * 弹性网卡实例ID，例如：eni-m6dyj72l。
     */
    NetworkInterfaceId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
     */
    PrivateIpAddresses?: Array<PrivateIpAddressSpecification>;
    /**
     * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数
     */
    SecondaryPrivateIpAddressCount?: number;
}
/**
 * ModifyImageAttribute请求参数结构体
 */
export interface ModifyImageAttributeRequest {
    /**
     * 镜像ID，形如img-gvbnzy6f
     */
    ImageId: string;
    /**
        * 设置新的镜像名称；必须满足下列限制：
  不得超过20个字符。
  - 镜像名称不能与已有镜像重复。
        */
    ImageName?: string;
    /**
        * 设置新的镜像描述；必须满足下列限制：
  - 不得超过60个字符。
        */
    ImageDescription?: string;
}
/**
 * ReleaseAddresses请求参数结构体
 */
export interface ReleaseAddressesRequest {
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 标识 EIP 的唯一 ID 列表。
     */
    AddressIds: Array<string>;
}
/**
 * CreateVpc请求参数结构体
 */
export interface CreateVpcRequest {
    /**
     * vpc名称，最大长度不能超过60个字节。
     */
    VpcName: string;
    /**
     * vpc的cidr，只能为10.0.0.0/16，172.16.0.0/16，192.168.0.0/16这三个内网网段内。
     */
    CidrBlock: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 是否开启组播。true: 开启, false: 不开启。
     */
    EnableMulticast?: string;
    /**
     * DNS地址，最多支持4个
     */
    DnsServers?: Array<string>;
    /**
     * 域名
     */
    DomainName?: string;
    /**
     * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
     */
    Tags?: Array<Tag>;
}
/**
 * 云镜服务；
 */
export interface RunSecurityServiceEnabled {
    /**
     * 是否开启。
     */
    Enabled?: boolean;
    /**
     * 云镜版本：0 基础版，1 专业版。目前仅支持基础版
     */
    Version?: number;
}
/**
 * 国家信息
 */
export interface Country {
    /**
     * 国家ID
     */
    CountryId: string;
    /**
     * 国家名称
     */
    CountryName: string;
}
/**
 * ModifySubnetAttribute请求参数结构体
 */
export interface ModifySubnetAttributeRequest {
    /**
     * 子网实例ID。形如：subnet-pxir56ns。
     */
    SubnetId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
    /**
     * 子网名称，最大长度不能超过60个字节。
     */
    SubnetName?: string;
    /**
     * 子网是否开启广播。
     */
    EnableBroadcast?: string;
}
/**
 * AllocateAddresses返回参数结构体
 */
export interface AllocateAddressesResponse {
    /**
        * 申请到的 EIP 的唯一 ID 列表。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AddressSet?: Array<string>;
    /**
     * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachNetworkInterface请求参数结构体
 */
export interface AttachNetworkInterfaceRequest {
    /**
     * 弹性网卡实例ID，例如：eni-m6dyj72l。
     */
    NetworkInterfaceId: string;
    /**
     * 实例ID。形如：ein-r8hr2upy。
     */
    InstanceId: string;
    /**
     * ECM 地域
     */
    EcmRegion: string;
}
/**
 * 模块列表Item信息
 */
export interface ModuleItem {
    /**
     * 节点实例统计信息
     */
    NodeInstanceNum: NodeInstanceNum;
    /**
     * 模块信息
     */
    Module: Module;
}
/**
 * ModifyModuleImage请求参数结构体
 */
export interface ModifyModuleImageRequest {
    /**
     * 默认镜像ID
     */
    DefaultImageId: string;
    /**
     * 模块ID
     */
    ModuleId: string;
}
/**
 * 云监控服务
 */
export interface RunMonitorServiceEnabled {
    /**
     * 是否开启。
     */
    Enabled?: boolean;
}
/**
 * MigrateNetworkInterface返回参数结构体
 */
export interface MigrateNetworkInterfaceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeVpcs返回参数结构体
 */
export interface DescribeVpcsResponse {
    /**
     * 符合条件的对象数。
     */
    TotalCount?: number;
    /**
        * 私有网络对象。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VpcSet?: Array<VpcInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImage请求参数结构体
 */
export interface DeleteImageRequest {
    /**
     * 镜像ID列表。
     */
    ImageIDSet: Array<string>;
}
/**
 * 模块信息
 */
export interface Module {
    /**
     * 模块Id
     */
    ModuleId: string;
    /**
     * 模块名称
     */
    ModuleName: string;
    /**
        * 模块状态：
  NORMAL：正常
  DELETING：删除中
  DELETEFAILED：删除失败
        */
    ModuleState: string;
    /**
     * 默认系统盘大小
     */
    DefaultSystemDiskSize: number;
    /**
     * 默认数据盘大小
     */
    DefaultDataDiskSize: number;
    /**
     * 默认机型
     */
    InstanceTypeConfig: InstanceTypeConfig;
    /**
     * 默认镜像
     */
    DefaultImage: Image;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 默认带宽
     */
    DefaultBandwidth: number;
    /**
        * 标签集合
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagSet: Array<Tag>;
    /**
     * 是否关闭IP直通
     */
    CloseIpDirect: number;
}
/**
 * DescribeBaseOverview返回参数结构体
 */
export interface DescribeBaseOverviewResponse {
    /**
     * 模块数量，单位：个
     */
    ModuleNum?: number;
    /**
     * 节点数量，单位：个
     */
    NodeNum?: number;
    /**
     * cpu核数，单位：个
     */
    VcpuNum?: number;
    /**
     * 内存大小，单位：G
     */
    MemoryNum?: number;
    /**
     * 硬盘大小，单位：G
     */
    StorageNum?: number;
    /**
     * 昨日网络峰值,单位：M
     */
    NetworkNum?: number;
    /**
     * 实例数量，单位：台
     */
    InstanceNum?: number;
    /**
     * 运行中数量，单位：台
     */
    RunningNum?: number;
    /**
     * 安全隔离数量，单位：台
     */
    IsolationNum?: number;
    /**
     * 过期实例数量，单位：台
     */
    ExpiredNum?: number;
    /**
     * 即将过期实例数量，单位：台
     */
    WillExpireNum?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}