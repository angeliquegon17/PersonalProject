var x = 0, y = 0;
var stepSize = 5.0;
var letters = " But you are in the desert. So immerse yourself in it. The desert will give you an understanding of the world; in fact, anything on the face of the earth will do that. You don't even have to understand the desert: all you have to do is contemplate a simple grain of sand, and you will see in it all the marvels of creation."
//   Do you remember Foreign Policy.  Love was changing the mind of pretenders. While chasing the clouds away. Our hearts were ringing. In the key that our souls were singing. As we danced in the night. Ba-dee-ya, say, do you remember? Ba-dee-ya, dee-ya, dee-ya Foreign Policy


var fontSizeMin = 15;
var angleDistortion = 0.0;
var counter = 0;
function preload() {
  font1 = loadFont('EditorialNew-UltralightItalic.otf');
  font2 = loadFont('BaseticaTrial-Regular.otf');
  font3 = loadFont('EditorialNew-UltralightItalic.otf');
  font4 = loadFont('MorePro-CondMediumItalic.otf');

}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
 let myColors = ["#B0B4C6", "#C6C1B0","#B6C6B0","#C6B0B0","#B0BFC6"];
   colour = random(myColors);
  
  background(colour);
  smooth();
  cursor(CROSS);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);

}

function draw() {
 
  
 /* push();
    translate(width/2,height/2);
  textSize(50);
  textAlign(CENTER);
  textFont(font1)
  fill("#0000ff")
  text('(move your mouse and maybe click)',0,0);
pop(); */
  


  if (mouseOver) {
    var d = dist(x,y, mouseX,mouseY);
    fill("#0000ff");
    textFont(font3);
    textSize(fontSizeMin+d/2)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
  
  


  
  
  
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  if (key == 's' || key == 'S') save("image_1.png");
}

function mouseClicked() {
  let myColors = ["#B0B4C6", "#C6C1B0","#B6C6B0","#C6B0B0","#B0BFC6"];
   colour = random(myColors);
  background(colour);
}
function windowResized() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(colour);
}
