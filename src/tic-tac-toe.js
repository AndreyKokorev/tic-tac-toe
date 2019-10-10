class TicTacToe {
    constructor() {
        this._player = 'x';
        this._winner = null;
        this._draw = false;
        this._turnsCounter = 0;
        this._gameField = [
            [],
            [],
            []
        ];
        this._winnerCombinations = [
            [
                [1, 0, 0],
                [1, 0, 0],
                [1, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [0, 0, 1],
                [0, 0, 1],
                [0, 0, 1]
            ],
            [
                [1, 1, 1],
                [0, 0, 0],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 1]
            ],
            [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ],
            [
                [0, 0, 1],
                [0, 1, 0],
                [1, 0, 0]
            ],


        ]
    }

    getCurrentPlayerSymbol() {
        return this._player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this._gameField[rowIndex][columnIndex]) {
            this._gameField[rowIndex][columnIndex] = this._player;
        } else {
            return false;
        }
        if (this.getWinner()) {
            this._winner = this._player;
        }
        if (++this._turnsCounter === 9) {
            this._draw = true;
        }
        if (this._player === 'x') {
            this._player = 'o';
        } else {
            this._player = 'x';
        }
    }

    isFinished() {
        return Boolean(this._winner) || this._draw;
    }

    getWinner() {
        let hit;
        for (let element of this._winnerCombinations) {
            hit = 0;
            for (let i = 0; i < element.length; i++) {
                for (let j = 0; j < element[i].length; j++) {
                    if (element[i][j] === 1 && this._gameField[i][j] === this._player) {
                        hit++;
                    }
                }
            }
            if (hit === 3) {
                return this._player;
            }          
        }
        return this._winner;
    }

    noMoreTurns() {
        if (this._draw) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && !this._winner) {
            return true;
        } else {
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        if (this._gameField[rowIndex][colIndex]) {
            return this._gameField[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;