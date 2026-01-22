// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Token {
    string public name = "Hardhat token";
    string public symbol = "roh";
    uint public totalSupply = 100;
    address public owner;
    int public total;
    mapping(address => uint) private balance;

    constructor() {
        balance[msg.sender] = totalSupply;
        owner = msg.sender;
    }  
    function add(int a, int b) public returns(int){
        total = a + b;
        return total;

    }
    function transfer(address receiver, uint amount) external {
        require(balance[msg.sender] >= amount, "You dont have enough tokens");

        balance[msg.sender] -= amount;
        balance[receiver] += amount;
    }
    function balancecheck(address account) public view returns (uint) {
        return balance[account];
    }

}