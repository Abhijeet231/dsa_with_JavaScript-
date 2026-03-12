// find the sum of all elements in an given array

let arr = [3,1,5,12];


function sum ( arr, x){

    if(x <0) {
        return 0
    };

    return  arr[x]+ sum(arr, x-1);
}

console.log(sum(  arr, arr.length-1))