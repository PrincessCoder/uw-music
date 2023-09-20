let mic;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(255);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(50);
  stroke(200);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}
