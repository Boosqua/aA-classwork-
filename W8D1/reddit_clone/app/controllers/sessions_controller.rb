class SessionsController < ApplicationController
    

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      flash[:messages] = ["Yay! logged in :))"]
      log_in! @user

      redirect_to user_url @user
    else
      @user = User.new(username: params[:user][:username]) 
      flash.now[:errors] = ["did you forget your log in info? dummy..."]
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
