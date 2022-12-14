class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name , null: false
      t.string :img
      t.string :family
      t.string :common_name 
      t.belongs_to :user, null: false
      t.belongs_to :category, null: false

      t.timestamps
    end
  end
end
