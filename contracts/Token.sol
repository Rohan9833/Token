// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Token {
    string public name = "Hardhat token";
    string public symbol = "roh";
    uint public totalSupply = 100;
    address public owner;

    mapping(address => uint) private balance;

    constructor() {
        balance[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address receiver, uint amount) external {
        require(balance[msg.sender] >= amount, "You dont have enough tokens");

        balance[msg.sender] -= amount;
        balance[receiver] += amount;
    }

    function balancecheck(address account) public view returns (uint) {
        return balance[account];
    }
// trying ki ho raha hai ki nahi





}
