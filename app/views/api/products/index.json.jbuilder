@products.each do |product|
    json.set! product.id do 
        json.id product.id
        json.name product.name
        json.price product.price
        json.description product.description
        json.photoUrl product.photo.attached? ? product.photo.url : nil
    end
end