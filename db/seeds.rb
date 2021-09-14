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

    pin1 = Pin.create!(title: "pinTitle1", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
    pin2 = Pin.create!(title: "pinTitle2", description: "pinDesc2", organized: true, user_id: user5.id)
    pin3 = Pin.create!(title: "pinTitle3", description: "pinDesc3", organized: true, user_id: user5.id)
    pin4 = Pin.create!(title: "pinTitle4", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
    pin5 = Pin.create!(title: "pinTitle5", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
    pin6 = Pin.create!(title: "pinTitle6", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
    pin7 = Pin.create!(title: "pinTitle7", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user1.id)
    pin8 = Pin.create!(title: "pinTitle8", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user1.id)
    pin9 = Pin.create!(title: "pinTitle9", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user2.id)
    pin10 = Pin.create!(title: "pinTitle10", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user3.id)
    pin11 = Pin.create!(title: "pinTitle12", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user4.id)
    pin12 = Pin.create!(title: "pinTitle12", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user4.id)
    pin13 = Pin.create!(title: "pinTitle13", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user4.id)

    follow1 = Follow.create!(follower_id: user5.id, followed_id: user1.id)
    follow2 = Follow.create!(follower_id: user5.id, followed_id: user2.id)
    follow3 = Follow.create!(follower_id: user5.id, followed_id: user3.id)
    follow4 = Follow.create!(follower_id: user5.id, followed_id: user4.id)
    follow5 = Follow.create!(follower_id: user1.id, followed_id: user5.id)
    follow6 = Follow.create!(follower_id: user1.id, followed_id: user2.id)
    follow7 = Follow.create!(follower_id: user2.id, followed_id: user5.id)
    follow8 = Follow.create!(follower_id: user2.id, followed_id: user1.id)
    follow9 = Follow.create!(follower_id: user2.id, followed_id: user3.id)

    pintoboard1 = Pinstoboard.create!(pin_id: pin1.id, board_id: board1.id)
    pintoboard2 = Pinstoboard.create!(pin_id: pin2.id, board_id: board1.id)
    pintoboard3 = Pinstoboard.create!(pin_id: pin3.id, board_id: board1.id)
    pintoboard4 = Pinstoboard.create!(pin_id: pin4.id, board_id: board1.id)
    pintoboard5 = Pinstoboard.create!(pin_id: pin5.id, board_id: board1.id)
    pintoboard6 = Pinstoboard.create!(pin_id: pin6.id, board_id: board1.id)
    pintoboard7 = Pinstoboard.create!(pin_id: pin7.id, board_id: board1.id)
    pintoboard8 = Pinstoboard.create!(pin_id: pin1.id, board_id: board2.id)
    pintoboard9 = Pinstoboard.create!(pin_id: pin2.id, board_id: board2.id)
    pintoboard10 = Pinstoboard.create!(pin_id: pin3.id, board_id: board2.id)
    pintoboard11 = Pinstoboard.create!(pin_id: pin4.id, board_id: board2.id)



