var lotteryNumbers = {
  playerNumbers: ["100564", "234990", "418221", "907338"],
  getNumber: function() {
    return playerNumbers[Math.random() * playerNumbers.length];
  }
};

var lotteryWinner = lotteryNumbers.getNumber();
