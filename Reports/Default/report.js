$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SprintTestCases.feature");
formatter.feature({
  "line": 1,
  "name": "Verify",
  "description": "",
  "id": "verify",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Past dates (if any) are disabled and Back button on current month is disabled",
  "description": "",
  "id": "verify;verify-past-dates-(if-any)-are-disabled-and-back-button-on-current-month-is-disabled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@TC-17"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Check In",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I get disabled dates",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I get the elements in text format",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I see if back button is disabled",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 5930415118,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickCheckIn()"
});
formatter.result({
  "duration": 443657139,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.getDisabledDates()"
});
formatter.result({
  "duration": 282324671,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.checking()"
});
formatter.result({
  "duration": 1017988673,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.backButtonDisabled()"
});
formatter.result({
  "duration": 38952904,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 209768796,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Guests",
  "description": "",
  "id": "verify;verify-guests",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@TC-18"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click guests",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "update guest count to 4",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "update kids count to 2",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select child\u0027s age as 4",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select second child\u0027s age as \u003c1",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I see if guest count is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click apply",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify total count",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3856707565,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickGuests()"
});
formatter.result({
  "duration": 243920072,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.updateGuestCount()"
});
formatter.result({
  "duration": 1069582924,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.updateKidsCount()"
});
formatter.result({
  "duration": 968071180,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.kidsAge()"
});
formatter.result({
  "duration": 733265949,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.kidsAge2()"
});
formatter.result({
  "duration": 889248391,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.totalGuests()"
});
formatter.result({
  "duration": 154608360,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickApply()"
});
formatter.result({
  "duration": 404147387,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.TotalCountOfPeople()"
});
formatter.result({
  "duration": 24301477,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 176569783,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify error message for invalid sign in credentials",
  "description": "",
  "id": "verify;verify-error-message-for-invalid-sign-in-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@sanity"
    },
    {
      "line": 25,
      "name": "@TC-21"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter invalid email",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click signIn box",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I verify error message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3791785599,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 1145563242,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.signInEmail()"
});
formatter.result({
  "duration": 337754460,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.signInPassword()"
});
formatter.result({
  "duration": 444668790,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignInInsideSignInPage()"
});
formatter.result({
  "duration": 231404329,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyErrorMessage()"
});
formatter.result({
  "duration": 2453135706,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 226455110,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify CHANGE DATES button is displayed at the end of search results",
  "description": "",
  "id": "verify;verify-change-dates-button-is-displayed-at-the-end-of-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@sanity"
    },
    {
      "line": 35,
      "name": "@TC-19"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "click Search Box and type \u0027Bora\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "select \u0027Bora Bora\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click Check In",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select Check-in date",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I select Check-out date from calendar",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click apply",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I scroll to bottom of page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I see if Change Dates button is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I see if Change Dates button is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3625195836,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.searchBox()"
});
formatter.result({
  "duration": 265352498,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.selectingBoraBoraFrench()"
});
formatter.result({
  "duration": 686588448,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickCheckIn()"
});
formatter.result({
  "duration": 345176904,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.selectingNovCheckIn()"
});
formatter.result({
  "duration": 845671566,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.selectingNovCheckOut()"
});
formatter.result({
  "duration": 862116021,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickApply()"
});
formatter.result({
  "duration": 164189600,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickingSearchButton()"
});
formatter.result({
  "duration": 369946873,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.scrollToBottomOfPage()"
});
formatter.result({
  "duration": 12121748971,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyingIfElementsAreEnabled()"
});
formatter.result({
  "duration": 23105859,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyingIfElementsAreDisplayed()"
});
formatter.result({
  "duration": 31799191,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 264875567,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab",
  "description": "",
  "id": "verify;verify-termsandconditions-link-and-privacystatements-link-open-correct-page-on-new-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@sanity"
    },
    {
      "line": 50,
      "name": "@TC-20"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I click on sign up",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click Terms and Conditions",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click back to other page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I click privacy and statement",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I verify total tabs should be 3",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I quit",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3589506588,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 953817246,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignUpLocator()"
});
formatter.result({
  "duration": 977843173,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickingTermsAndConditions()"
});
formatter.result({
  "duration": 624901641,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.goingBackToPreviousPage()"
});
formatter.result({
  "duration": 67146893,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickingPrivacyAndStatement()"
});
formatter.result({
  "duration": 2197153580,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyingTotalTabs()"
});
formatter.result({
  "duration": 9136894,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 239063232,
  "status": "passed"
});
});