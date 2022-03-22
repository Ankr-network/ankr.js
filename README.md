# ankrscan.js
Compact SDK for interacting with Ankr Scan MultiChain JSON-RPC API.
Library is designed to be compatible with [ether.js](https://github.com/ethers-io/ethers.js),
that is, SDK widely uses ethers' Classes, Functions and Interfaces.

#### SDK supports following MultiChain methods so far:

- [x] ankr_getLogs
- [ ] ankr_getBalanceByWallet
- [ ] ankr_getBlocksRange
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

// Returns:
// [
//     {
//         blockNumber: 1181739,
//         blockHash: '0x5ab6c835b58fc8aca99ca025e892d7aceec8f12b0c01d2bf194ee2b01b3d08ab',
//         transactionIndex: 0,
//         removed: false,
//         address: '0x3589d05a1ec4Af9f65b0E5554e645707775Ee43C',
//         data: '0x000000000000000000000000000000000000000000000000000000000000794d0000000000000000000000000000000000000000000000000000000000000000',
//         topics: [
//             '0xf10cb5dcb691bb26c2685b3fd72f4ca4008c33eafd1ee88c27210ef1db722459',
//             '0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec'
//         ],
//         transactionHash: '0xdad1ca0821d3f2b339b5264dca228fc3068790235f3654e1860834a5eda0b5c8',
//         logIndex: 0
//     }, {...}
// ]
```
