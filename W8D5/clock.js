class Clock {
   constructor() {
      // 1. Create a Date object.
        let initialDate = new Date()
      // 2. Store the hours, minutes, and seconds.
        this.hours = initialDate.getHours()
        this.minutes = initialDate.getMinutes()
        this.seconds = initialDate.getSeconds()
        this.printTime();
      //   this._tick = this._tick().bind(this);
        setInterval( () => {
         this._tick()}, 1000 );
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.

   }

   printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
        return console.log( `${this.hours}:${this.minutes}:${this.seconds}`);
   }

   _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds += 1 ;
      if (this.seconds > 59) {
         this.seconds = 0;
         this.minutes += 1
      }
      if (this.minutes > 59) {
         this.minutes = 0;
         this.hours += 1
      }
      if (this.hours > 23) {
         this.hours = 0;
      }
      console.clear();
      this.printTime();
   }
}

const clock = new Clock();