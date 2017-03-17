json.array! @posts do |post|
  json.partial! `api/posts/#{@post.id}`, post: @post
end
