class UsersController < ApplicationController
    before_action :require_logged_in, only: [:index, :show]

    def new
        @user = User.new
        render :new
    end

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            redirect_to user_url(@user)
        else
            render :new
        end
    end

    private

    def user_params
        params.require(:user).premit(:username, :password)
    end
end 
