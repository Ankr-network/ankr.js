/* Do not change, this code is generated from Golang structs */


export interface GetNFTsByOwnerRequest {
    blockchain?: string[];
    filter?: {[key: string]: string[]}[];
    walletAddress: string;
    pageToken?: string;
    pageSize?: number;
}
export interface Attribute {
    trait_type?: string;
    value?: string;
}
export interface Nft {
    blockchain: string;
    name: string;
    tokenId: string;
    tokenUrl: string;
    imageUrl: string;
    collectionName: string;
    symbol: string;
    contractType: number;
    contractAddress: string;
    quantity?: string;
    traits?: Attribute[];
}
export interface GetNFTsByOwnerReply {
    owner: string;
    assets: Nft[];
    nextPageToken: string;
}
export interface Balance {
    blockchain: string;
    tokenName: string;
    tokenSymbol: string;
    tokenDecimals: number;
    tokenType: string;
    contractAddress?: string;
    holderAddress: string;
    balance: string;
    balanceRawInteger: string;
}
export interface GetAccountBalanceReply {
    assets: Balance[];
    nextPageToken?: string;
}
export interface GetAccountBalanceRequest {
    blockchain?: string;
    walletAddress: string;
    pageToken?: string;
    pageSize?: number;
}
export interface GetTokenHoldersRequest {
    blockchain: string;
    contractAddress: string;
    pageToken?: string;
    pageSize?: number;
}
export interface HolderBalance {
    holderAddress: string;
    balance: string;
    balanceRawInteger: string;
}
export interface GetTokenHoldersReply {
    blockchain: string;
    contractAddress: string;
    tokenDecimals: number;
    holders: HolderBalance[];
    nextPageToken: string;
}
export interface GetCurrenciesRequest {
    blockchain: string;
}
export interface CurrencyDetailsExtended {
    blockchain: string;
    address: string;
    name: string;
    decimals: number;
    symbol: string;
    thumbnail: string;
}
export interface GetCurrenciesReply {
    currencies: CurrencyDetailsExtended[];
}
export interface Log {
    address: string;
    topics: string[];
    data: string;
    blockNumber: string;
    transactionHash: string;
    transactionIndex: string;
    blockHash: string;
    logIndex: string;
    removed: boolean;
}
export interface GetLogsReply {
    logs: Log[];
}
export interface GetLogsRequest {
    blockchain: string;
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    address?: string | string[];
    topics?: (string | string[])[];
}
export interface GetBlocksRangeRequest {
    blockchain: string;
    fromBlock: number;
    toBlock: number;
}
export interface Transaction {
    v: string;
    r: string;
    s: string;
    nonce: string;
    from: string;
    gas: string;
    gasPrice: string;
    input: string;
    blockNumber: string;
    to?: string;
    transactionIndex: string;
    blockHash: string;
    value: string;
    type: string;
    contractAddress?: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    logs: Log[];
    logsBloom: string;
    transactionHash: string;
    hash: string;
    status: string;
}
export interface Block {
    blockchain: string;
    number: string;
    hash: string;
    parentHash: string;
    nonce: string;
    mixHash: string;
    sha3Uncles: string;
    logsBloom: string;
    stateRoot: string;
    miner: string;
    difficulty: string;
    extraData: string;
    size: string;
    gasLimit: string;
    gasUsed: string;
    timestamp: string;
    transactionsRoot: string;
    receiptsRoot: string;
    totalDifficulty: string;
    transactions: Transaction[];
    uncles: string[];
}
export interface GetBlocksByNumberReply {
    blocks: Block[];
}