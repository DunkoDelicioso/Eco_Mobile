let angle = 0;
let r;
let phase = 0;
let x;
let animas = []
let val;
let fr = 24
let slug;
let sul = 45

function preload() {
  mySound = loadSound('ooye.wav');
}

function setup() {
  createCanvas(1000, 1000);
  slider = createSlider(0, 255, 255, 1);
  slider.class("slider")
  //slider.style('width', '1000px');
  //slider.style('height', '100px')
  //slider.style('background-color', 'white')
  mySound.loop()
  
}

function draw() {
  val = slider.value();
  slip = map(val, 0, 255, 10, 0)
  pip = map(val, 0, 255, 2, 0)

  rate = map(val, 0, 255, .3, 1)
  mySound.rate(rate);
  
  
  background(0, val);
  frameRate(fr)
  
  for(a of animas){
    a.display();
  }
  fill(255, 80, 0, slip)
  rect(0, 0, width, height)
}
  
function mousePressed(){
  
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    sul = sul / 2
  let x = random(0, 20)
  let y = random(5, 35)
  animas.push(new animal(x, y , mouseX, mouseY));
  mySound.jump(sul, sul)
  }
  if(sul < 0.005)
    sul = 45
}
  
