# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


plant_1 = Plant.create(common_name: "Alocasia zebrina", scientific_name: "Alocasia zebrina", family: "Araceae", genus: "Alocasia", img: "https://inaturalist-open-data.s3.amazonaws.com/photos/54045964/original.jpg")
plant_2 = Plant.create(common_name: "Adanson's Monstera", scientific_name: "Monstera adansonii", family: "Araceae", genus: "Monstera", img: "https://inaturalist-open-data.s3.amazonaws.com/photos/21333744/original.jpg")