json.set! @cart_item.id do 
    json.id @cart_item.id
    json.customer_id @cart_item.customer_id
    json.product_id @cart_item.product_id
    json.quantity @cart_item.quantity
end