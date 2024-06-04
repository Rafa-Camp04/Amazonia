json.product do
  json.extract! @product, :id, :name, :price, :description
  json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end