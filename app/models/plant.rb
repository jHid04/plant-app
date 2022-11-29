class Plant < ApplicationRecord
  validates :name, presence: true
  mount_uploader :img, PlantPhotoUploader
  belongs_to :user
  belongs_to :category
end