const SimpleDEX = artifacts.require("SimpleDEX");
const MockToken = artifacts.require("MockToken");

module.exports = async function (deployer) {
  await deployer.deploy(MockToken, "MockToken1", "MTK1", 18, 1000000);
  const token1 = await MockToken.deployed();

  await deployer.deploy(MockToken, "MockToken2", "MTK2", 18, 1000000);
  const token2 = await MockToken.deployed();

  deployer.deploy(SimpleDEX, token1.address, token2.address);
};
