import { Uintable } from 'pollenium-buttercup';
import { Uish } from 'pollenium-uvaursi';
import { ContractWriter, ContractWriterChildStruct, StateChange } from 'pollenium-clover';
export declare class TokenWriter extends ContractWriter {
    constructor(struct: ContractWriterChildStruct);
    transfer(struct: {
        to: Uish;
        amount: Uintable;
    }): Promise<StateChange>;
    setAllowance(struct: {
        spender: Uish;
        amount: Uintable;
    }): Promise<StateChange>;
}
