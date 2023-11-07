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

Mainnet 

- Ethereum: `"eth"`
- BNB Smart Chain: `"bsc"`
- Polygon: `"polygon"`
- Fantom: `"fantom"`
- Arbitrum: `"arbitrum"`
- Avalanche: `"avalanche"`
- Syscoin NEVM: `"syscoin"`
- Optimism: `"optimism"`
- Polygon zkEVM: `"polygon_zkevm"`
- Rollux: `"rollux"`
- Base: `"base"`
- Flare: `"flare"`
- Gnosis Chain: `"gnosis"`
- Scroll: `"scroll"`
- Linea: `"linea"`

Testnet

- Ethereum Goerli: `"eth_goerli"`
- Avalanche Fuji: `"avalanche_fuji"`
- Polygon Mumbai: `"polygon_mumbai"`
- Optimism Testnet: `"optimism_testnet"`

Appchain

- META Apes: `"bas_metaapes"`

Appchain Testnet

- META Apes Testnet: `"bas_metaapes_testnet"`

## Available methods

`ankr.js` supports the following methods:

Early Access

- [`getTokenPriceHistory`](#gettokenpricehistory)
- [`getAccountBalanceHistorical`](#getaccountbalancehistorical)
- [`getInternalTransactionsByBlockNumber`](#getinternaltransactionsbyblocknumber)
- [`getInternalTransactionsByParentHash`](#getinternaltransactionsbyparenthash)

Token API

- [`explainTokenPrice`](#explaintokenprice)
- [`getAccountBalance`](#getaccountbalance)
- [`getCurrencies`](#getcurrencies)
- [`getTokenHolders`](#gettokenholders)
- [`getTokenHoldersCount`](#gettokenholderscount)
- [`getTokenPrice`](#gettokenprice)
- [`getTokenTransfers`](#gettokentransfers)

NFT API

- [`getNFTsByOwner`](#getnftsbyowner)
- [`getNFTMetadata`](#getnftmetadata)
- [`getNFTHolders`](#getnftholders)
- [`getNftTransfers`](#getnfttransfers)

Query API

- [`getLogs`](#getlogs)
- [`getBlocks`](#getblocks)
- [`getTransactionsByHash`](#gettransactionsbyhash)
- [`getTransactionsByAddress`](#gettransactionsbyaddress)
- [`getBlockchainStats`](#getblockchainstats)
- [`getInteractions`](#getinteractions)

---

## Usage

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

#### `getTransactionsByAddress`

Query data about transactions of specified address.

```javascript
const transactions = async () => {
  return await provider.getTransactionsByAddress({
      blockchain: 'bsc',
      fromBlock: 23593283,
      toBlock: 23593283,
      address: ['0x97242e3315c7ece760dc7f83a7dd8af6659f8c4c'],
      pageToken: '',
      pageSize: 10,
      descOrder: true,
      includeLogs: true,
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

#### `getAccountBalanceHistorical`

Get the coin and token balances of the wallet at specified block.

```javascript
const balances = async () => {
  return await provider.getAccountBalanceHistorical({
      blockchain: 'eth', 
      walletAddress: 'vitalik.eth',
      onlyWhitelisted: false,
      blockHeight: 17967813,
      pageSize: 10,
      nativeFirst: false,
      pageToken: 'B',
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

#### `getNFTMetadata`

Get NFT's contract metadata.

````javascript
const nftsMetadata = async () => {
  return await provider.getNFTMetadata({
      blockchain: 'avalanche', 
      contractAddress: '0x8d01c8ee82e581e55c02117a676b5bbd4734fabb', 
      tokenId: '23240',
  });
};
````

#### `getNFTHolders`

Get NFT's holders.

````javascript
const nftsHolders = async () => {
  return await provider.getNFTHolders({
      blockchain: 'arbitrum',
      contractAddress: '0xc36442b4a4522e871399cd717abdd847ab11fe88',
      pageSize: 1000,
      pageToken: '',
  });
};
````

#### `getNftTransfers`

Get NFT Transfers of specified address.

````javascript
const nftTransfers = async () => {
  return await provider.getNftTransfers({
      blockchain: ['eth', 'bsc'],
      address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
      fromTimestamp: 1672563107,
      toTimestamp: 1672563107,
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

#### `getTokenPriceHistory`

Get a list of history of the price for given contract to given timestamp.

```javascript
const tokenPriceHistory = async () => {
  return await provider.getTokenPriceHistory({ 
      blockchain: 'eth',
      contractAddress: '0x50327c6c5a14dcade707abad2e27eb517df87ab5',
      toTimestamp: 1696970653,
      interval: 100,
      limit: 10,
  });
};
```

#### `getInternalTransactionsByBlockNumber`

Get a list of internal transactions in the block.

```javascript
const internalTransactions = async () => {
  return await provider.getInternalTransactionsByBlockNumber({ 
      blockchain: 'eth',
      blockNumber: 10000000,
      onlyWithValue: true,
  });
};
```

#### `getInternalTransactionsByParentHash`

Get a list of internal transactions in the transaction.

```javascript
const internalTransactions = async () => {
  return await provider.getInternalTransactionsByParentHash({ 
      blockchain: 'eth',
      parentTransactionHash: '0xa50f8744e65cb76f66f9d54499d5401866a75d93db2e784952f55205afc3acc5',
      onlyWithValue: true,
  });
};
```

#### `explainTokenPrice`

Get a list of tokens and pool how price for calculated.

```javascript
const tokenPriceExplanation = async () => {
  return await provider.explainTokenPrice({ 
      blockchain: 'eth',
      tokenAddress: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
      blockHeight: 17463534,
  });
};
```

#### `getTokenPrice`

Get token price by contract.

```javascript
const tokenPrice = async () => {
  return await provider.getTokenPrice({ 
      blockchain: 'eth',
      contractAddress: '',
  });
};
```


#### `getTokenTransfers`

Get token transfers of specified address.

```javascript
const tokenTransfers = async () => {
  return await provider.getTokenTransfers({ 
      blockchain: 'eth',
      address: '0xf16e9b0d03470827a95cdfd0cb8a8a3b46969b91',
      fromTimestamp: 1674441035,
      toTimestamp: 1674441035,
      pageSize: 1,
      orderAsc: true,
      includeLogs: true,
  });
};
```      

#### `getBlockchainStats`

Returns blockchain stats (num of txs, etc).

```javascript
const blockchainStats = async () => {
  return await provider.getBlockchainStats({});
};
```     

#### `getInteractions`

Returns on which chain address was interacting.

```javascript
const blockchainStats = async () => {
  return await provider.getInteractions({
      address: '0xF977814e90dA44bFA03b6295A0616a897441aceC',
  });
};
```

### About API keys

Ankr is offering _free_ access to Advanced API, however you have to register on Ankr platform to access it.
Get your individual endpoint here https://www.ankr.com/rpc/advanced-api.