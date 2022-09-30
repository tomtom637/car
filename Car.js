import { canvas, ctx } from "./app.js";
import Controls from "./Controls.js";

const image = new Image();
image.src = "./car.png";

export default class Car {
  constructor (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.maxSpeed = 15;
    this.acceleration = 0.5;
    this.friction = 1.02;
    this.angle = 0;
    this.width = width;
    this.height = height;
    this.controls = new Controls();
    image.width = this.width * 2;
    image.height = this.height * 2;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y + this.height / 1.8);
    ctx.rotate(this.angle);
    ctx.translate(0, -this.height / 1.8);
    ctx.drawImage(image, - this.width / 2, - this.height / 2, this.width, this.height);
    ctx.restore();
  }
  update() {
    if (this.controls.forward) {
      this.speed <= this.maxSpeed ? this.speed += this.acceleration : "";
    }
    if (this.controls.backward) {
      this.speed >= - this.maxSpeed ? this.speed -= this.acceleration / 1.5 : "";
    }
    if (this.controls.left) {
      this.angle -= 0.012 * this.speed / 4.7;
    }
    if (this.controls.right) {
      this.angle += 0.012 * this.speed / 4.7;
    }

    this.x += Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
    this.speed /= this.friction;
    if (Math.abs(this.speed) < 0.2) {
      this.speed = 0;
    }
  }
}