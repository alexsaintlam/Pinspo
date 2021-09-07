Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :show, :create, :udpate, :destroy]
  end

  root "static_pages#root"
end
