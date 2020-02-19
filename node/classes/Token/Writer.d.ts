import { Uintable } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractWriter, ContractWriterChildStruct } from 'pollenium-clover';
export declare class TokenWriter extends ContractWriter {
    constructor(struct: ContractWriterChildStruct);
    transfer(struct: {
        to: Uish;
        amount: Uintable;
    }): Promise<void>;
    setAllowance(struct: {
        spender: Uish;
        amount: Uintable;
    }): Promise<void>;
}
