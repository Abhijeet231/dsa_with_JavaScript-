/**
 
* Given an SORTED NON-DECREASING array. 

* Remove the duplicates in-place such that each unique element appears only once.

* Consider the number of unique elements of array to be K

* Change the array such that the first K elements of array conatin the unique elements in order . THe remaining elements of the array are not important.

*/


// NON-DECREASING 
let arrOne = [1,2,3,3,3,3,3,3,4,4,5,6,6,6];

const newArr = (arr) => {

    let x = 0;  // This method is called two pointer method
                // where to compare two elemtns of an array by comparing them accorging to the loop

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > arr[x]) {
            x = x+1;
            arr[x] = arr[i]
        }
    }
    return arr
}

console.log(newArr(arrOne))

/*****
 
 * Time Complexity → O(n)
 * Space Complexity → O(1)

 */


//***************************************************************************************************************************************************************** */


let arrTwo = [9,9,9,8,6,6,6,3,3,2,1,1,1] // sorted non increasing array

const removeDuplicateTwo = (arr) => {
    let x = 0;

    for (let i = 0; i<arr.length; i++) {
        if(arr[i] < arr[x]) {
            x++
            arr[x] = arr[i]
        }
    }

    return arr;
}


// You can try thsi with  Sorted Increasing and Sorted Decreasing by yourself.

// Feel free to report any bugs or mistakes. 