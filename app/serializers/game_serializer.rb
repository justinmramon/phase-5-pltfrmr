class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :developer, :release_date, :synopsis, :playtime, :cover
end
