class Game < ApplicationRecord
    has_many :reviews
    has_many :playlists
    has_many :users, through: :reviews
    has_many :users, through: :playlists
end
