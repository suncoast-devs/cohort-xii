json.extract! make, :id, :company_name
json.model_count make.models.count
json.models make.models,
            partial: 'models/model',
            as: :model