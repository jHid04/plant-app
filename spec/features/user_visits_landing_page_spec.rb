require 'rails_helper'

feature 'User sees greeting in landing page' do 

  scenario 'user visits landing page' do

    visit root_path

    expect(page).to have_text("Welcome to PlantApp")
    expect(page).to have_text("Get connected with other plant lovers and create posts of your own!")
  end

  scenario 'users sees langing page image' do 

    visit root_path
    
    expect(page).to have_css("img[src*='assets/plant-family-b1539889eddca14cbf11e5a05189eb4896476e1aa0f5e5d7fe4b9b513a34ecce.JPG']")
  end
end