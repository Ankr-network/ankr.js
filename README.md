# ⚓️ ankr.js

Compact JavaScript library for interacting with Ankr's [Advanced APIs](https://www.ankr.com/advanced-api/).

## Get started in 2 minutes

#### 1. Install the package from npm

```bash
# with npm
npm install @ankr.com/ankr.js

# with yarn
yarn add @ankr.com/ankr.js
```

#### 2. Initialize the provider

_Note: to use Advanced API for free starting from 29.05.2023 you have to register on the platform._

Get your individual endpoint here https://www.ankr.com/rpc/advanced-api and provide it to the `AnkrProvider` constructor.

```javascript
import { AnkrProvider } from '@ankr.com/ankr.js';

const provider = new AnkrProvider('YOUR_ENDPOINT');
```

#### 3. Use the provider and call one of the supported methods

```javascript
await provider.getNFTsByOwner({
  blockchain: 'eth',
  walletAddress: '0x0E11A192d574b342C51be9e306694C41547185DD',
});
```

## Supported chains

`ankr.js` supports the following chains at this time:

- Ethereum: `"eth"`
- BNB Smart Chain: `"bsc"`
- Polygon: `"polygon"`
- Fantom: `"fantom"`
- Arbitrum: `"arbitrum"`
- Avalanche: `"avalanche"`
- Syscoin NEVM: `"syscoin"`
- Optimism: `"optimism"`


- Ethereum Goerli: `"eth_goerli"`
- Avalanche Fuji: `"avalanche_fuji"`


## Available methods

`ankr.js` supports the following methods:

- [`getNFTsByOwner`](#getnftsbyowner)
- `getNFTMetadata`
- `getNFTHolders`
- [`getTokenHolders`](#gettokenholders)
- [`getAccountBalance`](#getaccountbalance)
- [`getTokenHoldersCount`](#gettokenholderscount)
- [`getCurrencies`](#getcurrencies)
- [`getLogs`](#getlogs)
- [`getBlocks`](#getblocks)
- [`getTransactionsByHash`](#gettransactionsbyhash)
- `getTransactionsByAddress`
- `getTokenPrice`
- [`getTokenPriceHistory`](#gettokenpricehistory)

#### `getLogs`

Get logs matching the filter.

```javascript
const logs = async () => {
  return await provider.getLogs({
    blockchain: 'eth',
    fromBlock: 1181739,
    toBlock: 1181739,
    topics: [
      [],
      ['0x000000000000000000000000feb92d30bf01ff9a1901666c5573532bfa07eeec'],
    ],
    address: '0x3589d05a1ec4af9f65b0e5554e645707775ee43c',
    decodeLogs: false,
  });
};
```

#### `getBlocks`

Query data about blocks within a specified range.

```javascript
const blocks = async () => {
  return await provider.getBlocks({
    blockchain: 'bsc',
    fromBlock: 100,
    toBlock: 200,
  });
};
```

#### `getTransactionsByHash`

Query data about transaction(s) by the transaction hash.

```javascript
const transactions = async () => {
  return await provider.getTransactionsByHash({
    transactionHash:
      '0x82c13aaac6f0b6471afb94a3a64ae89d45baa3608ad397621dbb0d847f51196f',
    decodeTxData: true,
  });
};
```

#### `getAccountBalance`

Get the coin and token balances of a wallet.

```javascript
const balances = async () => {
  return await provider.getAccountBalance({
    blockchain: 'eth',
    walletAddress: '0xfa9019df60d3c710d7d583b2d69e18d412257617',
  });
};
```

#### `getNFTsByOwner`

Get data about all the NFTs (collectibles) owned by a wallet.

````javascript
const nfts = async () => {
  return await provider.getNFTsByOwner({
    blockchain: 'eth',
    walletAddress: '0x0E11A192d574b342C51be9e306694C41547185DD',
    filter: [
      { '0x700b4b9f39bb1faf5d0d16a20488f2733550bff4': [] },
      { '0xd8682bfa6918b0174f287b888e765b9a1b4dc9c3': ['8937'] },
    ],
  });
};
````

#### `getTokenHolders`

Get the list of token holders for a given contract address.

```javascript
const tokenHolders = async () => {
  return await provider.getTokenHolders({
    blockchain: 'eth',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  });
};
```

#### `getTokenHoldersCount`

Get current and historical data about the number of token holders for a given contract address.

```javascript
const tokenHoldersCount = async () => {
  return await provider.getTokenHoldersCount({
    blockchain: 'eth',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  });
};
```

#### `getCurrencies`

Get a list of supported currencies for a given blockchain.

```javascript
const currencies = async () => {
  return await provider.getCurrencies({ blockchain: 'fantom' });
};
```

### About API keys

Ankr is offering _free_ access to Advanced API, however you have to register on Ankr platform to access it.
Get your individual endpoint here https://www.ankr.com/rpc/advanced-api.