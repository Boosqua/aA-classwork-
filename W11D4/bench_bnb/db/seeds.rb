# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create([
   {description: 'Jefferson Park Bench', lat: 37.782243, lng: -122.425792},
   {description: 'Golden Gate Park Bench', lat: 37.771111, lng: -122.458287},
   {description: 'Saw a hobo sleeping here. Looked comfy!',
   lat: 37.783697, lng: -122.416086}
])

User.create(username: 'boosqua', password: 'password')