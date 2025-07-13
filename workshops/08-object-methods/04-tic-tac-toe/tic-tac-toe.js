/*
Define an object 'ticTacToe'.

Follow the test specs to create a 'board' property, 'move' method, and a 'clear'
method so you can play a game with your partner.

The 'board' property is a grid of arrays that represents the board, where each
cell is initiall null.

The 'move' method is a method that, given a character, rowNum, and colNum, adds
the character to the correct cell in the board.

The 'clear' method should reset the board to all nulls.

To make it easier to play, have your 'move' method console.log() the
board before the method returns the board.

*/


// YOUR CODE BELOW
const ticTacToe = {
    board: [[null, null, null], [null, null, null], [null, null, null]],
    move: function (symbol, rowNum, colNum) {
        if (this.board[rowNum][colNum] === null) {
            this.board[rowNum][colNum] = symbol;
        }
        return this.board;
    },
        
    clear: function () {
        for (let i = 0; i < 3; i++ ) {
            for (let j = 0; j < 3; j++) {
                this.board[i][j] = null;
            }
        }
        return this.board;
    }
}