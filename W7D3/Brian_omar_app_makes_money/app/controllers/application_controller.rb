class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user
    
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def log_in!(user)
        session[:session_token] = user.reset_session_token!
    end

    def log_out!(user)
        @current_user = nil if logged_in?
        user.reset_session_token! 
        session[:session_token] = nil
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?
    end

end