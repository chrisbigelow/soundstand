class Api::SongsController < ApplicationController

  before_action :require_login

  def create
    @song = Song.new(song_params)
    @song.user_id = current_user.id
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  def update
    @song = Song.find_by(id: params[:id])
    if @song && @song.update_attributes(song_params)
      render :show
    elsif !@song
      render json: ["Coudn't locate track"], status: 400
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  def show
    @song = Song.find_by(id: params[:id])
    render json: ["Couldn't Locate Track"] unless @song
  end

  def index
    if params[:user_id]
      @songs = Song.where(user_id: params[:user_id])
    else
      @songs = Song.all
    end
  end

  def destroy
    @song = Song.find_by(id: params[:id])
    if @song
      @song.destroy
      render :show
    else
      render json: ["Couldn't locate track"]
    end
  end

private

def song_params
  params.require(:song).permit(:title, :description, :song, :song_image)
end


end
