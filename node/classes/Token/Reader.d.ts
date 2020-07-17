import { Uint256, Uint8 } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractReader, ContractReaderChildStruct } from 'pollenium-clover';
export declare class TokenReader extends ContractReader {
    constructor(struct: ContractReaderChildStruct);
    fetchName(): Promise<string>;
    fetchSymbol(): Promise<string>;
    fetchDecimals(): Promise<Uint8>;
    fetchTotalSupply(): Promise<Uint256>;
    fetchBalance(holderUish: Uish): Promise<Uint256>;
    fetchAllowance(struct: {
        holder: Uish;
        spender: Uish;
    }): Promise<Uint256>;
}
