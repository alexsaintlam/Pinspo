if @users 
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :username, :email, :age
            json.photoUrl url_for(user.photo) if user.photo.attached?
        end
    end
end

