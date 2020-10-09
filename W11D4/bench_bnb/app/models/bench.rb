class Bench < ApplicationRecord
   validates :lat, :lng, presence: true
   validates  :lat, uniqueness: { scope: :lng}
end
