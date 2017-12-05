var pos_x;
var pos_y;
var point_width = 1 % 2;
var max_pos_mvt = 1 % 2;
var circle_min = 10;
var circle_max;

var colors = {};

colors.max = 255;


function setup() {

  createCanvas (windowWidth, windowHeight);
  frameRate (3);

  pos_x = width * 0.5;
  pos_y = height * 0.3;
  circle_max = width - 20;


  //random color background each time
  var red = floor( random(256) );
  var green = floor( random(256) );
  var blue = floor( random(256) );
  background( red, green, blue );

}


function draw() {

  noFill();
  stroke( round( random(colors.max) ) );


  //circles on left and right that draw random sizes
  var circle_size = random( 10, width-10 );
  ellipse( width/6, height/4, circle_size );
  ellipse( width*0.8, height*0.3, circle_size );


  //circle that moves and increases in size on its own
  ellipse(pos_x, pos_y, point_width);
  pos_x += floor(random(-max_pos_mvt, max_pos_mvt + 1));
  pos_y += floor(random(-max_pos_mvt, max_pos_mvt + 1));
  point_width += .3


  //middle circle responds to mouseX
  var circle_width = map( mouseX, 0, width, circle_min, circle_max );
  ellipse( width/2, height/2, circle_width );

}
