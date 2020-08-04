import * as pieces from './../pieces/Pieces';

export class Board {

    grid;

    constructor() {
        this.maxX = 8;
        this.maxY = 8;
        this.grid = Array(this.maxY).fill().map(() => Array(this.maxX).fill())
        this.putPieces();
    }

    forEachColumn(selector) {
        return this.grid.map((row, y) => row.map((column, x) => selector(column, x, y)))
    }

    putPieces() {

        this.initColumn(0, 0, pieces.whiteRook);
        this.initColumn(0, 1, pieces.whiteKnight);
        this.initColumn(0, 2, pieces.whiteBishop);
        this.initColumn(0, 3, pieces.whiteQueen);
        this.initColumn(0, 4, pieces.whiteKing);
        this.initColumn(0, 5, pieces.whiteBishop);
        this.initColumn(0, 6, pieces.whiteKnight);
        this.initColumn(0, 7, pieces.whiteRook);

        this.initColumn(1, 0, pieces.whitePawn);
        this.initColumn(1, 1, pieces.whitePawn);
        this.initColumn(1, 2, pieces.whitePawn);
        this.initColumn(1, 3, pieces.whitePawn);
        this.initColumn(1, 4, pieces.whitePawn);
        this.initColumn(1, 5, pieces.whitePawn);
        this.initColumn(1, 6, pieces.whitePawn);
        this.initColumn(1, 7, pieces.whitePawn);

        this.initColumn(2, 0);
        this.initColumn(2, 1);
        this.initColumn(2, 2);
        this.initColumn(2, 3);
        this.initColumn(2, 4);
        this.initColumn(2, 5);
        this.initColumn(2, 6);
        this.initColumn(2, 7);

        this.initColumn(3, 0);
        this.initColumn(3, 1);
        this.initColumn(3, 2);
        this.initColumn(3, 3);
        this.initColumn(3, 4);
        this.initColumn(3, 5);
        this.initColumn(3, 6);
        this.initColumn(3, 7);

        this.initColumn(4, 0);
        this.initColumn(4, 1);
        this.initColumn(4, 2);
        this.initColumn(4, 3);
        this.initColumn(4, 4);
        this.initColumn(4, 5);
        this.initColumn(4, 6);
        this.initColumn(4, 7);

        this.initColumn(5, 0);
        this.initColumn(5, 1);
        this.initColumn(5, 2);
        this.initColumn(5, 3);
        this.initColumn(5, 4);
        this.initColumn(5, 5);
        this.initColumn(5, 6);
        this.initColumn(5, 7);

        this.initColumn(6, 0, pieces.blackPawn);
        this.initColumn(6, 1, pieces.blackPawn);
        this.initColumn(6, 2, pieces.blackPawn);
        this.initColumn(6, 3, pieces.blackPawn);
        this.initColumn(6, 4, pieces.blackPawn);
        this.initColumn(6, 5, pieces.blackPawn);
        this.initColumn(6, 6, pieces.blackPawn);
        this.initColumn(6, 7, pieces.blackPawn);

        this.initColumn(7, 0, pieces.blackRook);
        this.initColumn(7, 1, pieces.blackKnight);
        this.initColumn(7, 2, pieces.blackBishop);
        this.initColumn(7, 3, pieces.blackQueen);
        this.initColumn(7, 4, pieces.blackKing);
        this.initColumn(7, 5, pieces.blackBishop);
        this.initColumn(7, 6, pieces.blackKnight);
        this.initColumn(7, 7, pieces.blackRook);
    }

    initColumn(y, x, piece = null) {
        const color = this.getColumnColor(x, y);
        const boardPiece = piece !== null ? new BoardPiece(this, piece) : null;
        this.grid[y][x] = new BoardColumn(color, boardPiece);
    }

    getColumnColor(x, y) {

        if (y % 2 === 0) {
            return x % 2 === 0 ? "light" : "dark";
        }

        return x % 2 === 0 ? "dark" : "light";
    }
}

class BoardColumn {
    piece;
    color;
    constructor(color, piece) {
        this.piece = piece;
        this.color = color;
    }
}

class BoardPiece {
    board;
    piece;
    constructor(board, piece) {
        this.board = board;
        this.piece = piece;
    }
}
