class JoinsPinBoard < ActiveRecord::Migration[6.1]
  def change
    create_table :pinstoboards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.timestamps
    end

    add_index :pinstoboards, :pin_id
    add_index :pinstoboards, [:pin_id, :board_id], unique: true
    add_index :pinstoboards, :board_id
  end
end
