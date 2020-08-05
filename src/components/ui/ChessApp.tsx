import React, { Component } from 'react';
import './style.css';
import * as backend from '../../backend/board/Board';

export interface IChessAppState {
    grid: ChessBoardColumnModel[][];
}

export class ChessApp extends Component<{}, IChessAppState> {

    board = new backend.Board();

    constructor(props: any) {
        super(props);
        this.state = {
            grid: this.board.forEachColumn((column, x, y) => this.getUIColumn(column, x, y))
        };
    }

    render(): JSX.Element {

        const { grid } = this.state;

        return (
            <ChessBoard grid={grid} onClick={column => this.onClick(column)} />
        )
    }

    onClick(column: ChessBoardColumnModel) {
        alert(`[x: ${column.x}, y: ${column.y}]`);
    }

    getUIColumn(column: backend.BoardColumn, x: number, y: number): ChessBoardColumnModel {
        const img = column.piece && column.piece.piece.image;
        const color: backend.BoardColumnColor = column.color;
        return new ChessBoardColumnModel(x, y, color === backend.BoardColumnColor.Light, img);
    }
}

interface IChessBoardColumnProps {
    column: ChessBoardColumnModel;
    onClick: (arg: ChessBoardColumnModel) => void;
}

const ChessBoardColumn = (props: IChessBoardColumnProps) => {

    const { column, onClick } = props;

    const color = column.isLight ? "grid-light-column" : "grid-dark-column";

    return (
        <span>
            <button type="button" onClick={e => onClick(column)} className={color}>
                {column.img !== null && <img src={column.img} alt="" className="grid-image" />}
            </button>
        </span>
    )
}

interface IChessBoardRowProps {
    row: ChessBoardColumnModel[];
    onClick: (arg: ChessBoardColumnModel) => void;
}

const ChessBoardRow = (props: IChessBoardRowProps) => {

    const { row, onClick } = props;

    return (
        <div>
            {
                row.map(column => <ChessBoardColumn column={column} onClick={onClick} />)
            }
        </div>
    )
}

interface IChessBoardProps {
    grid: ChessBoardColumnModel[][];
    onClick: (arg: ChessBoardColumnModel) => void;
}

const ChessBoard = (props: IChessBoardProps) => {

    const { grid, onClick } = props;

    return (
        <div>
            {
                grid.map(row => <ChessBoardRow row={row} onClick={onClick} />)
            }
        </div>
    )
}

class ChessBoardColumnModel {
    x: number;
    y: number;
    img: string | null;
    isLight: boolean

    constructor(x: number, y: number, isLight: boolean, img: string | null) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.isLight = isLight;
    }
}
