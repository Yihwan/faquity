class Api::AssetsController < ApplicationController
  def index
    @assets = Asset.all
    render 'api/assets/index'
  end

  def show
    @asset = Asset.find(params[:id])
    render 'api/assets/show'
  end
end
