class Api::UsersController < ApplicationController


  def show
    @user = User.find_by(username: params[:id])
    #.include(:songs)
    if @user
      render 'api/users/show_profile'
    else
      render json: ["User doesn't exist"], status: 404
    end
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
