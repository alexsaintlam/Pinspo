class Boards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.boolean :public, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :boards, :user_id
  end
end
