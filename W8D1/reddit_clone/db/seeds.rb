# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([{username: "Malcom_base64", password: "password"}, {username: "BooSqua", password: "password"}])

10.times do 
    User.create(username: Faker::JapaneseMedia::OnePiece.unique.character, password: "password")
end 

User.all.each do |user|
    title = [Faker::Games::HeroesOfTheStorm.unique.hero, Faker::Book.unique.title].sample
    Sub.create(title: title, description: "A description of the sub!", moderator_id: user.id)
end