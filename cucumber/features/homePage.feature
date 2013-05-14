Feature: homepage

  Scenario: navigation to pairing stats
    Given im on the application homepage
    When i click on "pairs"
    Then i should see "Pairs$"

  Scenario: routing sends you home
    Given im on the application homepage
    When i goto the path "/#/foobar"
    Then i should redirect to "/"
    And i should see "Pairs$"