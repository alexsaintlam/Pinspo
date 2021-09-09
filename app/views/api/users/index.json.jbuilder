
if @users 
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :username, :email, :age
        end
    end
end

