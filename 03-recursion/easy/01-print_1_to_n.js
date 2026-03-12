// Print 1 to n number using recursion

function print1toN(n){
    if(n === 0) return;

    print1toN(n-1);
    console.log(n);
}

print1toN(6)


// Just shift the console.log(n) to before the recursive case and it will print n to 1 number

