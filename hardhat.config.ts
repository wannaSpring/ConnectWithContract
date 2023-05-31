import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.TEST_API_URL,
      accounts: [process.env.TEST_PRIVATE_KEY as string],
    }
  }
};

export default config;
