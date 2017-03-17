class Api::PostsController < ApplicationController
  def index
    @posts = Post
  end

  def create
    @post = Post.find(params[:id])

    if @post.save
      render "api/posts/#{@post.id}"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params)

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :location, :image_url, :user_id)
  end
end
