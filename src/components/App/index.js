import React, { Component } from 'react';
import './style.css'

const chessPieces = {
  blackPawn: {
    color: "black", type: "pawn", image: "/images/black_pawn.png"
  },
  blackRook: {
    color: "black", type: "rook", image: "/images/black_rook.png"
  },
  blackBishop: {
    color: "black", type: "bishop", image: "/images/black_bishop.png"
  },
  blackKnight: {
    color: "black", type: "knight", image: "/images/black_knight.png"
  },
  blackKing: {
    color: "black", type: "king", image: "/images/black_king.png"
  },
  blackQueen: {
    color: "black", type: "queen", image: "/images/black_queen.png"
  },
  whitePawn: {
    color: "white", type: "pawn", image: "/images/white_pawn.png"
  },
  whiteRook: {
    color: "white", type: "rook", image: "/images/white_rook.png"
  },
  whiteBishop: {
    color: "white", type: "bishop", image: "/images/white_bishop.png"
  },
  whiteKnight: {
    color: "white", type: "knight", image: "/images/white_knight.png"
  },
  whiteKing: {
    color: "white", type: "king", image: "/images/white_king.png"
  },
  whiteQueen: {
    color: "white", type: "queen", image: "/images/white_queen.png"
  }
}

const chessGrid = [
  [
    { color: "dark", piece: chessPieces.whiteRook },
    { color: "light", piece: chessPieces.whiteKnight },
    { color: "dark", piece: chessPieces.whiteBishop },
    { color: "light", piece: chessPieces.whiteQueen },
    { color: "dark", piece: chessPieces.whiteKing },
    { color: "light", piece: chessPieces.whiteBishop },
    { color: "dark", piece: chessPieces.whiteKnight },
    { color: "light", piece: chessPieces.whiteRook }
  ],
  [
    { color: "light", piece: chessPieces.whitePawn },
    { color: "dark", piece: chessPieces.whitePawn },
    { color: "light", piece: chessPieces.whitePawn },
    { color: "dark", piece: chessPieces.whitePawn },
    { color: "light", piece: chessPieces.whitePawn },
    { color: "dark", piece: chessPieces.whitePawn },
    { color: "light", piece: chessPieces.whitePawn },
    { color: "dark", piece: chessPieces.whitePawn }
  ],
  [
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null }
  ],
  [
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null }
  ],
  [
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null }
  ],
  [
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null },
    { color: "light", piece: null },
    { color: "dark", piece: null }
  ],
  [
    { color: "dark", piece: chessPieces.blackPawn },
    { color: "light", piece: chessPieces.blackPawn },
    { color: "dark", piece: chessPieces.blackPawn },
    { color: "light", piece: chessPieces.blackPawn },
    { color: "dark", piece: chessPieces.blackPawn },
    { color: "light", piece: chessPieces.blackPawn },
    { color: "dark", piece: chessPieces.blackPawn },
    { color: "light", piece: chessPieces.blackPawn }
  ],
  [
    { color: "light", piece: chessPieces.blackRook },
    { color: "dark", piece: chessPieces.blackKnight },
    { color: "light", piece: chessPieces.blackBishop },
    { color: "dark", piece: chessPieces.blackQueen },
    { color: "light", piece: chessPieces.blackKing },
    { color: "dark", piece: chessPieces.blackBishop },
    { color: "light", piece: chessPieces.blackKnight },
    { color: "dark", piece: chessPieces.blackRook }
  ],
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: chessGrid,
      selectedPosition: null,
      highlightSelectedPosition: false,
      colorToMove: "white",
      availableMovePositions: []
    }
  }
  render() {

    const { grid, colorToMove } = this.state;

    return (
      <div>
        <div className="text-center">
          <b>{`${colorToMove.toUpperCase()} to move`}</b>
        </div>
        <div>
          {
            grid.map((row, x) =>
              <div>
                {
                  row.map((column, y) =>
                    <span>
                      <button type="button" onClick={e => this.onClick({ x: x, y: y })} className={this.getColumnClassName(column, { x, y })}>
                        {column.piece !== null && <img src={column.piece.image} alt="" className="grid-image" />}
                      </button>
                    </span>
                  )
                }
              </div>
            )
          }
        </div>
      </div>)
  }

  getColumnClassName(column, position) {
    const { selectedPosition, highlightSelectedPosition, availableMovePositions } = this.state;

    if (selectedPosition !== null && selectedPosition.x === position.x && selectedPosition.y === position.y && highlightSelectedPosition) {
      return "grid-highlighed";
    }

    if (availableMovePositions.some(item => item.x === position.x && item.y === position.y)) {
      return "grid-highlighed";
    }

    return this.isLightColumn(column) ? "grid-light-column" : "grid-dark-column"
  }

  diagonalPositions(piece, position) {

    const positions = [];

    for (let x_index = position.x - 1, y_index = position.y - 1;
      x_index >= 0 && y_index >= 0;
      x_index--, y_index--) {

      const candidate = { x: x_index, y: y_index };

      const column = this.getColumnAt(candidate);

      if (column.piece === null) {
        positions.push(candidate);
        continue;
      }
      if (column.piece.color === piece.color) {
        break;
      }
      if (column.piece.color !== piece.color) {
        positions.push(candidate);
        break;
      }
    }

    for (let x_index = position.x - 1, y_index = position.y + 1;
      x_index >= 0 && y_index <= 7;
      x_index--, y_index++) {

      const candidate = { x: x_index, y: y_index };

      const column = this.getColumnAt(candidate);

      if (column.piece === null) {
        positions.push(candidate);
        continue;
      }
      if (column.piece.color === piece.color) {
        break;
      }
      if (column.piece.color !== piece.color) {
        positions.push(candidate);
        break;
      }

      // positions.push({ x: x_index, y: y_index })
    }

    for (let x_index = position.x + 1, y_index = position.y - 1;
      x_index <= 7 && y_index >= 0;
      x_index++, y_index--) {

      const candidate = { x: x_index, y: y_index };

      const column = this.getColumnAt(candidate);

      if (column.piece === null) {
        positions.push(candidate);
        continue;
      }
      if (column.piece.color === piece.color) {
        break;
      }
      if (column.piece.color !== piece.color) {
        positions.push(candidate);
        break;
      }
    }

    for (let x_index = position.x + 1, y_index = position.y + 1;
      x_index <= 7 && y_index <= 7;
      x_index++, y_index++) {

      const candidate = { x: x_index, y: y_index };

      const column = this.getColumnAt(candidate);

      if (column.piece === null) {
        positions.push(candidate);
        continue;
      }
      if (column.piece.color === piece.color) {
        break;
      }
      if (column.piece.color !== piece.color) {
        positions.push(candidate);
        break;
      }
    }

    return positions;
  }

  onClick(position) {

    const { selectedPosition, colorToMove } = this.state;

    if (selectedPosition === null) {

      const piece = this.getColumnAt(position).piece;

      let availableMovePositions = [];

      if (piece !== null && piece.color === colorToMove) {
        if (piece.type === "knight") {
          const a = { x: position.x + 2, y: position.y - 1 };
          const b = { x: position.x + 2, y: position.y + 1 };
          const c = { x: position.x - 2, y: position.y + 1 };
          const d = { x: position.x - 2, y: position.y - 1 };
          const e = { x: position.x - 1, y: position.y - 2 };
          const f = { x: position.x + 1, y: position.y - 2 };
          const g = { x: position.x - 1, y: position.y + 2 };
          const h = { x: position.x + 1, y: position.y + 2 };
          availableMovePositions.push(a, b, c, d, e, f, g, h);
          availableMovePositions = availableMovePositions.filter(available => {

            if (this.isPositionValid(available)) {

              const availablePositionColumn = this.getColumnAt(available);
              if (availablePositionColumn.piece === null) {
                return true;
              }
              return availablePositionColumn.piece !== null && availablePositionColumn.piece.color !== piece.color;
            }

            return false;
          })
        }

        if (piece.type === "bishop") {
          availableMovePositions = this.diagonalPositions(piece, position);
        }
      }

      this.setState({ selectedPosition: position, highlightSelectedPosition: piece !== null, availableMovePositions })
      return;
    }

    if (selectedPosition.x === position.x && selectedPosition.y === position.y) {
      return;
    }

    const selectedColumn = this.getColumnAt(selectedPosition);

    if (selectedColumn.piece === null) {
      this.setState({ selectedPosition: position })
      return;
    }

    if (selectedColumn.piece.color !== colorToMove) {
      this.setState({ selectedPosition: null });
      return;
    }

    const destinationColumn = this.getColumnAt(position);

    if (destinationColumn.piece !== null && destinationColumn.piece.color === selectedColumn.piece.color) {
      this.setState({ selectedPosition: position }) //TODO: null available moves
      return;
    }

    const updated = this.makeMove(selectedColumn, position);

    this.setState({ grid: updated, selectedPosition: null, colorToMove: this.toogleColorToMove(), availableMovePositions: [] });
  }

  toogleColorToMove() {
    const { colorToMove } = this.state;

    if (colorToMove === "white") {
      return "black";
    }

    return "white";
  }

  getColumnAt(coords) {

    const { grid } = this.state;

    return grid[coords.x][coords.y];
  }

  isPositionValid(position) {

    const { grid } = this.state;

    const { x, y } = position;

    if (x < 0 || y < 0) {

      return false;
    }

    return (grid.length - 1) >= x && (grid[x].length - 1) >= y;
  }

  makeMove(column, to) {

    const { grid } = this.state;

    //TODO: clone grid? row? column?

    grid[to.x][to.y].piece = column.piece;

    column.piece = null;

    return grid;
  }

  isLightColumn(column) {
    return column.color === "light";
  }
}