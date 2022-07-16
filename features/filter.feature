Feature: filter

    In order to view items in certain orders
    As a user
    I want to filter items in different ways

    Scenario Outline: filter items alphabetically
        Given I am on the home page
        When I click on the filter icon
        And I select "Name (Z to A)"
        Then I should see the items in reverse alphabetical order

    Scenario Outline: filter items by price
        Given I am on the home page
        When I click on the filter icon
        And I select "Price (low to high)"
        Then I should see the items ordered by price