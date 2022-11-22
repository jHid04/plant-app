class PlantSerializer < ActiveModel::Serializer
  attributes :id, :scientific_name, :img, :family, :category
  belongs_to :user
  belongs_to :category
end