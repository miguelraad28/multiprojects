import Pawn from './Classes/Pawn';
import Rook from './Classes/Rook';
import Queen from './Classes/Queen';
import King from './Classes/King';
import Knight from './Classes/Knight';
import Bishop from './Classes/Bishop';

const whitePawn = new Pawn("white")
const blackPawn = new Pawn("black")

const whiteRook = new Rook("white")
const blackRook = new Rook("black")

const whiteKnight = new Knight("white")
const blackKnight = new Knight("black")

const whiteBishop = new Bishop("white")
const blackBishop = new Bishop("black")

const whiteQueen = new Queen("white")
const blackQueen = new Queen("black")

const whiteKing = new King("white")
const blackKing = new King("black")

export { whitePawn, whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, blackPawn, blackRook, blackKnight, blackBishop, blackQueen, blackKing, }