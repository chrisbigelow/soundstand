class Api::CommentsController < ApplicationController
  
  # before_action :require_login
  
    def create
      @comment = Comment.new(comment_params)
      if @comment.save 
        # render 'api/songs/show'
      else
        render json: @comment.errors.full_messages, status: 401
      end
    end
  
  
    def destroy
      @comment = Comment.find_by(id: params[:id])
      if @comment
        @comment.destroy
        # render action: "index"
      else
        render json: ["Couldn't locate track"]
      end
    end
  
  private
  
  def comment_params
    params.require(:comment).permit(:body, :song_id, :user_id, :username)
  end
end
