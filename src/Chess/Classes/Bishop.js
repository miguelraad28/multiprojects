export default class Bishop {
    constructor(color) {
        this.type = 'bishop'
        this.color = color
        this.img = `/images/${color}Bishop.png`
    }
    movementOptions(chessboard, selectedPiece) {
        const movementOptions = []
        let bi = selectedPiece.blockIndex + 1
        for (let ri = selectedPiece.rowIndex + 1; ri < 8; ri++) {
            if (!chessboard[ri][bi]?.block) break
            if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color === this.color) {
                break
            } else if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[ri][bi]?.block)
                break
            } else {
                movementOptions.push(chessboard[ri][bi]?.block)
            }
            bi++
        }
        bi = selectedPiece.blockIndex - 1
        for (let ri = selectedPiece.rowIndex + 1; ri < 8; ri++) {
            if (!chessboard[ri][bi]?.block) break
            if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color === this.color) {
                break
            } else if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[ri][bi]?.block)
                break
            } else {
                movementOptions.push(chessboard[ri][bi]?.block)
            }
            bi--
        }
        bi = selectedPiece.blockIndex + 1
        for (let ri = selectedPiece.rowIndex - 1; ri >= 0; ri--) {
            if (!chessboard[ri][bi]?.block) break
            if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color === this.color) {
                break
            } else if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[ri][bi]?.block)
                break
            } else {
                movementOptions.push(chessboard[ri][bi]?.block)
            }
            bi++
        }
        bi = selectedPiece.blockIndex - 1
        for (let ri = selectedPiece.rowIndex - 1; ri >= 0; ri--) {
            if (!chessboard[ri][bi]?.block) break
            if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color === this.color) {
                break
            } else if (chessboard[ri][bi]?.piece && chessboard[ri][bi]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[ri][bi]?.block)
                break
            } else {
                movementOptions.push(chessboard[ri][bi]?.block)
            }
            bi--
        }
        return movementOptions
    }
}