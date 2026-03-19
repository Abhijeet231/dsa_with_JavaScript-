// Find the Longest word 
let str = "hi my name is ABhijeet";

function findLongestWord (str) {
    let words = str.split(" ");

    let longest = 0;
    let longestWord = "";

    for(let word of words) {
        if(word.length > longest) {
            longest = word.length
            longestWord = word
        }
    }
    
    return {longest, longestWord};
}
console.log(findLongestWord(str))