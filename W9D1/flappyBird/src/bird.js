const CONSTANTS = {
   GRAVITY: 0.3,
   FLAP_SPEED: -8,
   TERMINAL_VEL: 12,
   BIRD_WIDTH: 40,
   BIRD_HEIGHT: 30
}

export default class Bird {
   constructor(dimensions) {
      this.velocity = 0;
      this.dimensions = dimensions;
      this.y = 300;
   }
   
   animate(ctx) {
      this.move()
      this.drawBird(ctx)
   }

   move() {
      this.y += this.velocity;

      if ( this.velocity < CONSTANTS.TERMINAL_VEL ) {
         this.velocity += CONSTANTS.GRAVITY;
      }

   }
   flap() {
      this.velocity += CONSTANTS.FLAP_SPEED;
   }
   drawBird(ctx) {
      ctx.fillStyle='yellow';
      ctx.fillRect(220, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT); // 
   }

}
