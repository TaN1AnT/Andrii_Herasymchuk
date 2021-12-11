import { expect } from 'chai';
import 'mocha';
import { Builder, WebDriver } from 'selenium-webdriver';

import LoginPage from '../pages/loginpage';
import HomePage from '../pages/homepage';
import AdminPage from '../pages/adminpage';


describe('Test test', ()=> {

    let driver: WebDriver;
    let loginpage: LoginPage;
    let homepage: HomePage;
    let adminpage: AdminPage;


    before(async()=> {
        driver = await new Builder().forBrowser('chrome').build();
        loginpage = await new LoginPage(driver);
        homepage = await new HomePage(driver);
        adminpage = await new AdminPage(driver);
    });

    it('login test', async()=> {
        var url: string = 'https://opensource-demo.orangehrmlive.com/';
        await loginpage.go_to_URL(url);
        await loginpage.login_into('Admin', 'admin123');
        expect(await loginpage.get_URL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
    }).timeout(10000);

    it('open admin(users) page test', async()=> {
        await homepage.go_to_admin_menu();
        expect(await homepage.get_URL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers");
    }).timeout(15000);

    it('add user test', async()=> {
        var usrn =  'ddddddddd';
        var pass = 'ccccccccc' ;
        var employeen = 'Alice Duval' ;
        await adminpage.Add_User(usrn, pass, employeen);
        expect(await adminpage.check_user(usrn, employeen)).to.equal(true);
    }).timeout(15000);

    it('seach user test', async()=> {
        var usrn =  'ddddddddd';
        var employeen = 'Alice Duval' ;
        await adminpage.search_check_user(usrn, employeen);
        expect(await adminpage.check_user(usrn, employeen)).to.equal(true);
    }).timeout(15000);


    it('delete user test', async()=> {
        var homeurl = 'https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers';
        await adminpage.chech_is_URL(homeurl);
        var usrn =  'ddddddddd';
        var employeen = 'Alice Duval' ;
        await adminpage.delete_user(usrn, employeen);
        expect(await adminpage.check_user(usrn, employeen)).to.equal(false);
    }).timeout(15000);

    after(async()=> {
        await driver.quit();
    });

});
