import { ethers } from 'ethers'
import { Address, Uint256 } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { ContractReader, ContractReaderChildStruct } from 'pollenium-clover'
import { token } from '../../'

export class TokenReader extends ContractReader {

  constructor(struct: ContractReaderChildStruct) {
    super({
      ...token,
      ...struct
    })
  }


  async fetchBalance(holder: Address): Promise<Uint256> {
    const holderBignumber = await this.ethersContract.balanceOf(holder.uu.toPhex())
    return new Uint256(Uu.fromHexish(
      await ethers.utils.hexlify(holderBignumber)
    ))
  }

  async fetchAllowance(struct: {
    holder: Address,
    spender: Address
  }): Promise<Uint256> {
    const { holder, spender } = struct
    const allowanceBignumber = await this.ethersContract.allowance(
      holder.uu.toPhex(),
      spender.uu.toPhex()
    )
    return new Uint256(Uu.fromHexish(
      await ethers.utils.hexlify(allowanceBignumber)
    ))
  }

}
