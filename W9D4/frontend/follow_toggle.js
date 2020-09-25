const { unfollowUser } = require('./api_util.js');
const APIUtil = require('./api_util.js')
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

