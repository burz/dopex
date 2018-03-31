const DopeCoin = artifacts.require("./DopeCoin.sol")

module.exports = function(deployer) {
  deployer.deploy(DopeCoin)
}
