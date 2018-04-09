# == Schema Information
#
# Table name: watches
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  asset_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watch < ApplicationRecord

  validates :user_id, :asset_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :asset,
    class_name: 'Asset',
    primary_key: :id,
    foreign_key: :asset_id

end
