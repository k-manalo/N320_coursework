var puddle = 0; //i tried to make puddle part of the constructor but it would keep reseting back to one every time the hit counter detected a drop
var b = 200;

class Drop {
  constructor() {
    this.x = Math.random() * 400;
    this.y = 0;
  }

  update() {
    this.y++;
    fill(0, 0, 200);
    circle(this.x, this.y, 5);
    if (this.y == 250) {
      //1. everytime a drop passes 250 on the y axis +1 is added to the puddle                                                        counter.
      puddle++;
      console.log(puddle); //to ensure the hit detect was working
    }
  }
}

class Ground {
  //2. I attempted the invoking other objects method.
  constructor(Drop) {
    this.x = 0;
    this.y = 250;
    this.w = 400;
    this.h = 50;
    this.Drop = Drop;
  }
  update() {
    fill(200, 200, b);
    rect(this.x, this.y, this.w, this.h);
  }
  groundPuddle() {
    //3.everytime Drop updated and puddle was divisible by 10 the b value would increase by 5 increasing                              the amount of blue in the rect.
    Drop.update();
    if (puddle % 10 == 0) {
      b += 5;
    }
  }
}

class RainManager {
  constructor() {
    this.drops = [];
    this.ground = [];
  }

  createDrop() {
    //make a new drop
    var newDrop = new Drop();

    //add drop to our collection of drops
    this.drops.push(newDrop);
  }
  createGround() {
    var newGround = new Ground();
    this.ground.push(newGround);
  }

  update() {
    for (var i = 0; i < this.drops.length; i++) {
      this.drops[i].update();
    }
    for (var i = 0; i < this.ground.length; i++) {
      this.ground[i].update();
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
  rainManager.createGround();
  //create a new drop on a 1% chance
  if (Math.random() < 0.01) {
    rainManager.createDrop();
  }
  rainManager.update();
}
