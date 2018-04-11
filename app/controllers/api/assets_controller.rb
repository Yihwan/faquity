class Api::AssetsController < ApplicationController
  def index
    @assets = Asset.all
    render 'api/assets/index'
  end

  def show
    @asset = Asset.find(params[:id])
    render 'api/assets/show'
  end

  def update
  @asset = Asset.find(params[:id])

    if @asset.update(asset_params)
      render 'api/assets/show'
    else
      render json: @asset.errors.full_messages, status: 422
    end
  end

  private

  def asset_params
    params.require(:asset).permit(
      :symbol,
      :name,
      :description,
      :ceo,
      :num_employees,
      :year_founded,
      :headquarters,
      :tags,
      :latest_price,
      :fake_symbol
    )
  end
end
