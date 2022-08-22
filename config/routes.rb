Rails.application.routes.draw do
  resources :playlist_games
  resources :playlists
  resources :reviews
  resources :games
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 
  get "/games/:id/reviews", to: "reviews#showReviews"
  get "/users", to: "users#index"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end