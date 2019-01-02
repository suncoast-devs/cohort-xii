json.extract! make, :id, :company_name
json.url make_url(make, format: :json)
json.capitalized_name make.company_name.upcase.gsub(' ', '')