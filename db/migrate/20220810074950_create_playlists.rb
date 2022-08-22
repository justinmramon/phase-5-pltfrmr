class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
