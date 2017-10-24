function setup() {
    createCanvas( windowWidth, windowHeight );
}

var eyeSize = 75;
var circleSize = 100;

function draw(){

  // erase every frame
  background( 'rgb(59, 50, 89)' );

  // circles for moving background
  push();
  translate(windowWidth *0.5, windowHeight *0.5);
  noStroke();
  fill('rgb(37, 58, 120)');
  ellipse(-200, 150, circleSize);
  fill('rgb(41, 108, 92)');
  ellipse(300, -125, circleSize);
  circleSize = circleSize+1;
  pop();

  // turn the cursor off
  noCursor();

  // draw fish cursor
  push();
  translate(mouseX, mouseY);
  fill('rgb(115, 72, 38)');
  noStroke();
  ellipse(0, 0, 75, 50);
  triangle(20, 0, 60, -20, 60, 20);
  fill('black');
  ellipse(-20, -12, 10);
  pop();

  // translate to center of canvas
  translate(windowWidth *0.5, windowHeight *0.5);

  // draw cat head
  fill('white');
  ellipse(0, 0, 300);

  // left ear
  triangle(-100, -100, -50, -100, -75, -200);
  // right ear
  triangle(100, -100, 50, -100, 75, -200);

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
  // rotate pupils based on mouseX
  rotate( radians(mouseX) );
  ellipse(13, 13, eyeSize *0.5);
  pop();

  // right pupil
  push();
  translate(60, -40)
  // rotate pupils based on mouseY
  rotate( radians(mouseY) );
  ellipse(13, 13, eyeSize *0.5);
  pop();

}
