# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

board1 = Board.create!(name: "testName1", description: "testDesc1", public: true, user_id: 1)
board2 = Board.create!(name: "testName2", description: "testDesc2", public: true, user_id: 1)
