var app = new Vue({
  el: "#app",
  data: {
    gameOver: false,
    playerTurn: "⚫",
    grid: [
      ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
      ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
      ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
      ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
      ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"],
      ["⚪", "⚪", "⚪", "⚪", "⚪", "⚪", "⚪"]
    ]
  },
  methods: {
    selectCell: function(row, col) {
      //get the row to place the puck at
      var moveRow = this.lowestMove(col);
      console.log(moveRow);
      if (moveRow >= 0) {
        //copy grid to a temporary var
        var tempGrid = this.grid.slice(0);

        //modify the cloned version//
        tempGrid[moveRow][col] = this.playerTurn;

        //replace//
        this.grid = tempGrid;

        //swap player turn//
        this.playerTurn = this.playerTurn == "🔴" ? "⚫" : "🔴";
        //check for win
        this.checkWin(row);
      }
    },
    checkWin: function() {
      //loop through all col to check
      //black check for win vertical
      for (var col = 0; col <= 6; col++) {
        if (
          this.grid[5][col] == "⚫" &&
          this.grid[4][col] == "⚫" &&
          this.grid[3][col] == "⚫" &&
          this.grid[2][col] == "⚫"
        ) {
          this.$data.gameOver == true; //could not set gameOver to true so I could not get the GAME OVER message in the html to appear
          document.write("GAME OVER" + "<br>" + "Black wins!");
        }
        if (
          this.grid[3][col] == "⚫" &&
          this.grid[2][col] == "⚫" &&
          this.grid[1][col] == "⚫" &&
          this.grid[0][col] == "⚫"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Black wins!");
        }
      }

      //Red check for win vertical
      for (var col = 0; col <= 6; col++) {
        if (
          this.grid[5][col] == "🔴" &&
          this.grid[4][col] == "🔴" &&
          this.grid[3][col] == "🔴" &&
          this.grid[2][col] == "🔴"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Red wins!");
        }
        if (
          this.grid[3][col] == "🔴" &&
          this.grid[2][col] == "🔴" &&
          this.grid[1][col] == "🔴" &&
          this.grid[0][col] == "🔴"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Red wins!");
        }
      }
      //black check for win horizontal
      for (var row = 0; row <= 5; row++) {
        if (
          this.grid[row][6] == "⚫" &&
          this.grid[row][5] == "⚫" &&
          this.grid[row][4] == "⚫" &&
          this.grid[row][3] == "⚫"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Black wins!");
        }
        if (
          this.grid[row][5] == "⚫" &&
          this.grid[row][4] == "⚫" &&
          this.grid[row][3] == "⚫" &&
          this.grid[row][2] == "⚫"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Black wins!");
        }
        if (
          this.grid[row][4] == "⚫" &&
          this.grid[row][3] == "⚫" &&
          this.grid[row][2] == "⚫" &&
          this.grid[row][1] == "⚫"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Black wins!");
        }
        if (
          this.grid[row][3] == "⚫" &&
          this.grid[row][2] == "⚫" &&
          this.grid[row][1] == "⚫" &&
          this.grid[row][0] == "⚫"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Black wins!");
        }
      }

      //Red check for win horizontal
      for (var row = 0; row <= 5; row++) {
        if (
          this.grid[row][6] == "🔴" &&
          this.grid[row][5] == "🔴" &&
          this.grid[row][4] == "🔴" &&
          this.grid[row][3] == "🔴"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Red wins!");
        }
        if (
          this.grid[row][5] == "🔴" &&
          this.grid[row][4] == "🔴" &&
          this.grid[row][3] == "🔴" &&
          this.grid[row][2] == "🔴"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Red wins!");
        }
        if (
          this.grid[row][4] == "🔴" &&
          this.grid[row][3] == "🔴" &&
          this.grid[row][2] == "🔴" &&
          this.grid[row][1] == "🔴"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Red wins!");
        }
        if (
          this.grid[row][3] == "🔴" &&
          this.grid[row][2] == "🔴" &&
          this.grid[row][1] == "🔴" &&
          this.grid[row][0] == "🔴"
        ) {
          this.$data.gameOver == true;
          document.write("GAME OVER" + "<br>" + "Red wins!");
        }
      }
    },
    lowestMove: function(col) {
      for (var row = 5; row >= 0; row--) {
        console.log(this.grid[row][col]);
        if (this.grid[row][col] == "⚪") {
          //if it is free return the row index
          return row;
        }
      }
    }
  }
});
