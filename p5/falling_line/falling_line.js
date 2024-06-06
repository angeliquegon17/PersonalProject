let lineY = 0;
let lineHeight = 50;
let lineSpeed = 5;

let bottomRectangleHeight = 0;

let bgColor;
let fgColor;

var cream, orange, red, aqua, blue;
cream="#cbc4aa";
orange="#eaa116";
red="#a42d19";
aqua="#5d949b";
blue="#2a2d60";
colours=[cream,orange,red,aqua,blue];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = randomColor();
  fgColor = randomColor();
}

function draw() {
  background(bgColor);
  stroke(fgColor);
  fill(fgColor);

  // draw the falling line
  rect(0, lineY, width, lineHeight);

  // draw the bottom rectangle
  if (bottomRectangleHeight > 0) {
    rect(0, height - bottomRectangleHeight, width, bottomRectangleHeight);
  }

  lineY += lineSpeed;

  // if the line reaches the bottom rectangle,
  // make the bottom rectangle bigger
  if (lineY >= height - bottomRectangleHeight - lineHeight) {
    bottomRectangleHeight += lineHeight;
    lineY = 0;

    // if the bottom rectangle fills the screen, start over
    if (bottomRectangleHeight >= height) {
      bottomRectangleHeight = 0;
      bgColor = fgColor;
      fgColor = randomColor();
    }
  }
}

function randomColor() {
  return random(colours);
}
