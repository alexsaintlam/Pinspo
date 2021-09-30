class Changeptbdecimal < ActiveRecord::Migration[6.1]
  def change
    change_column :pinstoboards, :board_id, :decimal
  end
end
