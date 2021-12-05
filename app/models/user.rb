class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :age, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    # validate :is_valid_email

    after_initialize :ensure_session_token

    has_many :pins,
        class_name: :Pin,
        foreign_key: :user_id,
        primary_key: :id
    
    has_many :boards,
        class_name: :Board,
        foreign_key: :user_id,
        primary_key: :id

    has_one_attached :photo

    # def is_valid_email
    #     parsed_email = [];
    #     start = 0;

    #     email.each_char.each.with_index do |char, index|
    #         if char == '@' || char == '.' || index == email.length - 1
    #             parsed_email.push(email[start..index])
    #             start = index
    #         end
    #     end

    #     if parsed_email.length != 3 || parsed_email[-1] != '.com'
    #         errors.add(:email, "is not valid")
    #     end
    # end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
        pass_obj.is_password?(password)
    end

    def self.find_by_credentials(username, password)
        username = User.find_by(username: username)
        if username && username.is_password?(password)
            username
        else
            nil
        end
    end
end
