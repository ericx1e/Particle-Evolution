class Particle {
  constructor(x, y) {
    this.radius = 5
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(1, 0);
  }

  display() {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
  }

  move() {
    this.acc.rotate(random(0, 2*PI));
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}
