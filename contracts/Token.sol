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

}

contract PublicFunding is Token {
    address public  owner2;
    mapping(address=> uint) public donationrecord ;

    constructor(){
        owner2 =  msg.sender;
    }
    
    function donate() payable public{

        donationrecord[msg.sender] += msg.value;
        
    }

    function Balancecheck() external view returns (uint) {
        return address(this).balance;
    }

    function withdraw() external payable{
        require(msg.sender==owner2,"You are not the owner");
        //  owner.transfer(address(this) ether)
    }

}
