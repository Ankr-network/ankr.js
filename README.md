# ankrscan.js
Compact SDK for interacting with Ankr Scan MultiChain JSON-RPC API.
Library is designed to be compatible with [ether.js](https://github.com/ethers-io/ethers.js),
that is, SDK widely uses ethers' Classes, Functions and Interfaces.

#### SDK supports following MultiChain methods so far:

- [x] ankr_getLogs `AnkrscanProvider.getLogs`
- [x] ankr_getBlocksRange `AnkrscanProvider.getBlocksRange`
- [ ] ankr_getBalanceByWallet
- [ ] ankr_getNFTsByOwner

#### MultiChain support:
- ETH: `"eth"`
- BSC: `"bsc"`
- Polygon: `"polygon"`
- Fantom: `"fantom"`
- Arbitrum: `"arbitrum"`
- Avalanche: `"avalanche"`

## Installation
```shell
npm install ankrscan.js
```
or
```shell
yarn add ankrscan.js
```

## Import
node.js require
```shell
const { AnkrscanProvider } = require("ankrscan.js");
```
ES6 or TypeScript
```shell
import AnkrscanProvider from "ankrscan.js";
```

## Usage example

```javascript
import AnkrscanProvider from "ankrscan.js";

// Establish a connection to MultiChain via AnkrscanProvider
const provider = new AnkrscanProvider("YOUR-API-KEY")

// Query logs
const filterLogs = async () => {
    return await provider.getLogs(
        "eth",
        {
            fromBlock: 1181739,
            toBlock: 1181739,
            topics: [[], ["0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec"]],
            address: "0x3589d05a1ec4af9f65b0e5554e645707775ee43c"
        }
    )
}

// Query blocks
const blockRange = async () => {
    return await provider.getBlocksRange("bsc", 100, 200)
}
```
