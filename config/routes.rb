Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :songs, only: [:index]
    end
    resource :session, only: [:destroy, :create]
    resources :songs, only: [:show, :update, :index, :destroy, :create]
  end

end
