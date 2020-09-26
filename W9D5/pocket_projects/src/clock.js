import warmUp, { htmlGenerator } from "./warmup";

export default class Clock {
   constructor() {
      // 1. Create a Date object.
      let initialDate = new Date()
      // 2. Store the hours, minutes, and seconds.
      this.hours = initialDate.getHours()
      this.minutes = initialDate.getMinutes()
      this.seconds = initialDate.getSeconds()
      this.printTime();
      //   this._tick = this._tick().bind(this);
      setInterval(() => {
         this._tick()
      }, 1000);
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.

   }

   printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      let ampm = this.hours > 12 ? 'PM' : 'AM'
      const clockId = document.getElementById("clock");
      while (clockId.firstChild) {
         clockId.removeChild(clockId.lastChild);
      }
      htmlGenerator(`Current time: ${('0' + this.hours % 12).slice(-2)}:${('0' + this.minutes).slice(-2)}:${('0' + this.seconds).slice(-2)} ${ ampm }`, clockId);
   }

   _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds += 1;
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
      this.printTime();
   }
}
