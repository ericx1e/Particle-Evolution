class Particle {
  constructor(x, y) {
    this.radius = 5
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(speed, 0);
    this.path = [];
    this.step = 0;
    this.dead = false;
    for(var i = 0; i < totalSteps; i++) {
      this.acc = createVector(speed, 0);
      this.acc.rotate(random(0, 2*PI));
      append(this.path, this.acc);
      // this.path[i] = this.acc.rotate(random(0, 2*PI));
    }
  }

  display() {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
  }

  move() {
    this.vel.add(this.path[this.step]);
    this.pos.add(this.vel);
    this.step++;
    if(this.step >= totalSteps) {
      this.dead = true;
    }
    if(this.pos.x < this.radius || this.pos.x > width-this.radius || this.pos.y < this.radius || this.pos.y > height-this.radius) {
      this.dead = true;
    }
    walls.forEach((item, i) => {
      if(item.touching(this.pos, this.radius)) {
        this.dead = true;
      }
    });

  }
}
