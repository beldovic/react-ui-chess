import PieceColor from "./PieceColor";
import PieceType from "./PieceType";

export default class Piece {
    color: PieceColor;
    type: PieceType;
    image: string;
    constructor(color: PieceColor, type: PieceType, image: string) {
        this.color = color;
        this.type = type;
        this.image = image;
    }
}