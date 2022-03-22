import {Filter, Log} from "@ethersproject/abstract-provider";
import {fetchJson} from "@ethersproject/web";
import {ConnectionInfo} from "ethers/lib/utils";
import {Formatter} from "@ethersproject/providers";

const ANKRSCAN_URL = "https://rpc.ankr.com/multichain/"

enum Blockchain {
    "eth",
    "bsc",
    "polygon",
    "fantom",
    "arbitrum",
    "avalanche",
}

export default class AnkrscanProvider {
    connection: ConnectionInfo
    formatter: Formatter
    _nextId: number

    /**
     * Constructs an instance of AnkrscanProvider.
     * @param apiKey The API key for authorization.
     * @param endpoint Ankr Scan MultiChain RPC endpoint.
     */
    constructor(apiKey: string, endpoint: string = ANKRSCAN_URL) {
        this.connection = <ConnectionInfo>{url: endpoint + apiKey}
        this.formatter = new Formatter()
        this._nextId = 1
    }

    /**
     * Returns the Array of Log matching the filter.
     * @param blockchain Blockchain to get logs from.
     * @param filter Filter parameters.
     * @returns Promise<Log[]> Array of Logs.
     */
    async getLogs(blockchain: keyof typeof Blockchain, filter: Filter | Promise<Filter>): Promise<Log[]> {
        const result = await this.send("ankr_getLogs", {"blockchain": blockchain, ...filter})
        return Formatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(result.logs)
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
