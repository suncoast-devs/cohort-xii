require 'test_helper'

class Api::CarsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cars_index_url
    assert_response :success
  end

end
