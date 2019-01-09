let assert = require('chai').assert;
class SignUpPage {
    constructor(driver) {
        this.driver = driver;
    }

    async findMailButton(){
        await this.driver.setImplicitWaitTimeout(10000);
        let element = await this.driver.element("id", 'lu.f4a.app.dev:id/email_button');
        await element.click();
    }

     async findMailField() {
         await this.driver.setImplicitWaitTimeout(10000);
         // await this.driver.setPageLoadTimeout(10000);
         let element = await this.driver.element("id",'lu.f4a.app.dev:id/email');
         await element.click();
         await element.type("roma.zhelizniak@brainbeanapps.com");
     }

    async acceptLogin() {
        await this.driver.setImplicitWaitTimeout(10000);
        let element = await this.driver.element("id","lu.f4a.app.dev:id/button_next");
        await element.click();
    }

    async clickSignInButton() {
        await this.driver.setImplicitWaitTimeout(10000);
        let element = await this.driver.element("id","lu.f4a.app.dev:id/welcome_back_idp_button");
        await element.click();

    }

    async finalElementFounded() {
        await this.driver.setImplicitWaitTimeout(10000);
        let element =  await this.driver.element("id","lu.f4a.app.dev:id/got_it");
        //let elementText = await element.text().then(resp => resp);
        let elementText = await element.text();
        console.log(elementText);
        assert.equal(elementText,"GOT",["failed"]);
    }



//     a function getd() {
//         return 'data';
//     }
//
// {
//     getd()
//     .then(function(resp) {
//         const qqq = resp + 'qqq';
//         return qqq;
//     })
//     .catch(err => console.log(err))
// }






        // let element = await this.driver.element("id","lu.f4a.app.dev:id/app_name");
        // console.log(this.driver.element);



}
module.exports = SignUpPage;
