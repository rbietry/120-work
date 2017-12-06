

var ball = {};
ball.width = 75;
ball.x = 75;
ball.y = 50;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 3;
ball.scale_y = 15;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('rgb(109, 168, 144)');
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    noStroke();
    fill(random(255));
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
