/** 
MERGE SORTED ARRAY

* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this , nums1 has a length of m+n, where the first m elements denote the elements that should be merged, and the last n elements are sort to 0 and should be ignored. 

nums2 has a length of n.

*/

let num1 = [2,3,19,0,0,0] // length of num1 is m+n but real elements are 3 so m = 3 here. 
let num2 = [1,3,6]

let m = num1.length; // m and n  is the count of real elements in the arrays  
let n = num2.length;

const mergeArr = (num1,num2, m,n) => {
    let n1Copy = num1.slice(0,m);
    let p1 = 0;
    let p2 =0;

    for(let i = 0; i< m+n ; i++ ){
        if((n1Copy[p1] < num2[p2] && p1 < m) || p2 >= n ) {
            num1[i] = n1Copy[p1]
            p1++
        }else {
            num1[i] = num2[p2]
            p2++
        }
    }
}

// Time Complexity - O(m+n)
// Space Complexity - O(m)


// Optimised way to solve this 

const mergeArrOpt = (num1,m, num2,n) => {

    let p1 = m -1; // last valid element in num1
    let p2 = n-1;  // last valid element in num2
    let i = m+n -1; // position to fill from back

    for(let i = m+n-1; i>=0; i++){
        if(p2<0) break;

        if(p1 >= 0 && num1[p1] > num2[p2]) {
            num1[i] = num1[p1];
            p1 --;
        }else {
            num1[i] = num2[p2];
            p2 --;
        }
    }
}