class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    before_action :require_logged_in, only: [:log_out!]


    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def log_in!(user)
        session[:session_token] = user.reset_session_token!
    end

    def log_out!
        @current_user.reset_session_token! unless @current_user.nil?
        @current_user = nil
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end  

    def require_moderator_power
        redirect_to sub_url(Sub.find(params[:id])) unless logged_in? && @current_user.id == Sub.find(params[:id]).moderator_id
    end

    def require_author_power(sub_mod_id)
        redirect_to sub_url(sub_mod_id) unless logged_in? && @current_user.id == sub_mod_id
    end

   
end
