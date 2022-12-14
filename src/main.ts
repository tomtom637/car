import Car from "./Car";
import "./styles.css";

export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");

const app = document.getElementById("app");
canvas.classList.add("canvas");
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
app != null && app.append(canvas);

// CREATE A CAR
const car = new Car(canvas.width / 2, canvas.height - 200, 80, 160);

// GAME LOOP
let previousTimestamp = 0;

function gameLoop(timestamp: number) {
  const elapsed = timestamp - previousTimestamp;
  previousTimestamp = timestamp;
  if (~~(elapsed % 16) === 0) {
    ctx != null && ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.draw();
    car.update();
  }
  requestAnimationFrame(gameLoop);
}

gameLoop(0);

// RESIZE EVENT
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;
  canvas.style.width = canvas.width / 2 + "px";
  canvas.style.height = canvas.height / 2 + "px";
});