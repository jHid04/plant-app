class Api::V1::PlantsController < ApiController
  before_action :authenticate_user!, only: [:create]
  skip_before_action :verify_authenticity_token

  def create
    plant = Plant.new(plant_params)
    plant.category = Category.where(title: params[:category])[0]
    plant.user = current_user
    if plant.save
      render json: plant
    else 
      render json: {errors: plant.errors.full_messages}, status: :bad_request
    end
  end

  private 

  def plant_params 
    params.permit(:name, :img, :family)
  end
end