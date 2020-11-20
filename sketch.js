const totalSteps = 200;
const mutationRate = 0.2;
const speed = 0.5;
const population = 100;

var particles = [];
var walls = [];

function setup() {
  createCanvas(800, 600);
  for(var i = 0; i < population; i++) {
    append(particles, new Particle(width/2, height/2));
  }
  walls[0] = new Wall(100, 100, 300, 25);
}

function draw() {
  background(220);

  walls.forEach((item, i) => {
    item.display();
  });


  particles.forEach((item, i) => {
    item.display();
    if(item.dead) {
      return 0;
    }
    item.move();
  });

}
