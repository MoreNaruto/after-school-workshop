class Event < ActiveRecord::Base
    has_attached_file :image,
    :styles => {:medium => "300x300", :thumb => "200x200"},
    :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml"),
    :dropbox_options => {:path => proc { |style| "files/#{id}/#{image.original_filename}"} }
    validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
