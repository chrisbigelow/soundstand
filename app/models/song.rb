class Song < ApplicationRecord

  validates :title, :user_id, presence: true
  validates_attachment :song_image,
    content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] },
    size: { less_than: 5.megabytes }
  validates_attachment :song, presence: true,
    # attachment audio type
    content_type: { content_type: ['audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio'] }, 
    size: { less_than: 100.megabytes } 

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Comment

  has_attached_file :song_image, styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '300x300>'
  }

  has_attached_file :song
  
end
