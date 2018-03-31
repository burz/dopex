const Dopex = artifacts.require("./Dopex.sol")

module.exports = function(deployer) {
  deployer.deploy(Dopex)
}
