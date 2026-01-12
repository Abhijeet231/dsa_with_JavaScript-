// Problem : Find the largest number in an array 

const array = [12,291,222,98,53,444,21,9];

const findLargest = (arr) => {
    let num = -Infinity;

    for(let i =0; i< arr.length; i++) {
        if(arr[i] > num) {
            num = arr[i]
        }
    };

    return num;
}

console.log(findLargest(array))