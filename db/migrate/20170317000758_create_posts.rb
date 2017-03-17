class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false
      t.string :location, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end
    add_index :posts, :user_id
  end
end
