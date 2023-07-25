export default class Queen {
    constructor(color) {
        this.type = 'queen'
        this.color = color
        this.img = `/images/${color}Queen.png`
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
        for (let ri = selectedPiece.rowIndex + 1; ri < 8; ri++) {
            if (!chessboard[ri][selectedPiece.blockIndex]?.block) break
            if (chessboard[ri][selectedPiece.blockIndex]?.piece && chessboard[ri][selectedPiece.blockIndex]?.piece?.color === this.color) {
                break
            } else if (chessboard[ri][selectedPiece.blockIndex]?.piece && chessboard[ri][selectedPiece.blockIndex]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[ri][selectedPiece.blockIndex]?.block)
                break
            } else {
                movementOptions.push(chessboard[ri][selectedPiece.blockIndex]?.block)
            }
        }
        for (let ri = selectedPiece.rowIndex - 1; ri >= 0; ri--) {
            if (!chessboard[ri][selectedPiece.blockIndex]?.block) break
            if (chessboard[ri][selectedPiece.blockIndex]?.piece && chessboard[ri][selectedPiece.blockIndex]?.piece?.color === this.color) {
                break
            } else if (chessboard[ri][selectedPiece.blockIndex]?.piece && chessboard[ri][selectedPiece.blockIndex]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[ri][selectedPiece.blockIndex]?.block)
                break
            } else {
                movementOptions.push(chessboard[ri][selectedPiece.blockIndex]?.block)
            }
        }
        for (let qbi = selectedPiece.blockIndex - 1; qbi >= 0; qbi--) {
            if (!chessboard[selectedPiece.rowIndex][qbi]?.block) break
            if (chessboard[selectedPiece.rowIndex][qbi]?.piece && chessboard[selectedPiece.rowIndex][qbi]?.piece?.color === this.color) {
                break
            } else if (chessboard[selectedPiece.rowIndex][qbi]?.piece && chessboard[selectedPiece.rowIndex][qbi]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[selectedPiece.rowIndex][qbi]?.block)
                break
            } else {
                movementOptions.push(chessboard[selectedPiece.rowIndex][qbi]?.block)
            }
        }
        for (let qbi = selectedPiece.blockIndex + 1; qbi < 8; qbi++) {
            if (!chessboard[selectedPiece.rowIndex][qbi]?.block) break
            if (chessboard[selectedPiece.rowIndex][qbi]?.piece && chessboard[selectedPiece.rowIndex][qbi]?.piece?.color === this.color) {
                break
            } else if (chessboard[selectedPiece.rowIndex][qbi]?.piece && chessboard[selectedPiece.rowIndex][qbi]?.piece?.color !== this.color) {
                movementOptions.push(chessboard[selectedPiece.rowIndex][qbi]?.block)
                break
            } else {
                movementOptions.push(chessboard[selectedPiece.rowIndex][qbi]?.block)
            }
        }
        return movementOptions
    }
}