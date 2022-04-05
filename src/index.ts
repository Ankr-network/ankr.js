import axios, {AxiosRequestConfig} from 'axios';
import {
    Block,
    GetAccountBalanceReply,
    GetAccountBalanceRequest,
    GetBlocksByNumberReply,
    GetBlocksRangeRequest, GetCurrenciesReply, GetCurrenciesRequest,
    GetLogsReply,
    GetLogsRequest,
    GetNFTsByOwnerReply,
    GetNFTsByOwnerRequest, GetTokenHoldersReply, GetTokenHoldersRequest,
    Log
} from "./types";

type JsonRPCPayload = { error?: { code?: number, data?: any, message?: string }, result?: any };

export default class AnkrscanProvider {
    url: string
    request_config: AxiosRequestConfig
    _nextId: number

    /**
     * Constructs an instance of AnkrscanProvider.
     * @param apiKey The API key for authorization.
     * @param endpoint Ankr Scan MultiChain RPC endpoint.
     */
    constructor(apiKey: string, endpoint: string = "https://rpc.ankr.com/multichain/") {
        this.url = endpoint + apiKey
        this.request_config = {headers: {'Content-Type': 'application/json'}};
        this._nextId = 1
    }

    /**
     * Returns the array of Log matching the filter.
     @param params A GetLogsRequest object.
     * @returns Promise<Log[]>
     */
    async getLogs(params: GetLogsRequest): Promise<Log[]> {
        const result = await this.send<GetLogsReply>("ankr_getLogs", params)
        return result.logs
    }

    /**
     * Returns the array of Block within specified range.
     * @param params A GetBlocksRangeRequest object.
     * @returns Promise<Block[]>
     */
    async getBlocksRange(params: GetBlocksRangeRequest): Promise<Block[]> {
        const result = await this.send<GetBlocksByNumberReply>("ankr_getBlocksRange", params)
        return result.blocks
    }

    /**
     * Returns coin and token balances of the wallet.
     * @param params A GetAccountBalanceRequest object.
     * @returns Promise<Balance[]>
     */
    async getAccountBalance(params: GetAccountBalanceRequest): Promise<GetAccountBalanceReply> {
        return await this.send<GetAccountBalanceReply>("ankr_getAccountBalance", params)
    }

    /**
     * Returns NFT collectibles of the wallet.
     * @param params A GetNFTsByOwnerRequest object.
     * @returns Promise<GetNFTsByOwnerReply>
     */
    async getNFTsByOwner(params: GetNFTsByOwnerRequest): Promise<GetNFTsByOwnerReply> {
        return await this.send<GetNFTsByOwnerReply>("ankr_getNFTsByOwner", params)
    }

    /**
     * Returns list of token holders.
     * @param params A GetTokenHoldersRequest object.
     * @returns Promise<GetTokenHoldersReply>
     */
    async getTokenHolders(params: GetTokenHoldersRequest): Promise<GetTokenHoldersReply> {
        return await this.send<GetTokenHoldersReply>("ankr_getTokenHolders", params)
    }

    /**
     * Returns list of currencies.
     * @param params A GetCurrenciesRequest object.
     * @returns Promise<GetCurrenciesReply>
     */
    async getCurrencies(params: GetCurrenciesRequest): Promise<GetCurrenciesReply> {
        return await this.send<GetCurrenciesReply>("ankr_getCurrencies", params)
    }

    private async send<TReply>(method: string, params: any): Promise<TReply> {
        const request = {method: method, params: params, id: (this._nextId++), jsonrpc: "2.0"};
        const response = await axios.post<JsonRPCPayload>(this.url, JSON.stringify(request), this.request_config);
        return <TReply>AnkrscanProvider.getResult(response.data)
    }

    private static getResult(payload: JsonRPCPayload): any {
        if (payload.error) {
            const error: any = new Error(payload.error.message);
            error.code = payload.error.code;
            error.data = payload.error.data;
            throw error;
        }
        return payload.result;
    }
}
