const APIUtil = require('./api_util.js')


class FollowToggle {
    constructor($el, options) {

        this.$el = $el;
        this.userId = $el.data("userId")
        this.followState = this.initFollowState();
        this.options = options
        this.render()

        this.$el.on("click", this.handleClick.bind(this));
    }

    initFollowState() {
        return this.$el.data('initialFollowState') ? 'followed' : 'unfollowed';
    }

    handleClick(event) {
        event.preventDefault();
        const userId = this.userId;
        const that = this;
   

           
        if (this.followState === 'unfollowed') {
            this.followState = 'following';
            this.render();
            APIUtil.followUser(userId).then(() => {
                that.followState = 'followed';
                that.render();
            });
        } else if (this.followState === 'followed') {
            this.followState = 'unfollowing';
            this.render();
            APIUtil.unfollowUser(userId).then(() => {
                that.followState = 'unfollowed';
                that.render();
            })
        }
    }

    render() {
        switch (this.followState) {
            case 'followed':
                this.$el.prop('disabled', false);
                this.$el.html('Unfollow!');
                break;
            case 'unfollowed':
                this.$el.prop('disabled', false);
                this.$el.html('Follow!');
                break;
            case 'following':
                this.$el.prop('disabled', true);
                this.$el.html('Following...');
                break;
            case 'unfollowing':
                this.$el.prop('disabled', true);
                this.$el.html('Unfollowing...');
                break;
        }


    }
}

module.exports = FollowToggle;

