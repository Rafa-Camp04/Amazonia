@products.each do |product|
    json.set! product.id do 
        json.id product.id
        json.name product.name
        json.price product.price
        json.description product.description
        json.description2 product.description2
        json.description3 product.description3
        json.description4 product.description4
        json.photoUrl product.photo.attached? ? product.photo.url : nil
    end
end