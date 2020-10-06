/**
 * You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

The available operations are (in this order of preference):

1) addition
2) subtraction
3) multiplication
4) division
Notes:

All input data is valid
The number of numbers in the input string >= 3
For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
Integer division should be used
 */

function sayMeOperations(str) {
    console.log(str.split(' '))
    const convert = str.split(' ')
    let result = ''
    for (let i = 2; i < convert.length; i++) {
        console.log('EYE', convert[i])
        if (+convert[i] == +convert[i - 2] + +convert[i - 1]) {
            result += 'addition, '
            continue
        }
        if (+convert[i] == +convert[i - 2] - +convert[i - 1]) {
            result += 'subtraction, '
            continue
        }
        if (+convert[i] == +convert[i - 2] * +convert[i - 1]) {
            result += 'multiplication, '
            continue
        }
        result += 'division, '
        break
    }
    console.log('LENGTH', result.length - 2)
    console.log('RESULT', result)
    return result.substr(0, result.lengthm - 2)

}
console.log('FUNC', sayMeOperations(str))


//OR

function sayMeOperations(str) {
    let strNew = str.split(' ');
    let strEnd = [];
    for (let i = 2; i < strNew.length; i++) {
        if (+strNew[i - 2] + +strNew[i - 1] == strNew[i]) {
            strEnd.push('addition');
        } else if (strNew[i - 2] - strNew[i - 1] == strNew[i]) {
            strEnd.push('subtraction');
        } else if (strNew[i - 2] * strNew[i - 1] == strNew[i]) {
            strEnd.push('multiplication');
        } else {
            strEnd.push('division');
        }
    }
    return strEnd.join(', ');
}

//OR

function sayMeOperations(str) {
    let phrase = []
    const arr = str.split(' ')

    for (let i = 0; i < arr.length; i++) {
        let n0 = parseInt(arr[i])
        let n1 = parseInt(arr[i + 1])
        let n2 = parseInt(arr[i + 2])

        if (n2 || n2 === 0) {
            if (n0 + n1 === n2) { phrase.push('addition') }
            else if (n0 - n1 === n2) { phrase.push('subtraction') }
            else if (n0 * n1 === n2) { phrase.push('multiplication') }
            else { phrase.push('division') }
        }
    }
    console.log(phrase)
    return phrase.join(", ");
}