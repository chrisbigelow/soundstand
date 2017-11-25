class AddSongImageToUser < ActiveRecord::Migration[5.1]
  def change
    add_attachment :songs, :song_image
  end
end
