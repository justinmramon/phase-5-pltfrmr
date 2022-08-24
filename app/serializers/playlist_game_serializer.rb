class PlaylistGameSerializer < ActiveModel::Serializer
  attributes :id, :game_id
  has_one :game
  has_one :playlist
end
