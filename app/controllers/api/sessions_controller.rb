class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      login!(user)
      render 'api/users/show'
    else
      render json: ["Wrong!!!"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render 'api/users/show'
    else
      render json: ["YOU CANT DO THAT"], status: 404
    end
  end
end
