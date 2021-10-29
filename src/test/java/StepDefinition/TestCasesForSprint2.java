package StepDefinition;

import DriverWrapper.Web;
import Hotels.*;
import Pages.WebCommands;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TestCasesForSprint2 extends Web {
    WebCommands webCommands= new WebCommands();
    HomePageForHotels homepage = new HomePageForHotels();
    SignInPage signInPage = new SignInPage();
    WebsiteFeedBackPage websiteFeedBackPage = new WebsiteFeedBackPage();
    PriceGuaranteePage priceGuaranteePage = new PriceGuaranteePage();
    GetARewardPage getARewardPage = new GetARewardPage();

    @When("I verify error email message is displayed")
    public void verifyEmailError(){
        Assert.assertTrue(signInPage.isEmailErrorMessageDisplayed());
    }
    @When("I verify error password message is displayed")
    public void verifyPasswordError(){
        Assert.assertTrue(signInPage.isPasswordErrorMessageDisplayed());
    }
    @When("I enter name as '(.+)'")
    public void typingUserName(String name){
        signInPage.enterFirstName(name);
    }
    @When("I enter last name as '(.+)'")
    public void typingLastName(String lastName){
        signInPage.enterLastName(lastName);
    }
    @When("I verify error First Name message is displayed")
    public void verifyFirstNameError(){
        Assert.assertTrue(signInPage.isFirstNameErrorMessageDisplayed());
        signInPage.clickNothing();
    }
    @When("I verify error Last Name message is displayed")
    public void verifyLastNameError() {
        Assert.assertTrue(signInPage.isLastNameErrorMessageDisplayed());
    }
    @Then("I verify tick-mark is displayed for email")
    public void emailTickMarkVerification(){
        Assert.assertTrue(signInPage.isEmailTickMarkDisplayed());
    }
    @Then("I verify tick-mark is displayed for password")
    public void passwordTickMarkVerification(){
        Assert.assertTrue(signInPage.isPasswordTickMarkDisplayed());
    }
    @Then("I verify tick-mark is displayed for first name")
    public void firstNameTickMarkVerification(){
        Assert.assertTrue(signInPage.isFirstNameTickMarkDisplayed());
    }
    @Then("I verify tick-mark is displayed for last name")
    public void lastNameTickMarkVerification(){
        Assert.assertTrue(signInPage.isLastNameTickMarkDisplayed());
    }

    @When("I click on Help button")
    public void clickingHelpButton (){
        homepage.clickHelpButton();
    }
    @Then("I click on Website Feedback from Help Dropdown")
    public void clickingHelpForDropDown(){
        homepage.clickWebsiteFeedback();
    }

    @Then("I click submit")
    public void clickingSubmit(){
        //webCommands.scrollBy300Pixels();
        websiteFeedBackPage.clickSubmit();
    }
    @Then("I Verify error message is displayed as: Please fill in the required information highlighted below")
    public void verifyingErrorMessageInFeedbackPage(){
        Assert.assertTrue(websiteFeedBackPage.isErrorMessageAfterSubmitButtonClickDisplayed());
    }
    @Then("I Verify star boxes section is in a red dotted box")
    public void verifyingStarBoxes(){
        Assert.assertTrue(websiteFeedBackPage.isHighlightedDottingFocusingErrorLocatorDisplayed());
    }
    @Then("I click satisfaction as five stars")
    public void manhattan(){
        websiteFeedBackPage.selectingSatisfactionStar();
    }

    @And("I write '(.+)' about the page")
    public void writingComment(String data){
        websiteFeedBackPage.typingInPageComment(data);
    }
    @Then("I select '(.+)' as return likely rating")
    public void selectingReturningRating (String data){
        websiteFeedBackPage.selectingReturnRating(data);
    }
    @Then("I select '(.+)' if I ever booked on Hotels.com")
    public void selectingPriorBooked(String text){
        websiteFeedBackPage.selectPriorBooked(text);
    }
    @Then("I select '(.+)' if I accomplished what I wanted to do in the page")
    public void selectingAccomplished (String text){
        websiteFeedBackPage.selectAccomplished(text);
    }
    @Then("I verify 'THANK YOU FOR YOUR FEEDBACK.' is displayed")
    public void isThankYouFeedbackDisplayed(){
        Assert.assertTrue(websiteFeedBackPage.thankYouFeedBackDisplayed());
    }
    @When("I scroll to 'Why book with Hotels.com'")
    public void scrollingToWhyBookWithHotels(){
        homepage.scrollToWhyBookWithHotels();
    }
    @Then("I verify 'Free cancellation' is displayed")
    public void isFreeCancellationDisplayed(){
        Assert.assertTrue(homepage.freeCancellationDisplayed());
    }
    @Then("I verify 'Our price guarantee' is displayed")
    public void isOurPriceGuaranteeDisplayed(){
        Assert.assertTrue(homepage.ourPriceGuaranteeDisplayed());
    }
    @Then("I verify 'Get a reward night' is displayed")
    public void isGetARewardNightDisplayed(){
        Assert.assertTrue(homepage.getARewardNightDisplayed());
    }
    @And("I click on 'Our price guarantee'")
    public void clickingOurPriceGuarantee (){
        homepage.clickOurPriceGuarantee();
    }
    @Then("I verify 'Price Guarantee' header is displayed")
    public void isPriceGuaranteeDisplayed(){
        Assert.assertTrue(priceGuaranteePage.priceGuaranteeDisplayed());
    }
    @And("I navigate back to 'Why book with Hotels.com'")
    public void navigatingBackToWhyBookWithHotels(){
        homepage.navigateBackToWhyBookWithHotelsSection();
    }
    @And("I click on 'Get a reward night For every 10 nights you stay' link")
    public void clickingGetARewardNight(){
        homepage.clickOnGetARewardNight();
    }
    @Then("I verify 'Instant savings' heading is displayed")
    public void isInstantSavingsHeaderDisplayed(){
        Assert.assertTrue(getARewardPage.instantSavingsHeaderDisplayed());
    }













}
