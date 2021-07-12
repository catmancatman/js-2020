class Piece {
   type
   static x() {
       piece = new Piece()
       piece.type = 'x'
       return piece
   }
      static z() {
         piece = new Piece()
         piece.type = '0'
         return piece
    }
}

class Position {
    line
    column
    constructor(line, column) {
        this.line = line
        this.column = column  
    }
}
 
class Cell {
    position
    content = null

    constructor(position) {
        this.position = position
    }
    setContent(content) {
            this.content = content
    }
    isEmpty() {
        return this.content === null
    }
    isNotEmpty() {
        return this.content !== null
    }
}

class Board {
    grid = [
        [new Cell(new Position(0,0)), new Cell(new Position(0,1)), new Cell(new Position(0,2))],
        [new Cell(new Position(1,0)), new Cell(new Position(1,1)), new Cell(new Position(1,2))],
        [new Cell(new Position(2,0)), new Cell(new Position(2,1)), new Cell(new Position(2,2))],
    ]
    putPiece(piece, position) {
        this.grid[position.line] [position.column].setContent(piece)
    }
    hasPiece(position) {
        return this.grid[position.line] [position.column].content !== null 
    }
    everyPosition(positios, callback) {
        return positions.every((position) => callback(grid[position.line][position.column]))
    }
    getAllCells() {
       // return [...grid[0], ...grid[1], ...grid[2]]
       return [].concat(...grid)
    }
} 
class Player {
    piece
    constructor(piece) {
        this.piece = piece
    }
}

class Game {
    board 
    players
    currentPlayer
    
    constructor() {
        this.board = new Board()
        this.players = [
            new Player(Piece.x()),
            new Player(Piece.z())
        ]
        this.currentPlayer = this.players[0]
    }

    move(position) {
        if(this.board.hasPiece(position)) {
                throw 'illegal move'
         }
         //punem piesa jucatorului curent pe pozitie
         this.board.putPiece(this.players[currentPlayer].piece, position)
         //schimbam jucatorul curent
         this.currentPlayer = !this.Players
    }
    isOver() {
        this.lineIsComplete(0)
        || this.lineIsComplete(1)
        || this.lineIsComplete(2)
        || this.columnIsComplete(0)
        || this.columnIsComplete(1)
        || this.columnIsComplete(2)
        || this.slashDiagonalIsComplete()
        || this.backslashDiagonalIsComplete()
        // linia n  este completa
        // coloana n este completa
        //diagonala / este completa
        //diagonala \ este completa
    }
    lineIsComplete(line) {
        return this.checkComplete([
                new Position(line, 0),
                new Position(line, 1),
                new Position(line, 2),
            ])
    }

    columnIsComplete(column) {
        return this.checkComplete([
                new Position(0, column),
                new Position(1, column),
                new Position(2, column),
            ])
    }

    slashDiagonalIsComplete() {
        return this.checkComplete([
                new Position(0, 0),
                new Position(1, 1),
                new Position(2, 2),
            ])
    }

    backslashDiagonalIsComplete() {
        return this.checkComplete([
                new Position(0, 2),
                new Position(1, 1),
                new Position(2, 0),
            ])
    }

    checkComplete(positions) {
        this.board.everyPosition(
            position, (piece) => piece == this.players[0].piece

        )||
        this.board.everyPosition(
            position, (piece) => piece == this.players[1].piece
        )
    }
}

new Vue({
    el: '#app',
    data() {
        return {
            game: new Game()
        }
    },
    template: `
        <div class="game">
            <div class="board">
                <div 
                    v-for="piece in game.board.getAllPieces()"
                    class="cell"
                    @click="click(cell.position)"
                >
                    <span v-if="cell == null">
                    </span>
                    <span v-if="piece.type == 'x">
                        x

                    </span>
                    <span v-else-if="piece.type == 'z">
                        0
                    </span> 
                    <span v-else>
                    </span>
                </div>      
            </div>
         </div>
    `
})