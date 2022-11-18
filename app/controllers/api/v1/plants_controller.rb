class Api::V1::PlantsController < ApiController
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
    params.require(:plant).permit(:scientific_name, :img, :family)
  end
end