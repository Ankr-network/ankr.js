# ankrscan.js
Compact SDK for interacting with Ankr Scan MultiChain JSON-RPC API.

#### SDK supports following MultiChain methods:

- ankr_getLogs `AnkrscanProvider.getLogs`
- ankr_getBlocksRange `AnkrscanProvider.getBlocksRange`
- ankr_getAccountBalance `AnkrscanProvider.getAccountBalance`
- ankr_getNFTsByOwner `AnkrscanProvider.getNFTsByOwner`

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
```javascript
const { AnkrscanProvider } = require("ankrscan.js");
```
ES6 or TypeScript
```javascript
import AnkrscanProvider from "ankrscan.js";
```

## Usage example

```javascript
import AnkrscanProvider from "ankrscan.js";

// Create a provider
const provider = new AnkrscanProvider("YOUR-API-KEY")

// Get logs
const filterLogs = async () => {
    return await provider.getLogs({
        blockchain: "eth",
        fromBlock: 1181739,
        toBlock: 1181739,
        topics: [[], ["0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec"]],
        address: "0x3589d05a1ec4af9f65b0e5554e645707775ee43c"
    })
}

// Blocks range
const getBlocks = async () => {
    return await provider.getBlocksRange({
        blockchain: "bsc",
        fromBlock: 100,
        toBlock: 200
    })
}

// Account balances
const getBalances = async () => {
    return await provider.getAccountBalance({
        blockchain: "eth",
        walletAddress: "0xfa9019df60d3c710d7d583b2d69e18d412257617"
    })
}

// Get NFTs
const getNFTs = async () => {
    return await provider.getNFTsByOwner({
        blockchain: "eth",
        walletAddress: "0x0E11A192d574b342C51be9e306694C41547185DD",
        filter: [
            {"0x700b4b9f39bb1faf5d0d16a20488f2733550bff4": []},
            {"0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3": ["8937"]}
        ]
    })
}
```
