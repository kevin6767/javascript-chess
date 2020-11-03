let game = document.querySelector('.grid')
let board = []
let piece = 'piece'
let allowed = true; // set to true to allow infite moves

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




/*
todo : clean up this terrible 2 year old code and learn how to move stuff around in functions and
not be a total dummy






*/
var images = document.querySelectorAll('img')
for (let index = 0; index < images.length; index++) {
    images[index].setAttribute('id', 'piece ' + index)
    
}
addEventListeners(document.querySelectorAll('img'), 'dragstart', (e) => {
    dragData(e, { id: e.target.id });
});

addEventListeners(document.querySelectorAll('.square'), 'drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    var data = dragData(e);
    // TODO: some rule engine the incoming piece can go to this target or not
    if(allowed) {
        e.currentTarget.appendChild(document.getElementById(data.id));
    } else {
        // nothing
    }
});

addEventListeners(document.querySelectorAll('.square'), 'dragover', (e) => {
    e.preventDefault();
});

addEventListeners(document.querySelectorAll('.square'), 'dragenter', (e) => {
    e.preventDefault();
    // TODO: some rule engine the incoming piece can go to this target or not
    if(allowed) {
        e.currentTarget.classList.add('allowed');
    } else {
        e.currentTarget.classList.add('denied');
    }
});

addEventListeners(document.querySelectorAll('.square'), 'dragleave', (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('allowed');
    e.currentTarget.classList.remove('denied');
});


function addEventListeners(list, event, fn) {
for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);

}
}


function dragData(event, data) {
if (data) {
    event.dataTransfer.setData('text', JSON.stringify(data));
} else {
    var response = event.dataTransfer.getData('text');
    try {
        response = JSON.parse(response);
    } catch (e) {
        response = {};
    }
    console.log(response)
    return response;
}
}

