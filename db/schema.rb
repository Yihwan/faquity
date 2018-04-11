# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180411230641) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string "symbol", null: false
    t.string "name", null: false
    t.string "description"
    t.string "ceo"
    t.integer "num_employees"
    t.integer "year_founded"
    t.string "headquarters"
    t.string "tags", array: true
    t.decimal "latest_price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fake_symbol"
    t.index ["symbol"], name: "index_assets_on_symbol", unique: true
  end

  create_table "fills", force: :cascade do |t|
    t.integer "asset_id", null: false
    t.integer "portfolio_id", null: false
    t.decimal "price", null: false
    t.integer "size", null: false
    t.string "side", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "portfolio_snapshots", force: :cascade do |t|
    t.integer "portfolio_id", null: false
    t.string "date", null: false
    t.decimal "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_portfolio_snapshots_on_portfolio_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.decimal "buying_power", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watches", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "asset_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_id", "user_id"], name: "index_watches_on_asset_id_and_user_id", unique: true
  end

end
