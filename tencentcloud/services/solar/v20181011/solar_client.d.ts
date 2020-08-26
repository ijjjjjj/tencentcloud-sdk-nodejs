import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DescribeProjectResponse, CheckStaffChUserRequest, DescribeResourceTemplateHeadersResponse, DeleteProjectRequest, ReplenishProjectStockResponse, SendWxTouchTaskResponse, DescribeCustomersRequest, DescribeProjectsRequest, ModifyProjectRequest, OffLineProjectRequest, DescribeSubProjectRequest, ExpireFlowRequest, CopyActivityChannelRequest, CopyActivityChannelResponse, DescribeProjectsResponse, ReplenishProjectStockRequest, DescribeProjectStockResponse, CheckStaffChUserResponse, DescribeCustomerRequest, CreateSubProjectResponse, DescribeCustomerResponse, DescribeCustomersResponse, CreateSubProjectRequest, ModifyProjectResponse, CreateProjectResponse, DescribeProjectStockRequest, DeleteProjectResponse, SendWxTouchTaskRequest, DescribeProjectRequest, OffLineProjectResponse, DescribeResourceTemplateHeadersRequest, ExpireFlowResponse, DescribeSubProjectResponse, CreateProjectRequest } from "./solar_models";
/**
 * solar client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 子项目详情
     * @public
     */
    DescribeSubProject(req: DescribeSubProjectRequest, cb?: (error: string, rep: DescribeSubProjectResponse) => void): Promise<DescribeSubProjectResponse>;
    /**
     * 项目库存详情
     * @public
     */
    DescribeProjectStock(req: DescribeProjectStockRequest, cb?: (error: string, rep: DescribeProjectStockResponse) => void): Promise<DescribeProjectStockResponse>;
    /**
     * 项目详情展示
     * @public
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 素材查询服务号模板的列表（样例）
     * @public
     */
    DescribeResourceTemplateHeaders(req: DescribeResourceTemplateHeadersRequest, cb?: (error: string, rep: DescribeResourceTemplateHeadersResponse) => void): Promise<DescribeResourceTemplateHeadersResponse>;
    /**
     * 查询客户档案列表
     * @public
     */
    DescribeCustomers(req: DescribeCustomersRequest, cb?: (error: string, rep: DescribeCustomersResponse) => void): Promise<DescribeCustomersResponse>;
    /**
     * 发送企业微信触达任务
     * @public
     */
    SendWxTouchTask(req: SendWxTouchTaskRequest, cb?: (error: string, rep: SendWxTouchTaskResponse) => void): Promise<SendWxTouchTaskResponse>;
    /**
     * 创建项目
     * @public
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 补充子项目库存
     * @public
     */
    ReplenishProjectStock(req: ReplenishProjectStockRequest, cb?: (error: string, rep: ReplenishProjectStockResponse) => void): Promise<ReplenishProjectStockResponse>;
    /**
     * 项目列表展示
     * @public
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 下线项目
     * @public
     */
    OffLineProject(req: OffLineProjectRequest, cb?: (error: string, rep: OffLineProjectResponse) => void): Promise<OffLineProjectResponse>;
    /**
     * 把审批中的工单置为已失效
     * @public
     */
    ExpireFlow(req: ExpireFlowRequest, cb?: (error: string, rep: ExpireFlowResponse) => void): Promise<ExpireFlowResponse>;
    /**
     * 删除项目
     * @public
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
    /**
     * 员工渠道更改员工状态
     * @public
     */
    CheckStaffChUser(req: CheckStaffChUserRequest, cb?: (error: string, rep: CheckStaffChUserResponse) => void): Promise<CheckStaffChUserResponse>;
    /**
     * 客户档案查询客户详情
     * @public
     */
    DescribeCustomer(req: DescribeCustomerRequest, cb?: (error: string, rep: DescribeCustomerResponse) => void): Promise<DescribeCustomerResponse>;
    /**
     * 修改项目
     * @public
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 创建子项目
     * @public
     */
    CreateSubProject(req: CreateSubProjectRequest, cb?: (error: string, rep: CreateSubProjectResponse) => void): Promise<CreateSubProjectResponse>;
    /**
     * 复制活动渠道的策略
     * @public
     */
    CopyActivityChannel(req: CopyActivityChannelRequest, cb?: (error: string, rep: CopyActivityChannelResponse) => void): Promise<CopyActivityChannelResponse>;
}
