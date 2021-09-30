class Changeboolean < ActiveRecord::Migration[6.1]
  def change
    change_column_null :boards, :public, true
  end
end
