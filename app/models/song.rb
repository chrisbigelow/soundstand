class Song < ApplicationRecord

  validates :title, :user_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    

end
