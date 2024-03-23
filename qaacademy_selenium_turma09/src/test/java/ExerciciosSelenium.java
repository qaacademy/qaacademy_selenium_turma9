import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.time.Duration;

public class ExerciciosSelenium {

    @Test
    public void testSelenium() throws InterruptedException {

        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        driver.get("https://demo.automationtesting.in/Register.html");
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
        driver.findElement(By.xpath(" //body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[4]/div[1]/input[1]")).sendKeys("1234567890");

        //Gender
        driver.findElement(By.xpath("//body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[5]/div[1]/label[1]/input[1]")).click();

        //Selecionar o hobie
        driver.findElement(By.xpath("//input[@id='checkbox2']")).click();

        //Expandir lista languages
        driver.findElement(By.xpath("//div[@id='msdd']")).click();
        //Clica na linguagem
        driver.findElement(By.xpath("//a[contains(text(),'Portuguese')]")).click();

        //Lista skils Option
        Select select = new Select(driver.findElement(By.xpath("//select[@id='Skills']")));
        select.selectByVisibleText("Java");

        //Lista Paises

        driver.findElement(By.xpath("//body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[10]/div[1]/span[1]/span[1]/span[1]")).click();
        driver.findElement(By.xpath("//li[contains(text(),'United States of America')]")).click();

        //Lista Select Data de nascimento

        WebElement elementAno = driver.findElement(By.xpath("//select[@id='yearbox']"));
        Select selectAno = new Select(elementAno);
        selectAno.selectByVisibleText("2009");

        WebElement elementMes = driver.findElement(By.xpath("//body/section[@id='section']/div[1]/div[1]/div[2]/form[1]/div[11]/div[2]/select[1]"));
        Select selectMes = new Select(elementMes);
        selectMes.selectByVisibleText("December");

        WebElement elementDia = driver.findElement(By.xpath("//select[@id='daybox']"));
        Select selectDia = new Select(elementDia);
        selectDia.selectByVisibleText("25");

        //Preenchemos a senhas
        driver.findElement(By.xpath("//input[@id='firstpassword']")).sendKeys("QA Academy");
        driver.findElement(By.xpath("//input[@id='secondpassword']")).sendKeys("QA Academy");

        //Finalizar
        driver.quit();

    }
}
