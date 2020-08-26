import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { GetUserResponse, ListAccessKeysRequest, SetMfaFlagResponse, DeleteUserRequest, DetachGroupPolicyRequest, DescribeRoleListResponse, CreatePolicyResponse, GetRoleRequest, CreateServiceLinkedRoleRequest, ListAttachedGroupPoliciesRequest, ListGroupsForUserRequest, AttachRolePolicyResponse, GetServiceLinkedRoleDeletionStatusResponse, DeleteUserPermissionsBoundaryResponse, ListUsersResponse, UpdateRoleDescriptionResponse, DetachUserPolicyRequest, ListGroupsResponse, ListPolicyVersionsRequest, GetCustomMFATokenInfoRequest, DescribeRoleListRequest, GetGroupRequest, DeleteRoleResponse, DeleteUserPermissionsBoundaryRequest, ListSAMLProvidersRequest, ListGroupsRequest, DeletePolicyVersionResponse, UpdateSAMLProviderRequest, UpdateAssumeRolePolicyRequest, ListGroupsForUserResponse, ListUsersForGroupRequest, RemoveUserFromGroupRequest, CreatePolicyVersionResponse, ListPoliciesResponse, UpdateRoleDescriptionRequest, SetDefaultPolicyVersionRequest, CreatePolicyVersionRequest, DeleteGroupRequest, ListAttachedRolePoliciesResponse, DeleteUserResponse, DetachRolePolicyRequest, DeleteRolePermissionsBoundaryRequest, DeletePolicyRequest, AddUserRequest, DeleteRoleRequest, UpdateRoleConsoleLoginRequest, GetCustomMFATokenInfoResponse, UpdateAssumeRolePolicyResponse, ListAttachedUserPoliciesResponse, CreateSAMLProviderResponse, DeleteRolePermissionsBoundaryResponse, GetUserRequest, CreateGroupRequest, UpdateSAMLProviderResponse, UpdateUserRequest, CreateSAMLProviderRequest, PutRolePermissionsBoundaryRequest, UpdateRoleConsoleLoginResponse, AttachRolePolicyRequest, ConsumeCustomMFATokenResponse, AttachUserPolicyRequest, ListAttachedGroupPoliciesResponse, GetPolicyVersionRequest, PutUserPermissionsBoundaryResponse, DeletePolicyResponse, ConsumeCustomMFATokenRequest, GetGroupResponse, DeleteSAMLProviderRequest, DeleteSAMLProviderResponse, UpdateUserResponse, CreateServiceLinkedRoleResponse, ListUsersRequest, ListCollaboratorsRequest, UpdatePolicyResponse, AttachGroupPolicyResponse, UpdateGroupResponse, ListEntitiesForPolicyRequest, ListPoliciesRequest, GetServiceLinkedRoleDeletionStatusRequest, DetachGroupPolicyResponse, CreatePolicyRequest, DeletePolicyVersionRequest, UpdateGroupRequest, GetPolicyVersionResponse, CreateRoleResponse, GetSAMLProviderResponse, ListPolicyVersionsResponse, GetPolicyRequest, AddUserToGroupRequest, RemoveUserFromGroupResponse, DetachRolePolicyResponse, PutUserPermissionsBoundaryRequest, ListSAMLProvidersResponse, SetDefaultPolicyVersionResponse, ListAttachedRolePoliciesRequest, GetSAMLProviderRequest, DetachUserPolicyResponse, GetRoleResponse, CreateRoleRequest, DeleteServiceLinkedRoleResponse, GetPolicyResponse, DeleteGroupResponse, AttachGroupPolicyRequest, DeleteServiceLinkedRoleRequest, ListUsersForGroupResponse, AddUserResponse, ListEntitiesForPolicyResponse, AddUserToGroupResponse, AttachUserPolicyResponse, PutRolePermissionsBoundaryResponse, SetMfaFlagRequest, ListCollaboratorsResponse, ListAccessKeysResponse, ListAttachedUserPoliciesRequest, UpdatePolicyRequest, CreateGroupResponse } from "./cam_models";
/**
 * cam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     * @public
     */
    SetMfaFlag(req: SetMfaFlagRequest, cb?: (error: string, rep: SetMfaFlagResponse) => void): Promise<SetMfaFlagResponse>;
    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     * @public
     */
    UpdateRoleConsoleLogin(req: UpdateRoleConsoleLoginRequest, cb?: (error: string, rep: UpdateRoleConsoleLoginResponse) => void): Promise<UpdateRoleConsoleLoginResponse>;
    /**
     * 创建用户组
     * @public
     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 删除服务相关角色
     * @public
     */
    DeleteServiceLinkedRole(req: DeleteServiceLinkedRoleRequest, cb?: (error: string, rep: DeleteServiceLinkedRoleResponse) => void): Promise<DeleteServiceLinkedRoleResponse>;
    /**
     * 添加子用户
     * @public
     */
    AddUser(req: AddUserRequest, cb?: (error: string, rep: AddUserResponse) => void): Promise<AddUserResponse>;
    /**
     * 创建服务相关角色
     * @public
     */
    CreateServiceLinkedRole(req: CreateServiceLinkedRoleRequest, cb?: (error: string, rep: CreateServiceLinkedRoleResponse) => void): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 查询SAML身份提供商详情
     * @public
     */
    GetSAMLProvider(req: GetSAMLProviderRequest, cb?: (error: string, rep: GetSAMLProviderResponse) => void): Promise<GetSAMLProviderResponse>;
    /**
     * 查询SAML身份提供商列表
     * @public
     */
    ListSAMLProviders(req: ListSAMLProvidersRequest, cb?: (error: string, rep: ListSAMLProvidersResponse) => void): Promise<ListSAMLProvidersResponse>;
    /**
     * 本接口（CreateRole）用于创建角色。
     * @public
     */
    CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse>;
    /**
     * 设置角色权限边界
     * @public
     */
    PutRolePermissionsBoundary(req: PutRolePermissionsBoundaryRequest, cb?: (error: string, rep: PutRolePermissionsBoundaryResponse) => void): Promise<PutRolePermissionsBoundaryResponse>;
    /**
     * 拉取子用户
     * @public
     */
    ListUsers(req: ListUsersRequest, cb?: (error: string, rep: ListUsersResponse) => void): Promise<ListUsersResponse>;
    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     * @public
     */
    ListAttachedRolePolicies(req: ListAttachedRolePoliciesRequest, cb?: (error: string, rep: ListAttachedRolePoliciesResponse) => void): Promise<ListAttachedRolePoliciesResponse>;
    /**
     * 本接口（DeletePolicy）可用于删除策略。
     * @public
     */
    DeletePolicy(req: DeletePolicyRequest, cb?: (error: string, rep: DeletePolicyResponse) => void): Promise<DeletePolicyResponse>;
    /**
     * 删除角色权限边界
     * @public
     */
    DeleteRolePermissionsBoundary(req: DeleteRolePermissionsBoundaryRequest, cb?: (error: string, rep: DeleteRolePermissionsBoundaryResponse) => void): Promise<DeleteRolePermissionsBoundaryResponse>;
    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     * @public
     */
    DeletePolicyVersion(req: DeletePolicyVersionRequest, cb?: (error: string, rep: DeletePolicyVersionResponse) => void): Promise<DeletePolicyVersionResponse>;
    /**
     * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
     * @public
     */
    DetachRolePolicy(req: DetachRolePolicyRequest, cb?: (error: string, rep: DetachRolePolicyResponse) => void): Promise<DetachRolePolicyResponse>;
    /**
     * 本接口（DescribeRoleList）用于获取账号下的角色列表。
     * @public
     */
    DescribeRoleList(req: DescribeRoleListRequest, cb?: (error: string, rep: DescribeRoleListResponse) => void): Promise<DescribeRoleListResponse>;
    /**
     * 创建SAML身份提供商
     * @public
     */
    CreateSAMLProvider(req: CreateSAMLProviderRequest, cb?: (error: string, rep: CreateSAMLProviderResponse) => void): Promise<CreateSAMLProviderResponse>;
    /**
     * 删除SAML身份提供商
     * @public
     */
    DeleteSAMLProvider(req: DeleteSAMLProviderRequest, cb?: (error: string, rep: DeleteSAMLProviderResponse) => void): Promise<DeleteSAMLProviderResponse>;
    /**
     * 更新子用户
     * @public
     */
    UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     * @public
     */
    GetPolicy(req: GetPolicyRequest, cb?: (error: string, rep: GetPolicyResponse) => void): Promise<GetPolicyResponse>;
    /**
     * 更新SAML身份提供商信息
     * @public
     */
    UpdateSAMLProvider(req: UpdateSAMLProviderRequest, cb?: (error: string, rep: UpdateSAMLProviderResponse) => void): Promise<UpdateSAMLProviderResponse>;
    /**
     * 获取自定义多因子Token关联信息
     * @public
     */
    GetCustomMFATokenInfo(req: GetCustomMFATokenInfoRequest, cb?: (error: string, rep: GetCustomMFATokenInfoResponse) => void): Promise<GetCustomMFATokenInfoResponse>;
    /**
     * 列出指定CAM用户的访问密钥
     * @public
     */
    ListAccessKeys(req: ListAccessKeysRequest, cb?: (error: string, rep: ListAccessKeysResponse) => void): Promise<ListAccessKeysResponse>;
    /**
     * 删除用户组
     * @public
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 本接口（DeleteRole）用于删除指定角色。
     * @public
     */
    DeleteRole(req: DeleteRoleRequest, cb?: (error: string, rep: DeleteRoleResponse) => void): Promise<DeleteRoleResponse>;
    /**
     * 查询子用户
     * @public
     */
    GetUser(req: GetUserRequest, cb?: (error: string, rep: GetUserResponse) => void): Promise<GetUserResponse>;
    /**
     * 删除用户权限边界
     * @public
     */
    DeleteUserPermissionsBoundary(req: DeleteUserPermissionsBoundaryRequest, cb?: (error: string, rep: DeleteUserPermissionsBoundaryResponse) => void): Promise<DeleteUserPermissionsBoundaryResponse>;
    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     * @public
     */
    ListAttachedGroupPolicies(req: ListAttachedGroupPoliciesRequest, cb?: (error: string, rep: ListAttachedGroupPoliciesResponse) => void): Promise<ListAttachedGroupPoliciesResponse>;
    /**
     * 根据删除TaskId获取服务相关角色删除状态
     * @public
     */
    GetServiceLinkedRoleDeletionStatus(req: GetServiceLinkedRoleDeletionStatusRequest, cb?: (error: string, rep: GetServiceLinkedRoleDeletionStatusResponse) => void): Promise<GetServiceLinkedRoleDeletionStatusResponse>;
    /**
     * 验证自定义多因子Token
     * @public
     */
    ConsumeCustomMFAToken(req: ConsumeCustomMFATokenRequest, cb?: (error: string, rep: ConsumeCustomMFATokenResponse) => void): Promise<ConsumeCustomMFATokenResponse>;
    /**
     * 查询用户组详情
     * @public
     */
    GetGroup(req: GetGroupRequest, cb?: (error: string, rep: GetGroupResponse) => void): Promise<GetGroupResponse>;
    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     * @public
     */
    GetPolicyVersion(req: GetPolicyVersionRequest, cb?: (error: string, rep: GetPolicyVersionResponse) => void): Promise<GetPolicyVersionResponse>;
    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     * @public
     */
    UpdateAssumeRolePolicy(req: UpdateAssumeRolePolicyRequest, cb?: (error: string, rep: UpdateAssumeRolePolicyResponse) => void): Promise<UpdateAssumeRolePolicyResponse>;
    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     * @public
     */
    SetDefaultPolicyVersion(req: SetDefaultPolicyVersionRequest, cb?: (error: string, rep: SetDefaultPolicyVersionResponse) => void): Promise<SetDefaultPolicyVersionResponse>;
    /**
     * 查询用户组列表
     * @public
     */
    ListGroups(req: ListGroupsRequest, cb?: (error: string, rep: ListGroupsResponse) => void): Promise<ListGroupsResponse>;
    /**
     * 用户加入到用户组
     * @public
     */
    AddUserToGroup(req: AddUserToGroupRequest, cb?: (error: string, rep: AddUserToGroupResponse) => void): Promise<AddUserToGroupResponse>;
    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     * @public
     */
    AttachRolePolicy(req: AttachRolePolicyRequest, cb?: (error: string, rep: AttachRolePolicyResponse) => void): Promise<AttachRolePolicyResponse>;
    /**
       * 本接口（UpdatePolicy ）可用于更新策略。
  如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
       * @public
       */
    UpdatePolicy(req: UpdatePolicyRequest, cb?: (error: string, rep: UpdatePolicyResponse) => void): Promise<UpdatePolicyResponse>;
    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     * @public
     */
    ListPolicyVersions(req: ListPolicyVersionsRequest, cb?: (error: string, rep: ListPolicyVersionsResponse) => void): Promise<ListPolicyVersionsResponse>;
    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     * @public
     */
    GetRole(req: GetRoleRequest, cb?: (error: string, rep: GetRoleResponse) => void): Promise<GetRoleResponse>;
    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     * @public
     */
    UpdateRoleDescription(req: UpdateRoleDescriptionRequest, cb?: (error: string, rep: UpdateRoleDescriptionResponse) => void): Promise<UpdateRoleDescriptionResponse>;
    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     * @public
     */
    ListAttachedUserPolicies(req: ListAttachedUserPoliciesRequest, cb?: (error: string, rep: ListAttachedUserPoliciesResponse) => void): Promise<ListAttachedUserPoliciesResponse>;
    /**
     * 删除子用户
     * @public
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     * @public
     */
    CreatePolicyVersion(req: CreatePolicyVersionRequest, cb?: (error: string, rep: CreatePolicyVersionResponse) => void): Promise<CreatePolicyVersionResponse>;
    /**
     * 获取协作者列表
     * @public
     */
    ListCollaborators(req: ListCollaboratorsRequest, cb?: (error: string, rep: ListCollaboratorsResponse) => void): Promise<ListCollaboratorsResponse>;
    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     * @public
     */
    DetachGroupPolicy(req: DetachGroupPolicyRequest, cb?: (error: string, rep: DetachGroupPolicyResponse) => void): Promise<DetachGroupPolicyResponse>;
    /**
     * 从用户组删除用户
     * @public
     */
    RemoveUserFromGroup(req: RemoveUserFromGroupRequest, cb?: (error: string, rep: RemoveUserFromGroupResponse) => void): Promise<RemoveUserFromGroupResponse>;
    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     * @public
     */
    ListPolicies(req: ListPoliciesRequest, cb?: (error: string, rep: ListPoliciesResponse) => void): Promise<ListPoliciesResponse>;
    /**
     * 查询用户组关联的用户列表
     * @public
     */
    ListUsersForGroup(req: ListUsersForGroupRequest, cb?: (error: string, rep: ListUsersForGroupResponse) => void): Promise<ListUsersForGroupResponse>;
    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     * @public
     */
    AttachUserPolicy(req: AttachUserPolicyRequest, cb?: (error: string, rep: AttachUserPolicyResponse) => void): Promise<AttachUserPolicyResponse>;
    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     * @public
     */
    ListEntitiesForPolicy(req: ListEntitiesForPolicyRequest, cb?: (error: string, rep: ListEntitiesForPolicyResponse) => void): Promise<ListEntitiesForPolicyResponse>;
    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     * @public
     */
    AttachGroupPolicy(req: AttachGroupPolicyRequest, cb?: (error: string, rep: AttachGroupPolicyResponse) => void): Promise<AttachGroupPolicyResponse>;
    /**
     * 更新用户组
     * @public
     */
    UpdateGroup(req: UpdateGroupRequest, cb?: (error: string, rep: UpdateGroupResponse) => void): Promise<UpdateGroupResponse>;
    /**
     * 设置用户权限边界
     * @public
     */
    PutUserPermissionsBoundary(req: PutUserPermissionsBoundaryRequest, cb?: (error: string, rep: PutUserPermissionsBoundaryResponse) => void): Promise<PutUserPermissionsBoundaryResponse>;
    /**
     * 本接口（CreatePolicy）可用于创建策略。
     * @public
     */
    CreatePolicy(req: CreatePolicyRequest, cb?: (error: string, rep: CreatePolicyResponse) => void): Promise<CreatePolicyResponse>;
    /**
     * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
     * @public
     */
    DetachUserPolicy(req: DetachUserPolicyRequest, cb?: (error: string, rep: DetachUserPolicyResponse) => void): Promise<DetachUserPolicyResponse>;
    /**
     * 列出用户关联的用户组
     * @public
     */
    ListGroupsForUser(req: ListGroupsForUserRequest, cb?: (error: string, rep: ListGroupsForUserResponse) => void): Promise<ListGroupsForUserResponse>;
}
