import { React, useEffect, useState } from "react"
import './App.css';
import Chessboard from "./Chess/Chessboard";
import { FaHandPointer, FaCat, FaFistRaised, FaPlayCircle } from "react-icons/fa"
import { whitePawn, whiteRook, whiteBishop, whiteKnight, whiteQueen, whiteKing, blackPawn, blackBishop, blackKing, blackKnight, blackQueen, blackRook } from "./Chess/Pieces"
function App() {
  const [blackEatenPieces, setBlackEatenPieces] = useState([]);
  const [whiteEatenPieces, setWhiteEatenPieces] = useState([]);

  const [turn, setTurn] = useState("white");
  const [selectedPiece, setSelectedPiece] = useState(false);
  const [gameOver, setGameOver] = useState({ status: false, winner: false });
  const [mainChessboard, setMainChessboard] = useState([
    [{ blockIndex: 0, rowIndex: 0, block: "A8", piece: blackRook }, { blockIndex: 1, rowIndex: 0, block: "B8", piece: blackKnight }, { blockIndex: 2, rowIndex: 0, block: "C8", piece: blackBishop }, { blockIndex: 3, rowIndex: 0, block: "D8", piece: blackQueen }, { blockIndex: 4, rowIndex: 0, block: "E8", piece: blackKing }, { blockIndex: 5, rowIndex: 0, block: "F8", piece: blackBishop }, { blockIndex: 6, rowIndex: 0, block: "G8", piece: blackKnight }, { blockIndex: 7, rowIndex: 0, block: "H8", piece: blackRook }],
    [{ blockIndex: 0, rowIndex: 1, block: "A7", piece: blackPawn }, { blockIndex: 1, rowIndex: 1, block: "B7", piece: blackPawn }, { blockIndex: 2, rowIndex: 1, block: "C7", piece: blackPawn }, { blockIndex: 3, rowIndex: 1, block: "D7", piece: blackPawn }, { blockIndex: 4, rowIndex: 1, block: "E7", piece: blackPawn }, { blockIndex: 5, rowIndex: 1, block: "F7", piece: blackPawn }, { blockIndex: 6, rowIndex: 1, block: "G7", piece: blackPawn }, { blockIndex: 7, rowIndex: 1, block: "H7", piece: blackPawn }],
    [{ blockIndex: 0, rowIndex: 2, block: "A6", piece: false }, { blockIndex: 1, rowIndex: 2, block: "B6", piece: false }, { blockIndex: 2, rowIndex: 2, block: "C6", piece: false }, { blockIndex: 3, rowIndex: 2, block: "D6", piece: false }, { blockIndex: 4, rowIndex: 2, block: "E6", piece: false }, { blockIndex: 5, rowIndex: 2, block: "F6", piece: false }, { blockIndex: 6, rowIndex: 2, block: "G6", piece: false }, { blockIndex: 7, rowIndex: 2, block: "H6", piece: false },],
    [{ blockIndex: 0, rowIndex: 3, block: "A5", piece: false }, { blockIndex: 1, rowIndex: 3, block: "B5", piece: false }, { blockIndex: 2, rowIndex: 3, block: "C5", piece: false }, { blockIndex: 3, rowIndex: 3, block: "D5", piece: false }, { blockIndex: 4, rowIndex: 3, block: "E5", piece: false }, { blockIndex: 5, rowIndex: 3, block: "F5", piece: false }, { blockIndex: 6, rowIndex: 3, block: "G5", piece: false }, { blockIndex: 7, rowIndex: 3, block: "H5", piece: false },],
    [{ blockIndex: 0, rowIndex: 4, block: "A4", piece: false }, { blockIndex: 1, rowIndex: 4, block: "B4", piece: false }, { blockIndex: 2, rowIndex: 4, block: "C4", piece: false }, { blockIndex: 3, rowIndex: 4, block: "D4", piece: false }, { blockIndex: 4, rowIndex: 4, block: "E4", piece: false }, { blockIndex: 5, rowIndex: 4, block: "F4", piece: false }, { blockIndex: 6, rowIndex: 4, block: "G4", piece: false }, { blockIndex: 7, rowIndex: 4, block: "H4", piece: false },],
    [{ blockIndex: 0, rowIndex: 5, block: "A3", piece: false }, { blockIndex: 1, rowIndex: 5, block: "B3", piece: false }, { blockIndex: 2, rowIndex: 5, block: "C3", piece: false }, { blockIndex: 3, rowIndex: 5, block: "D3", piece: false }, { blockIndex: 4, rowIndex: 5, block: "E3", piece: false }, { blockIndex: 5, rowIndex: 5, block: "F3", piece: false }, { blockIndex: 6, rowIndex: 5, block: "G3", piece: false }, { blockIndex: 7, rowIndex: 5, block: "H3", piece: false },],
    [{ blockIndex: 0, rowIndex: 6, block: "A2", piece: whitePawn }, { blockIndex: 1, rowIndex: 6, block: "B2", piece: whitePawn }, { blockIndex: 2, rowIndex: 6, block: "C2", piece: whitePawn }, { blockIndex: 3, rowIndex: 6, block: "D2", piece: whitePawn }, { blockIndex: 4, rowIndex: 6, block: "E2", piece: whitePawn }, { blockIndex: 5, rowIndex: 6, block: "F2", piece: whitePawn }, { blockIndex: 6, rowIndex: 6, block: "G2", piece: whitePawn }, { blockIndex: 7, rowIndex: 6, block: "H2", piece: whitePawn }],
    [{ blockIndex: 0, rowIndex: 7, block: "A1", piece: whiteRook }, { blockIndex: 1, rowIndex: 7, block: "B1", piece: whiteKnight }, { blockIndex: 2, rowIndex: 7, block: "C1", piece: whiteBishop }, { blockIndex: 3, rowIndex: 7, block: "D1", piece: whiteQueen }, { blockIndex: 4, rowIndex: 7, block: "E1", piece: whiteKing }, { blockIndex: 5, rowIndex: 7, block: "F1", piece: whiteBishop }, { blockIndex: 6, rowIndex: 7, block: "G1", piece: whiteKnight }, { blockIndex: 7, rowIndex: 7, block: "H1", piece: whiteRook }],
  ]);
  const [chessboard, setChessboard] = useState(
    [
      [{ blockIndex: 0, rowIndex: 0, block: "A8", piece: blackRook }, { blockIndex: 1, rowIndex: 0, block: "B8", piece: blackKnight }, { blockIndex: 2, rowIndex: 0, block: "C8", piece: blackBishop }, { blockIndex: 3, rowIndex: 0, block: "D8", piece: blackQueen }, { blockIndex: 4, rowIndex: 0, block: "E8", piece: blackKing }, { blockIndex: 5, rowIndex: 0, block: "F8", piece: blackBishop }, { blockIndex: 6, rowIndex: 0, block: "G8", piece: blackKnight }, { blockIndex: 7, rowIndex: 0, block: "H8", piece: blackRook }],
      [{ blockIndex: 0, rowIndex: 1, block: "A7", piece: blackPawn }, { blockIndex: 1, rowIndex: 1, block: "B7", piece: blackPawn }, { blockIndex: 2, rowIndex: 1, block: "C7", piece: blackPawn }, { blockIndex: 3, rowIndex: 1, block: "D7", piece: blackPawn }, { blockIndex: 4, rowIndex: 1, block: "E7", piece: blackPawn }, { blockIndex: 5, rowIndex: 1, block: "F7", piece: blackPawn }, { blockIndex: 6, rowIndex: 1, block: "G7", piece: blackPawn }, { blockIndex: 7, rowIndex: 1, block: "H7", piece: blackPawn }],
      [{ blockIndex: 0, rowIndex: 2, block: "A6", piece: false }, { blockIndex: 1, rowIndex: 2, block: "B6", piece: false }, { blockIndex: 2, rowIndex: 2, block: "C6", piece: false }, { blockIndex: 3, rowIndex: 2, block: "D6", piece: false }, { blockIndex: 4, rowIndex: 2, block: "E6", piece: false }, { blockIndex: 5, rowIndex: 2, block: "F6", piece: false }, { blockIndex: 6, rowIndex: 2, block: "G6", piece: false }, { blockIndex: 7, rowIndex: 2, block: "H6", piece: false },],
      [{ blockIndex: 0, rowIndex: 3, block: "A5", piece: false }, { blockIndex: 1, rowIndex: 3, block: "B5", piece: false }, { blockIndex: 2, rowIndex: 3, block: "C5", piece: false }, { blockIndex: 3, rowIndex: 3, block: "D5", piece: false }, { blockIndex: 4, rowIndex: 3, block: "E5", piece: false }, { blockIndex: 5, rowIndex: 3, block: "F5", piece: false }, { blockIndex: 6, rowIndex: 3, block: "G5", piece: false }, { blockIndex: 7, rowIndex: 3, block: "H5", piece: false },],
      [{ blockIndex: 0, rowIndex: 4, block: "A4", piece: false }, { blockIndex: 1, rowIndex: 4, block: "B4", piece: false }, { blockIndex: 2, rowIndex: 4, block: "C4", piece: false }, { blockIndex: 3, rowIndex: 4, block: "D4", piece: false }, { blockIndex: 4, rowIndex: 4, block: "E4", piece: false }, { blockIndex: 5, rowIndex: 4, block: "F4", piece: false }, { blockIndex: 6, rowIndex: 4, block: "G4", piece: false }, { blockIndex: 7, rowIndex: 4, block: "H4", piece: false },],
      [{ blockIndex: 0, rowIndex: 5, block: "A3", piece: false }, { blockIndex: 1, rowIndex: 5, block: "B3", piece: false }, { blockIndex: 2, rowIndex: 5, block: "C3", piece: false }, { blockIndex: 3, rowIndex: 5, block: "D3", piece: false }, { blockIndex: 4, rowIndex: 5, block: "E3", piece: false }, { blockIndex: 5, rowIndex: 5, block: "F3", piece: false }, { blockIndex: 6, rowIndex: 5, block: "G3", piece: false }, { blockIndex: 7, rowIndex: 5, block: "H3", piece: false },],
      [{ blockIndex: 0, rowIndex: 6, block: "A2", piece: whitePawn }, { blockIndex: 1, rowIndex: 6, block: "B2", piece: whitePawn }, { blockIndex: 2, rowIndex: 6, block: "C2", piece: whitePawn }, { blockIndex: 3, rowIndex: 6, block: "D2", piece: whitePawn }, { blockIndex: 4, rowIndex: 6, block: "E2", piece: whitePawn }, { blockIndex: 5, rowIndex: 6, block: "F2", piece: whitePawn }, { blockIndex: 6, rowIndex: 6, block: "G2", piece: whitePawn }, { blockIndex: 7, rowIndex: 6, block: "H2", piece: whitePawn }],
      [{ blockIndex: 0, rowIndex: 7, block: "A1", piece: whiteRook }, { blockIndex: 1, rowIndex: 7, block: "B1", piece: whiteKnight }, { blockIndex: 2, rowIndex: 7, block: "C1", piece: whiteBishop }, { blockIndex: 3, rowIndex: 7, block: "D1", piece: whiteQueen }, { blockIndex: 4, rowIndex: 7, block: "E1", piece: whiteKing }, { blockIndex: 5, rowIndex: 7, block: "F1", piece: whiteBishop }, { blockIndex: 6, rowIndex: 7, block: "G1", piece: whiteKnight }, { blockIndex: 7, rowIndex: 7, block: "H1", piece: whiteRook }],
    ]
  );
  const retryGame = () => {
    setChessboard(mainChessboard)
    setBlackEatenPieces([])
    setWhiteEatenPieces([])
    setTurn("white")
    setGameOver({status: false, winner: false})
  }
  return (
    <div className="chessboardContainer">
      {gameOver.status ?
        <div className="gameOverModalContainer">
          <div className="gameOverModal">

            <span><FaCat /> ¡GAME OVER! <FaFistRaised /></span>
            <p>Han ganado las {gameOver.winner === "white" ? "blancas" : "negras"}</p>
            <button className="retryButton" onClick={() => retryGame()}><FaPlayCircle /> Volver a jugar</button>
          </div>
        </div>
        : null}
      <div className="gameData">
        <span className="turn"><FaHandPointer /> Turno de las <strong>{turn === "white" ? "blancas" : "negras"}</strong></span>
        {selectedPiece ? <span><strong>Pieza seleccionada: </strong> {selectedPiece.piece.type.toUpperCase()} en <strong>{selectedPiece.block}</strong></span> : <span><strong>Pieza seleccionada:</strong> No hay selección</span>}
      </div>
      <Chessboard turn={turn} setTurn={setTurn} selectedPiece={selectedPiece} setSelectedPiece={setSelectedPiece} gameOver={gameOver} setGameOver={setGameOver} chessboard={chessboard} setChessboard={setChessboard} blackEatenPieces={blackEatenPieces} setBlackEatenPieces={setBlackEatenPieces} whiteEatenPieces={whiteEatenPieces} setWhiteEatenPieces={setWhiteEatenPieces} />

    </div>
  )
}
export default App;
