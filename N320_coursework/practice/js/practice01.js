class Room {
  constructor(size) {
    this.size = size;
  }
}

var myRoom = new Room(50);

class Building extends Room {
  constructor(size) {
    super(size);
    this.kind = "library";
  }

  size() {
    this.size--;

    if (this.size < 25) {
      document.write("This " + this.kind + "is huge!");
    }
  }
}
