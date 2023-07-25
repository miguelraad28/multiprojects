import { React, useState } from 'react';
import Pawn from './Classes/Pawn';
import Rook from './Classes/Rook';
import Queen from './Classes/Queen';
import King from './Classes/King';
import Knight from './Classes/Knight';
import Bishop from './Classes/Bishop';
import { whitePawn, whiteRook, whiteBishop, whiteKnight, whiteQueen, whiteKing, blackPawn, blackBishop, blackKing, blackKnight, blackQueen, blackRook } from "./Pieces"
const Chessboard = () => {
    const [turn, setTurn] = useState("white")
    const [selectedPiece, setSelectedPiece] = useState(false);
    const [movementOptions, setMovementOptions] = useState([]);
    const [blackEatenPieces, setBlackEatenPieces] = useState([]);
    const [whiteEatenPieces, setWhiteEatenPieces] = useState([]);
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
    const changeTurn = () => {
        if (turn === "white") {
            setTurn("black")
        } else if (turn === "black") {
            setTurn("white")
        }
    }
    const handleSelect = (rowIndex, blockIndex, block) => {
        if (!selectedPiece && !block.piece) {
            return console.log("No hay pieza para seleccionar")
        } else if (!selectedPiece && block.piece) {
            if (turn !== block.piece.color) {
                return console.log("Es turno de las " + turn)
            } else {
                console.log("Seleccion de pieza")
                const auxSelectedPiece = ({ ...block, rowIndex, blockIndex })
                setMovementOptions(auxSelectedPiece.piece.movementOptions(chessboard, auxSelectedPiece))

                return setSelectedPiece(auxSelectedPiece)
            }
        }
    }
    const handleAction = (rowIndex, blockIndex, block) => {
        console.log(selectedPiece, block)
        if (selectedPiece.block === block.block) {
            setMovementOptions([])
            console.log("Deseleccion tocando la misma")
            return setSelectedPiece(false)
        } else if (block.piece.color === selectedPiece.piece.color) {
            setMovementOptions([])
            console.log("Cambio de pieza")
            const auxSelectedPiece = ({ ...block, rowIndex, blockIndex })
            setMovementOptions(auxSelectedPiece.piece.movementOptions(chessboard, auxSelectedPiece))

            return setSelectedPiece(auxSelectedPiece)
        } else {
            if (movementOptions.includes(block.block)) {
                console.log("Si te puedes mover a esa")
                const auxChessboard = chessboard
                if (block.piece && turn === "white") {
                    let eatedPiece = auxChessboard[block.rowIndex][block.blockIndex].piece
                    setBlackEatenPieces([...blackEatenPieces, eatedPiece])
                } else if (block.piece && turn === "black") {
                    let eatedPiece = auxChessboard[block.rowIndex][block.blockIndex].piece
                    setWhiteEatenPieces([...whiteEatenPieces, eatedPiece])
                }
                auxChessboard[block.rowIndex][block.blockIndex].piece = selectedPiece.piece
                auxChessboard[selectedPiece.rowIndex][selectedPiece.blockIndex].piece = false
                setChessboard(auxChessboard);
                setSelectedPiece(false)
                setMovementOptions([])
                changeTurn()
            } else {
                console.log("No te puedes mover allí")
            }
        }
    }
    return (
        <>
            <div className="eatenPieces">
                {whiteEatenPieces.map((piece, idx) =>
                    <div key={idx}><img src={`${piece.img}`} /></div>
                )}
            </div>
            <div className='chessboardDisplay'>
                <div></div>
                <div className='chessboard'>
                    {chessboard.map((row, rowIndex) =>
                        <div id={rowIndex} key={(rowIndex + 1)} className="row">
                            {row.map((block, blockIndex) =>
                                <>
                                    <div id={blockIndex} key={(blockIndex + 1) * 5} className={selectedPiece.block === block.block ? "selectedPiece" : "null"} onClick={selectedPiece ? () => handleAction(rowIndex, blockIndex, block) : () => handleSelect(rowIndex, blockIndex, block)}>
                                        {block.piece ? <img src={`${block.piece.img}`} /> : null}

                                        {movementOptions.map(option =>
                                            option === block.block ?
                                                <span className="movementPointer"></span>
                                                :
                                                null
                                        )

                                        }
                                    </div>
                                </>
                            )}
                        </div>
                    )}


                </div>
            </div>
            <div className="eatenPieces">
                {blackEatenPieces.map((piece, idx) =>
                    <div key={idx}><img src={`${piece.img}`} /></div>
                )}
            </div>
        </>
    );
}

export default Chessboard;
