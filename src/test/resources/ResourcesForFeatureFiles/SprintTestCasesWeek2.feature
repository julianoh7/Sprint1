Feature: Verifying for Sprint2

  @sanity @TC-22
  Scenario: Verify error message for invalid data in SignUp form
    Given I am on Hotels Homepage
    When  I click on Sign in
    Then  I click on sign up
    And   I enter email as 'james123'
    And   I enter password as '123456789ABCDEFGH123456'
    And   I enter name as '//.?'
    And   I enter password as '123'
    And   I enter last name as '.!@$%'
    Then  I verify error email message is displayed
    Then  I verify error password message is displayed
    Then  I verify error First Name message is displayed
    Then  I verify error Last Name message is displayed
    And   I quit
    

    @sanity @TC-23
    Scenario: Verify tick-mark when user enters correct data in SignUp form
      Given I am on Hotels Homepage
      When  I click on Sign in
      Then  I click on sign up
      And   I enter email as 'jamesbond1997@gmail.com'
      Then  I verify tick-mark is displayed for email
      And   I enter password as 'Albania1912!'
      Then  I verify tick-mark is displayed for password
      And   I enter name as 'Juliano'
      Then  I verify tick-mark is displayed for first name
      And   I enter last name as 'Heqimaj'
      Then  I verify tick-mark is displayed for last name
      And   I quit

      @sanity @TC-24
    Scenario: Verify error is displayed when user submits the empty feedback form
      Given I am on Hotels Homepage
      When  I click on Help button
      Then  I click on Website Feedback from Help Dropdown
      And   I click submit
      Then  I Verify error message is displayed as: Please fill in the required information highlighted below
      Then  I Verify star boxes section is in a red dotted box
      And   I quit

      @sanity @TC-25
    Scenario: Verify user can submit feedback after completing the feedback form
      Given I am on Hotels Homepage
      When  I click on Help button
      Then  I click on Website Feedback from Help Dropdown
      Then  I click satisfaction as five stars
      Then  I write 'great website very helpful my sister has used it too' about the page
      Then  I select 'Unsure' as return likely rating
      Then  I select 'yes' if I ever booked on Hotels.com
      Then  I select 'YES' if I accomplished what I wanted to do in the page
      And   I click submit
      Then  I verify 'THANK YOU FOR YOUR FEEDBACK.' is displayed
      And   I quit

      @sanity @TC-26
    Scenario: Verify text/link on "Why book with Hotels.com?" section
      Given I am on Hotels Homepage
      When  I scroll to 'Why book with Hotels.com'
      Then  I verify 'Free cancellation' is displayed
      Then  I verify 'Our price guarantee' is displayed
      Then  I verify 'Get a reward night' is displayed
      And   I click on 'Our price guarantee'
      Then  I verify 'Price Guarantee' header is displayed
      And   I navigate back to 'Why book with Hotels.com'
      And   I click on 'Get a reward night For every 10 nights you stay' link
      Then  I verify 'Instant savings' heading is displayed
      And   I quit




