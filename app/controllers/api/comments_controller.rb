class Api::CommentsController < ApplicationController
  
  before_action :require_login
  
    def create
      @comment = Comment.new(comment_params)
      @comment.user_id = current_user.id
      @comment.song_id = params[:song_id]
      if @comment.save 
        render :show
      else
        render json: {errors: @comment.errors.full_messages}, status: 401
      end
    end

    def index
      @comments = Comment.where(song_id: params[:song_id])
    end
  
  
    def destroy
      @comment = Comment.find_by(id: params[:id])
      if @comment && @comment.user_id == current_user.id
        destroyed_id = @comment.id
        @comment.destroy
        render json: {id: destroyed_id}
      else
        render json: ["Couldn't locate track"]
      end
    end

  
  private
  
  def comment_params
    params.require(:comment).permit(:body, :username)
  end
end
