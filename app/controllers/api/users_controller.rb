class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if !(@user.cover_photo_url)
      @user.cover_photo_url = "http://res.cloudinary.com/nightstock/image/upload/v1489787439/night-hd-wallpapers-26_dynjsd.jpg"
    end

    if !(@user.user_image_url)
      @user.user_image_url = "http://res.cloudinary.com/nightstock/image/upload/v1489787225/unknown-user_dc4ike.png"
    end

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
