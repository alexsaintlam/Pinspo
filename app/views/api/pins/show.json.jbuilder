json.set! @pin.id do 
    json.extract! @pin, :id, :title, :description, :organized, :user_id
end