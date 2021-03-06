Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :songs, only: [:index]
    end
    resource :session, only: [:destroy, :create]
    resources :comments, only: [:destroy]
    resources :songs, only: [:show, :update, :index, :destroy, :create] do
      resources :comments, only: [:create, :index]
    end
  end

end
