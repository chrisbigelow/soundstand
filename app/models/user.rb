class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  validates :profile_image,
    attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
    attachment_size: { less_than: 5.megabytes }

  after_initialize :ensure_session_token

  has_many :songs,
   primary_key: :id,
   foreign_key: :user_id,
   class_name: :Song

  has_attached_file :profile_image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  def self.find_by_credentials(username,password) 
    @user = User.find_by(username: username)
    return nil unless @user
    if @user.is_password?(password)
      return @user
    end
    return nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
