# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
    user5 = User.create!(username: "demoUser", email: "demo@demo.com", age: 1, password: "demo123")
    user1 = User.create!(username: "alex", email: "alex@alex.com", age: 31, password: "alex123")
    user2 = User.create!(username: "richard", email: "richard@richard.com", age: 31, password: "alex123")
    user3 = User.create!(username: "ant", email: "ant@ant.com", age: 31, password: "alex123")
    user4 = User.create!(username: "chris", email: "chris@chris.com", age: 31, password: "alex123")
    
Board.destroy_all
    board1 = Board.create!(name: "boardName1", description: "boardDesc1", public: true, user_id: 1)
    board2 = Board.create!(name: "boardName2", description: "boardDesc2", public: true, user_id: 1)

Pin.destroy_all
    pin1 = Pin.create!(title: "pinTitle1", description: "pinDesc1", organized: true, user_id: 1)
    pin2 = Pin.create!(title: "pinTitle2", description: "pinDesc2", organized: true, user_id: 1)
    pin3 = Pin.create!(title: "pinTitle3", description: "pinDesc3", organized: true, user_id: 1)

Follow.destroy_all
    follow1 = Follow.create!(follower_id: 1, followed_id: 2)
    follow2 = Follow.create!(follower_id: 1, followed_id: 3)
    follow3 = Follow.create!(follower_id: 1, followed_id: 4)
    follow4 = Follow.create!(follower_id: 1, followed_id: 5)
    follow5 = Follow.create!(follower_id: 2, followed_id: 1)
    follow6 = Follow.create!(follower_id: 2, followed_id: 3)
    follow7 = Follow.create!(follower_id: 3, followed_id: 1)
    follow8 = Follow.create!(follower_id: 3, followed_id: 2)
    follow9 = Follow.create!(follower_id: 3, followed_id: 4)

Pinstoboard.destroy_all
    pintoboard1 = Pinstoboard.create!(pin_id: 1, board_id: 1)
    pintoboard2 = Pinstoboard.create!(pin_id: 2, board_id: 1)
    pintoboard3 = Pinstoboard.create!(pin_id: 3, board_id: 1)
    pintoboard4 = Pinstoboard.create!(pin_id: 1, board_id: 2)
    pintoboard5 = Pinstoboard.create!(pin_id: 2, board_id: 2)

