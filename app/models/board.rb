class Board < ApplicationRecord
    validates :name, :user_id, :public, presence: true
    validates :public, inclusion: { in: [true, false] }

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id
    
    has_many :pinstoboards,
        class_name: :Pinstoboard,
        foreign_key: :board_id,
        primary_key: :id

    has_many :pins,
        through: :pinstoboards,
        source: :pin
end