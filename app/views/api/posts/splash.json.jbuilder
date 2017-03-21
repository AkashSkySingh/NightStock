json.array! @posts do |post|
  json.extract! post, :id, :image_url
  json.username post.user.username
  json.user_image_url post.user.user_image_url
end
