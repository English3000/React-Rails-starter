class Api::SessionsController < ApplicationController
  def destroy
    sign_out
    render json: {}
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      sign_in(@user)
      render partial: 'user', locals: {user: @user}
    else
      render json: ['Invalid credentials: user not found'], status: 422
    end
  end
end
