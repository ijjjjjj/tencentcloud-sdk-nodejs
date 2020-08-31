
const expect = require("chai").expect
const tencentcloud = require("../tencentcloud")
const user = require("../examples/config/config")
const client = new tencentcloud.asr.v20190614.Client({
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
describe("asr.v20190614.test.js", function () {

it("asr.v20190614.GetAsrVocabList", async function () {
    try {
       const data = await client.GetAsrVocabList({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.CreateRecTask", async function () {
    try {
       const data = await client.CreateRecTask({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.GetAsrVocab", async function () {
    try {
       const data = await client.GetAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DescribeTaskStatus", async function () {
    try {
       const data = await client.DescribeTaskStatus({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.SetVocabState", async function () {
    try {
       const data = await client.SetVocabState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.UpdateAsrVocab", async function () {
    try {
       const data = await client.UpdateAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.CreateAsrVocab", async function () {
    try {
       const data = await client.CreateAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DownloadAsrVocab", async function () {
    try {
       const data = await client.DownloadAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.DeleteAsrVocab", async function () {
    try {
       const data = await client.DeleteAsrVocab({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("asr.v20190614.SentenceRecognition", async function () {
    try {
       const data = await client.SentenceRecognition({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})