Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      get '/comics', to: 'comics#index'
      get '/characters', to: 'characters#index'
    end
  end
end
