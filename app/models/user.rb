class User < ApplicationRecord
    has_many :reviews
    has_many :playlists
    has_many :games, through: :reviews
    has_many :games, through: :playlists

    has_secure_password

    validates :username, uniqueness: true
    validates :username, presence: true
end
