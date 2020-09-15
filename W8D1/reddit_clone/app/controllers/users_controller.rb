class UsersController < ApplicationController
    before_action :require_logged_in, only: :destroy
    def new
        @user = User.new
        render :new
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def index
        @users = User.all
        render :index
    end

    def create
        @user =  User.new(user_params)
        
        if @user.save
            log_in!(@user)
            flash.now[:messages] = ["YOU'RE IN"]
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        flash.now[:messages] = ["How could you :("]
        render :new
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
