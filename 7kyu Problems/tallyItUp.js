/*
Description:
I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. Write a function that translates the numeric score into tally marks.
My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break (<br>) after each completed tally (5).
Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score.
*/

var scoreToTally = function (score) {
    let arr = [];
    while (score >= 5) {
        arr.push('e <br>')
        score -= 5
    }
    while (score >= 4) {
        arr.push('d')
        score -= 4
    }
    while (score >= 3) {
        arr.push('c')
        score -= 3
    }
    while (score >= 2) {
        arr.push('b')
        score -= 2
    }
    while (score >= 1) {
        arr.push('a')
        score -= 1
    }
    return arr.join(``)
}


// Best Practice
const scoreToTally = score => {
    let str = '';
    for (let i = score; 0 < i; i -= 5) {
        if (i >= 5) str += 'e <br>';
        if (i === 4) str += 'd';
        if (i === 3) str += 'c';
        if (i === 2) str += 'b';
        if (i === 1) str += 'a';
    }
    return str;
}

// Another way
function scoreToTally(score) {
    const dic = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e <br>' }
    let out = ''
    while (score) {
        if (score in dic) {
            out += dic[score]
            return out
        } else {
            out += dic[5]
            score -= 5
        }
    }
    return out
}