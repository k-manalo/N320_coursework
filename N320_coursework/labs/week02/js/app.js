class Drop {
  constructor() {
    this.x = 40;
    this.y = 0;
  }

  update() {
    this.y++;
    fill(0, 0, 200);
    circle(this.x, this.y, 5);
  }
}

var d = new Drop();

//runs once before app starts
function setup() {
  createCanvas(400, 300);
}
//runs 60 times a sec
function draw() {
  d.update();
}

class rainManager {
  constructor() {
    this.drops = [];
  }
  createDrop() {}
}
