Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :show, :create, :destroy]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
