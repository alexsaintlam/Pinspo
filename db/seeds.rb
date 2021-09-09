# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Pinstoboard.destroy_all
Pin.destroy_all
Board.destroy_all
Follow.destroy_all
User.destroy_all

    user5 = User.create!(username: "demoUser", email: "demo@demo.com", age: 1, password: "demo123")
    user1 = User.create!(username: "alex", email: "alex@alex.com", age: 31, password: "alex123")
    user2 = User.create!(username: "richard", email: "richard@richard.com", age: 31, password: "alex123")
    user3 = User.create!(username: "ant", email: "ant@ant.com", age: 31, password: "alex123")
    user4 = User.create!(username: "chris", email: "chris@chris.com", age: 31, password: "alex123")

    board1 = Board.create!(name: "boardName1", description: "boardDesc1", public: true, user_id: user5.id)
    board2 = Board.create!(name: "boardName2", description: "boardDesc2", public: true, user_id: user5.id)

    pin1 = Pin.create!(title: "pinTitle1", description: "pinDesc1", organized: true, user_id: user5.id)
    pin2 = Pin.create!(title: "pinTitle2", description: "pinDesc2", organized: true, user_id: user5.id)
    pin3 = Pin.create!(title: "pinTitle3", description: "pinDesc3", organized: true, user_id: user5.id)

    follow1 = Follow.create!(follower_id: user5.id, followed_id: user1.id)
    follow2 = Follow.create!(follower_id: user5.id, followed_id: user2.id)
    follow3 = Follow.create!(follower_id: user5.id, followed_id: user3.id)
    follow4 = Follow.create!(follower_id: user5.id, followed_id: user4.id)
    follow5 = Follow.create!(follower_id: user1.id, followed_id: user5.id)
    follow6 = Follow.create!(follower_id: user1.id, followed_id: user2.id)
    follow7 = Follow.create!(follower_id: user2.id, followed_id: user5.id)
    follow8 = Follow.create!(follower_id: user2.id, followed_id: user1.id)
    follow9 = Follow.create!(follower_id: user2.id, followed_id: user3.id)

    pintoboard1 = Pinstoboard.create!(pin_id: user5.id, board_id: user5.id)
    pintoboard2 = Pinstoboard.create!(pin_id: user1.id, board_id: user5.id)
    pintoboard3 = Pinstoboard.create!(pin_id: user2.id, board_id: user5.id)
    pintoboard4 = Pinstoboard.create!(pin_id: user5.id, board_id: user1.id)
    pintoboard5 = Pinstoboard.create!(pin_id: user1.id, board_id: user1.id)

