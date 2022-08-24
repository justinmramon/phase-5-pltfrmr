class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password_digest

  has_many :playlists
end
