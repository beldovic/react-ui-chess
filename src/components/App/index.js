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
        selectedPosition: null
      }
    }
    render() {
  
      const { grid } = this.state;
  
      return (
        <div>
          {
            grid.map((row, x) =>
              <div>
                {
                  row.map((column, y) =>
                    <span>
                      <button type="button" onClick={e => this.onClick({ x: x, y: y })} className={this.isLightColumn(column) ? "grid-light-column" : "grid-dark-column"}>
                        {column.piece !== null && <img src={column.piece.image} alt="" className="grid-image" />}
                      </button>
                    </span>
                  )
                }
              </div>
            )
          }
        </div>)
    }
  
    onClick(position) {
  
      if (this.isPieceSelected()) {
        const updated = this.moveCurrentPiece(position);
        this.setState({ grid: updated, selectedPosition: null });
        return;
      }
  
      this.setState({ selectedPosition: position })
    }
  
    isPieceSelected() {
      const { selectedPosition, grid } = this.state;
  
      if (selectedPosition === null) {
        return false;
      }
  
      return grid[selectedPosition.x][selectedPosition.y].piece !== null;
    }
  
    moveCurrentPiece(to) {
  
      const { grid, selectedPosition } = this.state;
  
      //we're trying to move the piece to the current location, this is not a 'move' the code handling this should not be here, MOVE!
      if (selectedPosition.x === to.x && selectedPosition.y === to.y) {
        return grid;
      }
  
      const current = grid[selectedPosition.x][selectedPosition.y];
  
      grid[to.x][to.y].piece = current.piece;
  
      current.piece = null;
  
      return grid;
    }
  
    isLightColumn(column) {
      return column.color === "light";
    }
  }