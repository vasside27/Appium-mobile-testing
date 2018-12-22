class SignUpPage {
    constructor(driver) {
        this.driver = driver;

    }

    async findMailButton(){
        let element = await this.driver.element("id", 'lu.f4a.app.dev:id/email_button');
        await element.click();
        console.log('HERMAN WAS HERE');
    }

   /*  async findMailinput(locator,mailValue) {
         await app.elementDisplayed("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText\n");
         await app.click();
         await app.setValue(mailValue);
     }

    async findGmailButton(locator) {
        await app.elementDisplayed(locator);
        await app.click(locator);
    }
 */
}
module.exports = SignUpPage;