// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

interface IClass{
    function studentmarks() external;

    function studentfees() external;
}

abstract contract StaffRoom{
    function teachersroll()public pure returns(uint){
        return 55;
    }

    function payment(int a ,int b) external  virtual  returns(int);
}

contract testing is IClass, StaffRoom{

    int count;

    function payment(int a ,int b) external override returns(int){
        count+= b;
        return a;

    }

    function studentmarks() external override{
        count++;
    }

    function studentfees() external override{
        count++;

    }
}

contract trial{
    
}