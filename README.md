# Ankr APIs JavaScript SDK
Compact library for interacting with Ankr APIs.

#### SDK supports following MultiChain methods:

- `getLogs` - logs matching the filter.
- `getBlocks` - blocks within specified range.
- `getTransactionsByHash` - transaction(s) by hash.
- `getAccountBalance` - coin and token balances of the wallet.
- `getNFTsByOwner` - NFT collectibles of the wallet.
- `getNFTMetadata` - NFT's contract metadata.
- `getTokenHolders` - list of token holders.
- `getCurrencies` - currencies of blockchain.

#### MultiChain support
- ETH: `"eth"`
- BSC: `"bsc"`
- Polygon: `"polygon"`
- Fantom: `"fantom"`
- Arbitrum: `"arbitrum"`
- Avalanche: `"avalanche"`

### Acquire an API key
During the launch stage, Ankr Scan offers free access to the API with no request limits. That is, you can access the API without acquiring an API key. Later on Ankr Scan API will become a part of Ankr Protocol [Premium Plan](https://www.ankr.com/protocol/plan/).

## Installation
```shell
npm i @ankr.com/ankr.js
```
or
```shell
yarn add @ankr.com/ankr.js
```

## Import
node.js require
```javascript
const { AnkrscanProvider } = require("@ankr.com/ankr.js");
```
ES6 or TypeScript
```javascript
import AnkrscanProvider from "@ankr.com/ankr.js";
```

## Usage examples

#### Instantiate provider
```javascript
import AnkrscanProvider from "@ankr.com/ankr.js";

const provider = new AnkrscanProvider("YOUR-API-KEY")
```

#### Get logs
```javascript
const logs = async () => {
    return await provider.getLogs({
        blockchain: "eth",
        fromBlock: 1181739,
        toBlock: 1181739,
        topics: [[], ["0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec"]],
        address: "0x3589d05a1ec4af9f65b0e5554e645707775ee43c",
        decodeLogs: false
    })
}
```

#### Get blocks
```javascript
const blocks = async () => {
    return await provider.getBlocks({
        blockchain: "bsc",
        fromBlock: 100,
        toBlock: 200
    })
}
```

#### Get transactions
```javascript
const transactions = async () => {
    return await provider.getTransactionsByHash({
        transactionHash: "0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f",
        decodeTxData: true
    })
}
```

#### Get account balances
```javascript
const balances = async () => {
    return await provider.getAccountBalance({
        blockchain: "eth",
        walletAddress: "0xfa9019df60d3c710d7d583b2d69e18d412257617"
    })
}
```

#### Get NFTs
```javascript
const nfts = async () => {
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
#### Get token holders
```javascript
const tokenHolders = async () => {
    return await provider.getTokenHolders({
        blockchain: "eth",
        contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7"
    })
}
```

#### Get currencies
```javascript
const currencies = async () => {
    return await provider.getCurrencies({blockchain: "fantom"})
}
```
