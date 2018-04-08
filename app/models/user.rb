# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  buying_power    :decimal(, )      not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_create :create_portfolio
  before_validation :ensure_session_token

  validates :first_name, :last_name, :email, :buying_power,
            :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 10, allow_nil: true }

  attr_reader :password

  has_one :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :user_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def create_portfolio
    portfolio = Portfolio.create!(user_id: self.id)
  end

  def update_buying_power!(change)
    self.buying_power += change
    self.save!
  end

end
