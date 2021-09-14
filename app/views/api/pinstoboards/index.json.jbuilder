if @pinstoboards
    @pinstoboards.each do |pinstoboard|
        json.set! pinstoboard.id do 
            json.extract! pinstoboard, :id, :pin_id, :board_id
        end
    end
end