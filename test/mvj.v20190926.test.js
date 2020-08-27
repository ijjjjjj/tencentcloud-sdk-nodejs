
const expect = require("chai").expect
const tencentcloud = require("../tencentcloud")
const user = require("../examples/config/config")
const client = new tencentcloud.mvj.v20190926.Client({
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
describe("mvj.v20190926.test.js", function () {

it("mvj.v20190926.MarketingValueJudgement", async function () {
    try {
       const data = await client.MarketingValueJudgement({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
