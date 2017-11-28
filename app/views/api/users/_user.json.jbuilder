json.extract! user, :id, :username, :name, :location

json.profile_image asset_path(user.profile_image.url)