class Game < ApplicationRecord
    has_many :reviews
    has_many :playlist_games

    has_many :playlists, through: :playlist_games
    has_many :users, through: :reviews
    has_many :users, through: :playlists
end
