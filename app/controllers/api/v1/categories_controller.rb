class Api::V1::CategoriesController < ApiController
  def show
    render json: Category.all
  end
end