/*I would like to acknowledge the assistance provided by ChatGPT which offered code suggestions for this project. Some examples of prompts I used include: 
How can I set it so that a different background image loads each time rather than a colour?
How do I make it so that the text links don't overlap each other?
Give me an intro to p5.sound.
The console is returning these errors: (list of errors provided).
Can you explain this code to me and what creates the position and amount of ellipses: (gradient code from https://p5js.org/examples/color-radial-gradient.html)?
How can I adapt the code so that there are more ellipses and they are sporadic on the page?
How can I through keyPressed() offer 5 different actions where one is randomly selected when the key is pressed each time?*/
//radial gradient code has been adapted from https://p5js.org/examples/color-radial-gradient.html

let dim;
function setup() {
    createCanvas(windowWidth, windowHeight * 3.5);
    background(0);
  
    dim = width / 2;
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(2);
}

function draw() {
  background(0);
  let numEllipses = 10; // Adjust this value to increase or decrease the number of ellipses
  for (let i = 0; i < numEllipses; i++) {
    let x = random(width);
    let y = random(height);
    drawGradient(x, y);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
