let game = document.querySelector('.grid')
let board = []

let allowed = true; // set to true to allow infite moves
var moveList = []
const piecesClass = ['pawn','knight','rook','bishop','queen','king']


function genBoard(params) {
    let classNames = ["white", "black"];
    for(var i=0; i<64; i++){
        var square = document.createElement("div");
        square.setAttribute('id', i)
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
    board[0].innerHTML = '<img src=./image/b_rook.png class=rook>'
    board[0].setAttribute('draggable','true')
    
    board[7].innerHTML = '<img src=./image/b_rook.png class=rook>'
    board[7].setAttribute('draggable','true')
    
    board[56].innerHTML = '<img src=./image/w_rook.png class=rook>'
    board[56].setAttribute('draggable','true')
    
    board[63].innerHTML = '<img src=./image/w_rook.png class=rook>' 
    board[63].setAttribute('draggable','true')
    
}
function genKnights(params) {
    board[1].innerHTML = '<img src=./image/b_knight.png class=knight>'
    board[1].setAttribute('draggable','true')
    
    board[6].innerHTML = '<img src=./image/b_knight.png class=knight>'
    board[6].setAttribute('draggable','true')
    
    board[57].innerHTML = '<img src=./image/w_knight.png class=knight>'
    board[57].setAttribute('draggable','true')
    
    board[62].innerHTML = '<img src=./image/w_knight.png class=knight>'
    board[62].setAttribute('draggable','true')
   
}
function genBishops(params) {
    board[2].innerHTML = '<img src=./image/b_bishop.png class=bishop>'
    board[2].setAttribute('draggable','true')
    board[5].innerHTML = '<img src=./image/b_bishop.png class=bishop>'
    board[5].setAttribute('draggable','true')
    
    board[58].innerHTML = '<img src=./image/w_bishop.png class=bishop>'
    board[58].setAttribute('draggable','true')
    
    board[61].innerHTML = '<img src=./image/w_bishop.png class=bishop>'
    board[61].setAttribute('draggable','true')
   
}
function genKings(params) {
    board[4].innerHTML = '<img src=./image/b_king.png class=king>'
    board[4].setAttribute('draggable','true')
    
    board[60].innerHTML = '<img src=./image/w_king.png class=king>'
    board[60].setAttribute('draggable','true')
   
}
function genQueens(params) {
    board[3].innerHTML = '<img src=./image/b_queen.png class=queen>'
    board[3].setAttribute('draggable','true')
    
    board[59].innerHTML = '<img src=./image/w_queen.png class=queen>'
    board[59].setAttribute('draggable','true')
    
}
function genPawns(params) {
    for (let index = 8; index < 16; index++) {
        board[index].innerHTML = '<img src=./image/b_pawn.png class=pawn>'
        board[index].setAttribute('draggable','true')
        
    }
    for (let index = 48; index < 56; index++) {
        board[index].innerHTML = '<img src=./image/w_pawn.png class=pawn>'
        board[index].setAttribute('draggable','true')
        
        
        
    }
}

genBoard();



document.querySelectorAll('img').forEach(function(el) {
    el.addEventListener('click' , addselected)
    el.classList.add('original')
    var check = parseInt(el.parentElement.id)
    if (check < 63 && check > 48) {
        el.classList.add('w_piece')
    }else{
        el.classList.add('b_piece')
    }
})

document.querySelectorAll('.square').forEach(function(el) {
    el.addEventListener('click', addtarget)
})


function addselected(selected){
    clearArr(moveList)
    var select = selected.path[0]
    moveList.push(select)
}

function addtarget(target){
    if (target.path.length === 7){
        var tar = target.path[1]
    }else{
        var tar = target.path[0]
    }

    moveList.push(tar)
    moveBy(moveList)
}


function moveBy(moveList) {

    let moveTarg = moveList[2]
    let moveSel = moveList[0]
    if (typeof moveTarg === 'undefined') {
        console.log('waiting')
    }else{
        if (moveSel.classList.contains('pawn')) {
            console.log('I selected a pawn')
            moveByPawn(moveSel, moveTarg)
        } else if(moveSel.classList.contains('knight')){
            console.log('I selected a knight')
        }else if(moveSel.classList.contains('rook')){
            console.log('I selected a rook')
        }else if (moveSel.classList.contains('bishop')){
            console.log('I selected a bishop')
        }else if(moveSel.classList.contains('queen')){
            console.log('I selected a queen')
        }else if(moveSel.classList.contains('king')) {
            console.log('I selected a king')
        }else{
            console.log('if else if did not work')
        }
    }
    
}

function clearArr(moveList) {
    moveList.length = 0
}

// Handling capturing for the pawn ------- I will need to add or subtract to the id to make sure it stays inline with the logic
// below. Other than that, should be pretty easy, just continue to use the id's to work with movement

function moveByPawn(sel,targ) {
    var moveCount = 0;
    var location = parseInt(targ.id)
    var originalLoc = parseInt(sel.parentElement.id)
    // check if the piece is white so the logic works for both ends of the board since we are not working with a 2d Array
    if (sel.classList.contains('w_piece')) {
        if(sel.classList.contains('original')){
            if(targ.innerHTML == ''){
                moveCount++
                if ((location + 16)/moveCount == originalLoc || (location + 8)/moveCount == originalLoc) {
                    console.log('This can move here!')
                    targ.appendChild(sel)
                    sel.classList.remove('original')
                }else {
                    console.log('I cannot move here!')
                }
            }else{
                console.log('handle capturing')
            }
            
        }else{
            if(targ.innerHTML == ''){
                moveCount++
                if ((location + 8)/moveCount == originalLoc) {
                    console.log('This can move here!')
                    targ.appendChild(sel)
                }else {
                    console.log('I cannot move here!')
                }
            }
        }
    }else {
        if(sel.classList.contains('original')){
            if(targ.innerHTML == ''){
                moveCount++
                if ((location - 16)*moveCount == originalLoc || (location - 8)*moveCount == originalLoc) {
                    console.log('This can move here!')
                    targ.appendChild(sel)
                    sel.classList.remove('original')
                }else {
                    console.log('I cannot move here!')
                }
            }else{
                console.log('handle capturing')
            }
            
        }else{
            if(targ.innerHTML == ''){
                moveCount++
                if ((location - 8)*moveCount == originalLoc) {
                    console.log('This can move here!')
                    targ.appendChild(sel)
                }else {
                    console.log('I cannot move here!')
                }
            }
        }
    } 
}   

// Handling the movement for the rest of the peices, just check the inner.html for each element and add each one too an array by 
// checking their id's. 

// bishop will me a moduls of 9 or 7since it needs 9 tiles to move diagnol

// Use of nextSibling maybe, to check what element is next to the targ cell