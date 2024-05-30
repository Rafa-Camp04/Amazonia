json.product do
  json.extract! @product, :id, :name, :price, :description, :created_at, :updated_at
end