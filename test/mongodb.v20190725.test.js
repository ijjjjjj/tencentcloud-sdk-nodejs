
const expect = require("chai").expect
const tencentcloud = require("../tencentcloud")
const user = require("../examples/config/config")
const client = new tencentcloud.mongodb.v20190725.Client({
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
describe("mongodb.v20190725.test.js", function () {

it("mongodb.v20190725.DescribeDBInstanceDeal", async function () {
    try {
       const data = await client.DescribeDBInstanceDeal({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.OfflineIsolatedDBInstance", async function () {
    try {
       const data = await client.OfflineIsolatedDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeClientConnections", async function () {
    try {
       const data = await client.DescribeClientConnections({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ResetDBInstancePassword", async function () {
    try {
       const data = await client.ResetDBInstancePassword({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.FlushInstanceRouterConfig", async function () {
    try {
       const data = await client.FlushInstanceRouterConfig({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBBackups", async function () {
    try {
       const data = await client.DescribeDBBackups({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.IsolateDBInstance", async function () {
    try {
       const data = await client.IsolateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeBackupAccess", async function () {
    try {
       const data = await client.DescribeBackupAccess({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.InquirePriceModifyDBInstanceSpec", async function () {
    try {
       const data = await client.InquirePriceModifyDBInstanceSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeAsyncRequestInfo", async function () {
    try {
       const data = await client.DescribeAsyncRequestInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateDBInstanceHour", async function () {
    try {
       const data = await client.CreateDBInstanceHour({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeDBInstances", async function () {
    try {
       const data = await client.DescribeDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSlowLogPatterns", async function () {
    try {
       const data = await client.DescribeSlowLogPatterns({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSlowLogs", async function () {
    try {
       const data = await client.DescribeSlowLogs({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateDBInstance", async function () {
    try {
       const data = await client.CreateDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.ModifyDBInstanceSpec", async function () {
    try {
       const data = await client.ModifyDBInstanceSpec({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.DescribeSpecInfo", async function () {
    try {
       const data = await client.DescribeSpecInfo({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.InquirePriceCreateDBInstances", async function () {
    try {
       const data = await client.InquirePriceCreateDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.AssignProject", async function () {
    try {
       const data = await client.AssignProject({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.RenameInstance", async function () {
    try {
       const data = await client.RenameInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.RenewDBInstances", async function () {
    try {
       const data = await client.RenewDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.CreateBackupDBInstance", async function () {
    try {
       const data = await client.CreateBackupDBInstance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("mongodb.v20190725.InquirePriceRenewDBInstances", async function () {
    try {
       const data = await client.InquirePriceRenewDBInstances({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
