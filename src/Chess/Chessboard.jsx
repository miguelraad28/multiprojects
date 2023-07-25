import { React, useState } from 'react';
import Pawn from './Classes/Pawn';
import Rook from './Classes/Rook';
import Queen from './Classes/Queen';
import King from './Classes/King';
import Knight from './Classes/Knight';
import Bishop from './Classes/Bishop';
import { whitePawn, whiteRook, whiteBishop, whiteKnight, whiteQueen, whiteKing, blackPawn, blackBishop, blackKing, blackKnight, blackQueen, blackRook } from "./Pieces"
const Chessboard = ({ turn, setTurn, selectedPiece, setSelectedPiece, setGameOver, chessboard, setChessboard, blackEatenPieces, setBlackEatenPieces, whiteEatenPieces, setWhiteEatenPieces }) => {
    const [movementOptions, setMovementOptions] = useState([]);

    const gameOver = (turn) => {
        setGameOver({ status: true, winner: turn })
    }
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
                console.log(auxSelectedPiece.piece.movementOptions(chessboard, auxSelectedPiece))
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
                console.log("Movimiento")
                const auxChessboard = chessboard
                let eatedPiece
                if (block.piece && turn === "white") {
                    eatedPiece = auxChessboard[block.rowIndex][block.blockIndex].piece
                    setBlackEatenPieces([...blackEatenPieces, eatedPiece])
                    if (eatedPiece.type === "king") {
                        gameOver(turn)
                        console.log("Te comiste al rey enemigo")
                    }
                } else if (block.piece && turn === "black") {
                    eatedPiece = auxChessboard[block.rowIndex][block.blockIndex].piece
                    setWhiteEatenPieces([...whiteEatenPieces, eatedPiece])
                    if (eatedPiece.type === "king") {
                        gameOver(turn)
                        console.log("Te comiste al rey enemigo")
                    }
                }
                auxChessboard[block.rowIndex][block.blockIndex].piece = selectedPiece.piece
                auxChessboard[selectedPiece.rowIndex][selectedPiece.blockIndex].piece = false
                setChessboard(auxChessboard);
                setSelectedPiece(false)
                setMovementOptions([])
                changeTurn()
            } else {
                console.log("No te puedes mover allí")
                setSelectedPiece(false)
                setMovementOptions([])
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
                <div className='chessboard'>
                    {chessboard.map((row, rowIndex) =>
                        <div id={rowIndex} key={rowIndex} className="row">
                            {row.map((block, blockIndex) =>
                                <>
                                    <div id={blockIndex} key={block.block} className={selectedPiece.block === block.block ? "selectedPiece" : "null"} onClick={selectedPiece ? () => handleAction(rowIndex, blockIndex, block) : () => handleSelect(rowIndex, blockIndex, block)}>
                                        {block.piece ? <img src={`${block.piece.img}`} /> : null}
                                        <p className='blockCoord'>{block.block}</p>
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
