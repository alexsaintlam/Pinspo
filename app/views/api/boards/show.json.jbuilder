
    json.extract! @board, :id, :name, :description, :public, :user_id
        json.pins do
            @board.pins.each do |pin|
                json.set! pin.id do
                    json.extract! pin, :id, :title, :description
                end
            end
        end
