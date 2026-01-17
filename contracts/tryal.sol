// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.28;


contract A{
    function  a()public pure   returns(string memory  ){
        return "ffunctiona";
    }
}

contract B is A{
    function  b()public view returns(address){
        return msg.sender;

    }
}

contract C is A , B{
    function  c()public pure returns (int){
        return 55;

    }
}