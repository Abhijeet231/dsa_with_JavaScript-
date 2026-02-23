/* MISSING NUMBERS

* Given an array nums containing n distinct numbers in the range [0,n], return the only number in the range that is missing from the array.

*/

const findMissing = (nums) => {

    let n = nums.length;


  for(let i = 0; i<= n; i++) {
    if(!nums.includes(i)) {
       return i
    }
  }




}