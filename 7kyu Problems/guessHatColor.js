//Four men, a, b, c and d are standing in a line, one behind another.

// There's a wall between the first three people (a, b and c) and the last one (d).

// The men a, b and c are lined up in order of height, so that:

// person a can see the backs of b and c
// person b can see the back of c
// person c can see just the wall
// There are 4 hats, 2 black and 2 white. Each person is given a hat. None of them can see their own hat, but person a can see the hats of b and c, while person b can see the hat of person c. Neither c nor d can see any hats.

// Once a person figures out the color of their hat, they shout it.

// Your task is to return the person who will guess their hat first. You can assume that they will speak only when they reach a correct conclusion.

// Input/Output
// [input] string a
// a's hat color ("white" or "black").

// [input] string b
// b's hat color ("white" or "black").

// [input] string c
// c's hat color ("white" or "black").

// [input] string d
// d's hat color ("white" or "black").

// [output] an integer
// The person to guess his hat's color first, 1 for a, 2 for b, 3 for c and 4 for d.

function guessHatColor(a, b, c, d) {
    return b === c ? 1 : 2;
}


function guessHatColor(a, b, c, d) {
    // The goal is return the person who will guess their hat first
    // Given: they will not speak unless it is correct
    // No one can guess number 4, and number 4 cannot guess someone else's hat
    // Only person 1 and 2 can see other people's hats
    // They will not share other's hat colors
    if (b === c) { // if person 2 and 3 are wearing the same color, we know that 1 will get it right first because the know there are only 2 of each color
        return 1
    } else { // if 2 and 3 are different colors, person 1 does not speak. But 2 will know that their color is the opposite of the person in front of him
        return 2
    }
}