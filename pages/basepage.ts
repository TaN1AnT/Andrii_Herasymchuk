import {WebDriver} from 'selenium-webdriver';
import { urlIs } from "selenium-webdriver/lib/until";

class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async go_to_URL(theURL: string){
        await this.driver.get(theURL);
    }

    async get_URL(){
        return await this.driver.getCurrentUrl();
    }

    async chech_is_URL(isURL: string){
        await this.driver.wait(urlIs(isURL));
        await this.driver.navigate().refresh();
    }
    
}
export default BasePage;
