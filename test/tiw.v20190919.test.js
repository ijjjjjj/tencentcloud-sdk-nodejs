
const expect = require("chai").expect
const tencentcloud = require("../tencentcloud")
const user = require("../examples/config/config")
const client = new tencentcloud.tiw.v20190919.Client({
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
describe("tiw.v20190919.test.js", function () {

it("tiw.v20190919.SetOnlineRecordCallback", async function () {
    try {
       const data = await client.SetOnlineRecordCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetTranscodeCallbackKey", async function () {
    try {
       const data = await client.SetTranscodeCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTranscode", async function () {
    try {
       const data = await client.DescribeTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.CreateTranscode", async function () {
    try {
       const data = await client.CreateTranscode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.StopOnlineRecord", async function () {
    try {
       const data = await client.StopOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetTranscodeCallback", async function () {
    try {
       const data = await client.SetTranscodeCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.StartOnlineRecord", async function () {
    try {
       const data = await client.StartOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.SetOnlineRecordCallbackKey", async function () {
    try {
       const data = await client.SetOnlineRecordCallbackKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.PauseOnlineRecord", async function () {
    try {
       const data = await client.PauseOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeTranscodeCallback", async function () {
    try {
       const data = await client.DescribeTranscodeCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeOnlineRecord", async function () {
    try {
       const data = await client.DescribeOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.DescribeOnlineRecordCallback", async function () {
    try {
       const data = await client.DescribeOnlineRecordCallback({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tiw.v20190919.ResumeOnlineRecord", async function () {
    try {
       const data = await client.ResumeOnlineRecord({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})