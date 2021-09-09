# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.destroy_all
    board1 = Board.create!(name: "boardName1", description: "boardDesc1", public: true, user_id: 1)
    board2 = Board.create!(name: "boardName2", description: "boardDesc2", public: true, user_id: 1)

Pin.destroy_all
    pin1 = Pin.create!(title: "pinTitle1", description: "pinDesc1", organized: true, user_id: 1)
    pin2 = Pin.create!(title: "pinTitle2", description: "pinDesc2", organized: true, user_id: 1)
    pin3 = Pin.create!(title: "pinTitle3", description: "pinDesc3", organized: true, user_id: 1)

Follow.destroy_all
    follow1 = Follow.create!(follower_id: 1, followed_id: 2)
    follow2 = Follow.create!(follower_id: 2, followed_id: 1)