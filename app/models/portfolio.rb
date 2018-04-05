# == Schema Information
#
# Table name: portfolios
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Portfolio < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  has_many :fills,
    class_name: 'Fill',
    primary_key: :id,
    foreign_key: :portfolio_id

  has_many :assets,
    through: :fills,
    source: :asset

  # iterate through fills and do some math
  # def

  #
end
