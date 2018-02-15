class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  helper_method :visited, :current_user, :signed_in?

  def home
    visited = true
  end

  def visited
    @visited ||= false
  end

  def current_user
    visited = true
    return nil unless session[:session_token]
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    current_user = user
    session[:session_token] = current_user.reset_token
  end

  def sign_out
    current_user.reset_token
    session[:session_token] = nil
  end
end
