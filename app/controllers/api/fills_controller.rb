class Api::FillsController < ApplicationController
  def index
    @fills = Fill.all
    render 'api/fills/index'
  end

  def create
    @fill = Fill.new(fill_params)

    if @fill.ensure_buying_power(@fill.portfolio_id) == false
      render json: ["Insufficient buying_power"]
      return
    end

    if @fill.save
      render json: @fill
    else
      render json: @fill.errors.full_messages, status: 422
    end
  end

  # def show
  #   @fill = Fill.find(params[:id])
  #   render 'api/fills/show'
  # end

  private

  def fill_params
    params.require(:fill).permit(
      :asset_id, :portfolio_id, :price, :size, :side
    )
  end
end
