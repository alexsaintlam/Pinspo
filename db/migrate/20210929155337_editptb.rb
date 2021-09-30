class Editptb < ActiveRecord::Migration[6.1]
  def change
    change_column_null :pinstoboards, :board_id, true
  end
end
