@assets.each do |asset|
  json.set! asset.id do
    json.extract! asset,
                  :id,
                  :symbol,
                  :name,
                  :latest_price,
                  :tags,
                  :fake_symbol
  end
end
