// Capitalize first letter of word
let str = "hi my name is abhijeet";

function cap(str){
    let arr = str.split(" ");
    
   for(let i = 0; i< arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
   }

   return arr.join(" ");
    
}

console.log(cap(str));