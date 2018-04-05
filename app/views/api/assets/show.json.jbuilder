json.asset do
  json.extract! @asset,
                :id,
                :symbol,
                :name,
                :description,
                :ceo,
                :num_employees,
                :year_founded,
                :headquarters,
                :latest_price
end
