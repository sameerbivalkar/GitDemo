package StepDefination;

import java.io.IOException;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObjects.HomePage;
import Qaclickacademy.Base;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefination {
	
	public WebDriver driver;
	HomePage h;

	@Given("^User is on Green Cart Landing page$")
	public void user_is_on_Green_Cart_Landing_page() throws IOException{
	    // getting driver from base class -- return method
		driver = Base.getdriver();
		//driver.get("https://rahulshettyacademy.com/seleniumPractise/#/");
	    
	}

	@When("^User search for (.+) Vegetable$")
	public void user_search_for_Vegetable(String arg1) throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		//input[@type ='search']
		h= new HomePage(driver);
		//driver.findElement(By.xpath("//input[@type ='search']")).sendKeys(arg1);
		h.getsearch().sendKeys(arg1);
		Thread.sleep(3000);
	    
	}
	@Then("^\"([^\"]*)\" result are displayed$")
	public void result_are_displayed(String arg1)  {
	    // Write code here that turns the phrase above into concrete actions
		
		Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(arg1));
	    
	}
	    @And("^Added items to cart$")
	    public void added_items_to_cart() throws Throwable {
	    	driver.findElement(By.cssSelector("a.increment")).click();
	    	driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();	        
	    }

	    @And("^user proceeded to checkout page for purchase$")
	    public void user_proceeded_to_checkout_page_for_purchase() throws Throwable {
	    	driver.findElement(By.cssSelector("div.container header:nth-child(1) div.container div.cart a.cart-icon:nth-child(5) > img:nth-child(1)")).click();
	    	driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();	    	
	    }
	    
	    //@Then("^Verify selcted \"([^\"]*)\" items are displayed in Checkout page$")
	    //public void verify_selcted_something_items_are_displayed_in_checkout_page(String strArg1) throws Throwable {
	        //Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
	    //}
	    
	    @And("^Close the Browser$")
	    public void close_the_browser() throws Throwable {
	        driver.close();
	    }

	    
	
}
