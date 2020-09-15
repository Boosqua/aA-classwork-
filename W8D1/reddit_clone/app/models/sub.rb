class Sub < ApplicationRecord

    validates :title, :description, :moderator, presence: true
    validates :title, uniqueness: true

    belongs_to :moderator,
    class_name: :User


    has_many :posts,
    foreign_key: :sub_id,
    class_name: :Post,
    dependent: :destroy
end
