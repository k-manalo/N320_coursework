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

class Ground {
  //constructor
  //set starting color
  //start hit count
  //
  //update-draws rect to sreen
  //
  //drop hit detect
  //change color every 10 drops
}

class RainManager {
  constructor() {
    this.drops = [];
  }

  createDrop() {
    //make a new drop
    var newDrop = new Drop();

    //add drop to our collection of drops
    this.drops.push(newDrop);
  }

  update() {
    for (var i = 0; i < this.drops.length; i++) {
      this.drops[i].update();
    }
  }
}

//global variables
var rainManager = new RainManager();
//Run once before the application starts
function setup() {
  createCanvas(400, 300);
}

//runs 60 times a second, or so
function draw() {
  //clear background
  background(255);

  //create a new drop on a 1% chance
  if (Math.random() < 0.01) {
    rainManager.createDrop();
  }
  rainManager.update();
}
