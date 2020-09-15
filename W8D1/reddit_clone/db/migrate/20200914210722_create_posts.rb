class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false, index: {unique: true}
      t.string :url, null: false
      t.text :content, null: false
      t.integer :sub_id, null: false
      t.integer :author_id, null: false


      t.timestamps
    end
  end
end
