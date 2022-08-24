class Playlist < ApplicationRecord
  has_many :playlist_games
  has_many :games, through: :playlist_games
  belongs_to :user

end
