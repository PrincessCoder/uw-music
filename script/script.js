let audio1 = new Audio ('data:audio')
const audioCtx = new AudioContext();
console.log(audioCtx);

const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

    {
    // Create an Audio input
    mic = new p5.AudioIn();
  
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
  }
  {
    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel();
    fill(0);
    stroke(200);
  
    // Draw an ellipse with height based on volume
    let h = map(vol, 0, 1, height, 0);
    ellipse(width / 2, h - 25, 50, 50);
  }
  
