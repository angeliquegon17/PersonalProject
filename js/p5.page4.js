//the code was adapted from https://processing.org/examples/charactersstrings.html
let letter;
let words = "Begin typing...";
let colours = [
  "#4deeea",
  "#39FF14",
  "#CFFF04",
  "#f000ff",
  "#001eff",
  "#fc0303",
  "#000000",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  textSize(40);
  fill(random(colours)); 
  frameRate(4);
  text("YOU HAVE ARRIVED AT THE ^PYRAMIDS^^.", 40, 100);
  text("HAVE YOU LISTENED TO THE SOUL OF THE WORLD? ", 40, 200); 
  text("BARE YOUR HEART AND ~~~~ENTER!!<>__ WHEN COMPLETED.", 40, 300);

  textSize(30);
  text(words, 40, 400, 540, 300);
}

function keyTyped() {
  if ((key >= "A" && key <= "z") || key == " ") {
    letter = key;
    words = words + key;
    console.log(key);
  }
}
function keyPressed() {
  if (keyCode === BACKSPACE) {
    words = words.substring(0, words.length - 1);
  } else if (keyCode === ENTER) {
    let randomAction = Math.floor(random(6)) + 1; 
    switch (randomAction) {
      case 1:
        words = "";
        break;
      case 2:
        window.location.href = "page2.html";
        break;
      case 3:
        window.location.href = "page3.html";
        break;
      case 4:
        window.location.href = "page4.html";
        break;
      case 5:
        window.location.href = "../index.html";
        break;
      case 6:
        window.location.href = "page5.html";
        break;
    }
  }
}
