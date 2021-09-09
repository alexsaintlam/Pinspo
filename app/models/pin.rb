class Pin < ApplicationRecord
    validates :title, :organized, :user_id, presence: true
    validates :organized, inclusion: { in: [true, false] }

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id

    has_many :pinstoboards,
        class_name: :Pinstoboard,
        foreign_key: :pin_id,
        primary_key: :id
    
    has_many :boards,
        through: :pinstoboards,
        source: :board
        
end