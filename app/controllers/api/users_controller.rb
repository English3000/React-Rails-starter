class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      # can setup ActionMailer here
      render json: {id: @user.id, email: @user.email, session_token: @user.session_token}
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user && visited # can test once Search implemented
      render json: {id: @user.id, email: @user.email}
    elsif @user
      visited = true
      render :show
    else
      visited = true
      redirect_to '/'
    end
  end

  def user_params
    params.require(:user).permit(:id, :email, :password, :session_token)
  end
end
