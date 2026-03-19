// Check palindrom in strings
let str = "madam";

function palindrome(str) {
  let rev = str.split("").reverse().join("");

  return rev === str;
}

 // console.log(palindrome(str));


// Given an array of string, you have to check how many words are palindrome. 

let arrStr = ["cat", 'mom', "biscuit", "ctc"];

function findWords (arr) {
    let count = 0;
    let result = [];

    for(let i = 0; i<arr.length; i++) {
        let rev = arr[i].split("").reverse().join("");
        if(rev === arr[i]) {
            count++
            result.push(arr[i])
        }
    }

    return {count, result}

}

console.log(findWords(arrStr))