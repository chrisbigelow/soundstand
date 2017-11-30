class Comment < ApplicationRecord

  validates :body, :user_id, :song_id, :username, presence: true

  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song

end
