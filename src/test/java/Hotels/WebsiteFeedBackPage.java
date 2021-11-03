package Hotels;

import DriverWrapper.Web;
import Pages.WebCommands;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

public class WebsiteFeedBackPage extends WebCommands {
    Web web = new Web();

    By submitButtonLocator = By.xpath("//button[@id='submit-button']");
    String lm = "https://www.directword.io/survey/domain=www.hotels.com/locale=en_US?metadata=%7B%22url%22%3A%22https%3A%2F%2Fwww.hotels.com%2F%22%2C%22pagename%22%3A%22home%20page%22%2C%22appname%22%3A%22kes%22%2C%22appversion%22%3A%221.1.2244%22%7D";
    String ln = "https://www.directword.io/survey/domain=www.hotels.com";
    By errorMessageAfterSubmitClickLocator = By.xpath("//p[text()='Please fill in the required information highlighted below.']");
    By highlightedDottingFocusingErrorLocator = By.xpath("//fieldset[@style='padding: 5px; border: 2px dotted rgb(204, 0, 0);']");
    By starRatingLocator = By.xpath("(//div[@class='radio-group']//div[@class='radio-button'])[5]");
    By pageCommentsLocator = By.xpath("//textarea[@placeholder='Please enter your comments about this page']");
    By willYouReturnLocator = By.xpath("//select[@id='will-you-return']");
    By selectPriorBookedYesLocator = By.xpath("//span[@data-localization='booked-before-yes']");
    By selectPriorBookedNoLocator = By.xpath("//span[@data-localization='booked-before-no']");
    By selectAccomplishedYesLocator = By.xpath("//label[@for='were-you-successful-yes']");
    By selectAccomplishedNoLocator = By.xpath("//label[@for='were-you-successful-no']");
    By thankYouFeedBackLocator = By.xpath("//h5[text()='THANK YOU FOR YOUR FEEDBACK.']");



    public void clickSubmit(){
        try {
            Thread.sleep(4000);
        }catch (Exception e ){
            e.printStackTrace();
        }
        switchingWindowHandle(ln);
        try {
            Thread.sleep(4000);
        }catch (Exception e ){
            e.printStackTrace();
        }
        JavascriptExecutor js = (JavascriptExecutor) web.getDriver();
        js.executeScript("scrollBy(0,400)");
        clickUsingActionsClass(submitButtonLocator);
    }
    public boolean isErrorMessageAfterSubmitButtonClickDisplayed() {
        return isWebElementDisplayed(errorMessageAfterSubmitClickLocator);
    }
    public boolean isHighlightedDottingFocusingErrorLocatorDisplayed() {
        return isWebElementDisplayed(highlightedDottingFocusingErrorLocator);
    }
    public void selectingSatisfactionStar() {
        try {
            Thread.sleep(4000);
        }catch (Exception e ){
            e.printStackTrace();
        }
        switchingWindowHandle(ln);
        clickUsingActionsClass(starRatingLocator);
    }
    public void typingInPageComment(String data){
        type(data,pageCommentsLocator);
    }
    public void selectingReturnRating (String text){
        dropDown(willYouReturnLocator,text);
    }
    public void selectPriorBooked (String data){
        if (data.equalsIgnoreCase("yes")){
            try {
                Thread.sleep(2000);
            }catch (Exception e ){
                e.printStackTrace();
            }
            switchingWindowHandle(lm);
            clickUsingActionsClass(selectPriorBookedYesLocator);
        } else if (data.equalsIgnoreCase("no")){
            try {
                Thread.sleep(2000);
            }catch (Exception e ){
                e.printStackTrace();
            }
            switchingWindowHandle(lm);
            clickUsingActionsClass(selectPriorBookedNoLocator);
        }
    }
    public void selectAccomplished(String data){
        if (data.equalsIgnoreCase("yes")){
            try {
                Thread.sleep(2000);
            }catch (Exception e ){
                e.printStackTrace();
            }
            switchingWindowHandle(lm);
            clickUsingActionsClass(selectAccomplishedYesLocator);
        } else if (data.equalsIgnoreCase("no")){
            try {
                Thread.sleep(2000);
            }catch (Exception e ){
                e.printStackTrace();
            }
            switchingWindowHandle(lm);
            clickUsingActionsClass(selectAccomplishedNoLocator);
        }
    }
    public boolean thankYouFeedBackDisplayed(){
        try {
            Thread.sleep(2000);
        }catch (Exception e ){
            e.printStackTrace();
        }
      return isWebElementDisplayed(thankYouFeedBackLocator);
    }



}
