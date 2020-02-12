import { ethers } from 'ethers'
import { Address, Uint256, Bytes32, Uint8 } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { ContractWriter, ContractWriterChildStruct } from 'pollenium-clover'
import { token } from '../../'

export class TokenWriter extends ContractWriter {

  constructor(struct: ContractWriterChildStruct) {
    super({
      ...token,
      ...struct
    })
  }


  async transfer(struct: {
    to: Address,
    amount: Uint256
  }): Promise<void> {
    const { to, amount } = struct
    await this.ethersContract.transfer(to.uu.toPhex(), amount.uu.toPhex())
  }

  async setAllowance(struct: {
    spender: Address,
    amount: Uint256
  }) {
    const { spender, amount } = struct
    await this.ethersContract.approve(spender.uu.toPhex(), amount.uu.toPhex())
  }

}
