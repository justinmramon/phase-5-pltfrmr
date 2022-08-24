class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :playlist_games
  belongs_to :user
  
end
