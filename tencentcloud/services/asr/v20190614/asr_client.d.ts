import { AbstractClient, ClientConfig } from "../../../common/abstract_client";
import { SetVocabStateResponse, GetAsrVocabResponse, GetAsrVocabRequest, DescribeTaskStatusResponse, DownloadAsrVocabResponse, CreateRecTaskResponse, UpdateAsrVocabResponse, DeleteAsrVocabResponse, GetAsrVocabListRequest, CreateRecTaskRequest, DownloadAsrVocabRequest, SetVocabStateRequest, DeleteAsrVocabRequest, SentenceRecognitionRequest, CreateAsrVocabRequest, UpdateAsrVocabRequest, CreateAsrVocabResponse, SentenceRecognitionResponse, DescribeTaskStatusRequest, GetAsrVocabListResponse } from "./asr_models";
/**
 * asr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用户通过该接口，可获得所有的热词表及其信息。
     * @public
     */
    GetAsrVocabList(req: GetAsrVocabListRequest, cb?: (error: string, rep: GetAsrVocabListResponse) => void): Promise<GetAsrVocabListResponse>;
    /**
       * 本接口服务对时长5小时以内的录音文件进行识别，异步返回识别全部结果， HTTP RESTful 形式。
  <br>• 支持中文普通话、英语、粤语和日语
  <br>• 支持通用、音视频领域
  <br>• 支持wav、mp3、m4a的音频格式
  <br>• 支持语音 URL 和本地语音文件两种请求方式
  <br>• 语音 URL 的音频时长不能长于5小时，文件大小不超过512MB
  <br>• 本地语音文件不能大于5MB
  <br>• 支持回调或轮询的方式获取结果，结果获取请参考[ 录音文件识别结果查询](https://cloud.tencent.com/document/product/1093/37822)。
       * @public
       */
    CreateRecTask(req: CreateRecTaskRequest, cb?: (error: string, rep: CreateRecTaskResponse) => void): Promise<CreateRecTaskResponse>;
    /**
     * 用户根据词表的ID可以获取对应的热词表信息
     * @public
     */
    GetAsrVocab(req: GetAsrVocabRequest, cb?: (error: string, rep: GetAsrVocabResponse) => void): Promise<GetAsrVocabResponse>;
    /**
       * 在调用录音文件识别请求接口后，有回调和轮询两种方式获取识别结果。
  <br>• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见[ 录音识别结果回调 ](https://cloud.tencent.com/document/product/1093/37139#callback)。
  <br>• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。
  
       * @public
       */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 用户通过该接口可以设置热词表的默认状态。初始状态为0，用户可设置状态为1，即为默认状态。默认状态表示用户在请求识别时，如不设置热词表ID，则默认使用状态为1的热词表。
     * @public
     */
    SetVocabState(req: SetVocabStateRequest, cb?: (error: string, rep: SetVocabStateResponse) => void): Promise<SetVocabStateResponse>;
    /**
     * 用户通过本接口进行对应的词表信息更新。
     * @public
     */
    UpdateAsrVocab(req: UpdateAsrVocabRequest, cb?: (error: string, rep: UpdateAsrVocabResponse) => void): Promise<UpdateAsrVocabResponse>;
    /**
       * 用户通过本接口进行热词表的创建。
  <br>•   默认最多可创建30个热词表。
  <br>•   每个热词表最多可添加128个词，每个词最长10个字，不能超出限制。
  <br>•   热词表可以通过数组或者本地文件形式上传。
  <br>•   本地文件必须为UTF-8编码格式，每行仅添加一个热词且不能包含标点和特殊字符。
  <br>•   热词权重取值范围为[1,10]之间的整数，权重越大代表该词被识别出来的概率越大。
       * @public
       */
    CreateAsrVocab(req: CreateAsrVocabRequest, cb?: (error: string, rep: CreateAsrVocabResponse) => void): Promise<CreateAsrVocabResponse>;
    /**
     * 用户通过本接口进行热词表的下载，获得词表权重文件形式的 base64 值，文件形式为通过 “|” 分割的词和权重，即 word|weight 的形式。
     * @public
     */
    DownloadAsrVocab(req: DownloadAsrVocabRequest, cb?: (error: string, rep: DownloadAsrVocabResponse) => void): Promise<DownloadAsrVocabResponse>;
    /**
     * 用户通过本接口进行热词表的删除。
     * @public
     */
    DeleteAsrVocab(req: DeleteAsrVocabRequest, cb?: (error: string, rep: DeleteAsrVocabResponse) => void): Promise<DeleteAsrVocabResponse>;
    /**
       * 本接口用于对60秒之内的短音频文件进行识别。
  <br>•   支持中文普通话、英语、粤语、日语。
  <br>•   支持本地语音文件上传和语音URL上传两种请求方式，音频时长不能超过60s。
  <br>•   音频格式支持wav、mp3；采样率支持8000Hz或者16000Hz；采样精度支持16bits；声道支持单声道。
  <br>•   当音频文件通过请求中body内容上传时，请求大小不能超过3MB。
  <br>•   所有请求参数放在POST请求的body中，编码类型采用x-www-form-urlencoded，参数进行urlencode编码后传输。
       * @public
       */
    SentenceRecognition(req: SentenceRecognitionRequest, cb?: (error: string, rep: SentenceRecognitionResponse) => void): Promise<SentenceRecognitionResponse>;
}