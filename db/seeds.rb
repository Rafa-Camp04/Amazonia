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
      name: 'Apple iPad Air 11-inch (M2): Liquid Retina display, 128GB, Landscape 12MP Front Camera/12MP Back Camera, Wi-Fi 6E, Touch ID, All-Day Battery Life — Blue',
      price: 549.99,
      description: "WHY IPAD AIR — iPad Air is powerful, versatile, and comes in a choice of two sizes. Featuring a stunning Liquid Retina display and the amazing performance of the M2 chip, along with Touch ID, advanced cameras, superfast Wi-Fi 6E, and a USB-C connector.* Plus powerful productivity features in iPadOS and next-generation Apple Pencil Pro experience.*",
      description2: "11-INCH LIQUID RETINA DISPLAY — The gorgeous Liquid Retina display features advanced technologies like P3 wide color, True Tone, and ultralow reflectivity, which make everything look stunning.*",
      description3: "PERFORMANCE AND STORAGE — The M2 chip lets you multitask smoothly between powerful apps and play graphics-intensive games. And with all-day battery life, you can keep working and playing wherever you go.* Choose up to 1TB of storage depending on the room you need for apps, music, movies, and more.*",
      description4: "IPADOS + APPS — iPadOS makes iPad more productive, intuitive, and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos.* Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Air comes with essential apps like Safari, Messages, and Keynote, with over a million more apps available on the App Store."
    })

    product2 = Product.create!({
      name: 'KALIYADI Polarized Sunglasses for Men, Lightweight Sun Glasses with UV Protection for Driving Fishing Golf',
      price: 89.99,
      description: "😎 HD Polarized Lens ▶ To prevent your eyes from the harmful UV rays, all of KALIYADI mens sunglasses polarized choose premium polarized lenses with UV400 protection function. You can be free all the time under the sunlight without worrying about the of damage to your eyes from both UVA, UVB and glare. KALIYADI mens polarized sunglasses restore true color of the world and making it more clear and soft.",
      description2: "😎 Classic Rectangle Design ▶ Rectangular frame design is the most classic style never go out and a sign of fashion. KALIYADI sunglasses for men polarized can matching almost all the clothes and give an attraction to almost any outfit both for men and women, making you stand out from the crowd.",
      description3: "😎 High Quality Material ▶ Premium Rectangular frame, anti-scratch polarizing lens, adjustable metal spring hinges and integrated nose pad make KALIYADI sunglasses men polarized uv protection more lightweight and durable. All these details of sunglasses polarized ensure the customer have a comfortable wearing experience.",
      description4: "😎 Perfect All Round ▶ KALIYADI mens sunglasses is the perfect choice for outdoor sports and activities such as walking, cycling, driving, fishing, travelling , hiking due to the lightweight and classic design. it is also suitable as fashion accessories and daily wear all year round."
    })

    product3 = Product.create!({
      name: 'DUCO Mens Sports Polarized Sunglasses UV Protection Sunglasses for Men 8177s',
      price: 179.99,
      description: "【TAC Polarized Lens】The UV400 Protection coating effectively filters out UVA and UVB radiation, providing complete sun protection. It eliminates reflected or scattered light to restore true color perception. The TAC polarized triacetate lenses boast qualities such as impact resistance, scratch resistance, lightweight design, and durability.",
      description2: "【AI-Mg Metal Alloy Frame】Crafted from Al-Mg metal sport frame, these sunglasses are unbreakable and resistant to corrosion. The adjustable soft nose pads and flexible metal hinge ensure a comfortable fit, while the carved temple tips offer anti-slip grip and the ability to bend at any angle. Despite their sturdy construction, they weigh only 25g, making them extremely comfortable to wear.",
      description3: "【Product Dimensions】Lens Height: 40MM (1.57 inches) - Lens Width: 68MM (2.67 inches) - Temple Length: 126MM (4.96 inches) - Nose Bridge: 16MM (0.62 inches) - Frame Length: 144MM (5.67 inches).",
      description4: "【Complete Accessories And Package】The sunglasses come with a glasses case featuring a carabiner for convenience, a gift box for an elegant presentation, a microfiber pouch for safe storage, a microfiber cleaning cloth for easy maintenance, and a polarization test card. With this thoughtfully curated package, it makes for a wonderful and practical gift idea for friends and family."
    })

    product4 = Product.create!({
      name: 'Technics Premium Hi-Fi True Wireless Bluetooth Earbuds with Advanced Noise Cancelling, 3 Device Multipoint Connectivity, Wireless Charging, Hi-Res Audio + Enhanced Calling - EAH-AZ80-K (Black)',
      price: 119.99,
      description: "An Epic Experience of Sound: Powerful ear buds deliver reference-quality audio with depth & texture for true-to-life sound; masterfully crafted 10mm free-edge dynamic driver & unique acoustic structure offer our highest standard for hi-res sound",
      description2: "Stay Clear, Connected, and In Control: Immersive, industry-leading noise cancelling helps keeps your focus exactly where it needs it to be; advanced 3-point multipoint connection to your computer and mobile devices for smooth, professional multitasking",
      description3: "Outstanding Call Clarity: There’s no time for mixed messages—hear clear words, not outside sounds with enhanced JustMyVoice technology; 8 high-sensitivity MEMS mics and advanced noise reduction capture and transmit your voice clearly",
      description4: "Elegantly Wireless: Included earbud case lets you charge wirelessly (Qi compatible) for an organized, clutter-free home and office; supports wireless hi-res audio using state-of-the-art Bluetooth with LDAC compatibility"
    })

    product5 = Product.create!({
      name: 'Sloosh Bubble Lawn Mower Toddler Toys - Kids Toys Bubble Machine Summer Outdoor Toys Games, Bubble Mower Push Toy Outside Toys for Toddlers Preschool Kid Boys Girls Birthday Gifts (Blue)',
      price: 29.99,
      description: "SUPER VALUE PACK.. Our bubble blowing lawn mower includes 4 x 4 oz bubble solution, 24 packs of 12 ml concentrated bubble solution, instruction sheet Mower bubble machine: 10.2' W x 10.4' L x 19'H",
      description2: "REAL FUNCTION. This lawnmower toy not only blows bubbles, but it also produces authentic sound effects to enhance the enjoyment, including gear sounds when pushed on its wheels. Whether used inside or outside, it provides children with an engaging and entertaining activity. The physical movements required to operate the toy can also provide a fun and healthy way for young children to get some exercise.",
      description3: "ENDLESS FUN. Bubble toys provide more than just a source of entertainment on sunny days, they also enable children to develop important skills in a fun and effortless manner. Kids can refine their gross motor skills by chasing and popping bubbles, while also improving their visual tracking abilities by observing the bubbles as they drift away. You will need 3 x AA batteries (not included) to start this bubble mower machine.",
      description4: "PREMIUM QUALITY: Our bubble lawn mower for boys is non-toxic, non-BPA. Meet US toy standards. Safety test approved."
    })

    product6 = Product.create!({
      name: 'Amazon Basics Neoprene Coated Hexagon Workout Dumbbell Hand Weight',
      price: 21.99,
      description: "12 pound dumbbell (set of 2) for exercise and strength training",
      description2: "Neoprene coating in Black offers long lasting durability",
      description3: "Hexagon shaped ends prevent dumbbells from rolling away and offer stay-in-place storage",
      description4: "Available in multiple sizes to mix and match for specific workout needs and to expand on over time"
    })

    product7 = Product.create!({
      name: 'Sony OLED 65 inch BRAVIA XR A80L Series 4K Ultra HD TV: Smart Google TV with Dolby Vision HDR and Exclusive Gaming Features for The Playstation® 5 XR65A80L- 2023 Model,Black',
      price: 1698.05,
      description: "LIFELIKE OLED PICTURE– The intelligent and powerful Cognitive Processor XR delivers an OLED picture with wide dynamic contrast, detailed blacks, natural colors, and high peak brightness, replicating how we see the real world.",
      description2: "OLED CONTRAST AND COLOR– Pure black, lifelike brightness, and billions of accurate colors enhanced by XR OLED Contrast Pro and XR Triluminos Pro.",
      description3: "PREMIUM SMART TV – Get access to all your favorite streaming apps in one place with Google TV, and simply use your voice to search and ask questions with Google Assistant. Supports Apple AirPlay.",
      description4: "ENHANCED ENTERTAINMENT – Enjoy engaging and immersive cinematic content the way the creators intended, with support for Dolby Vision, IMAX Enhanced, Netflix Adaptive Calibrated Mode, and more."
    })

    product8 = Product.create!({
      name: 'Energizer AA Batteries Double A Max Alkaline Battery, 24 Count',
      price: 13.85,
      description: "24 pack of Energizer MAX AA Alkaline Batteries, Batteries AA Size",
      description2: "Energizer's longest-lasting MAX AA batteries provide dependable power - up to 50% longer lasting than EVEREADY GOLD in demanding devices",
      description3: "The power you depend on for your double A devices, from toys and flashlights to everyday items like remotes",
      description4: "These Energizer AA batteries hold power for up to 12 years in storage"
    })

    product9 = Product.create!({
      name: 'Mattel Games UNO Card Game for Family Night, Travel Game & Gift for Kids in a Collectible Storage Tin for 2-10 Players (Amazon Exclusive)',
      price: 10.99,
      description: "UNO is the classic family card game that's easy to learn and so much fun to play!",
      description2: "In a race to deplete your hand, match one of your cards with the current card shown on top of the deck by either color or number.",
      description3: "Strategize to defeat your competition with special action cards like Skips, Reverses, Draw Twos and color-changing Wild cards.",
      description4: "When you're down to one card, don't forget to shout 'UNO!'"
    })

    product10 = Product.create!({
      name: 'Bicycle Rider Back Playing Cards, Standard Index, Poker Cards, Premium Playing Cards, Red & Blue, 2 Count (Pack of 1)',
      price: 4.89,
      description: "STANDARD INDEX PLAYING CARDS: Enjoy the ideal balance of size and functionality with our Bicycle Rider Back Playing Cards. Perfect as poker cards, these standard index cards are adorned with the iconic Rider Back design",
      description2: "TRUSTED BICYCLE QUALITY: Experience the feel of perfection in every game with these high quality playing cards. Each card boasts an Air Cushion Finish, providing an easy handling and shuffling experience",
      description3: "VERSATILE GAMING: These cards open the door to countless games of skill and chance. From poker and blackjack to euchre, pinochle, rummy, and canasta. Unleash your inner gamer with this versatile deck of playing cards",
      description4: "DOUBLE THE FUN: Elevate your game night with a set of two decks of cards. Whether you're organizing a card night or simply want a backup deck, this deck of playing cards duo ensures you're always ready for the next shuffle and deal"
    })

    product11 = Product.create!({
      name: 'Pizza Peel 12 inch, Bamboo Pizza Board Wooden Pizza Paddle Spatula Oven Accessory for Baking Homemade Pizza, Wood Cutting Board for Cheese Bread Fruit Vegetables',
      price: 17.99,
      description: "【Exquisitely Made Bamboo Pizza Peel】This is a pretty pizza peel made of high-quality bamboo. Its wooden smooth surface helps prevent sticking of raw pizza dough. The exquisiteness production makes it an ideal kitchen utensil for cooking pizza or bread.",
      description2: '【12 Inch Wide & Easy-Grip Handle】This wooden pizza peel is 17.5” L, 12“ W, 0.47" thick and weighs about 1.6 lbs. It can hold pizzas up to 11". The handle is 4.5“ L for a comfortable grip, making it ideal for homemade pizza. Holes in the handle allow for hanging on the wall.',
      description3: "【Multi-purpose use】Making homemade pizza can be so much fun! This great wooden pizza serving board brings you a pleasant pizza making experience. In addition to being used as a pizza peel, this can also be used for serving or even as a cutting board for fruits, vegetables, bread and cheese.",
      description4: "【Easy Cleaning & Perfect Kitchen Decor】Since the surface of the pizza turning peel is polished to be smooth, it is also easy to clean. Such a wood pizza peel is so beautiful and has such a nice finish that it adds to the kitchen decor."
    })

    product12 = Product.create!({
      name: 'Elegance Stainless Steel Rectangular Tray, 22" x 15.5", Silver',
      price: 73.02,
      description: "High polished stainless steel",
      description2: "Multi function rectangular tray",
      description3: "Hand wash and dry recommended",
      description4: "Recessed platter with raised rim"
    })

    product13 = Product.create!({
      name: "Amazon Essentials Women's Slim-Fit Tank, Pack of 2",
      price: 19.99,
      description: "COTTON MODAL MICRO RIB: Super soft cotton modal micro rib jersey with added stretch offers all-day ease and comfort, while retaining its shape for the perfect slim fit. Fabric you want to live in year round.",
      description2: "ESSENTIAL RIB TANK: This versatile tank is a must-have wardrobe essential, perfect layered under your favorite hoodie or cardigan or wear on its own with a pair of jeans or linen shorts for easy, everyday style. The slim silhouette gives a flattering fitted look.",
      description3: "DETAILS: Features an open scoop neckline, thin tank straps, and double needle stitching for durability.",
      description4: "SLIM FIT: Close fit that hugs the body."
    })

    product14 = Product.create!({
      name: "FRACORA Women's PU Leather Tennis Shoes Low Top lace up Casual Shoes Comfortable Fashion Sneaker",
      price: 24.99,
      description: "【Easy to Wear】Womens low top casual shoes adds a back strap on the heel,It brings convenience to wearing shoes, because you can easily put on the fashion sneakers by pulling up the strap,Moreover, the strap can also make it easy for you to dry your shoes and save the laces to avoid soiling.",
      description2: "【Soft&Comfort】Womens white tennis shoes using soft insole and rubber outsole,the double softness of the sole brings ultimate comfort and soft wearing feeling, when you put on the fashion sneakers,you will not feel tired even after 24 hours walking.",
      description3: "【Best Gift for Women】:FRACORA Womens white fashion sneakers are always the wonderful ideal gift，such as back school gift,celebration gift, Valentine’s Day, Mother’s Day gift, Christmas gift, Graduation gift, Halloween gift, Thanksgiving Day’s gift etc.",
      description4: "【Service】: We privide for all our customers that giving unconditional return service.If you have any question, we will freely reply you within 6-12hrs."
    })

    product15 = Product.create!({
      name: 'Seater Sofa&Couch Modern Cloud Curved Sofa Comfy Boucle Couch, Luxury 3 Teddy Fabric Upholstered Leisure Deap Seat Sectional Sofá with 5 Decorative Throw Pillows for Living Room, 87.7", Beige-338',
      price: 999.99,
      description: "💓Sturdy 3-Seat Loveseat Sofa Couch💓Crafted with a strong and sturdy frame, our sofa offers reliable support and ensures its longevity. You can enjoy the comfort and peace of mind that comes with a well-built piece of furniture. Sofa dimension: 87.7''Wx35.4''Dx25.1H''. Weight Capacity: 220 lbs/seat.",
      description2: "💝Deep Seat Sofa Couch with Decorative Throw Pillows💝Enhance the aesthetics of your sofa with the five included decorative throw pillows. These allow you to personalize your space and create a cozy atmosphere. You can relax with your favourite book or a cup of coffee and the spacious backrest provides plenty of support. The beautifully curvilinear design is not only a great source of comfort, but also a seamless addition to your home's contemporary style.",
      description3: "💓Oversized Faux Lamb Wool Upholstery Living Room Sofa💓our minimalist leisure sofa features a luxurious lamb wool upholstery, providing a soft and plush feel. This material adds a touch of elegance and sophistication to your living room while offering a cozy and inviting seating experience.",
      description4: "💝Modular Sectional Sofa with Elegant Wooden Legs💝our luxury modular couch is supported by elegant and durable wooden legs, adding a touch of sophistication to its design. These legs not only provide stability but also complement various interior styles, making it a versatile addition to any decor."
    })

    product16 = Product.create!({
      name: 'HP DeskJet 2855e Wireless All-in-One Color Inkjet Printer, Scanner, Copier, Best-for-home, 3 months of ink included (588S5A)',
      price: 54.85,
      description: "FROM AMERICA'S MOST TRUSTED PRINTER BRAND – The DeskJet 2855e is perfect for homes printing to-do lists, letters, financial documents and recipes. Print speeds up to 5.5 ppm color, 7.5 ppm black.",
      description2: "KEY FEATURES – Color printing, copy, scan and a 60-sheet input tray",
      description3: "WIRELESS PRINTING – Stay connected with our most reliable Wi-Fi, which automatically detects and resolves connection issues",
      description4: "HP APP – Print, scan, copy, or fax right from your smartphone with the easiest-to-use print app"
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


  # productX = Product.create!({
  #   name: "",
  #   price: 179.99,
  #   description: "",
  #   description2: "",
  #   description3: "",
  #   description4: ""
  # })