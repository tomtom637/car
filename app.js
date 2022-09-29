export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");

const app = document.getElementById("app");
canvas.classList.add("canvas");
canvas.width = 800;
canvas.height = 800;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
app.append(canvas);

// GAME LOOP
let previousTimestamp = 0;

function gameLoop(timestamp) {
  const elapsed = timestamp - previousTimestamp;
  previousTimestamp = timestamp;
  if (~~(elapsed % 16) === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();

// KEYBOARD EVENTS
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      
      break;
    case "ArrowDown":
      
      break;
    case "ArrowLeft":
      
      break;
    case "ArrowRight":
      
      break;
  }
});