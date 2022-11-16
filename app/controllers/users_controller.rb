class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @user_plants = @user.plants
  end
end