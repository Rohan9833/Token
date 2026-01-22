// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.28;

contract Publicfunding {

    address public  owner;
    mapping(address=> uint) public donationrecord ;

    constructor(){
        owner =  msg.sender;
    }
    
    function donate() payable public{

        donationrecord[msg.sender] += msg.value;
        
    }

    function Balancecheck() external view returns (uint) {
        return address(this).balance;
    }

    function withdraw() external payable{
        require(msg.sender==owner,"You are not the owner");
        //  owner.transfer(address(this) ether)
    }
}