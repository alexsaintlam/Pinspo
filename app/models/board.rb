class Board < ApplicationRecord
    validates :name, :user_id, :public, presence: true
    validates :public, inclusion: { in: [true, false] }

    belongs_to :user
end