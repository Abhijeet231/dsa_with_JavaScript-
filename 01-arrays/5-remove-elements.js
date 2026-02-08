/* PROBLEM STATEMENT

* Given an integer array nums and an integer val, remove all occurences of val in nums in-place. 

The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. 

Consider the number of elements in nums which are not equal to val be K, to get accepted you need to do the following thing:

* Change the array nums such that the first K elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

* Return K.

*/


let nums = [1,2,52,3,32,4,1,2,82,1];
let val = 2;

let x = 0;

for(let i = 0; i< nums.length; i++){

    if(nums[i] !== val){
        nums[x] = nums[i];
        x = x+1; // X represents the next free position here


    } 
}

/* 

* Time Complexity - 0(n)
* Space Complexity - 0(1)

*/

console.log(nums); // numbers of valid elements
console.log(x); // first x elements are correct


