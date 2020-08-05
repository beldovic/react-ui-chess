import Piece from './Piece'
import PieceColor from './PieceColor'
import PieceType from './PieceType'

export default class Rook extends Piece {

    constructor(color: PieceColor, image: string) {
        super(color, PieceType.Rook, image);
    }
}