class AddProfileImageToUsers < ActiveRecord::Migration[5.1]
  def change
    add_attachment :users, :profile_image
  end
end
