/* PROBLEM STATEMENT

* Write a function that reverse a string. The input string is given as an array of characters S.

You must do this by modifying the input array in-place with 0(1) extra memory.

*/

let s = ['D',"O","G","E","S","H"];

let reverse = (arr) => {
    let length = arr.length;
    let halfLength = Math.floor(length/2);

    for(let i = 0; i<halfLength; i++){
        // Swaping arr[i] with arr[length-1-i]

        let temp = arr[i]; // Storing the temporary value

        arr[i] = arr[length-1-i];
        arr[length-1-i] = temp;
    }

    return arr;
}

console.log("This is the array:", reverse(s))
