class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :family, :category
  belongs_to :user
  belongs_to :category
end