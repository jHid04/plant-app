Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :plants, only: [:index, :show]

  get'/users/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do 
      resources :users, only: [:show] 
      resources :plants, only: [:create]
      resource :category, only: [:show]
      get'/current-user', to: "current_user#index"
    end
  end
end
