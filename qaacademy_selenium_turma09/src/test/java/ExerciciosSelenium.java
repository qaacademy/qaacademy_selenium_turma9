import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ExerciciosSelenium {

    @Test
    public void testSelenium() throws InterruptedException {

        WebDriver driver = new ChromeDriver();
        driver.get("https://demo.automationtesting.in/Register.html");
        Thread.sleep(5000);

        driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div[2]/div[2]/button[1]/p")).click();

        //Campo primeiro nome
        driver.findElement(By.xpath("//body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]")).sendKeys("QA");
        //Campo Ultimo nome
        driver.findElement(By.xpath("//body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/input[1]")).sendKeys("Academy");
        //Address
        driver.findElement(By.xpath("//body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/textarea[1]")).sendKeys("Av Paulista, 508");
        //Email
        driver.findElement(By.xpath(" //body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/input[1]")).sendKeys("contato@qaacademy.com.br");
        //Telefone
        driver.findElement(By.xpath(" //body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[4]/div[1]/input[1]")).sendKeys("11977413512");

        Thread.sleep(10000);
        driver.quit();

    }
}
