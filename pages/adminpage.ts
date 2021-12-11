import {By, WebDriver, Locator} from "selenium-webdriver";
import {elementLocated} from "selenium-webdriver/lib/until";
import BasePage from "./basepage";

class AdminPage extends BasePage{
    private adduserbtn: Locator = By.id('btnAdd');
    private userName: Locator = By.id('systemUser_userName');
    private password: Locator = By.id('systemUser_password');
    private confirmpassword: Locator = By.id('systemUser_confirmPassword');
    private employee: Locator = By.id('systemUser_employeeName_empName');
    private savebtn: Locator = By.id('btnSave');
    private searchuser: Locator = By.id('searchSystemUser_userName');
    private searchbtn: Locator = By.id('searchBtn');
    private resetbtn: Locator = By.id('resetBtn');
    private deletebtn: Locator = By.id('btnDelete');
    private confirmdeletebtn: Locator = By.id('dialogDeleteBtn');
    

    constructor(driver: WebDriver){
        super(driver);
    }

    async Add_User(usrn: string, pass: string, employeen: string){
        await this.driver.findElement(this.adduserbtn).click();
        await this.driver.findElement(this.userName).sendKeys(usrn);
        await this.driver.findElement(this.password).sendKeys(pass);
        await this.driver.findElement(this.confirmpassword).sendKeys(pass);
        await this.driver.findElement(this.employee).sendKeys(employeen);
        await this.driver.findElement(this.savebtn).click();
        await this.driver.sleep(2000);
    }


    async search_check_user(usrn: string, employeen: string){
        await this.driver.findElement(this.searchuser).sendKeys(usrn);
        await this.driver.findElement(this.searchbtn).click();

       // await this.driver.wait(elementLocated(By.xpath(`//*[text()="${usrn}"]`)));
        await this.check_user(usrn, employeen);

        await this.driver.findElement(this.resetbtn).click();
        await this.driver.sleep(2000);

    }

    async check_user(usrn: string, employeen: string){

       // await this.driver.wait(elementLocated(By.xpath(`//*[text()="${usrn}"]`)));
        const row =  await this.get_row(usrn);
        if(!row) return false;
        if ((await row.findElement(By.xpath('td[3]')).getText()) !== "ESS") return false;
        if ((await row.findElement(By.xpath('td[4]')).getText()) !== employeen) return false;
        if ((await row.findElement(By.xpath('td[5]')).getText()) !== "Enabled") return false;
        return true; 
    }

    async get_row(usrn: string){
        try{
            return await this.driver.findElement(By.xpath(`//td[@class='left']/a[text()='${usrn}']`)).findElement(By.xpath("./../.."));
        }
        catch(err){
            return null;
        }
    }

    async delete_user(usrn: string, employeen: string){
        const row =  await this.get_row(usrn);
        if(!row) return false;
        await row.findElement(By.xpath('td[1]/input')).click(); 
    
        await this.driver.findElement(this.deletebtn).click();
        await this.driver.findElement(this.confirmdeletebtn).click();
        await this.driver.sleep(4000);
    }
}

export default AdminPage;