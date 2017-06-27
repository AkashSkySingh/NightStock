class Post < ActiveRecord::Base
  validates :user, :title, :image_url, :location, presence: true

  belongs_to :user
end
