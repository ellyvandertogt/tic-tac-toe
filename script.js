//https://www.youtube.com/watch?v=AzvpHNkjqsg&ab_channel=KennyYipCoding

var board;
var PlayerO = "O";
var playerx = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [" ", " ", " "]
        [" ", " ", " "]
        [" ", " ", " "]
    ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
        let tile = document.createElement("div");
        tile.id = r.toString() + "-" + c.toString();
        tile.classList.add("tile");
        if (r == 0 || r == 1) {
            tile.classList.add("horizontal-line");
        }
        if (c == 0 || c == 1) {
            tile.classList.add("vertical-line");
        }
        tile.addEventListener("click", setTile);
        document.getElementById("board").append(tile);
        }
    }
}

function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-")//"1-1" -> ["1", "1"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    if (board[r][c] != " ") {
        return;
    }
    board[r][c] = currPlayer;
    this.innerText = currPlayer;

    if (currPlayer == playerO) {
        currPlayer = playerx;
    } else {
        currPlayer= PlayerO;
    }

    checkWinnar();
}

function checkWinnar() {
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] )
    }
}