class Addcolumnptb < ActiveRecord::Migration[6.1]
  def change
    add_column :pinstoboards, :unorganized_id, :decimal, null: true
  end
end
