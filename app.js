const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
let painting = false;

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
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else { 
        ctx.lineTo(x, y);
        ctx.stroke();
    }

}
function onMouseDown(event) {
    startPainting();
}

function onMouseUp(event) {
    stopPainting();
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);// offset X and Y is canvas position
    canvas.addEventListener("mousedown", stopPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}