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
   GetUserResponse,
   ListAccessKeysRequest,
   SetMfaFlagResponse,
   DeleteUserRequest,
   DetachGroupPolicyRequest,
   DescribeRoleListResponse,
   CreatePolicyResponse,
   GetRoleRequest,
   CreateServiceLinkedRoleRequest,
   ListAttachedGroupPoliciesRequest,
   ListGroupsForUserRequest,
   AttachRolePolicyResponse,
   GetServiceLinkedRoleDeletionStatusResponse,
   DeleteUserPermissionsBoundaryResponse,
   ListUsersResponse,
   UpdateRoleDescriptionResponse,
   DetachUserPolicyRequest,
   ListGroupsResponse,
   ListPolicyVersionsRequest,
   GetCustomMFATokenInfoRequest,
   DescribeRoleListRequest,
   GetGroupRequest,
   DeleteRoleResponse,
   PolicyVersionItem,
   DeleteUserPermissionsBoundaryRequest,
   ListSAMLProvidersRequest,
   ListGroupsRequest,
   DeletePolicyVersionResponse,
   UpdateSAMLProviderRequest,
   UpdateAssumeRolePolicyRequest,
   ListGroupsForUserResponse,
   ListUsersForGroupRequest,
   RemoveUserFromGroupRequest,
   CreatePolicyVersionResponse,
   ListPoliciesResponse,
   GroupIdOfUidInfo,
   UpdateRoleDescriptionRequest,
   SetDefaultPolicyVersionRequest,
   RoleInfo,
   CreatePolicyVersionRequest,
   DeleteGroupRequest,
   ListAttachedRolePoliciesResponse,
   DeleteUserResponse,
   DetachRolePolicyRequest,
   DeleteRolePermissionsBoundaryRequest,
   StrategyInfo,
   DeletePolicyRequest,
   GroupInfo,
   AddUserRequest,
   DeleteRoleRequest,
   UpdateRoleConsoleLoginRequest,
   GetCustomMFATokenInfoResponse,
   UpdateAssumeRolePolicyResponse,
   ListAttachedUserPoliciesResponse,
   CreateSAMLProviderResponse,
   DeleteRolePermissionsBoundaryResponse,
   GetUserRequest,
   LoginActionMfaFlag,
   SubAccountInfo,
   CreateGroupRequest,
   SAMLProviderInfo,
   UpdateSAMLProviderResponse,
   UpdateUserRequest,
   CreateSAMLProviderRequest,
   AttachPolicyInfo,
   PutRolePermissionsBoundaryRequest,
   UpdateRoleConsoleLoginResponse,
   AttachRolePolicyRequest,
   ConsumeCustomMFATokenResponse,
   AttachUserPolicyRequest,
   ListAttachedGroupPoliciesResponse,
   GetPolicyVersionRequest,
   PutUserPermissionsBoundaryResponse,
   DeletePolicyResponse,
   ConsumeCustomMFATokenRequest,
   AccessKey,
   GetGroupResponse,
   DeleteSAMLProviderRequest,
   DeleteSAMLProviderResponse,
   UpdateUserResponse,
   CreateServiceLinkedRoleResponse,
   ListUsersRequest,
   ListCollaboratorsRequest,
   UpdatePolicyResponse,
   AttachGroupPolicyResponse,
   UpdateGroupResponse,
   ListEntitiesForPolicyRequest,
   ListPoliciesRequest,
   GetServiceLinkedRoleDeletionStatusRequest,
   DetachGroupPolicyResponse,
   CreatePolicyRequest,
   DeletePolicyVersionRequest,
   UpdateGroupRequest,
   GetPolicyVersionResponse,
   CreateRoleResponse,
   GetSAMLProviderResponse,
   ListPolicyVersionsResponse,
   GetPolicyRequest,
   AddUserToGroupRequest,
   RemoveUserFromGroupResponse,
   DetachRolePolicyResponse,
   AttachedPolicyOfRole,
   PutUserPermissionsBoundaryRequest,
   ListSAMLProvidersResponse,
   SetDefaultPolicyVersionResponse,
   ListAttachedRolePoliciesRequest,
   GetSAMLProviderRequest,
   DetachUserPolicyResponse,
   GetRoleResponse,
   CreateRoleRequest,
   DeleteServiceLinkedRoleResponse,
   GetPolicyResponse,
   DeleteGroupResponse,
   AttachGroupPolicyRequest,
   DeleteServiceLinkedRoleRequest,
   AttachEntityOfPolicy,
   ListUsersForGroupResponse,
   PolicyVersionDetail,
   AddUserResponse,
   ListEntitiesForPolicyResponse,
   AddUserToGroupResponse,
   AttachUserPolicyResponse,
   PutRolePermissionsBoundaryResponse,
   SetMfaFlagRequest,
   ListCollaboratorsResponse,
   ListAccessKeysResponse,
   ListAttachedUserPoliciesRequest,
   UpdatePolicyRequest,
   GroupMemberInfo,
   CreateGroupResponse,

} from "./cam_models"

/**
 * cam client
 * @class
 */
export class Client extends AbstractClient {

    constructor(clientConfig: ClientConfig) {
        super("cam.tencentcloudapi.com", "2019-01-16", clientConfig);
    }
    
    /**
     * 设置子用户的登录保护和敏感操作校验方式
     * @public
     */
    async SetMfaFlag(req: SetMfaFlagRequest, cb?: (error: string, rep: SetMfaFlagResponse) => void): Promise<SetMfaFlagResponse> {
        return await this.request("SetMfaFlag", req, cb);
    }

    /**
     * 本接口（UpdateRoleConsoleLogin）用于修改角色是否可登录。
     * @public
     */
    async UpdateRoleConsoleLogin(req: UpdateRoleConsoleLoginRequest, cb?: (error: string, rep: UpdateRoleConsoleLoginResponse) => void): Promise<UpdateRoleConsoleLoginResponse> {
        return await this.request("UpdateRoleConsoleLogin", req, cb);
    }

    /**
     * 创建用户组
     * @public
     */
    async CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse> {
        return await this.request("CreateGroup", req, cb);
    }

    /**
     * 删除服务相关角色
     * @public
     */
    async DeleteServiceLinkedRole(req: DeleteServiceLinkedRoleRequest, cb?: (error: string, rep: DeleteServiceLinkedRoleResponse) => void): Promise<DeleteServiceLinkedRoleResponse> {
        return await this.request("DeleteServiceLinkedRole", req, cb);
    }

    /**
     * 添加子用户
     * @public
     */
    async AddUser(req: AddUserRequest, cb?: (error: string, rep: AddUserResponse) => void): Promise<AddUserResponse> {
        return await this.request("AddUser", req, cb);
    }

    /**
     * 创建服务相关角色
     * @public
     */
    async CreateServiceLinkedRole(req: CreateServiceLinkedRoleRequest, cb?: (error: string, rep: CreateServiceLinkedRoleResponse) => void): Promise<CreateServiceLinkedRoleResponse> {
        return await this.request("CreateServiceLinkedRole", req, cb);
    }

    /**
     * 查询SAML身份提供商详情
     * @public
     */
    async GetSAMLProvider(req: GetSAMLProviderRequest, cb?: (error: string, rep: GetSAMLProviderResponse) => void): Promise<GetSAMLProviderResponse> {
        return await this.request("GetSAMLProvider", req, cb);
    }

    /**
     * 查询SAML身份提供商列表
     * @public
     */
    async ListSAMLProviders(req: ListSAMLProvidersRequest, cb?: (error: string, rep: ListSAMLProvidersResponse) => void): Promise<ListSAMLProvidersResponse> {
        return await this.request("ListSAMLProviders", req, cb);
    }

    /**
     * 本接口（CreateRole）用于创建角色。
     * @public
     */
    async CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse> {
        return await this.request("CreateRole", req, cb);
    }

    /**
     * 设置角色权限边界
     * @public
     */
    async PutRolePermissionsBoundary(req: PutRolePermissionsBoundaryRequest, cb?: (error: string, rep: PutRolePermissionsBoundaryResponse) => void): Promise<PutRolePermissionsBoundaryResponse> {
        return await this.request("PutRolePermissionsBoundary", req, cb);
    }

    /**
     * 拉取子用户
     * @public
     */
    async ListUsers(req: ListUsersRequest, cb?: (error: string, rep: ListUsersResponse) => void): Promise<ListUsersResponse> {
        return await this.request("ListUsers", req, cb);
    }

    /**
     * 本接口（ListAttachedRolePolicies）用于获取角色绑定的策略列表。
     * @public
     */
    async ListAttachedRolePolicies(req: ListAttachedRolePoliciesRequest, cb?: (error: string, rep: ListAttachedRolePoliciesResponse) => void): Promise<ListAttachedRolePoliciesResponse> {
        return await this.request("ListAttachedRolePolicies", req, cb);
    }

    /**
     * 本接口（DeletePolicy）可用于删除策略。
     * @public
     */
    async DeletePolicy(req: DeletePolicyRequest, cb?: (error: string, rep: DeletePolicyResponse) => void): Promise<DeletePolicyResponse> {
        return await this.request("DeletePolicy", req, cb);
    }

    /**
     * 删除角色权限边界
     * @public
     */
    async DeleteRolePermissionsBoundary(req: DeleteRolePermissionsBoundaryRequest, cb?: (error: string, rep: DeleteRolePermissionsBoundaryResponse) => void): Promise<DeleteRolePermissionsBoundaryResponse> {
        return await this.request("DeleteRolePermissionsBoundary", req, cb);
    }

    /**
     * 本接口（DeletePolicyVersion）可用于删除一个策略的策略版本。
     * @public
     */
    async DeletePolicyVersion(req: DeletePolicyVersionRequest, cb?: (error: string, rep: DeletePolicyVersionResponse) => void): Promise<DeletePolicyVersionResponse> {
        return await this.request("DeletePolicyVersion", req, cb);
    }

    /**
     * 本接口（DetachRolePolicy）用于解除绑定角色的策略。
     * @public
     */
    async DetachRolePolicy(req: DetachRolePolicyRequest, cb?: (error: string, rep: DetachRolePolicyResponse) => void): Promise<DetachRolePolicyResponse> {
        return await this.request("DetachRolePolicy", req, cb);
    }

    /**
     * 本接口（DescribeRoleList）用于获取账号下的角色列表。
     * @public
     */
    async DescribeRoleList(req: DescribeRoleListRequest, cb?: (error: string, rep: DescribeRoleListResponse) => void): Promise<DescribeRoleListResponse> {
        return await this.request("DescribeRoleList", req, cb);
    }

    /**
     * 创建SAML身份提供商
     * @public
     */
    async CreateSAMLProvider(req: CreateSAMLProviderRequest, cb?: (error: string, rep: CreateSAMLProviderResponse) => void): Promise<CreateSAMLProviderResponse> {
        return await this.request("CreateSAMLProvider", req, cb);
    }

    /**
     * 删除SAML身份提供商
     * @public
     */
    async DeleteSAMLProvider(req: DeleteSAMLProviderRequest, cb?: (error: string, rep: DeleteSAMLProviderResponse) => void): Promise<DeleteSAMLProviderResponse> {
        return await this.request("DeleteSAMLProvider", req, cb);
    }

    /**
     * 更新子用户
     * @public
     */
    async UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse> {
        return await this.request("UpdateUser", req, cb);
    }

    /**
     * 本接口（GetPolicy）可用于查询查看策略详情。
     * @public
     */
    async GetPolicy(req: GetPolicyRequest, cb?: (error: string, rep: GetPolicyResponse) => void): Promise<GetPolicyResponse> {
        return await this.request("GetPolicy", req, cb);
    }

    /**
     * 更新SAML身份提供商信息
     * @public
     */
    async UpdateSAMLProvider(req: UpdateSAMLProviderRequest, cb?: (error: string, rep: UpdateSAMLProviderResponse) => void): Promise<UpdateSAMLProviderResponse> {
        return await this.request("UpdateSAMLProvider", req, cb);
    }

    /**
     * 获取自定义多因子Token关联信息
     * @public
     */
    async GetCustomMFATokenInfo(req: GetCustomMFATokenInfoRequest, cb?: (error: string, rep: GetCustomMFATokenInfoResponse) => void): Promise<GetCustomMFATokenInfoResponse> {
        return await this.request("GetCustomMFATokenInfo", req, cb);
    }

    /**
     * 列出指定CAM用户的访问密钥
     * @public
     */
    async ListAccessKeys(req: ListAccessKeysRequest, cb?: (error: string, rep: ListAccessKeysResponse) => void): Promise<ListAccessKeysResponse> {
        return await this.request("ListAccessKeys", req, cb);
    }

    /**
     * 删除用户组
     * @public
     */
    async DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse> {
        return await this.request("DeleteGroup", req, cb);
    }

    /**
     * 本接口（DeleteRole）用于删除指定角色。
     * @public
     */
    async DeleteRole(req: DeleteRoleRequest, cb?: (error: string, rep: DeleteRoleResponse) => void): Promise<DeleteRoleResponse> {
        return await this.request("DeleteRole", req, cb);
    }

    /**
     * 查询子用户
     * @public
     */
    async GetUser(req: GetUserRequest, cb?: (error: string, rep: GetUserResponse) => void): Promise<GetUserResponse> {
        return await this.request("GetUser", req, cb);
    }

    /**
     * 删除用户权限边界
     * @public
     */
    async DeleteUserPermissionsBoundary(req: DeleteUserPermissionsBoundaryRequest, cb?: (error: string, rep: DeleteUserPermissionsBoundaryResponse) => void): Promise<DeleteUserPermissionsBoundaryResponse> {
        return await this.request("DeleteUserPermissionsBoundary", req, cb);
    }

    /**
     * 本接口（ListAttachedGroupPolicies）可用于查询用户组关联的策略列表。
     * @public
     */
    async ListAttachedGroupPolicies(req: ListAttachedGroupPoliciesRequest, cb?: (error: string, rep: ListAttachedGroupPoliciesResponse) => void): Promise<ListAttachedGroupPoliciesResponse> {
        return await this.request("ListAttachedGroupPolicies", req, cb);
    }

    /**
     * 根据删除TaskId获取服务相关角色删除状态
     * @public
     */
    async GetServiceLinkedRoleDeletionStatus(req: GetServiceLinkedRoleDeletionStatusRequest, cb?: (error: string, rep: GetServiceLinkedRoleDeletionStatusResponse) => void): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
        return await this.request("GetServiceLinkedRoleDeletionStatus", req, cb);
    }

    /**
     * 验证自定义多因子Token
     * @public
     */
    async ConsumeCustomMFAToken(req: ConsumeCustomMFATokenRequest, cb?: (error: string, rep: ConsumeCustomMFATokenResponse) => void): Promise<ConsumeCustomMFATokenResponse> {
        return await this.request("ConsumeCustomMFAToken", req, cb);
    }

    /**
     * 查询用户组详情
     * @public
     */
    async GetGroup(req: GetGroupRequest, cb?: (error: string, rep: GetGroupResponse) => void): Promise<GetGroupResponse> {
        return await this.request("GetGroup", req, cb);
    }

    /**
     * 该接口（GetPolicyVersion）用于查询策略版本详情
     * @public
     */
    async GetPolicyVersion(req: GetPolicyVersionRequest, cb?: (error: string, rep: GetPolicyVersionResponse) => void): Promise<GetPolicyVersionResponse> {
        return await this.request("GetPolicyVersion", req, cb);
    }

    /**
     * 本接口（UpdateAssumeRolePolicy）用于修改角色信任策略的策略文档。
     * @public
     */
    async UpdateAssumeRolePolicy(req: UpdateAssumeRolePolicyRequest, cb?: (error: string, rep: UpdateAssumeRolePolicyResponse) => void): Promise<UpdateAssumeRolePolicyResponse> {
        return await this.request("UpdateAssumeRolePolicy", req, cb);
    }

    /**
     * 本接口（SetDefaultPolicyVersion）可用于设置生效的策略版本。
     * @public
     */
    async SetDefaultPolicyVersion(req: SetDefaultPolicyVersionRequest, cb?: (error: string, rep: SetDefaultPolicyVersionResponse) => void): Promise<SetDefaultPolicyVersionResponse> {
        return await this.request("SetDefaultPolicyVersion", req, cb);
    }

    /**
     * 查询用户组列表
     * @public
     */
    async ListGroups(req: ListGroupsRequest, cb?: (error: string, rep: ListGroupsResponse) => void): Promise<ListGroupsResponse> {
        return await this.request("ListGroups", req, cb);
    }

    /**
     * 用户加入到用户组
     * @public
     */
    async AddUserToGroup(req: AddUserToGroupRequest, cb?: (error: string, rep: AddUserToGroupResponse) => void): Promise<AddUserToGroupResponse> {
        return await this.request("AddUserToGroup", req, cb);
    }

    /**
     * 本接口（AttachRolePolicy）用于绑定策略到角色。
     * @public
     */
    async AttachRolePolicy(req: AttachRolePolicyRequest, cb?: (error: string, rep: AttachRolePolicyResponse) => void): Promise<AttachRolePolicyResponse> {
        return await this.request("AttachRolePolicy", req, cb);
    }

    /**
     * 本接口（UpdatePolicy ）可用于更新策略。
如果已存在策略版本，本接口会直接更新策略的默认版本，不会创建新版本，如果不存在任何策略版本，则直接创建一个默认版本。
     * @public
     */
    async UpdatePolicy(req: UpdatePolicyRequest, cb?: (error: string, rep: UpdatePolicyResponse) => void): Promise<UpdatePolicyResponse> {
        return await this.request("UpdatePolicy", req, cb);
    }

    /**
     * 该接口（ListPolicyVersions）用于获取策略版本列表
     * @public
     */
    async ListPolicyVersions(req: ListPolicyVersionsRequest, cb?: (error: string, rep: ListPolicyVersionsResponse) => void): Promise<ListPolicyVersionsResponse> {
        return await this.request("ListPolicyVersions", req, cb);
    }

    /**
     * 本接口（GetRole）用于获取指定角色的详细信息。
     * @public
     */
    async GetRole(req: GetRoleRequest, cb?: (error: string, rep: GetRoleResponse) => void): Promise<GetRoleResponse> {
        return await this.request("GetRole", req, cb);
    }

    /**
     * 本接口（UpdateRoleDescription）用于修改角色的描述信息。
     * @public
     */
    async UpdateRoleDescription(req: UpdateRoleDescriptionRequest, cb?: (error: string, rep: UpdateRoleDescriptionResponse) => void): Promise<UpdateRoleDescriptionResponse> {
        return await this.request("UpdateRoleDescription", req, cb);
    }

    /**
     * 本接口（ListAttachedUserPolicies）可用于查询子账号关联的策略列表。
     * @public
     */
    async ListAttachedUserPolicies(req: ListAttachedUserPoliciesRequest, cb?: (error: string, rep: ListAttachedUserPoliciesResponse) => void): Promise<ListAttachedUserPoliciesResponse> {
        return await this.request("ListAttachedUserPolicies", req, cb);
    }

    /**
     * 删除子用户
     * @public
     */
    async DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse> {
        return await this.request("DeleteUser", req, cb);
    }

    /**
     * 该接口（CreatePolicyVersion）用于新增策略版本，用户创建了一个策略版本之后可以方便的通过变更策略版本的方式来变更策略。
     * @public
     */
    async CreatePolicyVersion(req: CreatePolicyVersionRequest, cb?: (error: string, rep: CreatePolicyVersionResponse) => void): Promise<CreatePolicyVersionResponse> {
        return await this.request("CreatePolicyVersion", req, cb);
    }

    /**
     * 获取协作者列表
     * @public
     */
    async ListCollaborators(req: ListCollaboratorsRequest, cb?: (error: string, rep: ListCollaboratorsResponse) => void): Promise<ListCollaboratorsResponse> {
        return await this.request("ListCollaborators", req, cb);
    }

    /**
     * 本接口（DetachGroupPolicy）可用于解除绑定到用户组的策略。
     * @public
     */
    async DetachGroupPolicy(req: DetachGroupPolicyRequest, cb?: (error: string, rep: DetachGroupPolicyResponse) => void): Promise<DetachGroupPolicyResponse> {
        return await this.request("DetachGroupPolicy", req, cb);
    }

    /**
     * 从用户组删除用户
     * @public
     */
    async RemoveUserFromGroup(req: RemoveUserFromGroupRequest, cb?: (error: string, rep: RemoveUserFromGroupResponse) => void): Promise<RemoveUserFromGroupResponse> {
        return await this.request("RemoveUserFromGroup", req, cb);
    }

    /**
     * 本接口（ListPolicies）可用于查询策略列表。
     * @public
     */
    async ListPolicies(req: ListPoliciesRequest, cb?: (error: string, rep: ListPoliciesResponse) => void): Promise<ListPoliciesResponse> {
        return await this.request("ListPolicies", req, cb);
    }

    /**
     * 查询用户组关联的用户列表
     * @public
     */
    async ListUsersForGroup(req: ListUsersForGroupRequest, cb?: (error: string, rep: ListUsersForGroupResponse) => void): Promise<ListUsersForGroupResponse> {
        return await this.request("ListUsersForGroup", req, cb);
    }

    /**
     * 本接口（AttachUserPolicy）可用于绑定到用户的策略。
     * @public
     */
    async AttachUserPolicy(req: AttachUserPolicyRequest, cb?: (error: string, rep: AttachUserPolicyResponse) => void): Promise<AttachUserPolicyResponse> {
        return await this.request("AttachUserPolicy", req, cb);
    }

    /**
     * 本接口（ListEntitiesForPolicy）可用于查询策略关联的实体列表。
     * @public
     */
    async ListEntitiesForPolicy(req: ListEntitiesForPolicyRequest, cb?: (error: string, rep: ListEntitiesForPolicyResponse) => void): Promise<ListEntitiesForPolicyResponse> {
        return await this.request("ListEntitiesForPolicy", req, cb);
    }

    /**
     * 本接口（AttachGroupPolicy）可用于绑定策略到用户组。
     * @public
     */
    async AttachGroupPolicy(req: AttachGroupPolicyRequest, cb?: (error: string, rep: AttachGroupPolicyResponse) => void): Promise<AttachGroupPolicyResponse> {
        return await this.request("AttachGroupPolicy", req, cb);
    }

    /**
     * 更新用户组
     * @public
     */
    async UpdateGroup(req: UpdateGroupRequest, cb?: (error: string, rep: UpdateGroupResponse) => void): Promise<UpdateGroupResponse> {
        return await this.request("UpdateGroup", req, cb);
    }

    /**
     * 设置用户权限边界
     * @public
     */
    async PutUserPermissionsBoundary(req: PutUserPermissionsBoundaryRequest, cb?: (error: string, rep: PutUserPermissionsBoundaryResponse) => void): Promise<PutUserPermissionsBoundaryResponse> {
        return await this.request("PutUserPermissionsBoundary", req, cb);
    }

    /**
     * 本接口（CreatePolicy）可用于创建策略。
     * @public
     */
    async CreatePolicy(req: CreatePolicyRequest, cb?: (error: string, rep: CreatePolicyResponse) => void): Promise<CreatePolicyResponse> {
        return await this.request("CreatePolicy", req, cb);
    }

    /**
     * 本接口（DetachUserPolicy）可用于解除绑定到用户的策略。
     * @public
     */
    async DetachUserPolicy(req: DetachUserPolicyRequest, cb?: (error: string, rep: DetachUserPolicyResponse) => void): Promise<DetachUserPolicyResponse> {
        return await this.request("DetachUserPolicy", req, cb);
    }

    /**
     * 列出用户关联的用户组
     * @public
     */
    async ListGroupsForUser(req: ListGroupsForUserRequest, cb?: (error: string, rep: ListGroupsForUserResponse) => void): Promise<ListGroupsForUserResponse> {
        return await this.request("ListGroupsForUser", req, cb);
    }


}
