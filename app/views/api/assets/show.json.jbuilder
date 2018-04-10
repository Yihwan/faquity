json.extract! @asset,
              :id,
              :symbol,
              :name,
              :description,
              :ceo,
              :num_employees,
              :year_founded,
              :headquarters,
              :tags,
              :latest_price,
              :fake_symbol

json.watched_by_current_user !!@asset.watches.find_by(user_id: current_user.id)
