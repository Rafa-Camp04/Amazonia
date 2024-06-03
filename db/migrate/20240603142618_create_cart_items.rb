class CreateCartItems < ActiveRecord::Migration[7.1]
  def change
    create_table :cart_items do |t|
      t.references :customer, null: false, foreign_key: {to_table: :users}
      t.references :product, null: false, foreign_key: {to_table: :products}
      t.integer :quantity, null: false

      t.timestamps
    end
  end
end
