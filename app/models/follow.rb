class Follow < ApplicationRecord
    validates :follower_id, :followed_id, presence: true
    validates :follower_id, uniqueness: {scope: :followed_id}
    
end