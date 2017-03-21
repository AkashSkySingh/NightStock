class Api::PostsController < ApplicationController
  def index
    @posts = current_user.posts 
    # @posts = current_user.posts
    # @posts = Post.all
    # @posts = Post.all.select {|post| [1, 7, 8, 10, 11, 12, 14, 16, 17, 20].include?(post.id)}
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
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
