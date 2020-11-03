let game = document.querySelector('.grid')
let board = []
let piece = 'piece'
let allowed = true; // set to true to allow infite moves
const moveList = []



function genBoard(params) {
    let classNames = ["white", "black"];
    for(var i=0; i<64; i++){
        var square = document.createElement("div");
        square.setAttribute('id', 'board' + i)
        square.className += 'square '
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
    board[0].setAttribute('draggable','true')
    board[7].innerHTML = '<img src=./image/b_rook.png>'
    board[7].setAttribute('draggable','true')
    board[56].innerHTML = '<img src=./image/w_rook.png>'
    board[56].setAttribute('draggable','true')
    board[63].innerHTML = '<img src=./image/w_rook.png>' 
    board[63].setAttribute('draggable','true')  
}
function genKnights(params) {
    board[1].innerHTML = '<img src=./image/b_knight.png>'
    board[1].setAttribute('draggable','true')
    board[6].innerHTML = '<img src=./image/b_knight.png>'
    board[6].setAttribute('draggable','true')
    board[57].innerHTML = '<img src=./image/w_knight.png>'
    board[57].setAttribute('draggable','true')
    board[62].innerHTML = '<img src=./image/w_knight.png>'
    board[62].setAttribute('draggable','true')
}
function genBishops(params) {
    board[2].innerHTML = '<img src=./image/b_bishop.png>'
    board[2].setAttribute('draggable','true')
    board[5].innerHTML = '<img src=./image/b_bishop.png>'
    board[5].setAttribute('draggable','true')
    board[58].innerHTML = '<img src=./image/w_bishop.png>'
    board[58].setAttribute('draggable','true')
    board[61].innerHTML = '<img src=./image/w_bishop.png>'
    board[61].setAttribute('draggable','true')
}
function genKings(params) {
    board[4].innerHTML = '<img src=./image/b_king.png>'
    board[4].setAttribute('draggable','true')
    board[60].innerHTML = '<img src=./image/w_king.png>'
    board[60].setAttribute('draggable','true')
}
function genQueens(params) {
    board[3].innerHTML = '<img src=./image/b_queen.png>'
    board[3].setAttribute('draggable','true')
    board[59].innerHTML = '<img src=./image/w_queen.png>'
    board[59].setAttribute('draggable','true')
}
function genPawns(params) {
    for (let index = 8; index < 16; index++) {
        board[index].innerHTML = '<img src=./image/b_pawn.png>'
        board[index].setAttribute('draggable','true')
        
    }
    for (let index = 48; index < 56; index++) {
        board[index].innerHTML = '<img src=./image/w_pawn.png>'
        board[index].setAttribute('draggable','true')
        
    }
}

genBoard();



document.querySelectorAll('img').forEach(function(el) {
    el.addEventListener('click' , addselected)
})

document.querySelectorAll('.square').forEach(function(el) {
    el.addEventListener('click', addtarget)
})


function addselected(selected){
    console.log('---addselected---')
    var select = selected.path[0]
    moveList.push(select)
}

function addtarget(target){
    console.log('---addtarget---')
    if (target.path.length === 7){
        var tar = target.path[1]
    }else{
        var tar = target.path[0]
    }

    moveList.push(tar)
    moveBy(...moveList)
}


function moveBy(...moveList) {
    console.log('---moveBy---')
    let moveTarg = moveList[2]
    let moveSel = moveList[0]
    if (typeof moveTarg === 'undefined') {
        console.log('not working')
    }else{
        moveTarg.appendChild(moveSel)
        moveList = []
    }
    console.log(moveList)
    
}

