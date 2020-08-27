
const expect = require("chai").expect
const tencentcloud = require("../tencentcloud")
const user = require("../examples/config/config")
const client = new tencentcloud.partners.v20180321.Client({
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
describe("partners.v20180321.test.js", function () {

it("partners.v20180321.DescribeAgentDealsCache", async function () {
    try {
       const data = await client.DescribeAgentDealsCache({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.AgentPayDeals", async function () {
    try {
       const data = await client.AgentPayDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentBills", async function () {
    try {
       const data = await client.DescribeAgentBills({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.AgentTransferMoney", async function () {
    try {
       const data = await client.AgentTransferMoney({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeRebateInfos", async function () {
    try {
       const data = await client.DescribeRebateInfos({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeSalesmans", async function () {
    try {
       const data = await client.DescribeSalesmans({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.RemovePayRelationForClient", async function () {
    try {
       const data = await client.RemovePayRelationForClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.ModifyClientRemark", async function () {
    try {
       const data = await client.ModifyClientRemark({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentPayDeals", async function () {
    try {
       const data = await client.DescribeAgentPayDeals({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentClients", async function () {
    try {
       const data = await client.DescribeAgentClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeClientBalance", async function () {
    try {
       const data = await client.DescribeClientBalance({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentClientGrade", async function () {
    try {
       const data = await client.DescribeAgentClientGrade({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.DescribeAgentAuditedClients", async function () {
    try {
       const data = await client.DescribeAgentAuditedClients({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.CreatePayRelationForClient", async function () {
    try {
       const data = await client.CreatePayRelationForClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("partners.v20180321.AuditApplyClient", async function () {
    try {
       const data = await client.AuditApplyClient({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
