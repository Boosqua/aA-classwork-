# == Schema Information
#
# Table name: users
#
#  id    :bigint           not null, primary key
#  email :string           not null
#
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validate :check_email

  def check_email
    unless email.chars.one?('@') 
      errors[:email] << "bad email bozo"
    end
  end
end
