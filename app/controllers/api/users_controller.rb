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
    @user.name = "add name"
    @user.location = "add location"
    @user.profile_image = "http://res.cloudinary.com/dmzulpcul/image/upload/v1512079972/profile-placeholder_gvcpsn.jpg"
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(username: params[:id])
    params[:user][:location] = @user.location if params[:user][:location] == "undefined"
    params[:user][:name] = @user.name if params[:user][:name] == "undefined"
    params[:user][:profile_image] = @user.profile_image if params[:user][:profile_image] == "undefined"
    if @user && @user.update_attributes(params.require(:user).permit(:username,:name,:location,:profile_image))
      render :show
    elsif !@user
      render json: ["Couldn't locate user"], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
