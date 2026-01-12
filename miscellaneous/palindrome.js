// Check Palindrome of a Given Number
let number = 1221;

const checkPalindrome = (num) => {
    num = Math.abs(num);
    let orgNum = num;
    let reverse = 0;

    while(num > 0) {
       let digit = num % 10; // get the last digt
       reverse = reverse * 10 + digit; // build reversed number
       num = Math.floor(num/10); // remove last digit

    }
 if(orgNum == reverse) {
    console.log("YOOOO HOOO this is a palindrom")
 }else{
    console.log("NO PALINDROME YET!!!")
 }
}

checkPalindrome(number)



