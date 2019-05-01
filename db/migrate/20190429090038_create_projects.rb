class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :uid
      t.string :title
      t.string :description
      t.references :user

      t.timestamps
    end

    add_index :projects, :uid, unique: true
  end
end
