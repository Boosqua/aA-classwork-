/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOMNodeCollection; });\nclass DOMNodeCollection {\n   constructor(htmlElements) {\n      // console.log(typeof htmlElements)\n      // debugger\n      this.htmlElements = Array.from(htmlElements);\n      this.first = htmlElements[0];\n   }\n\n   each(cb) {\n      this.htmlElements.forEach(ele => cb(ele));\n   }\n\n   html(text) {\n      if ( text ) {\n         this.each( ele => ele.innerHTML = text );\n      } else {\n         return this.first.innerHTML\n      }\n      return true\n   }\n\n   empty() {\n      this.html(' ');\n      return true;\n   }\n\n   append(children) {\n      if (typeof children === 'object' &&\n         !(children instanceof DOMNodeCollection)) {\n         children = $1(children);\n      }\n      \n      if( children instanceof String ) {\n         this.each( (node) => {\n            node.innerHTML += children;\n         })\n      } else {\n         const that = this;\n         children.each( (child) => {\n            that.each( node => node.appendChild( child.cloneNode(true) ) )\n         })\n      }\n      return true;\n   }\n\n   attr(key, value) {\n      if ( value === undefined) {\n         this.each( node => node.setAttribute(key, value) )\n      } else {\n         return this.first.getAttribute(key);\n      }\n   }\n\n   addClass(className) {\n      this.each( node => node.classList.add(className) )\n      return true;\n   }\n\n   removeClass(className) {\n      this.each( node => node.classList.remove(className) )\n      return true;\n   }\n\n   toggle(className) {\n      this.each( node => node.classList.toggle(className) )\n      return true;\n   }\n\n   children() {\n      let children = [];\n      this.each( node => children = children.concat(Array.from(node.children)) )\n      return new DOMNodeCollection(children);\n   }\n\n   parents() {\n      let parents = [];\n      this.each( node => parents = parents.concat([node.parentNode]) );\n      return new DOMNodeCollection(parents);\n   }\n\n   find(query) {\n      let matches = [];\n      this.each ( (node) => {\n         let arr = Array.from(node.querySelectorAll(query))\n         matches = matches.concat(arr);\n      })\n      return new DOMNodeCollection(matches);\n   }\n\n   remove() {\n      this.each( node => node.remove() );\n      return true\n   }\n\n   on(event, ctx, fn) {\n      let given = true;\n      let nodeList = this;\n      if( ctx instanceof Function ) {\n         // debugger;\n         fn = ctx;\n         given = false;\n      }\n      if ( given ) {\n         // debugger\n         nodeList = this.find(ctx)\n      }\n      nodeList.each( (node) => {\n         const currentEvent = `event on ${event}`\n         if ( typeof node[currentEvent] === 'undefined' ) {\n            node[currentEvent] = [];\n         }\n         node[currentEvent].push(fn);\n         node.addEventListener(event, fn);\n      });\n      return true\n   }\n\n   off(event, ctx) {\n      let nodeList = this;\n      if ( ctx ) {\n         nodeList = this.find(ctx);\n      }\n      \n      nodeList.each( (node) => {\n         const currentEvent = `event on ${event}`;\n         if ( node[currentEvent] ) {\n            node[currentEvent].forEach( (fn) => {\n               node.removeEventListener(event, fn)\n            })\n         }\n         node[currentEvent] = [];\n      })\n      return true;\n   }\n}\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\n\nclass DOMLoadListener {\n   constructor() {\n      this.pageReady = false;\n      this.toDoList = [];\n      this.handleLoad()\n   }\n\n   handleLoad() {\n      document.addEventListener(\"DOMContentLoaded\", () => {\n         this.pageReady = true;\n         this.toDoList.forEach((selector) => {\n            $1(selector)\n         });\n      })\n   }\n}\n\nconst loaded = new DOMLoadListener();\n\nfunction bangBang(arg) {\n   window.$1 = arg;\n}\n\nfunction $1(selector) {\n   if ( loaded.pageReady === false ) {\n      loaded.toDoList.push(selector);\n      console.log( `deferred ${selector}`);\n   } else {\n      console.log('running it')\n      if ( selector instanceof HTMLElement ){\n         return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([selector]);\n      } else {\n         let eles = document.querySelectorAll(selector);\n         return new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](eles);\n      }\n   }\n}\n\nbangBang($1);\n$1('li')\n$1('ul')\n$1('p')\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });