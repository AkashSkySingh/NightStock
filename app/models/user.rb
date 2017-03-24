class User < ActiveRecord::Base
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :posts

  # For reference and review: https://medium.com/@jbmilgrom/active-record-many-to-many-self-join-table-e0992c27c1e#.e11si360k

  has_many :followers,
  through: :follower_follows,
  source: :follower

has_many :follower_follows,
  foreign_key: :followee_id,
  class_name: :Follow

has_many :followees,
  through: :followee_follows,
  source: :followee

has_many :followee_follows,
  foreign_key: :follower_id,
  class_name: :Follow

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
