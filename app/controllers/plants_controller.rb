class PlantsController < ApplicationController
  def index
    @plants = Plant.all
  end

  def show 
    @plant = Plant.find(params[:id])
    binding.pry
  end
end