// Remove Duplicate Characters from a String
let str = "aabcddde";

// Approach -1 (using Loops & includes)
function removeDuplicate(str){
    let result = "";

    for(let char of str) {
        if(!result.includes(char)){
            result += char;
        }
    }

    return result;
}

// Approach -2 (using Object / HashMap)

function removeDuplicate2 (str) {
    let seen = {};
    let result = "";

    for(let char of str) {
        if(!seen[char]){
            seen[char] = true;
            result += char;
        }
    }

    return result;
}