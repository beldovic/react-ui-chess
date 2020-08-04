import Piece from './Piece'

export default class Pawn extends Piece{
    constructor(color, image){
        super(color, "pawn", image);
    }
}