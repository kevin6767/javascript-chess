const game = document.querySelector('.grid')
let board = []

function genBoard(params) {
    let classNames = ["white", "black"];
    for(var i=0; i<64; i++){
        var square = document.createElement("div");
        square.setAttribute('id', i)
        board.push(square)
        if (i && i%8 === 0){ 
            classNames.reverse();
            
        }
    square.className += (i%2 === 0)? classNames[0] : classNames[1];
    game.appendChild(square);
    }
    genPieces()
}

function genPieces(params) {
    genRooks()
    genKnights()
    genBishops()
    genKings()
    genQueens()
    genPawns()
}
function genRooks(params) {
    board[0].innerHTML = '<img src=./image/b_rook.png>'
    board[7].innerHTML = '<img src=./image/b_rook.png>'
    board[56].innerHTML = '<img src=./image/w_rook.png>'
    board[63].innerHTML = '<img src=./image/w_rook.png>'   
}
function genKnights(params) {
    board[1].innerHTML = '<img src=./image/b_knight.png>'
    board[6].innerHTML = '<img src=./image/b_knight.png>'
    board[57].innerHTML = '<img src=./image/w_knight.png>'
    board[62].innerHTML = '<img src=./image/w_knight.png>'
}
function genBishops(params) {
    board[2].innerHTML = '<img src=./image/b_bishop.png>'
    board[5].innerHTML = '<img src=./image/b_bishop.png>'
    board[58].innerHTML = '<img src=./image/w_bishop.png>'
    board[61].innerHTML = '<img src=./image/w_bishop.png>'
}
function genKings(params) {
    board[4].innerHTML = '<img src=./image/b_king.png>'
    board[60].innerHTML = '<img src=./image/w_king.png>'
}
function genQueens(params) {
    board[3].innerHTML = '<img src=./image/b_queen.png>'
    board[59].innerHTML = '<img src=./image/w_queen.png>'
}
function genPawns(params) {
    for (let index = 8; index < 16; index++) {
        board[index].innerHTML = '<img src=./image/b_pawn.png>'
        
    }
    for (let index = 48; index < 56; index++) {
        board[index].innerHTML = '<img src=./image/w_pawn.png>'
        
    }
}



genBoard();
