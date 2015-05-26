class Event < ActiveRecord::Base
    has_attached_file :image,
    :styles => {:medium => "300x300", :thumb => "100x100"},
    :storage => :dropbox,
    :dropbox_credentials => Rails.root.join("config/dropbox.yml"),
    :dropbox_options => {:path => proc { |style| "images/#{id}_#{image.original_filename}"} },
    :dropbox_visibility => 'public'
    validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
