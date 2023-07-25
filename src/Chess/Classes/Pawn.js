export default class Pawn {
    constructor(color) {
        this.type = 'pawn'
        this.color = color
        this.img = `/images/${color}Pawn.png`
    }
    movementOptions(chessboard, selectedPiece) {
        const movementOptions = []
        if (this.color === "white") {
            // Solo hacia row menor
            if (chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex - 1]?.piece && chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex - 1]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex - 1].block)
            }
            if (chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex + 1]?.piece && chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex + 1]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex + 1].block)
            }
            if (selectedPiece.rowIndex === 6) {
                for (let ri = selectedPiece.rowIndex - 1; ri >= selectedPiece.rowIndex - 2; ri--) {
                    if (chessboard[ri][selectedPiece.blockIndex]?.piece) break
                    movementOptions.push(chessboard[ri][selectedPiece.blockIndex].block)
                }
            } else {
                if (!chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex]?.piece) {
                    movementOptions.push(chessboard[selectedPiece.rowIndex - 1][selectedPiece.blockIndex].block)
                }
            }
        } else if (this.color === "black") {
            // Solo hacia row menor
            if (chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex - 1]?.piece && chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex - 1]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex - 1].block)
            }
            if (chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex + 1]?.piece && chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex + 1]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex + 1].block)
            }
            if (selectedPiece.rowIndex === 1) {
                for (let ri = selectedPiece.rowIndex + 1; ri <= selectedPiece.rowIndex + 2; ri++) {
                    if (chessboard[ri][selectedPiece.blockIndex]?.piece) break
                    movementOptions.push(chessboard[ri][selectedPiece.blockIndex].block)
                }
            } else {
                if (!chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex]?.piece) {
                    movementOptions.push(chessboard[selectedPiece.rowIndex + 1][selectedPiece.blockIndex].block)
                }
            }
        }

        return movementOptions
    }
}