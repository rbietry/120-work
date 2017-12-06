Rachel Bietry, 51

[Live Sketch Link](https://rbietry.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


Line 3 makes an object named ball.
Lines 4-10 create parameters for the ball object.
Lines 12-15 are in the setup function.
Line 13 creates the canvas size.
Line 14 sets the background to white.
Lines 19-34 are in the draw function.
Line 21 causes the ball to move along the x axis by adding or subtracting 1 from the ball.x location.
Line 22 causes the ball to move along the y axis by adding or subtracting 1 from the ball.y location.
Lines 25-27 create an if statement that is only triggered when the location of the ball.x exceeds the left or right side of the canvas.
Line 26 makes the ball go in the opposite direction when it hits a wall.
Lines 28-30 create an if statement that is only triggered when the location of the ball.y exceeds the top or bottom of the canvas.
Line 29 makes the ball go in the opposite direction when it hits a wall.
Line 32 sets the fill of the ball to white.
Line 33 creates the ball by making an ellipse set to ball.x, ball.y.
Lines 36-39 are in the mousePressed function.
Line 37 modifies the ball.scale_x to respond to the mouseX location when the mouse is pressed, within a scale of 0.5-10.
Line 38 modifies the ball.scale_y to respond to the mouseY location when the mouse is pressed, within a scale of 0.5-10.

How can you make the ball change direction?
The ball changes direction when it hits the edge of the screen and is multiplied by -1.



## How did you alter the sketch?


I changed the canvas size to fit the full window. I set the background to a new color. I changed the fill of the ball to be random each time it is drawn. I changed the ball.x and ball.y values so that the ball starts in a different location. I changed the ball.width to be larger. I changed ball.scale_x to be different than ball.scale_y. I removed the stroke from the ball.
