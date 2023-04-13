/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
   solidity: "0.8.2",
   networks: {
    polygonTestnet: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 8000000000,
    }
  },
  etherscan: {
    apiKey: process.env.POLYGON_API
  },
};