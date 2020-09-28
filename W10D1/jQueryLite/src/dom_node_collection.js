export default class DOMNodeCollection {
   constructor(htmlElements) {
      // console.log(typeof htmlElements)
      // debugger
      this.htmlElements = Array.from(htmlElements);
      this.first = htmlElements[0];
   }

   each(cb) {
      this.htmlElements.forEach(ele => cb(ele));
   }

   html(text) {
      if ( text ) {
         this.each( ele => ele.innerHTML = text );
      } else {
         return this.first.innerHTML
      }
      return true
   }

   empty() {
      this.html(' ');
      return true;
   }

   append(children) {
      if (typeof children === 'object' &&
         !(children instanceof DOMNodeCollection)) {
         children = $1(children);
      }
      
      if( children instanceof String ) {
         this.each( (node) => {
            node.innerHTML += children;
         })
      } else {
         const that = this;
         children.each( (child) => {
            that.each( node => node.appendChild( child.cloneNode(true) ) )
         })
      }
      return true;
   }

   attr(key, value) {
      if ( value === undefined) {
         this.each( node => node.setAttribute(key, value) )
      } else {
         return this.first.getAttribute(key);
      }
   }

   addClass(className) {
      this.each( node => node.classList.add(className) )
      return true;
   }

   removeClass(className) {
      this.each( node => node.classList.remove(className) )
      return true;
   }

   toggle(className) {
      this.each( node => node.classList.toggle(className) )
      return true;
   }

   children() {
      let children = [];
      this.each( node => children = children.concat(Array.from(node.children)) )
      return new DOMNodeCollection(children);
   }

   parents() {
      let parents = [];
      this.each( node => parents = parents.concat([node.parentNode]) );
      return new DOMNodeCollection(parents);
   }

   find(query) {
      let matches = [];
      this.each ( (node) => {
         let arr = Array.from(node.querySelectorAll(query))
         matches = matches.concat(arr);
      })
      return new DOMNodeCollection(matches);
   }

   remove() {
      this.each( node => node.remove() );
      return true
   }

   on(event, ctx, fn) {
      let given = true;
      let nodeList = this;
      if( ctx instanceof Function ) {
         // debugger;
         fn = ctx;
         given = false;
      }
      if ( given ) {
         // debugger
         nodeList = this.find(ctx)
      }
      nodeList.each( (node) => {
         const currentEvent = `event on ${event}`
         if ( typeof node[currentEvent] === 'undefined' ) {
            node[currentEvent] = [];
         }
         node[currentEvent].push(fn);
         node.addEventListener(event, fn);
      });
      return true
   }

   off(event, ctx) {
      let nodeList = this;
      if ( ctx ) {
         nodeList = this.find(ctx);
      }
      
      nodeList.each( (node) => {
         const currentEvent = `event on ${event}`;
         if ( node[currentEvent] ) {
            node[currentEvent].forEach( (fn) => {
               node.removeEventListener(event, fn)
            })
         }
         node[currentEvent] = [];
      })
      return true;
   }
}
