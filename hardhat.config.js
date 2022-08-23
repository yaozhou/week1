require("@nomicfoundation/hardhat-toolbox");

config = require('./config.json')

PRIVATE_KEY = config['wallet_key0'] + config['wallet_key1']
PROVIDER_URL = config['provider_url']

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: PROVIDER_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
