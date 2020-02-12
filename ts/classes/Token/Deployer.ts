import { ethers } from 'ethers'
import { Address, Uint256, Uintable } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { ContractDeployer, ContractDeployerChildStruct } from 'pollenium-clover'
import { token } from '../../'

export interface TokenDeployStruct {
  totalSupply: Uintable
}

export class TokenDeployer extends ContractDeployer<TokenDeployStruct> {

  constructor(struct: ContractDeployerChildStruct<TokenDeployStruct>) {
    super({
      ...token,
      ...struct,
      deployTransformer: (struct) => {
        const totalSupply = new Uint256(struct.totalSupply)
        return [totalSupply.uu.toPhex()]
      }
    })
  }
}
