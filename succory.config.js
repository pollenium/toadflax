const path = require('path')

const zeppelinDir = path.dirname(require.resolve('openzeppelin-solidity/package.json'))

const contractsDir = `${__dirname}/contracts`
const zeppelinContractsDir = `${zeppelinDir}/contracts`

const sources = {
  'openzeppelin/math/SafeMath.sol': `${zeppelinContractsDir}/math/SafeMath.sol`,
  'openzeppelin/GSN/Context.sol': `${zeppelinContractsDir}/GSN/Context.sol`,
  'openzeppelin/token/ERC20/IERC20.sol': `${zeppelinContractsDir}/token/ERC20/IERC20.sol`,
  'openzeppelin/token/ERC20/ERC20.sol': `${zeppelinContractsDir}/token/ERC20/ERC20.sol`,
  'Token.sol': `${contractsDir}/Token.sol`,
}

module.exports = {
  sources,
  outs: [{
    constName: 'token',
    fileName: 'Token.sol',
    contractName: 'Token'
  }],
  outPath: './ts/index.ts'
}
