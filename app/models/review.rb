# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  rating     :integer          not null
#  product_id :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

    validates :title, :body, :rating, presence: true

    belongs_to :user

    belongs_to :product

end
