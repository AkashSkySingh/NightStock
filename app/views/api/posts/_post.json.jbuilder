json.extract! post, :id, :title, :description, :location, :image_url
json.user do
  json.user_id post.user.id
  json.username post.user.username
  json.user_image_url post.user.user_image_url
end
