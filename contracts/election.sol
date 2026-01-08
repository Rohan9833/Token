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


// pragma solidity ^ 0.8.18;

// contract Voting_Booth{

//  uint public count;
//  uint public count2;

// mapping(address => bool) internal voted;

// function Modi() public{
//     require(!voted[msg.sender],"Already Voted!");
//     voted[msg.sender] = true;
//     count += 1;
// }

// function Rahul() public{
// require(!voted[msg.sender],"Already Voted!");
//     voted[msg.sender] = true;
//     count2 += 1;}


// }
