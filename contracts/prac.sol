// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.24;

contract demo{

    string public name="Hardhat_Tokens";
    string public symbol = "HHS";
    uint public totalsupply = 1000;
    address public owner;

    mapping (address => uint) balance;

    constructor(){
        balance[msg.sender] = totalsupply;
        owner = msg.sender;
    }
    function Transfer(address to, uint amount) external {
        require(balance[msg.sender] >= amount, "Not enough balance.");
        balance[msg.sender] -= amount;
        balance[to] += amount;
    }

    function checkbalance(address account)  public view returns(uint){
        return balance[account];
    }
}