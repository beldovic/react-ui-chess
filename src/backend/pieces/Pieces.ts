import Rook from './Rook'
import Knight from './Knight'
import Bishop from './Bishop'
import King from './King'
import Queen from './Queen'
import Pawn from './Pawn'
import PieceColor from './PieceColor'

export const blackPawn = new Pawn(PieceColor.Black, "/images/black_pawn.png");
export const blackRook = new Rook(PieceColor.Black, "/images/black_rook.png");
export const blackBishop = new Bishop(PieceColor.Black, "/images/black_bishop.png");
export const blackKnight = new Knight(PieceColor.Black, "/images/black_knight.png");
export const blackQueen = new Queen(PieceColor.Black, "/images/black_queen.png");
export const blackKing = new King(PieceColor.Black, "/images/black_king.png");
export const whitePawn = new Pawn(PieceColor.White, "/images/white_pawn.png");
export const whiteRook = new Rook(PieceColor.White, "/images/white_rook.png");
export const whiteBishop = new Bishop(PieceColor.White, "/images/white_bishop.png");
export const whiteKnight = new Knight(PieceColor.White, "/images/white_knight.png");
export const whiteQueen = new Queen(PieceColor.White, "/images/white_queen.png");
export const whiteKing = new King(PieceColor.White, "/images/white_king.png");