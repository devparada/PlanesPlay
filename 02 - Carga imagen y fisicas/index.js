import Phaser, { Physics } from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    this.load.image("pajaro", "assets/sprites/bird.png");
  }

  create() {
    this.pajaro = this.physics.add.image(80, 180, "pajaro");
    this.pajaro.setScale(2);
    this.pajaro.flipX = false;
    this.pajaro.setOrigin(0.5);
    // Físicas
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.3);
    this.pajaro.setVelocity(50,0);
  }

  update(time, delta) {
    // this.pajaro.x++;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 320 * 2,
  height: 180 * 2,
  backgroundColor: "#000000",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: false,
    },
  },
};

const _game = new Phaser.Game(config);
