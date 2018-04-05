# == Schema Information
#
# Table name: fills
#
#  id           :integer          not null, primary key
#  asset_id     :integer          not null
#  portfolio_id :integer          not null
#  price        :decimal(, )      not null
#  size         :integer          not null
#  side         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Fill < ApplicationRecord
  validates :asset_id, :portfolio_id, :price, :size,
            :side, presence: true

  belongs_to :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :portfolio_id

  belongs_to :asset,
    class_name: 'Asset',
    primary_key: :id,
    foreign_key: :asset_id

end
