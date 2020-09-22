export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

//   constructPipes() {
//      //640 480 490 450
//      pipeOpen = Math.floor(Math.random() * 450) - 20;
//      pipeClose = pipeOpen + 150;   
//   }
}