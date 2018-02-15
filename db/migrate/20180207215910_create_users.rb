class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false # requires any user to have an email; otherwise an error is sent back
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :email, unique: true #can't use same email for 2 accounts
    add_index :users, :password_digest
    #indices speed up accessing these datafields from the database table
  end
end
