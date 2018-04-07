class Api::PortfoliosController < ApplicationController
  def create
    portfolio = Portfolio.new(portfolio_params)
    portfolio.save!
  end

  private

  def portfolio_params
    params.require(:portfolio).require(:user_id)
  end
end
