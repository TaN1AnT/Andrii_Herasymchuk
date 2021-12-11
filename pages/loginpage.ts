import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage  from "./basepage";

class LoginPage extends BasePage {
    private LoginInput: Locator = By.id("txtUsername");
    private PasswordInput: Locator = By.id("txtPassword");
    private LoginBtn: Locator = By.id("btnLogin");

    constructor(driver: WebDriver){
        super(driver);
    }

    async login_into(log: string, pass: string){
        await this.driver.findElement(this.LoginInput).sendKeys(log);
        await this.driver.findElement(this.PasswordInput).sendKeys(pass);
        await this.driver.findElement(this.LoginBtn).click();

    }

}
export default LoginPage;