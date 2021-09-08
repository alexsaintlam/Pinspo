class Pin < ApplicationRecord
    validates :title, :organized, :user_id, presence: true
    validates :organized, inclusion: { in: [true, false] }

    belongs_to :user
end