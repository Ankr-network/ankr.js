import {Block, BlockTag, Filter, Log} from "@ethersproject/abstract-provider";
import {fetchJson} from "@ethersproject/web";
import {ConnectionInfo} from "ethers/lib/utils";
import {AnkrscanFormatter} from "./formatter"

const ANKRSCAN_URL = "https://rpc.ankr.com/multichain/"

type BlockchainName = "eth" | "bsc" | "polygon" | "fantom" | "arbitrum" | "avalanche"

export default class AnkrscanProvider {
    connection: ConnectionInfo
    formatter: AnkrscanFormatter
    _nextId: number

    /**
     * Constructs an instance of AnkrscanProvider.
     * @param apiKey The API key for authorization.
     * @param endpoint Ankr Scan MultiChain RPC endpoint.
     */
    constructor(apiKey: string, endpoint: string = ANKRSCAN_URL) {
        this.connection = <ConnectionInfo>{url: endpoint + apiKey}
        this._nextId = 1
        this.formatter = new AnkrscanFormatter()
    }

    /**
     * Returns the array of Log matching the filter.
     * @param blockchain Blockchain to get logs from.
     * @param filter Filter parameters.
     * @returns Promise<Log[]> Array of Logs.
     */
    async getLogs(blockchain: BlockchainName, filter: Filter | Promise<Filter>): Promise<Log[]> {
        const params = {blockchain: blockchain, ...filter}
        const result = await this.send("ankr_getLogs", params)
        return this.formatter.formatLogs(result.logs)
    }

    /**
     * Returns the array of Block within specified range.
     * @param blockchain Blockchain to get logs from.
     * @param fromBlock Block number to start range from.
     * @param toBlock Block number to limit range to.
     */
    async getBlocksRange(blockchain: BlockchainName, fromBlock: BlockTag, toBlock: BlockTag,): Promise<Block[]> {
        const params = {blockchain: blockchain, fromBlock: fromBlock, toBlock: toBlock}
        const result = await this.send("ankr_getBlocksRange", params)
        return this.formatter.formatBlocks(result.blocks)
    }

    async send(method: string, params: any): Promise<any> {
        const request = {
            method: method, params: params, id: (this._nextId++), jsonrpc: "2.0"
        };
        return await fetchJson(this.connection, JSON.stringify(request), getResult);
    }
}

function getResult(payload: { error?: { code?: number, data?: any, message?: string }, result?: any }): any {
    if (payload.error) {
        const error: any = new Error(payload.error.message);
        error.code = payload.error.code;
        error.data = payload.error.data;
        throw error;
    }

    return payload.result;
}
