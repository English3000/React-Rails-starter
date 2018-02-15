require 'rails_helper'

feature 'User auth.', js: true do
  before (:each) do
    visit('/')
  end

  scenario 'default page: Home' do
    expect(page).to have_content('Home Page')
  end

  #not client-side rendering... (must have to do w/ config. by react-rails)

  # probably irrelevant
  #Loading fails for
  # <%= javascript_include_tag 'application' %>
  # <%= javascript_pack_tag    'application' %>

  feature 'AuthForm' do
    scenario 'handles invalid Sign Up' do
      click_button 'Sign Up'
      expect(page).to have_content 'invalid'
    end

    scenario 'handles invalid Sign In' do
      click_button 'Sign In'
      expect(page).to have_content 'Invalid'
    end
  end
end
