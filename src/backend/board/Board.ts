import * as pieces from '../pieces/Pieces';
import Piece from '../pieces/Piece';

export class Board {

    grid: BoardColumn[][];
    maxX: number;
    maxY: number;

    constructor() {
        this.maxX = 8;
        this.maxY = 8;
        this.grid = Array(this.maxY).fill(null).map(() => Array(this.maxX).fill(null))
        this.putPieces();
    }

    forEachColumn<T>(selector: (c: BoardColumn, x: number, y: number) => T): T[][] {
        return this.grid.map((row, y) => row.map((column, x) => selector(column, x, y)))
    }

    putPieces(): void {

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

    initColumn(y: number, x: number, piece?: Piece): void {
        const color = this.getColumnColor(x, y);
        const boardPiece = piece != null ? new BoardPiece(this, piece) : null;
        this.grid[y][x] = new BoardColumn(color, boardPiece);
    }

    getColumnColor(x: number, y: number): BoardColumnColor {

        if (y % 2 === 0) {
            return x % 2 === 0 ? BoardColumnColor.Light : BoardColumnColor.Dark;
        }

        return x % 2 === 0 ? BoardColumnColor.Dark : BoardColumnColor.Light;
    }
}

export class BoardColumn {
    piece: BoardPiece | null;
    color: BoardColumnColor;
    constructor(color: BoardColumnColor, piece: BoardPiece | null) {
        this.piece = piece;
        this.color = color;
    }
}

export enum BoardColumnColor {
    Light, Dark
}

export class BoardPiece {
    board: Board;
    piece: Piece;
    constructor(board: Board, piece: Piece) {
        this.board = board;
        this.piece = piece;
    }
}
