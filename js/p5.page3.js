let links = [
  {
    text: "You don't even have to understand the desert:YOU!*OO)##()### NOT UNDERQ)#(%(SSTAND)) all you have to do is contemplate a simple grain of sand, and you will see init all the marvels of creation.",
    href: "../index.html",
  },
  {
    text: "And every search ends with the victor's being severely tested TESTM#()(TEST)%(#))#TESM#*%(@))++++++~~~~~.",
    href: "page2.html",
  },
  {
    text: "The desert will give you an understan$%^&*()*&^%$#$%^&*(&^^^^^^^^^^^^^^^^^^^^^ding of the world; in fact, anything on the face of the earth will do that. ",
    href: "page3.html",
  },
  {
    text: "Continue _________@(*!#$8(%#*  AJFOEEEEEEEE)))))))000000000 HEED THE WARNINGS",
    href: "page4.html",
  },
  {
    text: "Você nem precisa entender o deserto: basta contemplar um simples grão de areia e verá nele todas as maravilhas da criação.",
    href: "../index.html",
  },
  {
    text: "Toda busca começa com sorte de iniciante. E toda busca DON NOT____@@@(@@__________termina com o vencedor sendo severamente testado.",
    href: "page2.html",
  },
  {
    text: "O deserto 77777777777&7%^%^%%%%%%^^&&lhe dará uma compreensão do mundo; na verdade, qualquer coisa na face da terra fará isso. ",
    href: "../index.html",
  },
  {
    text: "ConTTTTTTTTTTTTTTTTTTTTTTTTTTtinue a prestar atenção aos presságios. Seu coração ainda é capaz de te mostrar onde está o tesouro",
    href: "page3.html",
  },
  {
    text: "Você nem precisa entender o deserto: basta contemplar um simples grão de areogik90u340520200202000)))))*****@@**@@@ia e verá nele todas as maravilhas. da criação",
    href: "page5.html",
  },
  {
    text: "Every search begins with beginner's LOO)))))))(@(@(@@@UKKKKKKKKKKKKLUCKLUCKLLUCKLUCK))).",
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

let images = [
  "../img/image1.png",
  "../img/image2.png",
  "../img/image3.png",
  "../img/image4.png",
  "../img/image5.png",
  "../img/image6.png",
  "../img/image7.png",
  "../img/image8.png",
];
let numImages = 8; 
standardSize = 250;
function preload() {
  for (let i = 0; i < numImages; i++) {
    images[i] = loadImage(`../img/image${i + 1}.png`);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight * 2);
  document.body.style.backgroundColor = getRandomColor();
  let linksContainer = select("#links");
  links.forEach((linkData) => {
    if (random(1) > 0.5) {
      let link = createA(linkData.href, linkData.text, "_self");
      link.class("link");
      styleLink(link);
      linksContainer.child(link);
    }
  });
  for (let img of images) {
    img.resize(standardSize, standardSize);
    let x = random(width - img.width);
    let y = random(height - img.height);
    image(img, x, y);
  }
}

function styleLink(link) {
  let textTransforms = ["uppercase", "lowercase"];
  let randomTransform = random(textTransforms);
  link.style("font-size", `${random(15, 150)}px`);
  link.style("left", `${random(90)}vw`);
  link.style("top", `${random(130)}vh`);
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
