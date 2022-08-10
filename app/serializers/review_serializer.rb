class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :liked
  has_one :user
  has_one :game
end
