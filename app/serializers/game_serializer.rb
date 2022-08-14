class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :metacritic, :platform, :playtime, :released, :esrb_rating, :image
end
