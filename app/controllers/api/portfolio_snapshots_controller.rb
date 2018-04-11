class Api::PortfolioSnapshotsController < ApplicationController
  def create
    portfolio_snapshot = PortfolioSnapshot.new(portfolio_snapshot_params)
    portfolio_snapshot.save!
  end

  def index
    @portfolio_snapshots = PortfolioSnapshot.where("portfolio_id = #{params[:id]}")
    render 'api/portfolio_snapshots/index'
  end

  private

  def portfolio_snapshot_params
    params.require(:portfolio_snapshot).require(
      :portfolio_id,
      :date,
      :value
    )
  end
end
