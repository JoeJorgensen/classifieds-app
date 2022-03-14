Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
namespace :api do

  get 'all', to: 'catagories#all'
  get 'catagories_all/:id', to: 'catagories#catagories_all'
  get 'items',  to:'items#items_all'
resources :jobs 

resources :catagories do
resources :items 


end

  end

end
