package CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/feature/Seach.feature",
		glue ="StepDefination",tags="@SeleniumTest",
		strict=true,monochrome=true,
		plugin= {"pretty","html:target/cucumber"})

public class TestRunner {

}