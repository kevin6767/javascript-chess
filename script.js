var img = document.querySelectorAll('img')
var td = document.querySelectorAll('td')



var test = true;
var row;
var cell;
var p = 1

var urls1 = ["image/a0.png", "image/a1.png", "image/a2.png", "image/a3.png", "image/a4.png", "image/a5.png", "image/a6.png", "image/a7.png"]
var urls2 = ["image/a8.png", "image/a9.png", "image/a10.png", "image/a11.png", "image/a12.png", "image/a13.png", "image/a14.png", "image/a15.png"]
var urls3 = ["image/a16.png", "image/a17.png", "image/a18.png", "image/a19.png", "image/a20.png", "image/a21.png", "image/a22.png", "image/a23.png"]
var urls4 = ["image/a24.png", "image/a25.png", "image/a26.png", "image/a27.png", "image/a28.png", "image/a29.png", "image/a30.png", "image/a31.png"]

function createBoard(params) {
    if (test) {
        console.log('---Creating the board---')
    }
    var board = document.createElement('table')
    board.setAttribute('id','board')
    for (let i = 0; i < 8; i++) {
        row = document.createElement('tr')
        for (let j = 0; j < 8; j++) {
            cell = document.createElement('td');
            cell.className = i;
            if (i < 1) {
                cell.insertAdjacentHTML('beforeend', '<img class="piece" draggable="true" id="' + urls1[j] + '" src="' + urls1[j] + '">');
            }
            if (i > 0 && i < 2) {
                cell.insertAdjacentHTML('beforeend', '<img class="piece" draggable="true" id="' + urls2[j] + '" src="' + urls2[j] + '">');
            }
            if (i > 5 && i < 7) {
                cell.insertAdjacentHTML('beforeend', '<img class="piece" draggable="true" id="' + urls3[j] + '" src="' + urls3[j] + '">');
            }
            if (i < 8 && i > 6) {
                cell.insertAdjacentHTML('beforeend', '<img class="piece" draggable="true" id="' + urls4[j] + '" src="' + urls4[j] + '">');
            }
            
            
            
            
            
            
        
                if (j%2 == i% 2) {
                    cell.setAttribute('id','white')
                } else {
                    
                    cell.setAttribute('id', 'grey')
                }
            
                
            
            row.appendChild(cell)
            p++;
        }
        
        

        console.log()
        board.appendChild(row)
        
    }
    document.body.appendChild(board)
addEventListeners(document.querySelectorAll('img'), 'dragstart', (e) => {
    dragData(e, { id: e.target.id });
});

addEventListeners(document.querySelectorAll('td'), 'drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    var data = dragData(e);
    e.currentTarget.classList.remove('allowed');
    e.currentTarget.classList.remove('denied');
    var incoming = dragData(e).id;
    var target = (e.currentTarget.classList.toString().split(' '));
    // TODO: some rule engine the incoming piece can go to this target or not
    var allowed = Math.floor(Math.random() * Math.floor(2)); // currently 0 or 1 randomly to test the snippet
    if(allowed) {
        e.currentTarget.appendChild(document.getElementById(data.id));
    } else {
        // nothing
    }
});

addEventListeners(document.querySelectorAll('td'), 'dragover', (e) => {
e.preventDefault();
});

addEventListeners(document.querySelectorAll('td'), 'dragenter', (e) => {
e.preventDefault();
var incoming = dragData(e).id;
var target = (e.currentTarget.classList.toString().split(' '));
// TODO: some rule engine the incoming piece can go to this target or not
var allowed = Math.floor(Math.random() * Math.floor(2)); // currently 0 or 1 randomly to test the snippet
if(allowed) {
    e.currentTarget.classList.add('allowed');
} else {
    e.currentTarget.classList.add('denied');
}
});

addEventListeners(document.querySelectorAll('td'), 'dragleave', (e) => {
e.preventDefault();
e.currentTarget.classList.remove('allowed');
e.currentTarget.classList.remove('denied');
});


}

    

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
        return response;
    }
}


createBoard();