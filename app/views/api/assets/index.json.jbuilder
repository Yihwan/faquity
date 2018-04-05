@assets.each do |asset|
  json.assets do
    json.set! asset.id do
      json.extract! asset,
                    :id,
                    :symbol,
                    :name,
                    :latest_price
    end
  end
end
