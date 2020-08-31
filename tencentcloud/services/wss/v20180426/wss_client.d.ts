import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { DeleteCertRequest, UploadCertResponse, DeleteCertResponse, DescribeCertListResponse, UploadCertRequest, DescribeCertListRequest } from "./wss_models";
/**
 * wss client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DeleteCert）用于删除证书。
     * @public
     */
    DeleteCert(req: DeleteCertRequest, cb?: (error: string, rep: DeleteCertResponse) => void): Promise<DeleteCertResponse>;
    /**
     * 本接口(DescribeCertList)用于获取证书列表。
     * @public
     */
    DescribeCertList(req: DescribeCertListRequest, cb?: (error: string, rep: DescribeCertListResponse) => void): Promise<DescribeCertListResponse>;
    /**
     * 本接口（UploadCert）用于上传证书。
     * @public
     */
    UploadCert(req: UploadCertRequest, cb?: (error: string, rep: UploadCertResponse) => void): Promise<UploadCertResponse>;
}