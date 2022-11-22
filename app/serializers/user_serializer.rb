class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :about
  has_many :plants
end