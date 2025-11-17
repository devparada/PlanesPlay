import Phaser from "phaser";
import { height, width } from "./src/modules/constants.js";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    this.load.image("sky", "assets/sprites/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/sprites/red.png");
  }

  create() {
    this.add.image(400, 300, "sky");

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    logo.setDepth(5);

    const particles = this.add.particles(100, 0, "red", {
      speed: 200,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    particles.startFollow(logo);
  }
}



const config = {
  type: Phaser.AUTO,
  width,
  height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  scene: MainScene,
};

const _game = new Phaser.Game(config);
