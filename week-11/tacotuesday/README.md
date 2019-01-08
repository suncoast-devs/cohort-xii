# README

- App for tracking taco companies and their various locations

* Taco Company

  - Address (corporate) : string
  - Name : string
  - Year founded : integer
  - Logo (active storage attachment)

* Taco Company Locations
  - Address : string
  - Hours : text
  - Picture of the building (active storage attachment)
  - Rating (1-5) stars : integer
  - company belongs_to

Taco Company Location --- belongs to --- a specific taco company
