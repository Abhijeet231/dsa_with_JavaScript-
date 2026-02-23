/* MAX CONSECUTIVE Ones 

* Given a binary array nums, return the maximum number of consecutive 1's in the array.

*/

const findMaxConsecutiveOnes = (nums) => {

    let maxCount =0;
    let currentCount = 0;

    for(let i = 0; i<nums.length; i++) {
        if(nums[i] === 1 ) {
            currentCount ++
            maxCount = Math.max(maxCount, currentCount);
        }else if (nums[i] === 0) {
            currentCount = 0
        }
    }

    return maxCount

}