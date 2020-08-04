import React, { Component } from 'react';
import './style.css';
import { Board } from '../../backend/board/Board';

export default class ChessGame extends Component {

    board = new Board();

    constructor(props) {
        super(props);
        this.state = {
            grid: this.board.forEachColumn((column, x, y) => this.getUIColumn(column, x, y))
        };
    }

    render() {

        const { grid } = this.state;

        return (
            <ChessBoard grid={grid} onClick={column => this.onClick(column)} />
        )
    }

    onClick(column) {
        alert(`[x: ${column.x}, y: ${column.y}]`);
    }

    getUIColumn(column, x, y) {
        var img = column.piece && column.piece.piece.image;
        var color = column.color;
        return { x, y, color, img };
    }
}

const ChessBoardColumn = (props) => {

    const { column, onClick } = props;

    const color = column.color === "light" ? "grid-light-column" : "grid-dark-column";

    return (
        <span>
            <button type="button" onClick={e => onClick(column)} className={color}>
                {column.img !== null && <img src={column.img} alt="" className="grid-image" />}
            </button>
        </span>
    )
}

const ChessBoardRow = (props) => {

    const { row, onClick } = props;

    return (
        <div>
            {
                row.map(column => <ChessBoardColumn column={column} onClick={onClick} />)
            }
        </div>
    )
}

const ChessBoard = (props) => {

    const { grid, onClick } = props;

    return (
        <div>
            {
                grid.map(row => <ChessBoardRow row={row} onClick={onClick} />)
            }
        </div>
    )
}