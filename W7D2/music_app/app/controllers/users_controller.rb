require "byebug"
class UsersController < ApplicationController
    before_action :require_logged_in, only: [:show, :index, :destroy]

    def create
        @user = User.new(user_params)
        if @user.save
            log_in_user!(@user)
            redirect_to user_url(@user)
            # redirect_to bands_url ???
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new #users/new.html.erb
        end
    end

    def new
        # @user = User.new
        render :new #/users/new.html.erb
    end

    def show
        @user = User.find(params[:id])
        render :show #users/show.html.erb
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy 
        render :new
    end

    private

    def user_params
        #debugger
        params.require(:user).permit(:email, :password)
    end
end
