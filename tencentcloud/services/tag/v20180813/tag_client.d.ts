import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DetachResourcesTagRequest, AttachResourcesTagResponse, DeleteTagRequest, DeleteResourceTagResponse, DescribeResourceTagsByTagKeysRequest, ModifyResourceTagsResponse, DescribeTagsRequest, DescribeTagKeysResponse, DescribeTagValuesRequest, ModifyResourceTagsRequest, DescribeResourcesByTagsUnionRequest, DescribeTagsResponse, DescribeResourcesByTagsResponse, DescribeTagKeysRequest, DescribeTagsSeqResponse, DescribeResourceTagsResponse, DescribeResourceTagsByResourceIdsRequest, DescribeResourcesByTagsUnionResponse, DescribeResourceTagsByResourceIdsResponse, ModifyResourcesTagValueRequest, AddResourceTagResponse, ModifyResourcesTagValueResponse, AddResourceTagRequest, DescribeTagValuesSeqResponse, CreateTagRequest, DescribeResourceTagsByTagKeysResponse, DescribeTagsSeqRequest, DescribeTagValuesResponse, AttachResourcesTagRequest, CreateTagResponse, DetachResourcesTagResponse, DescribeResourceTagsByResourceIdsSeqResponse, DeleteTagResponse, DescribeTagValuesSeqRequest, UpdateResourceTagValueRequest, DescribeResourcesByTagsRequest, DeleteResourceTagRequest, UpdateResourceTagValueResponse, DescribeResourceTagsRequest, DescribeResourceTagsByResourceIdsSeqRequest } from "./tag_models";
/**
 * tag client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据标签键获取资源标签
     * @public
     */
    DescribeResourceTagsByTagKeys(req: DescribeResourceTagsByTagKeysRequest, cb?: (error: string, rep: DescribeResourceTagsByTagKeysResponse) => void): Promise<DescribeResourceTagsByTagKeysResponse>;
    /**
     * 用于查询已建立的标签列表中的标签值。
     * @public
     */
    DescribeTagValuesSeq(req: DescribeTagValuesSeqRequest, cb?: (error: string, rep: DescribeTagValuesSeqResponse) => void): Promise<DescribeTagValuesSeqResponse>;
    /**
     * 解绑多个资源关联的某个标签
     * @public
     */
    DetachResourcesTag(req: DetachResourcesTagRequest, cb?: (error: string, rep: DetachResourcesTagResponse) => void): Promise<DetachResourcesTagResponse>;
    /**
     * 用于查询已建立的标签列表中的标签值。
     * @public
     */
    DescribeTagValues(req: DescribeTagValuesRequest, cb?: (error: string, rep: DescribeTagValuesResponse) => void): Promise<DescribeTagValuesResponse>;
    /**
     * 用于查询已有资源标签键值对
     * @public
     */
    DescribeResourceTagsByResourceIds(req: DescribeResourceTagsByResourceIdsRequest, cb?: (error: string, rep: DescribeResourceTagsByResourceIdsResponse) => void): Promise<DescribeResourceTagsByResourceIdsResponse>;
    /**
     * 查询资源关联标签
     * @public
     */
    DescribeResourceTags(req: DescribeResourceTagsRequest, cb?: (error: string, rep: DescribeResourceTagsResponse) => void): Promise<DescribeResourceTagsResponse>;
    /**
     * 本接口用于修改资源关联的所有标签
     * @public
     */
    ModifyResourceTags(req: ModifyResourceTagsRequest, cb?: (error: string, rep: ModifyResourceTagsResponse) => void): Promise<ModifyResourceTagsResponse>;
    /**
       * 用于查询已建立的标签列表中的标签键。
  
       * @public
       */
    DescribeTagKeys(req: DescribeTagKeysRequest, cb?: (error: string, rep: DescribeTagKeysResponse) => void): Promise<DescribeTagKeysResponse>;
    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     * @public
     */
    UpdateResourceTagValue(req: UpdateResourceTagValueRequest, cb?: (error: string, rep: UpdateResourceTagValueResponse) => void): Promise<UpdateResourceTagValueResponse>;
    /**
     * 本接口用于解除标签和资源的关联关系
     * @public
     */
    DeleteResourceTag(req: DeleteResourceTagRequest, cb?: (error: string, rep: DeleteResourceTagResponse) => void): Promise<DeleteResourceTagResponse>;
    /**
     * 通过标签查询资源列表并集
     * @public
     */
    DescribeResourcesByTagsUnion(req: DescribeResourcesByTagsUnionRequest, cb?: (error: string, rep: DescribeResourcesByTagsUnionResponse) => void): Promise<DescribeResourcesByTagsUnionResponse>;
    /**
     * 按顺序查看资源关联的标签
     * @public
     */
    DescribeResourceTagsByResourceIdsSeq(req: DescribeResourceTagsByResourceIdsSeqRequest, cb?: (error: string, rep: DescribeResourceTagsByResourceIdsSeqResponse) => void): Promise<DescribeResourceTagsByResourceIdsSeqResponse>;
    /**
       * 用于查询已建立的标签列表。
  
       * @public
       */
    DescribeTags(req: DescribeTagsRequest, cb?: (error: string, rep: DescribeTagsResponse) => void): Promise<DescribeTagsResponse>;
    /**
       * 用于查询已建立的标签列表。
  
       * @public
       */
    DescribeTagsSeq(req: DescribeTagsSeqRequest, cb?: (error: string, rep: DescribeTagsSeqResponse) => void): Promise<DescribeTagsSeqResponse>;
    /**
     * 通过标签查询资源列表
     * @public
     */
    DescribeResourcesByTags(req: DescribeResourcesByTagsRequest, cb?: (error: string, rep: DescribeResourcesByTagsResponse) => void): Promise<DescribeResourcesByTagsResponse>;
    /**
     * 本接口用于给标签关联资源
     * @public
     */
    AddResourceTag(req: AddResourceTagRequest, cb?: (error: string, rep: AddResourceTagResponse) => void): Promise<AddResourceTagResponse>;
    /**
     * 本接口用于删除一对标签键和标签值
     * @public
     */
    DeleteTag(req: DeleteTagRequest, cb?: (error: string, rep: DeleteTagResponse) => void): Promise<DeleteTagResponse>;
    /**
     * 给多个资源关联某个标签
     * @public
     */
    AttachResourcesTag(req: AttachResourcesTagRequest, cb?: (error: string, rep: AttachResourcesTagResponse) => void): Promise<AttachResourcesTagResponse>;
    /**
     * 本接口用于创建一对标签键和标签值
     * @public
     */
    CreateTag(req: CreateTagRequest, cb?: (error: string, rep: CreateTagResponse) => void): Promise<CreateTagResponse>;
    /**
     * 修改多个资源关联的某个标签键对应的标签值
     * @public
     */
    ModifyResourcesTagValue(req: ModifyResourcesTagValueRequest, cb?: (error: string, rep: ModifyResourcesTagValueResponse) => void): Promise<ModifyResourcesTagValueResponse>;
}
