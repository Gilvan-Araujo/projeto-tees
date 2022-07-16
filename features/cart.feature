Feature: cart
    
    In order to buy products
    As a customer
    I want to add products to cart

    Scenario Outline: the customer wants to add products to cart
        Given I am on the home page
        When I click on the product
        Then The badge on the cart icon should increase by 1

    Scenario Outline: the customer wants to remove products from cart
        Given I am on the home page
        When I click on the remove button beneath the product
        Then The badge on the cart icon should decrease by one