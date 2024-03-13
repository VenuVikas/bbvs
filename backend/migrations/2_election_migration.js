const Election = artifacts.require("Election");

module.exports = async function (deployer) {
  deployer.deploy(Election);

};
