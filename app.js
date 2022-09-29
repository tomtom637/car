import Car from "./Car.js";

export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");

const app = document.getElementById("app");
canvas.classList.add("canvas");
canvas.width = 1600;
canvas.height = 1600;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
app.append(canvas);

// CREATE A CAR
const car = new Car(canvas.width / 2, canvas.height - 200, 100, 200, "red");

// GAME LOOP
let previousTimestamp = 0;

function gameLoop(timestamp) {
  const elapsed = timestamp - previousTimestamp;
  previousTimestamp = timestamp;
  if (~~(elapsed % 16) === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.draw();
    car.update();
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();