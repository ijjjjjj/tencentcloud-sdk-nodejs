
const expect = require("chai").expect
const tencentcloud = require("../tencentcloud")
const user = require("../examples/config/config")
const client = new tencentcloud.iottid.v20190411.Client({
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
describe("iottid.v20190411.test.js", function () {

it("iottid.v20190411.AuthTestTid", async function () {
    try {
       const data = await client.AuthTestTid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.UploadDeviceUniqueCode", async function () {
    try {
       const data = await client.UploadDeviceUniqueCode({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.VerifyChipBurnInfo", async function () {
    try {
       const data = await client.VerifyChipBurnInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.DeliverTids", async function () {
    try {
       const data = await client.DeliverTids({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.BurnTidNotify", async function () {
    try {
       const data = await client.BurnTidNotify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.DescribePermission", async function () {
    try {
       const data = await client.DescribePermission({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.DeliverTidNotify", async function () {
    try {
       const data = await client.DeliverTidNotify({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.DownloadTids", async function () {
    try {
       const data = await client.DownloadTids({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("iottid.v20190411.DescribeAvailableLibCount", async function () {
    try {
       const data = await client.DescribeAvailableLibCount({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
