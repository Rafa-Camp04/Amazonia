# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
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

    Product.create!({
      name: 'Apple iPad Air (5th Generation)',
      price: 549.99,
      description: "This is the description for product 1."
    })

    Product.create!({
      name: 'Sunglasses Men Polarized',
      price: 89.99,
      description: "This is the description for product 2."
    })

    Product.create!({
      name: 'DUCO Mens Sports Polarized Sunglasses UV Protection',
      price: 179.99,
      description: "This is the description for product 3."
    })

    Product.create!({
      name: 'Technics Wireless Noise Cancelling Headphones',
      price: 119.99,
      description: "This is the description for product 4."
    })

    Product.create!({
      name: 'Sloosh Bubble Lawn Mower Toddler Toys',
      price: 29.99,
      description: "This is the description for product 5."
    })

    Product.create!({
      name: 'Hexagon Workout Dumbbell Hand Weight',
      price: 21.99,
      description: "This is the description for product 6."
    })

    Product.create!({
      name: 'Sony OLED 65 inch BRAVIA XR A80L Series 4K Ultra HD TV',
      price: 1698.05,
      description: "This is the description for product 7."
    })

    Product.create!({
      name: 'Energizer AA Batteries',
      price: 13.85,
      description: "This is the description for product 8."
    })

    Product.create!({
      name: 'Mattel Games UNO Card Game',
      price: 10.99,
      description: "This is the description for product 9."
    })

    Product.create!({
      name: 'Bicycle Rider Back Playing Cards',
      price: 4.89,
      description: "This is the description for product 10."
    })

    Product.create!({
      name: 'Wooden Pizza Paddle Spatula',
      price: 17.99,
      description: "This is the description for product 11."
    })

    Product.create!({
      name: 'Elegance Stainless Steel Rectangular Tray',
      price: 73.02,
      description: "This is the description for product 12."
    })

    Product.create!({
      name: 'Basic Cotton Ribbed Fitted Tank Top',
      price: 19.99,
      description: "This is the description for product 13."
    })

    Product.create!({
      name: 'Leather Tennis Shoes Low Top lace',
      price: 24.99,
      description: "This is the description for product 14."
    })

    Product.create!({
      name: 'Luxury 3 Seater Boucle Upholstered Cloud Couch',
      price: 999.99,
      description: "This is the description for product 15."
    })

    Product.create!({
      name: 'HP DeskJet 2855e Wireless All-in-One Color Inkjet Printer',
      price: 54.85,
      description: "This is the description for product 16."
    })
  
    puts "Done!"
  end