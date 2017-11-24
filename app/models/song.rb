class Song < ApplicationRecord

  validates :title, :user_id, presence: true
  validates :song_image,
    attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
    attachment_size: { less_than: 5.megabytes }
  validates :song,
    # attachment audio type
    attachment_content_type: { content_type: /.*/ }, 
    attachment_size: { less_than: 100.megabytes } 

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_attached_file :song_image, styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '300x300>'
  }

  has_attached_file :song
  
end
