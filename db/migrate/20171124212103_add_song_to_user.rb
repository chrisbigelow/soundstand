class AddSongToUser < ActiveRecord::Migration[5.1]
  def change
    add_attachment :songs, :song
  end
end
