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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n   constructor() {\n      // 1. Create a Date object.\n      let initialDate = new Date()\n      // 2. Store the hours, minutes, and seconds.\n      this.hours = initialDate.getHours()\n      this.minutes = initialDate.getMinutes()\n      this.seconds = initialDate.getSeconds()\n      this.printTime();\n      //   this._tick = this._tick().bind(this);\n      setInterval(() => {\n         this._tick()\n      }, 1000);\n      // 3. Call printTime.\n      // 4. Schedule the tick at 1 second intervals.\n\n   }\n\n   printTime() {\n      // Format the time in HH:MM:SS\n      // Use console.log to print it.\n      let ampm = this.hours > 12 ? 'PM' : 'AM'\n      const clockId = document.getElementById(\"clock\");\n      while (clockId.firstChild) {\n         clockId.removeChild(clockId.lastChild);\n      }\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(`Current time: ${('0' + this.hours % 12).slice(-2)}:${('0' + this.minutes).slice(-2)}:${('0' + this.seconds).slice(-2)} ${ ampm }`, clockId);\n   }\n\n   _tick() {\n      // 1. Increment the time by one second.\n      // 2. Call printTime.\n      this.seconds += 1;\n      if (this.seconds > 59) {\n         this.seconds = 0;\n         this.minutes += 1\n      }\n      if (this.minutes > 59) {\n         this.minutes = 0;\n         this.hours += 1\n      }\n      if (this.hours > 23) {\n         this.hours = 0;\n      }\n      this.printTime();\n   }\n}\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! exports provided: dogLinkCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dogLinkCreator\", function() { return dogLinkCreator; });\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n// console.log(dropDown)\nconst dogLinkCreator = function(){\n  const dogLinks = []\n  \n  // console.log(dropDown)\n  for (const dog in dogs) {\n    const a = document.createElement('a');\n    a.innerHTML = dog;\n    a.href = dogs[dog];\n    const li = document.createElement(\"li\");\n    li.className = 'dog-link'\n    li.appendChild(a)\n    dogLinks.push(li)\n    // console.log(`${dog}: ${dogs[dog]}`);\n  }\n  attachDogLinks(dogLinks)\n}\n\nconst attachDogLinks = function(array) {\n  const dropDown = document.getElementsByClassName(\"drop-down-dog-list\");\n  // debugger\n  array.forEach((dog) => {\n    // dog.hidden = true;\n    dropDown[0].appendChild(dog);\n  });\n}\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n\n\n\n// debugger\n\n\nwindow.onload = function () { \n   const clock = new _clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n   Object(_drop_down__WEBPACK_IMPORTED_MODULE_2__[\"dogLinkCreator\"])()\n   const dogDiv = document.getElementsByClassName('drop-down-dog-nav')[0]\n   const dogUl = document.getElementsByClassName('drop-down-dog-list')[0]\n   // debugger\n   dogDiv.addEventListener('mouseenter', (e) => {\n      // debugger\n      let lis = document.getElementsByClassName('dog-link');\n      lis = Array.from(lis);\n      lis.forEach(element => {\n         element.classList.toggle('dog-link')\n         element.classList.toggle('hovered')\n      });\n      // let li = e.target;\n      // li\n      // li.style.textDecoration = 'line-through'\n      // li.style.fontFamily = \"Impact,Charcoal,sans-serif\";\n      \n   })\n   // const li = document.getElementsByClassName('hovered')\n    dogDiv.addEventListener('mouseleave', (e) => {\n      // debugger\n      let lis = document.getElementsByClassName('hovered');\n      lis = Array.from(lis);\n      lis.forEach(element => {\n         element.classList.toggle('hovered')\n         element.classList.toggle('dog-link')\n      });\n   })\n\n   dogUl.addEventListener('mouseenter',  (e) => {\n      debugger\n      let li = e.target;\n      if ( li.className === 'hovered' ){\n        li.style.textDecoration = 'line-through'\n        li.style.fontFamily = \"Impact,Charcoal,sans-serif\";\n        e.stopPropagation() \n    }\n   })\n   dogUl.addEventListener('mouseexit', (e) => {\n      let li = e.target;\n      li.style.textDecoration = ''\n      li.style.fontStyle = ''\n      e.stopPropagation() \n   })\n   \n }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    const input = document.createElement(\"p\");\n    input.innerText = string;\n    htmlElement.appendChild(input);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });