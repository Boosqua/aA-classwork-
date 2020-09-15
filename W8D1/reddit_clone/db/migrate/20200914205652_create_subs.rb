class CreateSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :subs do |t|
      t.string :title, null: false, index: { unique: true }
      t.text :description, null: false
      t.integer :moderator_id, null: false, index: { unique: true }
      
      t.timestamps
    end
  end
end
