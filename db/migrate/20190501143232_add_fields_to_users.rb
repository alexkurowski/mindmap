class AddFieldsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :last_project, :string
    add_column :users, :last_board, :string
    add_column :users, :last_document, :string
  end
end
