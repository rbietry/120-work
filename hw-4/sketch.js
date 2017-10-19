function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 600, 900 );
}

function draw() {
    // set the background color
    background( 'rgb(67, 57, 91)' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 300, 450 );


    // ** BODY **********************************
    push();
    // body code goes here
    noStroke();
    // hair
    fill('rgb(121, 62, 37)');
    rect(-100, -160, 200, 300, 15);
    // legs
    fill('rgb(33, 33, 33)');
    // left leg
    rect( -60, 300, 50, 150);
    // right leg
    rect( 10, 300, 50, 150);
    // dress
    fill('rgb(25, 25, 61)');
    triangle( 0, -50, -100, 300, 100, 300 );
    pop();
    // **END BODY**


    // ** ARMS **********************************
    push();
    // arms code goes here
    noStroke();
    fill('rgb(199, 140, 72)');
    // left arm
    push();
    translate( -25, 30 );
    rotate(radians(50));
    rect( 0, 0, 15, 150, 20 );
    pop();
    ellipse(-135, 135, 30, 30);
    // right arm
    push();
    translate(20, 30);
    rotate(radians(250));
    rect( 0, 0, 15, 150, 20);
    pop();
    ellipse(155, -25, 30, 30);
    pop();
    // staff
    stroke('rgb(47, 34, 8)');
    strokeWeight(15);
    line(157, -150, 157, 400);
    noStroke();
    fill('rgb(35, 157, 124)');
    ellipse(157, -150, 50, 50);
    // **END ARMS**


    // ** HEAD **********************************
    push();
    // head code goes here
    // make skull first
    noStroke();
    // face
    fill('rgb(199, 140, 72)');
    ellipse( 0, -100, 150, 150 )
    // hat
    fill('rgb(33, 33, 33)');
    triangle(-70, -160, 70, -160, 0, -375);
    ellipse(0, -160, 200, 25);
    // nose
    stroke('black');
    strokeWeight(3);
    line(0, -105, -10, -95);
    line(-10, -95, 0, -95)


    // **MOUTH**
    push();
    // mouth code goes here
    scale(-1);
    stroke('rgb(77, 13, 13)');
    strokeWeight(10);
    noFill();
    arc( 0, 50, 70, 60, 0, PI );
    pop();
    // **END MOUTH**

    // **EYES**
    push();
    // eye code goes here
    // left eye
    stroke('black');
    strokeWeight(1);
    fill('white');
    ellipse( -35, -125, 50, 40 );
    fill('rgb(46, 110, 150)');
    ellipse( -35, -125, 35, 35 );
    noStroke();
    fill('black');
    ellipse( -35, -125, 15, 15 );
    // right eye
    stroke('black');
    fill('white');
    ellipse( 35, -125, 50, 40 );
    fill('rgb(46, 110, 150)');
    ellipse( 35, -125, 35, 35 );
    noStroke();
    fill('black');
    ellipse( 35, -125, 15, 15 );
    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
