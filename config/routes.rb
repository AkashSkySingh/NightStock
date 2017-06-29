Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :posts, except: [:new, :edit]
    get 'posts/recent', :to => 'posts#recent'
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resource :follows, only: [:destroy, :create]
  end
end
