require "test_helper"

Capybara.register_driver(:headless_chrome) do |app|
  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    chromeOptions: { args: %w[headless window-size=1600x1080] },
  )

  Capybara::Selenium::Driver.new(
    app,
    browser: :chrome,
    desired_capabilities: capabilities,
  )
end

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  #driven_by :selenium, using: :chrome, screen_size: [1600, 1200]
  driven_by :headless_chrome
end
