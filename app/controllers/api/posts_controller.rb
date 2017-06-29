class Api::PostsController < ApplicationController
  def index
    # if signed_in?
    @posts = Post.all
    @posts = @posts.sort { |x, y| y.id <=> x.id }
    render :index
  end

# Redo the initial splash page to reflect view from #recent json extension so index views all posts originally
  def recent
    @posts = []
    current_user.followees.each { |user| @posts += user.posts }
    @posts += current_user.posts
    @posts = @posts.sort { |x, y| y.id <=> x.id }
    render :recent
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    if @post.save!
      render :show
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
      render :index
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :location, :image_url, :user_id)
  end
end
