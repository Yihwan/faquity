class Api::FillsController < ApplicationController
  def index
    @fills = Fill.all
    render 'api/fills/index'
  end

  def create
    @fill = Fill.new(fill_params)

    unless @fill.validate(@fill.portfolio_id)
      render json: @fill.errors[:size], status: 422
      return
    end

    if @fill.save

      change_amount = @fill.size * @fill.price
      change_amount *= -1 if @fill.side == "buy"
      
      @fill.user.update_buying_power!(change_amount)
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
