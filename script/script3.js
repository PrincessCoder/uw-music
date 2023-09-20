        // Initialize the audio context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();

        // Create an analyser node to process the audio
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // Create a canvas for visualization
        const canvas = document.getElementById('visualizationCanvas');
        const ctx = canvas.getContext('2d');

        // Connect the microphone input to the analyser
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                const microphone = audioContext.createMediaStreamSource(stream);
                microphone.connect(analyser);
                analyser.connect(audioContext.destination);

                // Visualization loop
                function visualize() {
                    analyser.getByteFrequencyData(dataArray);

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    const sliceWidth = canvas.width * 1.0 / bufferLength;
                    let x = 0;

                    for (let i = 0; i < bufferLength; i++) {
                        const v = dataArray[i] / 128.0;
                        const y = v * canvas.height / 2;

                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }

                        x += sliceWidth;
                    }

                    ctx.strokeStyle = 'red';
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    requestAnimationFrame(visualize);
                }

                // Start visualization
                visualize();
            })
            .catch(function(err) {
                console.error('Error accessing the microphone:', err);
            });

