import Piece from './Piece'
import PieceColor from './PieceColor';
import PieceType from './PieceType';

export default class Pawn extends Piece {
    constructor(color: PieceColor, image: string) {
        super(color, PieceType.Pawn, image);
    }
}