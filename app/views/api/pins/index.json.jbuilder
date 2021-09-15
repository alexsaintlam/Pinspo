if @pins
    @pins.each do |pin|
        json.set! pin.id do 
            json.extract! pin, :id, :title, :description, :organized, :user_id
            json.photoUrl url_for(pin.photo) if pin.photo.attached?
        end
    end
end

