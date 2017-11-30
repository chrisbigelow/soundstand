class AddSongIdColumnToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :song_id, :integer
  end
end
