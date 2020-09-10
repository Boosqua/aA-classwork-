class SessionsController < ApplicationController

    def new
        render :new
    end

    def create #loggin
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            log_in_user!(@user)
            redirect_to user_url(@user)
        else
            # flash.now[:errors] = ['log in failed try again dummy!']
            flash.now[:errors] = ['log in failed try again dummy!']
            render :new
        end
    end

    def destroy
        logout!
        require_logged_in
    end
end
