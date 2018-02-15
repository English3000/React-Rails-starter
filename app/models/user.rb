class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates_format_of :email, with: /^[a-zA-Z]\w*@\w+\.\w{2,}$/, multiline: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  after_initialize :ensure_token
  def ensure_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save
    self.session_token
  end

  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_match?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.password_match?(password) ? user : nil
  end
end
