if @pins
    @pins.each do |pin|
        json.set! pin.id do 
            json.extract! pin, :id, :title, :description, :organized, :user_id
        end
    end
end

