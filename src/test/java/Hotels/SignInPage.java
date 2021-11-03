package Hotels;

import DriverWrapper.Web;
import Pages.WebCommands;
import org.openqa.selenium.By;

public class SignInPage extends WebCommands {
    Web web = new Web();

    By signInLocator = By.xpath("//span[text()='Sign in']");
    By emailLogInLocator = By.xpath("//input[@name='email']");
    By passwordLogInLocator = By.xpath("//input[@name='password']");
    By signInButtonLocator = By.xpath("//button[@id='sign-in-button']");
    By errorMessageForInvalidEmailAndPsw = By.xpath("//div[contains(text(),'the email and password')]");
    By errorMessageForEmailLocator = By.xpath("//small[text()='Please enter an @ symbol in your email address']");
    By errorMessageForPasswordLocator = By.xpath("//small[@id='password-error']");
    By errorMessageForFirstNameLocator = By.xpath("//small[text()='Please check your first name']");
    By errorMessageForLastNameLocator = By.xpath("//small[text()='Please check your last name']");
    By firstNameLocator = By.xpath("//input[@name='firstName']");
    By lastNameLocator = By.xpath("//input[@name='lastName']");
    By unClickableElement = By.xpath("//label[text()='Email Address']");
    By firstNameTickMarkLocator = By.xpath("//input[@name='firstName' and //input[not(contains(aria-describedby,'firstName-error'))]]");
    By lastNameTickMarkLocator = By.xpath("//input[@name='lastName' and //input[not(contains(aria-describedby,'lastName-error'))]]");
    By emailTickMarkLocator = By.xpath("//input[@name='email' and //input[not(contains(aria-describedby,'email-error'))]]");
    By passwordTickMarkLocator = By.xpath("//input[@name='password' and //input[not(contains(aria-describedby,'password-error'))]]");





    public void clickSignInLocator (){
        clickUsingActionsClass(signInLocator);
    }
    public void enterEmail (String data){
        type(data,emailLogInLocator);
    }
    public void enterPassword(String data){
        type(data,passwordLogInLocator);
    }
    public void clickSignIn (){
        clickUsingActionsClass(signInButtonLocator);
    }
    public boolean getErrorMessage(){
        return isWebElementDisplayed(errorMessageForInvalidEmailAndPsw);
    }
    public boolean isEmailErrorMessageDisplayed (){
       return isWebElementDisplayed(errorMessageForEmailLocator);
    }
    public boolean isPasswordErrorMessageDisplayed (){
        return isWebElementDisplayed(errorMessageForPasswordLocator);
    }
    public boolean isFirstNameErrorMessageDisplayed (){
        return isWebElementDisplayed(errorMessageForFirstNameLocator);
    }
    public boolean isLastNameErrorMessageDisplayed (){
        return isWebElementDisplayed(errorMessageForLastNameLocator);
    }

    public void enterFirstName (String name){
        type(name,firstNameLocator);
    }
    public void enterLastName (String lastName){
        type(lastName,lastNameLocator);
    }
    public void clickNothing(){
        clickUsingActionsClass(unClickableElement);
    }
    public boolean isEmailTickMarkDisplayed(){
        clickNothing();
        return isWebElementDisplayed(emailTickMarkLocator);
    }
    public boolean isPasswordTickMarkDisplayed(){
        clickNothing();
        return isWebElementDisplayed(passwordTickMarkLocator);
    }
    public boolean isFirstNameTickMarkDisplayed(){
        clickNothing();
        return isWebElementDisplayed(firstNameTickMarkLocator);
    }
    public boolean isLastNameTickMarkDisplayed(){
        clickNothing();
        return isWebElementDisplayed(lastNameTickMarkLocator);
    }



}
