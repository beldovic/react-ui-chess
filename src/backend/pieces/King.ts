import Piece from './Piece'
import PieceColor from './PieceColor';
import PieceType from './PieceType';

export default class King extends Piece {
    constructor(color: PieceColor, image: string) {
        super(color, PieceType.King, image);
    }
}