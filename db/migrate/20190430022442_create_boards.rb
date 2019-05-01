class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.string :uid
      t.string :title
      t.string :description
      t.references :project

      t.timestamps
    end

    add_index :boards, :uid, unique: true
  end
end
