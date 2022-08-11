class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.integer :metacritic
      t.string :platform
      t.integer :playtime
      t.date :released
      t.string :esrb_rating
      t.string :image

      t.timestamps
    end
  end
end
