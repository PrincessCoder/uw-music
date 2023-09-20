let mic; 
const audioCtx = new AudioContext();
console.log(audioCtx);

const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;