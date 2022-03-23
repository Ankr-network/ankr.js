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
        {
            blockchain: "eth",
            fromBlock: 1181739,
            toBlock: 1181739,
            topics: [[], ["0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec"]],
            address: "0x3589d05a1ec4af9f65b0e5554e645707775ee43c"
        }
    )
}

// Query blocks
const blockRange = async () => {
    return await provider.getBlocksRange(
        {
            blockchain:"bsc",
            fromBlock: 100,
            toBlock:200
        }
    )
}
```
