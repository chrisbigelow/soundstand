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
    @song = Chirp.find_by(params[:id])
    if @song && @song.update_attributes(song_params)
      render :show
    else
    end
  end



private

def song_params
  params.require(:song).permit(:title, :description)
end


end
