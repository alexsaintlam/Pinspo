# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

Pinstoboard.destroy_all
Pin.destroy_all
Board.destroy_all
Follow.destroy_all
User.destroy_all

user1 = User.create!(username: "DemoUser", email: "demo@demo.com", age: 1, password: "demo123")
photo101 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-101.jpg")
user1.photo.attach(io: photo101, filename: "splash-101.jpg")

user2 = User.create!(username: "Alex", email: "alex@alex.com", age: 31, password: "alex123")
photo105 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-105.jpg")
user2.photo.attach(io: photo105, filename: "splash-105.jpg")

user3 = User.create!(username: "Richard", email: "richard@richard.com", age: 31, password: "alex123")
photo102 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-102.jpg")
user3.photo.attach(io: photo102, filename: "splash-102.jpg")

user4 = User.create!(username: "Anthony", email: "ant@ant.com", age: 31, password: "alex123")
photo104 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-104.jpg")
user4.photo.attach(io: photo104, filename: "splash-104.jpg")

user5 = User.create!(username: "Chris", email: "chris@chris.com", age: 31, password: "alex123")
photo103 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-103.jpg")
user5.photo.attach(io: photo103, filename: "splash-103.jpg")

user6 = User.create!(username: "Winnie", email: "Winnie@chris.com", age: 31, password: "alex123")
user7 = User.create!(username: "Cindy", email: "Cindy@chris.com", age: 31, password: "alex123")
user8 = User.create!(username: "Julian", email: "Julians@chris.com", age: 31, password: "alex123")
user9 = User.create!(username: "James", email: "James@chris.com", age: 31, password: "alex123")
user10 = User.create!(username: "Baldy", email: "Chris@me.com", age: 31, password: "alex123")

board1 = Board.create!(name: "Traveling", description: "past present and future travel ideas", public: true, user_id: user1.id)
board2 = Board.create!(name: "Dawgs", description: "dogs > cats", public: true, user_id: user1.id)
board3 = Board.create!(name: "Foooood", description: "sushi and pizza diet", public: true, user_id: user1.id)
board4 = Board.create!(name: "boardName4", description: "boardDesc4", public: true, user_id: user2.id)
board5 = Board.create!(name: "boardName5", description: "boardDesc5", public: true, user_id: user2.id)

pin1 = Pin.create!(title: "pinTitle1", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user1.id)
photo1 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-1.jpg")
pin1.photo.attach(io: photo1, filename: "splash-1.jpg")

pin2 = Pin.create!(title: "pinTitle2", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1pinDesc2", organized: true, user_id: user2.id)
photo2 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-2.jpg")
pin2.photo.attach(io: photo2, filename: "splash-2.jpg")

pin3 = Pin.create!(title: "pinTitle3", description: "pinDesc3pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user3.id)
photo3 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-3.jpg")
pin3.photo.attach(io: photo3, filename: "splash-3.jpg")

pin4 = Pin.create!(title: "pinTitle4", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user4.id)
photo4 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-4.jpg")
pin4.photo.attach(io: photo4, filename: "splash-4.jpg")

pin5 = Pin.create!(title: "pinTitle5", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
photo5 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-5.jpg")
pin5.photo.attach(io: photo5, filename: "splash-5.jpg")

pin6 = Pin.create!(title: "pinTitle6", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user1.id)
photo6 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-6.jpg")
pin6.photo.attach(io: photo6, filename: "splash-6.jpg")

pin7 = Pin.create!(title: "pinTitle7", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user2.id)
photo7 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-7.jpg")
pin7.photo.attach(io: photo7, filename: "splash-7.jpg")

pin8 = Pin.create!(title: "pinTitle8", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user3.id)
photo8 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-8.jpg")
pin8.photo.attach(io: photo8, filename: "splash-8.jpg")

pin9 = Pin.create!(title: "pinTitle9", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user4.id)
photo9 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-9.jpg")
pin9.photo.attach(io: photo9, filename: "splash-9.jpg")

pin10 = Pin.create!(title: "pinTitle10", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
photo10 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-10.jpg")
pin10.photo.attach(io: photo10, filename: "splash-10.jpg")

pin11 = Pin.create!(title: "pinTitle12", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user1.id)
photo11 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-11.jpg")
pin11.photo.attach(io: photo11, filename: "splash-11.jpg")

pin12 = Pin.create!(title: "pinTitle12", description: "pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user2.id)
photo12 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-12.jpg")
pin12.photo.attach(io: photo12, filename: "splash-12.jpg")

pin13 = Pin.create!(title: "pinTitle13", description: "pinDesc1pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user3.id)
photo13 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-13.jpg")
pin13.photo.attach(io: photo13, filename: "splash-13.jpg")

pin14 = Pin.create!(title: "pinTitle14", description: "pinDesc14pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user4.id)
photo14 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-14.jpg")
pin14.photo.attach(io: photo14, filename: "splash-14.jpg")

pin15 = Pin.create!(title: "pinTitle15", description: "pinDesc15pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user5.id)
photo15 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-15.jpg")
pin15.photo.attach(io: photo15, filename: "splash-15.jpg")

pin16 = Pin.create!(title: "pinTitle16", description: "pinDesc16pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user1.id)
photo16 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-16.jpg")
pin16.photo.attach(io: photo16, filename: "splash-16.jpg")

pin17 = Pin.create!(title: "pinTitle17", description: "pinDesc1pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc17", organized: true, user_id: user2.id)
photo17 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-17.jpg")
pin17.photo.attach(io: photo17, filename: "splash-17.jpg")

pin18 = Pin.create!(title: "pinTitle18", description: "pinDesc18pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1", organized: true, user_id: user3.id)
photo18 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-18.jpg")
pin18.photo.attach(io: photo18, filename: "splash-18.jpg")

pin19 = Pin.create!(title: "pinTitle19", description: "pinDesc1pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc19", organized: true, user_id: user4.id)
photo19 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-19.jpg")
pin19.photo.attach(io: photo19, filename: "splash-19.jpg")

pin20 = Pin.create!(title: "pinTitle20", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc120", organized: true, user_id: user5.id)
photo20 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-20.jpg")
pin20.photo.attach(io: photo20, filename: "splash-20.jpg")

pin21 = Pin.create!(title: "pinTitle21", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc121", organized: true, user_id: user1.id)
photo21 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-21.jpg")
pin21.photo.attach(io: photo21, filename: "splash-21.jpg")

pin22 = Pin.create!(title: "pinTitle22", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c22", organized: true, user_id: user2.id)
photo22 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-22.jpg")
pin22.photo.attach(io: photo22, filename: "splash-22.jpg")

pin23 = Pin.create!(title: "pinTitle23", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc123", organized: true, user_id: user3.id)
photo23 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-23.jpg")
pin23.photo.attach(io: photo23, filename: "splash-23.jpg")

pin24 = Pin.create!(title: "pinTitle24", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc124", organized: true, user_id: user4.id)
photo24 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-24.jpg")
pin24.photo.attach(io: photo24, filename: "splash-24.jpg")

pin25 = Pin.create!(title: "pinTitle25", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc125", organized: true, user_id: user5.id)
photo25 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-25.jpg")
pin25.photo.attach(io: photo25, filename: "splash-25.jpg")

pin26 = Pin.create!(title: "pinTitle26", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c26", organized: true, user_id: user1.id)
photo26 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-26.jpg")
pin26.photo.attach(io: photo26, filename: "splash-26.jpg")

pin27 = Pin.create!(title: "pinTitle27", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc127", organized: true, user_id: user2.id)
photo27 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-27.jpg")
pin27.photo.attach(io: photo27, filename: "splash-27.jpg")

pin28 = Pin.create!(title: "pinTitle28", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc128", organized: true, user_id: user3.id)
photo28 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-28.jpg")
pin28.photo.attach(io: photo28, filename: "splash-28.jpg")

pin29 = Pin.create!(title: "pinTitle29", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc129", organized: true, user_id: user4.id)
photo29 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-29.jpg")
pin29.photo.attach(io: photo29, filename: "splash-29.jpg")

pin30 = Pin.create!(title: "pinTitle30", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc130", organized: true, user_id: user5.id)
photo30 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-30.jpg")
pin30.photo.attach(io: photo30, filename: "splash-30.jpg")

pin31 = Pin.create!(title: "pinTitle31", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc131", organized: true, user_id: user1.id)
photo31 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-31.jpg")
pin31.photo.attach(io: photo31, filename: "splash-31.jpg")

pin32 = Pin.create!(title: "pinTitle32", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc132", organized: true, user_id: user2.id)
photo32 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-32.jpg")
pin32.photo.attach(io: photo32, filename: "splash-32.jpg")

pin33 = Pin.create!(title: "pinTitle33", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc133", organized: true, user_id: user3.id)
photo33 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-33.jpg")
pin33.photo.attach(io: photo33, filename: "splash-33.jpg")

pin34 = Pin.create!(title: "pinTitle34", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc134", organized: true, user_id: user4.id)
photo34 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-34.jpg")
pin34.photo.attach(io: photo34, filename: "splash-34.jpg")

pin35 = Pin.create!(title: "pinTitle35", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c35", organized: true, user_id: user5.id)
photo35 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-35.jpg")
pin35.photo.attach(io: photo35, filename: "splash-35.jpg")

pin36 = Pin.create!(title: "pinTitle36", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc136", organized: true, user_id: user1.id)
photo36 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-36.jpg")
pin36.photo.attach(io: photo36, filename: "splash-36.jpg")

pin37 = Pin.create!(title: "pinTitle37", description: "pinDescpinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc137", organized: true, user_id: user2.id)
photo37 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-37.jpg")
pin37.photo.attach(io: photo37, filename: "splash-37.jpg")

pin38 = Pin.create!(title: "pinTitle38", description: "pinDesc3pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc18", organized: true, user_id: user3.id)
photo38 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-38.jpg")
pin38.photo.attach(io: photo38, filename: "splash-38.jpg")

pin39 = Pin.create!(title: "pinTitle39", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c39", organized: true, user_id: user4.id)
photo39 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-39.jpg")
pin39.photo.attach(io: photo39, filename: "splash-39.jpg")

pin40 = Pin.create!(title: "pinTitle40", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c40", organized: true, user_id: user5.id)
photo40 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-40.jpg")
pin40.photo.attach(io: photo40, filename: "splash-40.jpg")

pin41 = Pin.create!(title: "pinTitle41", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c41", organized: true, user_id: user1.id)
photo41 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-41.jpg")
pin41.photo.attach(io: photo41, filename: "splash-41.jpg")

pin42 = Pin.create!(title: "pinTitle42", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c42", organized: true, user_id: user2.id)
photo42 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-42.jpg")
pin42.photo.attach(io: photo42, filename: "splash-42.jpg")

pin43 = Pin.create!(title: "pinTitle43", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c43", organized: true, user_id: user3.id)
photo43 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-43.jpg")
pin43.photo.attach(io: photo43, filename: "splash-43.jpg")

pin44 = Pin.create!(title: "pinTitle44", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c44", organized: true, user_id: user4.id)
photo44 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-44.jpg")
pin44.photo.attach(io: photo44, filename: "splash-44.jpg")

pin45 = Pin.create!(title: "pinTitle45", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c45", organized: true, user_id: user5.id)
photo45 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-45.jpg")
pin45.photo.attach(io: photo45, filename: "splash-45.jpg")

pin46 = Pin.create!(title: "pinTitle46", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c46", organized: true, user_id: user1.id)
photo46 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-46.jpg")
pin46.photo.attach(io: photo46, filename: "splash-46.jpg")

pin47 = Pin.create!(title: "pinTitle47", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c47", organized: true, user_id: user2.id)
photo47 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-47.jpg")
pin47.photo.attach(io: photo47, filename: "splash-47.jpg")

pin48 = Pin.create!(title: "pinTitle48", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c48", organized: true, user_id: user3.id)
photo48 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-48.jpg")
pin48.photo.attach(io: photo48, filename: "splash-48.jpg")

pin49 = Pin.create!(title: "pinTitle49", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c49", organized: true, user_id: user4.id)
photo49 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-49.jpg")
pin49.photo.attach(io: photo49, filename: "splash-49.jpg")

pin50 = Pin.create!(title: "pinTitle50", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c50", organized: true, user_id: user5.id)
photo50 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-50.jpg")
pin50.photo.attach(io: photo50, filename: "splash-50.jpg")

pin51 = Pin.create!(title: "pinTitle51", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c51", organized: true, user_id: user5.id)
photo51 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-51.jpg")
pin51.photo.attach(io: photo51, filename: "splash-51.jpg")

pin52 = Pin.create!(title: "pinTitle52", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c52", organized: true, user_id: user5.id)
photo52 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-52.jpg")
pin52.photo.attach(io: photo52, filename: "splash-52.jpg")

pin53 = Pin.create!(title: "pinTitle53", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c53", organized: true, user_id: user5.id)
photo53 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-53.jpg")
pin53.photo.attach(io: photo53, filename: "splash-53.jpg")

pin54 = Pin.create!(title: "pinTitle54", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c54", organized: true, user_id: user5.id)
photo54 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-54.jpg")
pin54.photo.attach(io: photo54, filename: "splash-54.jpg")

pin55 = Pin.create!(title: "pinTitle55", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c55", organized: true, user_id: user5.id)
photo55 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-55.jpg")
pin55.photo.attach(io: photo55, filename: "splash-55.jpg")

pin56 = Pin.create!(title: "pinTitle56", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c56", organized: true, user_id: user5.id)
photo56 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-56.jpg")
pin56.photo.attach(io: photo56, filename: "splash-56.jpg")

pin57 = Pin.create!(title: "pinTitle57", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c57", organized: true, user_id: user5.id)
photo57 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-57.jpg")
pin57.photo.attach(io: photo57, filename: "splash-57.jpg")

pin58 = Pin.create!(title: "pinTitle58", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c58", organized: true, user_id: user5.id)
photo58 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-58.jpg")
pin58.photo.attach(io: photo58, filename: "splash-58.jpg")

pin59 = Pin.create!(title: "pinTitle59", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c59", organized: true, user_id: user5.id)
photo59 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-59.jpg")
pin59.photo.attach(io: photo59, filename: "splash-59.jpg")

pin60 = Pin.create!(title: "pinTitle60", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c60", organized: true, user_id: user5.id)
photo60 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-60.jpg")
pin60.photo.attach(io: photo60, filename: "splash-60.jpg")

pin61 = Pin.create!(title: "pinTitle61", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c61", organized: true, user_id: user5.id)
photo61 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-61.jpg")
pin61.photo.attach(io: photo61, filename: "splash-61.jpg")

pin62 = Pin.create!(title: "pinTitle62", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c62", organized: true, user_id: user5.id)
photo62 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-62.jpg")
pin62.photo.attach(io: photo62, filename: "splash-62.jpg")

pin63 = Pin.create!(title: "pinTitle63", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c63", organized: true, user_id: user5.id)
photo63 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-63.jpg")
pin63.photo.attach(io: photo63, filename: "splash-63.jpg")

pin64 = Pin.create!(title: "pinTitle64", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c64", organized: true, user_id: user5.id)
photo64 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-64.jpg")
pin64.photo.attach(io: photo64, filename: "splash-64.jpg")

pin65 = Pin.create!(title: "pinTitle65", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c65", organized: true, user_id: user5.id)
photo65 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-65.jpg")
pin65.photo.attach(io: photo65, filename: "splash-65.jpg")

pin66 = Pin.create!(title: "pinTitle66", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c66", organized: true, user_id: user5.id)
photo66 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-66.jpg")
pin66.photo.attach(io: photo66, filename: "splash-66.jpg")

pin67 = Pin.create!(title: "pinTitle67", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c67", organized: true, user_id: user5.id)
photo67 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-67.jpg")
pin67.photo.attach(io: photo67, filename: "splash-67.jpg")

pin68 = Pin.create!(title: "pinTitle68", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c68", organized: true, user_id: user5.id)
photo68 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-68.jpg")
pin68.photo.attach(io: photo68, filename: "splash-68.jpg")

pin69 = Pin.create!(title: "pinTitle69", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c69", organized: true, user_id: user5.id)
photo69 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-69.jpg")
pin69.photo.attach(io: photo69, filename: "splash-69.jpg")

pin70 = Pin.create!(title: "pinTitle70", description: "pinDespinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1 pinDesc1c70", organized: true, user_id: user5.id)
photo70 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-70.jpg")
pin70.photo.attach(io: photo70, filename: "splash-70.jpg")

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
pintoboard8 = Pinstoboard.create!(pin_id: pin8.id, board_id: board1.id)
pintoboard9 = Pinstoboard.create!(pin_id: pin9.id, board_id: board1.id)
pintoboard10 = Pinstoboard.create!(pin_id: pin10.id, board_id: board1.id)
pintoboard11 = Pinstoboard.create!(pin_id: pin11.id, board_id: board2.id)
pintoboard12 = Pinstoboard.create!(pin_id: pin12.id, board_id: board2.id)
pintoboard13 = Pinstoboard.create!(pin_id: pin13.id, board_id: board2.id)
pintoboard14 = Pinstoboard.create!(pin_id: pin14.id, board_id: board2.id)
pintoboard15 = Pinstoboard.create!(pin_id: pin15.id, board_id: board2.id)
pintoboard16 = Pinstoboard.create!(pin_id: pin16.id, board_id: board2.id)
pintoboard17 = Pinstoboard.create!(pin_id: pin17.id, board_id: board2.id)
pintoboard18 = Pinstoboard.create!(pin_id: pin18.id, board_id: board2.id)
pintoboard19 = Pinstoboard.create!(pin_id: pin19.id, board_id: board2.id)
pintoboard20 = Pinstoboard.create!(pin_id: pin20.id, board_id: board2.id)
pintoboard21 = Pinstoboard.create!(pin_id: pin21.id, board_id: board3.id)
pintoboard22 = Pinstoboard.create!(pin_id: pin22.id, board_id: board3.id)
pintoboard23 = Pinstoboard.create!(pin_id: pin23.id, board_id: board3.id)
pintoboard24 = Pinstoboard.create!(pin_id: pin24.id, board_id: board3.id)
pintoboard25 = Pinstoboard.create!(pin_id: pin25.id, board_id: board3.id)
pintoboard26 = Pinstoboard.create!(pin_id: pin26.id, board_id: board3.id)
pintoboard27 = Pinstoboard.create!(pin_id: pin27.id, board_id: board3.id)
pintoboard28 = Pinstoboard.create!(pin_id: pin28.id, board_id: board3.id)
pintoboard29 = Pinstoboard.create!(pin_id: pin29.id, board_id: board3.id)
pintoboard30 = Pinstoboard.create!(pin_id: pin30.id, board_id: board3.id)
pintoboard31 = Pinstoboard.create!(pin_id: pin31.id, board_id: board4.id)
pintoboard32 = Pinstoboard.create!(pin_id: pin32.id, board_id: board4.id)
pintoboard33 = Pinstoboard.create!(pin_id: pin33.id, board_id: board4.id)
pintoboard34 = Pinstoboard.create!(pin_id: pin34.id, board_id: board4.id)
pintoboard35 = Pinstoboard.create!(pin_id: pin35.id, board_id: board4.id)
pintoboard36 = Pinstoboard.create!(pin_id: pin36.id, board_id: board4.id)
pintoboard37 = Pinstoboard.create!(pin_id: pin37.id, board_id: board4.id)
pintoboard38 = Pinstoboard.create!(pin_id: pin38.id, board_id: board4.id)
pintoboard39 = Pinstoboard.create!(pin_id: pin39.id, board_id: board4.id)
pintoboard40 = Pinstoboard.create!(pin_id: pin40.id, board_id: board4.id)
pintoboard41 = Pinstoboard.create!(pin_id: pin41.id, board_id: board1.id)
pintoboard42 = Pinstoboard.create!(pin_id: pin42.id, board_id: board1.id)
pintoboard43 = Pinstoboard.create!(pin_id: pin43.id, board_id: board1.id)
pintoboard44 = Pinstoboard.create!(pin_id: pin44.id, board_id: board1.id)
pintoboard45 = Pinstoboard.create!(pin_id: pin45.id, board_id: board1.id)
pintoboard46 = Pinstoboard.create!(pin_id: pin46.id, board_id: board1.id)
pintoboard47 = Pinstoboard.create!(pin_id: pin47.id, board_id: board1.id)
pintoboard48 = Pinstoboard.create!(pin_id: pin48.id, board_id: board1.id)
pintoboard49 = Pinstoboard.create!(pin_id: pin49.id, board_id: board1.id)
pintoboard50 = Pinstoboard.create!(pin_id: pin50.id, board_id: board1.id)
pintoboard51 = Pinstoboard.create!(pin_id: pin51.id, board_id: board2.id)
pintoboard52 = Pinstoboard.create!(pin_id: pin52.id, board_id: board2.id)
pintoboard53 = Pinstoboard.create!(pin_id: pin53.id, board_id: board2.id)
pintoboard54 = Pinstoboard.create!(pin_id: pin54.id, board_id: board2.id)
pintoboard55 = Pinstoboard.create!(pin_id: pin55.id, board_id: board2.id)
pintoboard56 = Pinstoboard.create!(pin_id: pin56.id, board_id: board2.id)
pintoboard57 = Pinstoboard.create!(pin_id: pin57.id, board_id: board2.id)
pintoboard58 = Pinstoboard.create!(pin_id: pin58.id, board_id: board2.id)
pintoboard59 = Pinstoboard.create!(pin_id: pin59.id, board_id: board2.id)
pintoboard60 = Pinstoboard.create!(pin_id: pin60.id, board_id: board2.id)
pintoboard61 = Pinstoboard.create!(pin_id: pin61.id, board_id: board3.id)
pintoboard62 = Pinstoboard.create!(pin_id: pin62.id, board_id: board3.id)
pintoboard63 = Pinstoboard.create!(pin_id: pin63.id, board_id: board3.id)
pintoboard64 = Pinstoboard.create!(pin_id: pin64.id, board_id: board3.id)
pintoboard65 = Pinstoboard.create!(pin_id: pin65.id, board_id: board3.id)
pintoboard66 = Pinstoboard.create!(pin_id: pin66.id, board_id: board3.id)
pintoboard67 = Pinstoboard.create!(pin_id: pin67.id, board_id: board3.id)
pintoboard68 = Pinstoboard.create!(pin_id: pin68.id, board_id: board3.id)
pintoboard69 = Pinstoboard.create!(pin_id: pin69.id, board_id: board3.id)
pintoboard70 = Pinstoboard.create!(pin_id: pin70.id, board_id: board3.id)





