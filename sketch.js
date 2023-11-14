function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(0);
}

function draw() {
  background(220);

  let gridSize = 4;
  let step = width / gridSize;

  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      push();
      translate(x + step / 2, y + step / 2);
      rotate(frameCount * 0.01);
      rectMode(CENTER);
      rect(0, 0, step * 0.8, step * 0.8);
      pop();
    }
  }
}
