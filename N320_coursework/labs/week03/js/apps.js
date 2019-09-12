class Ball {
  //obeserver pattern
  constructor() {
    this.position = { x: 100, y: 100 };
    this.velocity = { x: 10, y: 0 };
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    circle(this.position.x, this.position.y, 20);

    if (this.position.x < 0 || this.position.x > 400) {
      World.ballBeyond(this);
      World.boxBeyond(this);
    }
  }
}

var World = {
  //singleton pattern
  bgcolor: [237, 119, 83],
  ballBeyond: function(whichBall) {
    this.bgcolor = [Math.random() * 255, Math.random() * 255, 83];
    whichBall.position.x = 100;
    whichBall.velocity.x = (Math.random() - 0.5) * 20;
  },

  boxBeyond: function(whichBox) {
    whichBox.size.w + 5;
    whichBox.size.h + 5;
  }
};

class Box {
  constructor() {
    this.size = { x: 100, y: 100, w: 10, h: 10 };
  }

  grow() {
    rect(this.size.x, this.size.y, this.size.w, this.size.h);
  }
}

var b = new Box();

var ball = new Ball(); //mediator pattern

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(World.bgcolor);
  ball.update();
  b.grow();
}
