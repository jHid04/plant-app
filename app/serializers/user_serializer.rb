class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :about, :created_at
  has_many :plants
end