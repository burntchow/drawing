const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');

// Function to resize the canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Resize the canvas initially and when the window is resized
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);
document.getElementById('clearButton').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
}
