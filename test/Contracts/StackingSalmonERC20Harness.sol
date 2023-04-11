pragma solidity =0.5.16;

import "../../contracts/StackingSalmonERC20.sol";

contract StackingSalmonERC20Harness is StackingSalmonERC20 {
    constructor(string memory _name, string memory _symbol)
        public
        StackingSalmonERC20()
    {
        _setName(_name, _symbol);
    }

    function mint(address to, uint256 value) public {
        super._mint(to, value);
    }

    function burn(address from, uint256 value) public {
        super._burn(from, value);
    }

    function setBalanceHarness(address account, uint256 amount) external {
        balanceOf[account] = amount;
    }
}
