// function fizzbuzz() {
//   for(var i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0 ) {
//       console.log(i + '.' + ' Fizz Buzz')
//     } else if ( i % 3 === 0 ){
//       console.log(i + '.' + ' Fizz')
//     } else if ( i % 5 === 0 ){
//       console.log(i + '.' + ' Buzz')
//     } else {
//       console.log(i + '.')
//     }
//   }
// }

// console.clear()
// fizzbuzz()

// BETTER ANSWER //

function fizzbuzz2() {
  for(var i = 1; i <= 100; i++){
    let output = i + '.'

    if(i % 3 === 0){
      output += ' Fizz'
    }
    if(i % 5 === 0){
      output += ' Buzz'
    }
    console.log(output)
  }
}

console.clear()
fizzbuzz2()