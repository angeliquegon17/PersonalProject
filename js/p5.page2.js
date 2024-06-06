//amplitude has been adapted from https://p5js.org/reference/#/p5.Amplitude
let sound1, sound2;
let amp1, amp2;
let texts = [
  "We pause for a moment of silence.",
  "I don’t meant that kind of grim silence, which one observes when somebody says,",
  "such and such a famous person has just died and we'll observe a moment of silence in his honour",
  "and everybody frowns and thinks very serious thoughts.",
  "That’s not silence at all.",
  "I mean real silence, in which we stop thinking.",
  "And the real world is not an idea, it is not words.",
  "Reality is...",
  "You will find therefore that if you get with reality all sorts of illusions disappear",
  "Os sábios compreenderam que este mundo natural é apenas uma imagem e uma cópia do paraíso.",
  "Os_______________________FAILURE))#@#((%)%@_@%DE>>TESFl...TEEj500533--__>>>>so.",
  "Listen to your heart. It knows all things, because it came from the Soul of the World, and it will one day return there.",
  "A existência deste mundo é simplesmente uma garantia de que existe um mundo perfeito. Deus criou o mundo para que, através dos seus objetos visíveis, os homens poderia entender seus ensinamentos espirituais e as maravilhas de sua sabedoria.",
  "Devo entender a Tábua de Esmeralda?” o menino perguntou.",
];
let currentTextIndex = 0;
let intervalTime = 5500; // 2000 milliseconds = 2 seconds
let textWidth;
let textHeight;
let links = [
  {
    text: "<!>)#))#(#??",
    href: "../index.html",
  },
  {
    text: "compree",
    href: "page2.html",
  },
  {
    text: "))@(@@__",
    href: "../index.html",
  },
  {
    text: "Esmeralda",
    href: "page2.html",
  },
  {
    text: "$#^&%*()N",
    href: "page3.html",
  },
  {
    text: "ensins",
    href: "page4.html",
  },
  {
    text: "VER@$)#",
    href: "page5.html",
  },
];
let colours = [
  "#4deeea",
  "#39FF14",
  "#CFFF04",
  "#f000ff",
  "#001eff",
  "#fc0303",
  "#000000",
];

function preload() {
  sound1 = loadSound("assets/talkingTrack.mp3");
  sound2 = loadSound("assets/musicTrack.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  textAlign(CENTER, CENTER);
  textSize(130);
  textWidth = windowWidth - 250;
  textHeight = windowHeight - 10;
  setInterval(changeText, intervalTime); // Change text every 2 seconds
  amp1 = new p5.Amplitude();
  amp2 = new p5.Amplitude();
  amp1.setInput(sound1);
  amp2.setInput(sound2);
  sound1.play();
  sound2.play();
  let linksContainer = select("#links");
  links.forEach((linkData) => {
    // Adjust the threshold as needed
    let link = createA(linkData.href, linkData.text, "_self");
    link.class("link");
    styleLink(link);
    linksContainer.child(link);
  });
}

function draw() {
  background(0);
  fill(getRandomColor());
  textLeading(100);
  text(texts[currentTextIndex], 250, 20, textWidth, textHeight);

  let level1 = amp1.getLevel();
  let size1 = map(level1, 0, 0.2, 10, 600);
  ellipse(width / 2, height / 2, size1, size1);
  fill(255, 0, 230);
  //responsiveness and min&max
  let level2 = amp2.getLevel();
  let size2 = map(level2, 0, 0.2, 0, 500);
  ellipse(width / 3, height / 4, size2, size2);
  fill(255, 250, 0);
  noStroke();
}
function changeText() {
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}
function togglePlay() {
  if (sound1.isPlaying() && sound2.isPlaying()) {
    sound1.pause();
    sound2.pause();
  } else {
    sound1.loop();
    sound2.loop();
  }
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
}
function getRandomColor() {
  return colours[Math.floor(random(colours.length))];
}

function getRandomFontFamily() {
  let fonts = ["Arial", "Verdana", "Helvetica", "Geneva", "Tahoma"];
  return random(fonts);
}
