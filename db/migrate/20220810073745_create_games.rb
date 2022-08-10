class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :developer
      t.date :release_date
      t.string :synopsis
      t.integer :playtime
      t.string :cover

      t.timestamps
    end
  end
end
