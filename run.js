let wd  = require('wd');
let firstTest = require('./tests/sign.up.by.email.test');

(async function() {
    let driver = await wd.promiseChainRemote({
        host: '127.0.0.1',
        port: 4723
    });
    let desiredCaps = {
        platformName: 'Android',
        platformVersion: "9",
        deviceName: "b78ae403",
        app: 'C:/Users/User/WebstormProjects/untitled/app-dev-debug.apk',
        automationName: "UiAutomator2",
        appPackage: "lu.f4a.app.dev",
        appActivity: "com.bba.f4a.ui.Splash"
    };
    await driver.init(desiredCaps);
    let firstTestRun = new firstTest(driver);
    await firstTestRun.runTest();

})();



