class Post < ActiveRecord::Base
  validates :user, :title, :image_url, :location, null: false

  belongs_to :user
end
