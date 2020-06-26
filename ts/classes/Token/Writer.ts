import { ethers } from 'ethers'
import { Address, Uint256, Bytes32, Uint8, Uintable } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
import { ContractWriter, ContractWriterChildStruct, StateChange } from 'pollenium-clover'
import { token } from '../../'

export class TokenWriter extends ContractWriter {

  constructor(struct: ContractWriterChildStruct) {
    super({
      ...token,
      ...struct
    })
  }


  async transfer(struct: {
    to: Uish,
    amount: Uintable
  }): Promise<StateChange> {
    const to = new Address(struct.to)
    const amount = new Uint256(struct.amount)
    return this.genStateChange(
       this.ethersContract.transfer(to.uu.toPhex(), amount.uu.toPhex())
    )
  }

  async setAllowance(struct: {
    spender: Uish,
    amount: Uintable
  }): Promise<StateChange> {
    const spender = new Address(struct.spender)
    const amount = new Uint256(struct.amount)
    return this.genStateChange(
       this.ethersContract.approve(spender.uu.toPhex(), amount.uu.toPhex())
    )
  }

}
