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

/**
 * 混流画布参数
 */
export interface Canvas {
  /**
   * 混流画布宽高配置
   */
  LayoutParams: LayoutParams

  /**
   * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
   */
  BackgroundColor?: string
}

/**
 * 自定义混流配置布局参数
 */
export interface LayoutParams {
  /**
   * 流画面宽，取值范围[2,3000]
   */
  Width: number

  /**
   * 流画面高，取值范围[2,3000]
   */
  Height: number

  /**
   * 当前画面左上角顶点相对于Canvas左上角顶点的x轴偏移量，默认为0，取值范围[0,3000]
   */
  X?: number

  /**
   * 当前画面左上角顶点相对于Canvas左上角顶点的y轴偏移量，默认为0， 取值范围[0,3000]
   */
  Y?: number

  /**
      * 画面z轴位置，默认为0
z轴确定了重叠画面的遮盖顺序，z轴值大的画面处于顶层
      */
  ZOrder?: number
}

/**
 * ResumeOnlineRecord返回参数结构体
 */
export interface ResumeOnlineRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartOnlineRecord请求参数结构体
 */
export interface StartOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要录制的房间号，取值范围: (1, 4294967295)
   */
  RoomId: number

  /**
      * 用于实时录制服务进房的用户ID，格式为`tic_record_user_${RoomId}_${Random}`，其中 `${RoomId} `与录制房间号对应，`${Random}`为一个随机字符串。
该ID必须是一个单独的未在SDK中使用的ID，实时录制服务使用这个用户ID进入房间进行音视频与白板录制，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常录制。
      */
  RecordUserId: string

  /**
   * 与RecordUserId对应的签名
   */
  RecordUserSig: string

  /**
   * 白板的 IM 群组 Id，默认同房间号
   */
  GroupId?: string

  /**
   * 实时录制视频拼接参数
   */
  Concat?: Concat

  /**
   * 实时录制白板参数，例如白板宽高等
   */
  Whiteboard?: Whiteboard

  /**
      * 实时录制混流参数
特别说明：
1. 混流功能需要根据额外开通， 请联系腾讯云互动白板客服人员
2. 使用混流功能，必须提供 Extras 参数，且 Extras 参数中必须包含 "MIX_STREAM"
      */
  MixStream?: MixStream

  /**
      * 使用到的高级功能列表
可以选值列表：
MIX_STREAM - 混流功能
      */
  Extras?: Array<string>

  /**
   * 是否需要在结果回调中返回各路流的纯音频录制文件，文件格式为mp3
   */
  AudioFileNeeded?: boolean
}

/**
 * DescribeOnlineRecordCallback请求参数结构体
 */
export interface DescribeOnlineRecordCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * DescribeOnlineRecordCallback返回参数结构体
 */
export interface DescribeOnlineRecordCallbackResponse {
  /**
   * 实时录制事件回调地址，如果未设置回调地址，该字段为空字符串
   */
  Callback?: string

  /**
   * 实时录制回调鉴权密钥
   */
  CallbackKey?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTranscodeCallback返回参数结构体
 */
export interface SetTranscodeCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopOnlineRecord请求参数结构体
 */
export interface StopOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要停止录制的任务 Id
   */
  TaskId: string
}

/**
 * 流布局参数
 */
export interface StreamLayout {
  /**
   * 流布局配置参数
   */
  LayoutParams: LayoutParams

  /**
      * 视频流ID
流ID的取值含义如下：
1. tic_record_user - 表示当前画面用于显示白板视频流
2. tic_substream - 表示当前画面用于显示辅路视频流
3. 特定用户ID - 表示当前画面用于显示指定用户的视频流
4. 不填 - 表示当前画面用于备选，当有新的视频流加入时，会从这些备选的空位中选择一个没有被占用的位置来显示新的视频流画面
      */
  InputStreamId?: string

  /**
   * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
   */
  BackgroundColor?: string
}

/**
 * CreateTranscode返回参数结构体
 */
export interface CreateTranscodeResponse {
  /**
   * 文档转码任务的唯一标识Id，用于查询该任务的进度以及转码结果
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频信息
 */
export interface VideoInfo {
  /**
   * 视频开始播放的时间（单位：毫秒）
   */
  VideoPlayTime: number

  /**
   * 视频大小（字节）
   */
  VideoSize: number

  /**
   * 视频格式
   */
  VideoFormat: string

  /**
   * 视频播放时长（单位：毫秒）
   */
  VideoDuration: number

  /**
   * 视频文件URL
   */
  VideoUrl: string

  /**
   * 视频文件Id
   */
  VideoId: string

  /**
      * 视频流类型 
- 0：摄像头视频 
- 1：屏幕分享视频
- 2：白板视频 
- 3：混流视频
- 4：纯音频（mp3)
      */
  VideoType: number

  /**
   * 摄像头/屏幕分享视频所属用户的 Id（白板视频为空、混流视频tic_mixstream_房间号_混流布局类型、辅路视频tic_substream_用户Id）
   */
  UserId: string
}

/**
 * 自定义混流布局参数
 */
export interface CustomLayout {
  /**
   * 混流画布参数
   */
  Canvas: Canvas

  /**
   * 流布局参数，每路流的布局不能超出画布区域
   */
  InputStreamList: Array<StreamLayout>
}

/**
 * SetTranscodeCallbackKey返回参数结构体
 */
export interface SetTranscodeCallbackKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时录制视频拼接参数
 */
export interface Concat {
  /**
      * 是否开启拼接功能
在开启了视频拼接功能的情况下，实时录制服务会把同一个用户因为暂停导致的多段视频拼接成一个视频
      */
  Enabled: boolean

  /**
   * 视频拼接时使用的垫片图片下载地址，不填默认用全黑的图片进行视频垫片
   */
  Image?: string
}

/**
 * DescribeOnlineRecord请求参数结构体
 */
export interface DescribeOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 实时录制任务Id
   */
  TaskId: string
}

/**
 * StartOnlineRecord返回参数结构体
 */
export interface StartOnlineRecordResponse {
  /**
   * 实时录制的任务Id
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时录制白板参数，例如白板宽高等
 */
export interface Whiteboard {
  /**
   * 实时录制结果里白板视频宽，默认为1280
   */
  Width?: number

  /**
   * 实时录制结果里白板视频高，默认为960
   */
  Height?: number

  /**
   * 白板初始化参数，透传到白板 SDK
   */
  InitParam?: string
}

/**
 * DescribeOnlineRecord返回参数结构体
 */
export interface DescribeOnlineRecordResponse {
  /**
      * 录制结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止录制
- USER_CALL: 主动调用了停止录制接口
- EXCEPTION: 录制异常结束
      */
  FinishReason?: string

  /**
   * 需要查询结果的录制任务Id
   */
  TaskId?: string

  /**
      * 录制任务状态
- PREPARED: 表示录制正在准备中（进房/启动录制服务等操作）
- RECORDING: 表示录制已开始
- PAUSED: 表示录制已暂停
- STOPPED: 表示录制已停止，正在处理并上传视频
- FINISHED: 表示视频处理并上传完成，成功生成录制结果
      */
  Status?: string

  /**
   * 房间号
   */
  RoomId?: number

  /**
   * 白板的群组 Id
   */
  GroupId?: string

  /**
   * 录制用户Id
   */
  RecordUserId?: string

  /**
   * 实际开始录制时间，Unix 时间戳，单位秒
   */
  RecordStartTime?: number

  /**
   * 实际停止录制时间，Unix 时间戳，单位秒
   */
  RecordStopTime?: number

  /**
   * 回放视频总时长（单位：毫秒）
   */
  TotalTime?: number

  /**
   * 录制过程中出现异常的次数
   */
  ExceptionCnt?: number

  /**
   * 拼接视频中被忽略的时间段，只有开启视频拼接功能的时候，这个参数才是有效的
   */
  OmittedDurations?: Array<OmittedDuration>

  /**
   * 录制视频列表
   */
  VideoInfos?: Array<VideoInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTranscode请求参数结构体
 */
export interface CreateTranscodeRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 需要进行转码文件地址
   */
  Url: string

  /**
      * 是否为静态PPT，默认为False；
如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片；
      */
  IsStaticPPT?: boolean

  /**
      * 转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率

注意分辨率宽高中间为英文字母"xyz"的"x"
      */
  MinResolution?: string

  /**
      * 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图，分辨率格式同MinResolution

静态转码这个参数不起作用
      */
  ThumbnailResolution?: string

  /**
      * 转码文件压缩格式，不传、传空字符串或不是指定的格式则不生成压缩文件，目前支持如下压缩格式：

zip： 生成`.zip`压缩包
tar.gz： 生成`.tar.gz`压缩包
      */
  CompressFileType?: string
}

/**
 * SetOnlineRecordCallbackKey返回参数结构体
 */
export interface SetOnlineRecordCallbackKeyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseOnlineRecord返回参数结构体
 */
export interface PauseOnlineRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTranscodeCallbackKey请求参数结构体
 */
export interface SetTranscodeCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number

  /**
   * 设置文档转码回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * DescribeTranscode请求参数结构体
 */
export interface DescribeTranscodeRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 文档转码任务的唯一标识Id
   */
  TaskId: string
}

/**
 * DescribeTranscode返回参数结构体
 */
export interface DescribeTranscodeResponse {
  /**
   * 文档的总页数
   */
  Pages?: number

  /**
   * 转码的当前进度,取值范围为0~100
   */
  Progress?: number

  /**
   * 文档的分辨率
   */
  Resolution?: string

  /**
      * 转码完成后结果的URL
动态转码：PPT转动态H5的链接
静态转码：文档每一页的图片URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/`，那么文档第1页的图片URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推
      */
  ResultUrl?: string

  /**
      * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
      */
  Status?: string

  /**
   * 转码任务的唯一标识Id
   */
  TaskId?: string

  /**
   * 文档的文件名
   */
  Title?: string

  /**
      * 缩略图URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/ `，那么动态PPT第1页的缩略图URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推

如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串
      */
  ThumbnailUrl?: string

  /**
   * 动态转码缩略图生成分辨率
   */
  ThumbnailResolution?: string

  /**
   * 转码压缩文件下载的URL，如果发起文档转码请求参数中`CompressFileType`为空或者不是支持的压缩格式，该参数为空字符串
   */
  CompressFileUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallback返回参数结构体
 */
export interface SetOnlineRecordCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallbackKey请求参数结构体
 */
export interface SetOnlineRecordCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number

  /**
   * 设置实时录制回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * StopOnlineRecord返回参数结构体
 */
export interface StopOnlineRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTranscodeCallback请求参数结构体
 */
export interface DescribeTranscodeCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * ResumeOnlineRecord请求参数结构体
 */
export interface ResumeOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 恢复录制的实时录制任务 Id
   */
  TaskId: string
}

/**
 * DescribeTranscodeCallback返回参数结构体
 */
export interface DescribeTranscodeCallbackResponse {
  /**
   * 文档转码回调地址
   */
  Callback?: string

  /**
   * 文档转码回调鉴权密钥
   */
  CallbackKey?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTranscodeCallback请求参数结构体
 */
export interface SetTranscodeCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
      * 文档转码进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。
回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
      */
  Callback: string
}

/**
 * SetOnlineRecordCallback请求参数结构体
 */
export interface SetOnlineRecordCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 实时录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
   */
  Callback: string
}

/**
 * 混流配置
 */
export interface MixStream {
  /**
   * 是否开启混流
   */
  Enabled: boolean

  /**
   * 是否禁用音频混流
   */
  DisableAudio?: boolean

  /**
      * 内置混流布局模板ID, 取值 [1, 2], 区别见内置混流布局模板样式示例说明
在没有填Custom字段时候，ModelId是必填的
      */
  ModelId?: number

  /**
      * 老师用户ID
此字段只有在ModelId填了的情况下生效
填写TeacherId的效果是把指定为TeacherId的用户视频流显示在内置模板的第一个小画面中
      */
  TeacherId?: string

  /**
      * 自定义混流布局参数
当此字段存在时，ModelId 及 TeacherId 字段将被忽略
      */
  Custom?: CustomLayout
}

/**
 * 拼接视频中被忽略的时间段
 */
export interface OmittedDuration {
  /**
   * 录制暂停时间戳对应的视频播放时间(单位: 毫秒)
   */
  VideoTime: number

  /**
   * 录制暂停时间戳(单位: 毫秒)
   */
  PauseTime: number

  /**
   * 录制恢复时间戳(单位: 毫秒)
   */
  ResumeTime: number
}

/**
 * PauseOnlineRecord请求参数结构体
 */
export interface PauseOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number

  /**
   * 实时录制任务 Id
   */
  TaskId: string
}
