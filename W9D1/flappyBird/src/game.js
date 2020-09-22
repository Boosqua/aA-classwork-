import Level from './level.js'
import Bird from './bird.js'

export default class FlappyBird {
  constructor(canvas){
      this.ctx = canvas.getContext("2d");
      this.dimensions = { width: canvas.width, height: canvas.height };
      this.restart();
      // this.play();
      this.animate = this.animate.bind(this)
      addEventListener('click', this.click.bind(this))
      this.click = this.click.bind(this)
      this.play = this.play.bind(this)
  }

  play() {
     this.running = true;
     this.animate();
     
  }
   animate() {
     this.level.drawBackground(this.ctx);
     this.bird.animate(this.ctx);
     if( this.bird.y > 630 ) {
         this.restart();
     }
     if ( this.running ) {
      //   debugger
        requestAnimationFrame(this.animate);
     }
  }
  restart() {
     this.running = false;
     this.level = new Level(this.dimensions);
     this.bird = new Bird(this.dimensions)
     this.animate()
  }

  click() {
     if ( this.running === true ) {
        this.bird.flap()
     } else {
      //   debugger
        this.play();
     }
  }

  
}


