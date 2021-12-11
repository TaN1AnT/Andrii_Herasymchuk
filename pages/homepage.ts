import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./basepage";

class HomePage extends BasePage {
    private OpenAdminBtn: Locator = By.id("menu_admin_viewAdminModule");

    constructor(driver: WebDriver){
        super(driver);
    }

    async go_to_admin_menu(){
        await this.driver.findElement(this.OpenAdminBtn).click();
    }

}
export default HomePage;



