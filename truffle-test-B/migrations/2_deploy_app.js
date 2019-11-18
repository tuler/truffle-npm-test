const App = artifacts.require("App");
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(App, SimpleStorage.address);
};
