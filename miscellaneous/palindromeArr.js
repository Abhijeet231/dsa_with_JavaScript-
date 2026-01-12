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