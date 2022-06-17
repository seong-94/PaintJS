const canvas = document.getElementById("jsCanvas"); //html5
const ctx = canvas.getContext("2d"); // pixel coordinates
const colors = document.getElementsByClassName("jsColors");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "black"; // line color
ctx.lineWidth = 2.5; // line width

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath(); // start a new path(is a line)
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y); // Create line
    ctx.stroke(); // draw the line (every time)
  }
}
function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function handleColorChange(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  // console.log(color);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // offset X and Y is canvas position
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorChange)
);

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

function handleModeChange(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

if (mode) {
  mode.addEventListener("click", handleModeChange);
}
