class Api::V1::UsersController < ApiController
  def show
    render json: User.find(params[:id]), include: [:plants => {:include => :category}]
  end
end