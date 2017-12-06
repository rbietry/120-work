var eyeSize = 75;
var circleSize = 10;
let stringArray = ["Can", "you", "even", "read", "this", "fast", "?", "Subliminal", "messages", "!"];



function setup() {
    createCanvas( windowWidth, windowHeight);
}

let idx = 0;

function draw(){

  // erase every frame
  background( 'rgb(59, 50, 89)' );

  circleBackground();

  textSize(50);
  text(stringArray[idx], 100, 250);
  idx = ( idx + 1 ) % stringArray.length;

  drawFish();

  push();
  translate(windowWidth *0.5, windowHeight *0.5);
  drawKitty();
  pop();

}


function drawKitty(){

  fill('white');
  // left ear
  triangle(-100, -100, -50, -100, -75, -200);
  // right ear
  triangle(100, -100, 50, -100, 75, -200);

  // draw cat head
  ellipse(0, 0, 300);

  // nose
  fill('black')
  triangle(-25, 25, 25, 25, 0, 50);

  // eyes
  stroke(3);
  noFill();
  // left eye
  ellipse(-60, -40, eyeSize);
  // right eye
  ellipse(60, -40, eyeSize)

  // pupils
  noStroke();
  fill('black');

  // left pupil
  push();
  translate(-60, -40)
  // rotate pupil based on mouseX
  rotate( radians(mouseX) );
  ellipse(13, 13, eyeSize *0.5);
  pop();

  // right pupil
  push();
  translate(60, -40)
  // rotate pupil based on mouseY
  rotate( radians(mouseY) );
  ellipse(13, 13, eyeSize *0.5);
  pop();
}


function drawFish(){
  // draw fish cursor
  noCursor();
  push();
  translate(mouseX, mouseY);
  fill('rgb(115, 72, 38)');
  noStroke();
  ellipse(0, 0, 75, 50);
  triangle(20, 0, 60, -20, 60, 20);
  fill('black');
  ellipse(-20, -12, 10);
  pop();
}


function circleBackground(){
  // circles for background
  push();
  translate(windowWidth *0.5, windowHeight *0.5);
  noStroke();
  fill('rgb(37, 58, 120)');
  ellipse(-200, 150, circleSize);
  fill('rgb(41, 108, 92)');
  ellipse(300, -125, circleSize);
  circleSize = circleSize+1;
  pop();
}
