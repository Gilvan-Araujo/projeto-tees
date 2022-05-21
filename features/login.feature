Feature: login

    In order to get access to the application
    As a standar user
    I want to be able to login

    Scenario Outline: the user wants to login into the application
        Given I am on the login page
        When I fill in the username field with <username>
        And I fill in the password field with <password>
        And I press the login button
        Then I should be logged in

            Examples:
                | username | password |
                | standard_user | secret_sauce |

    Scenario Outline: the user wants to login into the application with wrong credentials
        Given I am on the login page
        When I fill in the username field with <username>
        And I fill in the password field with <password>
        And I press the login button
        Then I should not be logged in

            Examples:
                | username | password |
                | standard_user | wrong_password |
                | wrong_user | secret_sauce |
                | wrong_user | wrong_password |

    Scenario Outline: the user wants to login into the application without an username
        Given I am on the login page
        When I fill in the password field with <password>
        And I press the login button
        Then I should not be logged in

            Examples:
                | password |
                | wrong_password |

    Scenario Outline: the user wants to login into the application without a password
        Given I am on the login page
        When I fill in the username field with <username>
        And I press the login button
        Then I should not be logged in

            Examples:
                | username |
                | wrong_user |

    Scenario Outline: the user wants to login into the application without a username and a password
        Given I am on the login page
        When I press the login button
        Then I should not be logged in

            Examples:
                |