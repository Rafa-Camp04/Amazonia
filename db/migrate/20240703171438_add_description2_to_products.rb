class AddDescription2ToProducts < ActiveRecord::Migration[7.1]
  def change
    add_column :products, :description2, :text
    add_column :products, :description3, :text
    add_column :products, :description4, :text
  end
end
