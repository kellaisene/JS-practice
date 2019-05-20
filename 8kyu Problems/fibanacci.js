// fibonacci sequence even numbers
const solution = (max) => {
    // Type your solution here 
    // loop through 
    var a = 1
    var b = 2 
    var sum = 0;
    while (a < max){
        if(a % 2 === 0) {
            sum += a
        }
        var c = a + b;
        a = b
        b = c;
    }
    return c
};


const solution = (arr) => {
    // Type your solution here 
    // without helper methods we should use a loop
    var largestNumber = 0;
    for(var i = 0; i < arr.length; i++){// Loop through the given array
        if (largestNumber < arr[i]){
            var largestNumber = arr[i]
        }
    }
    return largestNumber;
};