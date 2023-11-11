const MockToken = artifacts.require("MockToken");

module.exports = function (deployer) {
  deployer.deploy(MockToken, "MockToken1", "MTK1", 18, 1000000);
  deployer.deploy(MockToken, "MockToken2", "MTK2", 18, 1000000);
};
