class Pinstoboard < ApplicationRecord
    validates :pin_id, presence: true

    belongs_to :pin,
        class_name: :Pin,
        foreign_key: :pin_id,
        primary_key: :id

    belongs_to :board, optional: true,
        class_name: :Board,
        foreign_key: :board_id,
        primary_key: :id
end