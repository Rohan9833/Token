// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract election{

    enum party{
        bjp,
        congress
    }
    mapping(address => bool) public hasvoted;

    uint public bjpcount;
    uint public congresscount;


    function voting(party _party) external{

        require(!hasvoted[msg.sender],"already voted");

        if(_party ==party.bjp){
            bjpcount++;
        }           
        else if(_party == party.congress){
            congresscount++;
        }

        hasvoted[msg.sender]= true;

    }   

 

}

