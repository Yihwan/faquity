require 'test_helper'

class AssetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get assets_index_url
    assert_response :success
  end

  test "should get show" do
    get assets_show_url
    assert_response :success
  end

end
