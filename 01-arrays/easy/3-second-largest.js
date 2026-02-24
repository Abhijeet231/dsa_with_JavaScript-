// Problem: Find the second largest number in a given array

const array = [122222,291,222,98,53,444,21,9999];

const findSecondLargest  = (arr) => {

    let first = -Infinity;
    let second = -Infinity;

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > first) {
            second = first;
            first = arr[i]
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i]
        }
    }
    console.log(`First Largest:${first}, Second Largest: ${second}`)
}

findSecondLargest(array)