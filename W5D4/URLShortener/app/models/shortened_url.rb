# == Schema Information
#
# Table name: shortened_urls
#
#  id            :bigint           not null, primary key
#  provided_url  :string           not null
#  shortened_url :string
#  user_id       :integer          not null
#
class ShortenedUrl < ApplicationRecord
  
end
