class PlaylistGame < ApplicationRecord
  belongs_to :game
  belongs_to :playlist

  validates :game, uniqueness: { scope: :playlist }
end
