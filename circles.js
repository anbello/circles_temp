let scrSize;
let imgSize = 2000;
let numCicles = 200;

let cg;
let img;

function setup() {
  if (windowWidth > windowHeight) {
    scrSize = windowHeight;
  } else {
    scrSize = windowWidth;
  }

  createCanvas(scrSize, scrSize);

  cg = createGraphics(imgSize, imgSize);

  img = createImage(imgSize, imgSize);

  background(0);
  pixelDensity(1);

  cg.background(0);
  cg.pixelDensity(1);
}

function draw() {
  if (frameCount == 1) {
    cg.background(0);
    cg.noStroke();
    
    for (let i = 0; i < numCicles; i++) {
      let x = imgSize*fxrand();
      let y = imgSize*fxrand();
      let radius = imgSize*fxrand()/4;
      let r = 256*fxrand();
      let g = 256*fxrand();
      let b = 256*fxrand();
      cg.fill(r, g, b, 160);
      cg.circle(x, y, radius);
    }

    img.copy(cg, 0, 0, imgSize, imgSize, 0, 0, imgSize, imgSize);

    image(img, 0, 0, scrSize, scrSize);
  }

  noLoop();
}

function keyPressed() {
  if (key == 's') {
    img.save("circles-" + fxhash + ".png");
  }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    scrSize = windowHeight;
  } else {
    scrSize = windowWidth;
  }
  resizeCanvas(scrSize, scrSize);
  image(img, 0, 0, scrSize, scrSize);
}