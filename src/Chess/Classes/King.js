export default class King {
    constructor(color) {
        this.type = 'king'
        this.color = color
        this.img = `/images/${color}King.png`
    }
    movementOptions(chessboard, selectedPiece) {
        const movementOptions = []
        for (let bi = selectedPiece.blockIndex - 1; bi <= selectedPiece.blockIndex + 1; bi++) {
            if (chessboard?.[selectedPiece.rowIndex + 1]?.[bi] && !chessboard?.[selectedPiece.rowIndex + 1]?.[bi]?.piece) {
                // Arriba
                movementOptions.push(chessboard[selectedPiece.rowIndex + 1][bi].block)
            }
            if (chessboard?.[selectedPiece.rowIndex - 1]?.[bi] && !chessboard?.[selectedPiece.rowIndex - 1]?.[bi]?.piece) {
                // Abajo
                movementOptions.push(chessboard[selectedPiece.rowIndex - 1][bi].block)
            }
            if (chessboard?.[selectedPiece.rowIndex + 1]?.[bi]?.piece && chessboard?.[selectedPiece.rowIndex + 1]?.[bi]?.piece?.color !== this.color) {
                // Arriba
                movementOptions.push(chessboard[selectedPiece.rowIndex + 1][bi].block)
            }
            if (chessboard?.[selectedPiece.rowIndex - 1]?.[bi]?.piece && chessboard?.[selectedPiece.rowIndex - 1]?.[bi]?.piece?.color !== this.color) {
                // Abajo
                movementOptions.push(chessboard[selectedPiece.rowIndex - 1][bi].block)
            }
            if (bi === selectedPiece.blockIndex - 1 || bi === selectedPiece.blockIndex + 1) {
                // Lados
                if (chessboard?.[selectedPiece.rowIndex]?.[bi]?.piece?.color !== this.color) {
                    movementOptions.push(chessboard?.[selectedPiece.rowIndex]?.[bi].block)

                }
            }
        }

        return movementOptions
    }
}