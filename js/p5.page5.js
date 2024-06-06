//code adapted from https://processing.org/examples/graphing2dequation.html and https://p5js.org/reference/#/p5.Oscillator
let links = [
  { text: "M>?_)(*&)", href: "index.html" },
  { text: "*()#@U%(>__", href: "page2.html" },
  { text: "*()025234523__", href: "page2.html" },
  { text: "existência", href: "page3.html" },
  { text: ")!((#))0000000000000.", href: "page3.html" },
  { text: "simplesmente ", href: "page4.html" },
  { text: "(!$!@$)", href: "page5.html" },
];
let osc;
let oscPlaying = false;
let texts = [
  "the zone of enlightment is close",
  "but is this the right time to understand the Emerald Tablet?",
  "you are in the desert",
  "all you have to do is contemplate a simple grain of sand",
  "follow your personal legend, who knows where you will end up",
  "Everyone on earth has a treasure that awaits _________THEM___________^",
  "(*&^%$), but, unfortunately, very few follow the path laid out for them",
  "the path to their +_(*YGVBNM>?_)(*&)Personal Legends",
  " It does this not because it is evil,:ASEJEVILEVILEVIL666666666EVILEVILEVIL_____?>,1245433333",
];
let currentTextIndex = 0;
let intervalTime = 5500;
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
  textAlign(CENTER, CENTER);
  textSize(40);
  textLeading(50);
  setInterval(changeText, intervalTime);
  pixelDensity(1);
  osc = new p5.Oscillator("sine");
  osc.start();

  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d", { willReadFrequently: true });

  let linksContainer = select("#links");
  links.forEach((linkData) => {
    let link = createA(linkData.href, linkData.text, "_self");
    link.class("link");
    styleLink(link);
    linksContainer.child(link);
  });
}

function styleLink(link) {
  let textTransforms = ["uppercase", "lowercase"];
  let randomTransform = random(textTransforms);
  link.style("font-size", `${random(15, 70)}px`);
  link.style("left", `${random(5)}vw`);
  link.style("top", `${random(30)}vh`);
  link.style("color", getRandomColor());
  link.style("font-family", getRandomFontFamily());
  link.style("text-transform", randomTransform);
  if (random(1) < 0.5) {
    // 50% chance
    link.style("background-color", getRandomColor());
    // link.style("padding", "10px");
  }
}

function getRandomColor() {
  return colours[Math.floor(random(colours.length))];
}

function getRandomFontFamily() {
  let fonts = ["Arial", "Verdana", "Helvetica", "Geneva", "Tahoma"];
  return random(fonts);
}

function draw() {
  loadPixels();
  let n = (mouseX * 10.0) / width;
  let w = 16.0; // 2D space width
  let h = 16.0; // 2D space height
  let dx = w / width; // Increment x this amount per pixel
  let dy = h / height; // Increment y this amount per pixel
  let x = -w / 2; // Start x at -1 * width / 2
  for (let i = 0; i < width; i++) {
    let y = -h / 2; // Start y at -1 * height / 2
    for (let j = 0; j < height; j++) {
      let r = sqrt(x * x + y * y); // Convert cartesian to polar
      let theta = atan2(y, x); // Convert cartesian to polar
      // Compute 2D polar coordinate function
      let val = sin(n * cos(r) + 5 * theta); // Results in a value between -1 and 1
      // Map resulting value to grayscale value
      let c = ((val + 1.0) * 255.0) / 2.0; // Scale to between 0 and 255
      let index = (i + j * width) * 4;
      pixels[index + 0] = c; // Red
      pixels[index + 1] = c; // Green
      pixels[index + 2] = c; // Blue
      pixels[index + 3] = 255; // Alpha
      y += dy; // Increment y
    }
    x += dx; // Increment x
  }
  updatePixels();
  fill(251, 0, 255);
  noStroke();
  text(texts[currentTextIndex], width / 2 - 50, height / 2);
  if (oscPlaying) {
    let freq = map(mouseX, 0, width, 100, 1000);
    osc.freq(freq);
  }
}

function mousePressed() {
  userStartAudio();
  if (oscPlaying) {
    osc.stop();
  } else {
    osc.start();
  }
  oscPlaying = !oscPlaying;
}

function changeText() {
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}
