Feature: Viewing Pairing Statistics
  As a user of the system
  I want to view the pairing habits of the developers on the team
  So that i can track who has paired with who recently

  Scenario: Initial view of the pairing map
    Given im on the pairingMap page
    Then i should see an empty grid of pairing stats