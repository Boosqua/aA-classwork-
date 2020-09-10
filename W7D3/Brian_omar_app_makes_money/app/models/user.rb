# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require "byebug"
class User < ApplicationRecord
    
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    attr_reader :password
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end


    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= User.new_session_token
    end

    def reset_session_token!
        self.session_token = User.new_session_token
        self.save!
        self.session_token
    end

    private 

    def self.new_session_token
        SecureRandom::urlsafe_base64
    end

end
