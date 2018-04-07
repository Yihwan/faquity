require 'test_helper'

class FillsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fills_index_url
    assert_response :success
  end

  test "should get new" do
    get fills_new_url
    assert_response :success
  end

  test "should get create" do
    get fills_create_url
    assert_response :success
  end

  test "should get show" do
    get fills_show_url
    assert_response :success
  end

end
