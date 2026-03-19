// Remvoe first non-repeating characters from a string

let str = "aabbcddee";

// HashMap Approach
function firstNonRepeating (str) {
    let frq = {};

    for(let char of str) {
        if(!frq[char]) {
            frq[char] = 1;
        }else{
            frq[char]++
        }
    }
   
    // find first non-repating 
    for(let char of str){
        if(frq[char] === 1){
            return char;
        }
    }

    return null; 
}

console.log(firstNonRepeating(str));

// in case you have to return all non-repeating characters, just crewat an Array and push the "char"..