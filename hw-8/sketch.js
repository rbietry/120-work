let rows, x_space;
let cols, y_space;

function setup() {
	createCanvas( windowWidth, windowHeight);
  frameRate(3.5);
	noStroke();
  x_space = 50;
	rows = floor( width / x_space );
	y_space = 50;
	cols = floor( height / y_space );
}

function draw() {
  background('rgb(5, 117, 64)');

  let numPerRow = 20;
	let circleSize = 50;
	let pad = width / numPerRow;

  //background dots
	for ( let y = circleSize; y < height; y += pad) {
		for ( let x = circleSize; x < width; x += pad) {
			fill( random(15, 100), 15, random(50, 75) );
			ellipse( x, y, circleSize, circleSize );
		}
	}

  let x = 1;
	let y = 1;

  //randomly placed dots
	while ( x != 0 ){
		x = floor(random() * rows);
		y = floor(random() * cols);

		fill( random(50,255), random(255,100), random(75,50) );
		ellipse( x*x_space, y*y_space, random(10, 150) );
	}
}
