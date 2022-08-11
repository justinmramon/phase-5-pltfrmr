class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :liked, presence: true
  validates :comment, presence: true
end
