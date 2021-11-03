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
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I see if back button is disabled",
  "keyword": "Then "
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
  "duration": 6253786361,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickCheckIn()"
});
formatter.result({
  "duration": 293760294,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.getDisabledDates()"
});
formatter.result({
  "duration": 177396840,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.checking()"
});
formatter.result({
  "duration": 299796205,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.backButtonDisabled()"
});
formatter.result({
  "duration": 137635710,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 178060862,
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
  "duration": 3923991726,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickGuests()"
});
formatter.result({
  "duration": 302071282,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.updateGuestCount()"
});
formatter.result({
  "duration": 1524220275,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.updateKidsCount()"
});
formatter.result({
  "duration": 1000349441,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.kidsAge()"
});
formatter.result({
  "duration": 1004503072,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.kidsAge2()"
});
formatter.result({
  "duration": 753083146,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.totalGuests()"
});
formatter.result({
  "duration": 80401582,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickApply()"
});
formatter.result({
  "duration": 411027376,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.TotalCountOfPeople()"
});
formatter.result({
  "duration": 25477824,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 162939998,
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
  "name": "I enter email as \u0027jamesBond@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password as \u0027Albania12345!\u0027",
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
  "duration": 4872148491,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 962003132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamesBond@gmail.com",
      "offset": 18
    }
  ],
  "location": "TestCases.signInEmail(String)"
});
formatter.result({
  "duration": 393612844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Albania12345!",
      "offset": 21
    }
  ],
  "location": "TestCases.signInPassword(String)"
});
formatter.result({
  "duration": 759039208,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignInInsideSignInPage()"
});
formatter.result({
  "duration": 227569870,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyErrorMessage()"
});
formatter.result({
  "duration": 4140417087,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 202005101,
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
  "name": "I select Check-in date as \u00274\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I select Check-out date from calendar as \u002720\u0027",
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
  "duration": 3899729651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bora",
      "offset": 27
    }
  ],
  "location": "TestCases.searchBox(String)"
});
formatter.result({
  "duration": 399148073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bora Bora",
      "offset": 8
    }
  ],
  "location": "TestCases.selectingBoraBoraFrench(String)"
});
formatter.result({
  "duration": 1078843962,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickCheckIn()"
});
formatter.result({
  "duration": 284818668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "TestCases.selectingNovCheckIn(String)"
});
formatter.result({
  "duration": 3500413193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 42
    }
  ],
  "location": "TestCases.selectingNovCheckOut(String)"
});
formatter.result({
  "duration": 2302712067,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickApply()"
});
formatter.result({
  "duration": 201455052,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickingSearchButton()"
});
formatter.result({
  "duration": 374112076,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.scrollToBottomOfPage()"
});
formatter.result({
  "duration": 12202884859,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyingIfElementsAreEnabled()"
});
formatter.result({
  "duration": 7251000769,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyingIfElementsAreDisplayed()"
});
formatter.result({
  "duration": 58814793,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 304255464,
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
  "duration": 3855235350,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 1145223160,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignUpLocator()"
});
formatter.result({
  "duration": 1305200351,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickingTermsAndConditions()"
});
formatter.result({
  "duration": 449105222,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.goingBackToPreviousPage()"
});
formatter.result({
  "duration": 114495135,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickingPrivacyAndStatement()"
});
formatter.result({
  "duration": 2257520393,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.verifyingTotalTabs()"
});
formatter.result({
  "duration": 17133581,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 216849505,
  "status": "passed"
});
formatter.uri("SprintTestCasesWeek2.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying for Sprint2",
  "description": "",
  "id": "verifying-for-sprint2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify error message for invalid data in SignUp form",
  "description": "",
  "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@TC-22"
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
  "name": "I click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter email as \u0027james123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \u0027\u003cinvalidPassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter name as \u0027//.?\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter last name as \u0027.!@$%\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify error email message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify error password message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify error First Name message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify error Last Name message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I quit",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form;",
  "rows": [
    {
      "cells": [
        "invalidPassword"
      ],
      "line": 19,
      "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form;;1"
    },
    {
      "cells": [
        "123"
      ],
      "line": 20,
      "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form;;2"
    },
    {
      "cells": [
        "jamesBond56789987654321000"
      ],
      "line": 21,
      "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify error message for invalid data in SignUp form",
  "description": "",
  "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@TC-22"
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
  "name": "I click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter email as \u0027james123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \u0027123\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter name as \u0027//.?\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter last name as \u0027.!@$%\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify error email message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify error password message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify error First Name message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify error Last Name message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 4661255258,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 20092261881,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Julianos-MBP.lan\u0027, ip: \u00272603:7000:a941:127f:0:0:0:13fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: /var/folders/_n/gnvnhk0x3qs...}, goog:chromeOptions: {debuggerAddress: localhost:61030}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 91589529ab053b650d20cbdd5095e783\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Sign in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.WebCommands.getWebElement(WebCommands.java:18)\n\tat Pages.WebCommands.clickUsingActionsClass(WebCommands.java:29)\n\tat Hotels.SignInPage.clickSignInLocator(SignInPage.java:32)\n\tat StepDefinition.TestCases.clickSignIn(TestCases.java:87)\n\tat ✽.When I click on Sign in(SprintTestCasesWeek2.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "TestCases.clickSignUpLocator()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "james123",
      "offset": 18
    }
  ],
  "location": "TestCases.signInEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 21
    }
  ],
  "location": "TestCases.signInPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "//.?",
      "offset": 17
    }
  ],
  "location": "TestCasesForSprint2.typingUserName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": ".!@$%",
      "offset": 22
    }
  ],
  "location": "TestCasesForSprint2.typingLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyEmailError()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyPasswordError()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyFirstNameError()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyLastNameError()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Verify error message for invalid data in SignUp form",
  "description": "",
  "id": "verifying-for-sprint2;verify-error-message-for-invalid-data-in-signup-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@TC-22"
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
  "name": "I click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter email as \u0027james123\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \u0027jamesBond56789987654321000\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter name as \u0027//.?\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter last name as \u0027.!@$%\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify error email message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify error password message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify error First Name message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify error Last Name message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3867711269,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 1431969731,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignUpLocator()"
});
formatter.result({
  "duration": 1573514474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "james123",
      "offset": 18
    }
  ],
  "location": "TestCases.signInEmail(String)"
});
formatter.result({
  "duration": 509774129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamesBond56789987654321000",
      "offset": 21
    }
  ],
  "location": "TestCases.signInPassword(String)"
});
formatter.result({
  "duration": 198847172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//.?",
      "offset": 17
    }
  ],
  "location": "TestCasesForSprint2.typingUserName(String)"
});
formatter.result({
  "duration": 122768765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".!@$%",
      "offset": 22
    }
  ],
  "location": "TestCasesForSprint2.typingLastName(String)"
});
formatter.result({
  "duration": 162199409,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyEmailError()"
});
formatter.result({
  "duration": 107530331,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyPasswordError()"
});
formatter.result({
  "duration": 39983303,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyFirstNameError()"
});
formatter.result({
  "duration": 449976870,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyLastNameError()"
});
formatter.result({
  "duration": 280624291,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 200893814,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify tick-mark when user enters correct data in SignUp form",
  "description": "",
  "id": "verifying-for-sprint2;verify-tick-mark-when-user-enters-correct-data-in-signup-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity"
    },
    {
      "line": 23,
      "name": "@TC-23"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on Sign in",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on sign up",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I enter email as \u0027jamesbond1997@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify tick-mark is displayed for email",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I enter password as \u0027Albania1912!\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify tick-mark is displayed for password",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I enter name as \u0027Juliano\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify tick-mark is displayed for first name",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I enter last name as \u0027Heqimaj\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify tick-mark is displayed for last name",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3912021672,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignIn()"
});
formatter.result({
  "duration": 1216451099,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.clickSignUpLocator()"
});
formatter.result({
  "duration": 1311841419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jamesbond1997@gmail.com",
      "offset": 18
    }
  ],
  "location": "TestCases.signInEmail(String)"
});
formatter.result({
  "duration": 405340501,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.emailTickMarkVerification()"
});
formatter.result({
  "duration": 294413962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Albania1912!",
      "offset": 21
    }
  ],
  "location": "TestCases.signInPassword(String)"
});
formatter.result({
  "duration": 136161550,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.passwordTickMarkVerification()"
});
formatter.result({
  "duration": 232941252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Juliano",
      "offset": 17
    }
  ],
  "location": "TestCasesForSprint2.typingUserName(String)"
});
formatter.result({
  "duration": 83212375,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.firstNameTickMarkVerification()"
});
formatter.result({
  "duration": 214073817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Heqimaj",
      "offset": 22
    }
  ],
  "location": "TestCasesForSprint2.typingLastName(String)"
});
formatter.result({
  "duration": 90319979,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.lastNameTickMarkVerification()"
});
formatter.result({
  "duration": 190486503,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 188134480,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify error is displayed when user submits the empty feedback form",
  "description": "",
  "id": "verifying-for-sprint2;verify-error-is-displayed-when-user-submits-the-empty-feedback-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@sanity"
    },
    {
      "line": 38,
      "name": "@TC-24"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on Help button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I click on Website Feedback from Help Dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Verify error message is displayed as: Please fill in the required information highlighted below",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I Verify star boxes section is in a red dotted box",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3388240282,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingHelpButton()"
});
formatter.result({
  "duration": 220614906,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingHelpForDropDown()"
});
formatter.result({
  "duration": 212261760,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingSubmit()"
});
formatter.result({
  "duration": 24420808760,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@id\u003d\u0027submit-button\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Julianos-MBP.lan\u0027, ip: \u00272603:7000:a941:127f:0:0:0:13fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: /var/folders/_n/gnvnhk0x3qs...}, goog:chromeOptions: {debuggerAddress: localhost:61206}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 483d5741b716aaea791ab6d4bcdce72a\n*** Element info: {Using\u003dxpath, value\u003d//button[@id\u003d\u0027submit-button\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.WebCommands.getWebElement(WebCommands.java:18)\n\tat Pages.WebCommands.clickUsingActionsClass(WebCommands.java:29)\n\tat Hotels.WebsiteFeedBackPage.clickSubmit(WebsiteFeedBackPage.java:35)\n\tat StepDefinition.TestCasesForSprint2.clickingSubmit(TestCasesForSprint2.java:73)\n\tat ✽.And I click submit(SprintTestCasesWeek2.feature:43)\n",
  "status": "failed"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyingErrorMessageInFeedbackPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.verifyingStarBoxes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 49,
  "name": "Verify user can submit feedback after completing the feedback form",
  "description": "",
  "id": "verifying-for-sprint2;verify-user-can-submit-feedback-after-completing-the-feedback-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@sanity"
    },
    {
      "line": 48,
      "name": "@TC-25"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I click on Help button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click on Website Feedback from Help Dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I click satisfaction as five stars",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I write \u0027great website very helpful my sister has used it too\u0027 about the page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I select \u0027Unsure\u0027 as return likely rating",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I select \u0027yes\u0027 if I ever booked on Hotels.com",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I select \u0027YES\u0027 if I accomplished what I wanted to do in the page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify \u0027THANK YOU FOR YOUR FEEDBACK.\u0027 is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 3740608462,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingHelpButton()"
});
formatter.result({
  "duration": 376887571,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingHelpForDropDown()"
});
formatter.result({
  "duration": 680176811,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.manhattan()"
});
formatter.result({
  "duration": 24245093067,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027radio-group\u0027]//div[@class\u003d\u0027radio-button\u0027])[5]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Julianos-MBP.lan\u0027, ip: \u00272603:7000:a941:127f:0:0:0:13fd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: /var/folders/_n/gnvnhk0x3qs...}, goog:chromeOptions: {debuggerAddress: localhost:61292}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dc40f2bafd34e8a2e8756e8ad5ccae61\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027radio-group\u0027]//div[@class\u003d\u0027radio-button\u0027])[5]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat Pages.WebCommands.getWebElement(WebCommands.java:18)\n\tat Pages.WebCommands.clickUsingActionsClass(WebCommands.java:29)\n\tat Hotels.WebsiteFeedBackPage.selectingSatisfactionStar(WebsiteFeedBackPage.java:50)\n\tat StepDefinition.TestCasesForSprint2.manhattan(TestCasesForSprint2.java:85)\n\tat ✽.Then I click satisfaction as five stars(SprintTestCasesWeek2.feature:53)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "great website very helpful my sister has used it too",
      "offset": 9
    }
  ],
  "location": "TestCasesForSprint2.writingComment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Unsure",
      "offset": 10
    }
  ],
  "location": "TestCasesForSprint2.selectingReturningRating(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 10
    }
  ],
  "location": "TestCasesForSprint2.selectingPriorBooked(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "YES",
      "offset": 10
    }
  ],
  "location": "TestCasesForSprint2.selectingAccomplished(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCasesForSprint2.isThankYouFeedbackDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 63,
  "name": "Verify text/link on \"Why book with Hotels.com?\" section",
  "description": "",
  "id": "verifying-for-sprint2;verify-text/link-on-\"why-book-with-hotels.com?\"-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@sanity"
    },
    {
      "line": 62,
      "name": "@TC-26"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on Hotels Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I scroll to \u0027Why book with Hotels.com\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I verify \u0027Free cancellation\u0027 is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I verify \u0027Our price guarantee\u0027 is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I verify \u0027Get a reward night\u0027 is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I click on \u0027Our price guarantee\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I verify \u0027Price Guarantee\u0027 header is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I navigate back to \u0027Why book with Hotels.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on \u0027Get a reward night For every 10 nights you stay\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I verify \u0027Instant savings\u0027 heading is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "TestCases.launchHotels()"
});
formatter.result({
  "duration": 6187927083,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.scrollingToWhyBookWithHotels()"
});
formatter.result({
  "duration": 6463022862,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.isFreeCancellationDisplayed()"
});
formatter.result({
  "duration": 108568637,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.isOurPriceGuaranteeDisplayed()"
});
formatter.result({
  "duration": 87141042,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.isGetARewardNightDisplayed()"
});
formatter.result({
  "duration": 130887532,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingOurPriceGuarantee()"
});
formatter.result({
  "duration": 1617862670,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.isPriceGuaranteeDisplayed()"
});
formatter.result({
  "duration": 116322032,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.navigatingBackToWhyBookWithHotels()"
});
formatter.result({
  "duration": 3103425202,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.clickingGetARewardNight()"
});
formatter.result({
  "duration": 1318375983,
  "status": "passed"
});
formatter.match({
  "location": "TestCasesForSprint2.isInstantSavingsHeaderDisplayed()"
});
formatter.result({
  "duration": 230108634,
  "status": "passed"
});
formatter.match({
  "location": "TestCases.z()"
});
formatter.result({
  "duration": 237764172,
  "status": "passed"
});
});