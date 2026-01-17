// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
 
interface ICounter {
    function Count() external view returns (uint256);
 
    function Increment(int a, int b) external;
}
 
abstract contract firstabstact {
    function count() external pure  returns (uint256){
        return 10;
 
    }
 
    function increment() public  virtual returns(address);
   
 
}
 
 
 
contract Testing is firstabstact, ICounter{
    uint256 public counting;
    function Count() external view override returns (uint256){
        return counting;
    }
    function Increment(int a, int b) external override{
        counting = counting + 1;
    }
 
    function testingmy() public pure returns (uint256){
        return 10;
}
 
function increment() public override returns(address){
    return msg.sender;
}
}