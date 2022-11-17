class Api::V1::UsersController < ApiController
  def show
    render json: User.find(params[:id]), include: ['plants']
  end
end