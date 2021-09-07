json.set! @board.id do 
    json.extract! @board, :id, :name, :description, :public, :user_id
end