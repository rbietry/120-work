let bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
}

function mouseDragged() {
    let r = random(15, 75);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(random(5), random(25), random(100));
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-15, 15);
        this.y = this.y + random(-15, 15);
    }

    show() {
        stroke(random(255));
        strokeWeight(5);
        fill(random(255), random(255), random(255), random(255));
        ellipse(this.x, this.y, this.r * 2);
    }
}
