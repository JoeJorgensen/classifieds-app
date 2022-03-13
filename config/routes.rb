Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
namespace :api do

resources :jobs 

resources :catagories do
resources :items 


end

  end

end
