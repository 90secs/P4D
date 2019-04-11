var bubble = [];

function setup() {
  createCanvas(400, 400);

  for (i = 0; i < 100; i++) {
    bubble[i] = new Bubble(random(0, width), random(0, height), random(5, 10), random(50, 100));
  }
}

function draw() {
  background(220);

  for (i = 0; i < bubble.length; i++) {
    bubble[i].display();
    bubble[i].rise();
    bubble[i].wrap();
  }
}