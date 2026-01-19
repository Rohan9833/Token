// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";



contract MyToken is ERC20 {

    uint256 public  totalsupply = 100000;

    constructor() ERC20("praticetoken", "PT") {
        
    }
}