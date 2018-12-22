let SignUpPage = require('../PageObjects/SignUpPage.js');

class SignUpByEmailTest {
    constructor(driver) {
        this.driver = driver;
        this.signUpPage = new SignUpPage(this.driver);

    }
    //learn^

    async runTest() {
        await this.signUpPage.findMailButton();
    }
}
module.exports = SignUpByEmailTest;