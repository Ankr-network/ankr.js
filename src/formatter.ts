import {Formatter} from "@ethersproject/providers";
import {Block, Log} from "@ethersproject/abstract-provider";
import {BigNumber} from "@ethersproject/bignumber";

export class AnkrscanFormatter extends Formatter {
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

    formatLogs(logs: any): Promise<Log[]> {
        return <Promise<Log[]>>AnkrscanFormatter.arrayOf(this.filterLog.bind(this))(logs)
    }

    formatBlocks(blocks: any): Promise<Block[]> {
        return <Promise<Block[]>>AnkrscanFormatter.arrayOf(this.blockWithTransactions.bind(this))(blocks)
    }

    filterLog(value: any): any {
        return AnkrscanFormatter.check(this.formats.filterLog, value);
    }

    _block(value: any, format: any): Block {
        const difficulty = (value._difficulty != null) ? value._difficulty : value.difficulty;
        const result = AnkrscanFormatter.check(format, value);
        result._difficulty = ((difficulty == null) ? null : BigNumber.from(difficulty));
        return result;
    }

}