package Hotels;

import DriverWrapper.Web;
import Pages.WebCommands;
import org.openqa.selenium.By;

public class PriceGuaranteePage extends WebCommands {
    Web web = new Web();

    By priceGuaranteeHeaderLocator = By.xpath("//h1[text()='Price Guarantee']");

    public boolean priceGuaranteeDisplayed (){
       return isWebElementDisplayed(priceGuaranteeHeaderLocator);
    }
}
