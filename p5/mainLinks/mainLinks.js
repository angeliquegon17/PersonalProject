/*
 * @name Words
 * @arialabel Three columns of the words “ichi,” “ni,” “san,” and “shi” gradienting from black to white on a gray background. The first column is right aligned, the middle column is center aligned, and the left column is left aligned
 * @description The text() function is used for writing words to the screen.
 * The words can be aligned left, center, or right with the textAlign()
 * function, and like with shapes, words can be colored with fill().
 */
let font,
  fontSize = [40, 200, 100, 10];
let cols = ["#00ff2f", "#eaa116", 'rgb(255, 77, 255)', "#5d949b", "#2a2d60"];
//let linkSite=['http://p5js.org/','https://p5js.org/reference/#/p5/createA']
//let linkText=['link1','link2', 'link3', 'link4'];
//let links=['http://p5js.org/','https://p5js.org/reference/#/p5/createA', 'https://en.wikipedia.org/wiki/Blue','https://en.wikipedia.org/wiki/RYB_color_model']

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('data/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set text characteristics
  //textFont(font);
 // textSize(random(fontSize));
 // textSize(40);
  //a= createA(random(links)); 
  let l1 = createA('https://en.wikipedia.org/wiki/Blue', 'directory 1');
  let l2 = createA('https://en.wikipedia.org/wiki/RYB_color_model', 'site 2');
  let l3 = createA('https://en.wikipedia.org/wiki/Moses_Harris', 'directory 2');
  let l4 = createA('https://en.wikipedia.org/wiki/Green', 'site 4');
  let l5 = createA('https://en.wikipedia.org/wiki/Yellow', 'site 5');
   links=[l1,l2,l3,l4,l5];
  l1.style('color:brown');
  l2.style('color', 'blue');
  l3.style('color', 'coral');
  l4.style('color', 'pink');
  l5.style('color', 'green');
  l1.size('100,100');
}

function draw() {
 // background(random(cols));
  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);
  noLoop();
  random(links).position(random(width),random(height));
  random(links).position(random(width),random(height));
  random(links).position(random(width),random(height));
  random(links).position(random(width),random(height));
  random(links).position(random(width),random(height));


 // text(random(a), 400,400);

}
//function drawTextHtml(){
  //myElement.position()
  //myElement.html()
//}
/*function drawWords() {

     h1 = createElement('a', 'welcome');
     fill(random(cols));
   h1.html(random(links))
 
  //text((h1), width/2, height/2);
    
  fill(random(cols));
  text(random(links), random(width), random(height));
    fill(random(cols));
  text(random(links), random(width), random(height));
    fill(random(cols));
  text(random(links), random(width), random(height));
      fill(random(cols));
  text(random(links), random(width), random(height));
 fill(0);
  text(random(links), x, 150);
    fill(0);
  text(random(links), x, 220);
  fill(0);
  text(random(links), x, 290);
} */
