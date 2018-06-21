function setup() {
  createCanvas(1280, 720);
  frameRate(60);
  background(0);
}

function draw() {
  var x = random(0, 1280);
  var y = random(0, 720);
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  
  fill(r,g,b);
  ellipse(x, y, 100, 100);
  
  //fill(255);
 // ellipse(mouseX, mouseY, 100, 100)
}