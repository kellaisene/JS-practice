// Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    let divisibleNumbers = []
    for(var i = 0; i <= numbers.length; i++){
      if(numbers[i] % divisor === 0) {
        divisibleNumbers.push(numbers[i])
    }
    }
    return divisibleNumbers;
  }