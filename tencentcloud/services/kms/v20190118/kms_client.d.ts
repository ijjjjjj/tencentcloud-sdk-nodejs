import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { UpdateAliasRequest, EnableWhiteBoxKeyRequest, AsymmetricRsaDecryptRequest, EnableKeyRotationRequest, DescribeWhiteBoxKeyDetailsResponse, CreateKeyRequest, DisableWhiteBoxKeyResponse, DisableKeyResponse, DescribeWhiteBoxServiceStatusRequest, DescribeKeyRequest, ListAlgorithmsResponse, DescribeWhiteBoxKeyResponse, UpdateKeyDescriptionResponse, DescribeWhiteBoxServiceStatusResponse, ImportKeyMaterialRequest, EnableKeyRequest, ImportKeyMaterialResponse, ListAlgorithmsRequest, ListKeyDetailResponse, GenerateDataKeyRequest, UpdateAliasResponse, ScheduleKeyDeletionResponse, GenerateRandomResponse, DescribeKeysRequest, GetPublicKeyRequest, GetServiceStatusRequest, EnableWhiteBoxKeysResponse, DescribeWhiteBoxKeyRequest, GetParametersForImportResponse, DecryptResponse, CreateWhiteBoxKeyResponse, DeleteImportedKeyMaterialResponse, EnableKeysRequest, EnableWhiteBoxKeysRequest, EncryptByWhiteBoxResponse, DescribeKeysResponse, EnableWhiteBoxKeyResponse, ReEncryptRequest, ListKeysResponse, GetServiceStatusResponse, DisableKeyRotationResponse, DisableWhiteBoxKeysRequest, OverwriteWhiteBoxDeviceFingerprintsRequest, DeleteWhiteBoxKeyRequest, GenerateDataKeyResponse, CreateWhiteBoxKeyRequest, OverwriteWhiteBoxDeviceFingerprintsResponse, DisableWhiteBoxKeysResponse, GetParametersForImportRequest, CreateKeyResponse, ReEncryptResponse, EncryptResponse, CancelKeyDeletionRequest, DeleteImportedKeyMaterialRequest, EnableKeyResponse, AsymmetricSm2DecryptResponse, GetKeyRotationStatusResponse, EncryptRequest, AsymmetricSm2DecryptRequest, DeleteWhiteBoxKeyResponse, ListKeysRequest, DescribeWhiteBoxDecryptKeyRequest, DisableKeysResponse, DecryptRequest, DescribeWhiteBoxKeyDetailsRequest, AsymmetricRsaDecryptResponse, CancelKeyDeletionResponse, DisableKeysRequest, DisableWhiteBoxKeyRequest, UnbindCloudResourceRequest, ListKeyDetailRequest, EnableKeyRotationResponse, BindCloudResourceResponse, EnableKeysResponse, DescribeWhiteBoxDeviceFingerprintsRequest, EncryptByWhiteBoxRequest, GenerateRandomRequest, ScheduleKeyDeletionRequest, DisableKeyRequest, GetKeyRotationStatusRequest, GetPublicKeyResponse, BindCloudResourceRequest, DescribeWhiteBoxDecryptKeyResponse, DescribeWhiteBoxDeviceFingerprintsResponse, UpdateKeyDescriptionRequest, UnbindCloudResourceResponse, DescribeKeyResponse, DisableKeyRotationRequest } from "./kms_models";
/**
 * kms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于加密最多为4KB任意数据，可用于加密数据库密码，RSA Key，或其它较小的敏感信息。对于应用的数据加密，使用GenerateDataKey生成的DataKey进行本地数据的加解密操作
     * @public
     */
    Encrypt(req: EncryptRequest, cb?: (error: string, rep: EncryptResponse) => void): Promise<EncryptResponse>;
    /**
     * 本接口用于解密密文，得到明文数据。
     * @public
     */
    Decrypt(req: DecryptRequest, cb?: (error: string, rep: DecryptResponse) => void): Promise<DecryptResponse>;
    /**
     * 用于修改CMK的别名。对于处于PendingDelete状态的CMK禁止修改。
     * @public
     */
    UpdateAlias(req: UpdateAliasRequest, cb?: (error: string, rep: UpdateAliasResponse) => void): Promise<UpdateAliasResponse>;
    /**
     * 删除白盒密钥, 注意：必须先禁用后，才可以删除。
     * @public
     */
    DeleteWhiteBoxKey(req: DeleteWhiteBoxKeyRequest, cb?: (error: string, rep: DeleteWhiteBoxKeyResponse) => void): Promise<DeleteWhiteBoxKeyResponse>;
    /**
       * 用于导入密钥材料。只有类型为EXTERNAL 的CMK 才可以导入，导入的密钥材料使用 GetParametersForImport 获取的密钥进行加密。可以为指定的 CMK 重新导入密钥材料，并重新指定过期时间，但必须导入相同的密钥材料。CMK 密钥材料导入后不可以更换密钥材料。导入的密钥材料过期或者被删除后，指定的CMK将无法使用，需要再次导入相同的密钥材料才能正常使用。CMK是独立的，同样的密钥材料可导入不同的 CMK 中，但使用其中一个 CMK 加密的数据无法使用另一个 CMK解密。
  只有Enabled 和 PendingImport状态的CMK可以导入密钥材料。
       * @public
       */
    ImportKeyMaterial(req: ImportKeyMaterialRequest, cb?: (error: string, rep: ImportKeyMaterialResponse) => void): Promise<ImportKeyMaterialResponse>;
    /**
     * 该接口用户获取 KeyUsage为ASYMMETRIC_DECRYPT_RSA_2048 和 ASYMMETRIC_DECRYPT_SM2 的非对称密钥的公钥信息，使用该公钥用户可在本地进行数据加密，使用该公钥加密的数据只能通过KMS使用对应的私钥进行解密。只有处于Enabled状态的非对称密钥才可能获取公钥。
     * @public
     */
    GetPublicKey(req: GetPublicKeyRequest, cb?: (error: string, rep: GetPublicKeyResponse) => void): Promise<GetPublicKeyResponse>;
    /**
     * 本接口用于禁用一个主密钥，处于禁用状态的Key无法用于加密、解密操作。
     * @public
     */
    DisableKey(req: DisableKeyRequest, cb?: (error: string, rep: DisableKeyResponse) => void): Promise<DisableKeyResponse>;
    /**
     * 本接口生成一个数据密钥，您可以用这个密钥进行本地数据的加密。
     * @public
     */
    GenerateDataKey(req: GenerateDataKeyRequest, cb?: (error: string, rep: GenerateDataKeyResponse) => void): Promise<GenerateDataKeyResponse>;
    /**
     * 使用指定的SM2非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。传入的密文的长度不能超过256字节。
     * @public
     */
    AsymmetricSm2Decrypt(req: AsymmetricSm2DecryptRequest, cb?: (error: string, rep: AsymmetricSm2DecryptResponse) => void): Promise<AsymmetricSm2DecryptResponse>;
    /**
     * 取消CMK的计划删除操作
     * @public
     */
    CancelKeyDeletion(req: CancelKeyDeletionRequest, cb?: (error: string, rep: CancelKeyDeletionResponse) => void): Promise<CancelKeyDeletionResponse>;
    /**
     * 查询指定的CMK是否开启了密钥轮换功能。
     * @public
     */
    GetKeyRotationStatus(req: GetKeyRotationStatusRequest, cb?: (error: string, rep: GetKeyRotationStatusResponse) => void): Promise<GetKeyRotationStatusResponse>;
    /**
     * 获取白盒密钥列表
     * @public
     */
    DescribeWhiteBoxKeyDetails(req: DescribeWhiteBoxKeyDetailsRequest, cb?: (error: string, rep: DescribeWhiteBoxKeyDetailsResponse) => void): Promise<DescribeWhiteBoxKeyDetailsResponse>;
    /**
     * 记录当前key被哪个云产品的那个资源所使用。如果当前key设置了自动过期，则取消该设置，确保当前key不会自动失效。如果当前关联关系已经创建，也返回成功。
     * @public
     */
    BindCloudResource(req: BindCloudResourceRequest, cb?: (error: string, rep: BindCloudResourceResponse) => void): Promise<BindCloudResourceResponse>;
    /**
     * 用于查询该用户是否已开通KMS服务
     * @public
     */
    GetServiceStatus(req: GetServiceStatusRequest, cb?: (error: string, rep: GetServiceStatusResponse) => void): Promise<GetServiceStatusResponse>;
    /**
     * 使用指定CMK对密文重新加密。
     * @public
     */
    ReEncrypt(req: ReEncryptRequest, cb?: (error: string, rep: ReEncryptResponse) => void): Promise<ReEncryptResponse>;
    /**
     * 批量启用白盒密钥
     * @public
     */
    EnableWhiteBoxKeys(req: EnableWhiteBoxKeysRequest, cb?: (error: string, rep: EnableWhiteBoxKeysResponse) => void): Promise<EnableWhiteBoxKeysResponse>;
    /**
     * 列出当前Region支持的加密方式
     * @public
     */
    ListAlgorithms(req: ListAlgorithmsRequest, cb?: (error: string, rep: ListAlgorithmsResponse) => void): Promise<ListAlgorithmsResponse>;
    /**
     * 用于获取指定KeyId的主密钥属性详情信息。
     * @public
     */
    DescribeKey(req: DescribeKeyRequest, cb?: (error: string, rep: DescribeKeyResponse) => void): Promise<DescribeKeyResponse>;
    /**
     * 列出账号下面状态为Enabled， Disabled 和 PendingImport 的CMK KeyId 列表
     * @public
     */
    ListKeys(req: ListKeysRequest, cb?: (error: string, rep: ListKeysResponse) => void): Promise<ListKeysResponse>;
    /**
     * 随机数生成接口。
     * @public
     */
    GenerateRandom(req: GenerateRandomRequest, cb?: (error: string, rep: GenerateRandomResponse) => void): Promise<GenerateRandomResponse>;
    /**
     * 覆盖指定密钥的设备指纹信息
     * @public
     */
    OverwriteWhiteBoxDeviceFingerprints(req: OverwriteWhiteBoxDeviceFingerprintsRequest, cb?: (error: string, rep: OverwriteWhiteBoxDeviceFingerprintsResponse) => void): Promise<OverwriteWhiteBoxDeviceFingerprintsResponse>;
    /**
     * 创建用户管理数据密钥的主密钥CMK（Custom Master Key）。
     * @public
     */
    CreateKey(req: CreateKeyRequest, cb?: (error: string, rep: CreateKeyResponse) => void): Promise<CreateKeyResponse>;
    /**
     * 展示白盒密钥的信息
     * @public
     */
    DescribeWhiteBoxKey(req: DescribeWhiteBoxKeyRequest, cb?: (error: string, rep: DescribeWhiteBoxKeyResponse) => void): Promise<DescribeWhiteBoxKeyResponse>;
    /**
     * 使用白盒密钥进行加密
     * @public
     */
    EncryptByWhiteBox(req: EncryptByWhiteBoxRequest, cb?: (error: string, rep: EncryptByWhiteBoxResponse) => void): Promise<EncryptByWhiteBoxResponse>;
    /**
     * 获取导入主密钥（CMK）材料的参数，返回的Token作为执行ImportKeyMaterial的参数之一，返回的PublicKey用于对自主导入密钥材料进行加密。返回的Token和PublicKey 24小时后失效，失效后如需重新导入，需要再次调用该接口获取新的Token和PublicKey。
     * @public
     */
    GetParametersForImport(req: GetParametersForImportRequest, cb?: (error: string, rep: GetParametersForImportResponse) => void): Promise<GetParametersForImportResponse>;
    /**
     * 批量禁用白盒密钥
     * @public
     */
    DisableWhiteBoxKeys(req: DisableWhiteBoxKeysRequest, cb?: (error: string, rep: DisableWhiteBoxKeysResponse) => void): Promise<DisableWhiteBoxKeysResponse>;
    /**
     * 根据指定Offset和Limit获取主密钥列表详情。
     * @public
     */
    ListKeyDetail(req: ListKeyDetailRequest, cb?: (error: string, rep: ListKeyDetailResponse) => void): Promise<ListKeyDetailResponse>;
    /**
     * 对指定的CMK禁止密钥轮换功能。
     * @public
     */
    DisableKeyRotation(req: DisableKeyRotationRequest, cb?: (error: string, rep: DisableKeyRotationResponse) => void): Promise<DisableKeyRotationResponse>;
    /**
     * 禁用白盒密钥
     * @public
     */
    DisableWhiteBoxKey(req: DisableWhiteBoxKeyRequest, cb?: (error: string, rep: DisableWhiteBoxKeyResponse) => void): Promise<DisableWhiteBoxKeyResponse>;
    /**
     * 该接口用于批量启用CMK。
     * @public
     */
    EnableKeys(req: EnableKeysRequest, cb?: (error: string, rep: EnableKeysResponse) => void): Promise<EnableKeysResponse>;
    /**
     * CMK计划删除接口，用于指定CMK删除的时间，可选时间区间为[7,30]天
     * @public
     */
    ScheduleKeyDeletion(req: ScheduleKeyDeletionRequest, cb?: (error: string, rep: ScheduleKeyDeletionResponse) => void): Promise<ScheduleKeyDeletionResponse>;
    /**
     * 获取指定密钥的设备指纹列表
     * @public
     */
    DescribeWhiteBoxDeviceFingerprints(req: DescribeWhiteBoxDeviceFingerprintsRequest, cb?: (error: string, rep: DescribeWhiteBoxDeviceFingerprintsResponse) => void): Promise<DescribeWhiteBoxDeviceFingerprintsResponse>;
    /**
     * 使用指定的RSA非对称密钥的私钥进行数据解密，密文必须是使用对应公钥加密的。处于Enabled 状态的非对称密钥才能进行解密操作。
     * @public
     */
    AsymmetricRsaDecrypt(req: AsymmetricRsaDecryptRequest, cb?: (error: string, rep: AsymmetricRsaDecryptResponse) => void): Promise<AsymmetricRsaDecryptResponse>;
    /**
     * 删除指定（key, 资源，云产品）的记录，以表明：指定的云产品的资源已不再使用当前的key。
     * @public
     */
    UnbindCloudResource(req: UnbindCloudResourceRequest, cb?: (error: string, rep: UnbindCloudResourceResponse) => void): Promise<UnbindCloudResourceResponse>;
    /**
     * 对指定的CMK开启密钥轮换功能。
     * @public
     */
    EnableKeyRotation(req: EnableKeyRotationRequest, cb?: (error: string, rep: EnableKeyRotationResponse) => void): Promise<EnableKeyRotationResponse>;
    /**
     * 创建白盒密钥。 密钥个数的上限为 50。
     * @public
     */
    CreateWhiteBoxKey(req: CreateWhiteBoxKeyRequest, cb?: (error: string, rep: CreateWhiteBoxKeyResponse) => void): Promise<CreateWhiteBoxKeyResponse>;
    /**
     * 启用白盒密钥
     * @public
     */
    EnableWhiteBoxKey(req: EnableWhiteBoxKeyRequest, cb?: (error: string, rep: EnableWhiteBoxKeyResponse) => void): Promise<EnableWhiteBoxKeyResponse>;
    /**
     * 用于启用一个指定的CMK。
     * @public
     */
    EnableKey(req: EnableKeyRequest, cb?: (error: string, rep: EnableKeyResponse) => void): Promise<EnableKeyResponse>;
    /**
     * 用于删除导入的密钥材料，仅对EXTERNAL类型的CMK有效，该接口将CMK设置为PendingImport 状态，并不会删除CMK，在重新进行密钥导入后可继续使用。彻底删除CMK请使用 ScheduleKeyDeletion 接口。
     * @public
     */
    DeleteImportedKeyMaterial(req: DeleteImportedKeyMaterialRequest, cb?: (error: string, rep: DeleteImportedKeyMaterialResponse) => void): Promise<DeleteImportedKeyMaterialResponse>;
    /**
     * 该接口用于批量获取主密钥属性信息。
     * @public
     */
    DescribeKeys(req: DescribeKeysRequest, cb?: (error: string, rep: DescribeKeysResponse) => void): Promise<DescribeKeysResponse>;
    /**
     * 获取白盒密钥服务状态
     * @public
     */
    DescribeWhiteBoxServiceStatus(req: DescribeWhiteBoxServiceStatusRequest, cb?: (error: string, rep: DescribeWhiteBoxServiceStatusResponse) => void): Promise<DescribeWhiteBoxServiceStatusResponse>;
    /**
     * 该接口用于对指定的cmk修改描述信息。对于处于PendingDelete状态的CMK禁止修改。
     * @public
     */
    UpdateKeyDescription(req: UpdateKeyDescriptionRequest, cb?: (error: string, rep: UpdateKeyDescriptionResponse) => void): Promise<UpdateKeyDescriptionResponse>;
    /**
     * 该接口用于批量禁止CMK的使用。
     * @public
     */
    DisableKeys(req: DisableKeysRequest, cb?: (error: string, rep: DisableKeysResponse) => void): Promise<DisableKeysResponse>;
    /**
     * 获取白盒解密密钥
     * @public
     */
    DescribeWhiteBoxDecryptKey(req: DescribeWhiteBoxDecryptKeyRequest, cb?: (error: string, rep: DescribeWhiteBoxDecryptKeyResponse) => void): Promise<DescribeWhiteBoxDecryptKeyResponse>;
}
