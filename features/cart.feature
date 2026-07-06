Feature: Shopping Cart Management
  As a customer
  I want to manage my shopping cart
  So that I can review my purchase before checkout

  Background:
    Given the user is on the OpenCart home page

  @regression @cart
  Scenario: Add Canon EOS 5D to cart with required option
    When the user searches for "Canon EOS 5D"
    And selects the product "Canon EOS 5D"
    And selects the required option "Red"
    And adds the product to the shopping cart
    Then the cart should contain "Canon EOS 5D"
