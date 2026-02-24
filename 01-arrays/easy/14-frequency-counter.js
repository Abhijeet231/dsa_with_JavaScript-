/* 
You are given an array `nums` consisting of positive integers.

Return the total frequencies of elements in `nums` such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.
*/

const countMaximumFrequencyCandies = function(nums) {
    let freq = {};
    let max = 0;
    let total = 0;

    // Build frequency map
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Find max and total
    for (let key in freq) {
        if (freq[key] > max) {
            max = freq[key];
            total = freq[key];
        } 
        else if (freq[key] === max) {
            total += freq[key];
        }
    }

    return total;
};