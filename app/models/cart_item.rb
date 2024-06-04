# == Schema Information
#
# Table name: cart_items
#
#  id          :bigint           not null, primary key
#  customer_id :bigint           not null
#  product_id  :bigint           not null
#  quantity    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class CartItem < ApplicationRecord

    validates :customer_id, :product_id, :quantity, presence: true

    belongs_to :customer,
    primary_key: :id,
    foreign_key: :customer_id,
    class_name: :User

    belongs_to :product

end
