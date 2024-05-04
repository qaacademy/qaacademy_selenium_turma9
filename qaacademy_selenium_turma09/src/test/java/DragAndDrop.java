import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDrop {
    WebDriver driver;

    @Test
    public void testDragAndDrop(){
        driver = new ChromeDriver();
        driver.get("https://demo.automationtesting.in/Static.html");
        WebElement iconeElemento = driver.findElement(By.xpath("//img[@src='selenium.png']"));
        WebElement destino = driver.findElement(By.id("droparea"));
        Actions actions = new Actions(driver);
        actions.dragAndDrop(iconeElemento, destino).perform();
    }
}
