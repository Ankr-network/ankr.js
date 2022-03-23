import axios, {AxiosRequestConfig} from 'axios';
import {
    Block,
    GetAccountBalanceReply,
    GetAccountBalanceRequest,
    GetBlocksRangeRequest,
    GetLogsRequest,
    GetNFTsByOwnerReply,
    GetNFTsByOwnerRequest,
    Log
} from "./types";

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
        const result = await this.send("ankr_getLogs", params)
        return <Promise<Log[]>>result.logs
    }

    /**
     * Returns the array of Block within specified range.
     * @param params A GetBlocksRangeRequest object.
     * @returns Promise<Block[]>
     */
    async getBlocksRange(params: GetBlocksRangeRequest): Promise<Block[]> {
        const result = await this.send("ankr_getBlocksRange", params)
        return <Promise<Block[]>>result.blocks
    }

    /**
     * Returns coin and token balances of the wallet.
     * @param params A GetAccountBalanceRequest object.
     * @returns Promise<Balance[]>
     */
    async getAccountBalance(params: GetAccountBalanceRequest): Promise<GetAccountBalanceReply> {
        const result = await this.send("ankr_getAccountBalance", params)
        return <Promise<GetAccountBalanceReply>>result
    }

    /**
     * Returns NFT collectibles of the wallet.
     * @param params A GetNFTsByOwnerRequest object.
     * @returns Promise<GetNFTsByOwnerReply>
     */
    async getNFTsByOwner(params: GetNFTsByOwnerRequest): Promise<GetNFTsByOwnerReply> {
        const result = await this.send("ankr_getNFTsByOwner", params)
        return <Promise<GetNFTsByOwnerReply>>result
    }

    private async send(method: string, params: any): Promise<any> {
        const request = {method: method, params: params, id: (this._nextId++), jsonrpc: "2.0"};
        const response = await axios.post(this.url, JSON.stringify(request), this.request_config);
        return AnkrscanProvider.getResult(response.data)
    }

    private static getResult(payload: { error?: { code?: number, data?: any, message?: string }, result?: any }): any {
        if (payload.error) {
            const error: any = new Error(payload.error.message);
            error.code = payload.error.code;
            error.data = payload.error.data;
            throw error;
        }
        return payload.result;
    }
}
