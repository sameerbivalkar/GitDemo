package Qaclickacademy;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base  {
	
	public static WebDriver driver;
	
	public static WebDriver getdriver() throws IOException
	{
		Properties prop = new Properties();
		
		FileInputStream fs =new FileInputStream("C:\\Users\\sameer\\Mavenjava\\src\\test\\java\\Qaclickacademy\\global.properties"); 
		prop.load(fs);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sameer\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(prop.getProperty("url"));
		return driver;
	}
}
