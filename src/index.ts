import {Block, BlockTag, Filter, Log} from "@ethersproject/abstract-provider";
import {fetchJson} from "@ethersproject/web";
import {ConnectionInfo} from "ethers/lib/utils";
import {Formatter} from "@ethersproject/providers";
import {BigNumber} from "@ethersproject/bignumber";

const ANKRSCAN_URL = "https://rpc.ankr.com/multichain/"

type BlockchainName = "eth" | "bsc" | "polygon" | "fantom" | "arbitrum" | "avalanche"

class AnkrscanFormatter extends Formatter {
    /**
     * Overrides Formatter.check() method to include all the additional fields from RPC response.
     * Format and check field if it exists in ether.js, otherwise just pass the field as is.
     * That way formatter always returns ether.js types,
     * but extended with Ankr Scan fields.
     */
    static check(format: { [name: string]: (value: any) => any; }, object: any): any {
        const result: any = {};
        for (const key in object) {
            try {
                const formatFunc = format[key];
                const rawValue = object[key];
                if (formatFunc === undefined) {
                    result[key] = rawValue;
                    continue;
                }
                const value = formatFunc(rawValue);
                if (value !== undefined) {
                    result[key] = value;
                }
            } catch (error: any) {
                error.checkKey = key;
                error.checkValue = object[key];
                throw error;
            }
        }
        return result;
    }

    filterLog(value: any): any {
        return AnkrscanFormatter.check(this.formats.filterLog, value);
    }

    _block(value: any, format: any): Block {
        if (value.author != null && value.miner == null) {
            value.miner = value.author;
        }
        // The difficulty may need to come from _difficulty in recursed blocks
        const difficulty = (value._difficulty != null) ? value._difficulty : value.difficulty;
        const result = AnkrscanFormatter.check(format, value);
        result._difficulty = ((difficulty == null) ? null : BigNumber.from(difficulty));
        return result;
    }

}

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
        return this.formatLogs(result.logs)
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
        return this.formatBlocks(result.blocks)
    }

    formatLogs(logs: any): Promise<Log[]> {
        return <Promise<Log[]>>AnkrscanFormatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(logs)
    }

    formatBlocks(blocks: any): Promise<Block[]> {
        return <Promise<Block[]>>AnkrscanFormatter.arrayOf(
            this.formatter.blockWithTransactions.bind(this.formatter)
        )(blocks)
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
