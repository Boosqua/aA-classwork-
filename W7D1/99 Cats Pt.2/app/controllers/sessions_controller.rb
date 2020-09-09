class SessionsController < ApplicationController
    before_action :require_not_logged_in, only: [:new, :create]

    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            # session[:session_token] = @user.reset_session_token!
            redirect_to user_url(@user)
        else
            render :new
        end
    end

    def destroy
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        session[:session_token] = ""
        @user.reset_session_token!
        
        render :new
    end

end
