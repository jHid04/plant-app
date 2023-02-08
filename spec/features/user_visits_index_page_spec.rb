require 'rails_helper'

feature 'user visits index page' do 
  let!(:user_1) {User.create(first_name: "John", last_name: "Smith", username: "jsmith", email: "jsmith@test.com", password: "123456", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
  let!(:category_1) {Category.create(title: "Foliage Plant")}
  let!(:plant_1) {Plant.create(name: "Spider Plant", img: "IMG_2847.JPG", family: "Asparagaceae", common_name: nil, user_id: 1,category_id: 1)}
  scenario "user sees other user's plant sumbissions" do 
    
    visit plants_path
    
    expect(page).to have_content(Plant.first.name)
    expect(page).to have_content(Plant.first.family)
    expect(page).to have_content(Plant.first.user.username)
  end
end