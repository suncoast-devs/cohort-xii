require 'open-uri'

namespace :sampledata do
  desc "TODO"
  task create: :environment do
    # Here we can run any ruby code we want
    sdg = Company.create(name: "SDG Tacos with random", address: "2220 Central Ave, St. Petersburg, FL, 33712", year_founded: 2017)
    location = sdg.locations.create(address: "2220 Central Ave, St. Petersburg, FL, 33712", hours: "24 Hours", rating: 5)

    # Manually uploading an image
    location.image.attach(io: open("https://placem.at/people?random=1"),
                          filename: Faker::Name.first_name + ".png")
  end

end
