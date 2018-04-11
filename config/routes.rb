Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :assets, only: [:index, :show, :update]
    resources :fills, only: [:index, :create, :show]
    resources :portfolios, only: [:show]
    resources :portfolio_snapshots, only: [:create, :index]

    delete '/watches', to: 'watches#destroy'
    resources :watches, only: [:create]
  end
end
