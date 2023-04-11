import * as dotenv from 'dotenv';
dotenv.config();
import {HardhatUserConfig, HttpNetworkConfig, HttpNetworkHDAccountsConfig} from 'hardhat/types';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-truffle5';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.5.16',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    berachain: {
      chainId: 250,
      url: 'https://rpcapi.berachain.network',
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    berachaintestnet: {
      chainId: 4002,
      url: 'https://rpc.testnet.berachain.network',
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    }
  },
  etherscan: {
    apiKey: process.env.BERASCAN_API_KEY
  }
};

export default config;
