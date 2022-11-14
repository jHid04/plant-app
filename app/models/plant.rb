class Plant < ApplicationRecord
  validates :scientific_name, presence: true
end