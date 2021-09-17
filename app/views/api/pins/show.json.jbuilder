json.extract! @pin, :id, :title, :description, :organized, :user_id
json.photoUrl url_for(@pin.photo) if @pin.photo.attached?