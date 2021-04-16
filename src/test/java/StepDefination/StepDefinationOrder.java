package StepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;

import Qaclickacademy.Base;
import cucumber.api.java.en.Then;

public class StepDefinationOrder extends Base {
	
	@Then("^Verify selcted (.+) items are displayed in Checkout page$")
    public void verify_selcted_something_items_are_displayed_in_checkout_page(String strArg1) throws Throwable {
        Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
    }

}
