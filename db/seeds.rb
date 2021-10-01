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

pin1 = Pin.create!(title: "Inside Glacier", description: "This is a view from inside a glacier.  The light hits the ice and the tunnel looks amazing!", organized: true, user_id: user1.id)
photo1 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-1.jpg")
pin1.photo.attach(io: photo1, filename: "splash-1.jpg")

pin2 = Pin.create!(title: "Walking on Glacier", description: "It was so fun walking on this glacier.  I also met some really cool people that day.", organized: true, user_id: user2.id)
photo2 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-2.jpg")
pin2.photo.attach(io: photo2, filename: "splash-2.jpg")

pin3 = Pin.create!(title: "My Hand is Freezing", description: "My hand was so cold while trying to take this picture.  Totally worth it though!", organized: true, user_id: user3.id)
photo3 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-3.jpg")
pin3.photo.attach(io: photo3, filename: "splash-3.jpg")

pin4 = Pin.create!(title: "Frozen Water", description: "It was so cold when I was taking this picture.  The way the water froze was so cool and unique.", organized: true, user_id: user4.id)
photo4 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-4.jpg")
pin4.photo.attach(io: photo4, filename: "splash-4.jpg")

pin5 = Pin.create!(title: "Wide Angle Ice", description: "I thought I was being artsy when I took this picture.  Hey look at me.", organized: true, user_id: user5.id)
photo5 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-5.jpg")
pin5.photo.attach(io: photo5, filename: "splash-5.jpg")

pin6 = Pin.create!(title: "Northern Lights", description: "I went out three nights in a row just to finally see the northern lights.  Finally got to see it!!!", organized: true, user_id: user1.id)
photo6 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-6.jpg")
pin6.photo.attach(io: photo6, filename: "splash-6.jpg")

pin7 = Pin.create!(title: "Drone Shot", description: "It was so windy when I used my drone to get this shot.  It returned just fine!  Phew!!", organized: true, user_id: user2.id)
photo7 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-7.jpg")
pin7.photo.attach(io: photo7, filename: "splash-7.jpg")

pin8 = Pin.create!(title: "Clear Ice", description: "I used a glove to hold this piece of ice so that my hand does not freeze off.", organized: true, user_id: user3.id)
photo8 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-8.jpg")
pin8.photo.attach(io: photo8, filename: "splash-8.jpg")

pin9 = Pin.create!(title: "Fisheye Horse", description: "These horses were just grazing in the wild.  It was such a great sight!", organized: true, user_id: user4.id)
photo9 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-9.jpg")
pin9.photo.attach(io: photo9, filename: "splash-9.jpg")

pin10 = Pin.create!(title: "Crazy Waterfall", description: "After taking this picture my jacket was soaking wet.  Well worth it though.", organized: true, user_id: user5.id)
photo10 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-10.jpg")
pin10.photo.attach(io: photo10, filename: "splash-10.jpg")

pin11 = Pin.create!(title: "Licking Nose", description: "My nose is kind of itchy.  Or maybe I have some leftovers that I saved for later.", organized: true, user_id: user1.id)
photo11 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-11.jpg")
pin11.photo.attach(io: photo11, filename: "splash-11.jpg")

pin12 = Pin.create!(title: "Cool Shiba", description: "Hey, check out my bandana!  I think I look pretty cool.  Stylinnnn", organized: true, user_id: user2.id)
photo12 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-12.jpg")
pin12.photo.attach(io: photo12, filename: "splash-12.jpg")

pin13 = Pin.create!(title: "Pink is In", description: "I love my new pink acessories.  Other dogs are super jealous of me.", organized: true, user_id: user3.id)
photo13 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-13.jpg")
pin13.photo.attach(io: photo13, filename: "splash-13.jpg")

pin14 = Pin.create!(title: "Best Friends", description: "Going on this hike with my best friend was so much fun.  But she's hugging me for way too long.", organized: true, user_id: user4.id)
photo14 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-14.jpg")
pin14.photo.attach(io: photo14, filename: "splash-14.jpg")

pin15 = Pin.create!(title: "Park Chillin", description: "Hanging out in this park today was so much fun.  The weather was great too.", organized: true, user_id: user5.id)
photo15 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-15.jpg")
pin15.photo.attach(io: photo15, filename: "splash-15.jpg")

pin16 = Pin.create!(title: "Fetch!", description: "I love playing fetch in the park.  Nobody takes my tennis ball!", organized: true, user_id: user1.id)
photo16 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-16.jpg")
pin16.photo.attach(io: photo16, filename: "splash-16.jpg")

pin17 = Pin.create!(title: "Fisheye Dog", description: "I promise my nose doesn't look this big in real life.  It just the lens I swear!", organized: true, user_id: user2.id)
photo17 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-17.jpg")
pin17.photo.attach(io: photo17, filename: "splash-17.jpg")

pin18 = Pin.create!(title: "Whats Going On", description: "I'm on this walk and everyone keeps looking at me and taking pictures.  Cmon give me my privacy.", organized: true, user_id: user3.id)
photo18 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-18.jpg")
pin18.photo.attach(io: photo18, filename: "splash-18.jpg")

pin19 = Pin.create!(title: "Chillin", description: "I'm just laying here waiting for my owner to give me tummy rubs.  I'm so spoiled.", organized: true, user_id: user4.id)
photo19 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-19.jpg")
pin19.photo.attach(io: photo19, filename: "splash-19.jpg")

pin20 = Pin.create!(title: "Just a Baby", description: "This grass feels so weird on my feet.  I'm used to walking on snow.", organized: true, user_id: user5.id)
photo20 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-20.jpg")
pin20.photo.attach(io: photo20, filename: "splash-20.jpg")

pin21 = Pin.create!(title: "Fresh Pizza", description: "This pizza was made with only the freshest ingredients.  The tomatos and basil was grown in my own garden.", organized: true, user_id: user1.id)
photo21 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-21.jpg")
pin21.photo.attach(io: photo21, filename: "splash-21.jpg")

pin22 = Pin.create!(title: "Chef's Touch", description: "The amount of effor that goes into every piece of sushi was incredible for such a seemingly simple meal.", organized: true, user_id: user2.id)
photo22 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-22.jpg")
pin22.photo.attach(io: photo22, filename: "splash-22.jpg")

pin23 = Pin.create!(title: "Vege Approved", description: "This tasted amazing and was great for my vegetarian diet.", organized: true, user_id: user3.id)
photo23 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-23.jpg")
pin23.photo.attach(io: photo23, filename: "splash-23.jpg")

pin24 = Pin.create!(title: "Sushi Plate", description: "Took this picture at a sushi buffet and thought I was being fancy by cutting off half the plate.", organized: true, user_id: user4.id)
photo24 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-24.jpg")
pin24.photo.attach(io: photo24, filename: "splash-24.jpg")

pin25 = Pin.create!(title: "Pizza Life", description: "Only thing better than one pizza is two pizzas.  Only thing better than two pizzas is eatting two pizzas in bed.", organized: true, user_id: user5.id)
photo25 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-25.jpg")
pin25.photo.attach(io: photo25, filename: "splash-25.jpg")

pin26 = Pin.create!(title: "Shrimp and Salmon", description: "This was the freshes pice of shrimp and salmon I ever ate.  I can't wait to come back and eat this again.", organized: true, user_id: user1.id)
photo26 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-26.jpg")
pin26.photo.attach(io: photo26, filename: "splash-26.jpg")

pin27 = Pin.create!(title: "Salmonsss", description: "Salmon is one of my favorite cuts of fish whenever I eat sushi.  Always pretty consistent.  Can't go wrong.", organized: true, user_id: user2.id)
photo27 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-27.jpg")
pin27.photo.attach(io: photo27, filename: "splash-27.jpg")

pin28 = Pin.create!(title: "Olives?", description: "Yoooo someone take these olives off my pizza.  Olives are grossssss.", organized: true, user_id: user3.id)
photo28 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-28.jpg")
pin28.photo.attach(io: photo28, filename: "splash-28.jpg")

pin29 = Pin.create!(title: "Mini Pizza", description: "This pizza tasted sooo good.  Too bad it was so small.  I had to order two just for myself.", organized: true, user_id: user4.id)
photo29 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-29.jpg")
pin29.photo.attach(io: photo29, filename: "splash-29.jpg")

pin30 = Pin.create!(title: "Sushi Platter", description: "The variety of sushi at this restaurant was great.  Wish I could switch out the octopus though.", organized: true, user_id: user5.id)
photo30 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-30.jpg")
pin30.photo.attach(io: photo30, filename: "splash-30.jpg")

pin31 = Pin.create!(title: "Incoming Rain", description: "The clouds were starting to come in here and I was so worried it was going to rain.  Luckily we made it up before that happened!", organized: true, user_id: user1.id)
photo31 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-31.jpg")
pin31.photo.attach(io: photo31, filename: "splash-31.jpg")

pin32 = Pin.create!(title: "Where's my Shirt", description: "After climbing the whole day, it was too hot to wear a shirt.  Now I don't know where it went.  I liked that shirt.", organized: true, user_id: user2.id)
photo32 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-32.jpg")
pin32.photo.attach(io: photo32, filename: "splash-32.jpg")

pin33 = Pin.create!(title: "So Scared", description: "This was my first time climbing this mountain.  I was so scared but it was so worth it!", organized: true, user_id: user3.id)
photo33 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-33.jpg")
pin33.photo.attach(io: photo33, filename: "splash-33.jpg")

pin34 = Pin.create!(title: "With a View", description: "I had to make sure I focused on this climb.  The breathtaking view was so distracting.", organized: true, user_id: user4.id)
photo34 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-34.jpg")
pin34.photo.attach(io: photo34, filename: "splash-34.jpg")

pin35 = Pin.create!(title: "Poowwwwww", description: "This powder was amazing.  I was just floating down the mountain.", organized: true, user_id: user5.id)
photo35 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-35.jpg")
pin35.photo.attach(io: photo35, filename: "splash-35.jpg")

pin36 = Pin.create!(title: "Van Life", description: "My cozy home on wheels.  I have everything I need.  Nothing more nothing less.", organized: true, user_id: user1.id)
photo36 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-36.jpg")
pin36.photo.attach(io: photo36, filename: "splash-36.jpg")

pin37 = Pin.create!(title: "Bouldering Jeans", description: "You know you're a pro when you boulder in jeans.", organized: true, user_id: user2.id)
photo37 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-37.jpg")
pin37.photo.attach(io: photo37, filename: "splash-37.jpg")

pin38 = Pin.create!(title: "Artsy Angles", description: "I thought I was being artsy taking photos at this angle.  What do you think?", organized: true, user_id: user3.id)
photo38 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-38.jpg")
pin38.photo.attach(io: photo38, filename: "splash-38.jpg")

pin39 = Pin.create!(title: "Viewssss", description: "Sometimes being this high up makes me scared.  I just don't look down.", organized: true, user_id: user4.id)
photo39 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-39.jpg")
pin39.photo.attach(io: photo39, filename: "splash-39.jpg")

pin40 = Pin.create!(title: "Perfect Bedroom", description: "We woke up and made coffee, went back to bed, and enjoyed the views for thee first few minutes of our morning.", organized: true, user_id: user5.id)
photo40 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-40.jpg")
pin40.photo.attach(io: photo40, filename: "splash-40.jpg")

pin41 = Pin.create!(title: "Iphone Shot", description: "Iphone cameras take such great pictures.  Who needs a real camera these days.", organized: true, user_id: user1.id)
photo41 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-41.jpg")
pin41.photo.attach(io: photo41, filename: "splash-41.jpg")

pin42 = Pin.create!(title: "Frozen Waterfall", description: "It must be so cold for a waterfall to freeze.  I was freezing trying to take this picture.", organized: true, user_id: user2.id)
photo42 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-42.jpg")
pin42.photo.attach(io: photo42, filename: "splash-42.jpg")

pin43 = Pin.create!(title: "Roadside View", description: "I pulled over on the side of the road when I saw this view.  Sometimes you just have to slow down and take in these amazing views.", organized: true, user_id: user3.id)
photo43 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-43.jpg")
pin43.photo.attach(io: photo43, filename: "splash-43.jpg")

pin44 = Pin.create!(title: "Huge Ice Boulder", description: "I found this ice boulder and thought I would look super cool.  What do you think?  Nope?", organized: true, user_id: user4.id)
photo44 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-44.jpg")
pin44.photo.attach(io: photo44, filename: "splash-44.jpg")

pin45 = Pin.create!(title: "Hotspring", description: "After days of hiking and walking around it felt so good relaxing in this hotspring.", organized: true, user_id: user5.id)
photo45 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-45.jpg")
pin45.photo.attach(io: photo45, filename: "splash-45.jpg")

pin46 = Pin.create!(title: "Cool View", description: "This view was breathtaking.  It's not everyday you can clear your mind and appreciate the moment.", organized: true, user_id: user1.id)
photo46 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-46.jpg")
pin46.photo.attach(io: photo46, filename: "splash-46.jpg")

pin47 = Pin.create!(title: "Amazing Waterfall", description: "It's crazy when you realize the amount of water rushing through these waterfalls.  ", organized: true, user_id: user2.id)
photo47 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-47.jpg")
pin47.photo.attach(io: photo47, filename: "splash-47.jpg")

pin48 = Pin.create!(title: "Calm Water", description: "The water was so calm here I had to stop and take a picture.", organized: true, user_id: user3.id)
photo48 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-48.jpg")
pin48.photo.attach(io: photo48, filename: "splash-48.jpg")

pin49 = Pin.create!(title: "Rough Waves", description: "The waves were so strong here I was pretty scared I was gonna get wet and walk around the whole day with wet clothes.", organized: true, user_id: user4.id)
photo49 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-49.jpg")
pin49.photo.attach(io: photo49, filename: "splash-49.jpg")

pin50 = Pin.create!(title: "Blacksand Beach", description: "This beach was so unique.  I never been on a beach with black sand before.  It was super cool!", organized: true, user_id: user5.id)
photo50 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-50.jpg")
pin50.photo.attach(io: photo50, filename: "splash-50.jpg")

pin51 = Pin.create!(title: "Me and My Homie", description: "Spend the day chillin with my homie today.  I wish I could do this everyday.  Check out our tongues.", organized: true, user_id: user5.id)
photo51 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-51.jpg")
pin51.photo.attach(io: photo51, filename: "splash-51.jpg")

pin52 = Pin.create!(title: "Cheeese", description: "They had me pose forever trying to take this picture.  Cmon guys, I'm sure the first 10 pictures looked fine.", organized: true, user_id: user5.id)
photo52 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-52.jpg")
pin52.photo.attach(io: photo52, filename: "splash-52.jpg")

pin53 = Pin.create!(title: "Whatchu Say?!", description: "I wanted to eat more food but my owners said only one serving.  They're talking crazy!", organized: true, user_id: user5.id)
photo53 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-53.jpg")
pin53.photo.attach(io: photo53, filename: "splash-53.jpg")

pin54 = Pin.create!(title: "Love Hikes", description: "My paws get so dirty when I go on these hikes.  Good thing I'm not the one who has to clean them.  Phewwww", organized: true, user_id: user5.id)
photo54 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-54.jpg")
pin54.photo.attach(io: photo54, filename: "splash-54.jpg")

pin55 = Pin.create!(title: "I See a Squirrel ", description: "I saw a squirrel in the distance and I was so tempted to chase after him.  Actually I did chase after him.", organized: true, user_id: user5.id)
photo55 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-55.jpg")
pin55.photo.attach(io: photo55, filename: "splash-55.jpg")

pin56 = Pin.create!(title: "Boardwalk Day", description: "Had so much fun walking on the boardwalk today.  Everyone wanted to take a picture of me.", organized: true, user_id: user5.id)
photo56 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-56.jpg")
pin56.photo.attach(io: photo56, filename: "splash-56.jpg")

pin57 = Pin.create!(title: "Soccer Time", description: "I have to kick this ball wherever I go because it's too big for me to carry it in my mouth.", organized: true, user_id: user5.id)
photo57 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-57.jpg")
pin57.photo.attach(io: photo57, filename: "splash-57.jpg")

pin58 = Pin.create!(title: "Bubbles!!", description: "I want to eat all the bubbles.  Yummmmm yumm yum nom nom nom.", organized: true, user_id: user5.id)
photo58 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-58.jpg")
pin58.photo.attach(io: photo58, filename: "splash-58.jpg")

pin59 = Pin.create!(title: "So Furry", description: "My owner brushes my fur everyday and it feels so good.  I'm so lucky.  Too bad they don't like when I shed everywhere.", organized: true, user_id: user5.id)
photo59 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-59.jpg")
pin59.photo.attach(io: photo59, filename: "splash-59.jpg")

pin60 = Pin.create!(title: "I Got It", description: "Getting my practice in for the next time I go eat hibachi.  Gonna catch all the food the chef throws my way!", organized: true, user_id: user5.id)
photo60 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-60.jpg")
pin60.photo.attach(io: photo60, filename: "splash-60.jpg")

pin61 = Pin.create!(title: "Burnt Bubbles", description: "You know a pizza is going to be good when you see those burnt bubbles.  That means the under carriage is going to be on point.", organized: true, user_id: user5.id)
photo61 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-61.jpg")
pin61.photo.attach(io: photo61, filename: "splash-61.jpg")

pin62 = Pin.create!(title: "Japanese Ramen", description: "Perfect ramen restaurant for those of you who are forever alone.  Just you and your ramen.", organized: true, user_id: user5.id)
photo62 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-62.jpg")
pin62.photo.attach(io: photo62, filename: "splash-62.jpg")

pin63 = Pin.create!(title: "Fresh Pizza", description: "The first step in making a great pizza is using great ingredients.  I know this pizza is going to be good even before cooking it.", organized: true, user_id: user5.id)
photo63 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-63.jpg")
pin63.photo.attach(io: photo63, filename: "splash-63.jpg")

pin64 = Pin.create!(title: "Sushi Bar", description: "Calm before the storm.  Once we open thee doors we'll be on our feet working non stop.", organized: true, user_id: user5.id)
photo64 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-64.jpg")
pin64.photo.attach(io: photo64, filename: "splash-64.jpg")

pin65 = Pin.create!(title: "Crispy Katsu", description: "There's nothing like a perfectly fried Japanese katsu.  The flakes with the meat with the rice.  They all go together so well!", organized: true, user_id: user5.id)
photo65 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-65.jpg")
pin65.photo.attach(io: photo65, filename: "splash-65.jpg")

pin66 = Pin.create!(title: "More Basil Please", description: "The cheese on this pizza was sooo good.  But cmon let me get more basil.", organized: true, user_id: user5.id)
photo66 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-66.jpg")
pin66.photo.attach(io: photo66, filename: "splash-66.jpg")

pin67 = Pin.create!(title: "Yakitori", description: "Just a chill night with the homies.  Had a great time and capped it off with some Yakitori.", organized: true, user_id: user5.id)
photo67 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-67.jpg")
pin67.photo.attach(io: photo67, filename: "splash-67.jpg")

pin68 = Pin.create!(title: "Salmon Gang", description: "Salmon on salmon on salmon on salmon.  You can never go wrong with salmon sushi.", organized: true, user_id: user5.id)
photo68 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-68.jpg")
pin68.photo.attach(io: photo68, filename: "splash-68.jpg")

pin69 = Pin.create!(title: "Gourmet Pizza", description: "This chef knows how to make a good pizza.  Look at the crust.  Look at those bubbles.  Look at those ingredients.", organized: true, user_id: user5.id)
photo69 = URI.open("https://pinspo-storage-seed.s3.amazonaws.com/splash-69.jpg")
pin69.photo.attach(io: photo69, filename: "splash-69.jpg")

pin70 = Pin.create!(title: "Got Basils", description: "Finally someone who puts enough basils on the pizza.  Enough basils for every slice.", organized: true, user_id: user5.id)
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





