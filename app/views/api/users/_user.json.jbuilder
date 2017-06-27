json.extract! user, :id, :username, :description, :user_image_url, :cover_photo_url

json.posts user.posts do |post|
  json.extract! post, :image_url, :title, :description, :location, :id
end

json.followees user.followees.map {|followee| followee.id}

json.followers user.followers.map {|follower| follower.id}
