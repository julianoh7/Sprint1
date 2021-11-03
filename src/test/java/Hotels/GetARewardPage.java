package Hotels;

import DriverWrapper.Web;
import Pages.WebCommands;
import org.openqa.selenium.By;

public class GetARewardPage extends WebCommands {
    Web web = new Web();

    By instantSavingsHeaderLocator = By.xpath("//h1[contains(text(),'Instant savings. Reward')]");


    public boolean instantSavingsHeaderDisplayed(){
       return isWebElementDisplayed(instantSavingsHeaderLocator);
    }





}
