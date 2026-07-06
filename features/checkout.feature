Feature: Guest Checkout
  As a customer
  I want to purchase Canon EOS 5D as a guest
  So that I can complete a purchase without creating an account

  Background:
    Given the user is on the OpenCart home page

  @smoke @checkout
  Scenario: Successfully purchase Canon EOS 5D as a guest
    When the user searches for "Canon EOS 5D"
    And selects the product "Canon EOS 5D"
    And selects the required option "Red"
    And adds the product to the shopping cart
    And proceeds to checkout
    And chooses the Guest Checkout option
    And completes the billing details
    And selects a shipping method
    And accepts the Terms and Conditions
    And confirms the order
    Then the order should be placed successfully
    And the user should see the order confirmation page
