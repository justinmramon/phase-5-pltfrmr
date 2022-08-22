class Playlist < ApplicationRecord
  has_many :playlist_games
  belongs_to :user

  has_many :games, through: :playlist_games
end
