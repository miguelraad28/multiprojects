export default class Knight {
    constructor(color) {
        this.type = 'knight'
        this.color = color
        this.img = `/images/${color}Knight.png`
    }
    movementOptions(chessboard, selectedPiece) {
        const movementOptions = []
        console.log(chessboard)
        const directions = [
            [selectedPiece.rowIndex - 2, selectedPiece.blockIndex - 1],
            [selectedPiece.rowIndex - 2, selectedPiece.blockIndex + 1],
            [selectedPiece.rowIndex + 2, selectedPiece.blockIndex + 1],
            [selectedPiece.rowIndex + 2, selectedPiece.blockIndex - 1],
            [selectedPiece.rowIndex + 1, selectedPiece.blockIndex + 2],
            [selectedPiece.rowIndex - 1, selectedPiece.blockIndex + 2],
            [selectedPiece.rowIndex + 1, selectedPiece.blockIndex - 2],
            [selectedPiece.rowIndex - 1, selectedPiece.blockIndex - 2]
        ];

        for (const [ri, bi] of directions) {
            if (chessboard[ri]?.[bi]?.piece && chessboard[ri]?.[bi]?.piece.color === this.color) {

            } else if (chessboard[ri]?.[bi]?.piece && chessboard[ri]?.[bi]?.piece.color !== this.color) {
                movementOptions.push(chessboard[ri][bi].block);

            } else if (chessboard[ri]?.[bi]) {
                movementOptions.push(chessboard[ri][bi].block);
            }

        }
        return movementOptions
    }
}