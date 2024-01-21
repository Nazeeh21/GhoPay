// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import "./utils/Withdraw.sol"; 

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract SourceMinter is Withdraw {
    enum PayFeesIn {
        Native,
        LINK
    }

    address immutable i_router;
    address immutable i_link;
    address public priceFeedAddress;
    uint256 public mintingPriceUSD;
    IERC20 public ghoToken;
    address public recipient;

    event MessageSent(bytes32 messageId);

    constructor(
        address router, 
        address link, 
        address _priceFeedAddress, 
        address _ghoTokenAddress, 
        uint256 _mintingPriceUSD,
        address _recipient
    ) {
        i_router = router;
        i_link = link;
        priceFeedAddress = _priceFeedAddress;
        ghoToken = IERC20(_ghoTokenAddress);
        mintingPriceUSD = _mintingPriceUSD;
        recipient = _recipient;
    }

    receive() external payable {}

    function getMintingPriceInGHO() public view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(priceFeedAddress);
        (, int price, , , ) = priceFeed.latestRoundData();
        uint256 priceOfOneGHOInUSD = uint256(price);
        uint256 amountOfGHONeeded = mintingPriceUSD * 1e18 / priceOfOneGHOInUSD;
        return amountOfGHONeeded;
    }

    function updateRecipient(address newRecipient) public {
        // TODO: Add access control
        recipient = newRecipient;
    }

    function mint(
        uint64 destinationChainSelector,
        address receiver,
        PayFeesIn payFeesIn
    ) external {
        uint256 requiredGHO = getMintingPriceInGHO();
        require(ghoToken.balanceOf(msg.sender) >= requiredGHO, "Insufficient GHO balance");

        ghoToken.transferFrom(msg.sender, recipient, requiredGHO);

        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encodeWithSignature("mint(address)", msg.sender),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: payFeesIn == PayFeesIn.LINK ? i_link : address(0)
        });

        uint256 fee = IRouterClient(i_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;

        if (payFeesIn == PayFeesIn.LINK) {
            LinkTokenInterface(i_link).approve(i_router, fee);
            messageId = IRouterClient(i_router).ccipSend(
                destinationChainSelector,
                message
            );
        } else {
            messageId = IRouterClient(i_router).ccipSend{value: fee}(
                destinationChainSelector,
                message
            );
        }

        emit MessageSent(messageId);
    }
}
