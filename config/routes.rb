Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :follows, only: [:index, :create, :destroy]
  end

  root "static_pages#root"
end
