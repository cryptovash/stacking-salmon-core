import { config as configDotenv } from "dotenv";
import type { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-truffle5";
import { removeConsoleLog } from "hardhat-preprocessor";
import "hardhat-abi-exporter";

configDotenv();

const config: HardhatUserConfig = {
    abiExporter: {
        path: "./build/abi",
        flat: true,
    },
    solidity: {
        version: "0.5.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 10000,
            },
        },
    },
    defaultNetwork: 'hardhat',
      networks: {
        hardhat: {},
        fantom: {
          chainId: 250,
          url: 'https://rpcapi.ftmchain.network',
          accounts: [`0x${process.env.KEY}`]
        },
        fantomtestnet: {
          chainId: 4002,
          url: 'https://rpc.testnet.fantom.network',
          accounts: [`0x${process.env.KEY}`]
        }
      },
      etherscan: {
        apiKey: process.env.FTMSCAN_API_KEY
      },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
    mocha: {
        timeout: 100000,
    },
    preprocess: {
        eachLine: removeConsoleLog((hre) => hre.network.name !== "hardhat" && hre.network.name !== "localhost"),
    },
};

export default config;
