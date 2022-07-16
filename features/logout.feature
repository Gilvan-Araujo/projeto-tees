Feature: logout

    Scenario: logout
        Given I am logged in
        When I logout
        Then I should be logged out
