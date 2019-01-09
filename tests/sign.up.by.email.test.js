let SignUpPage = require('../PageObjects/SignUpPage.js');


class SignUpByEmailTest {
    constructor(driver) {
        this.driver = driver;
        this.signUpPage = new SignUpPage(this.driver);

    }
    //learn^

    async runTest() {
        await this.signUpPage.findMailButton();
        await this.signUpPage.findMailField();
        await this.signUpPage.acceptLogin();
        await this.signUpPage.clickSignInButton();
        await this.signUpPage.finalElementFounded();
    }

}
module.exports = SignUpByEmailTest;
