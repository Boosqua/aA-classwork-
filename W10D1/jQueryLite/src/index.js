import DOMNodeCollection from './dom_node_collection.js';


class DOMLoadListener {
   constructor() {
      this.pageReady = false;
      this.toDoList = [];
      this.handleLoad()
   }

   handleLoad() {
      document.addEventListener("DOMContentLoaded", () => {
         this.pageReady = true;
         this.toDoList.forEach((selector) => {
            $1(selector)
         });
      })
   }
}

const loaded = new DOMLoadListener();

function bangBang(arg) {
   window.$1 = arg;
}

function $1(selector) {
   if ( loaded.pageReady === false ) {
      loaded.toDoList.push(selector);
      console.log( `deferred ${selector}`);
   } else {
      console.log('running it')
      if ( selector instanceof HTMLElement ){
         return new DOMNodeCollection([selector]);
      } else {
         let eles = document.querySelectorAll(selector);
         return new DOMNodeCollection(eles);
      }
   }
}

bangBang($1);
$1('li')
$1('ul')
$1('p')