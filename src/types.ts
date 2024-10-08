/* Do not change, this code is generated from Golang structs */


export interface SyncStatus {
    timestamp: number;
    lag: string;
    status: string;
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
    blockchain: Blockchain;
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
export interface Transaction {
    v?: string;
    r?: string;
    s?: string;
    nonce?: string;
    blockNumber: string;
    from: string;
    to?: string;
    gas?: string;
    gasPrice?: string;
    input?: string;
    transactionIndex: string;
    blockHash: string;
    value: string;
    type?: string;
    contractAddress?: string;
    cumulativeGasUsed?: string;
    gasUsed?: string;
    logs?: Log[];
    hash?: string;
    status?: string;
    blockchain?: string;
    timestamp?: string;
    method?: Method;
}
export interface Block {
    blockchain?: string;
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
    syncStatus?: SyncStatus;
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
    syncCheck?: boolean;
}
export interface GetTransactionsByHashReply {
    transactions: Transaction[];
    syncStatus?: SyncStatus;
}
export interface GetTransactionsByHashRequest {
    blockchain?: Blockchain | (Blockchain)[];
    transactionHash: string;
    includeLogs?: boolean;
    decodeLogs?: boolean;
    decodeTxData?: boolean;
    syncCheck?: boolean;
}
export interface GetTransactionsByAddressReply {
    transactions: Transaction[];
    nextPageToken: string;
    syncStatus?: SyncStatus;
}
export interface GetTransactionsByAddressRequest {
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    fromTimestamp?: number | "latest" | "earliest";
    toTimestamp?: number | "latest" | "earliest";
    blockchain: Blockchain | (Blockchain)[];
    address: string[];
    pageToken?: string;
    pageSize?: number;
    descOrder?: boolean;
    includeLogs?: boolean;
    syncCheck?: boolean;
}
export interface GetLogsReply {
    nextPageToken?: string;
    logs: Log[];
    syncStatus?: SyncStatus;
}
export interface GetLogsRequest {
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    fromTimestamp?: number | "latest" | "earliest";
    toTimestamp?: number | "latest" | "earliest";
    blockchain: Blockchain | (Blockchain)[];
    address?: string[];
    topics?: (string | string[])[];
    pageToken?: string;
    pageSize?: number;
    descOrder?: boolean;
    decodeLogs?: boolean;
    syncCheck?: boolean;
}
export interface BlockchainStats {
    blockchain: string;
    totalTransactionsCount: number;
    totalEventsCount: number;
    latestBlockNumber: number;
    blockTimeMs: number;
    nativeCoinUsdPrice: string;
}
export interface GetBlockchainStatsReply {
    stats: BlockchainStats[];
    syncStatus?: SyncStatus;
}
export interface GetBlockchainStatsRequest {
    blockchain?: Blockchain | (Blockchain)[];
    syncCheck?: boolean;
}
export interface GetInteractionsReply {
    blockchains: string[];
    syncStatus?: SyncStatus;
}
export interface GetInteractionsRequest {
    address: string;
    syncCheck?: boolean;
}
export interface Balance {
    blockchain: Blockchain;
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
    totalCount: number;
    assets: Balance[];
    syncStatus?: SyncStatus;
}
export interface GetAccountBalanceRequest {
    blockchain?: Blockchain | (Blockchain)[];
    walletAddress: string;
    onlyWhitelisted?: boolean;
    nativeFirst?: boolean;
    pageToken?: string;
    pageSize?: number;
    syncCheck?: boolean;
}
export interface GetTokenPriceReply {
    usdPrice: string;
    blockchain: Blockchain;
    contractAddress?: string;
    syncStatus?: SyncStatus;
}
export interface GetTokenPriceRequest {
    blockchain: Blockchain;
    contractAddress?: string;
    syncCheck?: boolean;
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
    syncStatus?: SyncStatus;
}
export interface GetTokenHoldersRequest {
    blockchain: Blockchain;
    contractAddress: string;
    pageToken?: string;
    pageSize?: number;
    syncCheck?: boolean;
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
    latestHoldersCount: number;
    syncStatus?: SyncStatus;
}
export interface GetTokenHoldersCountRequest {
    blockchain: Blockchain;
    contractAddress: string;
    pageToken?: string;
    pageSize?: number;
    syncCheck?: boolean;
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
    syncStatus?: SyncStatus;
}
export interface GetCurrenciesRequest {
    blockchain: Blockchain;
    syncCheck?: boolean;
}
export interface TokenTransfer {
    fromAddress?: string;
    toAddress?: string;
    contractAddress?: string;
    value: string;
    valueRawInteger: string;
    blockchain: string;
    tokenName: string;
    tokenSymbol: string;
    tokenDecimals: number;
    thumbnail: string;
    transactionHash: string;
    blockHeight: number;
    timestamp: number;
    direction?: string;
}
export interface GetTokenTransfersReply {
    nextPageToken?: string;
    transfers: TokenTransfer[];
    syncStatus?: SyncStatus;
}
export interface GetTransfersRequest {
    fromBlock?: number | "latest" | "earliest";
    toBlock?: number | "latest" | "earliest";
    fromTimestamp?: number | "latest" | "earliest";
    toTimestamp?: number | "latest" | "earliest";
    blockchain: Blockchain | (Blockchain)[];
    address?: string[];
    pageToken?: string;
    pageSize?: number;
    descOrder?: boolean;
    syncCheck?: boolean;
}
export interface Trait {
    trait_type: string;
    value: string;
}
export interface Nft {
    blockchain: Blockchain;
    name: string;
    tokenId: string;
    tokenUrl: string;
    imageUrl: string;
    collectionName: string;
    symbol: string;
    contractType: 'ERC721' | 'ERC1155' | 'UNDEFINED';
    contractAddress: string;
    quantity?: string;
    traits?: Trait[];
}
export interface GetNFTsByOwnerReply {
    owner: string;
    assets: Nft[];
    nextPageToken: string;
    syncStatus?: SyncStatus;
}
export interface GetNFTsByOwnerRequest {
    blockchain?: Blockchain | (Blockchain)[];
    filter?: {[key: string]: string[]}[];
    walletAddress: string;
    pageToken?: string;
    pageSize?: number;
    syncCheck?: boolean;
}
export interface NftAttributes {
    tokenUrl: string;
    imageUrl: string;
    name: string;
    description: string;
    traits?: Trait[];
    contractType: 'ERC721' | 'ERC1155' | 'UNDEFINED';
}
export interface NftMetadata {
    blockchain: Blockchain;
    contractAddress: string;
    tokenId: string;
    contractType: 'ERC721' | 'ERC1155' | 'UNDEFINED';
    collectionName: string;
    collectionSymbol: string;
}
export interface GetNFTMetadataReply {
    metadata?: NftMetadata;
    attributes?: NftAttributes;
    syncStatus?: SyncStatus;
}
export interface GetNFTMetadataRequest {
    blockchain: Blockchain;
    contractAddress: string;
    tokenId: string;
    forceFetch: boolean;
    syncCheck?: boolean;
}
export interface GetNFTHoldersReply {
    holders: string[];
    nextPageToken: string;
    syncStatus?: SyncStatus;
}
export interface GetNFTHoldersRequest {
    blockchain: Blockchain;
    contractAddress: string;
    pageToken?: string;
    pageSize?: number;
    syncCheck?: boolean;
}
export interface NftTransfer {
    fromAddress: string;
    toAddress: string;
    contractAddress?: string;
    value: string;
    tokenId?: string;
    type: 'ERC721' | 'ERC1155' | 'UNDEFINED';
    blockchain: Blockchain;
    transactionHash: string;
    collectionName: string;
    collectionSymbol: string;
    name: string;
    imageUrl: string;
    blockHeight: number;
    timestamp: number;
}
export interface GetNftTransfersReply {
    nextPageToken?: string;
    transfers: NftTransfer[];
    syncStatus?: SyncStatus;
}
export interface GetTokenAllowancesRequest {
    blockchain: Blockchain | (Blockchain)[];
    walletAddress: string;
    spenderAddress?: string;
    contractAddress?: string;
}
export interface ERC20TokenAllowance {
    walletAddress?: string;
    spenderAddress?: string;
    contractAddress?: string;
    value?: string;
    tokenDecimals?: number;
    blockHeight: number;
    timestamp: number;
    transactionHash?: string;
    blockchain?: string;
    tokenName?: string;
    tokenSymbol?: string;
    thumbnail: string;
    rawLog?: Log;
}
export interface GetTokenAllowancesReply {
    allowances: ERC20TokenAllowance[];
}
export interface GetTokenPriceHistoryRequest {
    blockchain: Blockchain;
    contractAddress: string;
    fromTimestamp?: number | "latest" | "earliest";
    toTimestamp?: number | "latest" | "earliest";
    interval?: number;
    limit?: number;
    syncCheck?: boolean;
}
export interface Quote {
    timestamp: number;
    blockHeight: number;
    usdPrice: string;
}
export interface GetTokenPriceHistoryReply {
    quotes: Quote[];
    syncStatus?: SyncStatus;
}
export interface ExplainTokenPriceRequest {
    blockchain: Blockchain;
    tokenAddress: string;
    blockHeight: number | "latest" | "earliest";
}
export interface PriceEstimate {
    strategy: string;
    price: string;
}
export interface ExplainTokenPriceLPDetails {
    address: string;
    token0: string;
    token1: string;
    lastUpdatedBlock: number;
    reserve0: string;
    reserve1: string;
    price: string;
}
export interface ExplainTokenPriceTokenDetails {
    contractAddress: string;
    decimals: number;
    name: string;
    symbol: string;
}
export interface ExplainTokenPriceSinglePair {
    token0: ExplainTokenPriceTokenDetails;
    token1: ExplainTokenPriceTokenDetails;
    liquidity_pools: ExplainTokenPriceLPDetails[];
    priceEstimates: PriceEstimate[];
}
export interface ExplainTokenPriceReply {
    blockchain: string;
    tokenAddress: string;
    pairs: ExplainTokenPriceSinglePair[];
    priceEstimates: PriceEstimate[];
}
export interface GetInternalTransactionsByParentHashRequest {
    blockchain: Blockchain;
    parentTransactionHash: string;
    onlyWithValue: boolean;
    syncCheck?: boolean;
}
export interface GetInternalTransactionsByBlockNumberRequest {
    blockchain: Blockchain;
    blockNumber: number;
    onlyWithValue: boolean;
    syncCheck?: boolean;
}
export interface InternalTransaction {
    blockchain: Blockchain;
    callType: string;
    transactionHash: string;
    blockHeight: number;
    blockHash: string;
    fromAddress: string;
    contractAddress?: string;
    toAddress: string;
    value: string;
    gas: number;
    gasUsed: number;
    timestamp: string;
    transactionIndex: number;
    callPath?: string;
    callStack?: number[];
    error?: string;
    input: string;
    output: string;
}
export interface GetInternalTransactionsReply {
    internalTransactions: InternalTransaction[];
    nextPageToken?: string;
}
export interface GetAccountBalanceHistoricalRequest {
    blockchain?: Blockchain | (Blockchain)[];
    walletAddress: string;
    onlyWhitelisted?: boolean;
    nativeFirst?: boolean;
    pageToken?: string;
    pageSize?: number;
    blockHeight?: number | "latest" | "earliest";
    syncCheck?: boolean;
}
export interface GetAccountBalanceHistoricalReply {
    nextPageToken?: string;
    totalBalanceUsd: string;
    totalCount: number;
    assets: Balance[];
    syncStatus?: SyncStatus;
    blockHeight?: number | "latest" | "earliest";
}
export type Blockchain = 'arbitrum' | 'avalanche' | 'avalanche_fuji' | 'base' | 'base_sepolia' | 'bsc' | 'eth' | 'eth_holesky' | 'eth_sepolia' | 'fantom' | 'flare' | 'gnosis' | 'incentiv_devnet' | 'linea' | 'neura_devnet' | 'neura_testnet_v1' | 'optimism' | 'optimism_testnet' | 'polygon' | 'polygon_amoy' | 'polygon_zkevm' | 'rollux' | 'scroll' | 'stellar' | 'syscoin' | 'telos' | 'xai' | 'xlayer';
