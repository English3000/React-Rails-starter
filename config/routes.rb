Rails.application.routes.draw do #http://guides.rubyonrails.org/routing.html
  # also server-rendered
  get '/users/:id', to: 'api/users#show'
  get '/', to: 'application#home'

  # only client-rendered
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
  end
end
