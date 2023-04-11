pragma solidity >=0.5.0;

interface IStackingSalmonCallee {
    function stackingSalmonBorrow(
        address sender,
        address borrower,
        uint256 borrowAmount,
        bytes calldata data
    ) external;

    function stackingSalmonRedeem(
        address sender,
        uint256 redeemAmount,
        bytes calldata data
    ) external;
}
