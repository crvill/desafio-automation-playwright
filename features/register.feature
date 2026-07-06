Feature: User Registration
  As a new customer
  I want to create an account
  So that I can access member features

  Background:
    Given the user is on the registration page

  @smoke @register
  Scenario: Register a new customer successfully
    When the user enters valid personal information
    And provides a unique email address
    And enters a valid password
    And accepts the Privacy Policy
    And submits the registration form
    Then the account should be created successfully
    And the user should be redirected to the My Account page
