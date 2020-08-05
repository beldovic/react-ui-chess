import Piece from './Piece'
import PieceColor from './PieceColor'
import PieceType from './PieceType'

export default class Queen extends Piece {
    constructor(color: PieceColor, image: string) {
        super(color, PieceType.Queen, image);
    }
}