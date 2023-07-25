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
            console.log("EXE1")
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
            console.log("EXE2")
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
            console.log("EXE3")
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
            console.log("EXE4")
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
            console.log("EXE5")
            console.log(chessboard[ri][selectedPiece.blockIndex])
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
            console.log("EXE6")
            console.log(chessboard[ri][selectedPiece.blockIndex])
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
        for(let qbi = selectedPiece.blockIndex - 1; qbi >= 0; qbi--){
            console.log("EXE7")
            console.log(chessboard[selectedPiece.rowIndex][qbi])
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
        for(let qbi = selectedPiece.blockIndex + 1; qbi < 8; qbi++){
            console.log("EXE8")
            console.log(chessboard[selectedPiece.rowIndex][qbi])
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
        console.log(movementOptions)
        return movementOptions
    }
}