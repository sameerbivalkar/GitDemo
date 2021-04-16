package StepDefination;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import Qaclickacademy.Base;
import cucumber.api.java.After;

public class Hooks  {
	
	public WebDriver driver;
	
	@After("@SeleniumTest1")
	public void AfterSeleniumTest() throws IOException 
	{
		System.out.println("inside hooks");
		try {
			driver = Base.getdriver();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.quit();
	}

}
