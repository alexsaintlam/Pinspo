class DuplicatePhotoFetcher
    def initialize(pin)
        @pin = pin
    end

    def fetch
        ActiveStorageBlob.where(checksum: @pin.photo.blob.checksum);
    end
end