/** 
 * If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

//My solution
function isSolved(board) {
    // TODO: Check if the board is solved!
    //check for wins
    for (let i = 0; i <= 2; i++) {
        //check vertical win
        if (board[0][i] == board[1] && board[0][i] == board[2][i] && board[0][i] !== 0) {
            return board[0][i]
        }
        //check horizontal win
        if (board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] !== 0) {
            return board[i][0]
        }
    }
    //check diagaonal
    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] !== 0) {
        return board[0][0]
    }
    //other diagonal
    if (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0] !== 0) {
        return board[2][0]
    }
    //check for unsolved board
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            console.log(i, j)
            if (board[i][j] === 0) {
                return -1
            }
        }
    }
    return 0
}


//Best example solutions

const horizontal = (player) => (board) =>
    board.some(row => row.every(spot => spot == player))

const vertical = (player) => (board) =>
    board.some((row, i) => board.every(row => row[i] == player))

const diagonals = (player) => (board) =>
    board.every((row, i) => row[i] == player) || board.every((row, i) => row[3 - 1 - i] == player)

const player = (number) => ({
    wins: (board) => [horizontal, vertical, diagonals].some(full => full(number)(board))
})

const unfinished = (board) =>
    board.some(row => row.some(spot => !spot))

const DRAW = 0


const isSolved = (board) => {
    switch (true) {
        case player(1).wins(board):
            return 1

        case player(2).wins(board):
            return 2

        case unfinished(board):
            return -1

        default:
            return DRAW
    }
}

//OR

function isSolved(board) {
    board = board.join('-').replace(/,/g, '');
    if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if (/0/.test(board)) return -1;
    return 0;
}