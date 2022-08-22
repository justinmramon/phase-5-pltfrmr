class PlaylistGameSerializer < ActiveModel::Serializer
  attributes :id
  has_one :game
  has_one :playlist
end
