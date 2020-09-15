class Post < ApplicationRecord
    validates :title, presence: true

    belongs_to :sub,
    class_name: :Sub

    belongs_to :author,
    class_name: :User


end
