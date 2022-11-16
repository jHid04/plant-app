Rails.application.routes.draw do
  root 'plants#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :plants, only: [:index]
  resources :users, only: [:show]
end
