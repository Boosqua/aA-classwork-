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
require 'rails_helper'

RSpec.describe User, type: :model do
#test for:
#validations
#associations
#public methods

  let(:incomplete_user) { User.create!( username: "", password: "" ) }
  subject!(:user) { User.create!( username: "brian", password: "password123" ) }
  describe [" stuff "] do
    it { should validate_presence_of(:username)}
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe "User::find_by_credentials" do
    it "returns the user when provided the correct username and password" do
      expect(User.find_by_credentials(user.username, 'password123')).to eq(user)
      expect(User.find_by_credentials("boosqua", "929292929")).to be(nil)
    end
  end

  describe "User#is_password?(password)" do
    it "return true if password given equals users password" do
      expect(user.is_password?("password123")).to eq(true)
      expect(user.is_password?("password_bad!")).to eq(false)
    end
  end

  describe "User#ensure_session_token" do
    it "should give a session token if not has been assigned to the user :D" do
      expect(FactoryBot.build(:user).session_token).not_to be_nil
    end
  end

  describe"User#reset_session_token!" do
    it "should change the users current token" do
      # debugger
      current_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to eq(current_session_token)
    end
    it "should return the new session token" do
      expect(user.reset_session_token!).to be(user.session_token)
    end
  end
end
