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
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    attr_reader :password
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token

    

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    #SecureRandom::urlsafe_base64
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by email: email
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    private

    def self.generate_session_token 
        SecureRandom::urlsafe_base64
    end

end
