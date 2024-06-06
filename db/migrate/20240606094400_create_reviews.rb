class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.references :product, foreign_key: {to_table: :products}
      t.references :user, foreign_key: {to_table: :users}

      t.timestamps
    end
    add_index :reviews, [:title, :rating]
  end
end
