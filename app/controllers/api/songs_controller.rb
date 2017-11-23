class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  def update
    @song = Song.find_by(params[:id])
    if @song && @song.update_attributes(song_params)
      render :show
    elseif !@song
      render json: ["Coudn't locate track"], status 400
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  def show
    @song = Song.find_by(params[:id])
  end

  def index
    @songs = Song.all
  end

  def destroy
    @song = Song.find_by(params[:id])
    if @song
      @song.destroy
      render :index
    else
      render json: ["Coudn't locate track"]
    end
  end

private

def song_params
  params.require(:song).permit(:title, :description)
end


end
