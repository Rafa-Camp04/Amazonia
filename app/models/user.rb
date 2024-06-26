# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    has_many :cart_items,
    primary_key: :id,
    foreign_key: :customer_id,
    class_name: :CartItem

    has_secure_password

    before_validation :ensure_session_token

    validates :email, 
                uniqueness: true, 
                length: { in: 3..100 }, 
                format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..40 }, allow_nil: true

    def self.find_by_credentials(email, password)
        
        user = User.find_by(email: email)

        if user && user.authenticate(password)
            user
        else
            nil 
        end

    end

    def reset_session_token!

        self.session_token = generate_unique_session_token()
        self.save!
        self.session_token
    end

    private

    def generate_unique_session_token
        while true
        token = SecureRandom.base64
        return token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

end
