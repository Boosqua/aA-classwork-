class CreateShortenedUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :shortened_urls do |t|
      t.string :provided_url, null: false
      t.string :shortened_url, null: true
      t.integer :user_id, null: false

      t.timestamp
    end

    add_index :shortened_urls, :user_id
    add_index :shortened_urls, :provided_url
  end
end
