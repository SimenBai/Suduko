let suduko;

function setup() {
    createCanvas(450, 450);
    suduko = new Suduko();
}

function draw() {
    drawGrid();
    drawBoard();
}

function drawNumbers() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            strokeWeight(3);
            textSize(width / 18);
            textAlign(CENTER, CENTER);
            text(i, i * width / 9, j * width / 9, width / 9, width / 9);
            strokeWeight(1);
        }
    }
}

function drawBoard() {
    let board = suduko.getBoard();
    for (let i = 0; i < 9; i++) {
        suduko.setPosition(3, i, 5);
        for (let j = 0; j < 9; j++) {
            strokeWeight(3);
            textSize(width / 18);
            textAlign(CENTER, CENTER);
            /*
            console.log(board);
            console.log(board[i][j]);
             */
            text(board[i][j], i * width / 9, j * width / 9, width / 9, width / 9);
            strokeWeight(1);
        }
    }
}

function drawGrid() {
    square(0, 0, width);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            square(i * width / 9, j * width / 9, width / 9);
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            strokeWeight(3);
            line((width / 3) * j, 0, (width / 3) * j, width);
            line(0, (width / 3) * j, width, (width / 3) * j);
            strokeWeight(1);
        }
    }
}

class Suduko {
    board;

    constructor() {
        this.board = new Array(9);
        for (let i = 0; i < 9; i++) {
            this.board[i] = new Array(9);
            for (let j = 0; j < 9; j++) {
                this.board[i][j] = j;
            }
        }
    }

    getBoard() {
        return this.board;
    }

    setPosition(x, y, value){
        this.board[x-1][y-1] = value;
    }
}