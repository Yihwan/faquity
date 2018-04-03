class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      login!(user)
    else
      render json: ["nope"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: ["nope"]
    else
      render json: ["YOU CANT DO THAT"]
    end
  end
end
