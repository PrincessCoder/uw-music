    let mic;
    let fft;

    function setup() {
      createCanvas(800, 400);
      mic = new p5.AudioIn();
      mic.start();
      fft = new p5.FFT();
      fft.setInput(mic);
    }

    function draw() {
      background(0);
      let spectrum = fft.analyze();

      for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        noStroke();
        fill(255, 0, 0); // You can change the color
        rect(x, height, width / spectrum.length, h);
      }
    }
