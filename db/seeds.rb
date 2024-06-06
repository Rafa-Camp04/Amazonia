require "open-uri"

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    CartItem.destroy_all
    User.destroy_all
    Product.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@example.com', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating products..."

    product1 = Product.create!({
      name: 'Apple iPad Air (5th Generation)',
      price: 549.99,
      description: "This is the description for product 1."
    })
    
    # product1.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-1.jpg"), filename: 'product-1.jpg')

    product2 = Product.create!({
      name: 'Sunglasses Men Polarized',
      price: 89.99,
      description: "This is the description for product 2."
    })

    product3 = Product.create!({
      name: 'DUCO Mens Sports Polarized Sunglasses UV Protection',
      price: 179.99,
      description: "This is the description for product 3."
    })

    product4 = Product.create!({
      name: 'Technics Wireless Noise Cancelling Headphones',
      price: 119.99,
      description: "This is the description for product 4."
    })

    product5 = Product.create!({
      name: 'Sloosh Bubble Lawn Mower Toddler Toys',
      price: 29.99,
      description: "This is the description for product 5."
    })

    product6 = Product.create!({
      name: 'Hexagon Workout Dumbbell Hand Weight',
      price: 21.99,
      description: "This is the description for product 6."
    })

    product7 = Product.create!({
      name: 'Sony OLED 65 inch BRAVIA XR A80L Series 4K Ultra HD TV',
      price: 1698.05,
      description: "This is the description for product 7."
    })

    product8 = Product.create!({
      name: 'Energizer AA Batteries',
      price: 13.85,
      description: "This is the description for product 8."
    })

    product9 = Product.create!({
      name: 'Mattel Games UNO Card Game',
      price: 10.99,
      description: "This is the description for product 9."
    })

    product10 = Product.create!({
      name: 'Bicycle Rider Back Playing Cards',
      price: 4.89,
      description: "This is the description for product 10."
    })

    product11 = Product.create!({
      name: 'Wooden Pizza Paddle Spatula',
      price: 17.99,
      description: "This is the description for product 11."
    })

    product12 = Product.create!({
      name: 'Elegance Stainless Steel Rectangular Tray',
      price: 73.02,
      description: "This is the description for product 12."
    })

    product13 = Product.create!({
      name: 'Basic Cotton Ribbed Fitted Tank Top',
      price: 19.99,
      description: "This is the description for product 13."
    })

    product14 = Product.create!({
      name: 'Leather Tennis Shoes Low Top lace',
      price: 24.99,
      description: "This is the description for product 14."
    })

    product15 = Product.create!({
      name: 'Luxury 3 Seater Boucle Upholstered Cloud Couch',
      price: 999.99,
      description: "This is the description for product 15."
    })

    product16 = Product.create!({
      name: 'HP DeskJet 2855e Wireless All-in-One Color Inkjet Printer',
      price: 54.85,
      description: "This is the description for product 16."
    })

    product1.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-1.jpg"), filename: 'product-1.jpg')
    product2.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-2.jpg"), filename: 'product-2.jpg')
    product3.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-3.jpg"), filename: 'product-3.jpg')
    product4.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-4.jpg"), filename: 'product-4.jpg')
    product5.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-5.jpg"), filename: 'product-5.jpg')
    product6.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-6.jpg"), filename: 'product-6.jpg')
    product7.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-7.jpg"), filename: 'product-7.jpg')
    product8.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-8.jpg"), filename: 'product-8.jpg')
    product9.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-9.jpg"), filename: 'product-9.jpg')
    product10.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-10.jpg"), filename: 'product-10.jpg')
    product11.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-11.jpg"), filename: 'product-11.jpg')
    product12.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-12.jpg"), filename: 'product-12.jpg')
    product13.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-13.jpg"), filename: 'product-13.jpg')
    product14.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-14.jpg"), filename: 'product-14.jpg')
    product15.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-15.jpg"), filename: 'product-15.jpg')
    product16.photo.attach(io: URI.open("https://amazonia-seeds.s3.us-east-2.amazonaws.com/product-16.jpg"), filename: 'product-16.jpg')

    puts "Creating reviews..."

    Review.create!({
      title: 'Review for item 2',
      body: 'I recommend this product!',
      rating: 5,
      user_id: 1,
      product_id: 1
    })
  
    puts "Done!"
  # end