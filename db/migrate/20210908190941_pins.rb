class Pins < ActiveRecord::Migration[6.1]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description
      t.boolean :organized, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :pins, :user_id
  end
end
