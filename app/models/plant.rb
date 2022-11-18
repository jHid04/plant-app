class Plant < ApplicationRecord
  validates :scientific_name, presence: true
  belongs_to :user
  belongs_to :category
end