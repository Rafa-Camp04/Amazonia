json.product do
  json.extract! @product, :id, :name, :price, :description, :description2, :description3, :description4
  json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end