@cart_items.each do |product|
    json.set! product.id do 
        json.id product.id
        json.name product.name
        json.price product.price
        json.description product.description
    end
end