json.extract! post, :title, :description, :location, :image_url
json.user post.user do |user|
  json extract! user, :id, :name, :user_image_url
end
