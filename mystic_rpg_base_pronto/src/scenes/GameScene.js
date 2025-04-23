export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('bg', '../public/bg.jpg');
    this.load.image('hero', '../public/assets/hero.png');
  }

  create() {
    this.add.image(400, 300, 'bg').setScale(1.2);
    this.player = this.physics.add.sprite(400, 300, 'hero');
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) this.player.setVelocityX(-160);
    if (this.cursors.right.isDown) this.player.setVelocityX(160);
    if (this.cursors.up.isDown) this.player.setVelocityY(-160);
    if (this.cursors.down.isDown) this.player.setVelocityY(160);
  }
}
