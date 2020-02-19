import { Uint256 } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractReader, ContractReaderChildStruct } from 'pollenium-clover';
export declare class TokenReader extends ContractReader {
    constructor(struct: ContractReaderChildStruct);
    fetchBalance(holderUish: Uish): Promise<Uint256>;
    fetchAllowance(struct: {
        holder: Uish;
        spender: Uish;
    }): Promise<Uint256>;
}
