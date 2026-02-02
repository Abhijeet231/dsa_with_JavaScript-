// Given: an array with numbers and you need to count how many of them are palindrome

let arr = [123, 422, 121, 803, 111]

const isPalindrome = (num) => {
    num = Math.abs(num);
    let orgNum = num;
    let reverse = 0;

    while( num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num/10);
    };

    return orgNum === reverse;
};


const getPalindrome = (arr) => {
    const palindromes = [];
    let count = 0
    for( let num of arr) {
        if(isPalindrome(num)) {
            palindromes.push(num);
        }
    }

    return {
         count : palindromes.length,
         palindromes
         
    }
}

console.log(getPalindrome(arr))

// ---------------------------------------------------------------------------------------------------------------------------------

// Check Palindrome of array elements and find them 
let array = [123,121, 931, 111, 411, 88];

const checkPalindrome = (arr) => {
        
    // a function to check wheather a number is palindrome or not 
    const fun = (num) => {
        num = Math.abs(num);
        let orgNum = num;
        let reverse = 0;

        while(num > 0) {
            let digit = num % 10;
            reverse = reverse * 10 + digit;
            num = Math.floor(num/10);
        };

        if(reverse === orgNum) return orgNum
    }; 

    let newArr = []

     for(let i = 0 ; i< arr.length; i++) {
         fun(arr[i]) && newArr.push(arr[i]) 
     }

     return newArr;
}

console.log(checkPalindrome(array))