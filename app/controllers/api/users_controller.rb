class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if !(@user.cover_photo_url)
      @user.cover_photo_url = "http://res.cloudinary.com/nightstock/image/upload/s--JlV88ebH--/v1490056565/Desktop-download-california-wallpapers-HD_ddmmy2.jpg"
    end

    if !(@user.user_image_url)
      @user.user_image_url = "http://res.cloudinary.com/nightstock/image/upload/s--OY9oInfN--/v1490065061/3331467084_13b583b888_b_z2u2rx.jpg"
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
