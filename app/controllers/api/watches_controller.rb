class Api::WatchesController < ApplicationController

  # help from bluebird boilerplate

  def create
    @watch = Watch.new
    @watch.user_id = current_user.id
    @watch.asset_id = params[:id]

    if @watch.save
      render json: @watch
    else
      render json: @watch.errors.full_messages, status: 422
    end
  end

  def destroy
    @watch = Watch.find_by(asset_id: params[:id])
    @watch.destroy
  end
end
