const SimpleDEX = artifacts.require("SimpleDEX");

module.exports = function (deployer) {
  deployer.deploy(SimpleDEX);
};
