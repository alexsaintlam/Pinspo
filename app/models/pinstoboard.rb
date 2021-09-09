class Pinstoboard < ApplicationRecord
    validates :pin_id, :board_id, presence: true
    validates :pin_id, uniqueness: {scope: :board_id}

    belongs_to :pin,
        class_name: :Pin,
        foreign_key: :pin_id,
        primary_key: :id

    belongs_to :board,
        class_name: :Board,
        foreign_key: :board_id,
        primary_key: :id
end