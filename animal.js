class animal {
  constructor (x, y, z, w) {
    this.inc = 0
    this.flux = x
    this.r1 = 0
    this.r = y
    this.phase = 0;
    this.posX = z
    this.posY = w
    
    this.pos = createVector(z,w)
    this.vel = p5.Vector.random2D()
    this.acc = p5.Vector.random2D();
    this.acc.div(random(0, 100));
    
  }
  
display() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.vel.div(pip);
    if(this.vel.x > 7){
      this.acc.x *= -1
      this.acc.y *= -1
    }
      if(this.vel.y < -7){
      this.acc.x *= -1
      this.acc.y *= -1
    }
    
    fill(255, val)
    text(this.inc, this.pos.x + 30, this.pos.y + 50);
  
    push();
    translate(this.pos.x, this.pos.y);
    
    stroke(255);
    strokeWeight(4);
    noFill(0);

    this.inc = TWO_PI / (this.flux);
    this.phase += this.vel.y / 4  
    beginShape();
    for (let a = 0; a < TWO_PI; a += this.inc) {
      this.r1 = this.r + sin(a * 10 + this.phase) * 50;
      this.posX = this.r1 * cos(a);
      this.posY = this.r1 * sin(a);
      curveVertex(this.posX, this.posY);
    }
    endShape(CLOSE);
 
    pop();

  	if(this.pos.y < -150){
      this.pos.y = 1150 
    }
    if(this.pos.x < -150){
       this.pos.x = 1150
    }
	if(this.pos.x > 1150){
      this.pos.x = -150
    }
    if(this.pos.y > 1150){
      this.pos.y = -150
    }
  if(this.inc > .95){
    this.inc *= -1
  }
  }
  
}