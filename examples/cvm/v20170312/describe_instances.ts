// import * as tencentcloud from "../../../../tencentcloud-sdk-nodejs"
import * as tencentcloud from "../../../src"
import { user } from "../../config"
import { DescribeInstancesResponse } from "../../../src/cvm/v20170312/cvm_models"
// 导入对应产品模块的client models
const CvmClient = tencentcloud.cvm.v20170312.Client

// 实例化要请求产品(以cvm为例)的client对象。clientProfile可选。
const client = new CvmClient({
  credential: {
    secretId: user.secretId,
    secretKey: user.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})

// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.DescribeInstances(
  {
    // InstanceIds: ["ins-name"],
    Filters: [
      {
        Name: "zone",
        Values: ["ap-shanghai-1", "ap-shanghai-2"],
      },
      {
        Name: "instance-charge-type",
        Values: ["POSTPAID_BY_HOUR"],
      },
    ],
  },
  function (err: string, response: DescribeInstancesResponse) {
    // 请求异常返回，打印异常信息
    if (err) {
      console.log(err)
      return
    }
    // 请求正常返回，打印response对象
    console.log(response)
  }
)
