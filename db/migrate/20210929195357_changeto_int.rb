class ChangetoInt < ActiveRecord::Migration[6.1]
  def change
      change_column :pinstoboards, :board_id, :integer
      change_column :pinstoboards, :unorganized_id, :integer
  end
end
