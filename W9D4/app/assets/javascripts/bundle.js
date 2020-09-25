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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const APIUtil = {
    followUser: id => {
       console.log('hi')
      $.ajax({
         url: `/users/${id}/follow`,
         method: 'POST',
         dataType: 'JSON'
      })
   },

    unfollowUser: id => {
       $.ajax({
          url: `/users/${id}/follow`,
          method: 'DELETE',
          dataType: 'JSON'
       })
       console.log(1)
    }
}

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { unfollowUser } = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");
const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js")
//follow class to identify the form --> followToggle
//AJAX request to post
//listener on click
//JQUERY Command classToggle("classname")
//avoid doing default

class FollowToggle {
    constructor($el, options) {
      // debugger
        this.$el = $el;
        this.userId = $el.data("userId")
        this.followState = $el.data("initialFollowState")
        this.options = options
        this.render()
         // this.freeze = false;
        // this.handleClick()
        this.$el.on("click", this.handleClick.bind(this));
    }

        handleClick(event) {
            // const followToggle = this;
            event.preventDefault();
            const that = this;
            const userId = this.userId;
            this.followState = 'changing'
           const changeFollowStatus = () => {
              this.followState = !this.followState;
              this.render();
              console.log(2)
           }

           
            if (!this.followState) {
               // this.renderFreeze('Following...')
               // const rendering = new Promise(() => this.render('following...'))
               const p = new Promise(() => {
                  APIUtil.followUser(userId)
               });
                p.then(changeFollowStatus())
            } else if (this.followState) {
               // this.renderFreeze('Unfollowing...')
               // this.render('unfollowing...')
               this.render('unfollowing');
               // console.log('sadjhasjkd')
               const p = new Promise(() => APIUtil.unfollowUser(userId));
               p.then(changeFollowStatus())
            }
        }
      //   renderFreeze(text) {
      //      debugger
      //       this.$el.prop('disabled', true)
      //       this.$el.text(text)
      //   }
        render(text) {
        // debugger
            if( this.followState === true) {
                this.$el.prop('disabled', false)
                this.$el.text('Unfollow!')
                // this.$el.prop('disabled', true)
            } else if (this.followState === false) {
                this.$el.prop('disabled', false)
                this.$el.text('Follow!')
            } else {
               // debugger
               this.$el.attr('disabled', true)
               debugger
               this.$el.text(text)
            }
        }
}

module.exports = FollowToggle;



/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")
const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js")

// console.log('hello')

$(() => {
   $('button.follow-toggle').each(function(index){
      // debugger
      new FollowToggle($(this), {});
   })
})


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map