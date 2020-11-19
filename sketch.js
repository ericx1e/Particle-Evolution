var particles = [];

function setup() {
  createCanvas(800, 600);
  for(var i = 0; i < 50; i++) {
    append(particles, new Particle(width/2, height/2));
  }
}

function draw() {
  background(220);
  particles.forEach((item, i) => {
    item.move();
    item.display();
  });

}
