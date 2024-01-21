# Gho-pay SDK

Sdk link: https://www.npmjs.com/package/ghopay-sdk

Verified Contract: https://sepolia.etherscan.io/address/0x3e57d3c580d0437498215c7c2472b26d39a94c4b

Gho-pay is a comprehensive SDK for interacting with the GHO Token on Ethereum's Sepolia network. It simplifies the process of token interactions such as approvals, transfers, and permits. The SDK is designed to be intuitive and efficient, catering to developers looking to integrate GHO Token transactions into their applications.

## Features

- **Token Interactions**: Easily handle approvals, transfers, and permits of GHO Tokens.
- **Checkout System Integration**: Build a seamless checkout system enabling users to pay with GHO for various purchases.
- **Crosschain NFT Minting**: Includes a UI example that facilitates the minting of crosschain NFTs using GHO as the payment method.
- **Chainlink Price Feeds**: Leverage Chainlink price feeds to determine the correct amount of GHO needed for minting.
- **CCIP for Crosschain Functionality**: Utilize Cross-Chain Interoperability Protocol (CCIP) for minting NFTs on the Polygon Mumbai network.

## Installation

To install Gho-pay SDK, use npm:

```bash
npm install ghopay-sdk
```

## Example

A UI example is included in the SDK demonstrating the process of minting a crosschain NFT using GHO. It illustrates the integration of Chainlink price feeds and CCIP for a seamless minting experience on the Polygon Mumbai network with the transaction originating on the Ethereum Sepolia Network and paid for with GHO. 


## Note

Contracts are built off of Chainlink Cross Chain NFT example. The updated contract for the Gho Payment + NFT Mint can be found at the top of this readme or in the SourceMinter.Sol Contract in the Contracts directory. 