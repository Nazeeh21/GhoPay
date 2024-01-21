// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts@4.4.1/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.4.1/access/Ownable.sol";


/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract MyNFT is ERC721URIStorage, Ownable {
    string constant TOKEN_URI =
        "https://bafkreigd6jqnd6fktceoibkwlmasvjn6vpnqcev57ieamiuyxt466rrfby.ipfs.nftstorage.link/";
    uint256 internal tokenId;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address to) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, TOKEN_URI);
        unchecked {
            tokenId++;
        }
    }
}
