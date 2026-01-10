// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^ 0.8.28;

contract Crowd_Funding{

uint public Total_ETH;
address payable public owner;

mapping(address => uint) public deposits;

constructor(){
    owner = payable(msg.sender);
}

function deposit() public payable {
    require(msg.value > 0,"Amount cant be zero");

    deposits[msg.sender] += msg.value;
    Total_ETH += msg.value;

}

function withdraw() public {
    require(msg.sender == owner,"Not owner");
    // uint amount = amountInEth * 1 ether;
    // require(amount <= address(this).balance,"Insufficient balance");

    uint bal = address(this).balance;

    (bool success,) = owner.call{value: bal}("");
    require(success,"Transaction fail");

}

}