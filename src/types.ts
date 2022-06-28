/* Do not change, this code is generated from Golang structs */


export interface GetNFTsByOwnerRequest {
    blockchain?: Blockchain | (Blockchain)[];
    filter?: {[key: string]: string[]}[];
    walletAddress: string;
    pageToken?: string;
    pageSize?: number;
}
export interface Attribute {
    trait_type?: string;
    value?: string;
    display_type?: string;
    bunny_id?: string;
    count?: number;
    frequency?: string;
    mp_score?: string;
    rarity?: string;
}
export interface Nft {
    blockchain: Blockchain;
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
export interface GetNFTMetadataRequest {
    blockchain: Blockchain;
    contractAddress: string;
    tokenId: string;
}
export interface NftAttributes {
    tokenUrl: string;
    imageUrl: string;
    name: string;
    description: string;
    traits?: Attribute[];
    contractType: number;
}
export interface NftMetadata {
    blockchain: Blockchain;
    contractAddress: string;
    tokenId: string;
    contractType: number;
}
export interface GetNFTMetadataReply {
    metadata?: NftMetadata;
    attributes?: NftAttributes;
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
    balanceUsd: string;
    tokenPrice: string;
    thumbnail: string;
}
export interface GetAccountBalanceReply {
    nextPageToken?: string;
    totalBalanceUsd: string;
    assets: Balance[];
}
export interface GetAccountBalanceRequest {
    blockchain?: Blockchain | (Blockchain)[];
    walletAddress: string;
    pageToken?: string;
    pageSize?: number;
}
export interface GetTokenHoldersRequest {
    blockchain: Blockchain;
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
    blockchain: Blockchain;
    contractAddress: string;
    tokenDecimals: number;
    holders: HolderBalance[];
    holdersCount: number;
    nextPageToken: string;
}
export interface GetTokenHoldersCountRequest {
    blockchain: Blockchain;
    contractAddress: string;
    pageToken?: string;
    pageSize?: number;
}
export interface DailyHolderCount {
    holderCount: number;
    totalAmount: string;
    totalAmountRawInteger: string;
    lastUpdatedAt: string;
}
export interface GetTokenHoldersCountReply {
    blockchain: Blockchain;
    contractAddress: string;
    tokenDecimals: number;
    holderCountHistory: DailyHolderCount[];
    nextPageToken: string;
}
export interface GetCurrenciesRequest {
    blockchain: Blockchain;
}
export interface CurrencyDetailsExtended {
    blockchain: Blockchain;
    address?: string;
    name: string;
    decimals: number;
    symbol: string;
    thumbnail: string;
}
export interface GetCurrenciesReply {
    currencies: CurrencyDetailsExtended[];
}
export interface GetUsdPriceRequest {
    blockchain: Blockchain;
    contractAddress: string;
}
export interface GetUsdPriceReply {
    usdPrice: string;
    blockchain: Blockchain;
    contractAddress?: string;
}
export interface EventInput {
    name: string;
    type: string;
    indexed: boolean;
    size: number;
    valueDecoded: string;
}
export interface Event {
    name: string;
    inputs: EventInput[];
    anonymous: boolean;
    string: string;
    signature: string;
    id: string;
    verified: boolean;
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
    event?: Event;
}
export interface GetLogsReply {
    nextPageToken?: string;
    logs: Log[];
}
export interface GetLogsRequest {
    blockchain: Blockchain | (Blockchain)[];
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    fromTimestamp?: number | "latest" | "earliest";
    toTimestamp?: number | "latest" | "earliest";
    address?: string | string[];
    topics?: (string | string[])[];
    pageToken?: string;
    pageSize?: number;
    descOrder?: boolean;
    decodeLogs?: boolean;
}
export interface GetBlocksRequest {
    blockchain: Blockchain;
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    descOrder?: boolean;
    includeLogs?: boolean;
    includeTxs?: boolean;
    decodeLogs?: boolean;
    decodeTxData?: boolean;
}
export interface MethodInput {
    name: string;
    type: string;
    size: number;
    valueDecoded: string;
}
export interface Method {
    name: string;
    inputs: MethodInput[];
    string: string;
    signature: string;
    id: string;
    verified: boolean;
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
    blockchain: string;
    timestamp: string;
    method?: Method;
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
export interface GetBlocksReply {
    blocks: Block[];
}
export interface GetTransactionsByHashRequest {
    blockchain?: Blockchain | (Blockchain)[];
    transactionHash: string;
    includeLogs?: boolean;
    decodeLogs?: boolean;
    decodeTxData?: boolean;
}
export interface GetTransactionsByHashReply {
    transactions: Transaction[];
}
export type Blockchain = 'eth'
    | 'bsc'
    | 'polygon'
    | 'fantom'
    | 'arbitrum'
    | 'avalanche';
