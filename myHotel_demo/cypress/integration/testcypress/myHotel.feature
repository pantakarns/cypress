Feature: verify my hotel form

  Scenario: verify my hotel form can be submit
    Given open my hotel website
    When input firstname
    And input lastname
    And input phone number
    And input email address
    And select number of adults
    And pet answer
    And add note
    And accept term and conditions
    And click submit form
    Then verify form submit sccess

  Scenario: verify single fault for firstname
    Given open my hotel website
    And input lastname
    And input phone number
    And input email address
    And select number of adults 
    And pet answer
    And add note
    And accept term and conditions
    And click submit form
    Then verify form should not submit

  Scenario: verify maximum length(10 character) for firstname
    Given open my hotel website
    When input maximum length for firstname
    And input lastname
    And input phone number
    And input email address
    And select number of adults 
    And pet answer
    And add note
    And accept term and conditions
    Then verify text for firstname
