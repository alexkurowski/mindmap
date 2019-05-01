class CreateDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :documents do |t|
      t.string :uid
      t.string :title
      t.text :body
      t.references :board

      t.timestamps
    end

    add_index :documents, :uid, unique: true
  end
end
