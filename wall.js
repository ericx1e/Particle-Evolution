class Wall {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

 display() {
   rectMode(CORNER);
   fill(150);
   stroke(0);
   strokeWeight(3);
   rect(this.x, this.y, this.w, this.h);
 }

 touching(pos, r) {
   return pos.x - r < this.x + this.w && pos.x + r > this.x && pos.y - r < this.y + this.h && pos.y + r > this.y;
 }
}
