json.extract! song, :id, :title, :description, :user_id

json.song_image asset_path(song.song_image.url)
json.song_file asset_path(song.song.url)

json.artist song.user.username
